$(function (){
    $('#main').on('click', '#button', function(){
        $('#cutin1').css({'margin-top':'-360px','margin-right':'490px'});
        $('#cutin2').css({'margin-top':'360px','margin-right':'0px'});
        $.when(
            //$('#board').animate({'height':'1px'}, 80)
            $('#cutin1').animate({'margin-top':'0px'}, 100),
            $('#cutin2').animate({'margin-top':'0px'}, 100)
        ).done(function(){
                setTimeout(function(){
                    $('#cutin1').animate({'margin-right':'-10px'}, 100);
                    $('#cutin1').animate({'margin-right':'0px'}, 30);
                    $('#cutin2').animate({'margin-right':'500px'}, 100);
                    $('#cutin2').animate({'margin-right':'490px'}, 30);
                },140);
        });
    });
});


