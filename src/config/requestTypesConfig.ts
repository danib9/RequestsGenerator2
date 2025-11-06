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
  competition: [
    {
      id: 'competition-dashboard',
      label: 'Competition Dashboard (Light)',
      baseUrl: 'https://webws.365scores.com',
      endpoint: '/web/competition/',
      parameters: [
        {
          key: 'competitionid',
          label: 'Competition ID',
          type: 'text',
          required: true,
          category: 'unique',
          placeholder: 'Enter competition ID'
        },
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
            { value: '1', label: 'English (1)' },
            { value: '2', label: 'Hebrew (2)' },
            { value: '3', label: 'Arabic (3)' },
            { value: '31', label: 'Spanish (31)' }
          ]
        },
        {
          key: 'timezoneid',
          label: 'Timezone ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '1', label: 'UTC (1)' },
            { value: '2', label: 'Israel (2)' },
            { value: '3', label: 'Eastern (3)' },
            { value: '4', label: 'Central (4)' },
            { value: '5', label: 'Mountain (5)' },
            { value: '6', label: 'Pacific (6)' }
          ]
        },
        {
          key: 'userCountryId',
          label: 'User Country ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '6', label: 'Israel (6)' },
            { value: '21', label: 'United States (21)' },
            { value: '14', label: 'United Kingdom (14)' }
          ]
        }
      ]
    }
  ],
  games: [
    {
      id: 'game-center',
      label: 'Game Center',
      baseUrl: 'https://webws.365scores.com',
      endpoint: '/web/game/',
      parameters: [
        {
          key: 'gameid',
          label: 'Game ID',
          type: 'text',
          required: true,
          category: 'unique',
          placeholder: 'Enter game ID'
        },
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
            { value: '1', label: 'English (1)' },
            { value: '2', label: 'Hebrew (2)' },
            { value: '3', label: 'Arabic (3)' },
            { value: '31', label: 'Spanish (31)' }
          ]
        },
        {
          key: 'timezoneid',
          label: 'Timezone ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '1', label: 'UTC (1)' },
            { value: '2', label: 'Israel (2)' },
            { value: '3', label: 'Eastern (3)' },
            { value: '4', label: 'Central (4)' },
            { value: '5', label: 'Mountain (5)' },
            { value: '6', label: 'Pacific (6)' }
          ]
        },
        {
          key: 'userCountryId',
          label: 'User Country ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '6', label: 'Israel (6)' },
            { value: '21', label: 'United States (21)' },
            { value: '14', label: 'United Kingdom (14)' }
          ]
        }
      ]
    }
  ],
  scores: [
    {
      id: 'all-scores',
      label: 'All Scores',
      baseUrl: 'https://webws.365scores.com',
      endpoint: '/web/games/',
      parameters: [
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
          required: false,
          category: 'shared',
          options: [
            { value: '1', label: 'Soccer (1)' },
            { value: '2', label: 'Basketball (2)' },
            { value: '3', label: 'Tennis (3)' },
            { value: '4', label: 'Hockey (4)' },
            { value: '5', label: 'Baseball (5)' },
            { value: '6', label: 'American Football (6)' },
            { value: '12', label: 'Cricket (12)' }
          ]
        },
        {
          key: 'competitions',
          label: 'Competitions',
          type: 'text',
          required: false,
          category: 'shared',
          placeholder: 'Enter competition IDs (comma separated)'
        },
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
            { value: '1', label: 'English (1)' },
            { value: '2', label: 'Hebrew (2)' },
            { value: '3', label: 'Arabic (3)' },
            { value: '31', label: 'Spanish (31)' }
          ]
        },
        {
          key: 'timezoneid',
          label: 'Timezone ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '1', label: 'UTC (1)' },
            { value: '2', label: 'Israel (2)' },
            { value: '3', label: 'Eastern (3)' },
            { value: '4', label: 'Central (4)' },
            { value: '5', label: 'Mountain (5)' },
            { value: '6', label: 'Pacific (6)' }
          ]
        },
        {
          key: 'userCountryId',
          label: 'User Country ID',
          type: 'select',
          required: true,
          category: 'core',
          options: [
            { value: '6', label: 'Israel (6)' },
            { value: '21', label: 'United States (21)' },
            { value: '14', label: 'United Kingdom (14)' }
          ]
        }
      ]
    }
  ]
};