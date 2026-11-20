const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function runGrover(target: string, iterations: number) {
  const res = await fetch(`${API_URL}/api/grover`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ target, iterations }),
  });
  if (!res.ok) throw new Error('Falha na execução do Grover');
  return res.json();
}

export async function runShor(N: number, a: number) {
  const res = await fetch(`${API_URL}/api/shor`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ N, a }),
  });
  if (!res.ok) throw new Error('Falha na execução do Shor');
  return res.json();
}