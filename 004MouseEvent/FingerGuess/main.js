var  score = 0;
function shitou() {
    document.getElementById("myChoice").innerHTML="<img src=../image/shitou.jpg>";

    juge("shitou");

}
function jiandao() {
    document.getElementById("myChoice").innerHTML="<img src=../image/jiandao.jpg>";

    juge("jiandao");
}
function bu() {
    document.getElementById("myChoice").innerHTML="<img src=../image/bu.jpg>";

    juge("bu");
}
function  juge(myChoice) {
    var  computerjieguo =  computerChoice();

    if (myChoice=="shitou"){
        if (computerjieguo=="shitou"){
            document.getElementById("result").innerHTML="Draw";

        }
        else if (computerjieguo=="jiandao"){
            document.getElementById("result").innerHTML="You Win";
            score+=1;
        }
        else if (computerjieguo=="bu"){
            document.getElementById("result").innerHTML="You Lose";
            score-=1;
        }
    }
    else  if (myChoice=="jiandao"){
        if (computerjieguo=="jiandao"){
            document.getElementById("result").innerHTML="Draw";
            ;
        }
        else if (computerjieguo=="bu"){
            document.getElementById("result").innerHTML="You Win";
            score+=1;
        }
        else if (computerjieguo=="shitou"){
            document.getElementById("result").innerHTML="You Lose";
            score-=1;
        }
    }
    else  if (myChoice=="bu"){
        if (computerjieguo=="bu"){
            document.getElementById("result").innerHTML="Draw";
                    ;
        }
        else if (computerjieguo=="shitou"){
            document.getElementById("result").innerHTML="You Win";
            score+=1;

        }
        else if (computerjieguo=="jiandao"){
            document.getElementById("result").innerHTML="You Lose";
            score-=1;
        }
    }
    document.getElementById("score").innerHTML="得分 "+ score;
    if (score==10){
        document.getElementById("score").innerHTML="Congratulation"
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