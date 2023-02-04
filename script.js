function buttonClick(val){
    document.getElementById("output-screen").value+=val;
}

function clearButton(){
    document.getElementById("output-screen").value="";
}

function equalButton(){
    var text=document.getElementById("output-screen").value;
    var output=eval(text)
    document.getElementById("output-screen").value=output;

}


