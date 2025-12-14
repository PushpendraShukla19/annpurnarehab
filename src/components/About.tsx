import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Building2, Users } from "lucide-react";

const credentials = [
  {
    icon: BookOpen,
    title: "MPT Neuro",
    description: "Master's in Neuro Physiotherapy",
  },
  {
    icon: Award,
    title: "MAITS London",
    description: "Master Training from London",
  },
  {
    icon: Building2,
    title: "Director",
    description: "Annpurana Rehabilitation Center",
  },
  {
    icon: Users,
    title: "Ex-Consultant",
    description: "Mom's Belief Center",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute -left-40 top-1/2 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Background Shape */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl -rotate-6" />
              
              {/* Main Card */}
              <motion.div
                whileHover={{ rotate: 0 }}
                className="relative h-full glass rounded-3xl shadow-elevated p-8 rotate-3 transition-transform duration-500"
              >
                <div className="h-full flex flex-col justify-between">
                  {/* Decorative Elements */}
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-glass">
                      <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2v20M8 6c0-1 2-2 4-2s4 1 4 2M7 10c0-1 2.5-2 5-2s5 1 5 2M6 14c0-1 3-2 6-2s6 1 6 2M7 18c0-1 2.5-2 5-2s5 1 5 2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <div className="w-3 h-3 rounded-full bg-secondary" />
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="space-y-4">
                    <blockquote className="text-2xl font-semibold leading-relaxed">
                      "Every patient's recovery journey is unique, and I believe in 
                      <span className="text-gradient"> personalized care</span> that addresses both physical and emotional healing."
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <div>
                        <p className="font-semibold">Dr. Raghvendra Shukla</p>
                        <p className="text-sm text-muted-foreground">Neuro Rehab Specialist</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 pt-6 border-t border-border">
                    <div>
                      <p className="text-3xl font-bold text-primary">1000+</p>
                      <p className="text-sm text-muted-foreground">Patients Treated</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-accent">5+</p>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary"
              >
                About Dr. Shukla
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl font-bold"
              >
                From London to Kanpur:{" "}
                <span className="text-gradient">A Journey of Healing</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                With specialized training from the prestigious MAITS program in London and 
                extensive experience in neuro-rehabilitation, Dr. Raghvendra Shukla brings 
                world-class expertise to Kanpur. His dual focus on adult neuro-spine recovery 
                and pediatric developmental care makes him uniquely qualified to serve 
                patients across all age groups.
              </motion.p>
            </div>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="p-5 rounded-2xl glass shadow-glass"
                >
                  <cred.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground">{cred.title}</h3>
                  <p className="text-sm text-muted-foreground">{cred.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
