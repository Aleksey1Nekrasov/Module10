const wsUri = "wss://echo-ws-service.herokuapp.com";

const btnSend = document.querySelector(".client");
const btnGeo = document.querySelector(".location");
const output = document.querySelector('.output');

let websocket;
websocket = new WebSocket(wsUri); // открыть соединение
websocket.onopen = function(evt) {};

function writeToScreen(message) { //функция создания сообщения и вывода в output(div)
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word"; //???
  pre.innerHTML = message;
  output.appendChild(pre);
}

btnSend.addEventListener('click', () => {  //отработчик кнопки отправить
  const input = document.querySelector(".input").value;
  const message = input;
  writeToScreen("Сообщение отправителя: " + message);
  websocket.send(message);

  websocket.onmessage = function (evt) {
     writeToScreen(
        '<span>Сообщение от сервера: ' + evt.data + '</span>'
     );
  };
  websocket.onerror = function (evt) {
     writeToScreen(
        '<span style="color: red;">ERROR:</span> ' + evt.data
     );
  };
});

btnGeo.addEventListener('click', () => { //отработчик кнопки гео-локации
  let position = navigator.geolocation.getCurrentPosition((position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
     writeToScreen(
        `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Моя гео-локация</a>`
     );
     websocket.send = function (position) { };
  })
})



