import { motion } from "framer-motion";
import { ArrowDown, MapPin, Clock } from "lucide-react";

export const BurfordHero = () => {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-shopfront.jpg"
          alt="The Cotswold Steep Shopfront"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-stone-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-widest backdrop-blur-md">
            Est. Burford 2024
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight text-stone-50 drop-shadow-sm">
            The Cotswold <br />
            <span className="italic text-stone-200">Steep</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-stone-100/90 font-light md:text-xl">
            Fine coffee, heritage teas, and seasonal fare served in the heart of the high street.
          </p>
        </motion.div>

        {/* Quick Info Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 flex w-full max-w-4xl flex-col gap-6 md:flex-row md:justify-between md:items-end px-4"
        >
          <div className="flex flex-col gap-2 text-left">
            <div className="flex items-center gap-2 text-stone-200">
              <MapPin className="h-4 w-4" />
              <span className="text-sm uppercase tracking-wide">104 High St, Burford</span>
            </div>
            <div className="flex items-center gap-2 text-stone-200">
              <Clock className="h-4 w-4" />
              <span className="text-sm uppercase tracking-wide">Open Daily: 8am - 5pm</span>
            </div>
          </div>
          
          <button className="group flex items-center gap-2 rounded-none border-b border-white pb-1 text-sm font-medium uppercase tracking-widest text-white transition-all hover:border-stone-300 hover:text-stone-300">
            View Our Menu
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BurfordHero;
