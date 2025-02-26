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
      projectTitle: "Exploring Machine Learning Indicators for Equity Trading Bots",
      // co-advisor: "Tipajin Thaipisutikul",
      graduationYear: 2023,
      members: [
        { name: "Chanatip Deemee", quote: "Graduated in Data Science. Still can’t find the correlation between my degree and my job", image: "/assets/alumni/Chanatip.jpg" },
        { name: "Sorawanan Jeamjantarasakhon", quote: "If idiot can fly, this place would be an airport", image: "/assets/alumni/Sorawanan.jpg" },
        { name: "Kittipat Arpanon", quote: "Graduated: Got a degree, still can't figure out how to pay taxes", image: "/assets/alumni/Kittipat.jpg" },
      ],
    },
    {
      projectTitle: "eDuck: Adapting LLMs as an Educational Tool for Learning to Code.",
      graduationYear: 2023,
      members: [
        { name: "Nubthong Worathong ", quote: "Graduated with a degree in Data Science, but still unsure how to parse life", image: "/assets/alumni/Nubthong.jpg" },
        { name: "Doungnapat Thiansukont", quote: "Got my software degree. Still wondering why life keeps throwing 404s" , image: "/assets/alumni/Doungnapat.jpg" },
        { name: "Sarayut Theeraumpronpunt ", quote: "Graduated with a degree in coding. Still waiting for life to compile without errors", image: "/assets/alumni/Sarayut.jpg" },
      ],
    },
  ];
  

