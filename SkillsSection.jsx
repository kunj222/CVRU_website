import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Post-Graduate
  { name: " Masters Of Science In MatheMatics", level: 95, category: "Post-Graduate" },
  { name: " Masters Of Science In Chemistry", level: 90, category: "Post-Graduate" },
  { name: "Masters In Commerce", level: 90, category: "Post-Graduate" },
  { name: " Masters In Computer Application", level: 85, category: "Post-Graduate" },
  { name: "Masters Of Science In Agriculture Extension", level: 90, category: "Post-Graduate" },
  { name: " Masters Of Arts ", level: 80, category: "Post-Graduate" },
  { name: " Masters Of Science ", level: 90, category: "Post-Graduate" },

  // Under-Graduate
  { name: " Bachelors Of Science In Agriculture", level: 80, category: "Under-Graduate" },
  { name: "Bachelors Of Science In Micro Biology", level: 90, category: "Under-Graduate" },
  { name: " Bachelors Of Business Management", level: 75, category: "Under-Graduate" },
  { name: "Bachelors Of Commerce (Plain)", level: 70, category: "Under-Graduate" },
  { name: "Bachelors Of Computer Application", level: 80, category: "Under-Graduate" },
  { name: " Bachelors Of Technology In Agriculture Engineering", level: 80, category: "Under-Graduate" },
  { name: " Bachelors Of Science ", level: 80, category: "Under-Graduate" },
  

  // Diploma
  { name: " Diploma In Medical Laboratory TechnologyGit/GitHub", level: 90, category: "Diploma" },
  { name: "Diploma In Pharmacy", level: 70, category: "Diploma" },
  { name: "Diploma In Computer Application", level: 85, category: "Diploma" },
  
];

const categories = ["all", "Post-Graduate", "Under-Graduate", "Diploma"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our <span className="text-primary"> Courses</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >

                  
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>

              <h3 className="text-left pb-4">Placement Persentage</h3> 
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
                              

              <div className="text-right mt-1"  >
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              <div className="flex justify-between m-2 ">
                  <a href="" className="text-right-bottom hover:underline">Read More</a>
                  <a href="" className="text-left-bottom hover:underline">Apply Now</a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};