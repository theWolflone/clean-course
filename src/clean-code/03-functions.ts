(() => {

      // función para obtener información de una película por Id
      function getMovieById( movieId: string ) {
          console.log({ movieId });
      }
  
      // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
      function getMovieCast( id: string ) {
            //getMovieCastById
          console.log({ id });
      }
  
      // funcion para obtener el bio del actor por el id
      function getActorBioById( ActorId: string ) {
          console.log({ ActorId });
      }
      
      // Crear una película
      interface MovieDetails {
              title: string;
              description: string;
              rating: number;
              cast: string[];
      }

      function createMovie({title, description, rating, cast}: MovieDetails ) {
          console.log({ title, description, rating, cast });
      }
  
      // Crea un nuevo actor
      function createActor( fullName: string, birthDate: Date ): boolean {
          
          // tarea asincrona para verificar nombre
          // ..
          // ..
          if ( fullName === 'fernando' ) return false;
  
          console.log('Crear actor', birthDate);
          return true;        
  
      }
  
      
  
  
  })();
  
  
  
  
  