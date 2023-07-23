import "./LetterButton.css";
export const LetterButton = ({ letter, handleOnLetterPress }) => {
  return (
    <button
      onClick={() => {
        handleOnLetterPress(letter);
      }}
    >
      📧{letter.title}
    </button>
  );
};

