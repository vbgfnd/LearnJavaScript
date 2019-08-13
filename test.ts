function test()
{
    window.setInterval(BckGroundMove(),1000);
}
function BckGroundMove() : any
{
    let ele : any = document.getElementById("id-img-background");
    let img_style : any = window.getComputedStyle(ele, null);
    console.log(img_style.bottom);
    console.log("ddd");
    //document.getElementById("id-img-background").style.bottom=bottom_num;
}
test();
