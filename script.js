let activeLink1 = null;
let activeLink2 = null;
let activeLink3 = null;

/* S1 */
function showPreviewS1(title,text,link){
    const panel = document.getElementById("episodePreview1");
    document.getElementById("previewTitle1").innerText = title;
    document.getElementById("previewText1").innerText = text;
    panel.classList.add("active");
    activeLink1 = link;
}

document.getElementById("readBtn1").onclick = ()=>{
    if(activeLink1) window.location.href = activeLink1;
};

document.getElementById("closePreview1").onclick = ()=>{
    document.getElementById("episodePreview1").classList.remove("active");
    activeLink1 = null;
};


/* S2 */
function showPreviewS2(title,text,link){
    const panel = document.getElementById("episodePreview2");
    document.getElementById("previewTitle2").innerText = title;
    document.getElementById("previewText2").innerText = text;
    panel.classList.add("active");
    activeLink2 = link;
}

document.getElementById("readBtn2").onclick = ()=>{
    if(activeLink2) window.location.href = activeLink2;
};

document.getElementById("closePreview2").onclick = ()=>{
    document.getElementById("episodePreview2").classList.remove("active");
    activeLink2 = null;
};


/* ONE CIKANLAR */
function showPreviewS3(title,text,link){
    const panel = document.getElementById("episodePreview3");
    document.getElementById("previewTitle3").innerText = title;
    document.getElementById("previewText3").innerText = text;
    panel.classList.add("active");
    activeLink3 = link;
}

document.getElementById("readBtn3").onclick = ()=>{
    if(activeLink3) window.location.href = activeLink3;
};

document.getElementById("closePreview3").onclick = ()=>{
    document.getElementById("episodePreview3").classList.remove("active");
    activeLink3 = null;
};
