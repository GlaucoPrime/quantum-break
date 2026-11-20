from qiskit import QuantumCircuit, transpile
from qiskit_aer import AerSimulator
from qiskit.circuit.library import GroverOperator
import numpy as np

def build_grover_oracle(target: str) -> QuantumCircuit:
    """Cria um oráculo que marca o estado alvo com uma fase negativa."""
    n = len(target)
    qc = QuantumCircuit(n)
    # Aplica X nos qubits onde o alvo é '0' para inverter a lógica
    for i, bit in enumerate(reversed(target)):
        if bit == '0':
            qc.x(i)
    # Porta CZ multiparticular (controlada em todos os qubits)
    qc.h(n - 1)
    qc.mcx(list(range(n - 1)), n - 1)
    qc.h(n - 1)
    # Desfaz os X
    for i, bit in enumerate(reversed(target)):
        if bit == '0':
            qc.x(i)
    return qc

def run_grover(target: str, iterations: int = 1):
    """Executa o algoritmo de Grover e retorna as contagens."""
    n = len(target)
    oracle = build_grover_oracle(target)
    grover_op = GroverOperator(oracle)
    qc = QuantumCircuit(n)
    qc.h(range(n))
    for _ in range(iterations):
        qc.compose(grover_op, inplace=True)
    qc.measure_all()

    sim = AerSimulator()
    compiled = transpile(qc, sim)
    result = sim.run(compiled, shots=1024).result()
    counts = result.get_counts()
    # Normaliza as chaves
    counts = {k.replace(' ', ''): v for k, v in counts.items()}
    return counts, qc