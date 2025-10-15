export interface OptaRequestConfig {
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

export const optaRequestTypesConfig: OptaRequestConfig[] = [
  {
    id: 'tournament-schedule',
    label: 'Tournament Schedule',
    category: 'League',
    baseUrl: 'https://api.performfeeds.com/soccerdata/tournamentschedule/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'optaTournamentPID',
        label: 'Opta Tournament PID',
        type: 'text',
        required: true,
        category: 'unique',
        placeholder: 'Enter Opta Tournament PID'
      }
    ]
  },
  {
    id: 'career-history',
    label: 'Career History',
    category: 'Player',
    baseUrl: 'https://api.performfeeds.com/soccerdata/playercareer/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'player_id',
        label: 'Opta Person ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Opta Person ID'
      }
    ]
 },
 {
   id: 'transfer-history',
   label: 'Transfer History',
   category: 'Player',
   baseUrl: 'https://api.performfeeds.com/soccerdata/transfers/137iv2fgxqg281d2xtb1pl4oyi',
   parameters: [
     {
       key: 'player_id',
       label: 'Enter OPTA Person ID',
       type: 'text',
       required: true,
       category: 'shared',
       placeholder: 'Enter Opta Person ID'
     }
   ]
 },
 {
   id: 'match-events',
   label: 'Match Events (MA3)',
   category: 'Match',
   baseUrl: 'https://api.performfeeds.com/soccerdata/matchevent/137iv2fgxqg281d2xtb1pl4oyi',
   parameters: [
     {
       key: 'OptaGameID',
       label: 'Enter Opta Game ID',
       type: 'text',
       required: true,
       category: 'shared',
       placeholder: 'Enter Opta Game ID'
     }
   ]
  },
  {
    id: 'trophies',
    label: 'Trophies',
    category: 'Player',
    baseUrl: 'https://api.performfeeds.com/soccerdata/trophies/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'OptaPersonID',
        label: 'Opta Person ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Opta Person ID'
      }
    ]
  },
  {
    id: 'venues',
    label: 'Venues',
    category: 'Team',
    baseUrl: 'https://api.performfeeds.com/soccerdata/venues/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'OptaContestID',
        label: 'Enter Opta Contest ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Opta Contest ID'
      }
    ]
  },
  {
    id: 'squads',
    label: 'Squads',
    category: 'Team',
    baseUrl: 'https://api.performfeeds.com/soccerdata/squads/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'OptaContestID',
        label: 'Opta Contest ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Opta Contest ID'
      }
    ]
  },
  {
    id: 'referees',
    label: 'Referees',
    category: 'League',
    baseUrl: 'https://api.performfeeds.com/soccerdata/referees/1vmmaetzoxkgg1qf6pkpfmku0k',
    parameters: [
      {
        key: 'OPTATournamentCalendarID',
        label: 'OPTA Tournament Calendar ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter OPTA Tournament Calendar ID'
      }
    ]
  },
  {
    id: 'seasonal-stats',
    label: 'Seasonal Stats',
    category: 'League',
    baseUrl: 'https://api.performfeeds.com/soccerdata/seasonstats/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'OptaContestID',
        label: 'Opta Contest ID',
        type: 'text',
        required: false,
        category: 'shared',
        placeholder: 'Enter Opta Contest ID'
      },
      {
        key: 'OPTATournamentCalendarID',
        label: 'OPTA Tournament Calendar ID',
        type: 'text',
        required: false,
        category: 'shared',
        placeholder: 'Enter OPTA Tournament Calendar ID'
      }
    ]
  },
  {
    id: 'pbp',
    label: 'PBP',
    category: 'Match',
    baseUrl: 'https://api.performfeeds.com/soccerdata/commentary/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'OptaGameID',
        label: 'Opta Game ID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Opta Game ID'
      },
      {
        key: 'OPTALanguage',
        label: 'Language',
        type: 'select',
        required: false,
        category: 'shared',
        placeholder: 'Select language',
        options: [
          { value: 'en-gb', label: 'English (United Kingdom)' },
          { value: 'en-us', label: 'English (United States)' },
          { value: 'en-au', label: 'English (Australia)' },
          { value: 'fr-fr', label: 'French (France)' },
          { value: 'de-de', label: 'German (Deutsch, Germany)' },
          { value: 'it-it', label: 'Italian (Italy)' },
          { value: 'es-es', label: 'Spanish (Spain)' },
          { value: 'pt-pt', label: 'Portuguese (Portugal)' },
          { value: 'nl-nl', label: 'Dutch (Netherlands)' },
          { value: 'nb-no', label: 'Norwegian Bokmål (Norway)' },
          { value: 'nn-no', label: 'Norwegian Nynorsk (Norway)' },
          { value: 'sv-se', label: 'Swedish (Sweden)' },
          { value: 'da-dk', label: 'Danish (Denmark)' },
          { value: 'ca-es', label: 'Catalan (Spain)' },
          { value: 'es-419', label: 'Spanish (Latin American)' },
          { value: 'pt-br', label: 'Brazilian Portuguese' },
          { value: 'id-id', label: 'Indonesian (Bahasa Indonesia)' },
          { value: 'tr', label: 'Turkish' },
          { value: 'zh-cn', label: 'Chinese - Simplified' },
          { value: 'ar-sa', label: 'Arabic' }
        ]
      }
    ]
  },
  {
    id: 'seasonal-stats-team',
    label: 'Seasonal Stats',
    category: 'Team',
    baseUrl: 'https://api.performfeeds.com/soccerdata/seasonstats/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'OptaContestID',
        label: 'Opta Contest ID',
        type: 'text',
        required: false,
        category: 'shared',
        placeholder: 'Enter Opta Contest ID'
      },
      {
        key: 'OPTATournamentCalendarID',
        label: 'OPTA Tournament Calendar ID',
        type: 'text',
        required: false,
        category: 'shared',
        placeholder: 'Enter OPTA Tournament Calendar ID'
      }
    ]
  },
  {
    id: 'seasonal-stats-player',
    label: 'Seasonal Stats',
    category: 'Player',
    baseUrl: 'https://api.performfeeds.com/soccerdata/seasonstats/137iv2fgxqg281d2xtb1pl4oyi',
    parameters: [
      {
        key: 'OptaContestID',
        label: 'Opta Contest ID',
        type: 'text',
        required: false,
        category: 'shared',
        placeholder: 'Enter Opta Contest ID'
      },
      {
        key: 'OPTATournamentCalendarID',
        label: 'OPTA Tournament Calendar ID',
        type: 'text',
        required: false,
        category: 'shared',
        placeholder: 'Enter OPTA Tournament Calendar ID'
      }
    ]
  },
  {
    id: 'match-stats',
    label: 'Match Stats (MA2)',
    category: 'Match',
    baseUrl: 'https://api.performfeeds.com/soccerdata/matchstats/8a46333n0iqf19n7oh3f1953y',
    parameters: [
      {
        key: 'OptaPID',
        label: 'Enter Opta PID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Opta PID'
      }
    ]
  },
  {
    id: 'match-xg',
    label: 'Match xG (MA12)',
    category: 'Match',
    baseUrl: 'https://api.performfeeds.com/soccerdata/matchexpectedgoals/8a46333n0iqf19n7oh3f1953y',
    parameters: [
      {
        key: 'Opta_PID',
        label: 'Enter Opta PID',
        type: 'text',
        required: true,
        category: 'shared',
        placeholder: 'Enter Opta PID'
      }
    ]
  }
];