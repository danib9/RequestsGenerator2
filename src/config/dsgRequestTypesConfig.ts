export interface DSGRequestConfig {
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

export const dsgRequestTypesConfig: DSGRequestConfig[] = [
  {
    id: 'game',
    label: 'Game',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'football', label: 'Football' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'hockey', label: 'Hockey' },
          { value: 'baseball', label: 'Baseball' }
        ]
      },
      {
        key: 'dsgMatchPID',
        label: 'DSG Match PID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter DSG Match PID'
      }
    ]
  },
  {
    id: 'daily-matches',
    label: 'Daily Matches',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'football', label: 'Football' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'hockey', label: 'Hockey' },
          { value: 'baseball', label: 'Baseball' }
        ]
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
  },
  {
    id: 'team-squad',
    label: 'Team Squad',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'football', label: 'Football' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'hockey', label: 'Hockey' },
          { value: 'baseball', label: 'Baseball' }
        ]
      },
      {
        key: 'Team_ID',
        label: 'Team ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Team ID'
      }
    ]
  },
  {
    id: 'player-request',
    label: 'Player Request',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'football', label: 'Football' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'hockey', label: 'Hockey' },
          { value: 'baseball', label: 'Baseball' }
        ]
      },
      {
        key: 'Player_ID',
        label: 'Player ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Player ID'
      }
    ]
  }
];