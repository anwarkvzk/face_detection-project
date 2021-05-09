async function beginVideo(){
    let stream = null;
    try{
        stream = navigator.mediaDevices.getUserMedia({audio:false,video:true});
        
    }
    catch(err){
        alert("Unable to find the device")
        console.log(err);
    }
}