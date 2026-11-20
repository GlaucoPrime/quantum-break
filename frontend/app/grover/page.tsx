'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { runGrover } from '@/lib/api';
import Histogram from '@/components/Histogram';
import CircuitViewer from '@/components/CircuitViewer';

export default function GroverPage() {
  const [target, setTarget] = useState('11');
  const [iterations, setIterations] = useState(1);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    try {
      const data = await runGrover(target, iterations);
      setResult(data);
    } catch (e) {
      alert('Erro ao executar Grover');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Algoritmo de Grover
      </h1>
      <p className="text-gray-300 mb-6">
        Busca quântica com aceleração quadrática. Selecione o alvo e o número de iterações.
      </p>

      <div className="flex gap-4 mb-6">
        <input
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700"
          placeholder="Alvo (ex: 11)"
        />
        <input
          type="number"
          value={iterations}
          onChange={(e) => setIterations(Number(e.target.value))}
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700 w-24"
          min={1}
        />
        <button
          onClick={handleRun}
          disabled={loading}
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded font-semibold transition"
        >
          {loading ? 'Executando...' : 'Executar Grover'}
        </button>
      </div>

      {result && (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="space-y-6">
          <Histogram counts={result.counts} />
          <CircuitViewer circuitText={result.circuit} />
        </motion.div>
      )}
    </motion.div>
  );
}