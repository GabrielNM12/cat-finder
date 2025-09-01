var myCats =  [
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

$(function(){
    $('#btn').click(searchCat);
})

/**
 * Search for a cat object in myCats array, then applies their info in the front.
 */
function searchCat(){

    const inputCatName = $('#catNameInput').val().toLowerCase();
    let jsonCat = myCats.find(c => c.nome.toLowerCase() == inputCatName);
    jsonCat ??= {
        nome: "Nenhum gato encontrado!",
        fotoURL: "image/gato-00.jpg",
        descricao:"O gato que voce especificou não foi encontrado!"
    }

    $('#catName').html(jsonCat.nome);
    $('#catDesc').html(jsonCat.descricao);
    $('#catCard').attr('src' ,jsonCat.fotoURL);
}