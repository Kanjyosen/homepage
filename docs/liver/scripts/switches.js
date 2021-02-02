function setUpes(){
picnum = 0;

p1 = "./images/20210203.png";
p2 = "./images/b_20210202.png";
p3 = "./images/20210203_2.png";
p4 = "./images/now_constructing.png";

//枠に空きがある場合は画像を"./images/now_constructing.png"に設定すること

pictus = [p1, p2, p3, p4];

l1 = "https://youtu.be/SX4sJUcm02Q";
l2 = "./blog/20210202.htm";
l3 = "https://youtu.be/N3RjVM-yZS8";
l4 = "https://zerosaka.npjp.net/liver/index.html";

//枠に空きがある場合はURLを"https://zerosaka.npjp.net/liver/index.html"に設定すること

linkks = [l1, l2, l3, l4];

a1 = "PAPERS,PLEASE配信 2021/02/03 11:00";
a2 = "一日4枠やってみた感想とか反省とか 2021/02/02 BLOG記事";
a3 = "ぜろさか・ざ・らいばーのツイートって英語圏の人にはどう見えてるの？ 2021/02/03 15:00";
a4 = "毎度ご閲覧いただきありがとうございます";

//枠に空きがある場合はテキストを"毎度ご閲覧いただきありがとうございます"に設定すること

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