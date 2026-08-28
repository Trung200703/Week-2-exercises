import "../Random.css";
function Random(props) {

  const min = props.min;
  const max = props.max;

  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="random-box">
    <p> Random value between {min} and {max} =&gt; {randomNum}</p>
    </div>
  );
}

export default Random;