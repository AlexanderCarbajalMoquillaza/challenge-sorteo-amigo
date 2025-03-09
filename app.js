// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

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

    // assignTextElement('#listaAmigos',`Lista: ${newItem} `)
}

function valuesDuplicates(){

}
function cleanBox() {
    document.querySelector('#amigo').value = '';
}
function cleanAlert() {
    document.getElementById('mensaje_alert').textContent = null;
}