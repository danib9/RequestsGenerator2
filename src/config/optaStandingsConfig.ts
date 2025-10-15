export interface OptaStandingsRequestConfig {
  id: string;
  label: string;
  baseUrl: string;
  parameters: Array<{
    key: string;
    label: string;
    type: 'select' | 'text' | 'date';
    required: boolean;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
    category: 'unique' | 'shared' | 'core';
  }>;
}

export const optaStandingsConfig: OptaStandingsRequestConfig[] = [
  {
    id: 'standings',
    label: 'Standings',
    category: 'League',
    baseUrl: 'https://api.performfeeds.com/soccerdata/standings/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'tournamentCalendarID',
        label: 'Tournament Calendar ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Tournament Calendar ID'
      }
    ]
  }
];