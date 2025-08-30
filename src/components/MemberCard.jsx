import React from "react";

const MemberCard = ({ member }) => {
  return (
    <div className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center gap-4 shadow-md transition-colors duration-300">
      <img
        src={member.photo}
        alt={member.name}
        className="w-16 h-16 rounded-full"
      />
      <div>
        <h3 className="font-bold text-gray-900 dark:text-gray-100">
          {member.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
