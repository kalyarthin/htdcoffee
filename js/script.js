const menuBtn = document.querySelector(".menu");
const linksItems = document.querySelectorAll(".links-item");
menuBtn.addEventListener("click",()=>{
    linksItems.forEach(item=>{
        item.classList.toggle("show");
    })
    if(linksItems.classList.contains("show")){
          menuBtn.src="./photos/icon/cross.svg";
    }else{
          menuBtn.src="./photos/icon/menu.svg";
    }
})  
   
