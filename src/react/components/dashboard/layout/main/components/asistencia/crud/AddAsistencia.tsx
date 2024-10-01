import React, { useState } from "react";
import { Input } from "@form";
import { CheckboxBasic, BtnSubmitBasic } from "@btn";
import { notify } from "@nano";
import { BsEnvelopeFill } from "react-icons/bs";

import { useSimpleNav } from "@components/state/useSimpleNav";

import { URL_BACKEND } from "@env";

import LayoutForm from "../../layoutForm/LayoutForm";

interface AddAsistenciaProps {}

const AddAsistencia: React.FC<AddAsistenciaProps> = () => {
  const [formData, setFormData] = useState({
    ci: "",
  });

  const { state, handleChangeContext } = useSimpleNav();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    console.log("URL_BACKEND", `${URL_BACKEND}/asistencia/add`);

    fetch(`${URL_BACKEND}/asistencia/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        notify({ message: data.message, type: data.type });
        handleChangeContext(state.sub_context, "");
        console.log("data", data);
      });
  };

  return (
    <LayoutForm>
      <div className="container-form add-docente">
        <form
          className="form-basic"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
          }}
        >
          <Input
            type="text"
            icono={<BsEnvelopeFill />}
            placeholder="cedula de identidad"
            name="ci"
            value={formData.ci}
            valueChange={(e) =>
              setFormData({ ...formData, ci: e.target.value })
            }
          />

          <BtnSubmitBasic text="Agregar Cocinero" loading={false} />
        </form>
      </div>
    </LayoutForm>
  );
};

export default AddAsistencia;
