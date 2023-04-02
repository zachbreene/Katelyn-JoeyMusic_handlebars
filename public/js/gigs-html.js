//change the opacity of all images to 0.5
function changeOpacity() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.opacity = 0.5;
    });
  }

function loadBookData(filePath) {
    const xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const detailsDiv = document.getElementById('details');
        detailsDiv.innerHTML = this.responseText;
      }
    };
  
    xhttp.open('GET', filePath, true);
    xhttp.send();
  }
  
    var gigImg = document.getElementById('gigsData');
    
  gigImg.addEventListener('click', () => {
    loadBookData('gigs-data.html');
    changeOpacity();
    gigImg.style.opacity = 1;
  });