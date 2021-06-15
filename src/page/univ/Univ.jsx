import { Card } from "../Card.jsx/Card";
import { SContainer } from "../SConteiner";
import { UnivButton } from "./UnivButton";

export const Univ = () => {
  return (
    <SContainer>
      <UnivButton />
      <Card>
        <div>内容</div>
      </Card>
    </SContainer>
  );
};
