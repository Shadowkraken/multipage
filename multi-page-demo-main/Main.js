document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("btn2").addEventListener("click", btnClicked2);
document.getElementById("btn3").addEventListener("click", btnClicked3);
document.getElementById("btn4").addEventListener("click", btnClicked4);
document.getElementById("btn5").addEventListener("click", btnClicked5);
document.getElementById("btn6").addEventListener("click", btnClicked6);
document.getElementById("btn7").addEventListener("click", btnClicked7);
document.getElementById("btn8").addEventListener("click", btnClicked8);
document.getElementById("btn9").addEventListener("click", btnClicked9);
document.getElementById("btn10").addEventListener("click", btnClicked10);

let ans = document.getElementById("answer");
let ans2 = document.getElementById("answer2");
let ans3 = document.getElementById("answer3");
let ans4 = document.getElementById("answer4");
let ans5 = document.getElementById("answer5");
let ans6 = document.getElementById("answer6");
let ans7 = document.getElementById("answer7");
let ans8 = document.getElementById("answer8");
let ans9 = document.getElementById("answer9");
let ans10 = document.getElementById("answer10");
function btnClicked() {
  let question = document.getElementById("question").value.toLowerCase();

  if (question === "making automatic machines") {
    ans.innerHTML = `<p class="q1">Correct</p>`;
  } else {
    ans.innerHTML = `<p class="q1">Incorrect</p>`;
  }
}
function btnClicked2() {
  let question2 = document.getElementById("question2").value.toLowerCase();

  if (question2 === "villager") {
    ans2.innerHTML = `<p class="q2">Correct</p>`;
  } else {
    ans2.innerHTML = `<p class="q2">Incorrect</p>`;
  }
}
function btnClicked3() {
  let question3 = document.getElementById("question3").value.toLowerCase();

  if (question3 === "a sandbox survival game") {
    ans3.innerHTML = `<p class="q3">Correct</p>`;
  } else {
    ans3.innerHTML = `<p class="q3">Incorrect</p>`;
  }
}

function btnClicked4() {
  let question4 = document.getElementById("question4").value.toLowerCase();

  if (question4 === "an egg") {
    ans4.innerHTML = `<p class="q4">Correct</p>`;
  } else {
    ans4.innerHTML = `<p class="q4">Incorrect</p>`;
  }
}

function btnClicked5() {
  let question5 = document.getElementById("question5").value.toLowerCase();

  if (question5 === "baby zombie") {
    ans5.innerHTML = `<p class="q5">Correct</p>`;
  } else {
    ans5.innerHTML = `<p class="q5">Incorrect</p>`;
  }
}

function btnClicked6() {
  let question6 = document.getElementById("question6").value.toLowerCase();

  if (question6 === "creeper") {
    ans6.innerHTML = `<p class="q6">Correct</p>`;
  } else {
    ans6.innerHTML = `<p class="q6">Incorrect</p>`;
  }
}

function btnClicked7() {
  let question7 = document.getElementById("question7").value.toLowerCase();

  if (question7 === "no") {
    ans7.innerHTML = `<p class="q7">Correct</p>`;
  } else {
    ans7.innerHTML = `<p class="q7">Incorrect</p>`;
  }
}

function btnClicked8() {
  let question8 = document.getElementById("question8").value.toLowerCase();

  if (question8 === "false") {
    ans8.innerHTML = `<p class="q8">Correct</p>`;
  } else {
    ans8.innerHTML = `<p class="q8">Incorrect</p>`;
  }
}

function btnClicked9() {
  let question9 = document.getElementById("question9").value.toLowerCase();

  if (question9 === "true") {
    ans9.innerHTML = `<p class="q9">Correct</p>`;
  } else {
    ans9.innerHTML = `<p class="q9">Incorrect</p>`;
  }
}

function btnClicked10() {
  let question10 = document.getElementById("question10").value.toLowerCase();

  if (question10 === "false") {
    ans10.innerHTML = `<p class="q10">Correct</p>`;
  } else {
    ans10.innerHTML = `<p class="q10">Incorrect</p>`;
  }
}
