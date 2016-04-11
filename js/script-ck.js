// Scroll to element
$(".scroll").on("click",function(){var e=$(this).attr("href");$("html, body").animate({scrollTop:$(e).offset().top},500);return!1});