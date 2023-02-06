var faq=document.getElementsByClassName("faq-header");var i;let body;function redirectFaq(){window.location.href="faq.html"}
for(i=0;i<faq.length;i++){faq[i].addEventListener("click",function(){let faqContainer=document.querySelectorAll(".faq-container div");faqContainer.forEach((item)=>{const faqHeader=item.querySelector("div > .faq-header");const faqBody=item.querySelector("div > .faq-body");if(faqHeader!==this){if(faqHeader&&faqHeader.classList.contains("active")){faqBody.style.display="none";faqHeader.classList.remove("active");}}});this.classList.toggle("active");body=this.nextElementSibling;if(body.style.display==="block"){body.style.display="none";}else{body.style.display="block";}});}
const imgs=document.getElementById("sliders");const img=document.querySelectorAll("#sliders div");let idx=0;let slideIndex=0;showSlides();showSlidesNew();function showSlides(){let i;let slides=document.getElementsByClassName("mySlides");for(i=0;i<slides.length;i++){slides[i].style.display="none";}
slideIndex++;if(slideIndex>slides.length){slideIndex=1;}
slides[slideIndex-1].style.display="block";setTimeout(showSlides,4000);}
function handleCheckoutDonate(id,amount){let domain="https://hom.checkout.juntospelascriancas.visaomundial.org.br/dados-pessoais";if("juntospelascriancas.visaomundial.org.br"===window.location.hostname){domain=domain.replace("hom.","");}
const url=`${domain}?p=${id}&v=${amount}`;window.location.href=url;}
function showSlidesNew(){let i;let slides=document.getElementsByClassName("mySlidesNew");for(i=0;i<slides.length;i++){slides[i].style.display="none";}
slideIndex++;if(slideIndex>slides.length){slideIndex=1;}
slides[slideIndex-1].style.display="block";setTimeout(showSlidesNew,4000);}
function handleCheckoutDonate(id,amount){let domain="https://hom.checkout.juntospelascriancas.visaomundial.org.br/dados-pessoais";if("juntospelascriancas.visaomundial.org.br"===window.location.hostname){domain=domain.replace("hom.","");}
const url=`${domain}?p=${id}&v=${amount}`;window.location.href=url;}