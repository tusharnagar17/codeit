import Image from "next/image";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { projectDetails } from "@/constants/projectDetail";
import { projectDetailsProps } from "@/types/interface";
import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-2 py-10">
        <div className="text-5xl font-bold my-10">Explore Some projects: </div>
        <div className="md:flex md:gap-20">
          {projectDetails.map((item: projectDetailsProps, ind: number) => (
            <ProjectSection detail={item} key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectSection = ({ detail }: { detail: projectDetailsProps }) => {
  console.log("details", detail);
  return (
    <div
      className="max-w-2xl my-2 rounded-3xl p-2
    border-4 border-sky-500"
    >
      <div>
        <Image
          src="/project/codeit/1.png"
          alt="coding-images"
          width={800}
          height={1000}
          content="contain"
          className="rounded-2xl"
        />
      </div>
      {/* details section */}
      <div className="mt-4">
        <div className="text-center text-2xl font-semibold">{detail.name}</div>
        <div className="text-center mt-4">{detail.description}</div>
        <div className="flex gap-4 items-center mt-4 px-2 font-semibold">
          Tech Stack:
          <div className="flex gap-2 flex-wrap text-wrap">
            {detail.techStack.map((item: string) => (
              <div className="rounded-full px-2 py-1 bg-sky-200 dark:bg-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center item-center">
          <div className="bg-red-400 flex items-center px-5 text-lg font-bold gap-2 py-1 rounded-full mt-4 justify-center">
            <a href="">Live</a>
            <FaLocationArrow size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
