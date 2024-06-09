const ChefMenu = ({ item }) => {
  const { name, image, recipe } = item;
  return (
    <div className="">
      <div className=" w-96 card glass">
        <figure>
          <img
            className="object-cover w-[500px] h-[300px] p-3 rounded-3xl"
            src={image}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-justify">{recipe}</p>
          <div className="justify-center card-actions">
            <button className="text-yellow-600 border-0 border-b-4 border-yellow-600 btn btn-neutral">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefMenu;
