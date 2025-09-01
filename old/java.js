meusGatos = {
    gato: [
        {
            "id": 1,
            "nome": "Chico",
            "descricao": "O Chico cansou de ser Gato e virou Dinossauro.",
            "fotoURL": "image/gato-01.jpg",
            "fotoURLdefault": "image/gato-00.jpg"
        },

        {
            "id": 2,
            "nome": "Hamilton",
            "descricao": "Hamilton é o gato mais hipster que você vai ver hoje.",
            "fotoURL": "image/gato-02.jpg"
        },

        {
            "id": 3,
            "nome": "Nala",
            "descricao": "Nala e uma gata muito fofinha e extrovertida.",
            "fotoURL": "image/gato-03.jpg"
        },
    ]
}

$(function(){
    var btnJquery   = $('#btn');
    var nomeGatoJquery = $('#gatNome');
    var descGatoJquery = $('#gatDesc');
    var cardGatoJquery = $('#card');

    function getGato(){
        var inputGatoJquery = $('#nome').val().toLowerCase();
        for (let i = 0; i < meusGatos.gato.length; i++) {
            var catJquery = meusGatos.gato[i];

            if (inputGatoJquery == catJquery.nome.toLowerCase()){
                nomeGatoJquery.html(catJquery.nome);
                descGatoJquery.html(catJquery.descricao);
                cardGatoJquery.attr('src' ,catJquery.fotoURL);
                
                return;
            }
            else{
                nomeGatoJquery.html("Nenhum gato encontrado!");
                descGatoJquery.html("O gato que voce especificou nao foi encontrado!");
                
            }      
        }

    }
    btnJquery.click(getGato)
})
/* 
var cardGato = document.getElementById('card');
var h1Nome = document.getElementById('gatNome');
var pDesc = document.getElementById('gatDesc');
var btn = document.getElementById('btn');


function getGato(){
    var inputGato = document.getElementById('nome').value.toLowerCase();
    for (let i = 0; i < meusGatos.gato.length; i++) {
        if (inputGato == meusGatos.gato[i].nome.toLowerCase()){
            cardGato.src = meusGatos.gato[i].fotoURL;
            h1Nome.innerHTML = meusGatos.gato[i].nome;
            pDesc.innerHTML  = meusGatos.gato[i].descricao;
            return;
        }
        else{
            cardGato.src = meusGatos.gato[0].fotoURLdefault;
            h1Nome.innerHTML = "Nenhum gato encontrado!";
            pDesc.innerHTML  = "O gato que voce especificou nao foi encontrado!";
        }
    }
}

btn.addEventListener('click', getGato); */