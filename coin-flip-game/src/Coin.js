

function Coin({ imgChoice }){

  const style = {
    width: "200px",
    height: "200px",
  }

  return (
    <div className="Coin">
      <img src={imgChoice} />
    </div>
  )

}

export default Coin;