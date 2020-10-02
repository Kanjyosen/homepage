window.onload = function(){
    const fncbtn = document.getElementById("sharebutton");
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    } else{
        const fncbtn = document.getElementById("sharebutton");
        fncbtn.style.display = "none";
    }
}