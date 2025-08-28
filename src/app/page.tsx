"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const [count, setCount] = useState(0);

  const productos = [
    {
      name: "Buñuelos Tradicionales",
      price: "8.000",
      img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?fit=crop&w=600&q=80",
    },
    {
      name: "Buñuelos con Queso",
      price: "10.000",
      img: "https://images.unsplash.com/photo-1621996346565-7c634cf9f1ce?fit=crop&w=600&q=80",
    },
    {
      name: "Combo Buñuelos + Chocolate",
      price: "15.000",
      img: "https://images.unsplash.com/photo-1604908811444-0e69aa6ab0ec?fit=crop&w=600&q=80",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-yellow-100 via-orange-200 to-yellow-300">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-orange-700 drop-shadow-lg"
        >
          ¡Los Mejores Buñuelos! 🥯
        </motion.h1>
        <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
          Crujientes por fuera, suaves por dentro. Hechos con amor y tradición
          colombiana. ¡Pídelos ahora y disfruta el sabor todo el año!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCount(count + 1)}
          className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-xl transition"
        >
          Comprar Ahora ({count})
        </motion.button>
      </section>

      {/* Productos destacados */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 sm:p-8 w-full max-w-6xl">
        {productos.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition"
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="rounded-xl mb-4 object-cover w-full h-48"
              />
            </motion.div>
            <h3 className="text-xl font-bold text-orange-700 text-center">
              {item.name}
            </h3>
            <p className="text-gray-600 mt-2">Desde ${item.price} COP</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCount(count + 1)}
              className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium shadow-md"
            >
              Agregar 🛒
            </motion.button>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-orange-700 text-white w-full text-center py-6 mt-8">
        <p className="font-semibold">📍 Encuéntranos en tu barrio</p>
        <p className="text-sm mt-1">
          © {new Date().getFullYear()} Buñuelos Inge. Todos los derechos
          reservados.
        </p>
      </footer>
    </main>
  );
}
