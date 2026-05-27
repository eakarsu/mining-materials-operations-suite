export type EntityRecord = { id: string; name: string; status: string; owner: string; amount?: string; dueDate?: string; priority?: string };
export type FeatureEntitySet = { title: string; columns: string[]; rows: EntityRecord[] };
const COLUMNS = ['Name', 'Status', 'Owner', 'Amount', 'Due Date', 'Priority'];
const entitySeeds = [
  ['sites', 'Sites Records', 'Sites priority queue', 'Open', 'Sites exception list', 'Operations Lead', '$0'],
  ['equipment', 'Equipment Records', 'Equipment priority queue', 'Review', 'Equipment exception list', 'Operations Lead', '$0'],
  ['production', 'Production Records', 'Production priority queue', 'Action needed', 'Production exception list', 'Operations Lead', '$0'],
  ['haulage', 'Haulage Records', 'Haulage priority queue', 'Open', 'Haulage exception list', 'Operations Lead', '$0'],
  ['safety', 'Safety Records', 'Safety priority queue', 'Review', 'Safety exception list', 'Operations Lead', '$0'],
  ['permits', 'Permits Records', 'Permits priority queue', 'Action needed', 'Permits exception list', 'Operations Lead', '$0'],
  ['maintenance', 'Maintenance Records', 'Maintenance priority queue', 'Open', 'Maintenance exception list', 'Operations Lead', '$0'],
  ['blending', 'Blending Records', 'Blending priority queue', 'Review', 'Blending exception list', 'Operations Lead', '$0'],
  ['inventory', 'Inventory Records', 'Inventory priority queue', 'Action needed', 'Inventory exception list', 'Governance Lead', '$0'],
  ['exploration', 'Exploration Records', 'Exploration priority queue', 'Open', 'Exploration exception list', 'Governance Lead', '$0'],
  ['environmental', 'Environmental Records', 'Environmental priority queue', 'Review', 'Environmental exception list', 'Intelligence Layer Lead', '$0'],
  ['reports', 'Reports Records', 'Reports priority queue', 'Action needed', 'Reports exception list', 'Intelligence Layer Lead', '$0'],
  ["exploration-targets","Exploration Targets Records","Exploration Targets operating queue","Open","Exploration Targets follow-up list","Mineral Exploration Geology","$0"],
  ["geology-sample-review","Geology Sample Review Records","Geology Sample Review operating queue","Review","Geology Sample Review follow-up list","Mineral Exploration Geology","$0"],
  ["mineral-prospect-risk","Mineral Prospect Risk Records","Mineral Prospect Risk operating queue","Review","Mineral Prospect Risk follow-up list","Mineral Exploration Geology","$0"],
  ['documents', 'Documents Records', 'Documents priority queue', 'Open', 'Documents exception list', 'Core Platform Lead', '$0'],
  ['notifications', 'Notifications Records', 'Notifications priority queue', 'Review', 'Notifications exception list', 'Core Platform Lead', '$0'],
  ['integrations', 'Integrations Records', 'Integrations priority queue', 'Action needed', 'Integrations exception list', 'Core Platform Lead', '$0'],
  ['profiles', 'Profiles Records', 'Profiles priority queue', 'Open', 'Profiles exception list', 'Core Platform Lead', '$0'],
  ['ai-assistant', 'AI Assistant Records', 'AI Assistant priority queue', 'Review', 'AI Assistant exception list', 'Intelligence Layer Lead', '$0'],
  ['ai-tools', 'AI Tools Records', 'AI Tools priority queue', 'Action needed', 'AI Tools exception list', 'Intelligence Layer Lead', '$0'],
] as const;

function buildSet(slug: string, title: string, firstName: string, firstStatus: string, secondName: string, owner: string, amount: string): FeatureEntitySet {
  return {
    title,
    columns: COLUMNS,
    rows: [
      { id: `${slug}-1`, name: firstName, status: firstStatus, owner, amount, dueDate: '2026-05-27', priority: 'High' },
      { id: `${slug}-2`, name: secondName, status: 'Review', owner: 'Operations', amount, dueDate: '2026-05-29', priority: 'Medium' },
      { id: `${slug}-3`, name: `${title.replace(' Records', '')} exception queue`, status: 'Queued', owner: 'Team Lead', amount: '$0', dueDate: '2026-05-30', priority: 'Medium' },
    ],
  };
}

export const featureEntitiesBySlug: Record<string, FeatureEntitySet> = Object.fromEntries(entitySeeds.map(([slug, title, firstName, firstStatus, secondName, owner, amount]) => [slug, buildSet(slug, title, firstName, firstStatus, secondName, owner, amount)]));
