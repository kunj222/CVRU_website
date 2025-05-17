import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Welcome to</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Dr.CVRU
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Khandwa
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          The university campus, which covers an area of 50 acres, is fully equipped with modern facilities and engaged in higher education work. Despite the demanding daily routine, 
          studying at CVRU is a gratifying experience. 
          The university extends beyond traditional classroom learning by organising numerous cultural events and sporting competitions throughout the academic year. 
          These extracurricular activities play a pivotal role in shaping the holistic development of students, 
          contributing to their profession...
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
         
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};