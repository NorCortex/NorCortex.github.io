import { GraduationCap } from "lucide-react";

interface EducationProps {
  education: { degree: string; institution: string; year: string }[];
}

const Education = ({ education }: EducationProps) => {
  if (education.length === 0) {
    return <p className="text-gray-600">No education details available.</p>;
  }

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
      </h2>
      <div className="relative pl-8">
        {education.map((edu, index) => (
          <div key={index} className="relative mb-8">
            {index !== education.length - 1 && (
              <div className="absolute left-3 top-6 w-[2px] h-full bg-blue-300"></div>
            )}

            <div className="absolute -left-5 top-2 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>

            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
