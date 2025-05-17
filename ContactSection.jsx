import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
  } from "lucide-react";
  import { cn } from "../lib/utils";
  import { useToast } from "../hooks/use-toast";
  import { useState } from "react";
  // import  axios  from 'axios'; 
  
  export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setIsSubmitting(true);
  
      setTimeout(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
      }, 1500);
    };
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a Query in mind or want to collaborate? Feel free to reach out.
            We are always open to discussing .
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3>
  
              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className=" font-medium"> Email</h4>
                    <a
                      href=""
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@cvrump.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className=""> 
                    <h4 className=" font-medium "> Phone</h4>
                    <a
                      href="tel:+11234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                                 +91 : 7320-24771
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div>
                    <h4 className="  text-left pl-10 font-medium "> Location</h4>
                    <a className=" text-center-muted-foreground hover:text-primary transition-colors">
                    Village:- Balkhadsura,
                    Post:- chhaigaon Makhan,
                    Khandwa MP,
                    PinCode:-450771
                    
                    
                    </a>
                  </div>
                </div>
              </div>
  
              <div className="pt-8">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a href="#" target="_blank">
                    <Linkedin />
                  </a>
                  <a href="#" target="_blank">
                    <Twitter />
                  </a>
                  <a href="#" target="_blank">
                    <Instagram />
                  </a>
                  
                </div>
              </div>
            </div>
  
            <div
              className="bg-card p-8 rounded-lg shadow-xs"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
  
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2">
                  
                    
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Jhon Deo"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="example@gmail.com"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                    placeholder="Pleasent type massage here... "
                  />
                </div>
  
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };