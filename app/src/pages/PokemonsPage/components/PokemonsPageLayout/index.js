import { CircularProgress, Button } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

const PokemonsPageLayout = ({
  itemsList,
  isLoading,
  handleGoToDetails,
  handleLogout,
  isAuth,
  currentPage,
  handlePageChange,
  handleAddPokemon,
}) => {
  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {itemsList?.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <img src={item.image}></img>
              <p>{item.price} $</p>
              <button onClick={() => handleGoToDetails(item.id)}>
                Details
              </button>
              <button
                onClick={() => handleAddPokemon(item.id, item.name, item.price)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      )}
      <div>{isAuth && <Button onClick={handleLogout}>Logout</Button>}</div>
      <div>
        <Pagination
          count={30}
          color="secondary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PokemonsPageLayout;
