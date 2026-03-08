export const bueirosData = [
  { id: 'BUE-001', location: 'Centro Histórico', zone: 'Zona Sul', x: 20, y: 30, garbageLevel: 85, waterQuality: { pH: 6.8, turbidity: 45 }, status: 'warning', battery: 92, lastUpdate: '10 min atrás', alerts: ['Obstrução Alta'] },
  { id: 'BUE-002', location: 'Av. Paulista', zone: 'Zona Oeste', x: 45, y: 65, garbageLevel: 15, waterQuality: { pH: 7.2, turbidity: 20 }, status: 'normal', battery: 88, lastUpdate: '5 min atrás', alerts: [] },
  { id: 'BUE-003', location: 'Polo Industrial', zone: 'Zona Leste', x: 75, y: 20, garbageLevel: 42, waterQuality: { pH: 5.1, turbidity: 160 }, status: 'danger', battery: 95, lastUpdate: '2 min atrás', alerts: ['pH Ácido', 'Efluente Irregular'] },
  { id: 'BUE-004', location: 'Pinheiros (Rio)', zone: 'Zona Sul', x: 30, y: 80, garbageLevel: 98, waterQuality: { pH: 8.5, turbidity: 120 }, status: 'danger', battery: 15, lastUpdate: 'Agora', alerts: ['Alerta de Enchente', 'Bateria Baixa'] },
  { id: 'BUE-005', location: 'Ibirapuera', zone: 'Zona Central', x: 55, y: 45, garbageLevel: 65, waterQuality: { pH: 6.9, turbidity: 55 }, status: 'warning', battery: 72, lastUpdate: '15 min atrás', alerts: ['Acúmulo Acelerado'] },
  { id: 'BUE-006', location: 'Vila Madalena', zone: 'Zona Oeste', x: 80, y: 60, garbageLevel: 5, waterQuality: { pH: 7.0, turbidity: 10 }, status: 'normal', battery: 100, lastUpdate: '1 hr atrás', alerts: [] },
];

export const volumeHistory = [
  { day: '01/03', volumeKg: 400, turbidity: 40 },
  { day: '02/03', volumeKg: 300, turbidity: 35 },
  { day: '03/03', volumeKg: 600, turbidity: 98 },
  { day: '04/03', volumeKg: 850, turbidity: 120 },
  { day: '05/03', volumeKg: 480, turbidity: 85 },
  { day: '06/03', volumeKg: 200, turbidity: 40 },
  { day: '07/03', volumeKg: 150, turbidity: 30 },
];
