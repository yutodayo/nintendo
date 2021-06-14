import { useHistory } from "react-router-dom";

export const Univ = () => {
  const history = useHistory();
  const onClickProfile = () => history.push("/profile");
  const onClickHighschool = () => history.push("/highschool");
  const onClickMotivation = () => history.push("/motivation");
  const onClickCurry = () => history.push("/univ/curry");
  const onClickInUniv = () => history.push("/univ/inuniv");
  return (
    <div>
      <button onClick={onClickProfile}>自己紹介</button>
      <button onClick={onClickHighschool}>高校での取り組み</button>
      <button>大学での取り組み</button>
      <button onClick={onClickMotivation}>志望動機</button>
      <h1>大学での取り組み</h1>
      <button onClick={onClickCurry}>学外での取り組み</button>
      <button onClick={onClickInUniv}>学内での取り組み</button>
    </div>
  );
};
