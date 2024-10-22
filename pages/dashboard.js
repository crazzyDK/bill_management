let detail=document.querySelectorAll(".details");
let bill=document.querySelector(".bill");
let body=document.querySelector(".container1");
let cancel=document.querySelector(".fa-xmark");
let whole=document.querySelector(".container1");



detail.forEach((value,index)=>{
   
    detail[index].addEventListener('click',()=>{
        
        bill.classList.toggle("show");
        body.classList.add("blur");
        
        document.querySelector(".bill").style.display="flex";
       
    });
})

cancel.addEventListener('click',()=>{
    
    document.querySelector(".bill").style.display="none";
    body.classList.remove("blur");
 });
 
 




 

 

