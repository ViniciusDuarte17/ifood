import React from "react";
import * as S from "./styled";
import { Headers } from "../../components/Hearder";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../router/coordinator";
import { InputProfile } from "./InputProfile";



export const ProfileEdit = () => {
    const navigate = useNavigate()
    return (
        <>
            <Headers texto={'Editar'}>
                <S.ButtonIcon
                    onClick={() => goToProfile(navigate)}
                >
                    <ChevronLeftIcon
                        fontSize="large"
                        color="primary" />

                </S.ButtonIcon>
            </Headers>
            <S.Content>
                <InputProfile />
            </S.Content>
        </>
    )
}