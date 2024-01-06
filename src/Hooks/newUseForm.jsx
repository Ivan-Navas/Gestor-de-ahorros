import React, { useState } from "react";

function useForm(initialObjet = {}) {
  const [form, setForm] = useState(initialObjet);

  const changed = (name, value) => {


    setForm({
      ...form,
      [name]: value,
    });
  };
  
  return {
    form,
    changed,
  };
}

export default useForm;
