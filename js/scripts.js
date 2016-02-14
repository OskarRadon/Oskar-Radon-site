// var mq = window.matchMedia('@media all and (min-width: 700px)');
// if(mq.matches) {
//     // the width of browser is more then 700px
// } else {
//     // the width of browser is less then 700px
// }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(function(){
  $('img.post').each(function(){
    $(this).css({'margin' : getRandomInt(-150,0)});
  });
});

$(function() {
  $(".post").draggable({stack: ".post"});
});
