var swiper=new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},scrollbar:{el:".swiper-scrollbar"},autoplay:{delay:2e3},effect:"fade",fadeEffect:{crossFade:!0}});function onEntry(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("element-show")}))}document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("toggleButton"),t=document.getElementById("container"),r=document.getElementById("closeBtn"),o=!1;e.addEventListener("click",(function(){o?(t.classList.add("hidden"),o=!1):(t.classList.remove("hidden"),o=!0)})),r.addEventListener("click",(function(){o?(t.classList.add("hidden"),o=!1):(t.classList.remove("hidden"),o=!0)}))}));var options={threshold:[.5]},observer=new IntersectionObserver(onEntry,options),elements=document.querySelectorAll(".element-animation"),_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=elements[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var elm=_step.value;observer.observe(elm)}}catch(e){_didIteratorError=!0,_iteratorError=e}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}
//# sourceMappingURL=index.cdad6900.js.map
