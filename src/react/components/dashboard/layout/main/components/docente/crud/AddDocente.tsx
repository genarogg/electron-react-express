import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@form";
import { CheckboxBasic, BtnSubmitBasic, BtnText } from "@btn";
import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";
import { CloseElectron } from "@electron";

interface AddDocenteProps {}

const AddDocente: React.FC<AddDocenteProps> = () => {
  const [formData, setFormData] = useState({
    cod_cir: "",
    nombre_circuito: "",
    comuna: "",
    consejo_comunal: "",
    codigo_plantel: "",
    codigo_estadistico: "",
    codigo_dependencia: "",
    nombre_plantel: "",
    direccion_institucion: "",
    dependencia: "",
    nivel_modalidad: "",
    nombres: "",
    apellidos: "",
    ci: "",
    fecha_nac: "",
    correo: "",
    fecha_ingreso_mppe: "",
    anos_servicio: "",
    titulo_pregrado: "",
    funcion: "",
    area_docente_especialista: "",
    codigo_cargo: "",
    dependencia_nominal: "",
    grado_seccion: "",
    estatus: "",
    reposo_permiso: "",
    inscrito_psuv: "",
    pertenece_movimiento_social: "",
    carnet_patria_codigo: "",
    carnet_patria_serial: "",
    tipo_voto: "",
    centro_votacion: "",
    observaciones: "",
  });

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Aquí puedes enviar formData a tu servidor o manejarlo como necesites
  };

  return (
    <div className="container-form">
      <form className="form-basic add-docente" onSubmit={onSubmit}>
        <CloseElectron />
        <h4 className="title">Agregar Docente</h4>
        {Object.keys(formData).map((key) => (
          <Input
            key={key}
            type={
              key === "fecha_nac" || key === "fecha_ingreso_mppe"
                ? "date"
                : "text"
            }
            placeholder={key.replace(/_/g, " ")}
            name={key}
            value={formData[key as keyof typeof formData]}
            valueChange={(e) =>
              setFormData({ ...formData, [key]: e.target.value })
            }
          />
        ))}
        <BtnSubmitBasic text="Agregar Docente" loading={false} />
      </form>
    </div>
  );
};

export default AddDocente;
