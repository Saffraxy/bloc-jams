var animatePoints = function() {

             var points = document.getElementsByClassName('point');
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
