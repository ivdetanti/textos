(()=>{var n,c,i,r,o,a;window.addEventListener("DOMContentLoaded",e=>{d()});function d(){n=document.getElementById("app"),c=[...document.querySelectorAll("header ul li a")],c.map(e=>{e.addEventListener("click",l)}),document.querySelector(".back").addEventListener("click",s)}function l(e){e&&e.preventDefault();let t=this.getAttribute("texto");i=this.parentNode.querySelector("img"),r=this.text,o=this.getAttribute("data-background"),a=this.getAttribute("data-text-color"),u(t)}function u(e){fetch(e).then(t=>t.text()).then(t=>{y(t)}).catch(t=>{n.innerHTML=`<i>no se encuentra el archivo ${e}</i>`,n.style.opacity=1})}function s(e){e&&e.preventDefault(),document.querySelector(".back").style.display="none",document.querySelector("header nav").classList.remove("hidded"),document.querySelector(".back").innerHTML="",n.innerHTML="",document.body.style.background="#f3f3f3"}function y(e){let t=e.split(`
`).join("<br/>");n.innerHTML=`<div><h3>${r}</h3>${t}</div>`,n.style.opacity=1,document.querySelector(".back").style.display="inline-block",document.querySelector("header nav").classList.add("hidded"),document.querySelector(".back").innerHTML=`<img src='${i.getAttribute("src")}' >`,document.body.style.background=o||"#222222",n.style.color=a||"#fafafa"}})();
