"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechStackScroll() {
  const technologies = [
    { name: "Azure Synapse Analytics", url: "https://ik.imagekit.io/qujrbo6v2/Azure%20Synapse%20Analytics%20Logo.webp" },
    { name: "Azure", url: "https://ik.imagekit.io/qujrbo6v2/azure-icon.svg" },
    { name: "Data Factory", url: "https://ik.imagekit.io/qujrbo6v2/data_factory.png" },
    { name: "Databricks", url: "https://ik.imagekit.io/qujrbo6v2/databricks.png" },
    { name: "Azure DevOps", url: "https://ik.imagekit.io/qujrbo6v2/azure-devops.png" },
    { name: "PySpark", url: "https://ik.imagekit.io/qujrbo6v2/pyspark.png" },
    { name: "Agile", url: "https://ik.imagekit.io/qujrbo6v2/agile.png" },
    { name: "Python", url: "https://ik.imagekit.io/qujrbo6v2/python_logo.png" },
    { name: "Fabric", url: "https://ik.imagekit.io/qujrbo6v2/Fabric_logo.webp" },
    { name: "Azure SQL DB", url: "https://ik.imagekit.io/qujrbo6v2/azure_sql_db.png" },
  ];

  // Duplicate the array for seamless scrolling
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
        >
          Tools You will Master
        </motion.h2>
        <p className="text-center text-gray-600 mt-2">
          Learn industry-leading technologies used by top data engineers
        </p>
      </div>

      <div className="relative px-40">
        {/* Gradient overlays for fade effect on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 py-8"
            animate={{ x: [-1200, 0] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedTechs.map((tech, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-32 h-32 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
              >
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                  <Image
                    src={tech.url}
                    alt={tech.name}
                    width={80}
                    height={80}
                    className="h-20 w-auto object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <p className="text-sm font-medium text-gray-700 line-clamp-2 group-hover:text-blue-600">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
