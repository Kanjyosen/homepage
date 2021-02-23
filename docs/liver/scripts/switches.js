function setUpes(){
picnum = 0;

p1 = "./images/20210224.png";
p2 = "./images/b_20210202.png";
p3 = "./images/20210224.png";
p4 = "./images/now_constructing.png";

//枠に空きがある場合は画像を"./images/now_constructing.png"に設定すること
//画像設定

pictus = [p1, p2, p3, p4];

l1 = "./about/20210224.htm";
l2 = "./blog/20210202.htm";
l3 = "https://youtu.be/HTSiXecf44Q";
l4 = "https://zerosaka.npjp.net/liver/index.html";

//枠に空きがある場合はURLを"https://zerosaka.npjp.net/liver/index.html"に設定すること
//リンク設定

linkks = [l1, l2, l3, l4];

a1 = "ぜろさか・ざ・らいばー 2021年度第４四半期活動報告会（ニコニコ生放送） 2021/02/24";
a2 = "一日4枠やってみた感想とか反省とか 2021/02/02 BLOG記事";
a3 = "ぜろさか・ざ・らいばー 2021年度第４四半期活動報告会（YouTube） 2021/02/25";
a4 = "毎度ご閲覧いただきありがとうございます";

//枠に空きがある場合はテキストを"毎度ご閲覧いただきありがとうございます"に設定すること
//説明文設定

abouts = [a1, a2, a3, a4];

pictttt = document.getElementById('piccccc');
abouttt = document.getElementById('aboupic');

//alert("switches.jsは正常に動作しようとしています。")

c1 = "";
c2 = "";
c3 = "";
c4 = "";

//特に注意喚起要素がなければ空欄にすること
//注意喚起

cauti = [c1, c2, c3, c4];

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
	if (cauti[picnum] == ""){
		pictttt.innerHTML = "<a href=\"" + linkks[picnum] + "\"><img src=\"" + pictus[picnum] + "\" width=\"100%\"></a>";
	}else{
		pictttt.innerHTML = "<a href=\"javascript:doCaution()\u003B\"><img src=\"" + pictus[picnum] + "\" width=\"100%\"></a>";
	}
	abouttt.innerHTML = abouts[picnum];
}

function doCaution(){
	var answer = window.confirm(cauti[picnum]);
	if (answer == true){
		document.location.href = linkks[picnum];
	}else{
		//ﾅﾆﾓｼﾏｾﾝﾖ?
	}
}
