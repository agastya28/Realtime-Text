
noseX = 0;
noseY = 0;
yummr = ""

leftWristX = 0;
rightWristX = 0;
difference = 0;

function preload() {

}

function setup() {
    
video = createCapture(VIDEO);
video.size(560, 500)

canvas = createCanvas(600, 600)



poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("Pose Net Model is Loaded")
}



function draw() {
 background('#2b008f');
 fill('#884c91');
 textSize(difference);
 text(yummr, noseX, noseY)
 

 document.getElementById("square_side").innerHTML = "The Width and the Height of the Text is " + difference + " Pixels"




}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX)
        console.log(difference)

        console.log("Nose X = " + noseX + " Nose Y = " + noseY)
    }
}

function confirrrm() {
yummr = document.getElementById("yummytummy").value;
}