function square(){
    var num = document.getElementById("t1").value;
    
    var input = Math.sqrt(num);
    document.getElementById("p1").innerHTML = "square root of " + num + " is " + input;

}