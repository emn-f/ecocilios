import React, { useState } from 'react';
import { bueirosData } from '../data/mockData';
import { Navigation, AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

const DevicesMap = () => {
  const [selectedPin, setSelectedPin] = useState(null);

  const getStatusColor = (status) => {
    switch(status) {
      case 'danger': return 'var(--danger)';
      case 'warning': return 'var(--warning)';
      default: return 'var(--success)';
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ marginBottom: '0.5rem' }}>Mapeamento Operacional</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Visão geográfica de atuação das matrizes do EcoCílios na malha urbana.</p>
      </div>

      <div className="map-container">
        {/* Painel Tático Visual - Mapa Simulado */}
        <div className="glass-panel" style={{ flex: 1, position: 'relative', overflow: 'hidden', padding: '1rem', backgroundImage: 'radial-gradient(var(--glass-border) 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundColor: 'var(--bg-secondary)' }}>
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '1rem', zIndex: 10 }}>
            <span className="badge badge-success"><div className="status-dot status-normal" style={{ background: 'var(--success)' }}></div> Monitorado</span>
            <span className="badge badge-warning"><div className="status-dot status-warning"></div> Atenção</span>
            <span className="badge badge-danger"><div className="status-dot status-danger"></div> Crítico</span>
          </div>
          
          <div style={{ width: '100%', height: '100%', position: 'relative', minHeight: '400px' }}>
            {bueirosData.map((bueiro) => (
              <div 
                key={bueiro.id}
                onClick={() => setSelectedPin(bueiro)}
                style={{
                  position: 'absolute',
                  top: `${bueiro.y}%`,
                  left: `${bueiro.x}%`,
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  zIndex: selectedPin?.id === bueiro.id ? 20 : 1,
                }}
              >
                <div style={{ position: 'relative' }}>
                  <div 
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      backgroundColor: getStatusColor(bueiro.status),
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 15px ${getStatusColor(bueiro.status)}`,
                      transition: 'transform 0.2s ease',
                      transform: selectedPin?.id === bueiro.id ? 'scale(1.3)' : 'scale(1)'
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%' }}></div>
                  </div>
                  
                  {bueiro.status === 'danger' && (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '50%', backgroundColor: 'transparent', border: `2px solid ${getStatusColor(bueiro.status)}`, animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
                  )}
                  
                  <style>{`
                    @keyframes ping {
                      75%, 100% {
                        transform: scale(2.5);
                        opacity: 0;
                      }
                    }
                  `}</style>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detalhe do Bueiro */}
        <div className="map-details">
          {selectedPin ? (
            <div className="glass-panel" style={{ padding: '1.5rem', animation: 'fadeIn 0.3s ease', height: '100%', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{selectedPin.id}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Navigation size={14} /> {selectedPin.zone}
                  </p>
                </div>
                <span className={`badge badge-${selectedPin.status}`}>
                  {selectedPin.status.toUpperCase()}
                </span>
              </div>

              <div style={{ width: '100%', height: '150px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '1.5rem', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Visão de Câmera da Grade (Simulação)</span>
                {/* Visual indicator of garbage */}
                <div style={{ position: 'absolute', bottom: 0, width: '100%', height: `${selectedPin.garbageLevel}%`, backgroundColor: 'rgba(239, 68, 68, 0.2)', backdropFilter: 'blur(2px)' }}></div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Obstrução Biomimética</span>
                  <strong style={{ color: selectedPin.garbageLevel > 80 ? 'var(--danger)' : 'var(--text-primary)' }}>{selectedPin.garbageLevel}%</strong>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Qualidade (pH)</span>
                  <strong style={{ color: selectedPin.waterQuality.pH < 6.5 || selectedPin.waterQuality.pH > 8 ? 'var(--warning)' : 'var(--success)' }}>
                    {selectedPin.waterQuality.pH}
                  </strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Bateria do Sensor</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {selectedPin.battery < 20 && <Zap size={14} color="var(--danger)" />}
                    <strong style={{ color: selectedPin.battery < 20 ? 'var(--danger)' : 'var(--text-primary)' }}>{selectedPin.battery}%</strong>
                  </div>
                </div>
              </div>

              {selectedPin.alerts.length > 0 && (
                <div style={{ marginTop: '1.5rem', backgroundColor: 'var(--danger-bg)', border: '1px solid rgba(239,68,68,0.3)', padding: '1rem', borderRadius: '8px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--danger)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    <AlertTriangle size={16} /> Alertas Ativos
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', color: 'var(--danger)', fontSize: '0.85rem', margin: 0 }}>
                    {selectedPin.alerts.map((a, i) => <li key={i} style={{ marginBottom: '0.3rem' }}>{a}</li>)}
                  </ul>
                </div>
              )}

              <button className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>Despachar Equipe de Limpeza</button>
            </div>
          ) : (
            <div className="glass-panel flex-center" style={{ height: '100%', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>
              <ShieldCheck size={48} opacity={0.5} />
              <p>Selecione um nodo no mapa tático para analisar as condições da malha pluvial em tempo real.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DevicesMap;
