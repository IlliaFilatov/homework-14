import './styles/style.scss'

// function request(method, url, callback, errorCb) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url, true);
//   xhr.addEventListener('load', function(e) {
//     callback && callback({
//       body: e.target.status < 400 ? JSON.parse(e.target.response) : e.target.response,
//       status: e.target.status
//     });
//   });
//   xhr.addEventListener('error', function(e) {
//       errorCb && errorCb(e);
//   });
//   xhr.send();
// };

function request(method, url) {
  return new Promise(function(res, rej){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.addEventListener('load', function(e) {
      res({
        body: e.target.status < 400 ? JSON.parse(e.target.response) : e.target.response,
        status: e.target.status
      });
    });
    xhr.addEventListener('error', function(e) {
        rej(e);
    });
    xhr.send();
  });
};

request('get', 'https://ghibliapi.herokuapp.com/films/')
  .then (function(data) {

  for( var i = 0; i < data.body.length; i++) {
    createCard(data.body[i]);
  };
  
  function createCard(element) {
    var container = document.getElementById('container');
    container
      .appendChild(document.createElement('div'))
      .classList += 'item';
    container
      .lastChild
      .appendChild(document.createElement('div'))
      .classList += 'title';
    container
      .lastChild
      .getElementsByClassName('title')[0]
      .innerText += element.title;
    container
      .lastChild
      .appendChild(document.createElement('div'))
      .classList += 'description';
    container
      .lastChild
      .getElementsByClassName('description')[0]
      .innerText += element.description;
    container
      .lastChild
      .appendChild(document.createElement('div'))
      .classList += 'info';
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .appendChild(document.createElement('div'))
      .classList += 'info-number';
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .appendChild(document.createElement('div'))
      .classList += 'info-string';
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .getElementsByClassName('info-number')[0]
      .appendChild(document.createElement('div'))
      .classList += 'score';
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .getElementsByClassName('info-number')[0]
      .appendChild(document.createElement('div'))
      .classList += 'release';
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .getElementsByClassName('info-string')[0]
      .appendChild(document.createElement('div'))
      .classList += 'director';
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .getElementsByClassName('info-string')[0]
      .appendChild(document.createElement('div'))
      .classList += 'producer';
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .getElementsByClassName('info-number')[0]
      .getElementsByClassName('score')[0]
      .innerText += 'Score: ' + element.rt_score;
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .getElementsByClassName('info-number')[0]
      .getElementsByClassName('release')[0]
      .innerText += 'Release: ' + element.release_date;
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .getElementsByClassName('info-string')[0]
      .getElementsByClassName('director')[0]
      .innerText += 'Director: ' + element.director;
    container
      .lastChild
      .getElementsByClassName('info')[0]
      .getElementsByClassName('info-string')[0]
      .getElementsByClassName('producer')[0]
      .innerText += 'Producer: ' + element.producer;

  };
});
