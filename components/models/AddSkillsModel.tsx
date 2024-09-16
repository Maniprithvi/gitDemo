import React, { useState } from "react";
import Image from "next/image";

const AddSkillsModel = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const allSkills = [
    "Game Designing",
    "Art Design",
    "Visual Design",
    "Production",
    "Character Design",
    "Producer",
    "Art Director",
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSkillSelect = (skill: string) => {
    if (selectedSkills.length < 5 && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setIsInputFocused(false);
    }
  };

  const handleSkillRemove = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-black bg-opacity-50  flex justify-center items-center backdrop-filter backdrop-blur-sm">
      <div className="w-[280px] xl:w-[320px] md:w-[320px] sm:w-[320px] h-[400px] flex flex-col gap-6 rounded-[16px] p-4 bg-[#FFFFFF] relative">
        <div className="w-full flex justify-end">
          <p className="text-md text-[#A6A6A6] font-medium cursor-pointer">
            Close
          </p>
        </div>
        <div className="w-full flex flex-col gap-2 relative">
          <p className="text-lg font-bold">Reach out to me for</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setTimeout(() => setIsInputFocused(false), 200)} // Delay to allow click on dropdown
              className="w-full p-2 pl-10 border text-[#FF5C00] border-[#FF5C00] rounded-[5px] bg-[#FFB084] bg-opacity-10 outline-none placeholder-[#FF5C00] placeholder-opacity-60"
            />
            <Image
              src="/icons/Search_Icon.svg"
              alt="SearchIcon"
              width={17}
              height={17}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 pointer-events-none cursor-pointer"
            />
          </div>
          <div className="w-full h-[1px] mt-2 border-b-2 border-[#E1E1E1] border-opacity-50"></div>

          {/* Selected Skill Items */}
          <div className="w-full h-[186px]">
            <div className="w-full p-2 flex flex-row flex-wrap gap-4 mt-2 rounded-[16px]">
              {selectedSkills.map((skill) => (
                <div
                  key={skill}
                  className="w-auto h-[34px] p-2 flex flex-row gap-2 bg-[#FF5C00] rounded-[7px]"
                >
                  <p className="text-sm text-[#FFFFFF] font-medium">{skill}</p>
                  <Image
                    src="/icons/Close_Btn.svg"
                    alt="CloseBtn"
                    width={9}
                    height={9}
                    className="cursor-pointer"
                    onClick={() => handleSkillRemove(skill)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Conditionally render the skills list */}
          {isInputFocused && (
            <div
              className="absolute top-[29%] w-full h-[186px] flex flex-col py-2 border border-[#DADADA] rounded-[8px] overflow-auto bg-white z-1"
              style={{ scrollbarColor: "#731A6E" }}
            >
              {allSkills
                .filter((skill) =>
                  skill.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((skill) => (
                  <p
                    key={skill}
                    onClick={() => handleSkillSelect(skill)}
                    className="w-full pl-5 py-2 text-sm text-[#333333] font-medium cursor-pointer hover:bg-[#FF5C00] hover:bg-opacity-40"
                  >
                    {skill}
                  </p>
                ))}
            </div>
          )}
        </div>
        <p className="w-full text-sm text-[#731A6E] text-center font-semibold">
          *Max 5 allowed
        </p>
      </div>
    </div>
  );
};

export default AddSkillsModel;
