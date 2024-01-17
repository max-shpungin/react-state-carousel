import Coin from "./Coin";

import img1 from './dimesheads_720.png'
import img2 from './dimestails_360.png'

const IMAGES = [img1, img2];

function CoinFlipGame(){

  const [gameState, setGameState] = userState({
    coinState: '',
    tailCounter: 0,
    headCounter: 0,
    totalCounter: tailCounter + headCounter
  });

  function _handleCoinFlip(){
    const values = IMAGES;

    setCoinState(
      values[Math.floor(Math.random() * values.length)]
    );
  }

  return (
    <div className="CoinFlipGame">
      <Coin coinState={coinState} />

      <button className="CoinFlipGame-flipper" onClick={_handleCoinFlip}>
        FLIP ME!!!!
      </button>

      <div className="CoinFlipGame-summary">

      </div>
    </div>
  )
}

export default CoinFlipGame;