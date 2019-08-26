function test()
{
    window.setInterval(BckGroundMove,1000);
    //BckGroundMove();
}
function BckGroundMove() : any
{
    let imgElement : any = document.getElementById("id-img-background");
    let imgStyle : any = window.getComputedStyle(imgElement, null);
    //
    let strBot : string = imgStyle.bottom.replace("px", "");
    let numBot : number = Number(strBot);
    numBot = numBot - 10;
    imgElement.style.bottom = String(numBot) + "px";
    console.log(imgElement.style.bottom);
    //document.getElementById("id-img-background").style.bottom=bottom_num;
}
test();
