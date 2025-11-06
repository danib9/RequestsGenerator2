export interface RequestParameter {
  key: string;
  label: string;
  type: 'select' | 'text' | 'date';
  required: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  category: 'unique' | 'shared' | 'core';
  alias?: string;
}

export interface RequestConfig {
  id: string;
  label: string;
  baseUrl: string;
  endpoint: string;
  parameters: RequestParameter[];
}

export const requestTypesConfig: Record<string, RequestConfig[]> = {
  Competition: [
    {
      id: 'competition-dashboard-light',
      label: 'Competition Dashboard (Light)',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Dashboard/Light/',
      parameters: [
        {
          key: 'competitions',
          label: 'Competition ID',
          type: 'text',
          required: true,
          category: 'unique',
          alias: 'Competitions'
        },
        {
          key: 'apptype',
          label: 'App Type',
          type: 'select',
          required: true,
          category: 'core',
          alias: 'AppType',
          options: [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' }
          ]
        },
        {
          key: 'appversion',
          label: 'App Version',
          type: 'text',
          required: true,
          category: 'core',
          alias: 'AppVersion'
        },
        {
          key: 'storeversion',
          label: 'Store Version',
          type: 'text',
          required: true,
          category: 'core',
          alias: 'StoreVersion'
        }
      ]
    }
  ],
  Games: [
    {
      id: 'game-center',
      label: 'Game Center',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Games/',
      parameters: [
        {
          key: 'gameid',
          label: 'Game ID',
          type: 'text',
          required: true,
          category: 'unique',
          alias: 'GameID'
        },
        {
          key: 'apptype',
          label: 'App Type',
          type: 'select',
          required: true,
          category: 'core',
          alias: 'AppType',
          options: [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' }
          ]
        },
        {
          key: 'appversion',
          label: 'App Version',
          type: 'text',
          required: true,
          category: 'core',
          alias: 'AppVersion'
        },
        {
          key: 'storeversion',
          label: 'Store Version',
          type: 'text',
          required: true,
          category: 'core',
          alias: 'StoreVersion'
        }
      ]
    }
  ],
  Scores: [
    {
      id: 'all-scores',
      label: 'All Scores',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Scores/',
      parameters: [
        {
          key: 'startdate',
          label: 'Start Date',
          type: 'date',
          required: true,
          category: 'unique',
          alias: 'StartDate'
        },
        {
          key: 'enddate',
          label: 'End Date',
          type: 'date',
          required: true,
          category: 'unique',
          alias: 'EndDate'
        },
        {
          key: 'sports',
          label: 'Sports',
          type: 'text',
          required: false,
          category: 'shared',
          alias: 'Sports'
        },
        {
          key: 'competitions',
          label: 'Competitions',
          type: 'text',
          required: false,
          category: 'shared',
          alias: 'Competitions'
        },
        {
          key: 'apptype',
          label: 'App Type',
          type: 'select',
          required: true,
          category: 'core',
          alias: 'AppType',
          options: [
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' }
          ]
        },
        {
          key: 'appversion',
          label: 'App Version',
          type: 'text',
          required: true,
          category: 'core',
          alias: 'AppVersion'
        },
        {
          key: 'storeversion',
          label: 'Store Version',
          type: 'text',
          required: true,
          category: 'core',
          alias: 'StoreVersion'
        }
      ]
    }
  ]
};

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
    baseUrl: 'https://dsg.365scores.com/dsg',
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
          { value: 'Baseball', label: 'Baseball' },
          { value: 'Football', label: 'Football' },
          { value: 'Hockey', label: 'Hockey' }
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
    baseUrl: 'https://dsg.365scores.com/dsg',
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
          { value: 'Baseball', label: 'Baseball' },
          { value: 'Football', label: 'Football' },
          { value: 'Hockey', label: 'Hockey' }
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
    baseUrl: 'https://dsg.365scores.com/dsg',
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
          { value: 'Baseball', label: 'Baseball' },
          { value: 'Football', label: 'Football' },
          { value: 'Hockey', label: 'Hockey' }
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
    baseUrl: 'https://dsg.365scores.com/dsg',
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
          { value: 'Baseball', label: 'Baseball' },
          { value: 'Football', label: 'Football' },
          { value: 'Hockey', label: 'Hockey' }
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