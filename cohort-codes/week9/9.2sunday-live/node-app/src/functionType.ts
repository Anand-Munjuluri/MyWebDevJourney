function runAfter1Second(fn: ()=> void){ //giving function a type
    setTimeout(fn,1000);
}

runAfter1Second(function(){ //as this function is not returning , we write void
    console.log("hi there");
})

//rootdir
//outdir - has converted js files