var c = document.getElementById("c1");
        var ctx = c.getContext("2d");
        //outer circle
        ctx.beginPath();
        ctx.arc(250,250,150,0,2*Math.PI);    
        ctx.lineWidth = 10;   
        ctx.stroke();
        ctx.fillStyle = "yellow";
        ctx.fill();
        //left eye
        ctx.beginPath();
        ctx.arc(190,215,15,0,2*Math.PI);    
        ctx.lineWidth = 7;   
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fill();
        //right eye
        ctx.beginPath();
        ctx.arc(310,215,15,0,2*Math.PI);  
        ctx.lineWidth = 7;   
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fill();
        //smile
        ctx.beginPath();
        ctx.arc(247, 275, 60, 0.4, 0.87 * Math.PI);   
        ctx.lineWidth = 7;   
        ctx.stroke();