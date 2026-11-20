import Link from 'next/link';
import { Atom, Shield, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition">
          <Atom className="w-6 h-6 text-cyan-400" />
          Quantum Break
        </Link>
        <div className="flex gap-6 font-medium">
          <Link href="/shor" className="flex items-center gap-2 hover:text-red-400 transition text-gray-300">
            <Shield className="w-4 h-4" /> Shor
          </Link>
          <Link href="/grover" className="flex items-center gap-2 hover:text-cyan-400 transition text-gray-300">
            <Search className="w-4 h-4" /> Grover
          </Link>
        </div>
      </div>
    </nav>
  );
}