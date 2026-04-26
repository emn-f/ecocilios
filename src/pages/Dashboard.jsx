import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { AlertCircle, Waves, BatteryWarning, Info } from 'lucide-react';
import { bueirosData, volumeHistory } from '../data/mockData';

const Dashboard = () => {
  const criticalCount = bueirosData.filter(b => b.status === 'danger').length;
  const warningCount = bueirosData.filter(b => b.status === 'warning').length;
  const safeCount = bueirosData.filter(b => b.status === 'normal').length;
  
  const avgGarbage = (bueirosData.reduce((acc, curr) => acc + curr.garbageLevel, 0) / bueirosData.length).toFixed(1);

  return (
    <div className="animate-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>Visão Global do Ecossistema</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Métricas analíticas extraídas via biomimética e sensores IoT dos bueiros.</p>
      </div>

      {/* KPI Cards */}
      <div className="card-grid">
        <div className="glass-panel kpi-card">
          <div className="kpi-header">
            <span className="kpi-title">Nível Médio de Obstrução</span>
            <span className="badge badge-normal">Tolerável</span>
          </div>
          <div className="kpi-value">{avgGarbage}%</div>
          <div className="kpi-subtitle" style={{ color: 'var(--text-muted)' }}>Carga sólida nos cestos filtrantes</div>
          
          {/* Progress Bar */}
          <div style={{ height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', marginTop: '0.5rem', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${avgGarbage}%`, background: 'var(--accent-main)' }}></div>
          </div>
        </div>

        <div className="glass-panel kpi-card" style={{ borderLeft: '3px solid var(--danger)' }}>
          <div className="kpi-header">
            <span className="kpi-title">Infraestruturas Críticas</span>
            <AlertCircle color="var(--danger)" size={20} />
          </div>
          <div className="kpi-value">{criticalCount}</div>
          <div className="kpi-subtitle" style={{ color: 'var(--danger)' }}>Necessitam de limpeza emergencial ou intervenção</div>
        </div>

        <div className="glass-panel kpi-card" style={{ borderLeft: '3px solid var(--warning)' }}>
          <div className="kpi-header">
            <span className="kpi-title">Anomalias Químicas (pH)</span>
            <Waves color="var(--warning)" size={20} />
          </div>
          <div className="kpi-value">1</div>
          <div className="kpi-subtitle" style={{ color: 'var(--text-muted)' }}>Suspeita de despejo industrial clandestino</div>
        </div>

        <div className="glass-panel kpi-card">
          <div className="kpi-header">
            <span className="kpi-title">Rede Funcional</span>
            <span className="badge badge-success">Operante</span>
          </div>
          <div className="kpi-value">{safeCount}/{bueirosData.length}</div>
          <div className="kpi-subtitle" style={{ color: 'var(--text-muted)' }}>Sensores operacionais com fluidez contínua</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '1.5rem', overflow: 'hidden' }}>
        {/* Chart 1: Volume Histórico */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Volume de Resíduos Retidos (Kg)</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Total interceptado nos dutos nos últimos 7 dias</p>
          </div>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={volumeHistory}>
                <defs>
                  <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-main)" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="var(--accent-main)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--glass-border)" vertical={false} />
                <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px', color: 'var(--text-primary)' }}
                />
                <Area type="monotone" dataKey="volumeKg" stroke="var(--accent-main)" strokeWidth={3} fillOpacity={1} fill="url(#colorVolume)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Qualidade da Água */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Turbidez e Agravantes</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Identificação de barro ou esgoto irregular</p>
            </div>
            <div style={{ backgroundColor: 'var(--glass-bg)', padding: '0.5rem', borderRadius: '8px' }}>
              <Info size={18} color="var(--text-secondary)" />
            </div>
          </div>
          <div style={{ height: '300px', width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--glass-border)" vertical={false} />
                <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: 'var(--glass-bg)'}}
                  contentStyle={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--glass-border)', borderRadius: '8px' }}
                />
                <Bar dataKey="turbidity" fill="var(--accent-secondary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
