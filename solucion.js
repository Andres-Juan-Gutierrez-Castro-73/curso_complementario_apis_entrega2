// Andrés Juan Gutiérrez Castro

// Importamos el modulo de readline para poder hacer inputs en la consola
const readline = require('readline');

// Variable con el objeto JSON a recorrer
let data = [
    {
        "titulo": "The Luminant Star",
        "generos": ["Ciencia ficción", "Aventura"],
        "director": "Alexandra Nolan",
        "guionistas": ["Emily Chambers", "Daniel Ramirez"],
        "actores": [
            {
                "nombre": "Eva Thompson",
                "papel": "Capitana Maya Roberts"
            },
            {
                "nombre": "Liam Anderson",
                "papel": "Dr. Ethan Walker"
            },
            {
                "nombre": "Olivia Patel",
                "papel": "Teniente Aria Martinez"
            }
        ],
        "estudio": "Stellar Studios",
        "pais": "Estados Unidos",
        "idioma": "Inglés",
        "lanzamiento": {
            "fecha": "2023-07-15",
            "formatos": ["Cine", "Streaming"]
        },
        "duracion": "2 horas 20 minutos",
        "sinopsis": "En un futuro distante, la humanidad busca una estrella legendaria con el poder de cambiar el destino del universo. La capitana Maya Roberts lidera una audaz expedición espacial, enfrentando peligros cósmicos y revelando secretos que desafían la comprensión humana. 'The Luminant Star' es una odisea a través del espacio y el tiempo.",
        "trailer": "https://ejemplo.com/trailer",
        "poster": "https://ejemplo.com/poster.jpg",
        "criticas": [
            {
                "critico": "CinePhileX",
                "puntuacion": 4.5,
                "resena": "Una epopeya espacial que cautiva los sentidos. Los efectos visuales son asombrosos, aunque la trama se vuelve predecible hacia el final."
            },
            {
                "critico": "FilmEnthusiast123",
                "puntuacion": 5,
                "resena": "La película ofrece una mezcla perfecta de emoción y asombro. El elenco hace un trabajo fenomenal al dar vida a sus personajes. Una experiencia que no debe perderse."
            }
        ],
        "premios": [
            {
                "nombre": "Premio Galaxia de Oro",
                "categoria": "Mejor Efectos Visuales",
                "anio": 2023
            },
            {
                "nombre": "Premio Estelar",
                "categoria": "Mejor Película de Ciencia Ficción",
                "anio": 2023
            }
        ],
        "redes_sociales": {
            "twitter": "https://twitter.com/TheLuminantStar",
            "instagram": "https://instagram.com/theluminantstar",
            "facebook": "https://facebook.com/TheLuminantStar"
        }
    },
    {
        "titulo": "Echoes of Eternity",
        "generos": ["Drama", "Fantasía"],
        "director": "Sophia Williams",
        "guionistas": ["Jonathan Carter", "Isabella Parker"],
        "actores": [
            {
                "nombre": "Emma Johnson",
                "papel": "Emily"
            },
            {
                "nombre": "Michael Adams",
                "papel": "Robert"
            },
            {
                "nombre": "Olivia Lee",
                "papel": "Eliza"
            }
        ],
        "estudio": "Mystic Films",
        "pais": "Reino Unido",
        "idioma": "Inglés",
        "lanzamiento": {
            "fecha": "2023-09-20",
            "formatos": ["Cine", "Streaming"]
        },
        "duracion": "2 horas 10 minutos",
        "sinopsis": "En un mundo donde los recuerdos son valiosos tesoros, Emily descubre un antiguo libro que puede alterar el tejido del tiempo. Con cada página, revive fragmentos del pasado y enfrenta decisiones dolorosas. 'Echoes of Eternity' es un drama emotivo que explora la importancia de nuestras elecciones y la atemporalidad del amor.",
        "trailer": "https://ejemplo.com/trailer_echoes",
        "poster": "https://ejemplo.com/poster_echoes.jpg",
        "criticas": [
            {
                "critico": "FilmCritic123",
                "puntuacion": 4.8,
                "resena": "Un viaje emocional que toca las fibras más sensibles. Las actuaciones son excepcionales y la narrativa es cautivadora."
            },
            {
                "critico": "CineLover456",
                "puntuacion": 4.5,
                "resena": "Una película que te hace reflexionar sobre las decisiones que moldean nuestras vidas. El uso de flashbacks es efectivo, aunque el ritmo puede ser lento en momentos."
            }
        ],
        "premios": [
            {
                "nombre": "Premio del Corazón",
                "categoria": "Mejor Drama",
                "anio": 2023
            },
            {
                "nombre": "Premio Tempus",
                "categoria": "Mejor Uso de Viaje en el Tiempo en una Película",
                "anio": 2023
            }
        ],
        "redes_sociales": {
            "twitter": "https://twitter.com/EchoesEternity",
            "instagram": "https://instagram.com/echoesofeternity",
            "facebook": "https://facebook.com/EchoesOfEternity"
        }
    },
    {
        "titulo": "Dreamweavers",
        "generos": ["Fantasía", "Aventura"],
        "director": "Mia Thompson",
        "guionistas": ["David Carter", "Sophie Evans"],
        "actores": [
            {
                "nombre": "Isaac Reynolds",
                "papel": "Ethan"
            },
            {
                "nombre": "Ava Williams",
                "papel": "Luna"
            },
            {
                "nombre": "Oliver Garcia",
                "papel": "Nico"
            }
        ],
        "estudio": "Enchanted Studios",
        "pais": "Estados Unidos",
        "idioma": "Inglés",
        "lanzamiento": {
            "fecha": "2024-03-10",
            "formatos": ["Cine", "Streaming"]
        },
        "duracion": "2 horas 15 minutos",
        "sinopsis": "En un mundo donde los sueños y la realidad están entrelazados, tres jóvenes descubren sus habilidades para entrar en los sueños de otros. Cuando un antiguo mal amenaza con sumir a ambos mundos en la oscuridad, Ethan, Luna y Nico deben aprender a controlar sus poderes y enfrentar sus propios temores para salvar todo lo que aman.",
        "trailer": "https://ejemplo.com/trailer_dreamweavers",
        "poster": "https://ejemplo.com/poster_dreamweavers.jpg",
        "criticas": [
            {
                "critico": "FantasyFilmFan",
                "puntuacion": 4.7,
                "resena": "Una película mágica que te transporta a mundos de ensueño. Los efectos visuales y la química entre los actores son impresionantes."
            },
            {
                "critico": "CinemaMagic",
                "puntuacion": 4.8,
                "resena": "Una maravilla visual que combina elementos de fantasía y aventura de manera sorprendente. Aunque la trama es algo predecible, el viaje sigue siendo emocionante."
            }
        ],
        "premios": [
            {
                "nombre": "Premio de la Imaginación",
                "categoria": "Mejor Película de Fantasía",
                "anio": 2024
            },
            {
                "nombre": "Premio de los Sueños",
                "categoria": "Mejores Efectos Visuales",
                "anio": 2024
            }
        ],
        "redes_sociales": {
            "twitter": "https://twitter.com/DreamweaversMovie",
            "instagram": "https://instagram.com/dreamweaversfilm",
            "facebook": "https://facebook.com/DreamweaversOfficial"
        }
    }
];

