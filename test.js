function test() {
<<<<<<< HEAD
    window.setInterval(BckGroundMove, 10000);
=======
    window.setInterval(BckGroundMove, 1000);
    //BckGroundMove();
>>>>>>> 1a8b6f65d3ad783e93cd84a77ef159eb3b37a2be
}
function BckGroundMove() {
    var imgElement = document.getElementById("id-img-background");
    var imgStyle = window.getComputedStyle(imgElement, null);
<<<<<<< HEAD
    console.log(Object.prototype.toString.call(imgStyle.bottom));
=======
    //
    var strBot = imgStyle.bottom.replace("px", "");
    var numBot = Number(strBot);
    numBot = numBot - 10;
    imgElement.style.bottom = String(numBot) + "px";
    console.log(imgElement.style.bottom);
>>>>>>> 1a8b6f65d3ad783e93cd84a77ef159eb3b37a2be
    //document.getElementById("id-img-background").style.bottom=bottom_num;
}
test();
