'use client';
import { motion } from 'framer-motion';
import { Shield, Search, Cpu } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-5xl mx-auto mt-10 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
        Laboratório de Criptografia Quântica
      </h1>
      <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
        Explore o poder destrutivo do Algoritmo de Shor contra o RSA e a aceleração de busca do Algoritmo de Grover, tudo simulado em tempo real com Qiskit.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/shor">
          <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-red-500/50 transition group cursor-pointer h-full">
            <Shield className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold mb-2 text-gray-100">Algoritmo de Shor</h2>
            <p className="text-gray-400">Veja como a fatoração quântica ameaça a criptografia RSA.</p>
          </div>
        </Link>

        <Link href="/grover">
          <div className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-cyan-500/50 transition group cursor-pointer h-full">
            <Search className="w-12 h-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold mb-2 text-gray-100">Algoritmo de Grover</h2>
            <p className="text-gray-400">Teste a busca quântica O(√N) com amplificação de amplitude.</p>
          </div>
        </Link>
      </div>
    </motion.div>
  );
}