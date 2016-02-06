// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// $(function(){
//   $('img.post').each(function(){
//     $(this).css({'margin' : getRandomInt(-150,50)});
//   });
// });

$(function() {
  $(".post").draggable({stack:".post"});
});
