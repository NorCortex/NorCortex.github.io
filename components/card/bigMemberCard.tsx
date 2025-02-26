import Image from 'next/image';

interface BigMember {
  name: string;
  position?: string;
  image: string;
  researchInterests: string;
  email: string;
  googleScholar?: string;
  website?: string;
  linkedin?: string;
  semacticScholar?: string;
}

interface BigMemberCardProps {
  member: BigMember;
}

const BigMemberCard = ({ member }: BigMemberCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <div className="flex-shrink-0">
          <Image
            src={member.image}
            alt={member.name}
            width={500} // Set the width
            height={300} // Set the height
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-200 shadow-sm"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-medium text-gray-800 mb-2">{member.name}</h2>
          {member.position && (
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
              {member.position}
            </p>
          )}
          <div className="mb-4">
            <p className="text-sm text-gray-600 leading-tight">
              <span className="font-bold text-gray-700">Research Interest:</span>{" "}
              {member.researchInterests}
            </p>
          </div>

          <a
            href={`mailto:${member.email}`}
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium space-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
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
            <span>{member.email}</span>
          </a>

          <div className="flex flex-row items-center space-x-3 mt-4">
            {member.googleScholar && (
              <a
                href={member.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 border rounded-md bg-gray-50"
              >
                Google Scholar
              </a>
            )}
            {member.googleScholar && (
              <a
                href={member.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 border rounded-md bg-gray-50"
              >
                Semantic Scholar
              </a>
            )}
            {member.website && (
              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 border rounded-md bg-gray-50"
              >
                Website
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 border rounded-md bg-gray-50"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigMemberCard;
