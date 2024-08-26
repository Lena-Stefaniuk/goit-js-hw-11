(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const i=document.querySelector(".gallery");function l(t){return`<li class="gallery-item">
  <a class="gallery-link" href="${t.original}">
    <img
      class="gallery-image"
      src="${t.preview}"
      data-source="${t.original}"
      alt="${t.description}"
    />
  </a>
</li>`}function a(t){return t.map(l).join(`
`)}function u(t){i.innerHTML=a(t)}function d(t){fetch("https://jsonplaceholder.typicode.com/photos?q=accusamus").then(o=>{o.json().then(n=>n)}).catch(o=>{})}const f=d();u(f);
//# sourceMappingURL=commonHelpers.js.map
