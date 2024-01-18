import React from 'react';
import { Context, SnakeGame as ReactSnakeGame } from "react-game-snake";

const SnakeGame = () => {
  return (
    React.createElement('div', { className: 'h-96 md:flex justify-around items-center w-full md:px-20 px-5 py-10 md:my-10' },
      React.createElement(ReactSnakeGame, {
        colors: {
          field: "#bdc3c7",
          food: "#9b59b6",
          snake: "#3498db",
        },
        countOfHorizontalFields: 20,
        countOfVerticalFields: 20,
        fieldSize: 20,
        loopTime: 200,
        pauseAllowed: true,
        restartAllowed: true,
        onLoose: (context) => alert(`You loosed with ${context.game.points} points.`),
        onPause: (context) => alert("paused"),
        onRestart: (context) => alert("restarted"),
        onResume: (context) => alert("onResume"),
        onWin: (context) => alert(`You won with ${context.game.points} points.`),
      })
    )
  );
};

export default SnakeGame;
