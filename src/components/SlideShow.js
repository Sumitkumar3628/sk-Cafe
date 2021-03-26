import React from 'react';

function SlideShow(){
    const x = document.getElementById('check-class');
    if(x.style.display === "none"){
        x.style.display="block";
    }else{
        x.style.display="none";
    }
}

export default SlideShow;