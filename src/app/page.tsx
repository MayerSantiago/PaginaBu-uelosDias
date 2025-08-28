"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-yellow-100 via-orange-200 to-yellow-300">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-6xl font-extrabold text-orange-700 drop-shadow-lg animate-bounce">
          ¡Los Mejores Buñuelos! 🥯
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto">
          Crujientes por fuera, suaves por dentro. Hechos con amor y tradición colombiana.  
          ¡Pídelos ahora y disfruta el sabor todo el año!
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full shadow-xl transition-transform transform hover:scale-110"
        >
          Comprar Ahora ({count})
        </button>
      </section>

      {/* Productos destacados */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 w-full max-w-6xl">
        {[
          { name: "Buñuelos Tradicionales", price: "8.000", img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?fit=crop&w=600&q=80" },
          { name: "Buñuelos con Queso", price: "10.000", img: "https://images.unsplash.com/photo-1621996346565-7c634cf9f1ce?fit=crop&w=600&q=80" },
          { name: "Combo Buñuelos + Chocolate", price: "15.000", img: "https://images.unsplash.com/photo-1604908811444-0e69aa6ab0ec?fit=crop&w=600&q=80" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 transform hover:scale-105 transition-all"
          >
            <img src={item.img} alt={item.name} className="rounded-xl mb-4 h-48 w-full object-cover" />
            <h3 className="text-xl font-bold text-orange-700">{item.name}</h3>
            <p className="text-gray-600 mt-2">Desde ${item.price} COP</p>
            <button
              onClick={() => setCount(count + 1)}
              className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium shadow-md"
            >
              Agregar 🛒
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-orange-700 text-white w-full text-center py-6 mt-8">
        <p className="font-semibold">📍 Encuéntranos en tu barrio</p>
        <p className="text-sm mt-1">© {new Date().getFullYear()} Buñuelos Inge. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

