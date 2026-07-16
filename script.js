// script.js

const form = document.getElementById("reservationForm");
const message = document.getElementById("message");


form.addEventListener("submit", function(e) {

  e.preventDefault();


  const data = {

    name: document.getElementById("name").value,

    phone: document.getElementById("phone").value,

    work: document.getElementById("work").value,

    dateTime: document.getElementById("dateTime").value,

    note: document.getElementById("note").value

  };


  console.log(data);


  message.textContent =
    "予約を受け付けました。確認後ご連絡いたします。";


  message.style.color = "green";


  form.reset();


});
