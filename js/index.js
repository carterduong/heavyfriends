$(document).ready(function() {
    var x = Math.floor((Math.random() * 90) + 1);
    var y = Math.floor((Math.random() * 90) + 1);
    var skew = "skew(" + x.toString() + "deg," + y.toString() + "deg);";
    var s = "skew(20deg, 20deg)";
    document.getElementById("name").style.transform = skew;

    var x = Math.floor((Math.random() * 90) + 1);
    var y = Math.floor((Math.random() * 90) + 1);
    var skew = "skew(" + x + "deg," + y + "deg);";
    document.getElementById("name").style.transform = skew;
    console.log(document.getElementById("name").style.transform);

    /*
    var fun = setInterval(function(){
        var x = Math.floor((Math.random() * 90) + 1);
        var y = Math.floor((Math.random() * 90) + 1);
        var skew = "skew(" + x + "deg," + y + "deg);";
        document.getElementById("name").style.transform = skew;
        console.log(document.getElementById("name").style.transform);
        //console.log(skew);
    }, 100);*/

});

function getRandomSkew() {
    var x = Math.floor((Math.random() * 90) + 1);
    var y = Math.floor((Math.random() * 90) + 1);
    var skew = "skew(" + x + "deg," + y + "deg);";
    return skew;
}