import "./gloabal.scss";
import FirstSession from "./sessions/FirstSection";
import SecondSession from "./sessions/SecondSection";
import ThirdSession from "./sessions/ThirdSection";
function App() {
  return (
    <div className="App">
      <FirstSession />
      <SecondSession />
      <ThirdSession />
    </div>
  );
}

export default App;
