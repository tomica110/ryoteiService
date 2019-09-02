// comment
'use strict'

{
  ////////////////////////loding/////////////////////
  $(window).on('load', function() {
    $(".page-loader").fadeOut('slow');
  });
  ////////////////////////cursor////////////////////////
  var
  cursor = $(".cursor"),
  follower = $(".follower"),
  cWidth = 20, //カーソルの大きさ
  mouseX = 0, //マウスのX座標
  mouseY = 0,//マウスのY座標

  fWidth = 40, //フォロワーの大きさ
  delay = 10, //数字を大きくするとフォロワーがより遅れて来る
  posX = 0, //フォロワーのX座標
  posY = 0; //フォロワーのX座標

//カーソルの遅延アニメーション
//ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, .001, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;

    TweenMax.set(follower, {
        css: {
          left: posX - (fWidth / 2),
          top: posY - (fWidth / 2)
        }
    });

    TweenMax.set(cursor, {
        css: {
          left: mouseX - (cWidth / 2),
          top: mouseY - (cWidth / 2)
        }
    });
  }
});

//マウス座標を取得
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    cursor.css({
      //カーソルの真ん中に座標軸が来るよう、
      //カーソルの大きさの半分を引きます
      left: mouseX - (cWidth / 2),
      top: mouseY - (cWidth / 2)
    })
});

$("a").on({
  "mouseenter": function() {
    cursor.addClass("is-active");
    follower.addClass("is-active");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active");
    follower.removeClass("is-active");
  }
});
///////////////////scrollfade///////////////////
//
// $(function(){
//     var effect_pos = 20; // 画面下からどの位置でフェードさせるか(px)
//     var effect_move = 30; // どのぐらい要素を動かすか(px)
//     var effect_time = 500; // エフェクトの時間(ms) 1秒なら1000
//
//     // フェードする前のcssを定義
//     $('.scroll-fade').css({
//         opacity: 0,
//         transform: 'translateY('+ effect_move +'px)',
//         transition: effect_time + 'ms'
//     });
//
//     // スクロールまたはロードするたびに実行
//     $(window).on('scroll load', function(){
//         var scroll_top = $(this).scrollTop();
//         var scroll_btm = scroll_top + $(this).height();
//         effect_pos = scroll_btm - effect_pos;
//
//         // effect_posがthis_posを超えたとき、エフェクトが発動
//         $('.scroll-fade').each( function() {
//             var this_pos = $(this).offset().top;
//             if ( effect_pos > this_pos ) {
//                 $(this).css({
//                     opacity: 1,
//                     transform: 'translateY(0)'
//                 });
//             }
//         });
//     });
// });

}
