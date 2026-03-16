// DARK MODE

document.getElementById("mode").onclick=function(){

document.body.classList.toggle("dark");

};


// SIMPLE CHART

const canvas=document.getElementById("chart");

const ctx=canvas.getContext("2d");

ctx.fillStyle="#4c6fff";

ctx.fillRect(50,50,80,200);
ctx.fillRect(150,120,80,130);
ctx.fillRect(250,90,80,160);


// AI ASSISTANT

document.getElementById("ask").onclick=function(){

const q=document.getElementById("question").value;

const box=document.getElementById("chatbox");

if(q==="") return;

box.innerHTML+=`<p><b>You:</b> ${q}</p>`;

box.innerHTML+=`<p><b>AI:</b> Ulhas has 15+ years experience delivering enterprise loyalty SaaS platforms.</p>`;

};
