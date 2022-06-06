import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5">
            A Propos
          </p>
          <h2 className="py-4 text-gray-600">Qui suis-je ?</h2>
          <p className="py-4 text-gray-600">
            {`Diplômé de CPE Lyon en 2017 en tant qu'Ingénieur Chimie - génie des
            procédés, j'ai travaillé dans des bureaux d'étude dans le
            dimensionnement et l'achat d'installation de production chimique.
            J'ai cependant toujours eu un intérêt pour l'informatique et le fait
            de créer quelque chose de zéro grace au code.`}
          </p>
          <p className="py-4 text-gray-600">
            {`J'ai alors pris la décision de faire une reconversion professionnelle afin de devenir développeur web. C'est pourquoi j'ai intégré la Wild Code School, qui m'a permis, grâce à une formation intensive de 5 mois, d'atteindre cet objectif. Je suis fasciné par les posibilités infinies de design et de développement qu'offre cette discipline qui me pousse à toujours en apprendre d'avantage. `}{" "}
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Venez voir mes derniers projets
          </p>
        </div>
        <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/images/profile-img.jpg"
            alt="profile picture"
            width="300"
            height="450"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
