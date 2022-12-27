import React from "react";
import { Headers } from "../../components/Hearder";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import * as S from "./styled";
import EditIcon from "@mui/icons-material/Edit";
import { goToEditProfile, goToRegisterEnddres } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/BASE_URL";
import { CardOrder } from "./CardOrder";
import { ConfFooter } from "./ConfFooter";

export const ProfilePage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const [profile] = useRequestData(`${BASE_URL}/profile`);
  const [history] = useRequestData(`${BASE_URL}/orders/history`);
  const order = history?.orders.length; 

  return (
    <>
      <Headers texto={'Meu perfil'} />
      <S.PerfilSpan>
        <span>
          <p> {profile?.user.name}</p>
          <p> {profile?.user.email}</p>
          <p> {profile?.user.cpf}</p>
        </span>
        <S.ButtonUi onClick={() => goToEditProfile(navigate)}>
          <EditIcon />
        </S.ButtonUi>
      </S.PerfilSpan>
      <S.EditAnddres >
        <span>Endereço cadastrado</span>
        <div>
          <p>{profile?.user.address} </p>
          <button onClick={() => goToRegisterEnddres(navigate)}>
            <EditIcon />
          </button>
        </div>
      </S.EditAnddres>
      <S.HistoricoPedido>
        <span>Histórico de pedidos</span>
      </S.HistoricoPedido>
      <S.ProfileOrder>
      {order === undefined ? (
          <span>Você não realizou nenhum pedido</span>
        ) : (
          <CardOrder history={history} />
        )}
      </S.ProfileOrder>
      <ConfFooter />
    </>
  )
}