function test() {
    window.setInterval(BckGroundMove, 1000);
    //BckGroundMove();
}
function BckGroundMove() {
    var imgElement = document.getElementById("id-img-background");
    var imgStyle = window.getComputedStyle(imgElement, null);
    //
    var strBot = imgStyle.bottom.replace("px", "");
    var numBot = Number(strBot);
    numBot = numBot - 10;
    imgElement.style.bottom = String(numBot) + "px";
    console.log(imgElement.style.bottom);
    //document.getElementById("id-img-background").style.bottom=bottom_num;
}
test();
