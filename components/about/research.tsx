interface ResearchInterestsProps {
    researchInterests: string[];
  }
  
  const ResearchInterests = ({ researchInterests }: ResearchInterestsProps) => {
    return (
      <section className="mb-12">
        {researchInterests.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {researchInterests.map((interest, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-2 bg-gray-100 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 hover:border-gray-400 text-sm text-gray-700 font-medium"
              >
                {interest}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 italic">No research interests listed.</p>
        )}
      </section>
    );
  };
  
  export default ResearchInterests;