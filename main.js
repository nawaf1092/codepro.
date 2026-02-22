function runCode(){
let code=document.getElementById("code").value;
document.getElementById("preview").srcdoc=code;
}

function complete(){
let xp=localStorage.getItem("xp")||0;
xp=parseInt(xp)+10;
localStorage.setItem("xp",xp);
alert("🔥 +10 XP");
}

function loadXP(){
let xp=localStorage.getItem("xp")||0;
document.getElementById("xp").innerText="XP: "+xp;
document.getElementById("progress").style.width=(xp%100)+"%";
}

function saveName(){
let name=document.getElementById("username").value;
localStorage.setItem("name",name);
loadProfile();
}

function loadProfile(){
document.getElementById("name").innerText="Name: "+(localStorage.getItem("name")||"Player");
document.getElementById("xp").innerText="XP: "+(localStorage.getItem("xp")||0);
}
