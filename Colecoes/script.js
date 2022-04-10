function getAdmins(map){
    let admins = [];
    for([key, value] of map) { // For of, iterando os valores da chave e dos valores do Map, acessando o valor e chave direto-->
    if(value == 'Admin'){    // Se o valor igual admin coloca no array auxiliar admins a chave (nome da pessoa)-->
        admins.push(key);
    }
}
return admins;
}

const usuarios = new Map();

usuarios.set('Daniel', 'Admin');
usuarios.set('Danielly', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge','User');
usuarios.set('Natália', 'User');

console.log(getAdmins(usuarios));


