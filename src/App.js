import logo from "./logo.svg";
import "./App.css";
import { apiRes } from "./mockData/api-response";
import { useState } from "react";
import { LetterButton } from "./components/LetterButton";
import { SelectedLetter } from "./components/SelectedLetter";

function App() {
  const [selectedLetter, setSelectedLetter] = useState(undefined);
  const [isCreatingNewLetter, setCreatingNewLetter] = useState(false);
  const handleOnLetterPress = (letter) => {
    setCreatingNewLetter(false)
    setSelectedLetter(letter);
  };
  const handleOnLetterCreate = (condition) => {
    setCreatingNewLetter(condition);
  };
  return (
    <div className="App">
      {apiRes.map((letter) => {
        return (
          <LetterButton
            letter={letter}
            handleOnLetterPress={handleOnLetterPress}
          ></LetterButton>
        );
      })}
      {(selectedLetter || isCreatingNewLetter) && (
        <SelectedLetter
          handleOnLetterPress={handleOnLetterPress}
          selectedLetter={selectedLetter}
          isCreatingNewLetter={isCreatingNewLetter}
          handleOnLetterCreate={handleOnLetterCreate}
        ></SelectedLetter> 
        
      )}
      <button
        onClick={() => {
          handleOnLetterCreate(true);
        }}
      >
        ➕
      </button>
    </div>
  );
}

export default App;
