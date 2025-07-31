import "./App.css";
import Accordion from "./components/accordion/Accordion";
import Pagination from "./components/pagination/Pagination";
import Progressbar from "./components/progressbar/Progressbar";
import Tab from "./components/tab/Tab";
import useNotification from "./hooks/use-notification";

function App() {
  const { NotificationComponent, triggerNotification } = useNotification();
  return (
    <>
      {/* <button
        onClick={() =>
          triggerNotification({
            message: "Your notification",
            duration: 3000,
            type: "success",
          })
        }
      >
        Notify
      </button>
      {NotificationComponent}
      <Pagination />
      <Accordion />
      <Tab /> */}
      <Progressbar maxValue={200} duration={5000} />
    </>
  );
}

export default App;
