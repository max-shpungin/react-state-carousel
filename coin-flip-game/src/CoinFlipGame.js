import Coin from "./Coin";
import { useState } from "react";
import img1 from './dimesheads_720.png'
import img2 from './dimestails_360.png'

const IMAGES = [img1, img2];

function CoinFlipGame(){

  const [gameState, setGameState] = useState({
    imgChoice: '',
    tailCounter: 0,
    headCounter: 0,
    totalCounter: 0,
  });

  function _handleCoinFlip(){
    const values = IMAGES;

    const choice = values[Math.floor(Math.random() * values.length)];

    if (choice === img1) {
      setGameState({
        imgChoice: choice,
        tailCounter: gameState.tailCounter++,
        headCounter: gameState.headCounter,
        totalCounter: gameState.totalCounter++
      })
    } else {
      setGameState({
        imgChoice: choice,
        headCounter: gameState.headCounter++,
        tailCounter: gameState.tailCounter,
        totalCounter: gameState.totalCounter++
      })
    }

    debugger;

  }

  return (
    <div className="CoinFlipGame">
      <Coin imgChoice={gameState.imgChoice} />

      <button className="CoinFlipGame-flipper" onClick={_handleCoinFlip}>
        FLIP ME!!!!
      </button>

      <div className="CoinFlipGame-summary">
        <p>Out of {gameState.totalCounter} flips, there have been
        {gameState.headCounter} heads and {gameState.tailCounter} tails.</p>
      </div>
    </div>
  )
}

export default CoinFlipGame;