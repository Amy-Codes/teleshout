import { useState } from "react";
import { SaveButton } from "./SaveButton";

export const SelectedLetter = ({
  selectedLetter,
  handleOnLetterPress,
  isCreatingNewLetter,
  handleOnLetterCreate,
}) => {
  const [letterTitle, setLetterTitle] = useState(undefined);
  const [letterMessage, setLetterMessage] = useState(undefined);
  const [letterFrom, setLetterFrom] = useState(undefined);
  const handleOnSavePress = () => {
    setLetterTitle("");
    setLetterMessage("");
    setLetterFrom("");
  }; // do this later
  return (
    <div>
      <button
        onClick={() => {
          handleOnLetterPress(undefined);
          handleOnLetterCreate(false);
        }}
      >
        ❌
      </button>
      {/* <!-- Adding value to the LetterTitle/msg/from--> */}
      {isCreatingNewLetter ? (
        <>
          <input
            placeholder={"Enter title"}
            value={letterTitle}
            onChange={(e) => {
              setLetterTitle(e.target.value);
            }}
          ></input>
          <input
            placeholder={"Enter body"}
            value={letterMessage}
            onchange={(e) => {
              setLetterMessage(e.target.value);
            }}
          ></input>
          <input
            placeholder={"Enter from sender"}
            value={letterFrom}
            onchange={(e) => {
              setLetterFrom(e.target.value);
            }}
          ></input>
        </>
      ) : (
        <>
          <p>{selectedLetter?.title}</p>
          <p>{selectedLetter?.message}</p>
          <p>{selectedLetter?.from}</p>
        </>
      )}
      {isCreatingNewLetter && (
        <SaveButton handleOnSavePress={handleOnSavePress}></SaveButton>
      )}
    </div>
  );
};
