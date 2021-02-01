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

a1 = "PAPERS,PLEASE配信 2021/02/01 14:00";
a2 = "EXR-SUV配信 2021/02/01 16:00";
a3 = "沼鯖建築配信 2021/02/01 18:00";
a4 = "朝はブレッド 2021/02/01 09:30";

abouts = [a1, a2, a3, a4];

pictttt = document.getElementById('piccccc');
abouttt = document.getElementById('aboupic');

//alert("switches.jsは正常に動作しようとしています。")

pictttt.innerHTML = "<a href=\"" + linkks[picnum] + "\"><img src=\"" + pictus[picnum] + "\" width=\"100%\"></a>";
abouttt.innerHTML = abouts[picnum];

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
	abouttt.innerHTML = abouts[picnum];
}