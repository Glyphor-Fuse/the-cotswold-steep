import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Sun, Moon, Utensils } from "lucide-react";

type MenuCategory = "morning" | "afternoon";

const MENU_DATA = {
  morning: [
    { name: "The Steep Signature Roast", desc: "Double espresso, textured milk, nutmeg dust", price: "£4.20" },
    { name: "Burford Bun", desc: "Spiced dough, currents, citrus glaze (served warm)", price: "£3.50" },
    { name: "Avocado & Poached Egg", desc: "Sourdough toast, chili flakes, local eggs", price: "£9.50" },
    { name: "Heritage Porridge", desc: "Steel-cut oats, local honey, seasonal berries", price: "£6.00" },
  ],
  afternoon: [
    { name: "Cotswold Cream Tea", desc: "Two scones, clotted cream, strawberry jam, pot of tea", price: "£8.50" },
    { name: "Ploughman’s Board", desc: "Vintage cheddar, pickles, crusty bread, apple", price: "£12.00" },
    { name: "Earl Grey Lavender Cake", desc: "Light sponge, floral buttercream", price: "£4.50" },
    { name: "Artisan Loose Leaf", desc: "Selection of green, black, and herbal blends", price: "£3.80" },
  ]
};

export const DailyRitualsMenu = () => {
  const [activeTab, setActiveTab] = useState<MenuCategory>("morning");

  return (
    <section className="bg-stone-50 py-24 px-6 md:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-stone-500">Daily Rituals</span>
          <h2 className="mt-4 font-serif text-5xl text-stone-900 md:text-6xl">Seasonal Offerings</h2>
          <p className="mt-4 text-stone-600">Sourced from Oxfordshire farms, prepared with patience.</p>
        </div>

        {/* Toggle Controls */}
        <div className="mx-auto mb-16 flex max-w-md justify-center rounded-full bg-stone-200 p-1">
          <button
            onClick={() => setActiveTab("morning")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-all duration-300 ${
              activeTab === "morning"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            <Sun className="h-4 w-4" />
            Morning
          </button>
          <button
            onClick={() => setActiveTab("afternoon")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition-all duration-300 ${
              activeTab === "afternoon"
                ? "bg-white text-stone-900 shadow-sm"
                : "text-stone-500 hover:text-stone-700"
            }`}
          >
            <Utensils className="h-4 w-4" />
            Afternoon
          </button>
        </div>

        {/* Menu Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-x-12 gap-y-10 md:grid-cols-2"
            >
              {MENU_DATA[activeTab].map((item, idx) => (
                <div key={idx} className="group relative border-b border-stone-200 pb-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl text-stone-800 group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-sans text-stone-500">{item.price}</span>
                  </div>
                  <p className="mt-2 font-sans text-stone-600">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default DailyRitualsMenu;
