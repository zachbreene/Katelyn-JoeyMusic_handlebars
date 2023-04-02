//change opacity of images to 0.5
function changeOpacities() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    images[i].style.opacity = "0.5";
  }
}

//load XML and add to DOM
function loadXMLDoc(filePath, index) {
  var xhr = new XMLHttpRequest();
  document.getElementById("details").innerHTML = "";
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var xmlDoc = xhr.responseXML;
      var person = xmlDoc.getElementsByTagName("katelyn");
      var kate = person[index];
      var title = kate.getElementsByTagName("title")[0].childNodes[0].nodeValue;
      var description = kate.getElementsByTagName("description")[0].childNodes[0].nodeValue;

      var titleElem = document.createElement("h3");
      var descElem = document.createElement("p");

      titleElem.innerHTML = title;
      descElem.innerHTML = description;

      document.getElementById("details").appendChild(titleElem);
      document.getElementById("details").appendChild(descElem);
      document.getElementsByClassName('content').innerHTML = xhr.responseText;
      document.getElementsByClassName('bios').innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", filePath, true);
  xhr.send();
}

//event listeners for katelyn image
var katelynImg = document.getElementById("bio1");
katelynImg.addEventListener("click", function() {
  loadXMLDoc("katelyn-data.xml", 0);
  changeOpacities();
  katelynImg.style.opacity = "1";
});

