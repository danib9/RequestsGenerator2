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
        label: 'Competitions',
        type: 'select',
        required: true,
        category: 'unique',
        options: [
          { value: 'nba', label: 'NBA' },
          { value: 'wnba', label: 'WNBA' },
          { value: 'ncaamb', label: 'NCAAMB' },
          { value: 'nhl', label: 'NHL' },
          { value: 'mlb', label: 'MLB' }
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
    id: 'sport-event',
    label: 'Sport Event',
    baseUrl: 'https://api.sportradar.us',
    parameters: [
      {
        key: 'sr:sport_event',
        label: 'Sport Event',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Sport Event ID'
      }
    ]
  },
  {
    id: 'game-boxscore',
    label: 'Game Boxscore',
    baseUrl: 'https://api.sportradar.com/nfl/official/production/v7/en/games',
    parameters: [
      {
        key: 'Competition',
        label: 'Competition',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'nfl', label: 'NFL' },
          { value: 'ncaafb', label: 'NCAAFB' }
        ]
      },
      {
        key: 'SportRadarGamePID',
        label: 'SportRadar Game PID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter SportRadar Game PID'
      }
    ]
  },
  {
    id: 'season-schedule',
    label: 'Season Schedule',
    baseUrl: 'https://api.sportradar.com/nfl/official/production/v7/en/games',
    parameters: [
      {
        key: 'Competition',
        label: 'Competition',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'nfl', label: 'NFL' },
          { value: 'ncaafb', label: 'NCAAFB' }
        ]
      },
      {
        key: 'SeasonYear',
        label: 'Season Year',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Season Year'
      },
      {
        key: 'SeasonType',
        label: 'Season Type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'PRE', label: 'Pre Season' },
          { value: 'REG', label: 'Regular Season' },
          { value: 'PST', label: 'Post Season' }
        ]
      }
    ]
  },
  {
    id: 'game-summary',
    label: 'Game Summary',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'Competition',
        label: 'Competition',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'nba', label: 'NBA' },
          { value: 'wnba', label: 'WNBA' },
          { value: 'ncaamb', label: 'NCAAB' },
          { value: 'nhl', label: 'NHL' },
          { value: 'mlb', label: 'MLB' }
        ]
      },
      {
        key: 'SportRadarPID',
        label: 'SportRadar PID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter SportRadar PID'
      },
      {
        key: 'SummaryType',
        label: 'Summary Type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'summary', label: 'Regular (Default)' },
          { value: 'extended_summary', label: 'Extended' }
        ]
      }
    ]
  },
  {
    id: 'play-by-play',
    label: 'Play by Play',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'DSGCompetition',
        label: 'DSG Competition',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'nfl', label: 'NFL' },
          { value: 'ncaafb', label: 'NCAAFB' },
          { value: 'nba', label: 'NBA' },
          { value: 'wnba', label: 'WNBA' },
          { value: 'ncaamb', label: 'NCAAMB' },
          { value: 'nhl', label: 'NHL' },
          { value: 'mlb', label: 'MLB' }
        ]
      },
      {
        key: 'DSGGamePID',
        label: 'DSG Game PID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter DSG Game PID'
      }
    ]
  },
  {
    id: 'standings',
    label: 'Standings',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'DSGCompetition',
        label: 'DSG Competition',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'nfl', label: 'NFL' },
          { value: 'nba', label: 'NBA' },
          { value: 'wnba', label: 'WNBA' },
          { value: 'nhl', label: 'NHL' },
          { value: 'mlb', label: 'MLB' }
        ]
      },
      {
        key: 'SeasonYear',
        label: 'Season Year',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: '2023', label: '2023' },
          { value: '2024', label: '2024' },
          { value: '2025', label: '2025' },
          { value: '2026', label: '2026' }
        ]
      },
      {
        key: 'SeasonType',
        label: 'Season Type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'PRE', label: 'Pre Season' },
          { value: 'REG', label: 'Regular Season' },
          { value: 'PST', label: 'Post Season' }
        ]
      }
    ]
  },
  {
    id: 'team-profile',
    label: 'Team Profile',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'DSGCompetition',
        label: 'DSG Competition',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'nfl', label: 'NFL' },
          { value: 'nba', label: 'NBA' },
          { value: 'wnba', label: 'WNBA' },
          { value: 'nhl', label: 'NHL' },
          { value: 'mlb', label: 'MLB' }
        ]
      },
      {
        key: 'DSGTeamPID',
        label: 'DSG Team PID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter DSG Team PID'
      }
    ]
  },
  {
    id: 'player-profile',
    label: 'Player Profile',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'DSGCompetition',
        label: 'DSG Competition',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'nfl', label: 'NFL' },
          { value: 'nba', label: 'NBA' },
          { value: 'wnba', label: 'WNBA' },
          { value: 'nhl', label: 'NHL' },
          { value: 'mlb', label: 'MLB' }
        ]
      },
      {
        key: 'DSGPlayerPID',
        label: 'DSG Player PID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter DSG Player PID'
      }
    ]
  },
  {
    id: 'game-statistics',
    label: 'Game Statistics',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'DSGCompetition',
        label: 'DSG Competition',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'nfl', label: 'NFL' },
          { value: 'ncaafb', label: 'NCAAF' }
        ]
      },
      {
        key: 'DSGGamePID',
        label: 'DSG Game PID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter DSG Game PID'
      }
    ]
  },
  {
    id: 'current-week-schedule',
    label: 'Current Week Schedule',
    baseUrl: 'https://api.sportradar.com',
    parameters: [
      {
        key: 'DSGCompetition',
        label: 'DSG Competition',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'ncaafb', label: 'NCAAFB' }
        ]
      }
    ]
  }
];