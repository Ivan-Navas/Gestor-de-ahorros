import React, { useState } from "react";

export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
  const [objetives, setObjetives] = useState([]); //*Objetivos obtenidos de la base de datos
  const [saved, setSaved] = useState(0); //*Total de dinero ahorrado
  const [completed, setCompleted] = useState(0); //*Objetivos completados
  const [total, setTotal] = useState(0); //*Total de objetivos creados
  const [totalmoney, setTotalmoney] = useState(0); //*Todal de dinero sumando todos los objetivos


  const conseguirObjetivos = async () => {
    const url = "http://localhost:3900/api/show_objetives";
    let peticion = await fetch(url, {
      method: "GET",
    });
    let datos = await peticion.json();

    if (datos.status === "success") {
      setObjetives(datos.objetivo);
      setTotal(datos.objetivo.length);
      (getCompleted(datos.objetivo));
      (getSaved(datos.objetivo));
      (getTotalMoney(datos.objetivo));
    }
  };

  const separador = (numero) => {
    let parte = numero.toString().split(".");
    parte[0] = parte[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parte.join(".");
  };

  const obtenerPorcentaje = (numero, ahorrado) => {
    let ahorro = ahorrado;
    let porcentaje = (ahorro * 100) / numero;
    if (porcentaje >= 100) {
      return 100;
    } else if (porcentaje < 100) {
      let porcentajeRecortado = porcentaje.toString().slice(0, 5);
      return porcentajeRecortado;
    }
  };

  const getCompleted = (objetives) => {
    let counter = 0;
    objetives.map((objetiveCompleted) => {
      if (objetiveCompleted.ahorrado >= objetiveCompleted.cantidad) {
        counter++;
        setCompleted(counter);
      }
    });
  };

  const getSaved = (objetives) => {
    let saved = 0;
    objetives.map((objetive) => {
      saved += objetive.ahorrado;
      setSaved(saved);
    });
  };
  const getTotalMoney = (objetives) => {
    let money = 0;
    objetives.map((objetive) => {
      money += objetive.cantidad;
      setTotalmoney(money);
    });
  };
  return (
    <Context.Provider
      value={{
        conseguirObjetivos,
        objetives,
        separador,
        obtenerPorcentaje,
        total,
        totalmoney,
        completed,
        saved,
      }}
    >
      {children}
    </Context.Provider>
  );
};
