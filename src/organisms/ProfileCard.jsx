import styled from "styled-components";

export const ProfileCard = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #7ac943;
`;
