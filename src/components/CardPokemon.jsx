import React from 'react'

 const CardPokemon = () => {
    const style ={
        width: '12rem',
        margin : '10px',
        height : '15rem',
    }

  return (
<div className="card" style={style} >
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Bulbasaur</h5>
    <p className="card-text">Descripcion del pokemon</p>
    <a href="google.com" className="btn btn-primary justify-content-center m-4">Abrir</a>
  </div>
</div>
  )
}
export default CardPokemon;