
const navbar=document.querySelector('.navbar');
const headercontent=document.querySelector('.container-content span');

window.addEventListener('scroll',function(){
    if(this.window.scrollY>headercontent.offsetTop){
        navbar.style.backgroundColor="#fff" 
    }
    else{
        navbar.style.backgroundColor="transparent" 
    }
   
})