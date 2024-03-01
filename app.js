const button1=document.getElementById('btn1');
const button2=document.getElementById('btn2');
const button3=document.getElementById('btn3');
const img1=document.getElementById('img1');
const img2=document.getElementById('img2');
const img3=document.getElementById('img3');


img1.style.display='none';
img2.style.display='none';
img3.style.display='none';

button1.addEventListener('click',()=>{
    if(img1.style.display=='none'){
        img1.style.display='flex';
    }else{
        img1.style.display='none';
    }
    
    img2.style.display='none';
    img3.style.display='none';
})

button2.addEventListener('click',()=>{
    if(img2.style.display=='none'){
        img2.style.display='flex';
    }else{
        img2.style.display='none';
    }

    img1.style.display='none';
    img3.style.display='none';
})

button3.addEventListener('click',()=>{
    if(img3.style.display=='none'){
        img3.style.display='flex';
    }else{
    img3.style.display='none';
    }

    img1.style.display='none';
    img2.style.display='none';
})