const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const symbols = "0123456789❤";
const fontSize = 18;

let cols = Math.floor(canvas.width / fontSize);
let drops = Array(cols).fill(1);

function rain(){
  ctx.fillStyle = "rgba(0,0,0,0.08)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle = "#ff4fd8";
  ctx.font = fontSize+"px monospace";

  drops.forEach((y,i)=>{
    const t = symbols[Math.floor(Math.random()*symbols.length)];
    ctx.fillText(t,i*fontSize,y*fontSize);

    if(y*fontSize>canvas.height && Math.random()>0.97){
      drops[i]=0;
    }
    drops[i]++;
  });
}

setInterval(rain,33);



const msg = [
"88888    88888    88   88   88   88   888888",
"88  88  88   88   888  88   888  88   88    ",
"88888   88   88   88 8 88   88 8 88   88888 ",
"88  88  88   88   88  888   88   88   88    ",
"88888    88888    88   88   88   88   888888",
"",
"",
" 88888    888      888888   88   88   888888",
"88       88  88      88     888  88     88  ",
" 8888    888888      88     88 8 88     88  ",
"     88  88  88      88     88  888     88  ",
"88888    88  88    888888   88   88     88  ",
"",
"",
"88   88   888888  88       888888   88   88   888888  888888  88   88",
"88   88   88  88  88       88       888  88     88      88    888  88",
"88   88   888888  88       88888    88 8 88     88      88    88 8 88",
" 88 88    88  88  88       88       88  888     88      88    88  888",
"  888     88  88  888888   888888   88   88     88    888888  88   88",
"",
"88       888888   88       888888",
"88         88     88         88  ",
"88         88     88         88  ",
"88         88     88         88  ",
"888888   888888   888888   888888"
];


const el = document.getElementById("message");
let i=0;

setTimeout(()=>{
  const it = setInterval(()=>{
    if(i<msg.length){
      el.textContent += msg[i]+"\n";
      i++;
    } else {
      clearInterval(it);
    }
  },200);
},3000);
