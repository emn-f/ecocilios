
// ─────────────────────────────────────────────
//  EcoCílios · Base de Dados Fictícia
// ─────────────────────────────────────────────

const USUARIO = {
  email: 'admin@ecocilios.gov.br',
  senha: 'ecocilios2025',
  nome: 'Carlos Mendes',
  cargo: 'Gestor Ambiental',
  avatar: 'CM'
};

const BAIRROS = [
  'Centro', 'Boa Vista', 'Liberdade', 'Jardim América',
  'Vila Nova', 'Santo André', 'Parque Industrial', 'São Lucas'
];

const STATUS = {
  OK: 'ok',
  ATENCAO: 'atencao',
  CRITICO: 'critico',
  MANUTENCAO: 'manutencao'
};

// ─── Dispositivos ───────────────────────────
const DISPOSITIVOS = [
  {
    id: 'EC-001', nome: 'EcoCílio Praça Central', bairro: 'Centro',
    lat: -23.5505, lng: -46.6333,
    status: STATUS.OK,
    nivelLixo: 32, ph: 7.1, turbidez: 18, temperatura: 22,
    integridade: 98, ultimaAtualizacao: '07/03/2025 21:45',
    instalacao: '15/01/2024', ultimaManutencao: '10/02/2025',
    alertas: 0, coletasTotal: 47
  },
  {
    id: 'EC-002', nome: 'EcoCílio Av. Brasil', bairro: 'Boa Vista',
    lat: -23.5525, lng: -46.6280,
    status: STATUS.ATENCAO,
    nivelLixo: 71, ph: 6.8, turbidez: 45, temperatura: 23,
    integridade: 87, ultimaAtualizacao: '07/03/2025 21:42',
    instalacao: '20/01/2024', ultimaManutencao: '05/02/2025',
    alertas: 2, coletasTotal: 52
  },
  {
    id: 'EC-003', nome: 'EcoCílio Rua das Flores', bairro: 'Liberdade',
    lat: -23.5480, lng: -46.6350,
    status: STATUS.CRITICO,
    nivelLixo: 94, ph: 5.9, turbidez: 120, temperatura: 24,
    integridade: 76, ultimaAtualizacao: '07/03/2025 21:30',
    instalacao: '10/02/2024', ultimaManutencao: '01/02/2025',
    alertas: 5, coletasTotal: 38
  },
  {
    id: 'EC-004', nome: 'EcoCílio Parque Verde', bairro: 'Jardim América',
    lat: -23.5550, lng: -46.6300,
    status: STATUS.OK,
    nivelLixo: 15, ph: 7.3, turbidez: 12, temperatura: 21,
    integridade: 100, ultimaAtualizacao: '07/03/2025 21:44',
    instalacao: '05/03/2024', ultimaManutencao: '28/02/2025',
    alertas: 0, coletasTotal: 31
  },
  {
    id: 'EC-005', nome: 'EcoCílio Cruzamento Norte', bairro: 'Vila Nova',
    lat: -23.5460, lng: -46.6310,
    status: STATUS.ATENCAO,
    nivelLixo: 65, ph: 6.5, turbidez: 60, temperatura: 25,
    integridade: 82, ultimaAtualizacao: '07/03/2025 21:38',
    instalacao: '12/02/2024', ultimaManutencao: '15/01/2025',
    alertas: 3, coletasTotal: 44
  },
  {
    id: 'EC-006', nome: 'EcoCílio Trav. Santo André', bairro: 'Santo André',
    lat: -23.5420, lng: -46.6400,
    status: STATUS.MANUTENCAO,
    nivelLixo: 88, ph: 7.0, turbidez: 30, temperatura: 22,
    integridade: 55, ultimaAtualizacao: '07/03/2025 18:10',
    instalacao: '01/03/2024', ultimaManutencao: '07/03/2025',
    alertas: 1, coletasTotal: 29
  },
  {
    id: 'EC-007', nome: 'EcoCílio Zona Industrial', bairro: 'Parque Industrial',
    lat: -23.5580, lng: -46.6450,
    status: STATUS.CRITICO,
    nivelLixo: 97, ph: 4.8, turbidez: 210, temperatura: 26,
    integridade: 70, ultimaAtualizacao: '07/03/2025 21:20',
    instalacao: '25/01/2024', ultimaManutencao: '20/01/2025',
    alertas: 8, coletasTotal: 56
  },
  {
    id: 'EC-008', nome: 'EcoCílio Rua São Lucas', bairro: 'São Lucas',
    lat: -23.5440, lng: -46.6260,
    status: STATUS.OK,
    nivelLixo: 28, ph: 7.2, turbidez: 15, temperatura: 22,
    integridade: 95, ultimaAtualizacao: '07/03/2025 21:43',
    instalacao: '18/02/2024', ultimaManutencao: '22/02/2025',
    alertas: 0, coletasTotal: 39
  }
];

