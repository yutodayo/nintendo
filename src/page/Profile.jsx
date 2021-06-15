import { Card } from "./Card.jsx/Card";
import { SContainer } from "./SConteiner";

export const Profile = () => {
  return (
    <SContainer>
      <h1>自己紹介</h1>
      <Card>
        <h1>名前</h1>
        <h1>大学</h1>
        <h1>研究</h1>
      </Card>
    </SContainer>
  );
};
