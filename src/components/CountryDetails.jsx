
import { useParams } from 'react-router-dom';

function CountryDetails({countries}) {
 
    
    const { countryId } = useParams(); 

    console.log("countries ", countries);
    console.log("countryId ", countryId);

    const currentCountry = countries.find(country => country.alpha3Code === countryId)

    return(
        <div>
              <h1>{currentCountry.name.common}</h1>
            <h3>Capital: {currentCountry.capital}</h3>
            <p>area: {currentCountry.area}</p>
            {currentCountry.borders.map(border => <h3>{border}</h3>)}
        </div>  
    );
}
export default CountryDetails;