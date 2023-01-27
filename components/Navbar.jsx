const Navbar = ({setValorBuscadorState}) => {


  const Onchange = (e) => {
    setValorBuscadorState(e.target.value)

  }


  return (
    <div>
        <div className='logo'>
            <a href='/'><img alt='logo' src='https://cdn-icons-png.flaticon.com/512/287/287221.png?w=826&t=st=1674181551~exp=1674182151~hmac=9b627d8bcd1a28d39334260d8893c1b30fa4d3f8f710076d6a1c138208dece60'></img></a>
            <input type="text" placeholder='search pokemon by name' name='buscador' id='buscador' onChange={Onchange}></input>
        </div>
        
    </div>
  )
}

export default Navbar