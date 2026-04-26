import React, { useMemo, useRef, useState } from 'react';
import { Box, Move3D, Layers3, SearchCheck } from 'lucide-react';

const Prototype = () => {
  const [rotation, setRotation] = useState({ x: -18, y: 28 });
  const [zoom, setZoom] = useState(1);
  const [exploded, setExploded] = useState(false);
  const [selected, setSelected] = useState('cesto');
  const dragState = useRef({ active: false, x: 0, y: 0 });

  const parts = useMemo(
    () => [
      {
        id: 'tampa',
        name: 'Tampa Direcionadora',
        function: 'Canaliza água e resíduos para o interior do dispositivo, reduzindo o espalhamento.',
      },
      {
        id: 'cesto',
        name: 'Cesto Coletor Interno',
        function: 'Retém resíduos sólidos antes da entrada na rede pluvial principal.',
      },
      {
        id: 'sensor',
        name: 'Modulo IoT (Sensorial)',
        function: 'Monitora nível de carga, pH e turbidez, enviando dados para o painel digital.',
      },
      {
        id: 'base',
        name: 'Base de Fixacao',
        function: 'Estrutura de ancoragem para estabilidade mecânica e manutenção segura.',
      },
    ],
    []
  );

  const selectedPart = parts.find((part) => part.id === selected) ?? parts[0];

  const startDrag = (clientX, clientY) => {
    dragState.current = { active: true, x: clientX, y: clientY };
  };

  const updateDrag = (clientX, clientY) => {
    if (!dragState.current.active) return;
    const dx = clientX - dragState.current.x;
    const dy = clientY - dragState.current.y;
    dragState.current.x = clientX;
    dragState.current.y = clientY;

    setRotation((prev) => ({
      x: Math.max(-45, Math.min(45, prev.x - dy * 0.25)),
      y: prev.y + dx * 0.25,
    }));
  };

  const endDrag = () => {
    dragState.current.active = false;
  };

  return (
    <div className="prototype-page">
      <div className="prototype-header">
        <h1>Protótipo Físico Interativo</h1>
        <p>Arraste o modelo para explorar em 3D e visualizar os principais componentes do dispositivo EcoCílios.</p>
      </div>

      <div className="prototype-grid">
        <section className="glass-panel prototype-stage-panel">
          <div className="prototype-toolbar">
            <div className="prototype-toolbar-tag">
              <Move3D size={16} />
              Arraste para rotacionar
            </div>
            <div className="prototype-toolbar-tag">
              <Layers3 size={16} />
              Visão explodida
              <button
                type="button"
                className={`prototype-switch ${exploded ? 'active' : ''}`}
                onClick={() => setExploded((prev) => !prev)}
                aria-pressed={exploded}
              >
                {exploded ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          <div
            className="prototype-stage"
            onMouseDown={(e) => startDrag(e.clientX, e.clientY)}
            onMouseMove={(e) => updateDrag(e.clientX, e.clientY)}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={(e) => startDrag(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchMove={(e) => updateDrag(e.touches[0].clientX, e.touches[0].clientY)}
            onTouchEnd={endDrag}
          >
            <div
              className="prototype-model"
              style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${zoom})` }}
            >
              {/* Tampa Direcionadora */}
              <div 
                className={`proto-part proto-top ${selected === 'tampa' ? 'selected' : ''} ${exploded ? 'exploded' : ''}`} 
                onClick={() => setSelected('tampa')}
              >
                <div className="part-detail lid-opening"></div>
                <div className="part-detail lid-rim"></div>
                
                {selected === 'tampa' && (
                  <div className="part-label-hud">
                    <div className="hud-line"></div>
                    <div className="hud-content">
                      <span className="hud-tag">ID: TOP-01</span>
                      <h4>{parts[0].name}</h4>
                      <p>{parts[0].function}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Cesto Coletor */}
              <div 
                className={`proto-part proto-basket ${selected === 'cesto' ? 'selected' : ''} ${exploded ? 'exploded' : ''}`} 
                onClick={() => setSelected('cesto')}
              >
                <div className="part-detail basket-mesh"></div>
                <div className="part-detail basket-frame"></div>

                {selected === 'cesto' && (
                  <div className="part-label-hud right">
                    <div className="hud-line"></div>
                    <div className="hud-content">
                      <span className="hud-tag">ID: BSK-02</span>
                      <h4>{parts[1].name}</h4>
                      <p>{parts[1].function}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Módulo IoT */}
              <div 
                className={`proto-part proto-sensor ${selected === 'sensor' ? 'selected' : ''} ${exploded ? 'exploded' : ''}`} 
                onClick={() => setSelected('sensor')}
              >
                <div className="part-detail sensor-screen"></div>
                <div className="part-detail sensor-led"></div>
                <div className="part-detail sensor-led second"></div>

                {selected === 'sensor' && (
                  <div className="part-label-hud">
                    <div className="hud-line"></div>
                    <div className="hud-content">
                      <span className="hud-tag">ID: IOT-03</span>
                      <h4>{parts[2].name}</h4>
                      <p>{parts[2].function}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Base de Fixação */}
              <div 
                className={`proto-part proto-base ${selected === 'base' ? 'selected' : ''} ${exploded ? 'exploded' : ''}`} 
                onClick={() => setSelected('base')}
              >
                <div className="part-detail base-bolt bolt-1"></div>
                <div className="part-detail base-bolt bolt-2"></div>
                <div className="part-detail base-bolt bolt-3"></div>
                <div className="part-detail base-bolt bolt-4"></div>

                {selected === 'base' && (
                  <div className="part-label-hud right">
                    <div className="hud-line"></div>
                    <div className="hud-content">
                      <span className="hud-tag">ID: BAS-04</span>
                      <h4>{parts[3].name}</h4>
                      <p>{parts[3].function}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <label className="prototype-zoom">
            Zoom
            <input
              type="range"
              min="0.8"
              max="1.4"
              step="0.05"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
            />
          </label>
        </section>

        <section className="glass-panel prototype-info-panel">
          <h2>
            <SearchCheck size={20} />
            Componentes do Dispositivo
          </h2>

          <div className="prototype-list">
            {parts.map((part) => (
              <button
                key={part.id}
                type="button"
                className={`prototype-list-item ${selected === part.id ? 'active' : ''}`}
                onClick={() => setSelected(part.id)}
              >
                <Box size={16} />
                {part.name}
              </button>
            ))}
          </div>

          <div className="prototype-detail">
            <h3>{selectedPart.name}</h3>
            <p>{selectedPart.function}</p>
          </div>

          <div className="prototype-note">
            Esta visualização representa o conceito funcional do protótipo físico para comunicação técnica e validação da ideia.
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prototype;
