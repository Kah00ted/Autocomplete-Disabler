var inputElements = document.getElementsByTagName('input');

for (i = 0; inputElements[i]; i++) {
  inputElements[i].setAttribute('autocomplete', 'off');
}
