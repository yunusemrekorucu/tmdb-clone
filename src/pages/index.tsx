import type { NextPage } from "next";
import { WiderMovies, WiderTrailers } from "../components";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <WiderMovies background />
      <WiderTrailers />
      <WiderMovies />
      <WiderMovies />
    </div>
  );
};

export default Home;
