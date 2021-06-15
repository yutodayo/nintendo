import { useHistory } from "react-router-dom";
import { SecondButton } from "../../button/Second.Button";

export const UnivButton = () => {
  const history = useHistory();
  const onClickCurry = () => history.push("/univ/curry");
  const onClickInUniv = () => history.push("/univ/inuniv");
  return (
    <div>
      <h1>大学での取り組み</h1>
      <SecondButton onClick={onClickCurry}>学外での取り組み</SecondButton>
      <SecondButton onClick={onClickInUniv}>学内での取り組み</SecondButton>
    </div>
  );
};
