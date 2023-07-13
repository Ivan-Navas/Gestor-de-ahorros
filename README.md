# Gestor de ahorros con React

Gestor de ahorro creado utilizando React, Node.JS y MongoDB

### Creacion del boceto del diseño

Para la creacion del boceto que se utilizaria como referencia para la creacion de la pagina web, se utilizo Figma
![FigmaBoceto](./readmeImages/figmaBoceto.png)

### Funcion de la pagina

La pagina tiene como funcion organizar nuestros objetivos economicos, con un titulo, la cantidad de dinero💸 que se necesita ahorrar y la cantidad que se tiene ahorrada, tambien incluye una imagen a modo de ilustracion o representacion del objetivo

- Nota: La pagina permite añadir una imagen personalizada, pero en caso de que no se agrege, se añadira una predeterminada:
  ![ImagenDefault](./public/logo.png)

### Estado de la pagina

Acatualmente me encuentro trabajando en la funcionalidad de inicio de sesión y el carrucel donde se mostrara informacion de objetivos como, objetivos creados recientemente, objetivos que han sido completados, mas cercanos o mas lejanos a completar, etc.

### Creacion de la pagina

Para la cracion de la pagia se creó un contexto en el cual se encentran todas los funciones que nos permitiran crear objetivos, editarlos, etc.

#### Creacion de un objetivo

```javascript
const saveObjetive = async (e) => {
  let newObjetive = formulario;

  const { datos, cargando } = await Peticion(
    "http://localhost:3900/api/create_objetive",
    "POST",
    newObjetive
  );

  if (datos.status == "success") {
    setResult("guardado");
    modalContext.setIdOneObjetive(datos.objetivo._id);
  } else {
    setResult("error");
  }

  const fileInput = document.querySelector(".file");

  if (datos.status === "success" && fileInput.files[0]) {
    setResult("guardado");

    const formData = new FormData();
    formData.append("file0", fileInput.files[0]);

    const subida = await Peticion(
      `http://localhost:3900/api/subir_imagen/${datos.objetivo._id}`,
      "POST",
      formData,
      true
    );

    if (subida.datos.status === "success") {
      setResult("guardado");
    } else {
      setResult("error");
    }
  }
  setModalState(false);
};
```
