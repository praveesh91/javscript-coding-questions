import React, { useEffect, useState } from "react";

const MemoryGame = () => {
  const [gridsize, setGridsize] = useState(2);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState();
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);
  const [moves, setMoves] = useState(0);
  const [maxMoves, setMaxMoves] = useState(5);
  const [gameover, setGameover] = useState(false);

  const handleGridsizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) setGridsize(size);
  };

  const handleChangeMaxmoves = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 0) setMaxMoves(size);
  };

  const initialiseGame = () => {
    const totalCards = gridsize * gridsize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = Array.from({ length: pairCount }, (_, i) => i + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({
        id: index,
        number,
      }));
    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
    setWon(false);
    setGameover(false);
    setMoves(0);
  };

  useEffect(() => {
    initialiseGame();
  }, [gridsize, maxMoves]);

  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if (cards[firstId].number === cards[secondId].number) {
      setSolved([...solved, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (disabled || gameover) return;
    if (flipped.length === 0) {
      setFlipped([id]);
      setMoves(moves + 1);
      return;
    }
    if (flipped.length === 1) {
      setDisabled(true);
      if (flipped[0]?.id !== id) {
        setFlipped([...flipped, id]);
        setMoves(moves + 1);
        checkMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const isFlipped = (id) => flipped.includes(id) || solved?.includes(id);
  const isSolved = (id) => solved?.includes(id);

  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
      setGameover(true);
    } else if (maxMoves > 0 && moves >= maxMoves) {
      setGameover(true);
    }
  }, [solved, cards, moves, maxMoves]);

  const reset = () => initialiseGame();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Memory game</h1>

      <div className="mb-4 flex space-x-4">
        <div>
          <label htmlFor="gridSize" className="mb-2 mr-2">
            Grid size (max 10)
          </label>
          <input
            type="number"
            id="gridSize"
            min={2}
            max={10}
            value={gridsize}
            onChange={handleGridsizeChange}
            className="border-2 border-gray-300 rounded px-2 py-1 w-16"
          />
        </div>
        <div>
          <label htmlFor="maxMoves" className="mb-2 mr-2">
            Max moves (max 10)
          </label>
          <input
            type="number"
            id="maxMoves"
            min={0}
            value={maxMoves}
            onChange={handleChangeMaxmoves}
            className="border-2 border-gray-300 rounded px-2 py-1 w-16"
          />
        </div>
      </div>
      <p className="mb-4">Moves {`${moves}/${maxMoves}`}</p>
      <div
        className={`grid gap-2 mb-2`}
        style={{
          gridTemplateColumns: `repeat(${gridsize},minmax(0,1fr))`,
          width: `min (100%,${gridsize * 5.5}rem)`,
        }}
      >
        {cards?.map((el) => (
          <div
            className={`p-3 aspect-square flex items-center justify-center text-xl font-bold rounded-lg  cursor-pointer transition-all duration-300 ${
              isFlipped(el.id)
                ? isSolved(el.id)
                  ? `bg-green-500 text-white`
                  : `bg-blue-500 text-white`
                : ` bg-gray-300 text-gray-400`
            }${gameover ? `pointer-events-none` : ``}`}
            key={el.id}
            onClick={() => handleClick(el.id)}
          >
            {isFlipped(el.id) ? el.number : "?"}
          </div>
        ))}
      </div>
      <div>
        {gameover && (
          <p
            className={`mt-4 text-4xl animate-bounce ${
              won ? "text-green-600 " : `text-red-600`
            }`}
          >
            {won ? "You won" : "Reset"}
          </p>
        )}
      </div>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
      >
        {won ? "Play again" : "Reset"}
      </button>
      {/* Input */}
      {/* Gameboard */}
      {/* result */}
      {/* Reset */}
    </div>
  );
};

export default MemoryGame;
