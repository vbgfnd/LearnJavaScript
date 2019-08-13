function test() {
    window.setInterval(BckGroundMove(), 1000);
}
function BckGroundMove() {
    var ele = document.getElementById("id-img-background");
    var img_style = window.getComputedStyle(ele, null);
    console.log(img_style.bottom);
    console.log("ddd");
    //document.getElementById("id-img-background").style.bottom=bottom_num;
}
test();
