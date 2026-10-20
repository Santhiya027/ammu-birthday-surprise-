/* =========================================================
   PERSONALIZE HERE — everything you need to change is below
   Leave image/music paths as "" until you add your own files.
   ========================================================= */
const CONFIG = {
  partnerName: "MAGII💙😘✨",
  myName: "YOUR GIRL 🫶",
  nickname: "MY LOVE",
  birthdayYear: "2026",
  // Replace these with local files, e.g. "assets/images/his-photo.jpg"
  images: {
    hisPhoto: "partner-photo.jpeg",
    finalPhoto: "partner-photo1.jpeg",
    memories: ["Memory1.jpeg", "Memory2.jpeg", "Memory3.jpeg", "Memory4.jpeg", "Memory5.jpeg", "Memory6.jpeg", "Memory.jpeg", "Memory8.jpeg", "Memory9.jpeg", "Memory10.jpeg"]
  },
  memoryCaptions: [
    "Our First selfie as senior-junior crush with little blush 😍",
    "Our First Bike ride 👩🏻‍❤️‍👨🏻🚲",
    "Proposal Moment 🥺🤌🏻",
    "My favourite place will always be beside you ❤️",
    "A little moment I want to keep forever 🫶",
    "You make every ordinary day brighter ✨",
    "Us, being our favourite kind of silly 😂",
    "A memory that still makes me smile 🥹",
    "More memories, more birthdays, more us 💗",
    "My today and all my tomorrows ❤️"
  ],
personalLetter: "Ammu💙,\\n\\nNamma love start aagi 3 years aagiduchu… Indha 3 years la evlo happy moments, evlo fights, evlo tears, evlo struggles… ellathayum thaandi inniku namma inga vandhu nikkiradhu enakku romba special. 🥹❤️\\n\\nNee en college junior ah irundha… aana en life la en husband ah varuva nu naan appo nenachadhu illa. Maybe namma meet aanadhu coincidence ah irukkalam, but nee en life partner aanadhu definitely destiny. 🫶🏻\\n\\nVeetla namma love therinju, neraya struggles face panni, evlo bayam irundhaalum oruthar oruthar kaiya vidaama irundhom. Inniki namma parents sammathathoda marriage panna porom nu ninaikkumbodhu, kannula tears varudhu… but indha time happy tears. 🥹❤️\\n\\nNext month, namma love ku oru beautiful beginning start aaga pogudhu. Un kooda life full ah irukkanum, un happiness la smile pannanum, un kashtathula unakku support ah irukkanum. Ellame un kooda share pannanum. 🥰🫂🤗\\n\\nLife eppovume easy ah irukkum nu solla mudiyadhu… but enna nadandhaalum, naan un pakkathula iruppen. Namma rendu perum serndhu ellathayum face pannuvom. Unna love pannadhu en life la naan edutha best decision. ❤️\\n\\nI love you so much, my love 🫂💋😘👻. Thank you for choosing me, loving me, and never giving up on us.\\n\\n3 years of love… and now, a lifetime of togetherness. ❤️🫂\\n\\nI love you more than I can explain. Happy birthday, ennavane. ❤️\\n\\nAlways yours,\\nUn Aval 💙🫰🏻",  music: "", // e.g. "assets/music/birthday.mp3"
  sounds: {
    pop: "", click: "", celebration: ""
  }
};

