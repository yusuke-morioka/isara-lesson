$(function(){
    //ここはsec14
    $('.sec14flowMenuTxtLp').hide();//まず内容を非表示

    $('.sec14flowMenuHeadLp').click(function(){
    //.sec14flowMenuHeadLpがクリックされたら
    
        $('.sec14flowMenuHeadLp').not(this).removeClass('sec14flowMenuHeadLpOpen');
        //クリックされているsec14flowMenuHeadLp以外のオープンクラスを外す。
        
        $('.sec14flowMenuHeadLp').not($(this)).next().slideUp();
        //クリックされたsec14flowMenuHeadLp以外をスライドアップで非表示。
        
        $(this).toggleClass('sec14flowMenuHeadLpOpen');
        //オープンクラスのオンオフスイッチ。
        
        $(this).next().slideToggle();
        //sec14flowMenuHeadLpをスライド、アップダウン。
    });




    //ここからはsec20
    $('.sec20Answer').hide();
    $('.sec20question').click(function(){
        $(this).toggleClass('sec20Open');
        $(this).next().slideToggle(250);
    });

 });