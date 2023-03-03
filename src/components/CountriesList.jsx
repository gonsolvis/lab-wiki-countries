// import { useState } from "react";
import { Link, Navigate } from 'react-router-dom';




function CountriesList({countries}) {
    return (
       <div height={50} width={50} className="rounded d-flex flex-column  align-items-center m-4">
  
  
        {countries.map(country => {
            return (
                <div className="rounded d-flex flex-column align-items-center w-50 m-3" style={{ backgroundColor: 'rgb(240, 234, 214)' }}>
                <div key={country.name.common} >
                    <h3 className="mt-5">{country.name.common}</h3>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common}/>
                    <p><Link to={"/countries/"+country.alpha3Code}>{country.alpha3Code}</Link></p>
                    <br/>
                    <br/>
                    <br/>
                </div>
                </div> 
            );
        })}
        </div>

);
}
export default CountriesList;