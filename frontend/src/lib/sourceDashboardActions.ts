export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "mineral-exploration-geology",
    "label": "Mineral Exploration Geology",
    "description": "Open Mineral Exploration Geology workflows elevated from AIMineralExplorationGeology.",
    "href": "/exploration-targets",
    "sourceProjects": [
      "AIMineralExplorationGeology"
    ],
    "examples": [
      "Exploration Targets",
      "Geology Sample Review",
      "Mineral Prospect Risk"
    ],
    "count": 1
  }
];
