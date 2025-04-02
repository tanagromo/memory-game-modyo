# Memory Game

Este es un juego de memoria desarrollado con Vue 3 y Vite.

El juego consiste en: 

La primera vez que un usuario ingrese al juego se le debe solicitar el nombre.
Mostrar un tablero con un grupo de cartas boca abajo y un marcador con un espacio para mostrar:

* Errores.
* Aciertos.

El jugador debe ir volteando las cartas intentando adivinar las cartas que se repiten.

Todas las cartas se encuentran repetidas 1 vez en el tablero.

Por cada turno el jugador debe voltear 2 cartas.

Si las cartas no coinciden, se debe sumar 1 punto de error en el marcador.

Si las cartas coinciden, se debe sumar 1 punto de acierto en el marcador.

Las cartas que el usuario acierte deben quedar boca arriba mientras que las cartas de error deben volver a quedar boca abajo.

Una vez que el usuario logre adivinar todas las cartas, se debe mostrar un mensaje de felicitación con el nombre del usuario.


# 🚀 Tecnologías utilizadas

* Vue 3 con Composition API

* Vite como bundler

* TypeScript para tipado

* Tailwind CSS para estilos

* Vitest para pruebas unitarias

* Netlify para despliegue

# 🛠️ Instalación y ejecución

1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tanagromo/memory-game-modyo
cd memory-game-modyo
```

2️⃣ Instalar dependencias

```bash
npm install
```

3️⃣ Ejecutar el proyecto en modo desarrollo

```bash
npm run dev
```

🔍 Pruebas

Para ejecutar las pruebas unitarias con Vitest:

```bash
npm run test
```

# 🚀 Despliegue en Netlify

Este proyecto está desplegado en Netlify. https://memory-game-tanagromo.netlify.app/

Cada push a la rama principal (main o master) desencadena un despliegue automático.

Si se desea hacer un despliegue manual desde la terminal:

```bash
netlify deploy --prod
```
