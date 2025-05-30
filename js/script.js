//Direccion del Endpoint generado en Retool
const API_URL = "https://retoolapi.dev/3Gw4Yz/Integrantes";


//funcion que llama a la API u realiza una solicitud GET. Obtiene un JSON
async function ObtenerRegistros(){
    //hacemos GET a la API y obtenemos su respuesta (response)
    const respuesta = await fetch(API_URL);

    //Obtenemos los datos en formato JSON a partir de la respuesta
    const data = await respuesta.json(); //esto ya es un JSON

    //Llamamos a "MostrarRegistros()" y le enviamos el JSON
    MostrarRegistros(data);
}

//funcion para generar las filas de la tabla
//Datos representa al JSON
function MostrarRegistros(datos){
    //se llama al elemento tbody dentro de la tabla con id "tabla"
    const tabla = document.querySelector("#tabla tbody");

    //Para inyectar codigo HTML usamos innerHTML
    tabla.innerHTML = ""; //esto significa que vaciamos el contenido de la tabla

    datos.forEach(persona => {
        tabla.innerHTML += `
            <tr>
                <td>${persona.id}</td>
                <td>${persona.Nombre}</td>
                <td>${persona.Apellido}</td>
                <td>${persona.Correo}</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </td>
            </tr>
        `;
    }); //por cada persona en el JSON (datos)
}




ObtenerRegistros();