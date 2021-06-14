import { Link } from "react-router-dom";

export const InUniv = () => {
  return (
    <div>
      <h1>学内での取り組み</h1>
      <Link to="/univ/inuniv/class">授業内</Link>
      <br />
      <Link to="/univ/inuniv/study">研究</Link>
    </div>
  );
};
