import React, { useEffect, useState } from "react";
import { Peticion } from "../helpers/Peticion.jsx";
import { useForm } from "../Hooks/useForm.js";

export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [objetives, setObjetives] = useState([]); //*Objetivos obtenidos de la base de datos
  const [saved, setSaved] = useState(0); //*Total de dinero ahorrado
  const [totalmoney, setTotalmoney] = useState(0); //*Todal de dinero sumando todos los objetivos
  const [completed, setCompleted] = useState(0); //*Objetivos completados
  const [total, setTotal] = useState(0); //*Total de objetivos creados
  const [modalState, setModalState] = useState(false); //*Estado del modal add
  const [modalEditState, setModalEditState] = useState(false); //*modal de edit
  const [showSave, setShowSave] = useState(false); //*en prueba
  const [objetive, setObjetive] = useState({}); //*un objetivo
  const [idOneObjetive, setIdOneObjetive] = useState({}); //*id de un objetivo
  const { formulario, enviado, cambiado } = useForm(); //* utilizado en la creacion y edicion de objetivos
  const [result, setResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    //* sacar datos del usuario identificado del localstoraje
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    //* comprobar si tiene el token y el user
    if (!token && !user) {
      setLoading(false);
      return false;
    }

    //*transformar datos json del usuario a objeto js
    const userObj = JSON.parse(user);
    const userId = userObj.id;

    //* peticion ajax al backend para comprobar el token y devolver datos del usuario

    const url = "http://localhost:3900/api/user/profile/" + userId;

    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
        Authorization: token,
      },
    });
    const data = await request.json();
    setAuth(data.user);
    setLoading(false);
  };

  const editObjetive = async (e) => {
    //*Editar objetivo
    e.preventDefault();
    let editObjetive = formulario;
    const url = `http://localhost:3900/api/editar_objetivo/${objetive._id}`;

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(editObjetive),
    };

    await fetch(url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        const fileInput = document.querySelector(".fileEdit");
        const image = fileInput.files[0];

        if (fileInput.value) {
          const formData = new FormData();
          formData.append("file0", image, image.name);
          await fetch(
            "http://localhost:3900/api/subir_imagen/" + data.objetivo._id,
            {
              method: "POST",
              headers: {
                Authorization: localStorage.getItem("token"),
              },
              body: formData,
            }
          )
            .then((response) => response.json())
            .then((data) => {})
            .catch((error) => {
              console.error("Error al subir la imagen:", error);
            });
        }
      })
      .catch((error) => console.log(error));
    setModalEditState(false);
    conseguirObjetivos();
  };

  const conseguirObjetivos = async () => {
    //*Consigue los objetivos
    const url = "http://localhost:3900/api/show_objetives";
    let peticion = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    let datos = await peticion.json();
    if (datos.status === "success") {
      setObjetives(datos.objetivo);
      setTotal(datos.objetivo.length);
      getCompleted(datos.objetivo);
      getSaved(datos.objetivo);
      getTotalMoney(datos.objetivo);
    }
  };

  const separador = (numero) => {
    //*separa con un punto los miles, millones, etc.
    let parte = numero.toString().split(".");
    parte[0] = parte[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parte.join(".");
  };

  const obtenerPorcentaje = (numero, ahorrado) => {
    //*obtiene porcentaje
    let ahorro = ahorrado;
    let porcentaje = (ahorro * 100) / numero;
    if (porcentaje >= 100) {
      return 100;
    } else if (porcentaje < 100) {
      let porcentajeRecortado = porcentaje.toString().slice(0, 5);
      return porcentajeRecortado;
    } else if (numero == 0 && ahorrado == 0) {
      return 0;
    }
  };

  const getCompleted = (objetives) => {
    //*consigue los objetivos completados
    let counter = 0;
    objetives.map((objetiveCompleted) => {
      if (objetiveCompleted.ahorrado >= objetiveCompleted.cantidad) {
        counter++;
        setCompleted(counter);
      }
    });
  };

  const getSaved = (objetivesG) => {
    //*consigue el dinero ahorrado
    let saved = 0;
    objetivesG.map((objetive) => {
      saved += objetive.ahorrado;
      setSaved(saved);
    });
  };

  const getTotalMoney = (objetives) => {
    //*consigue el dinero total de todos los productos
    let money = 0;
    objetives.map((objetive) => {
      money += objetive.cantidad;
      setTotalmoney(money);
    });
  };

  const deleteObjetive = async (id, objetives) => {
    //*elimina el objetivo
    const url = "http://localhost:3900/api/delete_objetive/" + id;
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    };

    fetch(url, requestOptions)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getObjetive = async (objetive) => {
    const datos = await fetch(
      `http://localhost:3900/api/conseguir_objetivo/${objetive.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    const data = datos.json();
    console.log(data);

    if (datos.status == "succes") {
      setObjetive(data);
    }
  };

  const getEdited = async (id, objetive) => {
    fetch(`http://localhost:3900/api/conseguir_objetivo/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        // Verificar si la respuesta es exitosa (código de estado 200-299)
        if (!response.ok) {
          throw new Error("La petición no fue exitosa");
        }

        // Convertir la respuesta a JSON
        return response.json();
      })
      .then((data) => {
        // Manipular los datos obtenidos
        setObjetive(data.objetivo);
      })
      .catch((error) => {
        // Manejar errores
        console.error("Error en la petición:", error);
      });
  };

  return (
    <Context.Provider
      value={{
        authUser,
        auth,
        setAuth,
        getObjetive,
        setObjetives,
        //saveObjetive,
        editObjetive,
        cambiado,
        conseguirObjetivos,
        objetives,
        separador,
        obtenerPorcentaje,
        total,
        totalmoney,
        completed,
        saved,
        modalState,
        setModalState,
        modalEditState,
        setModalEditState,
        deleteObjetive,
        showSave,
        setShowSave,
        getEdited,
        objetive,
        setObjetive,
        idOneObjetive,
        setIdOneObjetive,
      }}
    >
      {children}
    </Context.Provider>
  );
};
