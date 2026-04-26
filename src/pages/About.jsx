import React, { useState } from 'react';
import { Droplets, Users, Leaf, Zap, Github, ExternalLink, Info } from 'lucide-react';

const About = () => {
  const [openMember, setOpenMember] = useState(null);

  const team = [
    {
      name: 'Arthur Pereira Moreira',
      contribution: 'Impactos socioambientais (Projeto parcial) em coautoria com Gabriel e Joanderson.',
    },
    {
      name: 'Emanuel Arlan Sousa Silva Ferreira',
      contribution: 'Metodologia e prototipo (Projeto final).',
    },
    {
      name: 'Gabriel Cancio Simplicio dos Santos',
      contribution: 'Impactos socioambientais (Projeto parcial) em coautoria com Arthur e Joanderson.',
    },
    {
      name: 'Guilherme Luiz de Almeida Santos',
      contribution: 'Dados estatisticos (Projeto parcial).',
    },
    {
      name: 'Joanderson dos Santos de Almeida',
      contribution: 'Impactos socioambientais (Projeto parcial) em coautoria com Arthur e Gabriel.',
    },
    {
      name: 'Joao Victor Ferreira Gerson',
      contribution: 'Propostas semelhantes e cidades inteligentes (Projeto final).',
    },
    {
      name: 'Luis Henrique Batista Souza da Silva Santos',
      contribution: 'Viabilidade tecnica e custos de implementacao (Projeto final).',
    },
    {
      name: 'Luis Henrique Lourenço das Mercês',
      contribution: 'Contexto historico (Projeto parcial) e resultados (Projeto final).',
    },
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
        
        <div className="about-team-grid">
          {team.map((member, index) => (
            <div key={member.name} className="about-team-card">
              <p className="about-team-name">{member.name}</p>
              <button
                type="button"
                className="about-team-popover-btn"
                onClick={() => setOpenMember(openMember === index ? null : index)}
                aria-expanded={openMember === index}
              >
                <Info size={14} />
                Ver contribuicao
              </button>

              {openMember === index && (
                <div className="about-team-popover" role="dialog" aria-label={`Contribuicao de ${member.name}`}>
                  <p>{member.contribution}</p>
                </div>
              )}
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

      <p className="about-note">
        Avaliacao do processo da pesquisa desenvolvida: equipe em colaboracao (em consolidacao para versao final).
      </p>
    </div>
  );
};

export default About;
