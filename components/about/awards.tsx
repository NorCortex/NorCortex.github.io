interface Award {
    name: string;
    year: string;
  }
  
  interface AwardsProps {
    awards: Award[];
  }
  
  const Awards = ({ awards }: AwardsProps) => {
    return (
      <section className="mb-12">  
        {awards.length > 0 ? (
          <ul className="space-y-3">
            {awards.map((award, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-md border border-gray-200 hover:border-gray-300 transition-colors duration-200"
              >
                <span className="text-gray-700 font-medium">{award.name}</span>
                <span className="text-gray-500 text-sm">({award.year})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-sm italic">No awards listed.</p>
        )}
      </section>
    );
  };
  
  export default Awards;