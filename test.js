function test() {
    //window.setInterval(BckGroundMove,1000);
    console.log("111");
    //BckGroundMove();
}
function test1() {
    console.log("222");
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
function GetElementPos(element) {
    var dv = document.getElementById("display");
    var dv1 = document.getElementById("display1");
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    console.log(current);
    console.log(actualLeft);
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    var actualY = element.offsetTop;
    var currentY = element.offsetParent;
    console.log(currentY);
    console.log(actualY);
    while (currentY !== null) {
        actualY += currentY.offsetTop;
        currentY = currentY.offsetParent;
    }
    dv.innerHTML = ("X,Y=(" + actualLeft + "," + actualY + ")");
    dv1.innerHTML = ("X,Y=(" + actualLeft + "," + actualY + ")");
}
