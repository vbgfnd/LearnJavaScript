function test()
{
    //window.setInterval(BckGroundMove,10000);
    BckGroundMove();
}
function BckGroundMove() : any
{
    let imgElement : any = document.getElementById("id-img-background");
    let imgStyle : any = window.getComputedStyle(imgElement, null);
    //del 'px' in strBot
    let strBot : string = imgStyle.bottom.replace("px", "");
    let intBot : number = Number(strBot);
    console.log(Object.prototype.toString.call(intBot));

    //document.getElementById("id-img-background").style.bottom=bottom_num;
}
test();
