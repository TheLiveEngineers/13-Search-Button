const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

// Toogle search input visibility 

btn.addEventListener('click', () =>{
    search.classList.toggle('active')

    if(search.classList.contains('active')){
        input.focus();
    }else{
        input.value = "";
    }
});

// Close search field on outside click 
document.addEventListener('click', (e) =>{
    if(!search.contains(e.target) && search.classList.contains('active')){
        search.classList.remove('active');
        input.value = "";
    }
})