/* Avengers dialogue is preserved from the supplied plan. */
const AVENGERS_ONE = [
  {name:"BLACK WIDOW",avatar:"🕵️‍♀️",intro:"Natasha here. 🖤",line:"She might act strong… but around you, she's just your softest girl. 🥹❤️"},
  {name:"IRON MAN",avatar:"🦾",intro:"Hey bro… Tony here. 😎",line:"She loves you 3000… and honestly, that's a pretty serious number. ❤️"},
  {name:"CAPTAIN AMERICA",avatar:"🛡️",intro:"Steve Rogers here. 🇺🇸",line:"She may not have a shield, but she'll always stand by your side. ❤️"},
  {name:"THOR",avatar:"⚡",intro:"By the power of Asgard ⚡",line:"you are loved by a woman more precious than all the treasures of the Nine Realms! 😂❤️"},
  {name:"SPIDER-MAN",avatar:"🕷️",intro:"Hey! Peter here! 🕷️",line:"She loves you so much… and yes, you're officially her favourite superhero too. 😂❤️"},
  {name:"HULK",avatar:"💚",intro:"HULK SMASH! 💚",line:"But she doesn't want to smash anything… she just wants to love youuu so much! 😂❤️"}
];
const AVENGERS_TWO = [
  {name:"HAWKEYE",avatar:"🏹",intro:"Clint here. 🏹",line:"The greatest shot she ever took was giving her heart to you ❤️"},
  {name:"CAPTAIN MARVEL",avatar:"🦸‍♀️",intro:"Carol Danvers here. ✨",line:"She's powerful on her own… but somehow, you make her smile a little brighter. ❤️"},
  {name:"DOCTOR STRANGE",avatar:"🪄",intro:"I've seen millions of possible futures… 🔮",line:"And in almost every one of them, she still chooses you. 🥹💍"},
  {name:"SCARLET WITCH",avatar:"🕸️",intro:"Wanda here. ❤️",line:"She doesn't need magic to make you happy… her love for you is already powerful enough. ✨"},
  {name:"ANT-MAN",avatar:"🐜",intro:"Scott Lang here! 🐜",line:"I'm not saying she talks about you a lot… but okay, yes. She REALLY talks about you a lot. 😂❤️"},
  {name:"GROOT",avatar:"🌳",intro:"I am Groot.",line:"I am Groot… which apparently means: ‘She loves youuu so much!’ 😂❤️"}
];

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
let currentStep = 1, musicOn = false, balloonsPopped = 0, avengerIndex1 = 0, avengerIndex2 = 0;
let audioContext = null, blowStream = null, blowAnalyser = null, blowTimer = null, blowStarted = false;
const music = $("#backgroundMusic"), effect = $("#effectAudio");
const scenes = $$(".scene");

function setImage(img, path, altText) {
  if (!img) return;
  if (path) { img.src = path; img.classList.remove("empty-photo"); }
  else {
    img.removeAttribute("src");
    img.classList.add("empty-photo");
    img.alt = altText || "Add your photo path in js/script.js";
  }
}
function makePhotoFallbacks() {
  $$("[data-image]").forEach(img => {
    const key = img.dataset.image;
    setImage(img, CONFIG.images[key], key === "hisPhoto" ? "Add his birthday photo in CONFIG.images.hisPhoto" : "Add your favourite photo in CONFIG.images.finalPhoto");
    if (!CONFIG.images[key]) {
      img.style.background = "linear-gradient(145deg,#7c2548,#f6b8ca)";
      img.parentElement.classList.add("photo-placeholder");
      img.insertAdjacentHTML("afterend", '<span class="photo-placeholder-label">YOUR PHOTO<br><small>Add image path in script.js</small></span>');
    }
  });
}
function updateNames() {
  $$("[data-partner]").forEach(el => el.textContent = CONFIG.partnerName);
  $$("[data-myname]").forEach(el => el.textContent = CONFIG.myName);
  document.title = `A Birthday Surprise for ${CONFIG.partnerName} ❤️`;
}
function showStep(n) {
  n = Math.max(1, Math.min(13, n));
  currentStep = n;
  scenes.forEach(scene => {
    const active = Number(scene.dataset.step) === n;
    scene.classList.toggle("active", active);
    scene.setAttribute("aria-hidden", active ? "false" : "true");
    if (active) scene.scrollTop = 0;
  });
  $("#progressText").textContent = `${n} / 13`;
  $("#progressBar").style.width = `${(n/13)*100}%`;
  if (n === 5 || n === 7) launchConfetti(n === 5 ? 180 : 120);
  if (n === 10) heartShower(15);
  if (n === 13) heartShower(18);
  if (n !== 4) stopBlowDetection();
}
function nextStep() { showStep(currentStep + 1); playTone(580, .06); }
$$("[data-next]").forEach(button => button.addEventListener("click", nextStep));
$("#replayButton").addEventListener("click", () => {
  balloonsPopped=0; $$(".balloon").forEach(b=>{b.classList.remove("popped");b.disabled=false;});
  $("#balloonMessage").textContent="Your little messages are waiting…";
  $("#balloonDone").classList.add("hidden");$("#balloonContinue").classList.add("hidden");
  avengerIndex1=0;avengerIndex2=0;renderAvenger(1);renderAvenger(2);
  $("#envelope").classList.remove("opened","hidden");$("#letterPaper").classList.add("hidden");$("#letterContinue").classList.add("hidden");$("#letterHint").classList.remove("hidden");
  $("#flame").classList.remove("out");showStep(1);
});
function playTone(freq=520, duration=.08, type="sine") {
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if(audioContext.state==="suspended") audioContext.resume();
    const oscillator=audioContext.createOscillator(), gain=audioContext.createGain();
    oscillator.type=type; oscillator.frequency.value=freq;gain.gain.setValueAtTime(.07,audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+duration);
    oscillator.connect(gain);gain.connect(audioContext.destination);oscillator.start();oscillator.stop(audioContext.currentTime+duration);
  } catch(e) {}
}
function playConfiguredSound(name) {
  const path=CONFIG.sounds[name];
  if(path){effect.src=path;effect.currentTime=0;effect.play().catch(()=>{});}
  else playTone(name==="pop"?240:name==="celebration"?740:500,name==="celebration"?.35:.07,name==="pop"?"triangle":"sine");
}
function setMusicToggle() {
  $("#soundToggle").addEventListener("click", async () => {
    if (!CONFIG.music) {
      musicOn=!musicOn; $("#soundToggle").innerHTML = musicOn ? "♫ <span>Sound on</span>" : "♫ <span>Sound off</span>";
      playTone(musicOn?660:360,.15);
      return;
    }
    if (!musicOn) { music.src=CONFIG.music; try {await music.play();musicOn=true;} catch(e){musicOn=false;} }
    else {music.pause();musicOn=false;}
    $("#soundToggle").innerHTML = musicOn ? "♫ <span>Sound on</span>" : "♫ <span>Sound off</span>";
  });
}
document.addEventListener("pointerdown", () => { if(audioContext?.state==="suspended") audioContext.resume(); }, {once:true});

