NoseX=0;
NoseY=0;

function preload()
{
party_hat = loadImage("https://i.postimg.cc/C5BHxVgs/Party-hat.png")
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
       
    }
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function draw()
{
image(video, 0, 0, 300, 300);
image(party_hat, NoseX-110, NoseY-180, 200, 100)
}

function take_snapshot()
{
    save('myFUNNYfilterpicture.png');
}