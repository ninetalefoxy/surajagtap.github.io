

function gethistory(){
    return document.getElementById("history-value").innerText;
}

function printhis(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if (num == ""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormat(num);

    }
    
}

function getFormat(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}



function reverseFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator =  document.getElementsByClassName("operator");

for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        alert(" the operator is clicked"+this.id);
    })
}

var Number =  document.getElementsByClassName("number");
for(var i=0;i<Number.length;i++){
    Number[i].addEventListener('click', function(){
        alert(" the number is clicked "+this.id);
    })
}

