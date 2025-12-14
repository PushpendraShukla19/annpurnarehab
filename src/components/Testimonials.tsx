import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    role: "Parent of CP Patient",
    content: "Dr. Shukla's expertise in pediatric care transformed my son's life. His patience and understanding made every session productive and comfortable.",
    rating: 5,
  },
  {
    name: "Rajesh K.",
    role: "Stroke Recovery Patient",
    content: "After my stroke, I thought I'd never walk again. Dr. Raghvendra's neuro-rehabilitation program gave me hope and results I never expected.",
    rating: 5,
  },
  {
    name: "Anita M.",
    role: "Parent of Autistic Child",
    content: "The sensory integration therapy has made a remarkable difference. My daughter is more engaged and her motor skills have improved significantly.",
    rating: 5,
  },
  {
    name: "Vikram T.",
    role: "Sciatica Patient",
    content: "The dry needling technique provided instant relief. Professional, knowledgeable, and genuinely caring about patient outcomes.",
    rating: 5,
  },
  {
    name: "Sunita D.",
    role: "Spondylosis Patient",
    content: "Years of back pain finally addressed. The holistic approach combining therapy and lifestyle guidance has been life-changing.",
    rating: 5,
  },
  {
    name: "Meera R.",
    role: "Parent",
    content: "The MAITS training really shows. Dr. Shukla brings international expertise with local understanding. Highly recommended for child development.",
    rating: 5,
  },
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
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
            <Quote className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Stories of{" "}
            <span className="text-gradient">Recovery & Hope</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from patients and families who have experienced the transformative 
            power of specialized neuro-rehabilitation care.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
              {allTestimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + (i % 6) * 0.1 }}
                  className="flex-shrink-0 w-[350px] p-6 rounded-3xl glass shadow-glass hover:shadow-elevated transition-shadow group"
                >
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />

                  {/* Content */}
                  <p className="text-foreground leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {testimonial.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
