const ham = document.querySelector ('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras =document.querySelectorAll('.ham span');

ham.addEventListener('click',() =>{
    enlaces.classList.toggle('activado');
    barras.forEach(chid => {ChannelSplitterNode.classList.toggle('animado')});
});

