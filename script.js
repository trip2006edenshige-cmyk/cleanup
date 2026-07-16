// =================================
// 便利屋予約システム script.js
// =================================


// GASウェブアプリURL
const GAS_URL =
"https://script.google.com/macros/s/AKfycbyK4PYfJBFkHI0iqmvMmhFjVDPFcLG_1pd6jDsL3uyPsYlxP9gxGMEjZY24GgAhocbe/exec";



// フォーム取得
const form =
document.getElementById("reservationForm");


// メッセージ表示場所
const message =
document.getElementById("message");




// 送信処理

form.addEventListener("submit", function(e){


  e.preventDefault();



  // 入力データ取得

  const data = {


    name:
    document.getElementById("name").value,


    phone:
    document.getElementById("phone").value,


    work:
    document.getElementById("work").value,


    dateTime:
    document.getElementById("dateTime").value,


    note:
    document.getElementById("note").value



  };





  // 送信中表示

  message.textContent =
  "送信中です...";

  message.style.color =
  "black";





  // GASへ送信

  fetch(GAS_URL, {


    method:"POST",


    mode:"no-cors",


    headers:{


      "Content-Type":"text/plain"


    },


    body:
    JSON.stringify(data)



  })



  .then(function(){



    message.textContent =

    "ご予約ありがとうございます。\n確認後、担当者よりご連絡いたします。";



    message.style.color =
    "green";



    // フォームリセット

    form.reset();




    // 5秒後メッセージ消去

    setTimeout(function(){


      message.textContent = "";


    },5000);



  })



  .catch(function(error){



    console.error(error);



    message.textContent =

    "送信に失敗しました。";


    message.style.color =
    "red";



  });



});
