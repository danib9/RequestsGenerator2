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
    baseUrl: 'https://dsg.365scores.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'unique',
        options: [
          { value: 'Soccer', label: 'Soccer' },
          { value: 'Basketball', label: 'Basketball' },
          { value: 'Tennis', label: 'Tennis' },
          { value: 'Hockey', label: 'Hockey' },
          { value: 'Baseball', label: 'Baseball' },
          { value: 'AmericanFootball', label: 'American Football' }
        ]
      },
      {
        key: 'dsgMatchPID',
        label: 'DSG Match PID',
        type: 'text',
        required: true,
        category: 'unique',
        placeholder: 'Enter DSG Match PID'
      }
    ]
  },
  {
    id: 'daily-matches',
    label: 'Daily Matches',
    baseUrl: 'https://dsg.365scores.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'unique',
        options: [
          { value: 'Soccer', label: 'Soccer' },
          { value: 'Basketball', label: 'Basketball' },
          { value: 'Tennis', label: 'Tennis' },
          { value: 'Hockey', label: 'Hockey' },
          { value: 'Baseball', label: 'Baseball' },
          { value: 'AmericanFootball', label: 'American Football' }
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
  },
  {
    id: 'team-squad',
    label: 'Team Squad',
    baseUrl: 'https://dsg.365scores.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'unique',
        options: [
          { value: 'Soccer', label: 'Soccer' },
          { value: 'Basketball', label: 'Basketball' },
          { value: 'Tennis', label: 'Tennis' },
          { value: 'Hockey', label: 'Hockey' },
          { value: 'Baseball', label: 'Baseball' },
          { value: 'AmericanFootball', label: 'American Football' }
        ]
      },
      {
        key: 'Team_ID',
        label: 'Team ID',
        type: 'text',
        required: true,
        category: 'unique',
        placeholder: 'Enter Team ID'
      }
    ]
  },
  {
    id: 'player-request',
    label: 'Player Request',
    baseUrl: 'https://dsg.365scores.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'unique',
        options: [
          { value: 'Soccer', label: 'Soccer' },
          { value: 'Basketball', label: 'Basketball' },
          { value: 'Tennis', label: 'Tennis' },
          { value: 'Hockey', label: 'Hockey' },
          { value: 'Baseball', label: 'Baseball' },
          { value: 'AmericanFootball', label: 'American Football' }
        ]
      },
      {
        key: 'Player_ID',
        label: 'Player ID',
        type: 'text',
        required: true,
        category: 'unique',
        placeholder: 'Enter Player ID'
      }
    ]
  }
];