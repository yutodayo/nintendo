import { useHistory } from "react-router-dom";
import { PrimaryButton } from "../button/PrimaryButton";

export const ButtonArea = () => {
  const history = useHistory();
  const onClickProfile = () => history.push("/profile");
  const onClickHighschool = () => history.push("/highschool");
  const onClickUniv = () => history.push("/univ");
  const onClickMotivation = () => history.push("/motivation");

  return (
    <div>
      <PrimaryButton onClick={onClickProfile}>自己紹介</PrimaryButton>
      <PrimaryButton onClick={onClickHighschool}>
        高校での取り組み
      </PrimaryButton>
      <PrimaryButton onClick={onClickUniv}>大学での取り組み</PrimaryButton>
      <PrimaryButton onClick={onClickMotivation}>志望動機</PrimaryButton>
    </div>
  );
};
