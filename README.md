# ⚛️ Quantum Break

Plataforma de simulação de algoritmos quânticos (Shor e Grover).

## 🚀 Como rodar localmente

### 1. Backend (Python + FastAPI + Qiskit)
```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
uvicorn main:app --reload --port 8000