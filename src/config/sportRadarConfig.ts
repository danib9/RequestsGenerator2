export type SportRadarCategory = 'football' | 'tennis' | 'us-sports';

export const sportRadarCategoryOptions: Array<{ value: SportRadarCategory; label: string }> = [
  { value: 'football', label: 'Football' },
  { value: 'tennis', label: 'Tennis' },
  { value: 'us-sports', label: 'US Sports' }
];

export interface SportRadarRequestConfig {
  id: string;
  label: string;
  sportCategory: SportRadarCategory;
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
    sportCategory: 'us-sports',
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
    sportCategory: 'us-sports',
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
    sportCategory: 'us-sports',
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
    sportCategory: 'us-sports',
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
    sportCategory: 'us-sports',
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
    sportCategory: 'us-sports',
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
    id: 'all-competitions',
    label: 'All Competitions',
    sportCategory: 'football',
    baseUrl: 'https://api.sportradar.com/soccer-extended/trial/v4/en/competitions.json',
    parameters: []
  },
  {
    id: 'lineups',
    label: 'Lineups',
    sportCategory: 'football',
    baseUrl: 'https://api.sportradar.com/soccer-extended/trial/v4/en/sport_events',
    parameters: [
      {
        key: 'GameID',
        label: 'Game ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Game ID'
      }
    ]
  },
  {
    id: 'standings',
    label: 'Standings',
    sportCategory: 'us-sports',
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
    id: 'daily-summaries',
    label: 'Daily Summaries',
    sportCategory: 'football',
    baseUrl: 'https://api.sportradar.com/soccer/trial/v4/en/schedules',
    parameters: [
      {
        key: 'Date',
        label: 'Date',
        type: 'date',
        required: true,
        category: 'shared',
        placeholder: 'Select date'
      }
    ]
  },
  {
    id: 'team-profile',
    label: 'Team Profile',
    sportCategory: 'us-sports',
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
    id: 'advanced-analytics',
    label: 'Advanced Analytics',
    sportCategory: 'football',
    baseUrl: 'https://api.sportradar.com/soccer-extended/trial/v4/en/sport_events',
    parameters: [
      {
        key: 'GameID',
        label: 'Game ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Game ID'
      }
    ]
  },
  {
    id: 'player-profile',
    label: 'Player Profile',
    sportCategory: 'us-sports',
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
    sportCategory: 'us-sports',
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
    sportCategory: 'us-sports',
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
  },
  {
    id: 'soccer-season-schedule',
    label: 'Season Schedule',
    sportCategory: 'football',
    baseUrl: 'https://api.sportradar.com/soccer-extended/production/v4/en/seasons',
    parameters: [
      {
        key: 'SeasonID',
        label: 'Season ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Season ID'
      }
    ]
  },
  {
    id: 'tennis-all-competitions-per-day',
    label: 'All Competitions Per Day',
    sportCategory: 'tennis',
    baseUrl: 'https://api.sportradar.us/tennis/trial/v3/en/schedules',
    parameters: [
      {
        key: 'Date',
        label: 'Date',
        type: 'date',
        required: true,
        category: 'unique',
        placeholder: 'Select date'
      }
    ]
  },
  {
    id: 'tennis-game-data',
    label: 'Game Data',
    sportCategory: 'tennis',
    baseUrl: 'https://api.sportradar.us/tennis/trial/v3/en/sport_events',
    parameters: [
      {
        key: 'GameID',
        label: 'Game ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Game ID'
      }
    ]
  },
  {
    id: 'tennis-ranking',
    label: 'Tennis Ranking',
    sportCategory: 'tennis',
    baseUrl: 'https://api.sportradar.com/tennis/production/v3/en/rankings.json',
    parameters: []
  },
  {
    id: 'tennis-all-competitions',
    label: 'All Tennis Competitions',
    sportCategory: 'tennis',
    baseUrl: 'https://api.sportradar.com/tennis/production/v3/en/competitions.json',
    parameters: []
  },
  {
    id: 'tennis-womens-competitions',
    label: "All Women's Competitions",
    sportCategory: 'tennis',
    baseUrl: 'https://api.sportradar.com/tennis/production/v3/en/competitions/sr:competition:2553/info.json',
    parameters: []
  },
  {
    id: 'tennis-all-seasons',
    label: 'All Seasons',
    sportCategory: 'tennis',
    baseUrl: 'https://api.sportradar.com/tennis/production/v3/en/competitions/sr:competition:2555/seasons.json',
    parameters: []
  },
  {
    id: 'tennis-all-season-data',
    label: 'All Season Data',
    sportCategory: 'tennis',
    baseUrl: 'https://api.sportradar.com/tennis/production/v3/en/seasons/sr:season:120983/info.json',
    parameters: []
  }
];