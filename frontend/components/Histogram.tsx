'use client';
import dynamic from 'next/dynamic';
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

export default function Histogram({ counts }: { counts: Record<string, number> }) {
  const states = Object.keys(counts);
  const values = Object.values(counts);

  return (
    <Plot
      data={[{ type: 'bar', x: states, y: values, marker: { color: '#6366f1' } }]}
      layout={{
        title: 'Distribuição de Medições',
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: { color: '#fff' },
        xaxis: { title: 'Estado' },
        yaxis: { title: 'Contagem' },
      }}
      style={{ width: '100%', height: '400px' }}
    />
  );
}