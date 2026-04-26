import React, { useState, useEffect, useRef } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MapPinned, Server, LogOut, Droplets, Menu, X, Info } from 'lucide-react';

const Layout = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleLogout = () => {
    // Simula logout e vai pra login
    navigate('/login');
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Prevent closing if we clicked the hamburger menu button
        if (!event.target.closest('.mobile-menu-btn')) {
          closeMenu();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className={`app-layout ${menuOpen ? 'menu-open' : ''}`}>
      <aside ref={sidebarRef} className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header-mobile">
          <div className="sidebar-logo">
            <Droplets className="gradient-text" size={32} />
            <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>EcoCílios</span>
          </div>
          <button className="mobile-menu-close" onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>
        
        <nav className="nav-links">
          <NavLink to="/dashboard" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            <LayoutDashboard size={20} />
            Visão Geral
          </NavLink>
          <NavLink to="/mapa" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            <MapPinned size={20} />
            Mapeamento Físico
          </NavLink>
          <NavLink to="/dispositivos" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            <Server size={20} />
            Status dos Sensores
          </NavLink>
          <NavLink to="/sobre" onClick={closeMenu} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
            <Info size={20} />
            Sobre o Projeto
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-profile">
            <div className="sidebar-avatar">
              GM
            </div>
            <div className="sidebar-profile-info">
              <p className="sidebar-profile-name">Gestão Municipal</p>
              <p className="sidebar-profile-role">Defesa Civil</p>
            </div>
          </div>
          <button className="btn btn-outline sidebar-logout" onClick={handleLogout}>
            <LogOut size={18} />
            Encerrar Sessão
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="topbar glass-panel" style={{ borderRadius: 0, borderTop: 'none', borderLeft: 'none', borderRight: 'none', position: 'sticky', top: 0, zIndex: 10 }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu size={24} />
            </button>
            <div className="mobile-only mobile-topbar-logo" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
              <Droplets className="gradient-text" size={24} />
              <span style={{ fontSize: '1.2rem', fontWeight: 700 }}>EcoCílios</span>
            </div>
          </div>
        </header>

        <div className="page-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
