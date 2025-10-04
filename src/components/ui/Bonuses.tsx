"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export type Benefit = {
  id: number;
  title: string;
  description?: string;
  image: string;
};

interface BenefitsShowcaseProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
  extraBenefits?: Benefit[]; // Two small extra cards
}

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function BenefitsShowcase({
  title = "₹10,000 Worth Extra Benefits You Get",
  subtitle = "Go beyond technical skills. Access tools, mentorship, and community to excel in Data Science.",
  benefits,
  extraBenefits = [],
}: BenefitsShowcaseProps) {
  const getLayoutType = (index: number): "large" | "medium" | "small" => {
    const pattern = ["large", "small", "small", "medium", "medium", "small"];
    return pattern[index % pattern.length] as "large" | "medium" | "small";
  };

  const allCards = [...benefits, ...extraBenefits];

  return (
    <section className="py-3 lg:py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-blue-800">{title}</h2>
          {subtitle && <p className="text-sm md:text-xl text-blue-600 mt-1">{subtitle}</p>}
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[120px] md:auto-rows-[140px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((item, index) => {
            const layout = getLayoutType(index);
            const sizeClasses =
              layout === "large"
                ? "md:col-span-2 md:row-span-2"
                : layout === "medium"
                ? "md:col-span-1 md:row-span-2"
                : "md:col-span-1 md:row-span-1";

            return (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120 }}
                className={`relative ${sizeClasses}`}
              >
                <Card className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-2 h-full relative flex flex-col justify-end">
                    {/* Floating Image */}
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-xl font-semibold text-white line-clamp-2">{item.title}</h3>
                      {item.description && (
                        <p className="text-[15px] text-gray-200 line-clamp-2">{item.description}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}

          {/* Extra small cards below - desktop side by side */}
          {extraBenefits.length > 0 && (
            <div className="md:col-span-1 md:row-start-auto flex gap-3 mt-2">
              {extraBenefits.map((item) => (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  className="w-1/2 h-[120px]"
                >
                  <Card className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-2 h-full relative flex flex-col justify-end">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                      <div className="relative z-10">
                        <h3 className="text-xs md:text-sm font-semibold text-white line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Mobile Layout */}
        <div className="md:hidden mt-3 grid grid-cols-2 gap-2">
          {allCards.map((item, index) => {
            const isLargeCard = [2, 5].includes(index);
            return (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                className={`${isLargeCard ? "col-span-2 h-[140px]" : "col-span-1 h-[120px]"}`}
              >
                <Card className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-2 h-full relative flex flex-col justify-end">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                    <div className="relative z-10 text-center">
                      <h3 className="text-xs font-semibold text-white line-clamp-2">{item.title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
