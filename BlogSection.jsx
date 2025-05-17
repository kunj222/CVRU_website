import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1, 
    description: "NASSCOM Emerge 50 Leader Award - 2009 Mr. Santosh Choubey, Chairman, AISECT, receiving the NASSCOM Emerge 50 Leader Award from Mr. Som Mittal, President, NASSCOM &amp; Mr. K.K. Natarajan, Chairman, Emerge Forum.",
    image: "/projects/1.jpg",
      
  },
  {
    id: 2,
    description:
      "Finalist, The Social Entrepreneur of the Year Award - 2010 Mr. Santosh Choubey, CMD, AISECT, receiving the honor from Mr. Kapil Sibal, former Minister of Human Resource Development and Mrs. Hilde Schwab, Founder of the Schwab Foundation for Social Entrepr",
    image: "/projects/2.jpg",
    demoUrl: "#",
  
  },
  {
    id: 3,
    description:
      "TiE-Lumis Entrepreneurial Excellence Award - 2009 AISECT Directors, Mr. Siddharth Chaturvedi and Ms. Pallavi Rao Chaturvedi, receiving the prestigious TiE-Lumis Entrepreneurial Excellence Award.",
    image: "/projects/3.jpg",
    demoUrl: "#",
    },
  {
    id: 4,
    description: "NASSCOM IT Innovation Award - 2006 Dr. A.P.J. Abdul Kalam, Ex-President of India, presenting the NASSCOM IT Innovation Award to Mr. Santosh Choubey, Chairman, AISECT.",
    image: "/projects/4.jpg",
    demoUrl: "#",
  
  },
  {
    id: 5,
    description:
      "Navduniya’s 4th ‘Captains of Industry’ Award 2015 CM of Madhya Pradesh, Shivraj Singh Chauhan honoring Mr. S.K. Choubey, Director – AISECT, at Navduniya’s 4th ‘Captains of Industry’ Award 2015.",
    image: "/projects/5.jpg",
    demoUrl: "#",
  
  },
  {
    id: 6,
    description:
      "Lifetime Achievement Award for Technical and Societal Contributions - 2013 Mr. Santosh Choubey, receiving the Lifetime Achievement Award for his technical and societal contributions from Shri R. Parshuram, Chief Secretary, GoMP.",
    image: "/projects/6.jpg",
    demoUrl: "#",
    
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Our <span className="text-primary"> Awards </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some our awards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://cvrump.ac.in/"
          >
            For more info. <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};