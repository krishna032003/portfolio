import { motion } from "framer-motion";

export const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className="mb-16 space-y-4">
      <div className="flex items-center gap-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          {title}
        </motion.h2>
        {/* Animated Neon Accent Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="h-[2px] flex-1 bg-gradient-to-r from-[#00f3ff] to-transparent origin-left opacity-50"
        />
      </div>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};