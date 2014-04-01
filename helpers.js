var jqconsole = $('#console').jqconsole('', '>>>');
function print(x) {
  jqconsole.Write(x + "\n")
}

function ask(question, f) {
  jqconsole.Write(question)
  jqconsole.Input(function(input) {  
    f(input)
  });  
}

function random(min, max) {
  return Math.floor(Math.random() * (max  - min) + min)
}
