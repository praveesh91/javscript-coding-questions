import "./App.css";
import withCounter from "./component-types/withCounter.jsx";
import Counter from "./component-types/Counter.jsx";
import Lifecycle from "./Lifecycle.jsx";
import UseEffectHook from "./UseEffectHook.jsx";
import UseRefHook from "./UseRefHook.jsx";

const EnhancedCOunter = withCounter(Counter);
function App() {
  return (
    <>
      {/* <EnhancedCOunter /> */}
      {/* <Lifecycle /> */}
      {/* <UseEffectHook /> */}
      <UseRefHook />
    </>
  );
}

export default App;
