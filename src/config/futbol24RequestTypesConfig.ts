export interface Futbol24RequestConfig {
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

export const futbol24RequestTypesConfig: Futbol24RequestConfig[] = [
  {
    id: 'daily-matches',
    label: 'Daily Matches',
    baseUrl: 'https://www.futbol24.com/api/live/matches',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [{ value: 'soccer', label: 'Soccer / Football' }]
      },
      {
        key: 'date',
        label: 'Date',
        type: 'date',
        required: true,
        category: 'shared',
        placeholder: 'Select date'
      }
    ]
  }
];
