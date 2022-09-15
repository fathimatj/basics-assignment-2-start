const task3Element = document.getElementById("task-3");

function noParameter() {
  alert("This is inside the noparamter function");
}

function nameParameter(name) {
  alert("This is inside the name parameter funciton " + name);
}

noParameter();

nameParameter("Hello");

task3Element.addEventListener("click", noParameter);

function threeParameter(param1, param2, param3) {
  let newParam = param1 + " " + param2 + " " + param3;
  return newParam;
}

let newResult = threeParameter("hello", "come", "here");

alert("The new result is " + newResult);
