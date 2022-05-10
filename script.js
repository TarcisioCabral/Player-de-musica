let musicas = [
    {titulo:'Spikey', artista:'Bruce Aronson', src:'musicas/Spikey.mp3', img:'imagens/rock.jpg'},
    {titulo:'Bastard', artista:'Blaine', src:'musicas/Bastard.mp3', img:'imagens/hiphop.jpg'},
    {titulo:'Street Walk', artista:'Scott Goodman and Daniel Stein', src:'musicas/Street Walk.mp3', img:'imagens/jazz.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);


// eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});
//funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src)// trocando o endereço do arraw 
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosparaMinutos(Math.floor(musica.duration));
    })// quando a musica carregar faça uma função 
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosparaMinutos(Math.floor(musica.currentTime));
} 

function segundosparaMinutos(segundos){
    let compoMinuto = Math.floor(segundos / 60);
    let compoSegundos = segundos % 60;
    if(compoSegundos < 10){
        compoSegundos = '0' + compoSegundos;
    }
    return compoMinuto + ':' + compoSegundos;
}

