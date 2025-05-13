// src/pages/Tokenomics.tsx
import React from 'react';
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogClose,
} from '../../components/ui/dialog';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import detailsImg from '../assets/images/token-details.png';
import distributionImg from '../assets/images/token-distribution.png';
import vestingImg from '../assets/images/token-vesting.png';
import './Tokenomics.css';

const allocationData = [
  { name: 'Comunidade', value: 40 },
  { name: 'Marketing', value: 20 },
  { name: 'Liquidez', value: 15 },
  { name: 'Equipe', value: 10 },
  { name: 'Recompensas', value: 10 },
  { name: 'Reserva', value: 5 },
];

export default function Tokenomics() {
  return (
    <section className="tokenomics-page">
      <div className="tokenomics-inner">
        <header className="tokenomics-header">
          <h1>Tokenomics</h1>
          <p>Entenda como os <span className="emo">EMOCOIN</span> são distribuídos e gerenciados.</p>
        </header>

        <div className="tokenomics-grid">
          {/* Card Detalhes */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="tokenomics-card">
                <h3>Detalhes do Token</h3>
                <p>Veja todas as informações básicas.</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Detalhes do Token</DialogTitle>
              </DialogHeader>
              <img src={detailsImg} alt="Detalhes do Token" className="mb-4 rounded-lg" />
              <DialogDescription>
                <p><strong>Nome:</strong> EmoCoin</p>
                <p><strong>Símbolo:</strong> EMO</p>
                <p><strong>Network:</strong> Ethereum (ERC-20)</p>
                <p><strong>Total Supply:</strong> 1.000.000.000 EMO</p>
                <p><strong>Decimals:</strong> 18</p>
                <p><strong>Contrato:</strong> <code>0xYourContractAddress</code></p>
              </DialogDescription>
              <DialogClose asChild>
                <button className="btn-secondary mt-4">Fechar</button>
              </DialogClose>
            </DialogContent>
          </Dialog>

          {/* Card Distribuição */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="tokenomics-card">
                <h3>Distribuição</h3>
                <p>Como os tokens são alocados.</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Distribuição de Tokens</DialogTitle>
              </DialogHeader>
              <img src={distributionImg} alt="Gráfico Distribuição" className="mb-4 rounded-lg" />
              <DialogDescription>
                <div style={{ width: '100%', height: 250 }}>
                  <ResponsiveContainer>
                    <BarChart data={allocationData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="var(--btn-primary-bg)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </DialogDescription>
              <DialogClose asChild>
                <button className="btn-secondary mt-4">Fechar</button>
              </DialogClose>
            </DialogContent>
          </Dialog>

          {/* Card Vesting */}
          <Dialog>
            <DialogTrigger asChild>
              <div className="tokenomics-card">
                <h3>Cronograma de Vesting</h3>
                <p>Regras de liberação ao longo do tempo.</p>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cronograma de Vesting</DialogTitle>
              </DialogHeader>
              <img src={vestingImg} alt="Cronograma de Vesting" className="mb-4 rounded-lg" />
              <DialogDescription>
                <ul>
                  <li>Equipe: 12 meses com cliff de 3 meses</li>
                  <li>Recompensas: Liberadas ao longo de 6 meses</li>
                  <li>Reserva: Bloqueadas por 12 meses, liberando 10% a cada trimestre</li>
                </ul>
              </DialogDescription>
              <DialogClose asChild>
                <button className="btn-secondary mt-4">Fechar</button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
