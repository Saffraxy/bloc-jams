var forEach = function(myarray, callback) {    
    for (var i=0; i < myarray.length; i++) {
        callback(myarray[i]);
    };
};