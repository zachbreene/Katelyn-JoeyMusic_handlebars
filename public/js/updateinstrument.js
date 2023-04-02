//Uses jQuery to switch the text of the li elements of the ID joeyInstrumentList

$("#joeyInstrumentList li").each(function(index, element) {
  var newItem;
  switch(index) {
    case 0:
      newItem = "Vocals";
      break;
    case 1:
      newItem = "Percussion";
      break;
    case 2:
      newItem = "Piano/Keyboard";
      break;
    case 3:
      newItem = "Guitar";
      break;
    default:
      newItem = "";
  }
  $(element).text(newItem);
});
