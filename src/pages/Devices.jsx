import React from 'react';
import { bueirosData } from '../data/mockData';
import { Search, Filter, Droplet, Battery } from 'lucide-react';

const DevicesList = () => {
  return (
    <div className="animate-fade-in">
      <div className="devices-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ marginBottom: '0.5rem' }}>Gestão de Equipamentos</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Status técnico de todos os receptores IoT e contêineres Ecocílios implantados.</p>
        </div>
        
        <div className="devices-actions" style={{ display: 'flex', gap: '1rem' }}>
          <div className="glass-panel flex-center" style={{ padding: '0.5rem 1rem', gap: '0.5rem' }}>
            <Search size={18} color="var(--text-muted)" />
            <input 
              type="text" 
              placeholder="Buscar por ID..." 
              style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', width: '200px', maxWidth: '100%' }}
            />
          </div>
          <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', whiteSpace: 'nowrap' }}>
            <Filter size={18} /> Filtrar
          </button>
        </div>
      </div>

      <div className="glass-panel" style={{ overflowX: 'auto', overflowY: 'hidden' }}>
        <table style={{ minWidth: '900px', width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--glass-border)' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', width: '15%' }}>ID Sensor</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', width: '20%' }}>Localização (Zonas)</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', width: '15%' }}>Obstrução</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', width: '20%' }}>Métricas Hídricas</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', width: '15%' }}>Hardware Info</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-secondary)', fontSize: '0.85rem', width: '15%' }}>Status API</th>
            </tr>
          </thead>
          <tbody>
            {bueirosData.map((bueiro, index) => (
              <tr key={bueiro.id} style={{ borderBottom: index === bueirosData.length - 1 ? 'none' : '1px solid var(--glass-border)', transition: 'background 0.2s ease' }} className="table-row-hover">
                <td style={{ padding: '1.25rem 1.5rem', fontWeight: 500 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: bueiro.status === 'normal' ? 'var(--success)' : bueiro.status === 'warning' ? 'var(--warning)' : 'var(--danger)' }}></div>
                    {bueiro.id}
                  </div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ marginBottom: '0.2rem' }}>{bueiro.location}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{bueiro.zone}</div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                    <div style={{ flex: 1, backgroundColor: 'var(--bg-tertiary)', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ backgroundColor: bueiro.garbageLevel > 80 ? 'var(--danger)' : bueiro.garbageLevel > 50 ? 'var(--warning)' : 'var(--accent-main)', height: '100%', width: `${bueiro.garbageLevel}%` }}></div>
                    </div>
                    <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{bueiro.garbageLevel}%</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Massa Sólida Retida</div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>pH Nível</span>
                      <strong style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: (bueiro.waterQuality.pH < 6.5 || bueiro.waterQuality.pH > 8) ? 'var(--warning)' : 'var(--text-primary)' }}>
                        <Droplet size={14} /> {bueiro.waterQuality.pH}
                      </strong>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.2rem' }}>Turbidez</span>
                      <strong style={{ color: bueiro.waterQuality.turbidity > 100 ? 'var(--warning)' : 'var(--text-primary)' }}>
                        {bueiro.waterQuality.turbidity} NTU
                      </strong>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: bueiro.battery < 20 ? 'var(--danger)' : 'var(--success)' }}>
                     <Battery size={16} /> 
                     <span>{bueiro.battery}%</span>
                   </div>
                   <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Recarga Solar</div>
                </td>
                <td style={{ padding: '1.25rem 1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <div style={{ width: 6, height: 6, backgroundColor: 'var(--success)', borderRadius: '50%', boxShadow: '0 0 5px var(--success)' }}></div>
                    Online
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Sync: {bueiro.lastUpdate}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <style>{`
          .table-row-hover:hover {
            background-color: var(--glass-bg) !important;
          }
        `}</style>
      </div>
    </div>
  );
};

export default DevicesList;
