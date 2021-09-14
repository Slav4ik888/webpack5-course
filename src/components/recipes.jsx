import { useState } from 'react';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);


function Recipes() {
  const [recipe, setRecipe] = useState({})
  return (
    <div>
      <h3>Current Recipe</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven</button>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven</button>

      <ul>
        {
          Object.keys(recipe).map(material => <li key={material}>
            {material}: {recipe[material]}
          </li>)
        }
      </ul>
    </div>
  )
}

export default Recipes
