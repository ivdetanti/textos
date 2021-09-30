Para actualizar el sitio de textos

Formatos básicos para los archivos .txt

negrita
         
         <b> 
         negrita 
         </b>

parrafo
 
         <p> 
         kjhkhjkhkh<> 
         </p>
 
 Cursiva
       
       
        <i> 
        italica 
        </i>

Se pueden agregar entradas 
textos o artículos

Cada una de las entradas tiene:
un archivo de texto, 
una imagen 
y un título.

En index.html cada texto se ve como:

        <li> 
          <img src='archivodeimagen.jpg'>
          <a texto='archivodetexto.txt'>Título de la entrada</a>
        </li>

archivodeimagen.jpg 
sería el archivo de imagen, que hay que subir a github (ver más adelante)

archivodetexto.txt
sería un archivo .txt con el contenido de texto. (puede incluir html, ver más adelante)

Título de la entrada
es el título que aparece en el botón y también cuando se muestra el texto


        <li> 
         <img src='ARCHIVO_DE_IMAGEN.jpg'>
         <a texto='ARCHIVO_DE_TEXTO.txt'>TITULO DEL TEXTO</a>
        </li>
         
        
        Pasos para agregar una nueva entrada
    
    
       Se puede empezar subiendo la imagen que se vaya a usar 
      
   1.   Hay que subir la imagen a la carpeta img en github
   para esto ir a https://github.com/ivdetanti/textos/tree/main/img
   
   2.   ir a "add files" (arriba a la derecha) y seleccionar  "upload files" 
   
   3.   seguir los pasos para subir la imagen. ( tratar de que la imagen no sea demasiado grande ni 
     demasiado chica, mas o menos del tamaño que se ven en la pantalla, tiene que ser de formato .jpg o .png )
      
   4.   apretar "commit changes" abajo, (guardar)

   5.   fijarse en el nombre del archivo de imagen, es el nombre que hay que usar al agregarlo a la entrada en los pasos siguientes
    
   
    Ahora creamos el texto
    
    
    
    1.   ir a https://github.com/ivdetanti/textos
    
    2.   ir a "add files" (arriba a la derecha) y seleccionar "create new file" ( ver más adelante la opción "upload files" )
    
    3.   Arriba a la izquierda, poner nombre al nuevo archivo por ejemplo "mitexto.txt".  (usar .txt)
    
    4.   escribir el texto, o pegarlo 
    
    5.   abajo de todo, apretar "commit changes"  ( equivale a "guardar cambios" )
    
    6.   ir a https://github.com/ivdetanti/textos
    
    7.   abrir index.html
    
    8.   apretar "edit file" ( el ícono de lapiz arriba a la derecha )
    
    9.   buscar la línea que dice:  <!--  agregar acá otros <li>...</li> -->
    
    10.   agregar arriba de ella: 
        
         <li> 
          <img src='img/imagen.jpg'>
          <a texto='nombre.txt'>título</a>
        </li>
      
    11.   esto último usando el nombre del archivo de imagen, el título del texto y el archivo txt que hayas creado
           
    12.   apretar "commit changes"  para guardar index.html
   
   
   
Subir archivos
En vez de editar los archivos de texto y el index.html online, se pueden editar en la máquina y luego subirlos a github

Para subir un archivo:

1.      ir a https://github.com/ivdetanti/textos
      
2.      si el archivo va a una carpeta determinada, seleccionarla3 ir a "add files" (arriba a la derecha) y seleccionar  "upload files" 
   
3.      seguir los pasos para subir el archivo
   
4.      apretar "commit changes"

 
   
   
        
   
           
           
        
        
        
    
        
