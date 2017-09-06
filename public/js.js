<<<<<<< HEAD
$(document).ready(function(){
    $('#main').on('click', '#execute > #button1', function(){
        var radioVal = $('input[name="type"]:checked').val();

        erase_screenshot();
        positionReset();
        $('.cutin').css('display','table');
=======
$(function (){
    $('#main').on('click', '#button1', function(){

        erase_screenshot();
        positionReset();
        $('#box1,#box2').css('display','table');

        var radioVal = $('input[name="type"]:checked').val();
>>>>>>> 59431d4009b65d4c1ff2f5973c17c60a7c684d26
        switch (radioVal){
            case "A":
                animeA();
                break;
            case "B":
                animeB();
                break;
            case "C":
                break;
        }
    });


    $('.tbox').on('click', function(e) {
    e.target.setSelectionRange(0, e.target.value.length);
    console.log('selected');
    });

    $('#screen1').click(function(){
      $('#getfile').click();
      return false;
    });

    insertText246();
    insertText135();

  $('input[name="ta"]').blur(function(){
    insertText246();
  });

  $('input[name="tb"]').blur(function(){
    insertText135();
  });
    
});


$(function(){
    $('input[name="type"]').change(function(){
        $('#box1,#box2').removeClass();
        var val = $(this).val();
        switch (val){
            case "A":
                $('#box1').addClass('cutin1');
                $('#box2').addClass('cutin2');
                break;
            case "B":
                $('#box1').addClass('cutin3');
                $('#box2').addClass('cutin4');
                break;
            case "C":
                break;
        }
        positionReset();
        textBox1();
        textBox2();
    });
});


function animeA() {
        $.when(
            $('.cutin1').animate({'top':'0px'}, 100),
            $('.cutin2').animate({'top':'0px'}, 100),
            $('#sound1').get(0).play()
        ).done(function(){
                setTimeout(function(){
                    $('.cutin1').animate({'left':'500px'}, 100);
                    $('.cutin1').animate({'left':'490px'}, 30);
                    $('.cutin2').animate({'left':'-10px'}, 100);
                    $('.cutin2').animate({'left':'0px'}, 30);
                    $('#sound2').get(0).play()
                },140);
        screenshot('#screen1');
        });    
}

function animeB() {
        $.when(
            $('.cutin3').animate({'left':'0px'}, 100),
            $('.cutin4').animate({'top':'0px'}, 100),
            $('#sound1').get(0).play()
        ).done(function(){
                setTimeout(function(){
                    $('.cutin3').css('text-align','right');
                    $('.cutin3').animate({'top':'250px'}, 100);
                    $('.cutin3').animate({'top':'240px'}, 30);
                    $('.cutin4').animate({'left':'-10px'}, 100);
                    $('.cutin4').animate({'left':'0px'}, 30);
                    $('#sound2').get(0).play()
                },140);
        screenshot('#screen1');
        });
        screenshot('#screen1');
}

function animeB() {
        $.when(
            $('#cutin3').animate({'left':'0px'}, 100),
            $('#cutin4').animate({'top':'0px'}, 100),
            $('#sound1').get(0).play()
        ).done(function(){
                setTimeout(function(){
                    $('#cutin3').css('text-align','right');
                    $('#cutin3').animate({'top':'250px'}, 100);
                    $('#cutin3').animate({'top':'240px'}, 30);
                    $('#cutin4').animate({'left':'-10px'}, 100);
                    $('#cutin4').animate({'left':'0px'}, 30);
                    $('#sound2').get(0).play()
                },140);
        screenshot('#screen1');
        });
}

$(document).ready( function(){
    textBox1();
    textBox2();
});

$(function(){
    $('input[name="ta"]').blur(function(){
        textBox2();
    });
});

<<<<<<< HEAD
function insertText246 (){
=======
$(function(){
    $('input[name="tb"]').blur(function(){
        textBox1();
    });
});


function textBox2 () {
>>>>>>> 59431d4009b65d4c1ff2f5973c17c60a7c684d26
        var textValA = $('input[name="ta"]').val().replace(/[A-Za-z0-9]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) + 65248);
        }); //半角を全角に
        if (textValA.length <= 3){
            $('.cutin2').css('font-size',100);
            $('.cutin4').css('font-size',100);
        } else if (textValA.length == 4 ) {
            $('.cutin2').css('font-size',80);
            $('.cutin4').css('font-size',80);
        } else if (textValA.length >= 5 ) {
            $('.cutin2').css('font-size',60);
            $('.cutin4').css('font-size',60);
        }
<<<<<<< HEAD
        $('#cutin2').children().text(textValA);
        $('#cutin4').children().text(textValA);
        var redTxt2 = $('#cutin2 > span:nth-child(1)').text();
        var sub2 = redTxt2.substr(redTxt2.length-2,1);
        $('#cutin2 > span:nth-child(1)').html(redTxt2.replace(sub2,'<span style="color:red">' + sub2 + '</span>'));
        var redTxt4 = $('#cutin4 > span:nth-child(1)').text();
        var sub4 = redTxt4.substr(redTxt4.length-2,1);
        $('#cutin4 > span:nth-child(1)').html(redTxt4.replace(sub4,'<span style="color:red">' + sub4 + '</span>'));
}

function insertText135(){
=======
        $('.cutin2').children().text(textValA);
        console.log(textValA);
        $('.cutin4').children().text(textValA);
        var redTxt2 = $('.cutin2 > span:nth-child(1)').text();
        var sub = redTxt2.substr(redTxt2.length-2,1);
        $('.cutin2 > span:nth-child(1)').html(redTxt2.replace(sub,'<span style="color:red">' + sub + '</span>'));
        var redTxt4 = $('.cutin2 > span:nth-child(1)').text();
        var sub = redTxt4.substr(redTxt4.length-2,1);
        $('.cutin4 > span:nth-child(1)').html(redTxt4.replace(sub,'<span style="color:red">' + sub + '</span>'));
}

function textBox1 () {
>>>>>>> 59431d4009b65d4c1ff2f5973c17c60a7c684d26
        var textValB = $('input[name="tb"]').val().replace(/[A-Za-z0-9]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) + 65248);
        });
        if (textValB.length <= 3){
            $('.cutin1').css({'font-size':100, 'letter-spacing':'0em'});
            $('.cutin3').css({'font-size':100, 'letter-spacing':'0.5em'});
        } else if (textValB.length == 4 ) {
            $('.cutin1').css({'font-size':80, 'letter-spacing':'0em'});
            $('.cutin3').css({'font-size':80, 'letter-spacing':'0.3em'});
        } else if (textValB.length >= 5 ) {
            $('.cutin1').css({'font-size':60, 'letter-spacing':'0em'});
            $('.cutin3').css({'font-size':80, 'letter-spacing':'0em'});
        }
<<<<<<< HEAD
        $('#cutin1').children().text(textValB);
        $('#cutin3').children().text(textValB);
}
=======
        $('.cutin1').children().text(textValB);
        $('.cutin3').children().text(textValB);
}

>>>>>>> 59431d4009b65d4c1ff2f5973c17c60a7c684d26

function screenshot(selector) {
    var element = $(selector)[0];
    html2canvas(element, { onrendered: function(canvas) {
        var imgData = canvas.toDataURL();
        $('#download')[0].href = imgData;
        $('#download')[0].innerHTML = "Download";
    }});
}

function erase_screenshot() {
    $('#download')[0].href = "#";
    $('#download')[0].innerHTML = "";
}

function positionReset(){
        $('.cutin1').css({'top':'-360px','left':'0px'});
        $('.cutin2').css({'top':'360px','left':'490px'});
        $('.cutin3').css({'top':'0px','left':'-640px','text-align':'left'});
        $('.cutin4').css({'top':'360px','left':'490px'});        
}
