import React from 'react';
import { Droplets, Users, Leaf, Zap, Github, ExternalLink } from 'lucide-react';

const About = () => {
  const team = [
    'Arthur Pereira Moreira',
    'Emanuel Arlan Sousa Silva Ferreira',
    'Gabriel Cancio Simplicio dos Santos',
    'Guilherme Luiz de Almeida Santos',
    'Joanderson dos Santos de Almeida',
    'Joao Victor Ferreira Gerson',
    'Luis Henrique Batista Souza da Silva Santos',
    'Luis Henrique Lourenço das Mercês',
  ];

  return (
    <div className="about-container" style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Droplets size={48} className="gradient-text" />
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>EcoCílios</h1>
        </div>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', margin: '0.5rem 0' }}>
          Biomimética e Prevenção Inteligente de Enchentes Urbanas
        </p>
      </div>

      {/* About Section */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Sobre a Iniciativa</h2>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem' }}>
          <strong>EcoCílios</strong> é um protótipo de sistema inteligente de contenção de resíduos para bueiros que integra design mecânico inspirado na mata ciliar (biomimética) e Internet das Coisas (IoT). O projeto foi desenvolvido como atividade extensionista na disciplina <strong>"Ciência, Natureza e Sociedade"</strong> da Universidade Católica do Salvador.
        </p>
        
        <h3 style={{ fontSize: '1.3rem', marginTop: '1.5rem', marginBottom: '1rem' }}>O Problema</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          As enchentes urbanas representam uma crise ambiental severa agravada pelo descarte inadequado de resíduos sólidos, que obstrui bueiros e contamina recursos hídricos. No Brasil, especialmente na região Sudeste, desastres climáticos extremos afetam populações vulneráveis de forma desproporcional, refletindo a ausência de planejamento urbano eficaz e infraestrutura de drenagem adequada.
        </p>
      </div>

      {/* Solution Features */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Leaf size={28} className="gradient-text" />
            <h3 style={{ margin: 0 }}>Barreira Física</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Filtra e direciona resíduos para um cesto coletor interno, protegendo a infraestrutura de drenagem.</p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Zap size={28} className="gradient-text" />
            <h3 style={{ margin: 0 }}>IoT em Tempo Real</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Sensores rastreiam nível de lixo, integridade do equipamento e qualidade da água (pH e turbidez).</p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Droplets size={28} className="gradient-text" />
            <h3 style={{ margin: 0 }}>Plataforma Inteligente</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Dados em nuvem permitem rotas de limpeza preditivas e prevenção de desastres ambientais.</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Users size={28} className="gradient-text" />
          <h2 style={{ margin: 0, fontSize: '1.8rem' }}>Equipe EcoCílios</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {team.map((member, index) => (
            <div key={index} style={{ padding: '1rem', backgroundColor: 'rgba(16, 185, 129, 0.05)', borderRadius: '0.75rem', borderLeft: '3px solid var(--success)' }}>
              <p style={{ margin: 0, color: 'var(--text-primary)' }}>{member}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(59, 130, 246, 0.05)', borderRadius: '0.75rem' }}>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <strong>Instituição:</strong> Universidade Católica do Salvador
          </p>
          <p style={{ margin: '0.5rem 0 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            <strong>Período:</strong> 2026.1
          </p>
        </div>
      </div>

      {/* Repository Link */}
      <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Código aberto e colaborativo • Contribuições bem-vindas
        </p>
        <a 
          href="https://github.com/emn-f/ecocilios" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'var(--success)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '0.5rem',
            fontSize: '0.95rem',
            fontWeight: 500,
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          <Github size={18} />
          Ver Repositório no GitHub
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default About;
