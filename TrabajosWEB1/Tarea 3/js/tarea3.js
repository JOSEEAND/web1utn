function nParImpar(num){
    if(num%2==0){
        return 'par';
    }else{
        return 'impar';
    }
}

function mayusMinus(argumento){
    if(argumento===argumento.toLowerCase()){
        return 'solo minúsculas';
    }else if(argumento===argumento.toUpperCase()){
        return 'solo mayúsculas';
    }else{
        return 'mayúsculas y minúsculas';
    }
}

function palindroma(argumento){
    argumento=argumento.toLowerCase();
    let tamaño=argumento.length;
    for(let i=0; i<Math.floor(tamaño/2); i++){
        if(argumento[i]!==argumento[tamaño-1-i]){
            return 'no es palíndroma';
        }
    }
    return 'es palíndroma';
}