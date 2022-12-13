const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light")
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose"),
    optionSelect = document.querySelector(".option-icon"),
    optOverlay = document.querySelector(".option-overlay");

//* Revealing the Services offered overlay on top of image in #services
optionSelect.addEventListener("click" , () =>{
  optionSelect.classList.add("active");
  optOverlay.classList.toggle("service-list");
})

     





    let getMode = localStorage.getItem("mode");
        if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
        }

//* Toggle Dark and Light Mode
    modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        //* to keep user selected mode even after page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "light-mode"); 
        }
    })

//* Toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
})


body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }

    // if(!clickedElm.classList.contains("optionSelect")){
    //     optionSelect.classList.remove("active");
    //     optOverlay.classList.remove("service-list")
    // }

});






