'use client';

export default function CircuitViewer({ circuitText }: { circuitText: string }) {
  return (
    <div className="border border-gray-700 rounded-lg p-4 bg-gray-950 text-cyan-300 font-mono text-sm overflow-x-auto">
      <pre>{circuitText}</pre>
    </div>
  );
}