function switchtimer(time){
    setTimeout(switches, time, 'foward', 'back');
}

var switches = function(del, add){
    document.getElementById(del).style.display = "none";
    document.getElementById(add).style.display = "block";
}

window.onload = function(){
    document.getElementById('back').style.display = "none";
}