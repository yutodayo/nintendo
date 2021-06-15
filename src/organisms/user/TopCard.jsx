import styled from "styled-components";

export const TopCard = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};

const SCard = styled.div`
  background-color: #fff;
`;
