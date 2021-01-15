import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Community() {
  return (
    <div>
      <Head>
        <title>Habby Project - Communauté</title>
      </Head>
      <header className="z-10 sticky top-0 bg-cyan-800 dark:bg-trueGray-900 text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://habbofont.net/font/habbo_new_big/habby.gif"
              alt=""
              className="h-12"
            />
          </a>
          <Nav />
          <form action="#" method="POST">
            <div className="flex flex-wrap justify-center">
              <input
                className="bg-white bg-opacity-0 border-2 py-1 px-3 focus:outline-none rounded text-base text-center md:text-left lg:text-left mt-4 mr-4 md:mt-0 placeholder-white placeholder-opacity-60"
                type="text"
                placeholder="Adresse e-mail ou pseudo"
              />
              <input
                className="bg-white bg-opacity-0 border-2 py-1 px-3 focus:outline-none rounded text-base text-center md:text-left lg:text-left mt-4 mr-4 md:mt-0 placeholder-white placeholder-opacity-60"
                type="password"
                placeholder="Mot de passe"
              />
              <button className="transition duration-300 ease-in-out transform inline-flex items-center border-2 py-1 px-3 focus:outline-none rounded text-base mt-4 mr-4 md:mt-0 hover:bg-white hover:text-cyan-800">
                Connexion
              </button>
            </div>
          </form>
        </div>
      </header>
      <main className="bg-gradient-to-t from-cyan-700 via-cyan-600 to-cyan-800 dark:from-trueGray-900 dark:via-trueGray-800 dark:to-trueGray-900">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 pt-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-white">
                Un endroit étrange avec
                <br className="inline-block" />
                des personnes incroyables
              </h1>
              <p className="mb-8 leading-relaxed text-white">
                Habby est un monde virtuel prévu pour les adolescents âgés d'au
                moins 13 ans. Les joueurs y incarnent un avatar, personnage
                virtuel qu'ils ont la possibilité de personnaliser. Ces derniers
                évoluent dans des appartements créés par les joueurs ou l'équipe
                du site et peuvent interagir avec les autres utilisateurs
                principalement par le biais d'un chat. L'inscription et
                l'utilisation du site est gratuite mais des contenus
                supplémentaires comme du mobilier ou des abonnements peuvent
                être obtenus après paiement. Le jeu est surveillé par des
                modérateurs.
              </p>
              <div className="flex justify-center">
                <button className="transition duration-300 ease-in-out transform inline-flex text-white border-2 py-2 px-6 focus:outline-none rounded text-lg hover:bg-white hover:text-cyan-800 mr-4">
                  S'inscrire maintenant
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                style={{ imageRendering: "pixelated" }}
                className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125"
                alt="hero"
                src="https://media.discordapp.net/attachments/693528969814999150/799021150763089971/Frank.gif"
              />
            </div>
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,160L30,170.7C60,181,120,203,180,192C240,181,300,139,360,138.7C420,139,480,181,540,197.3C600,213,660,203,720,202.7C780,203,840,213,900,197.3C960,181,1020,139,1080,144C1140,149,1200,203,1260,202.7C1320,203,1380,149,1410,122.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <section className="bg-white text-black body-font">
          <div className="container mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            deserunt? Aspernatur, itaque ex sunt possimus, libero atque omnis
            eum illo repellendus harum maxime! Fugiat similique ad repudiandae
            necessitatibus deserunt accusantium!
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
