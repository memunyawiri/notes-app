(function(exports) {
  function changeText(newText) {
    var elem = document.getElementById('app');
    elem.innerHTML = newText;
  }

  changeText('howdy');
})(this);
