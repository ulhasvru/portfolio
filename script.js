// DARK MODE FIX

document.getElementById("modeToggle").onclick=function(){

document.body.classList.toggle("dark");

};



// RESUME KNOWLEDGE BASE

const resumeData={

experience:"Ulhas has 15+ years experience delivering enterprise SaaS loyalty platforms.",

skills:"Ulhas specializes in loyalty platforms, API validation, enterprise SaaS delivery and AI operations.",

company:"Ulhas worked at Capillary Technologies managing enterprise loyalty solutions.",

role:"Ulhas currently works as Configuration Manager leading SaaS deployments."

};



// AI RESPONSE

document.getElementById("askBtn").onclick=function(){

const q=document.getElementById("question").value.toLowerCase();

const chat=document.getElementById("chatBox");

chat.innerHTML+=`<p><b>You:</b> ${q}</p>`;

let answer=null;

for(let key in resumeData){

if(q.includes(key)){

answer=resumeData[key];

}

}

if(answer){

chat.innerHTML+=`<p><b>AI:</b> ${answer}</p>`;

}

else{

chat.innerHTML+=`<p><b>AI:</b> Oh ho! Ulhas will personally connect you to answer your query. Stay Tune!</p>`;

}

};
