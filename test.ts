function test() : any
{
    //window.setInterval(BckGroundMove,1000);
    console.log("111");
    //BckGroundMove();
}
function test1() : any
{
    console.log("222");
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

function GetElementPos(element)
{
    let dv : any = document.getElementById("display");
    let dv1 : any = document.getElementById("display1");
    let actualLeft : any = element.offsetLeft;
    let current : any = element.offsetParent;
    console.log(current);
    console.log(actualLeft);
    while(current !== null)
    {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }

    let actualY : any = element.offsetTop;
    let currentY : any = element.offsetParent;
    console.log(currentY);
    console.log(actualY);
    while(currentY !== null)
    {
        actualY += currentY.offsetTop;
        currentY = currentY.offsetParent;
    }
    dv.innerHTML = ("X,Y=(" + actualLeft + "," + actualY + ")");
    dv1.innerHTML = ("X,Y=(" + actualLeft + "," + actualY + ")");
}     
