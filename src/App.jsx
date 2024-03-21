import "./App.css";
import MyButton from "./ActionButton/MyButton";
function App() {
  return (
    <>
      <MyButton
        icon={"Trash"}
        text={"Heart"}
        displayType={"iconWithText"}
        size={"Default"}
        type={'DefaultType'} 
        status={'DefaultStatus'}
      />
    </>
  );
}

export default App;
