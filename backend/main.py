from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from quantum.grover import run_grover
from quantum.shor import run_shor

app = FastAPI(title="Quantum Break API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Permite o Next.js
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class GroverRequest(BaseModel):
    target: str
    iterations: int = 1

class ShorRequest(BaseModel):
    N: int
    a: int = 2

@app.post("/api/grover")
def api_grover(req: GroverRequest):
    try:
        counts, circuit = run_grover(req.target, req.iterations)
        return {
            "counts": counts,
            "circuit": str(circuit.draw(output="text")), # <--- O str() SALVA AQUI
            "target": req.target,
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/api/shor")
def api_shor(req: ShorRequest):
    try:
        counts, circuit, factors = run_shor(req.N, req.a)
        return {
            "counts": counts,
            "circuit": str(circuit.draw(output="text")), # <--- E AQUI TAMBÉM
            "factors": factors,
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))