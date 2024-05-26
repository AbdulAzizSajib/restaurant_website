const PopularMenu = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px " }}
        className="w-3/12"
        src={image}
        alt={image}
      />
      <div>
        <div>
          <h3 className="font-bold uppercase">{name} </h3>
          <p>{recipe}</p>
        </div>

        <p className="text-lg font-bold text-yellow-500">${price}</p>
      </div>
    </div>
  );
};

export default PopularMenu;
