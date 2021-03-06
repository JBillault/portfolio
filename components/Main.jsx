import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">{`Let's build something together`}</p>
          <h1 className="py-4 text-gray-700">
            Bienvenue, je suis{" "}
            <span className="text-[#5651e5]">Jonathan Billault</span>
          </h1>
          <h1 className="py-4 text-gray-700">Un developpeur Web Fullstack</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {`Je suis un développeur web Fullstack spécialisé en Javascript.
            Ingénieur procédés de formation, j'ai réalisé une reconversion
            professionnelle dans le développement web en intégrant la Wild Code
            School de Lyon.`}{" "}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
