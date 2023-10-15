

import React,{useState} from "react"
export default function SearchFood() {



//react hook can have it render with true or false or the style conditional to toggle display none or blocks
  const useToggle=(intialState)=>{
    const[toggleValue, setToggleValue]= useState(intialState)
    const toggler =()=>{setToggleValue(!toggleValue)}
    return[toggleValue, toggler]
  }


  const[toggle,setToggle] = useToggle(true)

  const handleClick = () => {
    setToggle(!toggle);
  };


  const wrapper = document.querySelector(".search-food-container"),
  selectBtn = document.querySelector('.select-btn'),
  options = document.querySelector('.options')



  let countries = ['Aus','Cad','Usd','Bus','Amex']


  const[chosen,setChosen] = useState('Select Country')
  const[countryData,setCountryData] = useState(countries)
  function updateName(e) {
    console.log(e.target.innerText)
    setChosen(e.target.innerText)
    setToggle(false)

  }
  function addCountry() {
    return (

      
      countryData.map((country) => (
    <li onClick={updateName} name = {country}>{country}</li>
    ))
    
    )
    
  }

  function searchInput (e){
    let arr = []
    let searchedValue = e.target.value.toLowerCase()

    arr = countries.filter((data) =>{return data.toLowerCase().startsWith(searchedValue)}).map(data=>data)
    setCountryData(arr)

  console.log(arr)

}


  return(




    <div className="search-food-container">
      <div className="select-btn" onClick={handleClick}>
        <span className="" >{chosen}</span>
      </div>


    {toggle && (
 <div className="content">
 <div className="search">
   <input type="text" className="search-box" placeholder="search" onKeyUp={searchInput}></input>
 </div>
 <ul className="options">
    {addCountry()}
    {/* {searchInput} */}
 
 </ul>
</div>

    )}
     

    </div>
  )
}