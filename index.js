import{n as e}from"./assets/rolldown-runtime-DNdEV4Dn.js";import{n as t,t as n}from"./assets/vendor-BFO8Ugs7.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=e(n(),1),i=e(t(),1),a=`55024241-c21cdf479482b85ede3540c61`,o=`https://pixabay.com/api/`,s=document.querySelector(`#search-form`),c=document.querySelector(`.gallery`),l=document.querySelector(`.loader-container`),u=new r.default(`.gallery a`,{captionsData:`alt`,captionDelay:250});s.addEventListener(`submit`,d);function d(e){e.preventDefault();let t=e.currentTarget,n=t.elements.query.value.trim();if(!n){i.default.warning({title:`Warning`,message:`Please enter a search query!`,position:`topRight`});return}c.innerHTML=``,m(),f(n).then(e=>{e.hits.length===0?i.default.error({title:`Error`,message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`}):(p(e.hits),u.refresh())}).catch(e=>{console.error(e),i.default.error({title:`Error`,message:`Something went wrong. Please try again later.`,position:`topRight`})}).finally(()=>{h(),t.reset()})}function f(e){let t=new URLSearchParams({key:a,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:`true`});return fetch(`${o}?${t.toString()}`).then(e=>{if(!e.ok)throw Error(e.status);return e.json()})}function p(e){let t=e.map(({webformatURL:e,largeImageURL:t,tags:n,likes:r,views:i,comments:a,downloads:o})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${e}" alt="${n}" loading="lazy" />
            <div class="info">
              <div class="info-item">
                <b>Likes</b>
                <span>${r}</span>
              </div>
              <div class="info-item">
                <b>Views</b>
                <span>${i}</span>
              </div>
              <div class="info-item">
                <b>Comments</b>
                <span>${a}</span>
              </div>
              <div class="info-item">
                <b>Downloads</b>
                <span>${o}</span>
              </div>
            </div>
          </a>
        </li>
      `).join(``);c.insertAdjacentHTML(`beforeend`,t)}function m(){l.style.display=`flex`}function h(){l.style.display=`none`}
//# sourceMappingURL=index.js.map