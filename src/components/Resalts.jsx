import PropTypes from "prop-types";

export function Result({ correct, questions }) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="сongratulations"
      />
      <h2>
        You answered correctly <br />
        to {correct} out of {questions.length} questions
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
}

Result.propTypes = {
  correct: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};
