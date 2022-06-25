displayresult=(result)=>{
    console.log(result)

}

mul2num=(a,b, callbackfn)=>{
    let c=a*b
    callbackfn(c)
}

mul2num(5,4,displayresult)