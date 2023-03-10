import { Inter } from "@next/font/google";
import Head from "next/head";
import HomeSlider from "../components/core/HomeSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Saso | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeSlider products={products} />
    </>
  );
}

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
