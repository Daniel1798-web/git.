// variables

var  granja  =  documento . getElementById ( "granjita" ) ;
var  papel  =  granja . getContext ( "2d" ) ;
var  boton  =  documento . getElementById ( "boton" ) ;



var  cantidad_Pollos  =  aleatorio ( 1 ,  5 ) ;
var  cantidad_Vacas  =  aleatorio ( 2 , 7 ) ;
var  xPosition  =  aleatorio ( 0 ,  420 ) ;
var  yPosition  =  aleatorio ( 0 ,  420 ) ;
var  movimiento  =  5 ;

var  teclas  =
{
    ARRIBA : 38 ,
    DERECHO : 39 ,
    IZQUIERDA : 37 ,
    ABAJO : 40
} ;


// Posicion De Los Animales Comunes

var  polloRetornoX  =  [ ] ;
var  polloRetornoY  =  [ ] ;
var  vacaRetornoX  =  [ ] ;
var  vacaRetornoY  =  [ ] ;




// MAPA - GRANJA

var  mapa  =
{

    url : "imagenes / tile.webp" ,
    cargaOK : falso

} ;

mapa . imagen  =  nueva  imagen ( ) ;
mapa . imagen . src  =  mapa . url ;
mapa . imagen . addEventListener ( "cargar" ,  cargarMapa ) ;


función  cargarMapa  ( )
{
    mapa . cargaOK  =  verdadero ;
    dibujar ( ) ;
}



// Animales

var  vaca  =
{
    url : "imagenes / vaca.webp" ,
    cargaOK : falso
} ;

vaca . animal  =  nueva  imagen ( ) ;
vaca . animal . src  =  vaca . url ;
vaca . animal . addEventListener ( "cargar" ,  cargarVaca ) ;

var  pollo  =
{
    url : "imagenes / pollo.webp" ,
    cargaOK : falso
}

pollo . animal  =  nueva  imagen ( ) ;
pollo . animal . src  =  pollo . url ;
pollo . animal . addEventListener ( "cargar" ,  cargarPollo ) ;


var  cerdo  = 
{
    url : "imagenes / cerdo.webp" ,
    cargaOK : falso
}

cerdo . animal  =  nueva  imagen ( ) ;
cerdo . animal . src  =  cerdo . url ;
cerdo . animal . addEventListener ( "cargar" ,  cargarCerdo ) ;

función  cargarCerdo ( )
{
    cerdo . cargaOK  =  verdadero ;
    dibujar ( ) ;
} ;

función  cargarVaca ( )
{
    vaca . cargaOK  =  verdadero ;
    dibujar ( ) ;
} ;

función  cargarPollo ( )
{
    pollo . cargaOK  =  verdadero ;
    dibujar ( ) ;
} ;



función  dibujar ( )
{
    consola . log ( dibujar )

    si  ( mapa . cargaOK  ==  true )
    {
        papel . drawImage ( mapa . imagen , 0 ,  0 )
    } ;

    si  ( vaca . cargaOK  ==  verdadero )
    {
        consola . log ( "cantidad de vacas =" ,  cantidad_Vacas )

        para ( var  v  =  0 ;  v  <  cantidad_Vacas ;  v ++ ) {

        var  x  =  aleatorio ( 0 , 5 ) ;
        var  y  =  aleatorio ( 0 , 5 ) ;
        var  x  =  x  *  80 ;
        var  y  =  y  *  80 ;
        papel . drawImage ( vaca . animal ,  x ,  y ) ;
        vacaRetornoX . empujar ( x ) ;
        vacaRetornoY . empujar ( y ) ;
    }
} ;

    if  ( pollo . cargaOK  ==  true )
    {
        consola . log ( "pollos =" , cantidad_Pollos )

        for ( var  p  =  0 ;  p  <  cantidad_Pollos ;  p ++ )
        {
            var  x  =  aleatorio ( 0 , 4 ) ;
            var  y  =  aleatorio ( 0 , 4 ) ;
            var  x  =  x *  80 ;
            var  y  =  y *  80 ;
        papel . drawImage ( pollo . animal ,  x ,  y ) ;
        polloRetornoX . empujar ( x ) ;
        polloRetornoY . empujar ( y ) ;
    }
 } ;

    si  ( cerdo . cargaOK  ==  verdadero )
    {
        papel . drawImage ( cerdo . animal ,  xPosition ,  yPosition ) ;
    } ;
} ;






// movimiento
documento . addEventListener ( "keydown" ,  moverCerdo ) ;

function  moverCerdo ( evento )
{
    consola . log ( "funcion moverCerdo" )
    interruptor ( evento . keyCode )
{
    case  teclas . DERECHO :
    moverPig ( xPosition  ,  yPosition ) ;
    xPosition  =  xPosition  +  movimiento ;
    consola . log ( "derecha +" )
    romper ;

    case  teclas . IZQUIERDA :
        moverPig ( xPosition  ,  yPosition ) ;
        xPosition  =  xPosition  -  movimiento ;
        consola . log ( "izquierda" )
        romper ;

    case  teclas . ABAJO :
        moverPig ( xPosition  ,  yPosition ) ;
        yPosition  =  yPosition  +  movimiento ;
        consola . log ( "Bajando" )
        romper ;

    case  teclas . ARRIBA :
        moverPig ( xPosition  ,  yPosition ) ;
        yPosition  =  yPosition  -  movimiento ;
        consola . log ( "Arriba" )
        romper ;

} }

    

function  moverPig  ( xPosition ,  yPosition )
{
    

    si  ( mapa . cargaOK )
    {
    papel . drawImage ( mapa . imagen ,  0 ,  0 )
    }

    si ( vaca . cargaOK ,  pollo . cargaOK ,  cerdo . cargaOK )
    {
        papel . drawImage ( cerdo . animal ,  xPosition  +  movimiento ,  yPosition  +  movimiento )
        dibujarRetornos ( ) ;
    }
  

} ;

function  dibujarRetornos ()
{
    for ( var  p  =  0 ;  p  <=  cantidad_Pollos ;  p ++ )
    {
        papel . drawImage ( pollo . animal ,  polloRetornoX [ p ] ,  polloRetornoY [ p ] )
    }

    for (  var  v  =  0 ;  v  <=  cantidad_Vacas ;  v ++ )
    {
        papel . drawImage ( vaca . animal ,  vacaRetornoX [ v ] ,  vacaRetornoY [ v ] )
    }

} ;



// Funcion aleatorio



function aleatorio  ( maxi , min )
{
    var  resultado ;
    resultado  =  Matemáticas . piso ( Matemáticas . aleatorio ( ) * ( maxi  -  min  +  1 ) ) +  min ;
     volver =  resultado ;
} ;

boton . addEventListener ( "hacer clic" ,  dibujar ) ;

 function dibujar2 ()
{console.log (dibujar)
    if (mapa.cargaOK == true) {
        papel.drawImage (mapa.imagen, 0, 0)
    }
    if (vaca.cargaOK == true) { 
        papel.drawImage (vaca.animal, z, c);}
    if (pollo.cargaOK == true) {
        papel.drawImage (pollo.animal, z, d);
    }
    if (cerdo.cargaOK == true) {
        papel.drawImage (cerdo.animal, c, d);
    }
    removeEventListener ("clic", dibujar)