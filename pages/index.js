import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Habby Project - Se connecter</title>
      </Head>
      <header className="z-10 sticky top-0 bg-cyan-800 dark:bg-trueGray-900 text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
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
              <Image style={{ imageRendering: "pixelated" }} className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-125" alt="hero" src="https://media.discordapp.net/attachments/693528969814999150/799021150763089971/Frank.gif" />
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
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Un tout nouvel hôtel hors norme
              </h1>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-cyan-800 dark:bg-trueGray-900 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-cyan-800 dark:text-trueGray-900 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-cyan-800 dark:text-trueGray-900 text-lg title-font font-medium mb-3">
                    Nouveau client
                  </h2>
                  <p className="leading-relaxed text-base">
                    Un tout nouveau client à la pointe de la technologie, plus
                    rapide, plus performant, nouvelle interface.. et bien plus
                    encore !
                  </p>
                  <a className="mt-3 text-cyan-800 dark:text-trueGray-900 inline-flex items-center">
                    En savoir plus
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-cyan-800 dark:text-trueGray-900 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-cyan-800 dark:text-trueGray-900 text-lg title-font font-medium mb-3">
                    Sécurité plus accrue
                  </h2>
                  <p className="leading-relaxed text-base">
                    La sécurité de nos joueurs est notre priorité,
                    authentification à deux facteurs, codes de récupérations,
                    détections de connexions inhabituelles..
                  </p>
                  <a className="mt-3 text-cyan-800 dark:text-trueGray-900 inline-flex items-center">
                    En savoir plus
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-cyan-800 dark:text-trueGray-900 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-cyan-800 dark:text-trueGray-900 text-lg title-font font-medium mb-3">
                    Le retour des minis-jeux
                  </h2>
                  <p className="leading-relaxed text-base">
                    Les minis-jeux font leur retour, un tas de minis-jeux ont
                    été implementé comme le Uno, jeux de cartes, billard, golf..
                  </p>
                  <a className="mt-3 text-cyan-800 dark:text-trueGray-900 inline-flex items-center">
                    En savoir plus
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
