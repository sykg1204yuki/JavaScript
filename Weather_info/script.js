                //　↓↓"取得したAPIキー"を入力↓↓
const API_KEY = "b6cc192459b4251f196b99a9a9fd6588";


$(function(){
  $('#btn').on('click', function(){
    //入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({                                                                                                      //　↓↓"取得したAPIキー"を入力↓↓
      url:"https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityName').val() + "&units=metric&appid=" + "b6cc192459b4251f196b99a9a9fd6588",
      dataType: 'jsonp',
    }).done(function(data){
      //通信成功時
      $('#place').text(data.name);                //位置
      $('#temp_max').text(data.main.temp_max);    //最高気温
      $('#temp_min').text(data.main.temp_min);    //最低気温
      $('#humidity').text(data.main.humidity);    //湿度
      $('#speed').text(data.wind.speed);          //風速
      $('#weather').text(data.weather[0].main);   //天気

      //天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);

    }).fall(function(data){
      //通信失敗時
      alert('通信に失敗しました。')
    });
  });
});