// ─── Alertas Recentes ───────────────────────
const ALERTAS = [
  {
    id: 1, tipo: 'critico', dispositivo: 'EC-007', titulo: 'pH Crítico Detectado',
    descricao: 'pH 4.8 indica possível despejo de efluente industrial na zona.',
    hora: '21:20', icone: '⚠️', lido: false
  },
  {
    id: 2, tipo: 'critico', dispositivo: 'EC-003', titulo: 'Cesto Lotado',
    descricao: 'Nível de lixo em 94% — necessária coleta imediata na Rua das Flores.',
    hora: '21:30', icone: '🗑️', lido: false
  },
  {
    id: 3, tipo: 'critico', dispositivo: 'EC-007', titulo: 'Turbidez Extrema',
    descricao: 'Turbidez 210 NTU — 7x acima do limite. Possível entupimento crítico.',
    hora: '21:15', icone: '💧', lido: false
  },
  {
    id: 4, tipo: 'atencao', dispositivo: 'EC-002', titulo: 'Nível de Lixo Elevado',
    descricao: 'Cesto com 71% de capacidade na Av. Brasil. Programar coleta.',
    hora: '20:45', icone: '📦', lido: true
  },
  {
    id: 5, tipo: 'atencao', dispositivo: 'EC-005', titulo: 'Turbidez Acima do Normal',
    descricao: 'Turbidez 60 NTU no Cruzamento Norte. Monitorar tendência.',
    hora: '20:10', icone: '🌊', lido: true
  },
  {
    id: 6, tipo: 'atencao', dispositivo: 'EC-006', titulo: 'Integridade Baixa',
    descricao: 'Sensor de integridade estrutural em 55% — manutenção em andamento.',
    hora: '18:10', icone: '🔧', lido: true
  },
  {
    id: 7, tipo: 'info', dispositivo: 'EC-004', titulo: 'Coleta Concluída',
    descricao: 'Cesto do Parque Verde esvaziado com sucesso. Operação realizada.',
    hora: '14:30', icone: '✅', lido: true
  },
  {
    id: 8, tipo: 'info', dispositivo: 'EC-001', titulo: 'Sistema Online',
    descricao: 'EcoCílio Praça Central reconectado após manutenção preventiva.',
    hora: '09:15', icone: '📡', lido: true
  }
];

// ─── Histórico (últimas 24h, por hora) ─────
function gerarHistorico() {
  const horas = [];
  const nivelLixoMedia = [];
  const phMedia = [];
  const turbidezMedia = [];
  const now = new Date();

  for (let i = 23; i >= 0; i--) {
    const h = new Date(now.getTime() - i * 3600000);
    horas.push(h.getHours().toString().padStart(2, '0') + 'h');
    nivelLixoMedia.push(Math.round(30 + Math.random() * 50 + (i < 5 ? 20 : 0)));
    phMedia.push(+(6.4 + Math.random() * 1.2).toFixed(2));
    turbidezMedia.push(Math.round(20 + Math.random() * 80 + (i < 3 ? 40 : 0)));
  }
  return { horas, nivelLixoMedia, phMedia, turbidezMedia };
}

// ─── Rota de Coleta Sugerida ────────────────
const ROTA_COLETA = ['EC-007', 'EC-003', 'EC-006', 'EC-002', 'EC-005'];

// ─── KPIs ───────────────────────────────────
function calcularKPIs() {
  const total = DISPOSITIVOS.length;
  const ok = DISPOSITIVOS.filter(d => d.status === STATUS.OK).length;
  const atencao = DISPOSITIVOS.filter(d => d.status === STATUS.ATENCAO).length;
  const critico = DISPOSITIVOS.filter(d => d.status === STATUS.CRITICO).length;
  const manutencao = DISPOSITIVOS.filter(d => d.status === STATUS.MANUTENCAO).length;
  const nivelMedio = Math.round(DISPOSITIVOS.reduce((s, d) => s + d.nivelLixo, 0) / total);
  const alertasAtivos = ALERTAS.filter(a => !a.lido).length;
  const phMedio = (DISPOSITIVOS.reduce((s, d) => s + d.ph, 0) / total).toFixed(1);

  return { total, ok, atencao, critico, manutencao, nivelMedio, alertasAtivos, phMedio };
}

// ─── Export Global ───────────────────────────
window.EcoData = {
  USUARIO, DISPOSITIVOS, ALERTAS, BAIRROS, STATUS,
  ROTA_COLETA, gerarHistorico, calcularKPIs
};
