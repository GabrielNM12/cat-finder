$(async function(){

    window.myCats =  await fetch('./cats.json')
                    .then(response => response.json())
                    .catch(err => console.error('Error loading JSON:', err));

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