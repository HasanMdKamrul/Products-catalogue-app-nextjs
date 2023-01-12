import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../../components/core/Button";
import Heading from "../../components/core/Heading";

const ProductUpdate = ({ product }) => {
  const { name, description, price, picture, active } = product;
  const router = useRouter();

  const [activeState, setActiveState] = useState(active);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const picture = form.picture.value;

    const updatedProductObject = {
      name,
      description,
      price,
      picture,
      active: activeState,
    };

    try {
      const response = await fetch(
        `http://localhost:8000/api/products/${product?.id}/update/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProductObject),
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
      <Heading>
        Update your product{" "}
        <span className="text-blue-400">{product.name}</span>
      </Heading>
      <section className="flex justify-center items-center ">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="name"
              defaultValue={name}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs my-1"
            />
          </div>
          <div>
            <input
              name="description"
              defaultValue={description}
              type="text"
              placeholder="Description..."
              className="input input-bordered w-full max-w-xs my-1 input-lg"
            />
          </div>
          <div>
            <input
              name="price"
              defaultValue={price}
              type="text"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs my-1"
            />
          </div>
          <div>
            <input
              name="picture"
              defaultValue={picture}
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
            <Button>Update</Button>
          </div>
        </form>
      </section>
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${context?.params?.id}`
    );
    const product = await response.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
};

export default ProductUpdate;
