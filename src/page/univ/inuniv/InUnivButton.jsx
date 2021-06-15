import { useHistory } from "react-router-dom";
import { SecondButton } from "../../../button/Second.Button";

export const InUnivButton = () => {
  const history = useHistory();
  const onClickClass = () => history.push("/univ/inuniv/class");
  const onClickStudy = () => history.push("/univ/inuniv/study");
  return (
    <div>
      <SecondButton onClick={onClickClass}>授業内</SecondButton>
      <SecondButton onClick={onClickStudy}>研究</SecondButton>
    </div>
  );
};
