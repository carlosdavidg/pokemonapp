import React, { useEffect, useState } from 'react'

const Card = (props) => {

    const [pokemon, setPokemon] = useState();
    const [cardstate, setCardstate] = useState();
    const [type, setType] = useState();

    async function getImagen({pokemon}) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        const data = await res.json()

        const id = data.game_indices.slice(3,5)[0].game_index;
        const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
        setPokemon(data)
        setCardstate(imagen)
        setType(data.types[0].type.name)

    }

    useEffect(()=>{
      getImagen(props)
  })


  return (

      <div>
        <div className='pokemonContainer'>
          {pokemon && <img src={cardstate} className="Pokemonimagen" alt='imagenpokemon'></img>}
          <h3 className='type'> Type: {type} </h3>
        </div>
      </div>
        
  )
}

export default Card