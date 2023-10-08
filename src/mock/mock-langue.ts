import htmlImg from "../assets/htmlimg.png";
import cssImg from "../assets/cssimg.png";
import jsImg from "../assets/jsimg.png";
import reactImg from "../assets/reactimg.png";
import tsImg from "../assets/tsimg.png";
import postgreImg from "../assets/postgreimg.png";
import pythonImg from "../assets/pythonimg.png";
import gitlangImg from "../assets/imgimglang.png";
import nodeImg from "../assets/nodejsimg.png";

export interface iLanguagePortFolioItens {
  navbar: Array<string>;
  welcomeTitle: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
}
export interface langPortfolio {
  english: iLanguagePortFolioItens;
  portuguese: iLanguagePortFolioItens;
  languagesImg: {
    html: string;
    css: string;
    js: string;
    react: string;
    typescript: string;
    postgresql: string;
    python: string;
    git: string;
    nodejs: string;
  };
}

export const languagePortfolio: langPortfolio = {
  languagesImg: {
    html: htmlImg,
    css: cssImg,
    js: jsImg,
    react: reactImg,
    typescript: tsImg,
    postgresql: postgreImg,
    python: pythonImg,
    git: gitlangImg,
    nodejs: nodeImg,
  },
  english: {
    navbar: ["HOME", "GITHUB", "ABOUT ME", "PORTFOLIO", "CONTACT"],
    welcomeTitle: {
      title: "Hello, my name is Maximiliano!",
      subtitle: "I'm a Full-Stack developer",
      description:
        "Creating innovative solutions and projects is more than a job, it's a passion!",
      button: "SHOW PROJECTS",
    },
  },
  portuguese: {
    navbar: ["INÍCIO", "GITHUB", "SOBRE MIM", "PORTFÓLIO", "CONTATO"],
    welcomeTitle: {
      title: "Olá, me chamo Maximiliano!",
      subtitle: "Sou desenvolvedor Full-Stack",
      description:
        "Criar soluções e projetos inovadores é mais do que um trabalho, é uma paixão!",
      button: "EXIBIR PROJETOS",
    },
  },
};
