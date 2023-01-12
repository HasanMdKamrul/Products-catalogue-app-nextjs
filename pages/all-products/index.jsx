import AllProducts from "../../components/app/AllProducts";

const index = ({ products }) => {
  return <AllProducts products={products} />;
};

export default index;

export const getStaticProps = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/`
    );
    const data = await response.json();

    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.log(error.message);
  }
};