/* Balloon mini game */
$$(".balloon").forEach(balloon => balloon.addEventListener("click", () => {
  if(balloon.classList.contains("popped")) return;
  balloon.disabled=true;balloonsPopped++;
  const message=balloon.dataset.message;
  balloon.classList.add("popping");
  playConfiguredSound("pop");burstAt(balloon);
  setTimeout(()=>{
    balloon.classList.remove("popping");balloon.classList.add("message-visible");
    balloon.innerHTML=`<span class="balloon-reveal">${message}</span>`;
    balloon.setAttribute("aria-label",message);
  },240);
  if(balloonsPopped===6){
    setTimeout(()=>{$("#balloonDone").classList.remove("hidden");$("#balloonContinue").classList.remove("hidden");$("#balloonMessage").textContent="You found all six little truths. ❤️";},500);
  }
}));
function burstAt(el) {
  const r=el.getBoundingClientRect();
  for(let i=0;i<9;i++){const dot=document.createElement("span");dot.className="burst-dot";dot.style.left=(r.left+r.width/2)+"px";dot.style.top=(r.top+r.height/2)+"px";dot.style.setProperty("--dx",(Math.random()*100-50)+"px");dot.style.setProperty("--dy",(Math.random()*100-50)+"px");document.body.appendChild(dot);setTimeout(()=>dot.remove(),700);}
}

/* Candle: tap fallback is always available. Microphone is optional and never blocks flow. */
$("#blowButton").addEventListener("click", blowCandle);
async function startBlowDetection() {
  if(blowStarted || !navigator.mediaDevices?.getUserMedia) return;
  try {
    blowStream=await navigator.mediaDevices.getUserMedia({audio:true});audioContext ||= new (window.AudioContext||window.webkitAudioContext)();
    const source=audioContext.createMediaStreamSource(blowStream);blowAnalyser=audioContext.createAnalyser();blowAnalyser.fftSize=512;source.connect(blowAnalyser);
    const data=new Uint8Array(blowAnalyser.frequencyBinCount);blowStarted=true;
    $("#blowStatus").textContent="Listening for a little birthday blow… or tap any time.";
    blowTimer=setInterval(()=>{if(currentStep!==4)return;blowAnalyser.getByteTimeDomainData(data);let sum=0;for(const v of data){const x=(v-128)/128;sum+=x*x;}if(Math.sqrt(sum/data.length)>.18)blowCandle();},180);
  } catch(e) { $("#blowStatus").textContent="Microphone unavailable — no worries, tap the candle to blow it out."; }
}
function stopBlowDetection(){if(blowTimer)clearInterval(blowTimer);blowTimer=null;if(blowStream)blowStream.getTracks().forEach(t=>t.stop());blowStream=null;blowAnalyser=null;blowStarted=false;}
function blowCandle() {
  if($("#flame").classList.contains("out"))return;
  $("#flame").classList.add("out");$("#blowStatus").textContent="Wish made… ❤️";playConfiguredSound("celebration");stopBlowDetection();
  document.body.classList.add("candle-darken");setTimeout(()=>{document.body.classList.remove("candle-darken");showStep(5);},650);
}
let micAttempted=false;
const originalShowStep=showStep;
showStep = function(n){originalShowStep(n);if(n===4&&!micAttempted){micAttempted=true;startBlowDetection();}};

