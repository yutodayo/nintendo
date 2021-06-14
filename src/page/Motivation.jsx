import { useHistory } from "react-router-dom";

export const Motivation = () => {
  const history = useHistory();
  const onClickProfile = () => history.push("/profile");
  const onClickHighschool = () => history.push("/highschool");
  const onClickUniv = () => history.push("/univ");
  return (
    <div>
      <button onClick={onClickProfile}>自己紹介</button>
      <button onClick={onClickHighschool}>高校での取り組み</button>
      <button onClick={onClickUniv}>大学での取り組み</button>
      <button>志望動機</button>
      <h1>志望動機</h1>
    </div>
  );
};
