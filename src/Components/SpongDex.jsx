import React from 'react';
import SpongChar from './SpongChar';
import './SpongDex.css'
import './SpongChar.css'
function SpongDex({SpongBobCharacters,setSpongBobCharacters}) {


    return (
        <div className='grid-container'>
           {SpongBobCharacters.map((character, index) => (
        <SpongChar  key={index}
         index={character.index} 
         name={character.name} 
         image={character.image} 
         info={character.info} 
         setSpongBobCharacters={setSpongBobCharacters}
          SpongBobCharacters={SpongBobCharacters}/>
        ))}
        </div>
    );
}

export default SpongDex;