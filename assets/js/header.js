const hamburger = document.getElementById('hamburger')
const mobileNav = document.querySelector('aside')

hamburger.addEventListener('click', function(){
    this.classList.toggle('open')
    
    if(hamburger.classList.contains('open')){
        mobileNav.style.opacity = '1'
        mobileNav.style.top = '90px'
    }else{
        mobileNav.style.opacity = '0'
        mobileNav.style.top = '0px'
    }
})