// var button = document.getElementById("btn")

function select(value) {
    var buttons = document.getElementsByTagName('button');
    
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
  
      if (button.id === value) {
        button.style.backgroundColor = "hsl(25, 97%, 53%)";
        button.style.color = "white"
        document.getElementById("score").innerHTML = `You selected  ${i + 1} `
      } else {
        button.style.backgroundColor = ""; // Reset to default color
      }
     
    }
  }
function chack() {
    document.getElementById("finish").style.display = "flex"
    document.getElementById("container").style.display = "none"

}
