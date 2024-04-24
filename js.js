const menuBars=document.querySelector('#header-bars')
const  menu=document.querySelector('.menu')
menuBars.addEventListener('click',()=>{
    console.log('YA')
   if(menu.classList.contains('done')===true){
    menu.classList.remove('done')
   } else{
    menu.classList.add('done')
   }
})