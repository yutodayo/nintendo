import styled from "styled-components";
import { ButtonArea } from "../../molecules/ButtonArea";
import { Logo } from "./Logo";

export const Menu = () => {
  return (
    <SContainer>
      <Logo />
      <SButtonWrapper>
        <ButtonArea />
      </SButtonWrapper>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  width: 50%;
  margin-top: 50px;
`;
const SButtonWrapper = styled.div`
  padding-left: 100px;
`;
