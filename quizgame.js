p1name = localStorage.getItem("player1")
p2name = localStorage.getItem("player2")
p1score = 0
p2score = 0
document.getElementById("player1name").innerHTML=p1name + ":"
document.getElementById("player2name").innerHTML=p2name + ":"
document.getElementById("player1score").innerHTML=p1score
document.getElementById("player2score").innerHTML=p2score
document.getElementById("questioner").innerHTML= "Question Turn : "+ p1name
document.getElementById("answerer").innerHTML= "Answer Turn : "+ p2name

function send () {
    n1 = document.getElementById("number1").value 
    n2 = document.getElementById("number2").value
    ans = parseInt(n1)*parseInt(n2)
}

question_number = "<h4>" +  number1 + "x" + number2 + "</h4>";
    input_box = "<br> Answer :  <input type='text' id='input_check_box'> ";
    check = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";