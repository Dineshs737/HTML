let button = document.getElementById("submit");
console.log(button);

button.addEventListener("focus",()=>{
    button.classList.add("click_button");
    //button.classList.remove("click_button");

    setTimeout(()=>{
      button.classList.remove("click_button");
    },600);

  //  console.log()
});