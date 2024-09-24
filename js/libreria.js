function calcular_mayor(){
    //leeer los datos ingresados
    let xn1 = parseFloat(document.getElementById("txtN1").value);
    let xn2 = parseFloat(document.getElementById("txtN2").value);
    let xn3 = parseFloat(document.getElementById("txtN3").value);
    //Definir una variable que guarde el mayor
    let xm = 0; //Inicializar
    //validación
    if (xn1 >0 && xn2 > 0 && xn3 > 0){
        //proceso
        if(xn1 > xn2){
          xm = xn1;
        }else{
        xm = xn2;
        }
        if (xn3 > xm){
          xm = xn3;
        }
        //5. Mostrar resultados
        document.getElementById("txtRes").value = xm;
    }else
        alert ("verificar número, deben ser positivo");         
}

function calcular_menor(){
    let xn1 = parseFloat(document.getElementById("txtN1").value);
    let xn2 = parseFloat(document.getElementById("txtN2").value);
    let xn3 = parseFloat(document.getElementById("txtN3").value);

    let xm = 0;

    if (xn1 >0 && xn2 > 0 && xn3 > 0){

        if(xn1 < xn2){
            xm = xn1;
        }else{
            xm = xn2;
        }
        if (xn3< xm){
            xm = xn3;
        }
        
        document.getElementById("txtRes").value = xm;
    }
}