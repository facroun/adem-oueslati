import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div id="home" className="bg-yellow-500 w-full h-[50px] flex flex-row items-center px-16 justify-between sticky top-0">
        <div className="flex flex-row gap-4">
          <Image alt="a" width={30} height={20} src="/lettre-a.png" />
          <h2 className="capitalize font-bold underline text-2xl text-black">
            adem ouslati
          </h2>
        </div>
        <div className="flex flex-row gap-5 capitalize">
          <Link href="#société" className=" text-white cursor-pointer hover:underline  hover:text-black">presentation du société</Link>
          <Link  href="#competence" className=" text-white cursor-pointer hover:underline  hover:text-black">les compétence acquises</Link>
          <Link  href="#conclusion" className="text-white cursor-pointer hover:underline  hover:text-black">conclusion</Link>
        </div>
      </div>
      <div className="bg-black w-full flex flex-row items-center px-16 h-screen ">
        <div className="flex flex-col h-full w-1/2 gap-10 justify-center items-center text-center">
          <h3 className="text-3xl text-white capitalize font-bold">
            apprentissage du développement web: création d'un site internet
          </h3>
          <p className=" text-white">
            Durant mon stage, je vais me focaliser sur l'apprentissage des
            fondamentaux du développement web en créant un site internet. En
            parallèle, je travaillerai sur des projets pratiques, en utilisant
            des outils tels que Bootstrap et jQuery pour rendre le site
            interactif et attrayant. Avec le soutien de mes mentors, je
            développerai mes compétences pour créer des sites web professionnels
            et fonctionnels, en utilisant les technologies les plus adaptées à
            mes besoins.
          </p>
        </div>
        <div className="flex flex-col h-full w-1/2 items-center justify-center">
          <Image
            alt="b"
            width={500}
            height={500}
            src="/hero.jpg"
            className="rounded-2xl shadow-xl shadow-yellow-500"
          />
        </div>
      </div>
      <div id="société" className=" w-full bg-black flex flex-col px-16 h-screen items-center gap-4 border-t-2 border-white justify-center">
        <h2 className="text-white capitalize font-bold underline text-3xl ">
          digitale rogue wave
        </h2>
        <p className=" text-center w-1/2 text-white">
          des technologies de l'information et des services numériques.
          Spécialisée dans le développement sur mesure, la transformation
          digitale et la consultation en IT.
        </p>
        <div className="flex flex-row w-full px-16 justify-between ">
          <Card
            kes="/haro.jpg"
            kes2="Leader des IT en Tunisie  Rogue Wave"
            kes3="Basée en Tunisie, Rogue Wave Digital est une entreprise leader dans le domaine des technologies de l'information et des services numériques."
          />
          <Card
            kes="/hiro.jpg"
            kes2="Solutions Sur Mesure de Rogue Wave Digita"
            kes3="Spécialisée dans le développement sur mesure, la transformation digitale et la consultation en TI, elle offre des solutions innovantes adaptées aux besoins spécifiques de ses clients."
          />
          <Card
            kes="/hyro.jpg"
            kes2="Innovation et Collaboration chez Rogue Wave Digital"
            kes3="Guidée par l'innovation et l'excellence, l'équipe de Rogue Wave Digital travaille en étroite collaboration avec ses clients pour résoudre efficacement leurs défis numériques."
          />
        </div>
      </div>
      <div id="competence" className="bg-black w-full h-[300px] flex flex-col items-center border-t-2 border-white min-h-screen justify-center gap-16">
        <h3 className="text-white capitalize font-bold underline text-3xl items-center justify-center flex">
          "Stage : Web, équipe, professionnalisme"
        </h3>
        <div className="w-full px-52items-center gap-5 justify-center flex flex-row">
          <div className="flex flex-col h-full w-1/2 items-center justify-center">
            <Image
              unoptimized
              alt="c"
              width={450}
              height={450}
              src="/tmwk.jpg"
              className="rounded-xl shadow-xl shadow-amber-500"
            />
          </div>
          <div className="flex flex-col h-full w-1/2 items-center justify-center">
            <p className=" text-white text-center items-center text-lg max-w-[600px] flex justify">
              Pendant mon stage, j'ai acquis un ensemble de compétences diversifiées qui ont enrichi
              mon profil professionnel. Tout d'abord, j'ai appris à créer un site web simple en
              utilisant les langages HTML et CSS, ce qui m'a permis de comprendre les bases du
              développement web et de développer mes compétences en programmation. En travaillant
              en équipe, j'ai eu l'opportunité de collaborer avec mes collègues sur différents projets,
              ce qui m'a permis d'améliorer ma capacité à communiquer efficacement, à résoudre des problèmes
              de manière collaborative et à m'adapter à diverses dynamiques de groupe. De plus, mon
              immersion dans le milieu professionnel m'a offert une vision concrète du fonctionnement
              d'une entreprise, m'a permis de découvrir les différentes fonctions au sein d'une organisation
              et m'a donné un aperçu précieux des attentes et des normes de l'industrie. Ces 
              compétences acquises seront sans aucun doute des atouts précieux pour mes futures opportunités professionnelles.
            </p>
          </div>
        </div>
      </div>
      <div id="conclusion" className="bg-black w-full h-full flex flex-col items-center border-t-2 border-white min-h-screen justify-center gap-16">
          <h3 className="text-white capitalize font-bold underline text-3xl items-center justify-center flex">
            "Conclusion du stage"
          </h3>
          <div className="flex-row-reverse flex">
            <div className="items-center  w-1/2 flex justify-center bg-black-400"> 
              <p className=" text-white text-center max-w-[800px]">
               "En conclusion, mon stage a été une expérience enrichissante qui m'a permis d'acquérir
               des compétences essentielles dans le domaine du développement web, de renforcer ma capacité
               à travailler en équipe et de me familiariser avec le monde professionnel. Je suis 
               reconnaissant pour cette opportunité qui a contribué à mon développement personnel
               et professionnel, et je suis désormais prêt à mettre en pratique ces compétences 
               dans mes futures entreprises."
              </p>
            </div>
            <div className="flex flex-row h-full w-1/2 items-center justify-center bg-black-800">
              <Image
              unoptimized
              alt="c"
              width={500}
              height={500}
              src="/sucses.jpg"
              className="rounded-xl shadow-xl shadow-amber-500"/>
            </div>
          </div>
      </div>
      <div className="bg-yellow-500 w-full h-[50px] capitalize flex flex-row px-16 items-center justify-between sticky top-0">
           <div className="flex flex-row gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
               <span> tel: 52 365 931
               </span>
           </div>
           <div className="flex flex-row gap-2 items-center">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
             <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
             </svg>
             <span className="flex flex-row gap-2 items-center">Gmail:ao8532043@gmail.com
             </span>  
           </div>
          </div>
           <Link href="#home" className="size-20 fixed bottom-16 flex items-center justify-center right-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500 cursor-pointer hover:text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
          </Link>
    </main>
  );
}
