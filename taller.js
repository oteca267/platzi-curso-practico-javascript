
function trianguloIsosceles(lado1,lado2,base){
    
    if(lado1 ===lado2 ){
        
        
        return  (Math.sqrt((lado1 * lado2) + (base * base))/2)
    }
    else{
        return alert("los lados a y b no son iguales")
    }
}



function alturaTrianguloIsosceles(){
    const input1 = document.getElementById("inputTriangulo")
    const lado1 = input1.value;
    console.log(lado1)

    const input2 = document.getElementById("inputLado2")
    const lado2 = input2.value;

    console.log(lado2)
    const input3 = document.getElementById("inputBase")
    const base = input3.value;

    console.log(base)
    
    alert(trianguloIsosceles(lado1,lado2,base));
}