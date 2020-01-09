# 2020-01-08 try wa

sudo git clone https://github.com/emscripten-core/emsdk.git
cd emsdk/
sudo git pull
sudo ./emsdk install latest
sudo ./emsdk activate latest
source ./emsdk_env.sh

sudo ./emcc -v


sudo ./emcc tests/hello_world.c
node a.out.js
cat a.out.js 

sudo ./emcc tests/hello_world.c -o hello.html

python2 -m SimpleHTTPServer 8081
