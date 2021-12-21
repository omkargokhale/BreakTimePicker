import "./styles.css";
import BreakTimePicker from "./BreakTimePicker";

export default function App() {
  return (
    <div className="App">
      <h1>Select Break Time</h1>
      <BreakTimePicker hour={"06"} min={"21"} />
    </div>
  );
}
