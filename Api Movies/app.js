
let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior")
const btnSiguiente = document.getElementById("btnSiguiente")



document.addEventListener("click", e => {
    if(e.target.matches("#btnSiguiente")){
        if(pagina < 1000){
            pagina += 1
            cargarPeliculas()
        }
    }

    if(e.target.matches("#btnAnterior")){
        if(pagina > 1){
            pagina -= 1
            cargarPeliculas()
       }
    }

    if(e.target.matches(".poster")){
        modal()
    }
})







const cargarPeliculas = async() => {
   try{
    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=10eaee888614e05c6424cf7fa9b95dee&language=es-MX&page=${pagina}`);
    console.log(respuesta);

    if(respuesta.status === 200){
        const data = await respuesta.json();
        

        let pelicula = ""
        data.results.forEach(element => {
            pelicula += `
            
            <div class="pelicula">
		    	<img class="poster" src="https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="">
                <h3 class="title">${element.title}</h3>
		    </div>
            
            `
        });
        
      

        


        document.getElementById("contenedor").innerHTML = pelicula



    }
    
    
    else if(respuesta.status === 401){
        console.log("Llave incorrecta")
    }else if(respuesta.status === 404){
        console.log("Pelicula No Existe")
    }else{
        console.log("no se que pasa pero tienes un error")
    }

    

   }catch(error){
       console.log(error);
   }
}

const modal = async() => {
   try{
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=10eaee888614e05c6424cf7fa9b95dee&language=es-MX&page=${pagina}`);
    console.log(respuesta);
   }catch(error){
       
   }
}

cargarPeliculas();
