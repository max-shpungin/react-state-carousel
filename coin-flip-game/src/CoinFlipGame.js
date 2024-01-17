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

  console.log('CoinFlipGame render');
  console.log('gameState', gameState);


  function _handleCoinFlip(){
    const values = IMAGES;

    const choice = values[Math.floor(Math.random() * values.length)];

    if (choice === img1) {
      console.log(gameState.tailCounter, gameState.headCounter, gameState.totalCounter);
      setGameState({
        imgChoice: choice,
        tailCounter: gameState.tailCounter, // +1 do this
        headCounter: gameState.headCounter+1, // ++ <- mutating state, don't do this
        totalCounter: gameState.totalCounter+1 // ++i more useful than i++
      })
      console.log(gameState.tailCounter, gameState.headCounter, gameState.totalCounter);
    } else {
      setGameState({
        imgChoice: choice,
        headCounter: gameState.headCounter,
        tailCounter: gameState.tailCounter+1,
        totalCounter: gameState.totalCounter+1
      })
    }

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