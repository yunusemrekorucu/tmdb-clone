import type { NextPage } from "next";
import { Leaderbord, WiderMovies, WiderTrailers } from "@/components";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div className="pt-[64px]">
      <Banner />
      <WiderMovies background />
      <WiderTrailers />
      <WiderMovies />
      <WiderMovies />
      <Leaderbord />
    </div>
  );
};

export default Home;
