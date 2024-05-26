import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_image_hosting_api;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(15, data);
    //image upload to imagebb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      //now send the menu item data to the server with image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      //
      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: `Successfully added ${data.name} to your menu!`,
        });
      }
      console.log(menuRes.data);
    }

    console.log(res.data);
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center uppercase">add items</h2>
      <div className=" bg-slate-200">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="font-semibold label-text ">Recipe name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <label className="label">
                <span className="font-semibold label-text">Category</span>
              </label>
              <select
                defaultValue={"default"}
                {...register("category")}
                className="w-full select select-bordered"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
              </select>
            </div>
            <div className="flex-1">
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold label-text">Price</span>
                </label>
                <input
                  {...register("price", { required: true })}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
          <div>
            <label className="label">
              <span className="font-semibold label-text ">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
              className="w-full textarea textarea-bordered textarea-lg"
            ></textarea>
          </div>
          <div>
            <input
              {...register("image")}
              type="file"
              className="w-full file-input"
            />
          </div>

          <div className="mt-6 form-control">
            <button className="btn btn-outline">ADD Items</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
