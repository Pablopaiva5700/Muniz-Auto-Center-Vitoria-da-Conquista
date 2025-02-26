!function(){"use strict";window.kadence={initOutlineToggle:function(){document.body.addEventListener("keydown",(function(){document.body.classList.remove("hide-focus-outline")})),document.body.addEventListener("mousedown",(function(){document.body.classList.add("hide-focus-outline")}))},getOffset:function(e){if(e instanceof HTMLElement){var t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}return{top:null,left:null}},findParents:function(e,t){var n=[];return function e(o){var i=o.parentNode;i instanceof HTMLElement&&(i.matches(t)&&n.push(i),e(i))}(e),n},toggleAttribute:function(e,t,n,o){void 0===n&&(n=!0),void 0===o&&(o=!1),e.getAttribute(t)!==n?e.setAttribute(t,n):e.setAttribute(t,o)},initNavToggleSubmenus:function(){var e=document.querySelectorAll(".nav--toggle-sub");if(e.length)for(let t=0;t<e.length;t++)window.kadence.initEachNavToggleSubmenu(e[t]),window.kadence.initEachNavToggleSubmenuInside(e[t])},initEachNavToggleSubmenu:function(e){var t=e.querySelectorAll(".menu ul");if(t.length)for(let a=0;a<t.length;a++){var n=t[a].parentNode;if(n.querySelector(".dropdown-nav-toggle")){var o=n.querySelector(".nav-drop-title-wrap").firstChild.textContent.trim(),i=document.createElement("BUTTON");i.setAttribute("aria-label",o?kadenceConfig.screenReader.expandOf+" "+o:kadenceConfig.screenReader.expand),i.classList.add("dropdown-nav-special-toggle"),n.insertBefore(i,n.childNodes[1]),i.addEventListener("click",(function(e){e.preventDefault(),window.kadence.toggleSubMenu(e.target.closest("li"))})),n.addEventListener("mouseleave",(function(e){window.kadence.toggleSubMenu(e.target,!1)})),n.querySelector("a").addEventListener("focus",(function(e){var t=e.target.parentNode.parentNode.querySelectorAll("li.menu-item--toggled-on");for(let o=0;o<t.length;o++)n!==t[o]&&window.kadence.toggleSubMenu(t[o],!1)})),t[a].addEventListener("keydown",(function(e){var n="ul.toggle-show > li > a, ul.toggle-show > li > .dropdown-nav-special-toggle";if(9===e.keyCode){n="ul.toggle-show > li > a, ul.toggle-show > li > .dropdown-nav-special-toggle";t[a].parentNode.classList.contains("kadence-menu-mega-enabled")&&(n='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'),e.shiftKey?window.kadence.isfirstFocusableElement(t[a],document.activeElement,n)&&window.kadence.toggleSubMenu(t[a].parentNode,!1):window.kadence.islastFocusableElement(t[a],document.activeElement,n)&&window.kadence.toggleSubMenu(t[a].parentNode,!1)}27===e.keyCode&&(window.kadence.toggleSubMenu(t[a].parentNode,!1),t[a].parentNode.querySelector(".dropdown-nav-special-toggle").focus())})),t[a].parentNode.classList.add("menu-item--has-toggle")}}},initEachNavToggleSubmenuInside:function(e){var t=e.querySelectorAll(".menu-item-has-children");if(t.length)for(let n=0;n<t.length;n++)t[n].addEventListener("mouseenter",(function(e){if(t[n].querySelector("ul.sub-menu")){var o=t[n].querySelector("ul.sub-menu");window.kadence.getOffset(o).left+o.offsetWidth<=window.innerWidth||o.classList.add("sub-menu-edge")}}))},toggleSubMenu:function(e,t){var n=e.querySelector(".dropdown-nav-special-toggle"),o=e.querySelector("ul");let i=e.classList.contains("menu-item--toggled-on");var a=e.querySelector(".nav-drop-title-wrap").firstChild.textContent.trim();if(void 0!==t&&"boolean"==typeof t&&(i=!t),n.setAttribute("aria-expanded",(!i).toString()),i){setTimeout((function(){e.classList.remove("menu-item--toggled-on"),o.classList.remove("toggle-show"),n.setAttribute("aria-label",a?kadenceConfig.screenReader.expandOf+" "+a:kadenceConfig.screenReader.expand)}),5);var r=e.querySelectorAll(".menu-item--toggled-on");for(let e=0;e<r.length;e++)window.kadence.toggleSubMenu(r[e],!1)}else{var d=e.parentNode.querySelectorAll("li.menu-item--toggled-on");for(let e=0;e<d.length;e++)window.kadence.toggleSubMenu(d[e],!1);e.classList.add("menu-item--toggled-on"),o.classList.add("toggle-show"),n.setAttribute("aria-label",a?kadenceConfig.screenReader.collapseOf+" "+a:kadenceConfig.screenReader.collapse)}},isfirstFocusableElement:function(e,t,n){var o=e.querySelectorAll(n);return 0<o.length&&t===o[0]},islastFocusableElement:function(e,t,n){var o=e.querySelectorAll(n);return 0<o.length&&t===o[o.length-1]},toggleDrawer:function(e,t){t=void 0===t||t;var n=e,o=document.querySelector(n.dataset.toggleTarget);if(o){var i=window.innerWidth-document.documentElement.clientWidth,a=n.dataset.toggleDuration?n.dataset.toggleDuration:250;if(window.kadence.toggleAttribute(n,"aria-expanded","true","false"),o.classList.contains("show-drawer"))n.dataset.toggleBodyClass&&document.body.classList.remove(n.dataset.toggleBodyClass),o.classList.remove("active"),o.classList.remove("pop-animated"),document.body.classList.remove("kadence-scrollbar-fixer"),setTimeout((function(){o.classList.remove("show-drawer");var e=new Event("kadence-drawer-closed");if(window.dispatchEvent(e),n.dataset.setFocus&&t){var i=document.querySelector(n.dataset.setFocus);i&&(i.focus(),i.hasAttribute("aria-expanded")&&window.kadence.toggleAttribute(i,"aria-expanded","true","false"))}}),a);else if(o.classList.add("show-drawer"),n.dataset.toggleBodyClass&&(document.body.classList.toggle(n.dataset.toggleBodyClass),n.dataset.toggleBodyClass.includes("showing-popup-drawer-")&&(document.body.style.setProperty("--scrollbar-offset",i+"px"),document.body.classList.add("kadence-scrollbar-fixer"))),setTimeout((function(){o.classList.add("active");var e=new Event("kadence-drawer-opened");if(window.dispatchEvent(e),n.dataset.setFocus&&t){var i=document.querySelector(n.dataset.setFocus);if(i){i.hasAttribute("aria-expanded")&&window.kadence.toggleAttribute(i,"aria-expanded","true","false");var a=i.value;i.value="",i.focus(),i.value=a}}}),10),setTimeout((function(){o.classList.add("pop-animated")}),a),o.classList.contains("popup-drawer")){var r=o.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),d=r[0],s=r[r.length-1];document.addEventListener("keydown",(function(e){("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===d&&(s.focus(),e.preventDefault()):document.activeElement===s&&(d.focus(),e.preventDefault()))}))}}},initToggleDrawer:function(){var e=document.querySelectorAll(".drawer-toggle");if(e.length){for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(n){n.preventDefault(),window.kadence.toggleDrawer(e[t])}));document.addEventListener("keyup",(function(e){27===e.keyCode&&document.querySelectorAll(".popup-drawer.show-drawer.active")&&(e.preventDefault(),document.querySelectorAll(".popup-drawer.show-drawer.active").forEach((function(e){window.kadence.toggleDrawer(document.querySelector('*[data-toggle-target="'+e.dataset.drawerTargetString+'"]'))})))})),document.addEventListener("click",(function(e){var t=e.target;t===(o=document.querySelector(".show-drawer.active .drawer-overlay"))&&window.kadence.toggleDrawer(document.querySelector('*[data-toggle-target="'+o.dataset.drawerTargetString+'"]'));var n=document.querySelector("#search-drawer.show-drawer.active .drawer-content"),o=document.querySelector("#search-drawer.show-drawer.active .drawer-overlay");t===n&&window.kadence.toggleDrawer(document.querySelector('*[data-toggle-target="'+o.dataset.drawerTargetString+'"]'))}))}},initMobileToggleSub:function(){document.querySelectorAll(".has-collapse-sub-nav").forEach((function(e){var t=e.querySelector(".current-menu-item");t&&window.kadence.findParents(t,"li").forEach((function(e){var t=e.querySelector(".drawer-sub-toggle");t&&window.kadence.toggleDrawer(t,!0)}))}));var e=document.querySelectorAll(".drawer-sub-toggle");if(e.length)for(let t=0;t<e.length;t++)e[t].addEventListener("click",(function(n){n.preventDefault(),window.kadence.toggleDrawer(e[t])}))},initMobileToggleAnchor:function(){var e=document.getElementById("mobile-drawer");if(e){var t=e.querySelectorAll("a:not(.kt-tab-title)");if(t.length)for(let n=0;n<t.length;n++)t[n].addEventListener("click",(function(t){window.kadence.toggleDrawer(e.querySelector(".menu-toggle-close"),!1)}))}},initTransHeaderPadding:function(){if(!document.body.classList.contains("no-header")&&document.body.classList.contains("transparent-header")&&document.body.classList.contains("mobile-transparent-header")){var e=document.querySelector(".entry-hero-container-inner"),t=document.querySelector("#masthead"),n=function(n){kadenceConfig.breakPoints.desktop<=window.innerWidth?document.body.classList.contains("transparent-header")?e.style.paddingTop=t.offsetHeight+"px":e.style.paddingTop=0:document.body.classList.contains("mobile-transparent-header")?e.style.paddingTop=t.offsetHeight+"px":e.style.paddingTop=0};e&&(window.addEventListener("resize",n,!1),window.addEventListener("scroll",n,!1),window.addEventListener("load",n,!1),n())}},initStickyHeader:function(){var e=document.querySelector("#main-header .kadence-sticky-header"),t=document.querySelector("#mobile-header .kadence-sticky-header"),n=document.getElementById("wrapper"),o=document.querySelectorAll(".kadence-pro-fixed-above"),i=document.querySelectorAll(".kadence-before-wrapper-item"),a="mobile",r=0,d=0;parseInt(kadenceConfig.breakPoints.desktop)<window.innerWidth?(a="desktop",e&&(e.style.position="static",d=window.kadence.getOffset(e).top,e.style.position=null)):t&&(t.style.position="static",d=window.kadence.getOffset(t).top,t.style.position=null);var s,l,c,u=function(s){var l,c=window.kadence.getOffset(n).top;if(document.body.classList.toString().includes("boom_bar-static-top")){var u=document.querySelector(".boom_bar");c=window.kadence.getOffset(n).top-u.offsetHeight}if(i.length){var f=0;for(let e=0;e<i.length;e++)f+=i[e].offsetHeight;c=window.kadence.getOffset(n).top-f}if(o.length){var g=0;for(let e=0;e<o.length;e++)g+=o[e].offsetHeight;c=window.kadence.getOffset(n).top+g}if(l=kadenceConfig.breakPoints.desktop<=window.innerWidth?e:t){kadenceConfig.breakPoints.desktop<=window.innerWidth?"mobile"===a?(d=window.kadence.getOffset(l).top,a="desktop"):s&&"updateActive"===s&&(l.style.top="auto",d=window.kadence.getOffset(l).top,a="desktop"):"desktop"===a?(d=window.kadence.getOffset(l).top,a="mobile"):s&&"updateActive"===s&&(l.style.top="auto",d=window.kadence.getOffset(l).top,a="mobile");var w=l.parentNode,h=l.getAttribute("data-shrink"),m=l.getAttribute("data-reveal-scroll-up"),p=parseInt(l.getAttribute("data-start-height"));if((!p||s&&void 0!==s.type&&"orientationchange"===s.type)&&(l.setAttribute("data-start-height",l.offsetHeight),p=l.offsetHeight,w.classList.contains("site-header-upper-inner-wrap")?(w.style.height=null,s&&void 0!==s.type&&"orientationchange"===s.type?l.classList.contains("item-is-fixed")?setTimeout((function(){w.style.height=Math.floor(w.offsetHeight+l.offsetHeight)+"px"}),21):setTimeout((function(){w.style.height=w.offsetHeight+"px"}),21):w.style.height=w.offsetHeight+"px"):w.classList.contains("site-header-inner-wrap")?(w.style.height=null,w.style.height=w.offsetHeight+"px"):w.style.height=l.offsetHeight+"px"),"true"===h){var v=l.getAttribute("data-shrink-height");if(v){if("true"===m)if(window.scrollY>r)var y=Math.floor(Math.floor(d)-Math.floor(c)+Math.floor(p));else y=Math.floor(d-c);else y=Math.floor(d-c);var b=l.querySelectorAll(".custom-logo"),k=l.querySelector(".site-main-header-inner-wrap"),L=parseInt(k.getAttribute("data-start-height"));if(L||(k.setAttribute("data-start-height",k.offsetHeight),L=k.offsetHeight),window.scrollY<=y){if(k.style.height=L+"px",k.style.minHeight=L+"px",k.style.maxHeight=L+"px",b)for(let e=0;e<b.length;e++){b[e].style.maxHeight="100%"}}else if(window.scrollY>y){var S=Math.max(v,L-(window.scrollY-(d-c)));if(k.style.height=S+"px",k.style.minHeight=S+"px",k.style.maxHeight=S+"px",b)for(let e=0;e<b.length;e++){b[e].style.maxHeight=S+"px"}}}}if("true"===m){var A=Math.floor(d-c),x=window.scrollY,E=l.offsetHeight,q=r-x,T=window.getComputedStyle(l).getPropertyValue("transform").match(/(-?[0-9\.]+)/g);if(T&&void 0!==T[5]&&T[5])var M=parseInt(T[5])+q;else M=0;var C=x>r;if(x<=A)l.style.transform="translateY(0px)";else if(C)l.classList.add("item-hidden-above"),l.style.transform="translateY("+(Math.abs(M)>E?-E:M)+"px)";else{A=Math.floor(d-c);l.style.transform="translateY("+(M>0?0:M)+"px)",l.classList.remove("item-hidden-above")}r=x}else A=Math.floor(d-c);window.scrollY==A?(l.style.top=c+"px",l.classList.add("item-is-fixed"),l.classList.add("item-at-start"),l.classList.remove("item-is-stuck"),w.classList.add("child-is-fixed"),document.body.classList.add("header-is-fixed")):window.scrollY>A?"true"===m?window.scrollY<E+60&&l.classList.contains("item-at-start")?(l.style.height=null,l.style.top=c+"px",l.classList.add("item-is-fixed"),l.classList.add("item-is-stuck"),w.classList.add("child-is-fixed"),document.body.classList.add("header-is-fixed")):(l.style.top=c+"px",l.classList.add("item-is-fixed"),l.classList.add("item-is-stuck"),l.classList.remove("item-at-start"),w.classList.add("child-is-fixed"),document.body.classList.add("header-is-fixed")):(l.style.top=c+"px",l.classList.add("item-is-fixed"),l.classList.remove("item-at-start"),l.classList.add("item-is-stuck"),w.classList.add("child-is-fixed"),document.body.classList.add("header-is-fixed")):l.classList.contains("item-is-fixed")&&(l.classList.remove("item-is-fixed"),l.classList.remove("item-at-start"),l.classList.remove("item-is-stuck"),l.style.height=null,l.style.top=null,w.classList.remove("child-is-fixed"),document.body.classList.remove("header-is-fixed"))}};if((e||t)&&(window.addEventListener("resize",u,!1),window.addEventListener("scroll",u,!1),window.addEventListener("load",u,!1),window.addEventListener("orientationchange",u),"complete"===document.readyState&&u("updateActive"),document.body.classList.contains("woocommerce-demo-store")&&document.body.classList.contains("kadence-store-notice-placement-above"))){s=document.querySelector(".woocommerce-store-notice"),l=e=>{u("updateActive")},c={root:document.documentElement},new IntersectionObserver(((e,t)=>{e.forEach((e=>{l(e.intersectionRatio>0)}))}),c).observe(s)}},getTopOffset:function(e="scroll"){if("load"===e)var t=document.querySelector("#main-header .kadence-sticky-header"),n=document.querySelector("#mobile-header .kadence-sticky-header");else t=document.querySelector('#main-header .kadence-sticky-header:not([data-reveal-scroll-up="true"])'),n=document.querySelector('#mobile-header .kadence-sticky-header:not([data-reveal-scroll-up="true"])');var o=0,i=0;if(kadenceConfig.breakPoints.desktop<=window.innerWidth){if(t)o="true"!==t.getAttribute("data-shrink")||t.classList.contains("site-header-inner-wrap")?Math.floor(t.offsetHeight):Math.floor(t.getAttribute("data-shrink-height"));else o=0;document.body.classList.contains("admin-bar")&&(i=32)}else{if(n)o="true"===n.getAttribute("data-shrink")?Math.floor(n.getAttribute("data-shrink-height")):Math.floor(n.offsetHeight);else o=0;document.body.classList.contains("admin-bar")&&(i=46)}return Math.floor(o+i+Math.floor(kadenceConfig.scrollOffset))},scrollToElement:function(e,t,n="scroll"){t=void 0===t||t;var o=window.kadence.getTopOffset(n),i=Math.floor(e.getBoundingClientRect().top)-o;window.scrollBy({top:i,left:0,behavior:"smooth"}),e.tabIndex="-1",e.focus({preventScroll:!0}),e.classList.contains("kt-title-item")&&e.firstElementChild.click(),t&&window.history.pushState("","","#"+e.id)},anchorScrollToCheck:function(e,t){if(t=void 0!==t?t:null,e.target.getAttribute("href"))var n=e.target;else{if(!(n=e.target.closest("a")))return;if(!n.getAttribute("href"))return}if(!n.parentNode||!n.parentNode.hasAttribute("role")||"tab"!==n.parentNode.getAttribute("role")){var o;o=t?t.getAttribute("href").substring(t.getAttribute("href").indexOf("#")):n.getAttribute("href").substring(n.getAttribute("href").indexOf("#"));var i=document.getElementById(o.replace("#",""));i&&(i?.classList?.contains("kt-accordion-pane")||(e.preventDefault(),window.kadence.scrollToElement(i),window.kadence.updateActiveAnchors()))}},initStickySidebarWidget:function(){if(document.body.classList.contains("has-sticky-sidebar-widget")){var e=window.kadence.getTopOffset(),t=document.querySelector("#secondary .sidebar-inner-wrap .widget:last-child");t&&(t.style.top=Math.floor(e+20)+"px",t.style.maxHeight="calc( 100vh - "+Math.floor(e+20)+"px )")}},initStickySidebar:function(){if(document.body.classList.contains("has-sticky-sidebar")){var e=window.kadence.getTopOffset(),t=document.querySelector("#secondary .sidebar-inner-wrap");t&&(t.style.top=Math.floor(e+20)+"px",t.style.maxHeight="calc( 100vh - "+Math.floor(e+20)+"px )")}},initActiveAnchors:function(){""!=window.location.hash&&window.kadence.updateActiveAnchors(),window.onhashchange=function(){window.kadence.updateActiveAnchors()}},updateActiveAnchors:function(){document.querySelectorAll(".menu-item").forEach((function(e){const t=e.querySelector("a");t?.href&&t.href.includes("#")&&(window.location.href==t.href?e.classList.add("current-menu-item"):e.classList.remove("current-menu-item"))}))},initAnchorScrollTo:function(){if(!document.body.classList.contains("no-anchor-scroll")){if(window.onhashchange=function(){""===window.location.hash&&(window.scrollTo({top:0,behavior:"smooth"}),document.activeElement.blur())},""!=window.location.hash){var e,t=location.hash.substring(1);if(!/^[A-z0-9_-]+$/.test(t))return;(e=document.getElementById(t))&&window.setTimeout((function(){window.kadence.scrollToElement(e,!1,"load")}),100)}var n=document.querySelectorAll("a[href*=\\#]:not([href=\\#]):not(.scroll-ignore):not([data-tab]):not([data-toggle])");n.length&&n.forEach((function(e){try{new URL(e.href).pathname===window.location.pathname&&e.addEventListener("click",(function(e){window.kadence.anchorScrollToCheck(e)}))}catch(t){console.log("ClassList: "+e.classList,"Invalid URL")}}))}},initScrollToTop:function(){var e=document.getElementById("kt-scroll-up");if(e){var t=function(){window.scrollY>100?(e.classList.add("scroll-visible"),e.setAttribute("aria-hidden",!1)):(e.classList.remove("scroll-visible"),e.setAttribute("aria-hidden",!0))};window.addEventListener("scroll",t),t(),e.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),document.querySelector(".skip-link").focus({preventScroll:!0}),document.activeElement.blur()}))}var n=document.getElementById("kt-scroll-up-reader");n&&n.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),document.querySelector(".skip-link").focus()}))},init:function(){window.kadence.initNavToggleSubmenus(),window.kadence.initToggleDrawer(),window.kadence.initMobileToggleAnchor(),window.kadence.initMobileToggleSub(),window.kadence.initOutlineToggle(),window.kadence.initStickyHeader(),window.kadence.initStickySidebar(),window.kadence.initStickySidebarWidget(),window.kadence.initTransHeaderPadding(),window.kadence.initAnchorScrollTo(),window.kadence.initScrollToTop(),window.kadence.initActiveAnchors()}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",window.kadence.init):window.kadence.init()}();