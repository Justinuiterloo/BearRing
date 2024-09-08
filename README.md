# BearRing

BearRing is a 3D ring visualization project using Three.js. This project allows you to load and interact with a 3D model of a ring in a browser environment. It utilizes various loaders, including MTLLoader and OBJLoader, and includes animation and lighting effects to enhance the experience.

## Features

- 3D rendering using Three.js
- Realistic lighting with ambient, directional, and hemisphere lights
- OrbitControls for smooth camera rotation and interaction
- GSAP for optional animations
- Shadow-enabled rendering

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Justinuiterloo/BearRing.git
   ```

2. Navigate to the project directory:

   ```
   cd BearRing
   ```

3. Install the necessary dependencies:

   ```
   npm install
   ```

4. Start a local server (e.g., using Live Server for VSCode) and open `index.html`.

## Usage

- The app loads a 3D model of a ring (`ring blank sketch bear.obj`) and displays it in an interactive 3D scene.
- Camera controls: Rotate around the model using the mouse. Zoom is disabled, and the model auto-rotates.
- You can adjust the lighting and model properties by modifying the code.

## Dependencies

- Three.js
- GSAP
- OBJLoader & MTLLoader
- OrbitControls
