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
    <div className="about-page">
      {/* Header */}
      <div className="about-header">
        <div className="about-title-row">
          <Droplets size={44} className="gradient-text" />
          <h1 className="about-title">EcoCílios</h1>
        </div>
        <p className="about-subtitle">
          Biomimética e Prevenção Inteligente de Enchentes Urbanas
        </p>
      </div>

      {/* About Section */}
      <section className="glass-panel about-section">
        <h2 className="about-section-title">Sobre a Iniciativa</h2>
        <p className="about-body-text">
          <strong>EcoCílios</strong> é um protótipo de sistema inteligente de contenção de resíduos para bueiros que integra design mecânico inspirado na mata ciliar (biomimética) e Internet das Coisas (IoT). O projeto foi desenvolvido como atividade extensionista na disciplina <strong>"Ciência, Natureza e Sociedade"</strong> da Universidade Católica do Salvador.
        </p>
        
        <h3 className="about-subsection-title">O Problema</h3>
        <p className="about-body-text">
          As enchentes urbanas representam uma crise ambiental severa agravada pelo descarte inadequado de resíduos sólidos, que obstrui bueiros e contamina recursos hídricos. No Brasil, especialmente na região Sudeste, desastres climáticos extremos afetam populações vulneráveis de forma desproporcional, refletindo a ausência de planejamento urbano eficaz e infraestrutura de drenagem adequada.
        </p>
      </section>

      {/* Solution Features */}
      <section className="about-feature-grid">
        <div className="glass-panel about-feature-card">
          <div className="about-feature-head">
            <Leaf size={28} className="gradient-text" />
            <h3>Barreira Fisica</h3>
          </div>
          <p>Filtra e direciona residuos para um cesto coletor interno, protegendo a infraestrutura de drenagem.</p>
        </div>

        <div className="glass-panel about-feature-card">
          <div className="about-feature-head">
            <Zap size={28} className="gradient-text" />
            <h3>IoT em Tempo Real</h3>
          </div>
          <p>Sensores rastreiam nivel de lixo, integridade do equipamento e qualidade da agua (pH e turbidez).</p>
        </div>

        <div className="glass-panel about-feature-card">
          <div className="about-feature-head">
            <Droplets size={28} className="gradient-text" />
            <h3>Plataforma Inteligente</h3>
          </div>
          <p>Dados em nuvem permitem rotas de limpeza preditivas e prevencao de desastres ambientais.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="glass-panel about-section">
        <div className="about-team-header">
          <Users size={28} className="gradient-text" />
          <h2 className="about-section-title">Equipe EcoCílios</h2>
        </div>

        <p className="about-team-description">
          Equipe participante da pesquisa, do desenvolvimento e da validacao do prototipo EcoCilios.
        </p>
        
        <div className="about-team-grid">
          {team.map((member) => (
            <div key={member} className="about-team-card">
              <p className="about-team-name">{member}</p>
            </div>
          ))}
        </div>

        <div className="about-meta-card">
          <p>
            <strong>Instituição:</strong> Universidade Católica do Salvador
          </p>
          <p>
            <strong>Período:</strong> 2026.1
          </p>
        </div>
      </section>

      {/* Repository Link */}
      <section className="glass-panel about-repo-panel">
        <p className="about-repo-text">
          Código aberto e colaborativo • Contribuições bem-vindas
        </p>
        <a
          href="https://github.com/emn-f/ecocilios"
          target="_blank"
          rel="noopener noreferrer"
          className="about-repo-link"
        >
          <Github size={18} />
          Ver Repositório no GitHub
          <ExternalLink size={16} />
        </a>
      </section>
    </div>
  );
};

export default About;
