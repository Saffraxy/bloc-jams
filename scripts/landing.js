var pointsArray = document.getElementsByClassName('point');
 
var animatePoints = function(points) {           
     
    /*Refactor the individual style calls of the landing.js script to be a single function named revealPoint that:
    takes a single argument: the index of the points class node element, and
    gets called in a for loop.*/
    
    var revealPoint = function(indx) {
             points[indx].style.opacity = 1;
             points[indx].style.transform = "scaleX(1) translateY(0)";
             points[indx].style.msTransform = "scaleX(1) translateY(0)";
             points[indx].style.WebkitTransform = "scaleX(1) translateY(0)"; 
    };
    
    for (var i=0; i < points.length; i++) {
        revealPoint(i);
    };
};

 window.onload = function() {
     // Automatically animate the points on a tall screen where scrolling can't trigger the animation
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
     
      var sellingPoints = document.getElementsByClassName('selling-points')[0];
     
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

      window.addEventListener('scroll', function(event) {
      console.log("Current offset from the top is " + sellingPoints.getBoundingClientRect().top + " pixels");
          
      if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
          animatePoints(pointsArray);
      }
     });
 }