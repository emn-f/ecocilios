import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Droplets, ShieldCheck, ArrowRight, Github } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simula tempo de rede
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 1200);
  };

  return (
    <div className="login-container">
      {/* Coluna Visual (Esquerda) */}
      <div className="login-left">
        <div style={{ maxWidth: '600px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Droplets size={48} className="gradient-text" />
            <h1 style={{ fontSize: '3rem', margin: 0 }}>EcoCílios</h1>
          </div>
          <h2 style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontWeight: 400 }}>
            Biomimética e IoT em defesa da <span className="gradient-text" style={{ fontWeight: 600 }}>Célula Urbana</span>.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Sistema inteligente de contenção de resíduos para bueiros. Monitoramento preditivo de enchentes, análise da qualidade da água e gestão em tempo real da infraestrutura pluvial.
          </p>
          {/* Badge de segurança */}
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: 'var(--success-bg)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
            <ShieldCheck size={32} color="var(--success)" />
            <div>
              <h4 style={{ margin: 0, color: 'var(--success)' }}>Infraestrutura Protegida</h4>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>O sistema em nuvem consolida todos os dados da cidade.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Coluna Formulário (Direita) */}
      <div className="login-right">
        <div className="glass-panel" style={{ padding: '3rem 3rem', width: '100%', animation: 'fadeIn 0.6s ease' }}>
          <h2 style={{ marginBottom: '0.5rem' }}>Acesso à Central</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.9rem' }}>Insira suas credenciais da Equipe EcoCílios</p>
          
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label className="input-label">Identificação Institucional</label>
              <input 
                type="text" 
                className="input-field" 
                placeholder="Ex: gestao@prefeitura.gov.br" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="input-group">
              <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="input-label">Senha de Segurança</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-main)', cursor: 'pointer' }}>Esqueceu a senha?</span>
              </label>
              <input 
                type="password" 
                className="input-field" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', marginTop: '1.5rem', padding: '1rem' }}
              disabled={loading}
            >
              {loading ? 'Autenticando modo seguro...' : (
                <>
                  Entrar no Painel <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <div className="login-footer-block">
            <p>Monitoramento Ambiental v1.0</p>
            <a
              href="https://github.com/emn-f/ecocilios"
              target="_blank"
              rel="noopener noreferrer"
              className="login-github-link"
            >
              <Github size={16} />
              Ver Código no GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
