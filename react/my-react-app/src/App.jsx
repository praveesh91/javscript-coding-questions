import "./App.css";
import Accordion from "./components/accordion/Accordion";
import Carousel from "./components/carousel/Carousel";
import MemoryGame from "./components/memory-game/MemoryGame";
import Pagination from "./components/pagination/Pagination";
import Progressbar from "./components/progressbar/Progressbar";
import StarRating from "./components/start-rating/StarRating";
import Tab from "./components/tab/Tab";
import TicTacToe from "./components/tictactoe/TicTacToe";
import Virtualisation from "./components/virtualisation/Virtualisation";
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
      {/* <Progressbar maxValue={200} duration={5000} /> */}
      {/* <Virtualisation /> */}
      {/* <Carousel /> */}
      {/* <MemoryGame /> */}
      {/* <TicTacToe /> */}
      <StarRating />
    </>
  );
}

export default App;
