import { CircularProgress, Button } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Alert from "@material-ui/lab/Alert";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import { ROUTES } from "../../../../routes/routeNames";
import { Link } from "react-router-dom";

const PokemonsPageLayout = ({
  itemsList,
  isLoading,
  handleGoToDetails,
  handleLogout,
  isAuth,
  currentPage,
  handlePageChange,
  handleAddPokemon,
  errors,
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
              <IconButton
                onClick={() => handleAddPokemon(item)}
                color="primary"
                aria-label="add to shopping cart"
              >
                <AddShoppingCartIcon />
              </IconButton>
            </div>
          ))}
        </div>
      )}
      <div>{isAuth && <Button onClick={handleLogout}>Logout</Button>}</div>
      <Link to={ROUTES.CART_PAGE}>
        <Button variant="contained">CART</Button>
      </Link>
      <div>
        <Pagination
          count={30}
          color="secondary"
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
      {!errors ? (
        <div></div>
      ) : (
        <div>
          <Alert severity="warning">The Pokemon already in the cart</Alert>
        </div>
      )}
    </div>
  );
};

export default PokemonsPageLayout;
