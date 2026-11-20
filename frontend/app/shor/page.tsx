'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { runShor } from '@/lib/api';
import Histogram from '@/components/Histogram';
import CircuitViewer from '@/components/CircuitViewer';

export default function ShorPage() {
  const [N, setN] = useState(15);
  const [a, setA] = useState(2);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    try {
      const data = await runShor(N, a);
      setResult(data);
    } catch (e) {
      alert('Erro ao executar Shor. Verifique o backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
          Algoritmo de Shor
        </h1>
        <p className="text-gray-400 text-lg">
          A fatoração de números inteiros é a base da segurança do RSA. Insira valores pequenos (ex: N=15) para ver o simulador em ação.
        </p>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-wrap gap-4 items-end mb-8">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Número Composto (N)</label>
          <input
            type="number"
            value={N}
            onChange={(e) => setN(Number(e.target.value))}
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 outline-none w-32"
            min={4}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Base (a)</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-red-500 outline-none w-32"
            min={2}
          />
        </div>
        <button
          onClick={handleRun}
          disabled={loading}
          className="px-6 py-2 bg-red-600 hover:bg-red-500 disabled:bg-gray-700 rounded-lg font-semibold transition"
        >
          {loading ? 'Calculando...' : 'Fatorar N'}
        </button>
      </div>

      {result && (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-red-900/30">
            <h3 className="text-xl font-semibold mb-2 text-gray-200">Fatores Encontrados</h3>
            <p className="text-3xl text-red-400 font-mono">{result.factors.join(' × ')}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Distribuição de Medições</h3>
            <Histogram counts={result.counts} />
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Circuito Quântico</h3>
            <CircuitViewer circuitText={result.circuit} />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}