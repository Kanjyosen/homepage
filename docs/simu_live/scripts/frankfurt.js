console.log('frankfurt VER 20251202 0150');

let points = [];

const CR = String.fromCharCode(13);
const LF = String.fromCharCode(10);

let shotImg = document.getElementById('shotImg');
let placeTxt = document.getElementById('whereClicked');

let pinID = '';
let mapID = '';
let placeName = '';

function reqListener() {
  console.log(this.responseText);
  mapID = 'wakekoh';
  const rawTxt = this.responseText;
  const rowTxt = rawTxt.split(LF);
  
  for (let i = 0;i < rowTxt.length;i++){
    const colTxt = rowTxt[i].split(',');
    points.push(colTxt);
  }
}

const req = new XMLHttpRequest();
req.addEventListener('load', reqListener);
req.open('GET', './mapdata/wakekoh.csv');
req.send();


  
function pin(event){
  console.log(event.offsetX);
  console.log(event.offsetY);
  clickPtn = [event.offsetX, event.offsetY]
  if (points.length == 0){
    alert('座標カセットが未挿入です．');
  }else{
    for (let i = 0;i < points.length;i++){
      if(clickPtn[0] <= points[i][1] && clickPtn[1] <= points[i][2] && clickPtn[0] >= points[i][3] && clickPtn[1] >= points[i][4]){
        pinID = points[i][0];
        placeName = points[i][5];
      }
    }
    if(pinID != ''){
      shotImg.src = ('./mapdata/' + mapID + '/' + pinID + '.png');
      placeTxt.innerHTML = placeName;
    }
  }
}

const slot = document.getElementById('cassettePos_fileInput');

function readcassette() {
  const reader = new FileReader();
  reader.addEventListener(
    "load",
    () => {
      const rawTxt = reader.result;
      const rowTxt = rawTxt.split(CR + LF);
      
      for (let i = 0;i < rowTxt.length;i++){
        const colTxt = rowTxt[i].split(',');
        points.push(colTxt);
      }
      
      console.log(rowTxt);
      console.log(points);
    },
    false,
  );
  
  mapID = slot.files[0].name.slice(0, -4);
  reader.readAsText(slot.files[0]);
}

let mapImg = document.getElementById('mapImg');
mapImg.addEventListener('click', pin);