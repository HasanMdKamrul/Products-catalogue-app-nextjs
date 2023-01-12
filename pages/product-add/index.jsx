import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/core/Button";
import Heading from "../../components/core/Heading";

const index = () => {
  const [activeState, setActiveState] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const picture = form.picture.value;

    const newProductObject = {
      name,
      description,
      price,
      picture,
      active: activeState,
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/products/add/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProductObject),
        }
      );

      const data = await response.json();

      if (response.ok) {
        router.push("/all-products");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Heading>Add Your Product</Heading>
      <section className="flex justify-center items-center ">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs my-1"
            />
          </div>
          <div>
            <input
              name="description"
              type="text"
              placeholder="Description..."
              className="input input-bordered w-full max-w-xs my-1 input-lg"
            />
          </div>
          <div>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs my-1"
            />
          </div>
          <div>
            <input
              name="picture"
              type="text"
              placeholder="Picture Url..."
              className="input input-bordered input-lg w-full max-w-xs my-1"
            />
          </div>
          <div className="flex justify-center">
            <p>
              <span className="text-blue-600 text-lg mr-2">Active</span>
            </p>
            <input
              onChange={() => setActiveState(!activeState)}
              name="active"
              type="checkbox"
              className="toggle"
              checked={activeState}
            />
          </div>
          <div>
            <Button>Add Product</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default index;
