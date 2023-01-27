import React, { useState, useEffect } from 'react'
import Card from './Card';

const MiApi = ({ valorBuscadorState }) => {


  const [estadoApi, setEstadoApi] = useState([]);




  async function getDatosApi() {



    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=48&offset=0')
    const data = await res.json()

    setEstadoApi(data.results)

  }

  useEffect(() => {
    getDatosApi()
    
  }, [estadoApi])


  estadoApi.sort((a,b)=> {

    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0

    
  })




  return (
    <div>
      <div className="container">
        <div className='card-container'>
          {estadoApi.filter((item) => { return item.name.toLowerCase().includes(valorBuscadorState.toLowerCase())}).map((item) => {
            return <div key={item.name} className='card'>
              {item.name} 
              <Card pokemon={item.name}>
              </Card>

            </div>
          })}
        </div>
      </div>
    </div>
  )
}



export default MiApi
