import{S as p,i as l}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const u=(o,s)=>{const n=o.hits.map(e=>`<li>
          <a href="${e.largeImageURL}"><img src="${e.webformatURL}" alt="${e.tags}"/></a>
          <div class="imageInfo">
            <div class="imageEachInfo">
                <span name="likes">Likes</span>
                <span name="likes-num">${e.likes}</span>
            </div>
            <div class="imageEachInfo">
                <span name="views">Views</span>
                <span name="views-num">${e.views}</span>
            </div>
            <div class="imageEachInfo">
                <span name="comments">Comments</span>
                <span name="comments-num">${e.comments}</span>
            </div>
            <div class="imageEachInfo">
                <span name="downloads">Downloads</span>
                <span name="downloads-num">${e.downloads}</span>
            </div>
          </div>
        </li>`);s.innerHTML=n.join("")},d=o=>{const n=`https://pixabay.com/api/?${new URLSearchParams({key:"44096290-4b282435e4320beb633e0ff8a",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}`;return fetch(n).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>console.log(e))},g=document.querySelector(".form"),c=document.querySelector(".searching-input"),m=document.querySelector(".gallery-elements"),i=document.querySelector(".loader");i.style.display="none";let f=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});g.addEventListener("submit",o=>{o.preventDefault(),m.innerHTML="",c.value!=""?(i.style.display="block",d(c.value).then(s=>{s.hits.length===0?l.show({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"rgba(250, 250, 251, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3}):(u(s,m),f.refresh())}).catch(s=>{console.log(s)}).finally(()=>{i.style.display="none",o.target.reset()})):l.show({message:"Searching input cannot be empty! Please fill the input to start searching.",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(181, 27, 27, 1)",position:"topRight",maxWidth:"432px",timeout:2e3})});
//# sourceMappingURL=commonHelpers.js.map
