$(function (){
    $('#main').on('click', '#button1', function(){
        $('#cutin1').css({'top':'-360px','left':'0px'});
        $('#cutin2').css({'top':'360px','left':'490px'});
        var redTxt = $('#cutin2 > span:nth-child(1)').text();
        var sub = redTxt.substr(redTxt.length-2,1);
        $('#cutin2 > span:nth-child(1)').html(redTxt.replace(sub,'<span style="color:red">' + sub + '</span>'));
        $.when(
            $('#cutin1').animate({'top':'0px'}, 100),
            $('#cutin2').animate({'top':'0px'}, 100)
        ).done(function(){
                setTimeout(function(){
                    $('#cutin1').animate({'left':'500px'}, 100);
                    $('#cutin1').animate({'left':'490px'}, 30);
                    $('#cutin2').animate({'left':'-10px'}, 100);
                    $('#cutin2').animate({'left':'0px'}, 30);
                },140);
        });
    });
});


$(function (){
    $('#main').on('click', '#button2', function(){
        $('#cutin3').css('text-align','left');
        $('#cutin3').css({'top':'0px','left':'-640px'});
        $('#cutin4').css({'top':'360px','left':'490px'});
        var redTxt = $('#cutin4 > span:nth-child(1)').text();
        var sub = redTxt.substr(redTxt.length-2,1);
        $('#cutin4 > span:nth-child(1)').html(redTxt.replace(sub,'<span style="color:red">' + sub + '</span>'));
        $.when(
            $('#cutin3').animate({'left':'0px'}, 100),
            $('#cutin4').animate({'top':'0px'}, 100)
        ).done(function(){
                setTimeout(function(){
                    $('#cutin3').css('text-align','right');
                    $('#cutin3').animate({'top':'250px'}, 100);
                    $('#cutin3').animate({'top':'240px'}, 30);
                    $('#cutin4').animate({'left':'-10px'}, 100);
                    $('#cutin4').animate({'left':'0px'}, 30);
                },140);
        });
    });
});
