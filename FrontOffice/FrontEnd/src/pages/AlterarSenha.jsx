import React from "react";
import {
  ButtonConfirmar,
  MainAlterarCliente,
} from "../styles/AlterarCliente.styles";

import Icon from "@mdi/react";
import { mdiArrowLeftBoldCircle } from "@mdi/js";
import axios from "axios";
import { useNavigate } from "react-router";

function AlterarSenha() {
  let navigate = useNavigate();
  const handleTrocarSenha = (e) => {
    e.preventDefault();
    console.log(e.target);
    const fd = new FormData(e.target);
    console.log(fd);
    const ObjectForm = Object.fromEntries(fd);
    console.log(ObjectForm);
    ObjectForm.email = "denisls02@Outlook.com";

    if (ObjectForm.senhaNova == ObjectForm.senhaNovaConfirma) {
      console.log("passaramkk");
      axios
        .post("http://localhost:8081/cliente/login", ObjectForm)
        .then((resp) => {
          console.log("Senha bateu");
          if (resp.data == true) {
            console.log("Senha aceita");
            axios
              .put("http://localhost:8081/cliente/AlterarSenha", ObjectForm)
              .then((resp) => {
                console.log(resp.data);
                if (resp.status == 200) {
                  navigate("/");
                }
              });
          }
        });
    }
  };
  return (
    <MainAlterarCliente>
      <Icon
        path={mdiArrowLeftBoldCircle}
        style={{ color: "white", cursor: "pointer" }}
        size={1}
      />

      <div id="container_alterarsenha">
        <form onSubmit={(e) => handleTrocarSenha(e)}>
          <label for="oldPassword"> Senha Antiga</label>
          <input type="password" name="senha"></input>
          <label for="password"> Senha Nova</label>
          <input type="password" name="senhaNova"></input>
          <label for="newPassword"> Senha Confirma</label>
          <input type="password" name="senhaNovaConfirma"></input>
          <ButtonConfirmar> Confirmar </ButtonConfirmar>
        </form>
      </div>
    </MainAlterarCliente>
  );
}

export default AlterarSenha;
