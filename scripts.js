window.addEventListener("load", function() {
    var svgObject = document.getElementById('file').contentDocument;
    var svg = svgObject.getElementById('external-1');
    svg.addEventListener("click", function(){
      alert('hello!');
    });
  });