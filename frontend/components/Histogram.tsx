
'use client';

import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), {
  ssr: false,
});

export default function Histogram({
  counts,
}: {
  counts: Record<string, number>;
}) {
  const states = Object.keys(counts);
  const values = Object.values(counts);

  return (
    <Plot
      data={[
        {
          type: 'bar',
          x: states,
          y: values,
          marker: { color: '#6366f1' },
        },
      ]}
      layout={{
        title: {
          text: 'Distribuição de Medições',
        },
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: { color: '#fff' },
        xaxis: {
          title: { text: 'Estado' },
        },
        yaxis: {
          title: { text: 'Contagem' },
        },
      }}
      config={{
        responsive: true,
        displayModeBar: false,
      }}
      style={{
        width: '100%',
        height: '400px',
      }}
    />
  );
}
