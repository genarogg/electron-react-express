import { GlobalStateContext, ActionTypes } from "@redux";
import { useContext, useState } from "react";
import Separador from "../separador/Separador";

interface TituloNavSimpleProps {}

const TituloNavSimple: React.FC<TituloNavSimpleProps> = () => {
  const { dispatch } = useContext(GlobalStateContext);
  const [selectedContext, setSelectedContext] = useState<string | null>("");

  const handleChangeContext = (newContext: string) => {
    dispatch({ type: ActionTypes.SET_CONTEXT, payload: newContext });
    setSelectedContext(newContext);
  };

  return (
    <div className="nav-title-simple">
      <button
        className="nav-title-button"
        onClick={() => handleChangeContext("SimpleDB")}
      >
        <h2>
          e.t. ademar <br />
          vasquez chavez
        </h2>
        <Separador />
      </button>
    </div>
  );
};

export default TituloNavSimple;
