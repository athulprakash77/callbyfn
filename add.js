
displayresult=(result)=>{
    console.log(result)

}

add2num=(a,b, callbackfn)=>{
    let c=a+b
    callbackfn(c)
}

add2num(5,4,displayresult)