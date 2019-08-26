function test() {
    window.setInterval(BckGroundMove, 10000);
}
function BckGroundMove() {
    var imgElement = document.getElementById("id-img-background");
    var imgStyle = window.getComputedStyle(imgElement, null);
    console.log(Object.prototype.toString.call(imgStyle.bottom));
    //document.getElementById("id-img-background").style.bottom=bottom_num;
}
test();
