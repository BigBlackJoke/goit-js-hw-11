import{i as l}from"./assets/vendor-8e8cd629.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=document.querySelector(".form"),c=document.querySelector(".searching-input"),a={webformatURL:"",largeImageURL:"",tags:"",likes:0,views:0,comments:0,downloads:0};m.addEventListener("submit",i=>{if(i.preventDefault(),c.value!=""){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"44096290-4b282435e4320beb633e0ff8a",q:c.value,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(()=>{images.map(r=>{document.createElement("li");const e=document.createElement("a"),t=document.createElement("img");e.href=a.largeImageURL,t.src=a.webformatURL,t.alt=a.tags})}).catch(r=>console.log(r))}else l.show({message:"Searching input cannot be empty! Please fill the input to start searching.",messageColor:"rgba(255, 255, 255, 1)",messageSize:"16px",messageLineHeight:"24px",backgroundColor:"rgba(239, 64, 64, 1)",position:"topCenter",timeout:2e3})});
//# sourceMappingURL=commonHelpers.js.map
