const offerBtn1 = document.getElementById("offer-1");
const offerBtn2 = document.getElementById("offer-2");
const offerBtn3 = document.getElementById("article");
const dataForm = document.getElementById("dataForm");
const dataForm1 = document.getElementById("dataForm1");
const dataForm2 = document.getElementById("dataForm2");
const offerBanner1 = document.getElementById("offer-banner");

offerBtn3.addEventListener('mouseover',()=>{
    dataForm.style.display = "block";
    offerBtn3.style.height = "172px";
    offerBtn3.style.backgroundColor = "rgb(255, 107, 130,0.1)";
})
offerBtn3.addEventListener('mouseout',()=>{
    dataForm.style.display = "none";
    offerBtn3.style.height = "74px";
    offerBtn3.style.backgroundColor = "#FFFFFF";  
})

offerBtn1.addEventListener('mouseover',()=>{
    dataForm1.style.display = "block";
    offerBtn1.style.height = "172px";
    offerBanner1.style.display = "none";
    offerBtn1.style.backgroundColor = "rgb(255, 107, 130,0.1)";
})

offerBtn1.addEventListener('mouseout',()=>{
    dataForm1.style.display = "none";
    offerBtn1.style.height = "74px";
    offerBanner1.style.display = "block";
    offerBtn1.style.backgroundColor = "#FFFFFF";
})

offerBtn2.addEventListener("mouseover",()=>{
    dataForm2.style.display = "block";
    offerBtn2.style.height = "172px";
    offerBanner2.style.display = "none";
    offerBtn2.style.backgroundColor = "rgb(255, 107, 130,0.1)";   
})