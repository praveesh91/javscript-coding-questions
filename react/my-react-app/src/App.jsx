import "./App.css";
import Pagination from "./components/pagination/Pagination";
import useNotification from "./hooks/use-notification";

function App() {
  const { NotificationComponent, triggerNotification } = useNotification();
  return (
    <>
      <button
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
    </>
  );
}

export default App;
