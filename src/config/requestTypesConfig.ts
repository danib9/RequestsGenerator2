export interface RequestConfig {
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
    alias?: string;
    category: 'unique' | 'shared' | 'core';
  }>;
}

export const requestTypesConfig: Record<string, RequestConfig[]> = {
  'Live Scores': [
    {
      id: 'live-scores',
      label: 'Live Scores',
      baseUrl: 'https://webws.365scores.com/web/games',
      endpoint: '/current',
      parameters: [
        {
          key: 'appTypeId',
          label: 'App Type ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '5', label: '5' },
            { value: '3', label: '3' }
          ]
        },
        {
          key: 'langId',
          label: 'Language ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '1', label: '1 (English)' },
            { value: '2', label: '2 (Hebrew)' },
            { value: '3', label: '3 (Arabic)' },
            { value: '31', label: '31 (Spanish)' },
            { value: '17', label: '17 (Portuguese)' },
            { value: '28', label: '28 (Italian)' },
            { value: '6', label: '6 (German)' },
            { value: '7', label: '7 (French)' },
            { value: '23', label: '23 (Dutch)' },
            { value: '26', label: '26 (Russian)' },
            { value: '50', label: '50 (Turkish)' },
            { value: '51', label: '51 (Polish)' }
          ]
        },
        {
          key: 'timezoneName',
          label: 'Timezone Name',
          type: 'text',
          required: true,
          category: 'core',
          placeholder: 'Enter timezone (e.g., Asia/Jerusalem)'
        },
        {
          key: 'userCountryId',
          label: 'User Country ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '6', label: '6 (Israel)' },
            { value: '21', label: '21 (United States)' },
            { value: '14', label: '14 (United Kingdom)' },
            { value: '16', label: '16 (Germany)' },
            { value: '17', label: '17 (France)' },
            { value: '18', label: '18 (Spain)' },
            { value: '19', label: '19 (Italy)' },
            { value: '20', label: '20 (Netherlands)' },
            { value: '22', label: '22 (Brazil)' },
            { value: '23', label: '23 (Russia)' },
            { value: '24', label: '24 (Turkey)' },
            { value: '25', label: '25 (Poland)' }
          ]
        }
      ]
    }
  ],
  'All Scores': [
    {
      id: 'all-scores',
      label: 'All Scores',
      baseUrl: 'https://webws.365scores.com/web/games',
      endpoint: '',
      parameters: [
        {
          key: 'appTypeId',
          label: 'App Type ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '5', label: '5' },
            { value: '3', label: '3' }
          ]
        },
        {
          key: 'langId',
          label: 'Language ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '1', label: '1 (English)' },
            { value: '2', label: '2 (Hebrew)' },
            { value: '3', label: '3 (Arabic)' },
            { value: '31', label: '31 (Spanish)' },
            { value: '17', label: '17 (Portuguese)' },
            { value: '28', label: '28 (Italian)' },
            { value: '6', label: '6 (German)' },
            { value: '7', label: '7 (French)' },
            { value: '23', label: '23 (Dutch)' },
            { value: '26', label: '26 (Russian)' },
            { value: '50', label: '50 (Turkish)' },
            { value: '51', label: '51 (Polish)' }
          ]
        },
        {
          key: 'timezoneName',
          label: 'Timezone Name',
          type: 'text',
          required: true,
          category: 'core',
          placeholder: 'Enter timezone (e.g., Asia/Jerusalem)'
        },
        {
          key: 'userCountryId',
          label: 'User Country ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '6', label: '6 (Israel)' },
            { value: '21', label: '21 (United States)' },
            { value: '14', label: '14 (United Kingdom)' },
            { value: '16', label: '16 (Germany)' },
            { value: '17', label: '17 (France)' },
            { value: '18', label: '18 (Spain)' },
            { value: '19', label: '19 (Italy)' },
            { value: '20', label: '20 (Netherlands)' },
            { value: '22', label: '22 (Brazil)' },
            { value: '23', label: '23 (Russia)' },
            { value: '24', label: '24 (Turkey)' },
            { value: '25', label: '25 (Poland)' }
          ]
        },
        {
          key: 'startdate',
          label: 'Start Date',
          type: 'date',
          required: true,
          category: 'unique',
          placeholder: 'Select start date'
        },
        {
          key: 'enddate',
          label: 'End Date',
          type: 'date',
          required: true,
          category: 'unique',
          placeholder: 'Select end date'
        },
        {
          key: 'sports',
          label: 'Sports',
          type: 'select',
          required: true,
          category: 'unique',
          options: [
            { value: '1', label: 'Soccer' },
            { value: '2', label: 'Basketball' },
            { value: '3', label: 'Tennis' },
            { value: '4', label: 'Baseball' },
            { value: '5', label: 'Football' },
            { value: '6', label: 'Hockey' },
            { value: '12', label: 'Volleyball' }
          ]
        }
      ]
    }
  ]
};

export interface DSGRequestConfig {
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
          { value: 'soccer', label: 'Soccer' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'tennis', label: 'Tennis' },
          { value: 'baseball', label: 'Baseball' },
          { value: 'football', label: 'Football' },
          { value: 'hockey', label: 'Hockey' },
          { value: 'volleyball', label: 'Volleyball' }
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
    baseUrl: 'https://dsg.365scores.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'unique',
        options: [
          { value: 'soccer', label: 'Soccer' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'tennis', label: 'Tennis' },
          { value: 'baseball', label: 'Baseball' },
          { value: 'football', label: 'Football' },
          { value: 'hockey', label: 'Hockey' },
          { value: 'volleyball', label: 'Volleyball' }
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
          { value: 'soccer', label: 'Soccer' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'tennis', label: 'Tennis' },
          { value: 'baseball', label: 'Baseball' },
          { value: 'football', label: 'Football' },
          { value: 'hockey', label: 'Hockey' },
          { value: 'volleyball', label: 'Volleyball' }
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
    baseUrl: 'https://dsg.365scores.com',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'unique',
        options: [
          { value: 'soccer', label: 'Soccer' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'tennis', label: 'Tennis' },
          { value: 'baseball', label: 'Baseball' },
          { value: 'football', label: 'Football' },
          { value: 'hockey', label: 'Hockey' },
          { value: 'volleyball', label: 'Volleyball' }
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