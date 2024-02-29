const mode = document.getElementById('image-mode');

mode.addEventListener('click', () => {
    let container = document.querySelector('.container') 

    if(mode.classList.contains('sun')){
        mode.setAttribute('src', 'assets/img/icons8-lua-crescente-50.png');
        mode.classList.remove('sun');
        if(mode.classList.contains('moon')) {
            mode.classList.remove('moon');
        }
        container.classList.remove('dark');
    } else {
        mode.setAttribute('src', 'assets/img/icons8-sun-30.png');
        if(mode.classList.contains('moon')) {
            mode.classList.remove('moon');
        }
        mode.classList.add('sun');
        container.classList.add('dark');
    }
});
