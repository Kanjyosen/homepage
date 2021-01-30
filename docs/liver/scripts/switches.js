function setUpes(){
picnum = 0;

p1 = "./images/20210201.png";
p2 = "./images/20210201_2.png";
p3 = "./images/20210201_3.png";
p4 = "./images/20210201_4.jpg";

pictus = [p1, p2, p3, p4];

l1 = "https://youtu.be/d1TltDkKkfo";
l2 = "https://youtu.be/hWKshm4xY8Y";
l3 = "https://youtu.be/i0kOw2OC4TA";
l4 = "https://youtu.be/irnxyUhb6TU";

linkks = [l1, l2, l3, l4];

pictttt = document.getElementById('piccccc');

//alert("switches.jsは正常に動作しようとしています。");

pictttt.innerHTML = "<a href=\"" + linkks[picnum] + "\"><img src=\"" + pictus[picnum] + "\" width=\"100%\"></a>";

}

function nextPic(){
	if (picnum == 3) {
		picnum = 0;
	}else{
		picnum = picnum + 1;
	}
	changePic();
}

function prevPic(){
	if (picnum == 0) {
		picnum = 3;
	}else{
		picnum = picnum - 1;
	}
	changePic();
}

function changePic(){
	pictttt.innerHTML = "<a href=\"" + linkks[picnum] + "\"><img src=\"" + pictus[picnum] + "\" width=\"100%\"></a>";
}