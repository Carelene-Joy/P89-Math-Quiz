function adduser () {
    var p1=document.getElementById ("player1username").value 
    var p2=document.getElementById ("player2username").value 
    localStorage.setItem('player1', p1)
    localStorage.setItem('player2', p2)
    window.location="quizgamepage.html"
    }
    