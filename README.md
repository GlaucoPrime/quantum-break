<div align="center">

# ⚛️ Quantum Break

**Laboratório Interativo de Cibersegurança Pós-Quântica**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Qiskit](https://img.shields.io/badge/Qiskit-6929C4?style=for-the-badge&logo=qiskit)](https://qiskit.org/)

*Explore o poder destrutivo do Algoritmo de Shor contra o RSA e a aceleração de busca do Algoritmo de Grover, com simulações quânticas reais executadas em tempo real.*

</div>

---

## 🎯 Sobre o Projeto

O **Quantum Break** é uma aplicação full-stack que demonstra, de forma interativa e visual, como a computação quântica impacta a criptografia moderna. O projeto separa o poder de simulação (backend) da experiência do usuário (frontend), oferecendo uma interface moderna e responsiva.

### ✨ Funcionalidades Principais

- **🔐 Algoritmo de Shor:** Simulação interativa da fatoração de números inteiros, a base da ameaça teórica ao RSA.
- **🔍 Algoritmo de Grover:** Demonstração da busca quântica com amplificação de amplitude, comparando a eficiência clássica com a quântica.
- **📊 Visualização de Circuitos:** Renderização didática dos circuitos quânticos gerados pelo Qiskit.
- **📈 Histogramas Interativos:** Gráficos de distribuição de medições com Plotly.

## 🏗️ Arquitetura

O sistema é dividido em dois serviços independentes, permitindo deploy e escalabilidade separados:

| Camada | Tecnologias | Responsabilidade |
| :--- | :--- | :--- |
| **Frontend** | Next.js, React, TypeScript, Tailwind CSS, Framer Motion | Interface do usuário, visualização de dados e interações |
| **Backend** | Python, FastAPI, Qiskit, Qiskit Aer | Construção e simulação dos circuitos quânticos |

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v18+) e npm
- Python (v3.10+)

### 1. Backend (FastAPI + Qiskit)
```bash
# Na pasta raiz do projeto
cd backend
python -m venv venv
# Windows: venv\Scripts\activate
# Linux/macOS: source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
