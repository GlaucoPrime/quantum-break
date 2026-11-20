import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from quantum.grover import run_grover
from quantum.shor import run_shor

app = FastAPI(title="Quantum Break API")

# Endereços autorizados a acessar a API

allowed_origins = ["http://localhost:3000"]

frontend_url = os.getenv("FRONTEND_URL")

if frontend_url:
    allowed_origins.append(frontend_url.rstrip("/"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_origin_regex=r"https://.*\.vercel\.app",
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
            "circuit": str(circuit.draw(output="text")),
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
            "circuit": str(circuit.draw(output="text")),
            "factors": factors,
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
