const task3Element = document.getElementById("task-3");

function func1() {
  alert("This is a normal alert, move on.");
}

function func2(name) {
  alert("This is not a normal alert, " + name);
}

function func3(param1, param2, param3) {
  return param1 + param2 + param3;
}

func1();
func2("Dave");
alert(func3("I like the ", "move it ", "move it!"));

task3Element.addEventListener("click", func1);
