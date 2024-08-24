//Defining all the Offer Buttons
const offerBtn1 = document.getElementById("offer-1");
const offerBtn2 = document.getElementById("offer-2");
const offerBtn3 = document.getElementById("article");
//Defining all the Form Buttons
const dataForm = document.getElementById("dataForm");
const dataForm1 = document.getElementById("dataForm1");
const dataForm2 = document.getElementById("dataForm2");
//Defining all the Offer Banners
const offerBanner1 = document.getElementById('offer-banner1');
const offerBanner2 = document.getElementById('offer-banner2');



//Offer 1 or first Offer JS Function
offerBtn1.addEventListener('mouseover',()=>{
    dataForm1.style.display = "block";
    offerBtn1.style.height = "172px";
    offerBanner1.style.display = "none";
    offerBtn1.style.backgroundColor = "rgb(255, 107, 130,0.1)";
    dataForm.style.display = "none";
    offerBtn3.style.height = "74px";
    offerBtn3.style.backgroundColor = "#FFFFFF"; 
})

offerBtn1.addEventListener('mouseout',()=>{
    dataForm1.style.display = "none";
    offerBtn1.style.height = "74px";
    offerBanner1.style.display = "block";
    offerBtn1.style.backgroundColor = "#FFFFFF";
})

//Offer 2 or the second Offer along with JS Function
offerBtn2.addEventListener("mouseover",()=>{
    dataForm2.style.display = "block";
    offerBtn2.style.height = "172px";
    offerBanner2.style.display = "none";
    offerBtn2.style.backgroundColor = "rgb(255, 107, 130,0.1)";   
    document.getElementById('most-popular').style.display = 'none';
    dataForm.style.display = "none";
    offerBtn3.style.height = "74px";
    offerBtn3.style.backgroundColor = "#FFFFFF"; 
})

offerBtn2.addEventListener("mouseout",()=>{
    dataForm2.style.display = "none";
    offerBtn2.style.height = "74px";
    offerBanner2.style.display = "block";
    offerBtn2.style.backgroundColor = "#ffffff";  
    document.getElementById('most-popular').style.display = 'block'; 
})

//Offer 3 or last Offer JS Function
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