
// ─────────────────────────────────────────────
//  EcoCílios · Lógica Compartilhada
// ─────────────────────────────────────────────

// ─── Auth ────────────────────────────────────
const Auth = {
  login(email, senha) {
    const { USUARIO } = window.EcoData;
    if (email === USUARIO.email && senha === USUARIO.senha) {
      localStorage.setItem('eco_auth', JSON.stringify({ logado: true, ts: Date.now() }));
      return true;
    }
    return false;
  },
  logout() {
    localStorage.removeItem('eco_auth');
    window.location.href = 'index.html';
  },
  verificar() {
    const raw = localStorage.getItem('eco_auth');
    if (!raw) { window.location.href = 'index.html'; return false; }
    const { logado, ts } = JSON.parse(raw);
    // Sessão expira em 8h
    if (!logado || Date.now() - ts > 8 * 3600 * 1000) {
      localStorage.removeItem('eco_auth');
      window.location.href = 'index.html';
      return false;
    }
    return true;
  }
};

// ─── Utilidades ──────────────────────────────
const Utils = {
  statusLabel(s) {
    return { ok: 'Operacional', atencao: 'Atenção', critico: 'Crítico', manutencao: 'Manutenção' }[s] || s;
  },
  statusBadge(s) {
    return `<span class="badge badge-${s}">${Utils.statusLabel(s)}</span>`;
  },
  nivelCor(n) {
    if (n >= 85) return 'var(--cor-critico)';
    if (n >= 60) return 'var(--cor-atencao)';
    return 'var(--cor-ok)';
  },
  phStatus(ph) {
    if (ph < 5.5 || ph > 8.5) return 'critico';
    if (ph < 6.5 || ph > 7.5) return 'atencao';
    return 'ok';
  },
  turbidezStatus(t) {
    if (t > 100) return 'critico';
    if (t > 40) return 'atencao';
    return 'ok';
  },
  formatarData(str) { return str; },
  ago(hStr) { return `Hoje, ${hStr}`; }
};

// ─── Injetar Header/Nav compartilhado ────────
function renderNav(paginaAtiva) {
  const { calcularKPIs } = window.EcoData;
  const kpis = calcularKPIs();
  const alertasAtivos = kpis.alertasAtivos;
  const badge = alertasAtivos > 0
    ? `<span class="nav-badge">${alertasAtivos}</span>` : '';

  const links = [
    { href: 'dashboard.html', icon: '◈', label: 'Dashboard', id: 'dashboard' },
    { href: 'mapa.html', icon: '🗺️', label: 'Mapa', id: 'mapa' },
    { href: 'dispositivos.html', icon: '📡', label: 'Dispositivos', id: 'dispositivos' },
    { href: 'relatorios.html', icon: '📊', label: 'Relatórios', id: 'relatorios' },
    { href: 'alertas.html', icon: '🔔', label: `Alertas${badge}`, id: 'alertas' },
  ];

  const navHtml = `
  <nav class="sidebar" id="sidebar">
    <div class="sidebar-logo">
      <div class="logo-icon">🌿</div>
      <div class="logo-text">
        <span class="logo-title">EcoCílios</span>
        <span class="logo-sub">Sistema de Monitoramento</span>
      </div>
    </div>
    <div class="sidebar-nav">
      ${links.map(l => `
        <a href="${l.href}" class="nav-item ${paginaAtiva === l.id ? 'active' : ''}" id="nav-${l.id}">
          <span class="nav-icon">${l.icon}</span>
          <span class="nav-label">${l.label}</span>
        </a>
      `).join('')}
    </div>
    <div class="sidebar-footer">
      <div class="user-info">
        <div class="user-avatar">${window.EcoData.USUARIO.avatar}</div>
        <div class="user-details">
          <span class="user-name">${window.EcoData.USUARIO.nome}</span>
          <span class="user-role">${window.EcoData.USUARIO.cargo}</span>
        </div>
      </div>
      <button class="btn-logout" onclick="Auth.logout()" title="Sair">⏻</button>
    </div>
  </nav>
  <button class="sidebar-toggle" id="sidebarToggle" onclick="toggleSidebar()">☰</button>
  `;

  const el = document.getElementById('nav-root');
  if (el) el.innerHTML = navHtml;
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

// ─── Relógio em tempo real ────────────────────
function iniciarRelogio(elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  const atualizar = () => {
    const now = new Date();
    el.textContent = now.toLocaleString('pt-BR', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
  };
  atualizar();
  setInterval(atualizar, 1000);
}

// ─── Simular dados em tempo real ───────────────
function simularAtualizacao() {
  window.EcoData.DISPOSITIVOS.forEach(d => {
    if (d.status === window.EcoData.STATUS.MANUTENCAO) return;
    d.nivelLixo = Math.min(100, Math.max(5, d.nivelLixo + (Math.random() * 4 - 1)));
    d.ph = Math.max(4, Math.min(9, d.ph + (Math.random() * 0.2 - 0.1)));
    d.turbidez = Math.max(5, Math.min(250, d.turbidez + (Math.random() * 6 - 2)));
    d.ph = +d.ph.toFixed(2);
    d.turbidez = Math.round(d.turbidez);
    d.nivelLixo = Math.round(d.nivelLixo);
  });
}

// ─── Export Global ────────────────────────────
window.Auth = Auth;
window.Utils = Utils;
window.renderNav = renderNav;
window.iniciarRelogio = iniciarRelogio;
window.simularAtualizacao = simularAtualizacao;
