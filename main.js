status = "";

function preload(){
    img = loadImage("ac.png");
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    video = createVideo(VIDEO);
    video.hide();
}

function start(){
   objectDetection = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status: Detecting Objects";
   value = getElementById("objectName").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}

function draw(){
    image(video,0,0,500,400);
}

function gotResult(error,results){
    if(error){
       console.log(error);
    }
    console.log(results);
    objects = results;
 }