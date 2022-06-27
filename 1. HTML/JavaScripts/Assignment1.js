var x=document.getElementById("div");
        function getLocation(){
            if(navigator.geolocation)
            {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
            else
            {
                x.innerHTML="GeolLocation is not supported by browser";
            }
        }
        function showPosition(position) 
        {
            x.innerHTML="Latitude : " + position.coords.latitude + "<br>Longitude : " + position.coords.longitude;
        }