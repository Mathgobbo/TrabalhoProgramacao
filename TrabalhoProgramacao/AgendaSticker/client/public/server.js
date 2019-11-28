// Atribuindo as Funções

// Ebnviar registro
document.querySelector('#submit').addEventListener('click', () => {
    insertData();   
})

// Deletar Registro
document.querySelector('.btExclude').addEventListener('click', ()=>{
    deleteData(document.querySelector('.btExclude').id);
})


window.onload = readData();


// Função para inserir Dados
function insertData() {

    if($('.col-md-0').length >= 10){
        alert("Número Máximo de Registros Cadastrados!")
    }else{
        fetch('http://localhost/TrabalhoProgramacao-master/TrabalhoProgramacao/AgendaSticker/server/insert.php', {
            method: 'post',
            body: new FormData(document.querySelector('#formInsert'))
    
        }).then((res) => {
            if (res.status >= 200 && res.status < 300) {
                return res.text()
            }
            throw new Error(response.statusText)
    
        }).then(response => {
            console.log(response)
            readData();
        }).catch(err => {
            console.log(err)
        })
    }
    

}


// Função para ler Dados
function readData() {
    
    document.querySelector('.row').innerHTML = '';
    fetch('http://localhost/TrabalhoProgramacao-master/TrabalhoProgramacao/AgendaSticker/server/select.php', {
        method: 'get'
    })
        .then((res) => {

            if (res.status >= 200 && res.status < 300) {
                return  res.json()
            }
            throw new Error(response.statusText)

        }).then(response => {
            
            response.forEach(registro => {
                var arrayzinho = [];
                
                registro.forEach(el => { 
                    arrayzinho.push(el)
                    console.log(el)
                })

                createCard(arrayzinho[0], arrayzinho[1],arrayzinho[2],arrayzinho[3])
            });
            

        }).catch(err => {
            console.log(err)
        })

}

// Função deletar dados
function deleteData(id2){
    var data = {id : id2};
    var fd = new FormData();
    for(var id in data){ fd.append(id, data[id]);}
   
    fetch('http://localhost/TrabalhoProgramacao-master/TrabalhoProgramacao/AgendaSticker/server/delete.php',{
        method: 'post',
        body: fd
    }).then(res=>{
        if (res.status >= 200 && res.status < 300) {
            return  res.text()
        }
        throw new Error(response.statusText)
    }).then(response=>{
        console.log(response);
        readData();

    }).catch(err => {
        console.log(err)
    })
}


// Função para criar Card
function createCard(id, title, sub, text) {

    var card_col = document.createElement('div');
    card_col.className = "col-md-0";

    var card = document.createElement('div');
    card.className = "card";
    card.style = "width: 18rem;";

    var card_body = document.createElement('div');
    card_body.className = "card-body";

    var card_title = document.createElement('h5');
    card_title.className = "card-title";
    card_title.innerHTML = title

    var card_subtitle = document.createElement('h5');
    card_subtitle.className = "card-subtitle mb-2 text-muted";
    card_subtitle.innerHTML = sub;

    var card_text = document.createElement('p');
    card_text.className = "card-text";
    card_text.innerHTML = text;

    var card_del_bt = document.createElement('a');
    card_del_bt.id = id;    
    card_del_bt.className = "card-link";
    card_del_bt.innerHTML = "&times;";
    card_del_bt.style = "font-size: 1.5em; font-weight: 900;";
    card_del_bt.href = "#"
    // Adicionando evento para executar a função showDeleteModal a boptão do card
    card_del_bt.addEventListener('click', ()=>{
        showDeleteModal()
        document.querySelector('.btExclude').id = id;
    })

    // var id = document.createElement()

    card_body.appendChild(card_title);
    card_body.appendChild(card_subtitle);
    card_body.appendChild(card_text);
    card_body.appendChild(card_del_bt);

    card.appendChild(card_body);
    card_col.appendChild(card)

    document.querySelector('.row').appendChild(card_col);
}


// Finções SPinener

function showSpinner() {
    document.querySelector('.spinner-border').style.display = 'inline-block'

}

function hideSpinner() {
    document.querySelector('.spinner-border').style.display = 'none'
}


// Função aparecer modal de delete
function showDeleteModal(){ 
    $('#exampleModal2').modal('show'); //see here usage
}