/* YES/NO playful question. NO moves within its own safe area and cycles exact messages. */
const noMessages=['😌 "Are you sure about that?"','❤️ "Wrong button, sir!"','😂 "NO select panna mudiyadhu!"','💍 "You already know the answer…"','😂❤️ "Why are you still trying? 😂❤️"'];
let noIndex=0;
function dodgeNo(event) {
  event?.preventDefault();const btn=$("#noButton"),area=$(".answer-area"),r=area.getBoundingClientRect(),br=btn.getBoundingClientRect();
  const maxX=Math.max(0,r.width-br.width-8),maxY=Math.max(0,r.height-br.height-8);
  btn.style.position="absolute";btn.style.left=(Math.random()*maxX)+"px";btn.style.top=(Math.random()*maxY)+"px";
  $("#noMessage").textContent=noMessages[noIndex%noMessages.length];noIndex++;playTone(330,.08,"triangle");heartShower(2);
}
$("#noButton").addEventListener("pointerenter",dodgeNo);
$("#noButton").addEventListener("pointerdown",dodgeNo);
$("#noButton").addEventListener("click",dodgeNo);
$("#yesButton").addEventListener("click",()=>{playConfiguredSound("celebration");showStep(7);});
function renderAvenger(group) {
  const data=group===1?AVENGERS_ONE:AVENGERS_TWO,index=group===1?avengerIndex1:avengerIndex2;
  const suffix=group===1?"":"2",hero=data[index];
  $("#avengerAvatar"+suffix).textContent=hero.avatar;$("#avengerName"+suffix).textContent=hero.name;$("#avengerDialogue"+suffix).textContent=hero.intro;$("#avengerLine"+suffix).textContent=hero.line;$("#avengerCount"+suffix).textContent=`${index+1} / ${data.length}`;
  const button=$("#avengerNext"+suffix);
  button.textContent=index===data.length-1?(group===1?"Meet the rest →":"Final message →"):"Next hero →";
}
$("#avengerNext").addEventListener("click",()=>{if(avengerIndex1<AVENGERS_ONE.length-1){avengerIndex1++;renderAvenger(1);}else showStep(9);});
$("#avengerNext2").addEventListener("click",()=>{if(avengerIndex2<AVENGERS_TWO.length-1){avengerIndex2++;renderAvenger(2);}else showStep(10);});
function initMemories(){
  const img=$("#memoryImage"),dots=$("#memoryDots");dots.innerHTML="";
  CONFIG.memoryCaptions.forEach((caption,i)=>{const b=document.createElement("button");b.setAttribute("aria-label",`Show memory ${i+1}`);b.addEventListener("click",()=>showMemory(i));dots.appendChild(b);});
  showMemory(0);
}
let memoryIndex=0,touchX=0;
function showMemory(i){
  const count=CONFIG.memoryCaptions.length;memoryIndex=(i+count)%count;
  const img=$("#memoryImage"),path=CONFIG.images.memories[memoryIndex]||"";
  img.classList.add("changing");setTimeout(()=>{if(path){img.src=path;img.alt=CONFIG.memoryCaptions[memoryIndex];img.style.background="transparent";}else{img.removeAttribute("src");img.alt="Add memory image path in CONFIG.images.memories";img.style.background="linear-gradient(145deg,#773052,#e8a4bb)";}img.classList.remove("changing");},130);
  $("#memoryCaption").textContent=CONFIG.memoryCaptions[memoryIndex];$("#memoryNumber").textContent=`${String(memoryIndex+1).padStart(2,"0")} / ${String(count).padStart(2,"0")}`;
  $$("#memoryDots button").forEach((b,j)=>b.classList.toggle("active",j===memoryIndex));
}
$("#memoryPrev").addEventListener("click",()=>showMemory(memoryIndex-1));$("#memoryNext").addEventListener("click",()=>showMemory(memoryIndex+1));
$(".memory-photo").addEventListener("touchstart",e=>{touchX=e.changedTouches[0].screenX;},{passive:true});
$(".memory-photo").addEventListener("touchend",e=>{const diff=e.changedTouches[0].screenX-touchX;if(Math.abs(diff)>40)showMemory(memoryIndex+(diff<0?1:-1));},{passive:true});
$("#envelope").addEventListener("click",()=>{
  const envelope=$("#envelope"),paper=$("#letterPaper");
  if(!paper.classList.contains("hidden"))return;
  envelope.classList.add("opened");setTimeout(()=>{envelope.classList.add("hidden");paper.classList.remove("hidden");$("#letterText").textContent=CONFIG.personalLetter.replace(/\\n/g,"\n");$("#letterHint").classList.add("hidden");$("#letterContinue").classList.remove("hidden");typeLetter();},420);
});
function typeLetter(){
  const target=$("#letterText"),full=CONFIG.personalLetter.replace(/\\n/g,"\n");target.textContent="";
  // Gentle type-in effect; line breaks remain intact.
  let i=0;const tick=()=>{if(i>=full.length)return;target.textContent+=full[i++];if(currentStep===12)setTimeout(tick,full.length>500?8:14);};tick();
}
function heartShower(count=8){for(let i=0;i<count;i++){setTimeout(()=>{const h=document.createElement("span");h.className="float-heart";h.textContent=["♡","♥","✨","💗"][Math.floor(Math.random()*4)];h.style.left=(5+Math.random()*90)+"vw";h.style.top=(60+Math.random()*30)+"vh";document.body.appendChild(h);setTimeout(()=>h.remove(),1900);},i*90);}}
function launchConfetti(count=100){
  const scene=$(`.scene[data-step="${currentStep}"]`),canvas=$(".confetti-canvas",scene);if(!canvas)return;
  const ctx=canvas.getContext("2d"),rect=scene.getBoundingClientRect();canvas.width=rect.width*devicePixelRatio;canvas.height=rect.height*devicePixelRatio;ctx.scale(devicePixelRatio,devicePixelRatio);
  const pieces=Array.from({length:count},()=>({x:Math.random()*rect.width,y:-Math.random()*rect.height,w:3+Math.random()*5,h:5+Math.random()*8,v:2+Math.random()*4,drift:Math.random()*2-1,rot:Math.random()*6,vr:Math.random()*.15-.075,color:["#ffb9ce","#f8d7a2","#fff4f7","#d78eb0","#a8d8d4"][Math.floor(Math.random()*5)]}));
  let frame=0;function draw(){ctx.clearRect(0,0,rect.width,rect.height);pieces.forEach(p=>{p.y+=p.v;p.x+=p.drift;p.rot+=p.vr;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot);ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();});frame++;if(frame<180&&currentStep===Number(scene.dataset.step))requestAnimationFrame(draw);else ctx.clearRect(0,0,rect.width,rect.height);}requestAnimationFrame(draw);
}
function initHeartBackground(){
  const layer=$("#heartBackground");
  for(let i=0;i<18;i++){const heart=document.createElement("span");heart.className="background-heart";heart.textContent=["♡","♥","♡","✦"][i%4];heart.style.left=(Math.random()*100)+"%";heart.style.animationDelay=(-Math.random()*18)+"s";heart.style.animationDuration=(12+Math.random()*13)+"s";heart.style.setProperty("--heart-size",(10+Math.random()*15)+"px");layer.appendChild(heart);}
}
function initHeartCursor(){
  const cursor=$("#heartCursor");if(!cursor||matchMedia("(hover: none)").matches)return;
  document.addEventListener("pointermove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";cursor.classList.add("visible");});
  document.addEventListener("pointerdown",e=>{const h=document.createElement("span");h.className="cursor-pop-heart";h.textContent="♥";h.style.left=e.clientX+"px";h.style.top=e.clientY+"px";document.body.appendChild(h);setTimeout(()=>h.remove(),800);});
}
updateNames();makePhotoFallbacks();setMusicToggle();initMemories();renderAvenger(1);renderAvenger(2);initHeartBackground();initHeartCursor();showStep(1);
