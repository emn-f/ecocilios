import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Construction, ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found-page">
      <div className="glass-panel not-found-card animate-fade-in">
        <div className="not-found-icon-wrap">
          <Construction size={40} />
        </div>

        <h1 className="not-found-title">Tela em desenvolvimento</h1>
        <p className="not-found-text">
          A rota solicitada ainda nao foi desenvolvida no prototipo EcoCilios.
        </p>

        <div className="not-found-path">
          Caminho informado: <span>{location.pathname}</span>
        </div>

        <div className="not-found-actions">
          <Link to="/dashboard" className="btn btn-primary">
            <Home size={16} />
            Ir para Dashboard
          </Link>
          <Link to="/login" className="btn btn-outline">
            <ArrowLeft size={16} />
            Voltar para Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
