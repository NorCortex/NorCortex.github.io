import Image from 'next/image';

interface Member {
  name: string;
  position?: string;
  image: string;
  researchInterests: string;
  email: string;
  googleScholar?: string;
  website?: string;
  linkedin?: string;
}

interface MemberCardProps {
  members: Member[];
}

const MemberCard = ({ members }: MemberCardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {members.map((member) => (
        <div
          key={member.name}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center border border-gray-200"
        >
          <div className="mb-4">
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={300}
              className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-300 shadow-sm"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h2>
          {member.position && (
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
              {member.position}
            </p>
          )}
          <div className="mb-4 px-2">
            <p className="text-sm text-gray-600 leading-tight">
              <span className="font-semibold text-gray-700">Research Interest:</span>{" "}
              {member.researchInterests}
            </p>
          </div>
          <div className="mb-3">
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 9.4L12 12.6 7.5 9.4M3 6h18c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1z"
                />
              </svg>
              {member.email}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {member.googleScholar && (
              <a
                href={member.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200 border border-gray-300 rounded-md px-3 py-1 bg-gray-50"
              >
                Google Scholar
              </a>
            )}
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200 border border-gray-300 rounded-md px-3 py-1 bg-gray-50"
              >
                Website
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:text-blue-800 transition-colors duration-200 border border-gray-300 rounded-md px-3 py-1 bg-gray-50"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MemberCard;
