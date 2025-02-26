import React from "react";
import AlumniCard from "@/components/card/groupMemberCard";
import { alumniGroups } from "@/data/alumni";

const groupByYear = () => {
  const grouped: { [year: number]: typeof alumniGroups } = {};
  alumniGroups.forEach((group) => {
    if (!grouped[group.graduationYear]) {
      grouped[group.graduationYear] = [];
    }
    grouped[group.graduationYear].push(group);
  });
  return grouped;
};

export default function AlumniPage() {
  const groupedAlumni = groupByYear();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        <span className="border-b-2 border-blue-600 pb-2">Alumni</span>
      </h1>

      {Object.entries(groupedAlumni).map(([year, groups]) => (
        <div key={year} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
            Class of {year}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map((group, index) => (
              <AlumniCard key={index} group={group} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
