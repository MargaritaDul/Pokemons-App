import { CircularProgress } from "@material-ui/core";

const PokemonsPageLayout = ({ itemsList, isLoading, handleGoToDetails }) => {
  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {itemsList.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price} $</p>
              <img src="`${item.image}`"></img>
              <button onClick={() => handleGoToDetails(item.id)}>
                Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonsPageLayout;
