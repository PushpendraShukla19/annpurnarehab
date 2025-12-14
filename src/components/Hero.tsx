import { motion } from "framer-motion";
import { ArrowRight, Award, MapPin, GraduationCap, Heart } from "lucide-react";

const badges = [
  { icon: GraduationCap, text: "MAITS London Trained" },
  { icon: Award, text: "Certified Dry Needling" },
  { icon: Heart, text: "5+ Years Experience" },
];

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-glass text-sm"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-muted-foreground">IIT Gate, Kanpur, India</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Restoring{" "}
                <span className="text-gradient">Independence</span>
                <br />
                One Pathway at a Time
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-lg"
              >
                <span className="font-semibold text-foreground">Dr. Raghvendra Shukla</span> — 
                Neuro-Spine Rehabilitation & Pediatric Developmental Specialist
              </motion.p>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1, type: "spring", stiffness: 200 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl glass shadow-glass text-sm"
                >
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={() => scrollToSection("#contact")}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold shadow-glass hover:shadow-elevated transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("#services")}
                className="flex items-center justify-center gap-2 px-8 py-4 glass rounded-2xl font-semibold shadow-glass hover:bg-primary/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-lg">
              {/* Floating Neural Network Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Central Core */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="relative w-80 h-80"
                >
                  {/* Orbital Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-pulse-slow" />
                  <div className="absolute inset-8 rounded-full border-2 border-dotted border-accent/30" />
                  <div className="absolute inset-16 rounded-full border border-secondary/40" />
                </motion.div>

                {/* Central Brain/Spine Symbol */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-48 h-48 glass rounded-full shadow-elevated flex items-center justify-center"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-primary/80 to-accent flex items-center justify-center shadow-glass">
                    <svg
                      className="w-16 h-16 text-primary-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      {/* Stylized Spine */}
                      <path d="M12 2v20" strokeLinecap="round" />
                      <circle cx="12" cy="4" r="1.5" fill="currentColor" />
                      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                      <circle cx="12" cy="20" r="1.5" fill="currentColor" />
                      <path d="M8 6c0-1 2-2 4-2s4 1 4 2" strokeLinecap="round" />
                      <path d="M7 10c0-1 2.5-2 5-2s5 1 5 2" strokeLinecap="round" />
                      <path d="M6 14c0-1 3-2 6-2s6 1 6 2" strokeLinecap="round" />
                      <path d="M7 18c0-1 2.5-2 5-2s5 1 5 2" strokeLinecap="round" />
                    </svg>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, i % 2 === 0 ? 10 : -10, 0],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                    className="absolute w-4 h-4 rounded-full bg-accent/60 shadow-lg"
                    style={{
                      top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 40}%`,
                      left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 40}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-2.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
