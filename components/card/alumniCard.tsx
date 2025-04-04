import Image from "next/image";

interface AlumniGroup {
  projectTitle: string;
  graduationYear: number;
  members: {
    name: string;
    image: string;
    quote?: string; // Optional quote property
  }[];
}

interface AlumniCardProps {
  group: AlumniGroup;
}

const AlumniCard = ({ group }: AlumniCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 flex flex-col items-center text-center max-w-sm mx-auto">
      <div className="mb-5">
        <h3 className="text-xl font-bold text-gray-900">{group.projectTitle}</h3>
        <p className="text-gray-500 text-sm">Class of {group.graduationYear}</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {group.members.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={300}
                className="rounded-full border-2 border-gray-200 shadow-sm"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-800 mt-2">{member.name}</h3>
            {member.quote && (
              <p className="text-xs text-gray-600 mt-1 italic">"{member.quote}"</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniCard;
