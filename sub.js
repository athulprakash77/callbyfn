
displayresult=(result)=>{
    console.log(result)

}

sub2num=(a,b, callbackfn)=>{
    let c=a-b
    callbackfn(c)
}

sub2num(5,4,displayresult)