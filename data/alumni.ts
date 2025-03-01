export interface AlumniGroup {
  projectTitle: string;
  graduationYear: number;
  members: {
    name: string;
    quote?: string;
    image: string;
  }[];
}

export const alumniGroups: AlumniGroup[] = [
  {
    projectTitle:
      "Exploring Machine Learning Indicators for Equity Trading Bots",
    // co-advisor: "Tipajin Thaipisutikul",
    graduationYear: 2023,
    members: [
      {
        name: "Chanatip Deemee",
        quote:
          "Graduated in Data Science. Still can’t find the correlation between my degree and my job",
        image: "/assets/alumni/Chanatip.jpg",
      },
      {
        name: "Sorawanan Jeamjantarasakhon",
        quote: "If idiot can fly, this place would be an airport",
        image: "/assets/alumni/Sorawanan.jpg",
      },
      {
        name: "Kittipat Arpanon",
        quote:
          "Graduated: Got a degree, still can't figure out how to pay taxes",
        image: "/assets/alumni/Kittipat.jpg",
      },
    ],
  },
  {
    projectTitle:
      "eDuck: Adapting LLMs as an Educational Tool for Learning to Code.",
    graduationYear: 2023,
    members: [
      {
        name: "Nubthong Worathong ",
        quote:
          "Graduated with a degree in Data Science, but still unsure how to parse life",
        image: "/assets/alumni/Nubthong.jpg",
      },
      {
        name: "Doungnapat Thiansukont",
        quote:
          "Got my software degree. Still wondering why life keeps throwing 404s",
        image: "/assets/alumni/Doungnapat.jpg",
      },
      {
        name: "Sarayut Theeraumpronpunt ",
        quote:
          "Graduated with a degree in coding. Still waiting for life to compile without errors",
        image: "/assets/alumni/Sarayut.jpg",
      },
    ],
  },
  {
    projectTitle:
      "Olive: Online Learning Platform with Interaction and Visual Engagement Analysis",
    graduationYear: 2022,
    members: [
      {
        name: "Anyamanee Amatyakul",  
        image: "/assets/placeholder.png",
      },
      {
        name: "Kasidis Chokphaiboon",
          image: "/assets/placeholder.png",
      },
      {
        name: "Kittitad Jiraprasitchai",
          image: "/assets/placeholder.png",
      },
    ],
  },
  {
    projectTitle:
      "StackECK: Multi-Modal Stack overflow Post Search Using Keyword, Code and Error",
    graduationYear: 2022,
    members: [
      {
        name: "Thanakorn Limpanawuthi",
          image: "/assets/placeholder.png",
      },
      {
        name: "Wish Suchalermkul",
          image: "/assets/placeholder.png",
      },
      {
        name: "Punyaporn Srisuk",
          image: "/assets/placeholder.png",
      },
    ],
  },
  {
    projectTitle:
      "eSit: Ergonomic Sitting Posture Monitoring System Using Computer Vision Techniques",
    graduationYear: 2021,
    members: [
      {
        name: "Jirachaya Wongsuppakarn",
          image: "/assets/placeholder.png",
      },
      {
        name: "Wipada Kaewthong",
          image: "/assets/placeholder.png",
      },
      {
        name: "Soksedtha Ly",
          image: "/assets/placeholder.png",
      },
    ],
  },
  {
    projectTitle:
      "Mirai: Web-based Virtual Waller for Arcade Center",
    graduationYear: 2021,
    members: [
      {
        name: "Natthapon Kobkulkalyakorn",
          image: "/assets/placeholder.png",
      },
      {
        name: "Phumrapee Limpianchop",
          image: "/assets/placeholder.png",
      },
      {
        name: "Trin Nuchcharoen",
          image: "/assets/placeholder.png",
      },
    ],
  },
  {
    projectTitle:
      "Development of an Automate Suture Performance Evaluation and Feedback Generation System for Outcome Images of Wound Suturing Practice on a Bench Model",
    graduationYear: 2020,
    members: [
      {
        name: "Wutthipat Muesantad", 
          image: "/assets/placeholder.png",
      },
      {
        name: "Dujnapa Tanundet",
          image: "/assets/placeholder.png",
      },
      {
        name: "Tanaporn Rojanaridpiched",
          image: "/assets/placeholder.png",
      },
    ],
  },
  {
    projectTitle:
      "Mandy: Empirical Investigation and Supporting Program of Mandibular Fracture Classification and Localization Algorithms on X-ray Images of Skulls",
    graduationYear: 2019,
    members: [
      {
        name: "Phrugsa Limbunlom", 
          image: "/assets/placeholder.png",
      },
      {
        name: "Pitchaya Dachoponchai",
          image: "/assets/placeholder.png",
      },
      {
        name: "Kramolneat Chitsue",
          image: "/assets/placeholder.png",
      },
    ],
  },
  {
    projectTitle:
      "@Cody: Simple Blood Sugar Level and Food Tracking via Line Platform",
    graduationYear: 2018,
    members: [
      {
        name: "Kanda Cheevathammarat", 
          image: "/assets/placeholder.png",
      },
      {
        name: "Suriyapa Pongpaijit",
          image: "/assets/placeholder.png",
      },
      {
        name: "Pannara Suwannikkha",
          image: "/assets/placeholder.png",
      },
    ],
  },
];
