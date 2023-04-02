//change opacity of all images
function changeImageOpacity() {
    var images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = 0.5;
    }
  }
  
  //load data from JSON file
  function loadJSON(filePath, index) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        var jsonData = JSON.parse(xhr.responseText);
        let html = "";
        var person = jsonData.joey[index];
        html += "<h3>" + person.title + "</h3>";
        html += "<p>" + person.description + "</p>";
        document.getElementById('details').innerHTML = html;
      }
    };
    xhr.open('GET', filePath, true);
    xhr.send();
  }

  //event listener for joey
  var joeyImg = document.getElementById('bio2');
  joeyImg.addEventListener('click', function() {
    loadJSON('joey-data.json', 0);
    changeImageOpacity();
    joeyImg.style.opacity = 1;
  });