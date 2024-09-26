import { URL_BACKEND } from "@fn/env";
import { notify } from "@nano";

interface SubmitLogin {
  formData: {
    userName: string;
    password: string;
    remember: boolean;
    loading: boolean;
  };

  setFormData: React.Dispatch<
    React.SetStateAction<{
      userName: string;
      password: string;
      remember: boolean;
      loading: boolean;
    }>
  >;
}

const submitLogin = ({ formData, setFormData }: SubmitLogin) => {
  const newData = {
    userName: formData.userName,
    password: formData.password,
  };

  fetch(`${URL_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
      notify({ type: "error", message: "Error al iniciar sesion" });
    })
    .finally(() => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        loading: false,
      }));
    });
};

export default submitLogin;
