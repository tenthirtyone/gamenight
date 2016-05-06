(function() {
'use strict';

angular.module('gamenight')
	.directive('tabletop', tabletop);

function tabletop(TabletopService) {
	return {
		template: '<canvas tabindex=1 id="tabletopCanvas"></canvas>',
		scope: {},
		link: function(scope, element, attrs) {
			var myCanvas = document.getElementById("tabletopCanvas");
			var ctx = myCanvas.getContext('2d');
			var offscreenCanvas = document.createElement('canvas');
			var offscreenCtx = offscreenCanvas.getContext('2d');
			var img = new Image;
			var img2 = new Image;

			var lastX = myCanvas.width / 2,
					lastY = myCanvas.height / 2;
			var dragStart, dragged, midDown;
			var scaleFactor = 1.1;
			var showGrid = true;
			var dragImage = false;
			var selectedImage = TabletopService.getSelectedImage;
			var selectedImageOffset = [];
			var gridColor = TabletopService.getGridColor() || '#333333';
			var gridSize = tabletop.gridSize || 50;
			var showGrid = TabletopService.showGrid() || true;
			var snapGrid = TabletopService.snapGrid || true;
			var bgColor = TabletopService.getBGColor() || '#fefefe';
			var images = TabletopService.getImages() || [];			
			var currentScale = 1;
			var scaleGridSize = Number(gridSize);
			var imgStartX = 200;
			var imgStartY = 200;

			scope.$watch(function() {
				return gridSize
			}, function(newValue, oldValue) {
				if (newValue)
					redraw();
			}, true);

			scope.$watch(function() {
				return TabletopService.showGrid()
			}, function(newValue, oldValue) {
				showGrid = TabletopService.showGrid();
				redraw();
			}, true);

			scope.$watch(function() {
				return TabletopService.snapGrid()
			}, function(newValue, oldValue) {
				snapGrid = TabletopService.snapGrid();
				redraw();
			}, true);

			scope.$watch(function() {
				return TabletopService.getBGColor()
			}, function(newValue, oldValue) {
				bgColor = TabletopService.getBGColor();
				redraw();
			}, true);

			scope.$watch(function() {
				return TabletopService.getGridColor()
			}, function(newValue, oldValue) {
				//console.log('grid changed in directive');
				gridColor = TabletopService.getGridColor();
				redraw();
			}, true);

			function addImage(src) {
				var img = new Image();
				img.src = src;
				
				//Get initial placement
				var point = ctx.transformedPoint(lastX, lastY)
				if (snapGrid) {
					point.x = Math.round(point.x / gridSize) * gridSize
					point.y = Math.round(point.y / gridSize) * gridSize
				}
				
				img.onload = function() {
					images.push({
						src: src,
						x: point.x || lastX,
						y: point.y || lastY,
						width: img.width,
						height: img.height
					});
					TabletopService.syncImages(images);
				}
				redraw();
			}

			function clearCanvas() {
				var p1 = ctx.transformedPoint(0, 0);
				var p2 = ctx.transformedPoint(myCanvas.width, myCanvas.height);
				ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
			}

			function drawGrid() {
				var p1 = ctx.transformedPoint(0, 0);
				var p2 = ctx.transformedPoint(myCanvas.width, myCanvas.height);

				ctx.lineWidth = 1;

				var startx = -Math.round(myCanvas.width / gridSize) * gridSize
				var starty = -Math.round(myCanvas.height / gridSize) * gridSize
				var startx = -1000 * gridSize
				var starty = -1000 * gridSize

				for (var i = startx; i < p2.x; i += gridSize) {
					ctx.beginPath();
					ctx.moveTo(i, p1.y);
					ctx.lineTo(i, (p2.y));
					ctx.strokeStyle = gridColor;
					ctx.stroke();
				}

				for (var i = starty; i < p2.y; i += gridSize) {
					ctx.beginPath();
					ctx.moveTo(p1.x, i);
					ctx.lineTo((p2.x), i);
					ctx.strokeStyle = gridColor;
					ctx.stroke();
				}
			}

			function drawBGColor() {
				var p1 = ctx.transformedPoint(0, 0);
				var p2 = ctx.transformedPoint(myCanvas.width, myCanvas.height);
				ctx.fillStyle = bgColor;
				ctx.fillRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
			}

			function drawImages() {
				ctx.save();
				for (var i = 0; i < images.length; i++) {
					var img = new Image();
					img.src = images[i].src;
					ctx.drawImage(img, images[i].x, images[i].y);
				}
				ctx.restore();
			}

			function drawSelectionOutline() {
				ctx.fillStyle = "#222222";
				ctx.beginPath();
				ctx.lineWidth = 2;
				ctx.strokeRect(selectedImage.x, selectedImage.y, selectedImage.width, selectedImage.height);

				ctx.beginPath();
				ctx.fillRect(selectedImage.x - 5, selectedImage.y - 5, 10, 10);
				ctx.beginPath();
				ctx.fillRect(selectedImage.x + selectedImage.width - 5, selectedImage.y + selectedImage.height - 5, 10, 10);
				ctx.beginPath();
				ctx.fillRect(selectedImage.x - 5, selectedImage.y + selectedImage.height - 5, 10, 10);
				ctx.beginPath();
				ctx.fillRect(selectedImage.x + selectedImage.width - 5, selectedImage.y - 5, 10, 10);
				ctx.beginPath();
				ctx.fillRect((selectedImage.x + selectedImage.width / 2 - 2), selectedImage.y, 4, -18);
				ctx.beginPath();
				ctx.arc((selectedImage.x + selectedImage.width / 2), selectedImage.y - 25, 7, 2 * Math.PI, false);
				ctx.stroke();
			}

			function forceApply() {
				TabletopService.scopeApply();	
			}
			
			function handleScroll(evt) {
				var delta = evt.wheelDelta ? evt.wheelDelta / 160 : evt.detail ? -evt.detail : 0;
				//console.log(delta);
				if (midDown) {
					//scrolling and mid mouse down
					//console.log('gotcha');

					if (selectedImage) {
						//Move the selected image 
						if (delta > 0) {

							for (var i = 0; i < images.length; i++) {
								//var c = document.createElement('canvas');
								if (selectedImage === images[i]) {
									//check for zero
									if (i>0) {
										var tmp = images[i-1];
										images[i-1] = images[i];
										images[i] = tmp;
										redraw();
									}
								}
							}								

						} else {
							// Pull to front
							for (var i = 0; i < images.length; i++) {
								//var c = document.createElement('canvas');
								if (selectedImage === images[i]) {
									//check for zero
									
									if (i<images.length-1) {
										var tmp = images[i+1];
										images[i+1] = images[i];
										images[i] = tmp;
										redraw();
									}
								}
							}										
						}
					}
				} else {

					if (delta) zoom(delta);
					return evt.preventDefault() && false;
				}
			};

			function imageAtCoordinates() {
				var point = ctx.transformedPoint(lastX, lastY);
				var tmpImg = '';
				
				for (var i = 0; i < images.length; i++) {
					if (point.x > images[i].x && point.x < (images[i].x + images[i].width)) {
						if (point.y > images[i].y && point.y < (images[i].y + images[i].height)) {
							tmpImg = images[i];
						}
					}
				}
				return tmpImg;
			}

			function keyPress(e) {
				
				switch (e.which) {
					case 46:
				
						if (selectedImage) {
								for (var i = 0; i < images.length; i++) {
								//var c = document.createElement('canvas');
								if (selectedImage === images[i]) {
									images.splice(i, 1);
									selectedImage = null;
									redraw();
								}
							}	
						}
				}
			};
			
			function redraw() {

				// Clear the entire canvas
				clearCanvas();
				drawBGColor();
				drawImages();

				if (showGrid) {
					drawGrid();
				}

				if (selectedImage) {
					//console.log('draw selection outline');
					drawSelectionOutline();
				}
			}

			function resizeCanvas() {
				
				myCanvas.width = screen.width;
				myCanvas.height = screen.height;

				/*           
				$(canvas).css({
										"height": window.innerHeight,
										"width": window.innerWidth
				});       
				*/

				ctx = myCanvas.getContext('2d');

				trackTransforms(ctx)
				redraw()
			}			
		
			function trackTransforms(ctx) {
				var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
				var xform = svg.createSVGMatrix();
				ctx.getTransform = function() {
					return xform;
				};

				var savedTransforms = [];

				var save = ctx.save;
				ctx.save = function() {
					savedTransforms.push(xform.translate(0, 0));
					return save.call(ctx);
				};
				var restore = ctx.restore;
				ctx.restore = function() {
					xform = savedTransforms.pop();
					return restore.call(ctx);
				};

				var scale = ctx.scale;
				ctx.scale = function(sx, sy) {
					
				xform = xform.scaleNonUniform(sx, sy);					
				return scale.call(ctx, sx, sy);
					
				};
				var rotate = ctx.rotate;
				ctx.rotate = function(radians) {
					xform = xform.rotate(radians * 180 / Math.PI);
					return rotate.call(ctx, radians);
				};
				var translate = ctx.translate;
				ctx.translate = function(dx, dy) {
					xform = xform.translate(dx, dy);
					return translate.call(ctx, dx, dy);
				};
				var transform = ctx.transform;
				ctx.transform = function(a, b, c, d, e, f) {
					var m2 = svg.createSVGMatrix();
					m2.a = a;
					m2.b = b;
					m2.c = c;
					m2.d = d;
					m2.e = e;
					m2.f = f;
					xform = xform.multiply(m2);
					return transform.call(ctx, a, b, c, d, e, f);
				};
				var setTransform = ctx.setTransform;
				ctx.setTransform = function(a, b, c, d, e, f) {
					xform.a = a;
					xform.b = b;
					xform.c = c;
					xform.d = d;
					xform.e = e;
					xform.f = f;
					return setTransform.call(ctx, a, b, c, d, e, f);
				};
				var pt = svg.createSVGPoint();
				ctx.transformedPoint = function(x, y) {
					pt.x = x;
					pt.y = y;
					return pt.matrixTransform(xform.inverse());
				}
			}

			function zoom(clicks) {
				

				var factor = Math.pow(scaleFactor, clicks);
				if (currentScale < .1 && factor < 1) { return };
				if (currentScale > 10 && factor > 1) { return };
				
				var pt = ctx.transformedPoint(lastX, lastY);
				ctx.translate(pt.x, pt.y);
				
				currentScale *= factor;
				console.log(currentScale);
				ctx.scale(factor, factor);
				ctx.translate(-pt.x, -pt.y);
				redraw();
			}

			myCanvas.addEventListener('contextmenu', function(e) {
					if (e.button === 2) {
					 e.preventDefault();
							dragStart = ctx.transformedPoint(lastX, lastY);
							dragged = false;
						return false;
					}
			}, false);			
			
			myCanvas.addEventListener('DOMMouseScroll', handleScroll, false);

			myCanvas.addEventListener("dragover", function(evt) {
				evt.preventDefault();
			}, false);

			myCanvas.addEventListener('drop', function(evt) {

				var files = evt.dataTransfer.files;
				if (files.length > 0) {

					var file = files[0];
					if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -1) {
						var reader = new FileReader();
						reader.onload = function(evt) {
							//console.log('adding image');

							addImage(evt.target.result);

						};

						reader.readAsDataURL(file);
					}
				} else {
					var file = TabletopService.addDraggedImage();	

				}
				evt.preventDefault();
				TabletopService.clearDraggedImage();
			})			

			myCanvas.addEventListener('keydown', keyPress, true);
			
			myCanvas.addEventListener('mousedown', function(evt) {
				evt.preventDefault

				selectedImage = null;
				var point = ctx.transformedPoint(lastX, lastY);
				switch (evt.which) {
					case 1:
						//console.log('left mouse click');
						console.log(lastX, lastY);
						console.log(ctx.transformedPoint(lastX, lastY).x, ctx.transformedPoint(lastX, lastY).y);
						selectedImage = imageAtCoordinates();
						if (selectedImage) {
							dragImage = true;
							selectedImageOffset = {
								x: selectedImage.width - (selectedImage.width - (point.x - selectedImage.x)),
								y: selectedImage.height - (selectedImage.height - (point.y - selectedImage.y))
							};
						} else {
							dragStart = ctx.transformedPoint(lastX, lastY);
							dragged = false;
						}
						break;
					case 2:
						console.log('middle click');
						midDown = true;
						selectedImage = imageAtCoordinates();
						/*
						document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = 'none';
						lastX = evt.offsetX || (evt.pageX - canvas.offsetLeft);
						lastY = evt.offsetY || (evt.pageY - canvas.offsetTop);

						snapGrid = false;
						console.log('tmp: ' + tmpSnapGrid);
						dragStart = ctx.transformedPoint(lastX,lastY);
						dragged = false;                                
						*/
						break;
					case 3:
						console.log('right click');

						break;

					default:
						//console.log('something is broken');
						break;
				}
				//snapGrid = tmpSnapGrid;
				redraw();
			}, false);

			myCanvas.addEventListener('mousemove', function(evt) {

				lastX = evt.offsetX || (evt.pageX - myCanvas.offsetLeft);
				lastY = evt.offsetY || (evt.pageY - myCanvas.offsetTop);
				dragged = true;

				if (dragImage) {
					var point = ctx.transformedPoint(lastX, lastY);
					if (snapGrid) {
						//console.log('snapping');
						selectedImage.x =
							Math.round((point.x - (selectedImageOffset.x)) / gridSize) * gridSize;
						selectedImage.y =
							Math.round((point.y - (selectedImageOffset.y)) / gridSize) * gridSize;
					} else {
						selectedImage.x = point.x - (selectedImageOffset.x);
						selectedImage.y = point.y - (selectedImageOffset.y);
					}
				} else {

					if (dragStart && !snapGrid) {
						var pt = ctx.transformedPoint(lastX, lastY);
						
						ctx.translate(pt.x - dragStart.x, pt.y - dragStart.y);
						redraw();

					}

					if (dragStart && snapGrid) {
						var pt = ctx.transformedPoint(lastX, lastY);
						//console.log('last coords: ' + lastX + ' ' + lastY);
						//console.log('\t pt: ' + pt.x + ' ' + pt.y);
						//console.log('dragStart coords: ' + dragStart.x + ' ' + dragStart.y);
						//console.log((Math.round((pt.x - dragStart.x) / gridSize) * (gridSize / 4)), (Math.round((pt.y - dragStart.y) / gridSize) * (gridSize / 4)));
						ctx.translate((Math.round((pt.x - dragStart.x) / gridSize) * (gridSize / 4)), (Math.round((pt.y - dragStart.y) / gridSize) * (gridSize / 4)));
					}
				}
				redraw();
			}, false);

			myCanvas.addEventListener('mouseup', function(evt) {
				dragStart = null;
				dragImage = null;
				midDown = null;
				//if (!dragged) zoom(evt.shiftKey ? -1 : 1 );
			}, false);

			myCanvas.addEventListener('mousewheel', handleScroll, false);			
			
			trackTransforms(ctx);

			redraw();
			
			resizeCanvas();

		}
	}
}
}());