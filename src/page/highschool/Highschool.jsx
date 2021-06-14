import { useHistory } from "react-router-dom";

export const Highschool = () => {
  const history = useHistory();
  const onClickProfile = () => history.push("/profile");
  const onClickUniv = () => history.push("/univ");
  const onClickMotivation = () => history.push("/motivation");
  return (
    <div>
      <button onClick={onClickProfile}>自己紹介</button>
      <button>高校での取り組み</button>
      <button onClick={onClickUniv}>大学での取り組み</button>
      <button onClick={onClickMotivation}>志望動機</button>
      <h1>高校での取り組み</h1>
    </div>
  );
};
