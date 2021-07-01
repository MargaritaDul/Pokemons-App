const CartPageLayout = ({ itemsList, totalPrice }) => {
  return (
    <div>
      <div>TOTAL PRICE: {totalPrice}</div>
      {itemsList.map((item) => (
        <div key={item.id}>
          <p> {item.name} </p>
          <img src={item.image}></img>
          <p>{item.quantity}</p>
          <p>{item.price} $</p>
        </div>
      ))}
    </div>
  );
};

export default CartPageLayout;
