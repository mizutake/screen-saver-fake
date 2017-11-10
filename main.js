window.addEventListener('load', function(){
  let count = 0;
  let img = ['./image/img0.jpg', './image/img1.jpg', './image/img2.jpg','./image/img3.jpg','./image/img4.jpg','./image/img5.jpg'];
  setInterval(function(){
    // if(count===0) {
    //   document.getElementById('img').src = './img0.jpg'
    //   count++;
    // }else{
    //   count===5;
    //   document.getElementById('img').src = './img1.jpg'
    //   count--;
    // }
    (function() {
      let $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
      $("#slide ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
      $("#slide ul li").hide().css({"position":"absolute","top":0,"left":0});
      $("#slide ul li:first").addClass("active").show();
      setInterval(function(){
      let $active = $("#slide ul li.active");
      let $next = $active.next("li").length?$active.next("li"):$("#slide ul li:first");
      $active.fadeOut($fade_speed).removeClass("active");
      $next.fadeIn($fade_speed).addClass("active");
      },$interval);
      });
    document.getElementById('img').src = img[count % img.length];
    count++;
  },2000)
})
