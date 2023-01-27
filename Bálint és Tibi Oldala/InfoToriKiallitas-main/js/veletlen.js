
function offsetDevice(left,top,w,h, element) {
    return left+w<element.width() && top+h<700;
}

$(document).ready(function(){

    function random(szorzat, novekmeny, modulo, kezdet, hanyadik) {
        next=kezdet;
        for (let index = 0; index <hanyadik; index++) {
            next=(szorzat*next+novekmeny)%modulo;
        }
        
        return next;
    }
    
    function Collusion(left,top,w,h, element) {
        
        let getAllItem=element.find(".info-item");
        for (let index = 0; index < getAllItem.length; index++) {
            // console.log(left,top,w,h,getAllItem[index].offsetLeft,getAllItem[index].offsetTop);
            if (left>getAllItem[index].offsetLeft && 
                left <getAllItem[index].offsetLeft+getAllItem[index].offsetWidth &&
                top>getAllItem[index].offsetTop && 
                top <getAllItem[index].offsetTop+getAllItem[index].offsetHeight  ||
                
    
                left+w>getAllItem[index].offsetLeft && 
                left+w<getAllItem[index].offsetLeft+getAllItem[index].offsetWidth &&
                top>getAllItem[index].offsetTop && 
                top <getAllItem[index].offsetTop+getAllItem[index].offsetHeight  ||
    
                left>getAllItem[index].offsetLeft && 
                left<getAllItem[index].offsetLeft+getAllItem[index].offsetWidth &&
                top+h>getAllItem[index].offsetTop && 
                top+h<getAllItem[index].offsetTop+getAllItem[index].offsetHeight  ||
    
                left+w>getAllItem[index].offsetLeft && 
                left+w <getAllItem[index].offsetLeft+getAllItem[index].offsetWidth &&
                top+h>getAllItem[index].offsetTop && 
                top+h <getAllItem[index].offsetTop+getAllItem[index].offsetHeight) {
                    // console.log(true);
                return true;
            }
            
        }
    
    
        // console.log(false);
        return false;
    
    }
    console.log($("div[data-time]"));
    $("div[data-time]").each(function() {
        var itemek=$(this).find(".info-item");
        console.log(itemek.length);
        let i=0;
        for (let index = 0; index < itemek.length; index++) {

            var year=$(this).data().time.toString().substring(0,4);
            console.log($(this).width());
            do {
                ujLeft=random(1664525,1013904223,Math.pow(2,32),year,index+i)% (1920-itemek[index].offsetWidth-50);
                ujTop=random(1664525,1013904223,Math.pow(2,32),year,index+i)% (700-itemek[index].offsetHeight-50);
                i++;
            } while(!offsetDevice(ujLeft,ujTop,itemek[index].offsetWidth,itemek[index].offsetHeight,$(this))
                    || Collusion(ujLeft,ujTop,itemek[index].offsetWidth,itemek[index].offsetHeight,$(this)));
        
            itemek[index].style.left=ujLeft+"px";
            itemek[index].style.top=ujTop+"px";
        }
        // console.log("-----------");
    });

    // getAllInfoItem.each(function(index){
    // let i=0;
    // // console.log($(this).parent().width(),$(this).parent().height());
    // do {
    //     ujLeft=random(1664525,1013904223,Math.pow(2,32),$(this).parent().data().time,index+i)% ($(this).parent().width()-$(this).width()-50);
    //     ujTop=random(1664525,1013904223,Math.pow(2,32),$(this).parent().data().time,index+i)% ($(this).parent().height()-$(this).height()-50);
    //     i++;
    //     col=Collusion(ujLeft,ujTop,$(this).width(),$(this).height(),$(this));
    //     // console.log(ujLeft,ujTop,col,offsetDevice(ujLeft,ujTop,$(this).width(),$(this).height(),$(this)));
    // } while(!offsetDevice(ujLeft,ujTop,$(this).width(),$(this).height(),$(this)) || Collusion(ujLeft,ujTop,$(this).width(),$(this).height(),$(this)));

    // // console.log(ujLeft,ujTop);
    // $(this).css("left", ujLeft);
    // $(this).css("top", ujTop);

    // console.log($(this).parent().data().time);
    // console.log($(this).parent().parent().width());
    // console.log($(this).parent().parent().height());
    // console.log($(this).parent().parent());
    // console.log($(this).position());
    
    // });
});