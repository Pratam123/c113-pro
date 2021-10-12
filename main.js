function preload()
{

}
function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tintcolor="";

}



function draw()
    {
        imagee(video,0,0,640,480);
        tint(tintcolor);

    }
    function take_snapshot()
    {
        save('student.png');
    }
    function filter_tint()
    {
        tintcolor=document.getElementById("color_name").value;
    }
