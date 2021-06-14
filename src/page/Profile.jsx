import { useHistory } from "react-router-dom";

export const Profile = () => {
  const history = useHistory();
  const onClickHighschool = () => history.push("/highschool");
  const onClickUniv = () => history.push("/univ");
  const onClickMotivation = () => history.push("/motivation");
  return (
    <div>
      <button>自己紹介</button>
      <button onClick={onClickHighschool}>高校での取り組み</button>
      <button onClick={onClickUniv}>大学での取り組み</button>
      <button onClick={onClickMotivation}>志望動機</button>
      <h1>自己紹介</h1>
    </div>
  );
};
