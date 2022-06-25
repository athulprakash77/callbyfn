displayresult=(result)=>{
    console.log(result)

}

div2num=(a,b, callbackfn)=>{
    let c=a/b
    callbackfn(c)
}

div2num(20,4,displayresult)