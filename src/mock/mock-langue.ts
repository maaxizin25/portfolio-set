import htmlImg from "../assets/htmlimg.png";
import cssImg from "../assets/cssimg.png";
import jsImg from "../assets/jsimg.png";
import reactImg from "../assets/reactimg.png";
import tsImg from "../assets/tsimg.png";
import postgreImg from "../assets/postgreimg.png";
import pythonImg from "../assets/pythonimg.png";
import gitlangImg from "../assets/imgimglang.png";
import nodeImg from "../assets/nodejsimg.png";
import { portfolioItens } from "./portfolio-itens";

export interface iLanguagePortFolioItens {
  navbar: Array<string>;
  welcomeTitle: {
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
  aboutMeOne: {
    title: string;
    subscription: string;
    button: string;
  };
  aboutMeWork: {
    title: string;
    subscription: string;
    button: string;
  };
  buttonFollow: string;
  experience: {
    about: string;
    title: string;
    description: string;
    yearOfExperience: string;
    projectsCount: string;
    subscriptionProjects: string;
  };
  portfolioItensList: Array<{
    name: string;
    description: string;
    image: string;
    buttonView: string;
    buttonGit: string;
    buttonVideo: string;
  }>;
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
    aboutMeOne: {
      title: "ABOUT ME",
      subscription:
        "Dedicated technology enthusiast, passionate about innovation, and with extensive experience in the digital market landscape.",
      button: "LEARN MORE",
    },
    aboutMeWork: {
      title: "MY WORK",
      subscription:
        "Throughout my journey in the digital market, I've honed my programming skills and executed a variety of projects over time.",
      button: "VIEW PORTFOLIO",
    },
    buttonFollow: "FOLLOW-ME",
    experience: {
      about: "ABOUT ME",
      title: "CONNECTED SINCE 2009",
      description:
        "Technology has always been a part of my life since I was 9 years old. In 2020, I had the opportunity to deepen my knowledge in web development and its technologies while working at Kit Do Designer, where I was introduced to web development with HTML, CSS, and Wordpress, as well as frequently using Google ADS and Facebook ADS for product promotion.\n\nIn 2022, I decided to dive headfirst into the world of programming and dedicated all my time to studying the key technologies of the market.\n\nI started studying Analysis and Systems Development at FAM, along with the Full Stack Development course at Kenzie Academy Brazil, where I completed various projects that allowed me to gain a deeper understanding of the field. I'm always on the lookout for new challenges and opportunities to apply my knowledge in technology and programming.",
      yearOfExperience: "Years of Experience",
      projectsCount: "Projects Completed",
      subscriptionProjects: `Throughout my journey in the field of programming, I had the incredible opportunity to collaborate on various projects at Kenzie Academy Brazil. These projects encompassed both individual and team work and played a crucial role in my professional growth. The experiences in group projects were particularly enriching, providing me with the opportunity to enhance my teamwork skills and understand the dynamics of the job market. These experiences not only allowed me to apply the knowledge gained at Kenzie Academy but also helped me gain valuable insights into how projects are executed in the real world.
      I am excited to continue my journey of learning and development, seizing every opportunity to grow as a professional in the field of programming.`,
    },
    portfolioItensList: portfolioItens[1].english!,
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
    aboutMeOne: {
      title: "SOBRE MIM",
      subscription:
        "Entusiasta dedicado à tecnologia, apaixonado por inovação e com ampla experiência no cenário do mercado digital",
      button: "SABER MAIS",
    },
    aboutMeWork: {
      title: "MEU TRABALHO",
      subscription:
        "Durante minha trajetória no mercado digital, aprimorei minhas habilidades de programação e executei uma série de projetos ao longo do tempo.",
      button: "VISUALIZAR PORTFOLIO",
    },
    buttonFollow: "SIGA-ME",
    experience: {
      about: "SOBRE MIM",
      title: "CONECTADO DESDE 2009",
      description:
        "A tecnologia sempre fez parte da minha vida, desde os meus 9 anos de idade. Em 2020, tive a oportunidade de aprofundar meus conhecimentos em desenvolvimento web e suas tecnologias enquanto trabalhava na Kit Do Designer, onde fui introduzido ao desenvolvimento web com HTML, CSS e Wordpress, além de usar frequentemente Google ADS e Facebook ADS para divulgação do produto.\n\nEm 2022, decidi mergulhar de cabeça no mundo da programação e dediquei todo o meu tempo para estudar as principais tecnologias do mercado.\n\nComecei a cursar Análise e Desenvolvimento de Sistemas na FAM, juntamente com o curso de Desenvolvimento Full Stack na Kenzie Academy Brasil, onde realizei diversos projetos que me possibilitaram obter maior conhecimento na área. Estou sempre em busca de novos desafios e oportunidades para aplicar meus conhecimentos em tecnologia e programação.",
      yearOfExperience: "Ano de experiência",
      projectsCount: "Projetos Realizados",
      subscriptionProjects:
        " Durante minha jornada na área de programação, tive a incrível oportunidade de colaborar em diversos projetos na Kenzie Academy Brasil. Esses projetos abrangeram tanto trabalhos individuais quanto em equipe, e desempenharam um papel fundamental no meu crescimento profissional.\n\nAs experiências em projetos em grupo foram especialmente enriquecedoras, proporcionando-me a oportunidade de aprimorar minhas habilidades de trabalho em equipe e compreender a dinâmica do mercado de trabalho. Essas experiências não apenas me permitiram aplicar o conhecimento adquirido na Kenzie Academy, mas também me ajudaram a ganhar uma visão valiosa sobre como os projetos são executados no mundo real.\n\nEstou entusiasmado por continuar a minha jornada de aprendizado e desenvolvimento, aproveitando cada oportunidade para crescer como profissional na área de programação.",
    },
    portfolioItensList: portfolioItens[0].portuguese!,
  },
};
