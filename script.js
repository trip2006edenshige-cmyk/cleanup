// script.js

const GAS_URL = "https://script.google.com/macros/s/AKfycbyuYNM-_9U3FAvFMqLZA3G8CKKEl4it6YU4ItMaGkqKjpcPE225hz1KXJ-41laSLvUK/exec";


const form = document.getElementById("reservationForm");

const message = document.getElementById("message");



form.addEventListener("submit", function(e){

  e.preventDefault();



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



  fetch(GAS_URL, {

    method:"POST",

    body:JSON.stringify(data)

  })


  .then(response => response.json())


  .then(result => {


    if(result.result === "success"){


      message.textContent =
      "予約を受け付けました。";


      message.style.color="green";


      form.reset();


    }else{


      message.textContent =
      "送信エラーが発生しました。";


    }


  })


  .catch(error => {


    console.error(error);


    message.textContent =
    "通信エラーです。";


    message.style.color="red";


  });



});
