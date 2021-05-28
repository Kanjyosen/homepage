var switcher = "none";
var querys = [];

window.onload = function(){
	querys = searchquery();
	for(c = 0;c < querys.length;c++){
		if(querys[c][0] == "light"){
			switcher = querys[c][1];
		}else{
			/*なんもしてやんねーだ。*/
		}
	}
	if(switcher == "true"){
		turnonlight('pagebase');
		turnonlight('mainpageL');
	}else if(switcher == "false"){
		switchlight('pagebase');
		switchlight('mainpageL');
	}else{
		/*なんもせえへんで。*/
	}
}

function searchquery(){
	var fullparamete;
	var splitedparam = [];
	var splitedparam2 = [];
	fullparamete = location.search.replace("?", "");
	
	if (fullparamete.indexOf("&") == -1){
		splitedparam.push(fullparamete);
	}else{
		splitedparam = fullparamete.split("&");
	}
	for(c = 0;c < splitedparam.length;c++){
		splitedparam[c] = splitedparam[c].split("=");
	}
	return splitedparam;
}

function switchlight(divid){
    var base = document.getElementById(divid);
    base.style.color= '#ffffff';
    base.style.backgroundColor= '#16160e';
    var meare = base.innerHTML;
    var sumire = meare.replace("?light=true", "?light=false");
    base.innerHTML = sumire;
}

function turnonlight(divid){
    var base = document.getElementById(divid);
    base.style.color= '#000000';
    base.style.backgroundColor= '#ffffff';
    var meare = base.innerHTML;
    sumire = meare.replace("?light=false", "?light=true");
    base.innerHTML = sumire;
}