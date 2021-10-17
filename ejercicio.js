
const arreglo = ['casa','metal','cerveza','La Rochelle',"Athos-Porthos-Aramis-D'Artagnan"];


const cadenaMasLarga = (arreglo) => {
    let posicion;
    let longitud=0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].length > longitud) {
            posicion = i;
            longitud = arreglo[i].length;
        }        
    }
    console.log(`La longitud de la cadena es : ${longitud}`);
    console.log(`El índice es : ${posicion}`);
};

cadenaMasLarga(arreglo);
