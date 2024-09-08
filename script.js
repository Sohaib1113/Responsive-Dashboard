const body = document.querySelector("body"),
sidebar = body.querySelector(".sidebar"),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click",()=>{
    sidebar.classList.toggle("close"); 
});
searchBtn.addEventListener("click",()=>{
    sidebar.classList.remove("close"); 
});



modeSwitch.addEventListener("click",()=>{
    body.classList.toggle("dark"); 
    if(body.classList.contains("dark")){
        modeText.innerText="Light Mode"
    }else{
        modeText.innerText="Dark Mode"
    }
});

// DSDSA
const toggleHeaderButton = document.querySelector(".toggle-menu-header");
const header = document.querySelector(".navbar");

toggleHeaderButton.addEventListener("click", () => {
    if (header.classList.contains("header-hidden")) {
        header.classList.remove("header-hidden");
    } else {
        header.classList.add("header-hidden");
    }
});

// SDASD
