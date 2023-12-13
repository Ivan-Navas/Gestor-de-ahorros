# Gestor de ahorros con React

Gestor de ahorro creado utilizando React, Node.JS y MongoDB

### Creacion del boceto del diseño

Para la creacion del boceto que se utilizaria como referencia para la creacion de la pagina web, se utilizo Figma

>[!NOTE] 
> Puedes acceder al boceto con el siguiente link:
>[click aqui](https://www.figma.com/file/oMhBibkLbX1TzGgETWfRlj/Ahorros?type=design&node-id=0%3A1&mode=design&t=ppkmoX07jPD7s5Jf-1)


![FigmaBoceto](https://res.cloudinary.com/ivannavas/image/upload/v1702504970/GestorDeAhorros/Documentacion/figmaBoceto_egigkd.png)

### Funcion de la pagina

La pagina tiene como funcion organizar nuestros objetivos economicos, con un titulo, la cantidad de dinero💸 que se necesita ahorrar y la cantidad que se tiene ahorrada, tambien incluye una imagen a modo de ilustracion o representacion del objetivo

>[!NOTE] 
>La pagina permite añadir una imagen personalizada, pero en caso de que no se agrege, se añadira una predeterminada:

![ImagenDefault](https://res.cloudinary.com/ivannavas/image/upload/v1702505195/GestorDeAhorros/Documentacion/logo_jxwlsb.png)

### Estado de la pagina

Acatualmente me encuentro trabajando en la funcionalidad de inicio de sesión, corrigiendo errores y el carrucel donde se mostrara informacion de objetivos como, objetivos creados recientemente, objetivos que han sido completados, mas cercanos o mas lejanos a completar, etc. 

### Creacion de la pagina

Para la cracion de la pagia se creó un contexto en el cual se encentran todas los funciones que nos permitiran crear objetivos, editarlos, etc.

#### Creacion de un objetivo

para la creacion de un objetivo de pulsa en el signo mas (+) que que encuentra en la parte izquierda de la pagina

![AddImage](https://res.cloudinary.com/ivannavas/image/upload/v1702504965/GestorDeAhorros/Documentacion/crearObjetivo_vul1km.png)

Luego, se rellena el formulario que se abrirá en una ventana modal

![AddForm](https://res.cloudinary.com/ivannavas/image/upload/v1702504965/GestorDeAhorros/Documentacion/addForm_xbraqs.jpg)

y por ultimo se preciona en confirmar 

#### Editar un objetivo 

Para la edición se identifica el objetivo que se editará, y se pulsa editar

![EditObjetive](https://res.cloudinary.com/ivannavas/image/upload/v1702504966/GestorDeAhorros/Documentacion/editarObjetivo_wzq83j.jpg)

>[!NOTE] 
>El formulario esta rellenado por defecto con la informacion que tenia el objetivo antes de ser editado

![FormEdit](https://res.cloudinary.com/ivannavas/image/upload/v1702504966/GestorDeAhorros/Documentacion/editForm_wwsovj.jpg)

>[!NOTE] 
>Puedes cancelar la edicion precionando en la equis(x) en la parte superior derecha del modal

![CancelEdit](https://res.cloudinary.com/ivannavas/image/upload/v1702504965/GestorDeAhorros/Documentacion/cancelEdit_e9psiy.jpg)

Despues de editar los campos necesarios se preciona confirmar

#### Eliminar un objetivo

Para la eliminacion de un ojetivo solamente se presiona la equis(x) del que se desea eliminar 

![DeleteObjetive](https://res.cloudinary.com/ivannavas/image/upload/v1702504966/GestorDeAhorros/Documentacion/eliminarObjetivo_l4j1wu.jpg)

>[!IMPORTANT]
>Al no tener inicio de sesión todas las personas veran los mismos objetivos

>[!NOTE]
>Pronto estara disponible la opcion de inicio de sesión