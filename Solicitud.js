document.getElementById('clima-form').addEventListener('submit', function(e) {
    e.preventDefault();
   
	//Obtenemos los datos ingresados en el formulario
	const pais = document.getElementById('inputPais').value;
	const ciudad = document.getElementById('inputCiudad').value;

	obtenerrClima(pais,ciudad)
});
//Esta es una funcion asincronica la cual busca un valor en cualquier momento

async function obtenerrClima(inputCiudad,inputPais) {
    const btnSubmit = document.getElementById('btnSubmit');

	const ubicacion = `${inputCiudad}, ${inputPais}`;
    const url = `http://api.weatherstack.com/current?access_key=ed995ad3fe8b75790495c98ebe436272&query=${encodeURIComponent(ubicacion)}`;
    const options = {
        method: 'GET'
    };

    try {
        const response = await fetch(url, options); // respuesta asincronica
        const data = await response.json(); // Parseamos como Json o cambiamos los datos a formato Json

        const ciudadNombre = data.location?.name || "Ciudad desconocida";
		const paisNombre = data.location?.country || "País desconocido";
		const grados = data.current?.temperature ?? "N/A";
        const lat = data.location?.lat || "N/A"; 
        const lon = data.location?.lon || "N/A";


        document.getElementById('clima-datos-1').innerHTML = `Ciudad: ${ciudadNombre} `;
		document.getElementById('clima-datos-2').innerHTML = `Pais: ${paisNombre} `;
		document.getElementById('clima-datos-3').innerHTML = `Grados:${grados}° `;
        
        document.getElementById('clima-datos-4').innerHTML = `latitud: ${lat} `;
		document.getElementById('clima-datos-5').innerHTML = `longitud: ${lon} `;


	} catch (error) {
        console.error(error);
    }

    
}

