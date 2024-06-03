$(document).ready(function() {
    $('#changeBtn').click(function() {
        $('body').css('background-color', getRandomColor());
    });

    $('.changeBg').click(function() {
        $('body').css('background-color', getRandomColor());
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
var Links = {
    setColor : function(color){
        $("p").css("background0color" , "yellow");
    }
}
var body = {
    setColor : function(color){
        $("p").css("black" , "yellow");
    } , 
    setBackgroundColor: function(color)
{
    $("p").css("background0color" , "yellow");
}
}

// <h1> 태그 생성
var newHeading = $('<h1>');

// 텍스트 추가
newHeading.text('웹 프로그래밍 기초와 이해');

// 문서에 추가
$('body').append(newHeading);