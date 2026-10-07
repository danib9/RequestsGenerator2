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
    baseUrl: 'https://api.performfeeds.com/soccerdata/tournamentcalendar/5sz36p5b0qjv19gq5uvt37vyp',
    parameters: [
      {
        key: 'comp',
        label: 'Competition ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Competition ID'
      }
    ]
  }
];