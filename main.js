
let video;
let poseNet;
let poses = [];

function setup() {
  canvas = createCanvas(500,450);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(640, 480);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', function(results) {
    poses = results;
  });
}

poseNet = ml5.poseNet(video, modelLoaded);
function modelLoaded() {
  console.log('Model Loaded!');
}

function draw() {
 
  image(video, 0, 0);

  
  if (poses.length > 0) {
    let leftHand = poses[0].pose.keypoints[9]; 
    let rightHand = poses[0].pose.keypoints[10]; 
  

    if (leftHand.position.y < rightHand.position.y) {
      playSong1();
     
      
    } 
    else
    {
      playSong2();
    
    }
  }
}
var a = document.getElementById("audio1");
var b = document.getElementById("audio2");

function playSong1() {
  b.pause();
	b.currentTime = 0;
  a.play();
  console.log("Song1 is playing");
  document.getElementById("songna").innerHTML = "Song Playing : A Melodious Tune"
 
}

function playSong2() {
  a.pause();
	a.currentTime = 0;
  b.play();
  console.log("Song2 is playing");
  document.getElementById("songna").innerHTML = "Song Playing : Lily by Alan Walker"
}
