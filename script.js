function preload(){

}

function setup(){
canvas = createCanvas(640, 480);
canvas.position(110, 257);
video = createCapture(VIDEO);
video.hide();
tint_color = "";
}

function draw() {
image(video, 0, 0, 640, 480);
tint(tint_color);
}
 
function take_snapshot() {
    save('TintedSelfie.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}


function draw() {
    image(img,10,10,150,120);
      fill(255,255,255);
      stroke(0,0,0);
     square(110, 257, 600)
    }