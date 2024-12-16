let listaAmigos = [];

function adicionar(id) {
    //recuperar o valor nome do amigo
    let amigo = document.getElementById('nome-amigo').value;

    if (amigo == '') {
        alert('Infome o nome do amigo!');
        return;
    }

    if (listaAmigos.includes(amigo)) {
        alert('Nome já adicionado!');
        document.getElementById('nome-amigo').value = '';
        return;
    }

    //adicionar ele na lista de amigos incluidos.
    let lista = document.getElementById('lista-amigos');

    listaAmigos.push(amigo);

    if(lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }

    document.getElementById('nome-amigo').value = '';

    atualizarLista();
    atualizarSoteio();
}


function sortear() {
    if(listaAmigos.length < 4) {
        alert('Quantidade de participantes insuficientes! Por favor, adicione no mínimo 4 participantes!')
        return;
    }

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

function excluirAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
    atualizarSoteio();
}


function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function atualizarSoteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < listaAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaAmigos[i];

        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    // alert('botão funcionando');
}