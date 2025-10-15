export interface SportRadarRequestConfig {
  id: string;
  label: string;
  baseUrl: string;
  endpoint?: string;
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

export const sportRadarRequestTypesConfig: SportRadarRequestConfig[] = [
  {
    id: 'daily-schedule',
    label: 'Daily Schedule',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport type',
        type: 'select',
        required: true,
        category: 'unique',
        options: [
          { value: 'tennis', label: 'Tennis' },
          { value: 'soccer', label: 'Soccer' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'baseball', label: 'Baseball' },
          { value: 'football', label: 'Football' },
          { value: 'hockey', label: 'Hockey' }
        ]
      },
      {
        key: 'date',
        label: 'Date',
        type: 'date',
        required: true,
        category: 'unique',
        placeholder: 'Select date'
      }
    ]
  }
];