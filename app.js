// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

//validador para que no se ejecuté más de una vez función friendsDraw
let runned = false;

function assignTextElement(element, text){
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verifyText(){ 
    //Obtiene nombres de amigos
    let myFriends = document.getElementById('amigo').value;
    
    //Quitar espacios en blanco al inicio y final
    let myFriendsClear = myFriends.trim().toUpperCase();

    //Valida campo vacio
    if(myFriendsClear === "" || myFriendsClear === null){
        document.getElementById('mensaje_alert').textContent = '¡Campo vacío! Digite nombre';
        return;
    } else{
        cleanBox();
        cleanAlert();
        if(friends.includes(myFriendsClear)){
            document.getElementById('mensaje_alert').textContent = `El usuario '${myFriendsClear}' ya existe en la lista. Intente escribir otro nombre`;
            // cleanBox();
            return;
        } else{
            friends.push(myFriendsClear);
        
            //Obtiene lista desordenada para añadirle una lista ordenada con los nombres
            let list = document.getElementById('listaAmigos');
            let newItem = document.createElement("li");

            newItem.textContent = friends.at(-1);
            list.appendChild(newItem);

            console.log(friends);
        }
    }
}

function cleanBox() {
    document.querySelector('#amigo').value = '';
}

function cleanAlert() {
    document.getElementById('mensaje_alert').textContent = null;
}

function friendsDraw(){
    if(!runned){
        let randomName = friends[Math.floor(Math.random() * friends.length)];

        //Obtiene lista desordenada para añadirle una lista ordenada con el nombre sorteado
        let result = document.getElementById('resultado');
        let resultItem = document.createElement("li");

        //Agrega el amigo sorteado al elemento creado para ser mostrado en pantalla
        resultItem.textContent = randomName;
        result.append('El amigo secreto sorteado es: ',resultItem);

        //Limpia la caja que contiene la lista de amigos
        cleanListFriends();

        //Una vez ejecutada la funcion, cambia a verdadero para no volver a ejecutarse
        runned = true;
        return;
    }
}

function cleanListFriends() {
    document.getElementById('listaAmigos').textContent = null;
}