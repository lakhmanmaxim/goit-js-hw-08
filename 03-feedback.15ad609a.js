const e=document.querySelector('.feedback-form [name="email"]'),t=document.querySelector('[name="message"]'),a=document.querySelector(".feedback-form"),o={};!function(){const a=localStorage.getItem("feedback-form-state"),o=JSON.parse(a);o&&(e.value=o.email);o&&(t.value=o.message)}(),a.addEventListener("input",(function(e){o[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),a.addEventListener("submit",(function(r){r.preventDefault(),o.email=e.value,o.message=t.value,console.log("FINAL FORM DATA ",o),a.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.15ad609a.js.map
