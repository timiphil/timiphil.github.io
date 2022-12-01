const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function pageSwitches() {
 // button click active class
 for (let i = 0; i < sectBtn.length; i++) {
      sectBtn[i].addEventListener('click', function(){
         let currentBtn = document.querySelectorAll('.active-btn');
         currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
         this.className += " active-btn";
      })
   }
   // section active class
   allSections.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      if (id) {
         // remove selected from the other btns
         sectBtns.forEach((btn) => {
            btn.classList.remove("active")
         })
         e.target.classList.add("active")

         // hide other sections
         sections.forEach((section) => { 
            section.classList.remove("active")
         })

         const element = document.getElementById(id);
         element.classList.add("active");
      }     
   })

   /* Toggle theme */
   const themeBtn = document.querySelector('.theme-btn');
   themeBtn.addEventListener("click", () => {
      let element = document.body;
      element.classList.toggle("light-mode");
   })

   /* toggle */
   // const toggle = document.getElementById("toggle");
   // const nav = document.getElementById("nav");

   // toggle.addEventListener("click", () => nav.classList.toggle("active"));

let encEmail = "dGltaXBoaWxAZ21haWwuY29t";
const form = document.getElementById("email");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
}

console.log(pageSwitches());