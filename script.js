//1. Solicitar el nombre del cliente (Guardar en un array)
// 2. informar opciones, solicitar tipo de habitacion, 
//3. Cantidad de dias de estadia 
//4. Preguntar si quiere desayuno (Si es standar).
//5. Evaluar si tiene mas de 5 noches, aplicar 10% de descuento.
//6. Calcular y mostar total del cliente (Guardar en un array)

//7. Calcular y mostar total de todas las reservas del hotel.
//8. Mostrar listado de todos los clientes.
//9. Mostrar el listado de habitaciones ocupadas. (mostrar pociciones del array)

let listaHuespedes = [];
let montoHabitaciones = [];
let habitacionesOcupadas = [];

let nombre;
let monto;
let habitacion;
let dias;
let continuar = true;

const costoStandard = 2500;
const costoDoble = 3300;
const costoTriple = 4300;
const costoSuite= 7250;
const costoDesayuno = 90;
const montoDto = 0.9;  
const nombreHotel = "Hotel Guayerd";


function aplicarDescuento(precio, dto, _days){
        if(dto){
            return (precio * _days) * montoDto;
        }else { 
            return precio * _days;
        }
}

function calcularEstadia(_hab, _dias){
       let descuento = false;
       let opcionDesayuno = false;
        if(_dias >= 5){
            descuento = true;
        }

        switch(_hab){
            case 1: 
                opcionDesayuno = confirm("¿Desea desayuno? Tiene un costo de $90 por día.");
                if(opcionDesayuno){
                    return alert ("El total es " + aplicarDescuento(costoStandard, descuento, _dias) + (costoDesayuno *_dias));
                }else{
                return alert("El total es " + aplicarDescuento(costoStandard, descuento, _dias));
                }
                break;
            case 2:
                return alert("El total es " + aplicarDescuento(costoDoble, descuento, _dias));
                break;
            case 3: 
                return alert("El total es " + aplicarDescuento(costoTriple, descuento, _dias));
                break;
            case 4: 
                return alert("El total es " + aplicarDescuento(costoSuite, descuento, _dias));
                break;  
            default: alert("La opción ingresada no es válida.");      
        }
}


function mostrarFacturacionTotal(){
    let facturacionTotal = 0;
    
    for (let i=0; i < montosHabitaciones.length; i++){
        facturacionTotal += montosHabitaciones[i];
    } return "Facturación total: $"+ facturacionTotal;
}


function mostrarListadoHuespedes(){
    return "Huéspedes: "+ listaHuespedes.join(", ");
}


function mostrarHabitacionesOcupadas(){
    return "Habitaciones ocupadas: "+ habitacionesOcupadas.join(", ")+".";
} 



alert("Bienvenido a " + nombreHotel);

while(continuar){
        nombre= prompt("Ingrese nombre del huesped a registrar: ");
        listaHuespedes.push(nombre);
       
        habitacion = parseInt(prompt("Indique tipo de habitación: \n1. Standard: $"+costoStandard+" \n2. Doble: $"+costoDoble+" \n3. Triple: $"+costoTriple+" \n4. Suite: $"+costoSuite));
        
        dias= parseInt(prompt("Ingrese cantidad de dias de su estadia: "));
    
        monto = calcularEstadia(habitacion, dias);
        montosHabitaciones.push(monto);
    
        if (habitacionesOcupadas.length === 0){
            habitacionesOcupadas.push(1);
            console.log("Habitación 1 ocupada");
        } else {
            habitacionesOcupadas.push(habitacionesOcupadas.length+1);
            console.log("Habitación "+ (habitacionesOcupadas.length) +" ocupada");
        }
    
        alert("El total a abonar es de $"+monto+". Se le ha asignado la habitación Nº "+ habitacionesOcupadas[habitacionesOcupadas.length-1]);
    
    
    }  continuar = confirm("Desea seguir cargando huéspedes?");


alert(mostrarFacturacionTotal() + "\n" + mostrarListadoHuespedes() + "\n" + mostrarHabitacionesOcupadas());   