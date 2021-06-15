import { useHistory } from "react-router-dom";
import { HighschoolButton } from "../button/HighschoolButton";
import { MotivationButton } from "../button/MotivationButton";
import { ProfileButton } from "../button/ProfileButton";
import { UnivButton } from "../button/UnivButton";

export const ButtonArea = () => {
  const history = useHistory();
  const onClickProfile = () => history.push("/profile");
  const onClickHighschool = () => history.push("/highschool");
  const onClickUniv = () => history.push("/univ");
  const onClickMotivation = () => history.push("/motivation");

  return (
    <div>
      <ProfileButton onClick={onClickProfile}>自己紹介</ProfileButton>
      <HighschoolButton onClick={onClickHighschool}>
        高校での取り組み
      </HighschoolButton>
      <UnivButton onClick={onClickUniv}>大学での取り組み</UnivButton>
      <MotivationButton onClick={onClickMotivation}>志望動機</MotivationButton>
    </div>
  );
};
