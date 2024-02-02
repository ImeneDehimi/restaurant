// scroll up button
const btn = document.querySelector(".scroll-up");
btn.addEventListener("click", () =>{
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// side bar

function show(){
    const sidenav = document.querySelector(".sidebar")
    sidenav.style.display = "flex"
}
function hide(){
    const sidenav = document.querySelector(".sidebar")
    sidenav.style.display = "none"
}
