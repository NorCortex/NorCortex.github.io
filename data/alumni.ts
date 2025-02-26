export interface AlumniGroup {
    projectTitle: string;
    graduationYear: number;
    members: {
      name: string;
      image: string;
    }[];
  }
  
  export const alumniGroups: AlumniGroup[] = [
    {
      projectTitle: "Exploring Machine Learning Indicators for Equity Trading Bots",
      // co-advisor: "Tipajin Thaipisutikul",
      graduationYear: 2023,
      members: [
        { name: "Sorawanan Jeamjantarasakhon", image: "/images/alice.jpg" },
        { name: "Chanathip Deemee", image: "/images/bob.jpg" },
        { name: "Kittipat Arpanon", image: "/images/charlie.jpg" },
      ],
    },
    {
      projectTitle: "eDuck: Adapting LLMs as an Educational Tool for Learning to Code.",
      graduationYear: 2023,
      members: [
        { name: "Doungnapat Thiansukont", image: "/images/david.jpg" },
        { name: "Sarayut Theeraumpronpunt", image: "/images/emma.jpg" },
        { name: "Nubthong Worathong", image: "/images/franklin.jpg" },
      ],
    },
  ];
  

