
function shitou() {
    document.getElementById("myChoice").innerHTML="<img src=../image/shitou.jpg>";
    var  computerjieguo =  computerChoice();
    juge("shitou",computerjieguo);

}
function jiandao() {
    document.getElementById("myChoice").innerHTML="<img src=../image/jiandao.jpg>";
    var  computerjieguo =  computerChoice();
    juge("jiandao",computerjieguo);
}
function bu() {
    document.getElementById("myChoice").innerHTML="<img src=../image/bu.jpg>";
    var  computerjieguo =  computerChoice();
    juge("bu",computerjieguo);
}
function  juge(myChoice,computerjieguo) {
    if (myChoice=="shitou"){
        if (computerjieguo=="shitou"){
            document.getElementById("result").innerHTML="Draw";
        }
        else if (computerjieguo=="jiandao"){
            document.getElementById("result").innerHTML="You Win";
        }
        else if (computerjieguo=="bu"){
            document.getElementById("result").innerHTML="You Lose";
        }
    }
    else  if (myChoice=="jiandao"){
        if (computerjieguo=="jiandao"){
            document.getElementById("result").innerHTML="Draw";
        }
        else if (computerjieguo=="bu"){
            document.getElementById("result").innerHTML="You Win";
        }
        else if (computerjieguo=="shitou"){
            document.getElementById("result").innerHTML="You Lose";
        }
    }
    else  if (myChoice=="bu"){
        if (computerjieguo=="bu"){
            document.getElementById("result").innerHTML="Draw";
        }
        else if (computerjieguo=="shitou"){
            document.getElementById("result").innerHTML="You Win";
        }
        else if (computerjieguo=="jiandao"){
            document.getElementById("result").innerHTML="You Lose";
        }
    }

}

function computerChoice() {
    var r = Math.random()*3;
    // alert(r);
    // document.body.innerHTML=r;
    if (r<1){
        document.getElementById("computerChoice").innerHTML="<img src=../image/shitou.jpg>";
        return "shitou";
    }
    else  if (r>2){
        document.getElementById("computerChoice").innerHTML="<img src=../image/jiandao.jpg>";
        return "jiandao";
    }
    else {
        document.getElementById("computerChoice").innerHTML="<img src=../image/bu.jpg>";
        return "bu";
    }
}