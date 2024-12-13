let listaAmigos = [];

function adicionar(id) {
    //recuperar o valor nome do amigo
    let amigo = document.getElementById('nome-amigo').value;

    //adicionar ele na lista de amigos incluidos.
    let lista = document.getElementById('lista-amigos');

    listaAmigos.push(amigo);

    if(lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }

    document.getElementById('nome-amigo').value = '';
}


function sortear() {
    embaralha(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < listaAmigos.length; i++) {

        if(i == listaAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] + '-->' + listaAmigos[i + 1] + '<br>';
        }
    }
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    // alert('botão funcionando');
}