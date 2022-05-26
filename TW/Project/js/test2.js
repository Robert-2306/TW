function onloadFunction(){
    document.getElementById("inputBox").style.visibility = "hidden";
    document.getElementById("ready").style.visibility = "hidden";
    document.getElementById("submit").style.visibility = "hidden";
    document.getElementById("again").style.visibility = "hidden";
}

var random = Math.floor(Math.random() * 10000);

function generateRandomNumber(){
    document.getElementById("random").innerHTML = random;
    document.getElementById("randomGen").style.visibility = "hidden";
    document.getElementById("ready").style.visibility = "visible";

}

function myFunction() {
    document.getElementById("random").style.visibility = "hidden";
    document.getElementById("ready").style.visibility = "hidden";
    document.getElementById("inputBox").style.visibility = "visible";
    document.getElementById("submit").style.visibility = "visible";
}

function submitInput(){
    let x = document.getElementById("num1").value;
    if(random==x){
        document.getElementById("demo").innerHTML = "Well done!";
    }else{
        document.getElementById("demo").innerHTML = "That was close. Keep trying!";
    }
    document.getElementById("again").style.visibility = "visible";
}