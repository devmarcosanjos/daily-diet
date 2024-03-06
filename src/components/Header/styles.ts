import styled from "styled-components/native";

import logoImage from "@assets/logo.png";
import avatarImage from "@assets/avatar.png";

export const Container = styled.View`
    width: 100%;
    margin: 64px 0 32px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.Image.attrs({source: logoImage})``
export const Avatar = styled.Image.attrs({source: avatarImage})``