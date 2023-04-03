import React from "react";
import useFilteredRepos from "../hooks/useFilteredRepos.js";
import PortfolioBG from "./portfolioBG/PortfolioBG.jsx";

export default function PortfolioPortal() {
  const { projectsReady, langs, technologies } = useFilteredRepos();
  return (
    <section className="h-[100svh] w-full noMobile:snap-start flex flex-col justify-center items-center overflow-hidden">
      <a href="/portfolio" className="cursor-pointer flex flex-col max-w-sm justify-center items-center p-4 border rounded border-amber-500 bg-[#18181bc5] backdrop-blur z-10">
        <div class="flex h-0 -z-10">
          <div class="relative -top-8 left-[120%] h-[5rem] w-[5rem] bg-orange-400 blur-3xl opacity-40"></div>
          <div class="relative -left-4 h-[5rem] w-[5rem] -translate-x-[-5rem] bg-teal-600 blur-3xl opacity-40"></div>
        </div>
        <h2 className="text-3xl my-2">Look at my portfolio!</h2>
        <p className="text-xl text-center my-2">
          Click here for a full view of my projects and the technologies that i've used
        </p>
      </a>
      {projectsReady ? (
        <div className="h-0">
          <PortfolioBG langs={langs} techs={technologies} noFixed />
        </div>
      ) : undefined}
    </section>
  );
}
