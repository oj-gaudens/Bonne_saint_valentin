const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const symbols = "0123456789❤";
const fontSize = 18;
const cols = canvas.width / fontSize;
const drops = Array(Math.floor(cols)).fill(1);

function rain(){
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#ff4fd8";
  ctx.font = fontSize+"px monospace";

  drops.forEach((y,i)=>{
    const t = symbols[Math.floor(Math.random()*symbols.length)];
    ctx.fillText(t,i*fontSize,y*fontSize);
    if(y*fontSize>canvas.height && Math.random()>0.97) drops[i]=0;
    drops[i]++;
  });
}
setInterval(rain,33);

// TEXT EN CHIFFRES
const msg = [
"88       88  888888   88       888888",
"88       88    88     88         88",
"88       88    88     88         88",
"88       88    88     88         88",
"888888   88  888888   888888   888888",
"",
"666666   666666   66   66",
"66   66  66   66  666  66",
"66  66  66    66  66 6 66",
"66   66  66   66  66   666",
"666666   666666   66    66",
"",
"66   66   333333   666666",
"666  66   33       66",
"66 6 66   33333    66666",
"66   666  33       66",
"66    66  333333   666666",
];

const el = document.getElementById("message");
let i=0;
setTimeout(()=>{
  const it = setInterval(()=>{
    if(i<msg.length){
      el.textContent += msg[i]+"\n";
      i++;
    } else clearInterval(it);
  },200);
},3000);
