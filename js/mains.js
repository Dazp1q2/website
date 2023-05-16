function suma(){

    let A=0;
    let B=0;
    let S=0;

    alert("por favor ingrese el primer valor");
    A=parseInt(prompt(""));

    alert("por favor ingrese el segundo valor ");
    B=parseInt(prompt(""));

    S = A + B;

    alert("EL RESULTADO DE LA SUMA ES: " + S);
    console.log(S);
}

function opBasicas(){

    let A=0;
    let B=0;
    let S=0;
    let M=0;
    let D=0;
    let R=0;


    alert("ingrese el primer valor");
    A=parseInt(prompt(""));

    alert("ingrese el segundo valor");
    B=parseInt(prompt(""));

    M = A * B;
    S = A + B;
    D = A / B;
    R = A - B;



    alert("el resultado de la SUMA es: " + S);
    alert("el resultado de la RESTA es: " + R);
    alert("el resultado de la MULTIPLICACION es: " + M);
    alert("el resultado de la DIVISION es: " + D);

}

function MayorD(){ let A=0;
    let B=0;
    
    A = parseInt(prompt("ingrese el primer numero"));
    B = parseInt(prompt("ingrese el segundo numero"));

    if (A == B){
        alert("Los numeros son iguales");
    }
    else if(A>B){
        alert(A + "es mayor que " + B);
    }
    else{
        alert(B + " es mayor que " + A);
    }

}
   
    function MenorD3() {
        let A = 0;
        let B = 0;
        let C = 0;
      
        A = parseInt(prompt("Ingrese el primer número"));
        B = parseInt(prompt("Ingrese el segundo número"));
        C = parseInt(prompt("Ingrese el tercer número"));
      
        if (A == B && A == C) {
          alert("Los números son iguales");
        } else if (A < B && A < C) {
          alert(A + " es el menor");
        } else if (B < A && B < C) {
          alert(B + " es el menor");
        } else {
          alert(C + " es el menor");
        }
      }
      
      function ParONo() {
        let A = 0;
      
        A = parseInt(prompt("Ingrese un número"));
      
        if (A % 2 === 0) {
          alert(A + " es un número par");
        } else {
          alert(A + " es un número impar");
        }
      }
      
      function Cuadrado() {
        let A = 0;
      
        A = parseInt(prompt("Ingrese un número"));
      
        let cuadrado = A * A;
      
        alert("El cuadrado de " + A + " es: " + cuadrado);
      }
      
      function Area() {
        let base = 0;
        let altura = 0;
      
        base = parseFloat(prompt("Ingrese la base del triángulo"));
        altura = parseFloat(prompt("Ingrese la altura del triángulo"));
      
        let area = (base * altura) / 2;
      
        alert("El área del triángulo es: " + area);
      }
      
      function Centimetros() {
        let metros = 0;
      
        metros = parseFloat(prompt("Ingrese el valor en metros"));
      
        let centimetros = metros * 100;
      
        alert(metros + " metros equivalen a " + centimetros + " centímetros.");
      }
      
      function Cumpleaños() {
        let edad = 0;
        let anioActual = 0;
      
        edad = parseInt(prompt("Ingrese su edad"));
        anioActual = parseInt(prompt("Ingrese el año actual"));
      
        let anioNacimiento = anioActual - edad;
      
        alert("Usted nació en el año " + anioNacimiento);
      }

      function Capital() {
        let capital = 0;
        let años = 0;
      
        capital = parseFloat(prompt("Ingrese el capital inicial"));
        años = parseInt(prompt("Ingrese el número de años"));
      
        let gananciaMensual = (capital * 0.017); 
        let gananciaTotal = gananciaMensual * 12 * años; //
        let total = capital + gananciaTotal; // Cálculo del total después de añadir la ganancia
      
        alert("Después de " + años + " años, habrá ganado un total de $" + gananciaTotal.toFixed(2) + ", y su saldo total será de $" + total.toFixed(2));

      }

    
      function Colegio(){
            let estudiante = "";
            let materia = "";
            let notas = [];
          
            estudiante = prompt("Ingrese el nombre del estudiante");
            materia = prompt("Ingrese el nombre de la materia");
          
            for (let i = 1; i <= 7; i++) {
              let nota = parseFloat(prompt("Ingrese la nota " + i));
              notas.push(nota);
            }
          
            let promedio = calcularPromedioNotas(notas);
            let mensaje = estudiante + " ha " + (promedio >= 6.1 ? "aprobado" : "reprobado") + " " + materia + " con un promedio de " + promedio.toFixed(2);
          
            alert(mensaje);
          }
          
          function calcularPromedioNotas(notas) {
            let suma = 0;
          
            for (let i = 0; i < notas.length; i++) {
              suma += notas[i];
            }
          
            return suma / notas.length;
          }

          function Tienda () {
            let cantidadKilos = 0;
            const precioKilo = 4500;
            let descuento = 0;
            let totalPagar = 0;
          
            cantidadKilos = parseFloat(prompt("Ingrese la cantidad de kilos de manzanas"));
          
            switch (true) {
              case cantidadKilos >= 0 && cantidadKilos <= 2:
                descuento = 0;
                break;
              case cantidadKilos >= 3 && cantidadKilos <= 5:
                descuento = 0.1;
                break;
              case cantidadKilos >= 6 && cantidadKilos <= 10:
                descuento = 0.15;
                break;
              default:
                descuento = 0.2;
                break;
            }
          
            totalPagar = cantidadKilos * precioKilo * (1 - descuento);
          
            alert("El cliente debe pagar $" + totalPagar.toFixed(2));
          }
          function Salario() {
            let horasTrabajadas = 0;
            const salarioHora = 10000;
            const salarioHoraExtra = 20000;
            let salarioSemanal = 0;
          
            horasTrabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en la semana"));
          
            if (horasTrabajadas <= 40) {
              salarioSemanal = horasTrabajadas * salarioHora;
            } else {
              const horasNormales = 40;
              const horasExtras = horasTrabajadas - horasNormales;
              salarioSemanal = (horasNormales * salarioHora) + (horasExtras * salarioHoraExtra);
            }
          
            alert("El salario semanal del obrero es $" + salarioSemanal.toFixed(2));
          }
          
          
          
          
          

      
      
      
      
      
      
      
      
      
      



