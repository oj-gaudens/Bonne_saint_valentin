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
    if(y*fontSize>canvas.height && Math.random()>0.97) drops[i]=0;
    drops[i]++;
  });
}
setInterval(rain,33);


// 💖 MESSAGE EN CHIFFRES
const msg = [
"888888   666666   777777   777777   888888        555555   444444   111111   777777   888888",
"88   88  66       77   77  77   77  88   88       55       44  44      11    77   77  88   88",
"888888   666666   77   77  77   77  888888        555555   444444      11    77   77  888888",
"88   88  66   66  77   77  77   77  88   88           55       44      11    77   77  88   88",
"888888   666666   777777   777777   888888        555555       44    111111  777777   88   88",
"",
"777777   111111   777777   888888   777777        888888   666666   777777   888888   111111   777777   888888   111111   777777",
"77   77     11     77   77  88   88  77   77       88   88  66       77   77  88   88     11     77   77  88   88     11     77   77",
"777777      11     77   77  888888   777777        888888   666666   77   77  888888      11     777777   888888      11     777777",
"77   77     11     77   77  88   88  77   77       88   88  66   66  77   77  88          11     77       88          11     77  77",
"77   77  111111    777777   88   88  77   77       888888   666666   777777   88       111111   77       88       111111   77   77"
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
