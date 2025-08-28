"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [count, setCount] = useState(0);

  const productos = [
    { name: "Buñuelo Tradicional", price: "2.500", img: "/images/bunuelo-tradicional.png" },
    { name: "Buñuelo + Extra Queso", price: "3.000", img: "/images/bunuelo-queso.png" },
    { name: "Buñuelo + Extra Arequipe", price: "3.000", img: "/images/bunuelo-arequipe.png" },
    { name: "Buñuelo + Queso + Arequipe", price: "3.000", img: "/images/bunuelo-queso-arequipe.png" },
    { name: "Super Buñuelo + Extra Queso +  Extra Arequipe", price: "3.500", img: "/images/super-bunuelo-queso-arequipe.png" },
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
          ¡Buñuelos Días!
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

        {/* Botón WhatsApp */}
        <div className="mt-6">
          <Link
            href="https://wa.me/573223820637?text=Hola%20quiero%20hacer%20un%20pedido%20de%20buñuelos!%20🥯"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full shadow-lg transition transform hover:scale-110"
          >
            📲 Haz tu pedido
          </Link>
        </div>
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