function mostrarMenu() {
    console.log('\nMenu de opciones:');
    console.log('1. Mostrar títulos de películas');
    console.log('2. Mostrar detalles de una película por título');
    console.log('3. Mostrar actores y sus papeles');
    console.log('4. Mostrar críticas y puntuaciones');
    console.log('5. Mostrar premios por película');
    console.log('6. Mostrar enlaces de redes sociales por película');
    console.log('7. Salir');
  
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Elije una opción: ', opcion => {
      switch (opcion) {
        case '1':
          mostrarTitulos();
          break;
        case '2':
          mostrarDetallesPorTitulo();
          break;
        case '3':
          mostrarActores();
          break;
        case '4':
          mostrarCriticas();
          break;
        case '5':
          mostrarPremios();
          break;
        case '6':
          mostrarRedesSociales();
          break;
        case '7':
          console.log('Saliendo...');
          rl.close();
          return;
        default:
          console.log('Opción no válida');
      }
  
      mostrarMenu();
    });
}
  
function mostrarTitulos() {
    console.log('\nTítulos de películas:');
    data.forEach(pelicula => {
      console.log(pelicula.titulo);
    });
}
  
function mostrarDetallesPorTitulo() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.question('Ingresa el título de la película: ', titulo => {
      const pelicula = data.find(p => p.titulo === titulo);
      if (pelicula) {
        console.log(JSON.stringify(pelicula, null, 2));
      } else {
        console.log('Película no encontrada.');
      }
      rl.close();
    });
}
  
function mostrarActores() {
    console.log('\nActores y sus papeles:');
    data.forEach(pelicula => {
      console.log(`${pelicula.titulo}:`);
      pelicula.actores.forEach(actor => {
        console.log(`  ${actor.nombre} - ${actor.papel}`);
      });
    });
}
  
function mostrarCriticas() {
    console.log('\nCríticas y puntuaciones:');
    data.forEach(pelicula => {
      console.log(`${pelicula.titulo}:`);
      pelicula.criticas.forEach(critica => {
        console.log(`  ${critica.critico}: ${critica.puntuacion}`);
        console.log(`    ${critica.resena}`);
      });
    });
}
  
function mostrarPremios() {
    console.log('\nPremios por película:');
    data.forEach(pelicula => {
      console.log(`${pelicula.titulo}:`);
      pelicula.premios.forEach(premio => {
        console.log(`  ${premio.nombre}: ${premio.categoria} (${premio.anio})`);
      });
    });
}
  
function mostrarRedesSociales() {
    console.log('\nEnlaces de redes sociales por película:');
    data.forEach(pelicula => {
      console.log(`${pelicula.titulo}:`);
      console.log(`  Twitter: ${pelicula.redes_sociales.twitter}`);
      console.log(`  Instagram: ${pelicula.redes_sociales.instagram}`);
      console.log(`  Facebook: ${pelicula.redes_sociales.facebook}`);
    });
}
  
mostrarMenu();