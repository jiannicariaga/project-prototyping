function reqListener(url, task) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.addEventListener('load', event => task(xhr.response));
  // (navigator.onLine) ? xhr.send() : /* Display network connection error */;
}

reqListener();
