$(function(){
  $('#back a').on('click',function(event){      //#back内のaタグがクリックされた時の処理
    $('body,html').animate({
      scrollTop:0                               //変化対象のプロパティ名：変化値
    },800);                                     //アニメーションの動作時間
    event.preventDefault();                     //aタグの機能の無効化
  });
});