var w;
function startWorker() 
{
    if (typeof (Worker)!=="undefined") 
    {
        if (typeof (w)=="undefined") 
        {
            w=new Worker("demo_workers.js");
        }
        w.onmessage=function (event) 
        {
            document.getElementById("result").innerHTML=event.data;
        }
    } else 
    {
        document.getElementById("result").innerHTML="Browser does not support Web worker api";
    }
}

function stopWorker() 
{
    w.terminate();
    w=undefined;
}