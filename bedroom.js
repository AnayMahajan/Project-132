status= "";
function setup()
{
    canvas= createCanvas(600, 400);
    canvas.center();
    canvas.background("cyan");
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML= "Status: Bed, chair ";
}
function preload()
{
    img = loadImage('Bedroom_img.jpg');
}
function draw()
{
    image(img, 0 , 0, 600, 400);
    fill("red");
}
function modelLoaded()
{
    console.log("Model Loaded");
    status= true;
    objectDetector.detect(img, gotResult)
}
function gotResult()
{
    console.log(results);
}
