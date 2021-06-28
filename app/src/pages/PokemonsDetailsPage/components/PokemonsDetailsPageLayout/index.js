import { v4 as uuidv4 } from "uuid";

const PokemonsDetailsPageLayout = ({ pokemonInfo }) => {
  console.log(pokemonInfo.abilities);
  return (
    <div>
      <p> {pokemonInfo.name} </p>
      <img src={pokemonInfo.image}></img>
      <div>
        {pokemonInfo?.abilities?.map((ability) => (
          <div key={uuidv4()}>
            <p>
              {ability.title} --- {ability.description}
            </p>
          </div>
        ))}
      </div>
      <div>
        {pokemonInfo?.stats?.map((stat) => (
          <div key={uuidv4()}>
            <p>
              {stat.title} = {stat.value}
            </p>
          </div>
        ))}
      </div>
      <p> {pokemonInfo.price} $ </p>
    </div>
  );
};

export default PokemonsDetailsPageLayout;
