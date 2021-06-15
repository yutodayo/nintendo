import styled from "styled-components";

export const Logo = () => {
  return (
    <SContainer>
      <SImg
        height={160}
        width={160}
        src="https://source.unsplash.com/Z3ArCos8yyw"
        alt="プロフィール"
      />
      <SName>Yuto Matsubara</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
const SImg = styled.img`
  border: 9px solid #fff;
  border-radius: 50%;
`;
const SName = styled.p`
  font-weight: bold;
  margin-top: 10px;
  font-size: 30px;
  font-family: sans-serif;
`;
