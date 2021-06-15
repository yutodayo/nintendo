import { Card } from "../../Card.jsx/Card";
import { SContainer } from "../../SConteiner";
import { InUnivButton } from "./InUnivButton";

export const InUniv = () => {
  return (
    <SContainer>
      <h1>学内での取り組み</h1>
      <InUnivButton />
      <Card>
        <div>内容</div>
      </Card>
    </SContainer>
  );
};
