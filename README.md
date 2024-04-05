# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

**Creador:** Juan Miguel Rojas  
**Correo:** juan.noriega@correounivall.edu.co

## Descripción del Proyecto

Spotiapp es un proyecto desarrollado en Angular que tiene como objetivo principal el consumo de la API de Spotify con fines educativos y de aprendizaje. La aplicación permite explorar y obtener información sobre artistas, álbumes, canciones y listas de reproducción disponibles en la plataforma de Spotify.

## Configuración del Token de Acceso

Para que Spotiapp funcione correctamente, es necesario realizar una configuración inicial en el archivo `spotify.service.ts`. Sigue los siguientes pasos:

1. Utiliza Postman u otra herramienta similar para realizar una petición POST a la siguiente URL: `https://accounts.spotify.com/api/token`.

2. Configura el cuerpo (Body) de la solicitud como `x-www-form-urlencoded`, con los siguientes parámetros:

   - **Key:** `grant_type`  
     **Value:** `client_credentials`
   
   - **Key:** `client_id`  
     **Value:** `0cf22002d6f1434789074c96b30c89fc`
   
   - **Key:** `client_secret`  
     **Value:** `52e75b8fbbd44733abf125a58810da61`

3. Al enviar la solicitud, recibirás una respuesta del servidor que incluirá un campo llamado `access_token`.

4. Reemplaza el valor de la variable `token` en el archivo `spotify.service.ts` con el `access_token` obtenido en la respuesta anterior.

Con esta configuración, Spotiapp estará listo para consumir la API de Spotify y brindar una experiencia completa de exploración y descubrimiento musical.

¡Disfruta explorando la música con Spotiapp! 🎵🎶

