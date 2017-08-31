$(function (){
    $('#main').on('click', '#button1', function(){
        $('#cutin1').css({'margin-top':'-360px','margin-right':'490px'});
        $('#cutin2').css({'margin-top':'360px','margin-right':'0px'});
        $.when(
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


$(function (){
    $('#main').on('click', '#button2', function(){
        $('#cutin3').css({'margin-top':'-0px','margin-right':'640px'});
        $('#cutin4').css({'margin-top':'360px','margin-right':'0px'});
        $.when(
            $('#cutin3').animate({'margin-right':'0px'}, 100),
            $('#cutin4').animate({'margin-top':'0px'}, 100)
        ).done(function(){
                setTimeout(function(){
                    $('#cutin3').animate({'margin-top':'250px'}, 100);
                    $('#cutin3').animate({'margin-top':'240px'}, 30);
                    $('#cutin4').animate({'margin-right':'500px'}, 100);
                    $('#cutin4').animate({'margin-right':'490px'}, 30);
                },140);
        });
    });
});
