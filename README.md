# clases_javascript
Educativo y de Aprendizaje Personal

---
## Tabla de Contenidos
- [Tecnologías](#Tecnologías)
- [HTML](#HTML)
- [CSS](#CSS)
- [JAVASCRIP](#JAVASCRIP)
---
# Tecnologías
- HTML5.
- CSS3. 
- JavaScript
--- 
# HTML
1. HTML  
    ```bash
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="estilos.css">
    </head>

    <body>
        <div id="box"></div>
        <button onclick="changeColor()">Click</button>
        <script src="code.js"></script>
    </body>

    </html>
# CSS3
2. CSS3
    ```bash
    #box {
        height: 100px;
        width: 100px;
        background: red;
    }
# JAVASCRIP
3. JAVASCRIP
    ```bash 
    const box = document.getElementById('box');
    function changeColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);


        const colorRandom = `rgb(${r}, ${g}, ${b})`;
        box.style.backgroundColor = colorRandom;
    }