import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, 
  Baby, 
  Syringe, 
  HeartPulse, 
  Activity, 
  Users,
  Sparkles,
  Shield
} from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Neuro-Spine Rehabilitation",
    description: "Comprehensive care for stroke recovery, spinal cord injuries, and neurological conditions. Advanced techniques for restoring mobility and function.",
    keywords: ["Stroke", "Paralysis", "Spondylosis", "Sciatica"],
    size: "large",
    gradient: "from-primary to-primary/70",
  },
  {
    icon: Baby,
    title: "Pediatric Development",
    description: "Specialized care for children with developmental delays, cerebral palsy, and autism spectrum disorders.",
    keywords: ["Cerebral Palsy", "Autism", "ADHD"],
    size: "medium",
    gradient: "from-accent to-accent/70",
  },
  {
    icon: Syringe,
    title: "Dry Needling",
    description: "Certified technique for trigger point therapy and myofascial pain relief.",
    keywords: ["Pain Relief", "Muscle Tension"],
    size: "small",
    gradient: "from-secondary to-secondary/70",
  },
  {
    icon: HeartPulse,
    title: "Cupping Therapy",
    description: "Traditional healing combined with modern rehabilitation approaches.",
    keywords: ["Recovery", "Circulation"],
    size: "small",
    gradient: "from-primary/80 to-accent/80",
  },
  {
    icon: Activity,
    title: "Occupational Therapy",
    description: "Helping patients regain daily living skills and independence through targeted exercises.",
    keywords: ["Daily Living", "Motor Skills"],
    size: "medium",
    gradient: "from-accent/80 to-primary/80",
  },
  {
    icon: Users,
    title: "Parent Counseling",
    description: "Guidance and support for families navigating their child's developmental journey.",
    keywords: ["Family Support", "Guidance"],
    size: "small",
    gradient: "from-secondary/80 to-primary/60",
  },
];

export function ServicesBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute right-0 top-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Comprehensive{" "}
            <span className="text-gradient">Rehabilitation Care</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From neurological rehabilitation to pediatric developmental therapy, 
            we offer specialized treatments tailored to your unique needs.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {services.map((service, i) => {
            const isLarge = service.size === "large";
            const isMedium = service.size === "medium";
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.1 + i * 0.1, 
                  type: "spring", 
                  stiffness: 100,
                  damping: 20 
                }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`
                  group relative p-6 rounded-3xl glass shadow-glass hover:shadow-elevated transition-all duration-300
                  ${isLarge ? "md:col-span-2 lg:row-span-2" : ""}
                  ${isMedium ? "lg:row-span-1" : ""}
                `}
              >
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className={`relative h-full flex flex-col ${isLarge ? "gap-6" : "gap-4"}`}>
                  {/* Icon */}
                  <div className={`
                    rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-glass
                    ${isLarge ? "w-16 h-16" : "w-12 h-12"}
                  `}>
                    <service.icon className={`text-primary-foreground ${isLarge ? "w-8 h-8" : "w-6 h-6"}`} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 space-y-3">
                    <h3 className={`font-bold text-foreground ${isLarge ? "text-2xl" : "text-lg"}`}>
                      {service.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${isLarge ? "text-base" : "text-sm"}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4">
                  <Shield className="w-4 h-4 text-primary/30" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
