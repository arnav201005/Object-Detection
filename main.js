img = "";
status = "";
object = [];

function preload()
{
img = loadImage(dog_cat.jpeg);

}
function setup()
{
canvas=createCanvas(340,320);
canvas.center();
video =createCapture(VIDEO);
video.hide();
video.size(340,320);
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML ='status--detectingobject';





}
function draw()
{
image(video,0,0,340,320);
if(status != ""){
  objectDetector.detect(video,gotResult);
  r = random(255);
  g = random(255);
  b = random(255);
  for( i=0;i<object.length; i++){
    document.getElementById("status").innerHTML ='status = object detected';
    document.getElementById("object_length").innerHTML ='objectdetected = '+ objects.length;
    fill(r, g, b);
    stroke(r, g, b);
    percent = floor(object[i].confidence*100);
    text(object[i].label +""+ percent+"%",object[i].x,object[i].y);
    noFill();
    stroke(r, g, b);
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
    

  }
}

}
function modelLoaded()
{
    console.log("modelisloaded");
    status=true;
  objectDetector.detect(video,gotResult);
}
function gotResult(error,results)
{
    if(error){
        console.log(error);

    }
   console.log(results);
   object = results;

}


