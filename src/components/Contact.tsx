import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "Near Metro Pillar No 1, IIT Gate, Kanpur, UP, India",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9838042838",
    link: "tel:+919838042838",
  },
  {
    icon: Mail,
    title: "Email",
    content: "raghvendrashukla1999@gmail.com",
    link: "mailto:raghvendrashukla1999@gmail.com",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    type: "adult",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hello Dr. Shukla,\n\nName: ${formState.name}\nPhone: ${formState.phone}\nPatient Type: ${formState.type === "adult" ? "Adult Neuro" : "Pediatric"}\n\nMessage: ${formState.message}`;
    const whatsappUrl = `https://wa.me/919838042838?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
    
    toast({
      title: "Message Prepared!",
      description: "Opening WhatsApp to send your consultation request.",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute left-0 top-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
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
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Begin Your{" "}
            <span className="text-gradient">Healing Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to take the first step? Book a consultation or reach out 
            with any questions about our rehabilitation services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 shadow-glass"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Patient Type</label>
                <div className="flex gap-4">
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="type"
                      value="adult"
                      checked={formState.type === "adult"}
                      onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                      className="sr-only peer"
                    />
                    <div className="w-full px-4 py-3 rounded-xl border border-border bg-background text-center cursor-pointer transition-all peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary font-medium">
                      Adult Neuro
                    </div>
                  </label>
                  <label className="flex-1">
                    <input
                      type="radio"
                      name="type"
                      value="child"
                      checked={formState.type === "child"}
                      onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                      className="sr-only peer"
                    />
                    <div className="w-full px-4 py-3 rounded-xl border border-border bg-background text-center cursor-pointer transition-all peer-checked:border-accent peer-checked:bg-accent/5 peer-checked:text-accent font-medium">
                      Pediatric Care
                    </div>
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your condition or concerns..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-glass hover:shadow-elevated transition-all disabled:opacity-70"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link?.startsWith("mailto") ? "_blank" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={info.link ? { scale: 1.02, y: -2 } : {}}
                  className={`p-5 rounded-2xl glass shadow-glass ${info.link ? "cursor-pointer hover:shadow-elevated" : ""} transition-all`}
                >
                  <info.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground">{info.title}</h3>
                  <p className="text-sm text-muted-foreground">{info.content}</p>
                </motion.a>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="h-[300px] rounded-3xl overflow-hidden glass shadow-glass"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.4988969861583!2d80.22973!3d26.51126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3806b1666667%3A0x5f145e557e33c90d!2sIIT%20Kanpur%20Gate!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
