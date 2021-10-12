    
    const sr = ScrollReveal({
        origin: 'top',
        distance: '75px',
        duration: 1200,
    });
    
    /*SCROLL HOME*/
    sr.reveal('.title',{delay:400}); 
     sr.reveal('.subtitle',{delay:1600});
     sr.reveal('.row1',{delay:2400});
     sr.reveal('.row2',{delay:400});


    /* Scroll To Top Button */ 

    var bttn = document.getElementById("btt-to-top"),
    body= document.body,
     docElem=document.documentElement,
     scrollPos, 
     offset,
     docHeight;

    docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight,docElem.offsetHeight,docElem.scrollHeight);
    if(docHeight != 'undefined'){
    offset = docHeight / 2;}

     window.addEventListener("scroll",function(event){
      scrollPos= body.scrollTop || docElem.scrollTop;  
      bttn.className = (scrollPos > offset) ? "visible" : "" ;
       

     });


