import { motion } from "framer-motion";

export const SteepStory = () => {
  return (
    <section className="bg-stone-900 py-24 text-stone-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 lg:gap-24">
        {/* Image Grid */}
        <div className="relative grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 aspect-[16/9] overflow-hidden rounded-lg"
          >
            <img
              src="/images/interior-cozy.jpg"
              alt="Cozy interior"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="aspect-square overflow-hidden rounded-lg"
          >
            <img
              src="/images/coffee-pour.jpg"
              alt="Pouring coffee"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="aspect-square overflow-hidden rounded-lg"
          >
            <img
              src="/images/pastries-detail.jpg"
              alt="Fresh pastries"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <span className="mb-4 text-sm font-bold uppercase tracking-widest text-amber-500">
            Our Story
          </span>
          <h2 className="mb-8 font-serif text-5xl leading-tight md:text-6xl">
            A quiet corner in <br/>
            <span className="text-stone-400">the bustling high street.</span>
          </h2>
          <div className="space-y-6 text-lg font-light leading-relaxed text-stone-300">
            <p>
              The Cotswold Steep began with a simple idea: to bring the precision of modern coffee brewing to the timeless warmth of a Burford cottage.
            </p>
            <p>
              Housed in a Grade II listed building that has stood since 1740, we honor the structure's history while serving roasts that look forward. Whether you are escaping the rain or meeting an old friend, our hearth is always lit.
            </p>
          </div>
          <div className="mt-10">
            <button className="rounded-none border border-stone-600 px-8 py-3 text-sm font-medium uppercase tracking-widest text-stone-300 transition-colors hover:bg-stone-800 hover:text-white">
              Read Our Journal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteepStory;
