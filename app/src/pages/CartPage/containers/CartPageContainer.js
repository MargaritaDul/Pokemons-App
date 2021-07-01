import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CartPageLayout from "../components/CartPageLayout";
import { CART_REQUEST } from "../actions";

const PokemonsDetailsPageContainer = () => {
  const dispatch = useDispatch();

  const { itemsList, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(CART_REQUEST());
  }, []);

  return <CartPageLayout itemsList={itemsList} totalPrice={totalPrice} />;
};

export default PokemonsDetailsPageContainer;
