import { useState, useEffect } from "react";

import "./Grid.css";

const initialGrid = [
	'', '', '',
	'', '', '',
	'', '', ''
]

const Grid = (gameCount: any) => {
  const [grid, setGrid] = useState(initialGrid);
  const [player, setPlayer] = useState(1);
	const [winner, setWinner] = useState(false);

	useEffect(() => {
		setGrid(initialGrid);
		setPlayer(1);
	},[gameCount]);

	useEffect(() => {
		setWinner(checkForWinner());
	},[grid]);

  const handlePlayerClick = (incomingIndex: number) => {
		const newGrid = grid.map((item, index) => {
      if(item === '') {
				if (incomingIndex === index && player === 1) item = "O";
				if (incomingIndex === index && player === 2) item = "X";
				if (incomingIndex === index) setPlayer(player === 1 ? 2 : 1);
			}
      return item;
    });
    setGrid(newGrid);
  };

	const checkForWinner = () => {
		// Rows
		if(new Set([grid[0],grid[1],grid[2]]).size === 1 && grid[0] !== '') return true;
		if(new Set([grid[3],grid[4],grid[5]]).size === 1 && grid[3] !== '') return true;
		if(new Set([grid[6],grid[7],grid[8]]).size === 1 && grid[6] !== '') return true;
		// Columns
		if(new Set([grid[0],grid[3],grid[6]]).size === 1 && grid[0] !== '') return true;
		if(new Set([grid[1],grid[4],grid[7]]).size === 1 && grid[1] !== '') return true;
		if(new Set([grid[2],grid[5],grid[8]]).size === 1 && grid[2] !== '') return true;
		// Diagonals
		if(new Set([grid[0],grid[4],grid[8]]).size === 1 && grid[0] !== '') return true;
		if(new Set([grid[2],grid[4],grid[6]]).size === 1 && grid[2] !== '') return true;
		return false;
	}

  return (
    <div className="Grid">
      {winner && 
				<div className="winnerAnnouncement">
					Player {player === 1 ? 2 : 1} won!
				</div>}
			{!winner && grid.map((square, index) => (
        <div 
					key={index}
					className="square" 
					onClick={() => handlePlayerClick(index)}>
          {square}
        </div>
      ))}
    </div>
  );
};

export default Grid;
