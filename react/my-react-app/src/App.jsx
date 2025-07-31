import "./App.css";
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
    </>
  );
}

export default App;
