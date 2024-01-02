#!/bin/bash

filename=$(basename -- "$1")
extension="${filename##*.}"
filename="${filename%.*}"
echo "------ COMPILING --------"
g++ -Wall -Wextra "$1" -o "$filename"
echo "------ COMPILED --------"
echo "------ RUNNING --------"
./"$filename"