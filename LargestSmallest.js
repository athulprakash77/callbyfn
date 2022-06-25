bigof2num=(a,b)=>
{
    if (a>b)
     {
        return a
        
    } 
    else
     {
        return b
        
    }
}

lowof2num=(a,b)=>
{
    if (a<b) 
    {
        return a
        
    }
     else
      {
        return b
        
    }
}
LOWWESTof2Num=()=>
{
var x=parseInt(document.getElementById("num1").value)
var y=parseInt(document.getElementById("num2").value)
var z=lowof2num(x,y)
document.getElementById("z").innerText=z
console.log(z)

}
Bigof2Num=()=>
{
 var x=parseInt(document.getElementById("num1").value)
var y=parseInt(document.getElementById("num2").value)
var z=bigof2num(x,y)
document.getElementById("z").innerText=z
console.log(z)

}


    