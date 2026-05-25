export type Metric = { label: string; value: string; note: string };
export const sourceSystems = [
  { name: 'AIMiningOperationsPlanner', ownership: 'Sites source capabilities and workflows', coverage: ['Sites', 'Equipment', 'Production'] },
  { name: 'AIMaterialsFlowOptimizer', ownership: 'Equipment source capabilities and workflows', coverage: ['Haulage', 'Safety', 'Permits'] },
  { name: 'AIMineSafetyMonitor', ownership: 'Production source capabilities and workflows', coverage: ['Maintenance', 'Blending', 'Inventory'] },
  { name: 'AIExplorationAssistant', ownership: 'Haulage source capabilities and workflows', coverage: ['Exploration', 'Environmental', 'Reports'] },
];
export const dashboardMetrics: Metric[] = [
  { label: 'Sites', value: '84', note: 'Active' },
  { label: 'Equipment', value: '61', note: 'Open' },
  { label: 'Production', value: '37', note: 'Need review' },
  { label: 'AI Tool Runs', value: '318', note: 'Last 24 hours' },
];
export const healthMetrics: Metric[] = [
  { label: 'Exceptions', value: '28', note: 'Open' },
  { label: 'Approvals', value: '46', note: 'Pending' },
  { label: 'Documents', value: '640', note: 'Tracked' },
  { label: 'Audit Items', value: '91%', note: 'Current' },
];
export const dashboardModules = ['Sites operating view', 'Equipment operating view', 'Production operating view', 'Haulage operating view', 'Safety operating view', 'Permits operating view', 'Maintenance operating view', 'Blending operating view'];
export const workflowHighlights = ['Sites workflow with records, approvals, audit, and reporting', 'Equipment workflow with records, approvals, audit, and reporting', 'Production workflow with records, approvals, audit, and reporting', 'Haulage workflow with records, approvals, audit, and reporting', 'Safety workflow with records, approvals, audit, and reporting'];
