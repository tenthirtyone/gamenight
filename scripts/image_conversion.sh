#/bin/bash

for i in `ls *.png`; do                                                      hayek@Rothbard
convert $i ${i%.png}.jpg
done
