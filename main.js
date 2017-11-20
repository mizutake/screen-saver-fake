'use strict';

window.addEventListener('load', function(){
  $(function(){
    let CHANGE_TIME  = 3000; // 次の画像に切り替わるまでの時間(ms)
    let ANIMATE_TIME = 1000; // フェードアニメーションの時間(ms)
    let images = [
      './image/img0.jpg',
      './image/img1.jpg',
      './image/img2.jpg',
      './image/img3.jpg',
      './image/img4.jpg',
      './image/img5.jpg',
      './image/top_os02.jpg',
      './image/img7.jpg',
      './image/050Yamasha.jpg',
      './image/043sukagamino.jpg',
      './image/033Kazuki17103.jpg'];
    let index = 0;
    function crossfade_image() {
      $("img.active").animate({'opacity': 0}, ANIMATE_TIME, "linear", function(){
        $('img:not(".active")').addClass('active');
        $(this).attr('src', images[index % images.length]).removeClass('active');
        index = (index >= images.length) ? 0 : (index + 1);
      });
      $('img:not(".active")').animate({'opacity': 1.0}, ANIMATE_TIME);
      setTimeout(crossfade_image, CHANGE_TIME);
    }
    $("body")
      .append($("<img>").attr("src", images[index++]).addClass("active"))
      .append($("<img>").attr("src", images[index++]).css({'opacity': 0}));
    setTimeout(crossfade_image, CHANGE_TIME);
  });
});