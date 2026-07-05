let visitCount = localStorage.getItem("visitCount");

if(visitCount === null){
    visitCount = 1;
}else{
    visitCount = Number(visitCount) + 1;
}

localStorage.setItem("visitCount", visitCount);

let visitMessage = "";

if(visitCount === 1){
    visitMessage = "……初めてだね。";
}else if(visitCount < 10){
    visitMessage = "また来たんだ。";
}else if(visitCount === 10){
    visitMessage = "最近よく見かけるね。";
}else if(visitCount < 50){
    visitMessage = "境界の向こう、少し慣れてきた？";
}else if(visitCount === 50){
    visitMessage = "もう道は覚えた？";
}else if(visitCount < 100){
    visitMessage = "あんた、ほんとによく来るね。";
}else{
    visitMessage = "……おかえり。";
}

const visitMessageElement = document.getElementById("visit-message");

if(visitMessageElement){
    visitMessageElement.textContent = visitMessage;
}

console.log(visitMessage);
console.log(visitCount);

const secretLink = document.getElementById("secret-link");

if(secretLink && visitCount >= 100){
    secretLink.classList.add("open");
}