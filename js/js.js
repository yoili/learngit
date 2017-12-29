/*返回最顶部*/
function rtop(time) {
    if(time == null){
        time = 500
    }
    try{
        if(typeof time != 'number') throw "值不是一个number类型";
        if(time <= 0) throw "值太小";
    }catch(err){
        throw new Error('错误:' + err);
    }

    $('html,body').stop().animate({scrollTop: 0+'px'},time);
}

function side_wechat(node,time,boolean) {
    if(boolean == null){
        boolean = false;
    }

    if(time == null){
        time = 300
    }

    if(boolean == null){
        boolean = true
    }

    try{
        if(typeof boolean != 'boolean') throw "不是布尔值";
        if(node == null) throw "node为空";
        if(typeof time != 'number') throw "值不是一个number类型";
        if(time <= 0) throw "值太小";
        if(typeof node != 'object') throw "参数不是一个Object类型";
    }catch(err){
        throw new Error('错误:' + err);
    }
    node = node.find('.side-code');
    if(boolean == true){
        node.stop(true,false).css({
            visibility:'visible'
        }).animate({
            right:'102%',
            opacity:1
        },time);
    }else{
        node.stop(true,false).animate({
            right:'0%',
            opacity:0
        },time,function () {
            $(this).css({
                visibility:'hidden'
            })
        });
    }
}

$(function () {
    $('.side-rtop').click(function () {
        rtop();
    });
    $('.side-wechat').hover(function () {
        var node = $(this);
        side_wechat(node,300,true);
    },function () {
        var node = $(this);
        side_wechat(node,300,false);
    });
});