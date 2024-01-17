

function Coin({ coinState }){
  let imgSrc;

  if(coinState === 'H' ) imgSrc='harharhar;'
  else imgSrc='blah'

  const style = {
    width: "200px",
    height: "200px",
  }

  return (
    <div className="Coin">
      <img src={imgSrc} />
    </div>
  )

}

export default Coin;