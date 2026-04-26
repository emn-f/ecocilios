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
        function: 'Canaliza agua e residuos para o interior do dispositivo, reduzindo espalhamento.',
      },
      {
        id: 'cesto',
        name: 'Cesto Coletor Interno',
        function: 'Retem residuos solidos antes da entrada na rede pluvial principal.',
      },
      {
        id: 'sensor',
        name: 'Modulo IoT (sensorial)',
        function: 'Monitora nivel de carga, pH e turbidez, enviando dados para o painel digital.',
      },
      {
        id: 'base',
        name: 'Base de Fixacao',
        function: 'Estrutura de ancoragem para estabilidade mecanica e manutencao segura.',
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
        <h1>Prototipo Fisico Interativo</h1>
        <p>Arraste o modelo para explorar em 3D e veja os principais componentes do dispositivo EcoCilios.</p>
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
              Visao explodida
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
              <div className={`proto-part proto-top ${selected === 'tampa' ? 'selected' : ''} ${exploded ? 'exploded' : ''}`} onClick={() => setSelected('tampa')}>
                Tampa
              </div>
              <div className={`proto-part proto-basket ${selected === 'cesto' ? 'selected' : ''} ${exploded ? 'exploded' : ''}`} onClick={() => setSelected('cesto')}>
                Cesto
              </div>
              <div className={`proto-part proto-sensor ${selected === 'sensor' ? 'selected' : ''} ${exploded ? 'exploded' : ''}`} onClick={() => setSelected('sensor')}>
                IoT
              </div>
              <div className={`proto-part proto-base ${selected === 'base' ? 'selected' : ''} ${exploded ? 'exploded' : ''}`} onClick={() => setSelected('base')}>
                Base
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
            Esta visualizacao representa o conceito funcional do prototipo fisico para comunicacao tecnica e validacao da ideia.
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prototype;
