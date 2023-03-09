function myMap() {
     var mapProp = {
         center:new google.maps.LatLng(51.508742,-0.120850),
         zoom:5,
     };
     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

     var marker = new google.maps.Marker({position: myCenter});

     marker.setMap(map);
     var infowindow = new google.maps.InfoWindow({
   content:"Hello World!"
 });

 infowindow.open(map,marker);
 }

 function collap(){
 var coll = document.getElementsByClassName("collapsible");

     for (i = 0; i < coll.length; i++) {
         coll[i].addEventListener("click", function() {
           this.classList.toggle("active");
           var content = this.nextElementSibling;
           if (content.style.display === "block") {
             content.style.display = "none";
           } else {
             content.style.display = "block";
           }
         });
 }
 var i;
}

