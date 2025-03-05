var index = 0;
var score = 0;
var questions = ["1st question", "2nd question", "3rd question", "4th question", "5th question"];
var answers = [
    ["answer1", "answer2", "answer3", "answer4"],
    ["answer5", "answer6", "answer7", "answer8"],
    ["answer9", "answer10", "answer11", "answer12"],
    ["answer13", "answer14", "answer15", "answer16"],
    ["answer17", "answer18", "answer19", "answer20"]
]
var correct = ["answer1", "answer6", "answer11", "answer16", "answer20"];



function answer(clicked) {
    let btnid = clicked.id;
    console.log(btnid);
    let ans = answers[index];
    let cor = correct[index];
    if (clicked.innerHTML == cor) {
        score++;
        document.getElementById(btnid).style.backgroundColor = "green";
    } else {
        document.getElementById(btnid).style.backgroundColor = "red";
    }

    for (let i = 0; i < ans.length; i++) {
        document.getElementById("choice" + (i + 1)).disabled = true;
    }
    document.getElementById('next').style.visibility = 'visible';
    index++;
}

function load() {
    document.getElementById("question").innerHTML = questions[index];
    let ans = answers[index];
    for (let i = 0; i < ans.length; i++) {
        document.getElementById("choice" + (i + 1)).innerHTML = ans[i];
    }
    document.getElementById('next').style.visibility = 'hidden';
    for (let i = 0; i < ans.length; i++) {
        document.getElementById("choice" + (i + 1)).disabled = false;
    }
    for (let i = 0; i < ans.length; i++) {
        document.getElementById("choice" + (i + 1)).style.backgroundColor = "white";
    }
}
load();
