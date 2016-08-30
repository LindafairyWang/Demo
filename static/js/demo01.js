/**
 * Created by wanglingna on 16/8/29.
 */
var sub = new Hammer(document.getElementById("sub-con"));
var subcon = $(".sub-con");
moveCard(sub,subcon);
function moveCard(a,b){
    var _width = b.width();
    var num;
    a.on("panstart",function(d){
        num = parseInt(b.css('left'));
    });
    a.on("pan",function(e){
        var delta = num + e.deltaX;
        if(delta < 10 && delta > -(_width-screen.width+10)){
                b.css("left", delta);
        }
    });
}

