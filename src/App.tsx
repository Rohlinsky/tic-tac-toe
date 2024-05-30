import React, {useState} from 'react';
import './App.css';
import Board from './components/Board';
import {
  Player,
  UnknownPlayer
} from './types';

const App = () => {
  const [matrix, setMatrix] = useState<UnknownPlayer[]>(Array(9).fill(""));
  const [winComb, setWinComb] = useState("");
  const [winner, setWinner] = useState<UnknownPlayer>("");
  const [stalemate, setStalemate] = useState<boolean>(false);

  const setPlayerLastMove = (position: number, player: Player) => {
    if (!winner && !stalemate) {
      const newMatrix = matrix;
      newMatrix[position] = player;

      // Horizontal much combination
      if (newMatrix[0] === newMatrix[1] && newMatrix[1] === newMatrix[2]) {
        if (newMatrix[0]) {
          setWinner(player);
          setWinComb("012");
        }
      }

      if (newMatrix[3] === newMatrix[4] && newMatrix[4] === newMatrix[5]) {
        if (newMatrix[3]) {
          setWinner(player);
          setWinComb("345");
        }
      }

      if (newMatrix[6] === newMatrix[7] && newMatrix[7] === newMatrix[8]) {
        if (newMatrix[6]) {
          setWinner(player);
          setWinComb("678");
        }
      }


      // Vertical much combination
      if (newMatrix[0] === newMatrix[3] && newMatrix[3] === newMatrix[6]) {
        if (newMatrix[0]) {
          setWinner(player);
          setWinComb("036");
        }
      }

      if (newMatrix[1] === newMatrix[4] && newMatrix[4] === newMatrix[7]) {
        if (newMatrix[1]) {
          setWinner(player);
          setWinComb("147");
        }
      }

      if (newMatrix[2] === newMatrix[5] && newMatrix[5] === newMatrix[8]) {
        if (newMatrix[2]) {
          setWinner(player);
          setWinComb("258");
        }
      }


      // Diaganal much combination
      if (newMatrix[0] === newMatrix[4] && newMatrix[4] === newMatrix[8]) {
        if (newMatrix[0]) {
          setWinner(player);
          setWinComb("048");
        }
      }

      if (newMatrix[2] === newMatrix[4] && newMatrix[4] === newMatrix[6]) {
        if (newMatrix[2]) {
          setWinner(player);
          setWinComb("246");
        }
      }

      if (!newMatrix.filter((x) => x === "").length) {
        setStalemate(true);
      }

      setMatrix(newMatrix);
    }
  }

  return (
    <div className="App">
      <header className="">
        <h1>
          {
            winner
              ? "Winner is " + winner.toUpperCase()
              : stalemate
                  ? "It's stalemate, no winner"
                  : "Game in progress"
          }
        </h1>
      </header>
      <main>
        <Board
          matrix={matrix}
          setPlayerLastMove={setPlayerLastMove}
          highlighted={winComb}
        />
      </main>
    </div>
  );
}

export default App;
