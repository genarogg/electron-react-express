import { A } from "@nano";
import { MenuToolTip } from "@tooltip";
import React, { useContext, useState, useEffect } from "react";
import { GlobalStateContext, ActionTypes } from "@redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import ImgLogo from "src/react/img/ImgLogo";

interface LogoORuserProps {
  size?: number;
}

const LogoORuser: React.FC<LogoORuserProps> = ({ size = 40 }) => {
  const { state, dispatch } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    // Verifica si la imagen del estado global está disponible
    if (state.user_image !== "") {
      setImageSrc(state.user_image);
      setIsLoading(false);
    } else {
      setImageSrc("https://avatars.githubusercontent.com/u/37651665");
      setIsLoading(false);
    }
  }, [state.user_image]);

  const handleReset = () => {
    dispatch({ type: ActionTypes.RESET_STATE });
    A({ href: "/", type: "push" });
  };

  const items = [
    <button key={1} onClick={handleReset}>
      cerrar sesion
    </button>,
  ];

  return (
    <div className="container-logo-user">
      <MenuToolTip items={items}>
        <div className="logo">
          {isLoading ? (
            <Skeleton circle={true} height={size} width={size} />
          ) : (
            <div className="container-img">
              <ImgLogo />
            </div>
          )}
        </div>
      </MenuToolTip>
    </div>
  );
};

export default LogoORuser;
