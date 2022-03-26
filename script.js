/*Dado un arreglo de diferentes palabras, ordena alfabeticamente las palabras y muestralas en consola en orden
Note: sin usar metodo sort()*/

ordenar(["naranja","fresa", "sandia","uvas", "cerezas", "manzana"]);

function ordenar(arreglo){

    //Bubble sort

    for(let i = 0; i < arreglo.length; i++){
        for (let j = 0; j < arreglo.length - i - 1; j++){
            if(arreglo[j] > arreglo[j+1]){
                let temp = arreglo[j];
                arreglo[j] = arreglo[j + 1];
                arreglo[j + 1] = temp;
            }
        }
        
        
    }

    console.log(arreglo);

}