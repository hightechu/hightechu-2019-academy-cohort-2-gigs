var page=1;
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
           ifrm = document.createElement("IFRAME"); 
        ifrm.setAttribute("src", page+".html"); 
        ifrm.style.width = 100+"%"; 
        ifrm.style.height = 800+"px"; 
        document.body.appendChild(ifrm); 
        page++
    }
};