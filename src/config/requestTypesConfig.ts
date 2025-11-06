export interface RequestParameter {
  key: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: 'select' | 'text' | 'date';
  options?: { value: string; label: string }[];
  category?: 'unique' | 'shared' | 'core';
  alias?: string; // For handling casing differences
}

export interface RequestTypeConfig {
  id: string;
  label: string;
  baseUrl: string;
  endpoint: string;
  parameters: RequestParameter[];
}

// Common parameter definitions
export const coreParameters: RequestParameter[] = [
  { 
    key: 'apptype', 
    label: 'App Type', 
    placeholder: 'e.g. 1,2 etc.', 
    type: 'select',
    category: 'core',
    alias: 'AppType'
  },
  { 
    key: 'appversion', 
    label: 'App Version', 
    placeholder: 'e.g. 9.9.9', 
    type: 'text',
    category: 'core',
    alias: 'AppVersion'
  },
  { 
    key: 'storeversion', 
    label: 'Store Version', 
    placeholder: 'e.g. 9.9.9', 
    type: 'text',
    category: 'core',
    alias: 'StoreVersion'
  },
  { 
    key: 'lang', 
    label: 'Language', 
    placeholder: 'Select language', 
    type: 'select',
    category: 'core',
    options: [
      { value: '1', label: 'English' },
      { value: '2', label: 'Hebrew-IL' },
      { value: '9', label: 'English-US' },
      { value: '10', label: 'English-GB' },
      { value: '12', label: 'Italian' },
      { value: '14', label: 'Spanish-ES' },
      { value: '15', label: 'French' },
      { value: '16', label: 'German' },
      { value: '21', label: 'Russian' },
      { value: '27', label: 'Arabic' },
      { value: '30', label: 'Portuguese-PT' },
      { value: '31', label: 'Portuguese-BR' },
      { value: '33', label: 'Turkish' },
      { value: '34', label: 'Indian' }
    ]
  },
  { 
    key: 'theme', 
    label: 'Theme', 
    placeholder: 'Select theme', 
    type: 'select',
    category: 'core',
    options: [
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' }
    ]
  },
  { 
    key: 'tz', 
    label: 'Timezone', 
    type: 'select',
    category: 'core',
    required: false,
    alias: 'timezone',
    options: [
      { value: '2', label: 'GMT' },
      { value: '5', label: 'Central Europe' },
      { value: '11', label: 'Middle East' },
      { value: '15', label: 'Israel' },
      { value: '33', label: 'India' },
      { value: '76', label: 'US Eastern' },
      { value: '77', label: 'Central America' },
      { value: '86', label: 'Pacific' },
      { value: '110', label: 'Central Brazilian' }
    ]
  },
  { 
    key: 'uc', 
    label: 'User Country', 
    placeholder: 'Enter user country ID', 
    type: 'select',
    category: 'core',
    options: [
      { value: '1', label: 'England' },
      { value: '2', label: 'Spain' },
      { value: '3', label: 'Italy' },
      { value: '4', label: 'Germany' },
      { value: '5', label: 'France' },
      { value: '6', label: 'Israel' },
      { value: '18', label: 'USA' },
      { value: '21', label: 'Brazil' },
      { value: '119', label: 'Jordan' }
    ]
  }
];

export const sharedParameters: RequestParameter[] = [
  { 
    key: 'usertestgroup', 
    label: 'User Test Group', 
    placeholder: 'Enter user test group', 
    type: 'text',
    category: 'shared',
    alias: 'UserTestGroup'
  },
  { 
    key: 'newslang', 
    label: 'News Language', 
    placeholder: 'Select language', 
    type: 'select',
    category: 'shared',
    alias: 'NewsLang',
    options: [
      { value: '1', label: 'English' },
      { value: '2', label: 'Hebrew-IL' },
      { value: '9', label: 'English-US' },
      { value: '10', label: 'English-GB' },
      { value: '12', label: 'Italian' },
      { value: '14', label: 'Spanish-ES' },
      { value: '15', label: 'French' },
      { value: '16', label: 'German' },
      { value: '21', label: 'Russian' },
      { value: '27', label: 'Arabic' },
      { value: '30', label: 'Portuguese-PT' },
      { value: '31', label: 'Portuguese-BR' },
      { value: '33', label: 'Turkish' },
      { value: '34', label: 'Indian' }
    ]
  },
  { 
    key: 'filtersourcesout', 
    label: 'Filter Sources Out', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'FilterSourcesOut',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'withmainodds', 
    label: 'With Main Odds', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'WithMainOdds',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'withoddspreviews', 
    label: 'With Odds Previews', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'WithOddsPreviews',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'withtransfers', 
    label: 'With Transfers', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'WithTransfers',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'oddsformat', 
    label: 'Odds Format', 
    placeholder: 'Enter odds format', 
    type: 'select',
    category: 'shared',
    alias: 'OddsFormat',
    options: [
          { value: '1', label: 'Decimal' },
          { value: '2', label: 'Fractional' },
          { value: '3', label: 'American' }
        ]
  },
  { 
    key: 'shownaodds', 
    label: 'Show NA Odds', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'ShowNAOdds',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'athletessupported', 
    label: 'Athletes Supported', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'athletesSupported',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'sections', 
    label: 'Sections', 
    placeholder: 'Select section', 
    type: 'select',
    category: 'shared',
    alias: 'Sections',
    options: [
      { value: 'Games', label: 'Games' },
      { value: 'Outrights', label: 'Outrights' },
      { value: 'PlayersStats', label: 'Players Stats' },
      { value: 'TeamsStats', label: 'Teams Stats' },
      { value: 'Details', label: 'Details' },
      { value: 'MATCHES', label: 'Matches' },
      { value: 'Standings', label: 'Standings' },
      { value: 'Trophies', label: 'Trophies' },
      { value: 'News', label: 'News' },
      { value: 'SOCIAL', label: 'Social' },
      { value: 'Chat', label: 'Chat' },
      { value: 'Transfers', label: 'Transfers' },
      { value: 'SQUAD', label: 'Squad' },
      { value: 'Highlights', label: 'Highlights' },
      { value: 'Scores', label: 'Scores' },
      { value: 'Buzz', label: 'Buzz' },
      { value: 'Brackets', label: 'Brackets' },
      { value: 'CompetitionsStats', label: 'Competitions Stats' },
      { value: 'Videos', label: 'Videos' },
      { value: 'Teams', label: 'Teams' },
      { value: 'History', label: 'History' },
      { value: 'DrawingOpponents', label: 'Drawing Opponents' }
    ]
  },
  { 
    key: 'light', 
    label: 'Light', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'withexpanded', 
    label: 'With Expanded', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'withExpanded',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'competitions', 
    label: 'Competitions', 
    placeholder: 'Comma separated competition IDs', 
    type: 'text',
    category: 'shared',
    alias: 'Competitions'
  },
  { 
    key: 'competitors', 
    label: 'Competitors', 
    placeholder: 'Comma separated competitor IDs', 
    type: 'text',
    category: 'shared',
    alias: 'Competitors'
  },
  { 
    key: 'games', 
    label: 'Games', 
    placeholder: 'Comma separated game IDs', 
    type: 'text',
    category: 'shared',
    alias: 'Games'
  },
  { 
    key: 'athletes', 
    label: 'Athletes', 
    placeholder: 'Comma separated athlete IDs', 
    type: 'text',
    category: 'shared',
    alias: 'Athletes'
  },
  { 
    key: 'isinitialstatsrequest', 
    label: 'Is Initial Stats Request', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'usercountry', 
    label: 'User Country', 
    placeholder: 'Enter user country ID', 
    type: 'select',
    category: 'shared',
    alias: 'UserCountry',
    options: [
      { value: '1', label: 'England' },
      { value: '2', label: 'Spain' },
      { value: '3', label: 'Italy' },
      { value: '4', label: 'Germany' },
      { value: '5', label: 'France' },
      { value: '6', label: 'Israel' },
      { value: '18', label: 'USA' },
      { value: '21', label: 'Brazil' },
      { value: '119', label: 'Jordan' }
    ]
  },
  { 
    key: 'countries', 
    label: 'Countries', 
    placeholder: 'Comma separated country IDs', 
    type: 'text',
    category: 'shared',
    alias: 'Countries'
  },
  { 
    key: 'onlyinlang', 
    label: 'Only In Language', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'OnlyInLang',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'onlyincountry', 
    label: 'Only In Country', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'OnlyInCountry',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  },
  { 
    key: 'newssources', 
    label: 'News Sources', 
    placeholder: 'Select News Source', 
    type: 'select',
    category: 'shared',
    options: [
          { value: '11', label: 'BBC' },
          { value: '12', label: 'Yahoo! Sports' },
          { value: '20', label: 'Mundo Deportivo' },
          { value: '22', label: 'La Nacion' },
          { value: '31', label: 'Sports.ru' },
          { value: '39', label: 'Daily Mail' },
          { value: '62', label: 'Twitter' },
          { value: '140', label: 'Globo Esporte' },
          { value: '250', label: 'news.sportbox.ru' },
          { value: '254', label: 'euro-football.ru' },
          { value: '312', label: 'El Comercio' },
          { value: '623', label: 'Mirror' },
          { value: '667', label: 'AZ Online' },
          { value: '1064', label: '365Scores Transfers' },
          { value: '1111', label: 'The Sun' },
          { value: '1861', label: 'Instagram' },
          { value: '1966', label: 'so3ody' },
          { value: '2065', label: 'Notícias 365Scores' },
          { value: '2121', label: 'أخبار365' },
          { value: '2262', label: '365Scores noticias' }
        ]
  },
  { 
    key: 'istablet', 
    label: 'Is Tablet', 
    placeholder: 'Select option', 
    type: 'select',
    category: 'shared',
    alias: 'IsTablet',
    options: [
      { value: 'true', label: 'True' },
      { value: 'false', label: 'False' }
    ]
  }
];

export const requestTypesConfig: Record<string, RequestTypeConfig[]> = {
  Init: [
    {
      id: 'init',
      label: 'Init',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Init/',
      parameters: [
        // Order: apptype, appversion, cache, category, lang, locale, storeversion, supportwebp, theme, timezone, uc
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'cache', label: 'Cache', placeholder: 'Enter cache value (e.g., _c)', type: 'text', category: 'unique' },
        { key: 'category', label: 'Category', placeholder: 'Enter category', type: 'select', category: 'unique', options: [
          { value: '1', label: 'CATEGORIES_NAMES' },
          { value: '2', label: 'LANG_NAMES' },
          { value: '3', label: 'COUNTRIES_NAMES' },
          { value: '4', label: 'COMPETITIONS_NAMES' },
          { value: '5', label: 'COMPETITORS' },
          { value: '11', label: 'DATA_SOURCES' },
          { value: '12', label: 'SEASONS_NAMES' },
          { value: '13', label: 'STAGES_NAMES' },
          { value: '16', label: 'ENUM_NAMES' },
          { value: '17', label: 'ENUM_ITEMS' },
          { value: '19', label: 'UPDATES_TYPES' },
          { value: '20', label: 'UPDATES_TYPES_PARAMS' },
          { value: '21', label: 'UPDATES_TYPES_PATTERNS' },
          { value: '22', label: 'SOCCER_PLAYER_NAMES' }, 
          { value: '23', label: 'TIME_ZONES' },
          { value: '736', label: 'MOBILE_APP' }
        ]},
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'locale', label: 'Locale', placeholder: 'Enter locale (e.g., en_IL)', type: 'text', category: 'unique' },
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'supportwebp', label: 'Support WebP', placeholder: 'Select option', type: 'select', category: 'unique', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', alias: 'timezone', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]}
      ]
    }
  ],
  Games: [
    {
      id: 'all-scores',
      label: 'All Scores',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Games/',
      parameters: [
        // Order: startdate, enddate, FullCurrTime, onlyvideos, sports, onlymajorgames, withExpanded, light, ShowNAOdds, FavoriteCompetitions, WithMainOdds, WithOddsPreviews, OddsFormat, lang, AppType, AppVersion, uc, usc, tz, theme, StoreVersion, athletesSupported
        { key: 'startdate', label: 'Start Date', placeholder: 'Select start date', type: 'date', category: 'unique' },
        { key: 'enddate', label: 'End Date', placeholder: 'Select end date', type: 'date', category: 'unique' },
        { key: 'fullcurrtime', label: 'Full Current Time', placeholder: 'Select option', type: 'select', category: 'unique', alias: 'FullCurrTime', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'onlyvideos', label: 'Only Videos', placeholder: 'Select option', type: 'select', category: 'unique', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'sports', label: 'Sport Type', placeholder: 'Select sport', type: 'select', category: 'unique', options: [
          { value: '1', label: 'Football' },
          { value: '2', label: 'Tennis' },
          { value: '3', label: 'Basketball' },
          { value: '4', label: 'Volleyball' },
          { value: '5', label: 'Handball' },
          { value: '6', label: 'A. Football' },
          { value: '7', label: 'Baseball' }
        ]},
        { key: 'onlymajorgames', label: 'Only Major Games', placeholder: 'Select option', type: 'select', category: 'unique', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withexpanded', label: 'With Expanded', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'withExpanded', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'light', label: 'Light', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'shownaodds', label: 'Show NA Odds', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'ShowNAOdds', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'favoritecompetitions', label: 'Favorite Competitions', placeholder: 'Comma separated competition IDs', type: 'text', category: 'unique', alias: 'FavoriteCompetitions' },
        { key: 'withmainodds', label: 'With Main Odds', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'WithMainOdds', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withoddspreviews', label: 'With Odds Previews', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'WithOddsPreviews', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'oddsformat', label: 'Odds Format', placeholder: 'Enter odds format', type: 'select', category: 'shared', alias: 'OddsFormat', options: [
          { value: '1', label: 'Decimal' },
          { value: '2', label: 'Fractional' },
          { value: '3', label: 'American' }
        ]},
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', alias: 'AppType', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core', alias: 'AppVersion' },
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'usc', label: 'USC', placeholder: 'Enter USC', type: 'text', category: 'unique' },
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core', alias: 'StoreVersion' },
        { key: 'athletessupported', label: 'Athletes Supported', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'athletesSupported', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]}
      ]
    },
    {
      id: 'game-center',
      label: 'Game Center',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Games/GameCenter/',
      parameters: [
        // Order: apptype, appversion, games, lang, oddsformat, shownaodds, storeversion, theme, topbm, tz, uc, usertestgroup, withexpanded, withexpandedstats, withnews, withstats
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'games', label: 'Game ID', placeholder: 'Enter game ID', type: 'text', category: 'unique', required: true },
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'oddsformat', label: 'Odds Format', placeholder: 'Enter odds format', type: 'select', category: 'shared', options: [
          { value: '1', label: 'Decimal' },
          { value: '2', label: 'Fractional' },
          { value: '3', label: 'American' }
        ]},
        { key: 'shownaodds', label: 'Show NA Odds', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
        { key: 'topbm', label: 'Top BM', placeholder: 'Enter Top BM', type: 'select', category: 'unique', options: [
          { value: '14', label: 'Bet365' },
          { value: '139', label: 'SportingBet' },
          { value: '156', label: 'NoviBet' },
          { value: '161', label: 'SuperBet' },
          { value: '3', label: 'William Hill' },
          { value: '9', label: 'BetWay' },
          { value: '10', label: 'BetFair' },
          { value: '1', label: 'Winner' },
          { value: '16', label: '365Scores' },
          { value: '123', label: '365Scores US' }
         ]},
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'usertestgroup', label: 'User Test Group', placeholder: 'Enter user test group', type: 'text', category: 'shared' },
        { key: 'withexpanded', label: 'With Expanded', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withexpandedstats', label: 'With Expanded Stats', placeholder: 'Select option', type: 'select', category: 'unique', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withnews', label: 'With News', placeholder: 'Select option', type: 'select', category: 'unique', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withstats', label: 'With Stats', placeholder: 'Select option', type: 'select', category: 'unique', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]}
      ]
    }
  ],
  Player: [
    {
      id: 'player-card',
      label: 'Player Card',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Entities/Athletes/',
      parameters: [
        // Order: apptype, appversion, athletes, fulldetails, lang, newslang, storeversion, theme, tz, uc, usertestgroup
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'athletes', label: 'Athlete ID', placeholder: 'Enter athlete ID', required: true, type: 'text', category: 'unique' },
        { key: 'fulldetails', label: 'Full Details', placeholder: 'Select option', type: 'select', category: 'unique', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'newslang', label: 'News Language', placeholder: 'Select language', type: 'select', category: 'shared', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'usertestgroup', label: 'User Test Group', placeholder: 'Enter user test group', type: 'text', category: 'shared' }
      ]
    },
    {
      id: 'player-next-game',
      label: 'Player Next Game',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Entities/Athletes/NextGame/',
      parameters: [
        // Order: athleteID, lang, apptype, appversion, uc, tz
        { key: 'athleteid', label: 'Athlete ID', placeholder: 'Enter athlete ID', required: true, type: 'text', category: 'unique', alias: 'athleteID' },
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]}
      ]
    }
  ],
  Competition: [
    {
      id: 'competition-dashboard',
      label: 'Competition Dashboard (Light)',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Dashboard/Light/',
      parameters: [
        // Order: apptype, appversion, competitions, filtersourcesout, lang, newslang, storeversion, theme, tz, uc, usertestgroup, withmainodds, withoddspreviews, withtransfers
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'competitions', label: 'Competitions', placeholder: 'Comma separated competition IDs', type: 'text', category: 'shared' },
        { key: 'filtersourcesout', label: 'Filter Sources Out', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'newslang', label: 'News Language', placeholder: 'Select language', type: 'select', category: 'shared', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
         { 
          key: 'sections', 
          label: 'Sections', 
          placeholder: 'Select section', 
          type: 'select',
          category: 'shared',
          alias: 'Sections',
          options: [
            { value: 'Games', label: 'Games' },
            { value: 'Outrights', label: 'Outrights' },
            { value: 'PlayersStats', label: 'Players Stats' },
            { value: 'TeamsStats', label: 'Teams Stats' },
            { value: 'Details', label: 'Details' },
            { value: 'MATCHES', label: 'Matches' },
            { value: 'Standings', label: 'Standings' },
            { value: 'Trophies', label: 'Trophies' },
            { value: 'News', label: 'News' },
            { value: 'SOCIAL', label: 'Social' },
            { value: 'Chat', label: 'Chat' },
            { value: 'Transfers', label: 'Transfers' },
            { value: 'SQUAD', label: 'Squad' },
            { value: 'Highlights', label: 'Highlights' },
            { value: 'Scores', label: 'Scores' },
            { value: 'Buzz', label: 'Buzz' },
            { value: 'Brackets', label: 'Brackets' },
            { value: 'CompetitionsStats', label: 'Competitions Stats' },
            { value: 'Videos', label: 'Videos' },
            { value: 'Teams', label: 'Teams' },
            { value: 'History', label: 'History' },
            { value: 'DrawingOpponents', label: 'Drawing Opponents' }
          ]
        },
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'usertestgroup', label: 'User Test Group', placeholder: 'Enter user test group', type: 'text', category: 'shared' },
        { key: 'withmainodds', label: 'With Main Odds', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withoddspreviews', label: 'With Odds Previews', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withtransfers', label: 'With Transfers', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]}
      ]
    },
    {
      id: 'competition-matches',
      label: 'Competition Matches',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Dashboard/',
      parameters: [
        // Order: apptype, appversion, competitions, filtersourcesout, lang, newslang, sections, storeversion, theme, tz, uc, usertestgroup, withmainodds, withoddspreviews, withtransfers
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'competitions', label: 'Competitions', placeholder: 'Comma separated competition IDs', type: 'text', category: 'shared' },
        { key: 'filtersourcesout', label: 'Filter Sources Out', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'newslang', label: 'News Language', placeholder: 'Select language', type: 'select', category: 'shared', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'sections', label: 'Sections', placeholder: 'Select section', type: 'select', category: 'shared', options: [
          { value: 'Games', label: 'Games' },
          { value: 'Outrights', label: 'Outrights' },
          { value: 'PlayersStats', label: 'Players Stats' },
          { value: 'TeamsStats', label: 'Teams Stats' },
          { value: 'Details', label: 'Details' },
          { value: 'MATCHES', label: 'Matches' },
          { value: 'Standings', label: 'Standings' },
          { value: 'Trophies', label: 'Trophies' },
          { value: 'News', label: 'News' },
          { value: 'SOCIAL', label: 'Social' },
          { value: 'Chat', label: 'Chat' },
          { value: 'Transfers', label: 'Transfers' },
          { value: 'SQUAD', label: 'Squad' },
          { value: 'Highlights', label: 'Highlights' }
        ]},
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'usertestgroup', label: 'User Test Group', placeholder: 'Enter user test group', type: 'text', category: 'shared' },
        { key: 'withmainodds', label: 'With Main Odds', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withoddspreviews', label: 'With Odds Previews', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withtransfers', label: 'With Transfers', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]}
      ]
    },
    {
      id: 'competition-player-stats',
      label: 'Competition Player Stats',
      
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Dashboard/Light/',
      parameters: [
        // Order: NewsLang, Countries, Competitions, Competitors, Games, Athletes, UserCountry, OnlyInLang, OnlyInCountry, WithTransfers, newsSources, FilterSourcesOut, IsTablet, Sections, isInitialStatsRequest, OddsFormat, lang, AppType, AppVersion, uc, tz, theme, StoreVersion, athletesSupported, UserTestGroup
        { key: 'newslang', label: 'News Language', placeholder: 'Select language', type: 'select', category: 'shared', alias: 'NewsLang',options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'countries', label: 'Countries', placeholder: 'Comma separated country IDs', type: 'select', category: 'shared', alias: 'Countries', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'competitions', label: 'Competitions', placeholder: 'Comma separated competition IDs', type: 'text', category: 'shared', alias: 'Competitions' },
        { key: 'competitors', label: 'Competitors', placeholder: 'Comma separated competitor IDs', type: 'text', category: 'shared', alias: 'Competitors' },
        { key: 'games', label: 'Games', placeholder: 'Comma separated game IDs', type: 'text', category: 'shared', alias: 'Games' },
        { key: 'athletes', label: 'Athletes', placeholder: 'Comma separated athlete IDs', type: 'text', category: 'shared', alias: 'Athletes' },
        { key: 'usercountry', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'shared', alias: 'UserCountry', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'onlyinlang', label: 'Only In Language', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'OnlyInLang', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'onlyincountry', label: 'Only In Country', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'OnlyInCountry', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withtransfers', label: 'With Transfers', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'WithTransfers', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'newssources', label: 'News Sources', placeholder: 'Comma separated news source IDs', type: 'select', category: 'shared', options: [
          { value: '11', label: 'BBC' },
          { value: '12', label: 'Yahoo! Sports' },
          { value: '20', label: 'Mundo Deportivo' },
          { value: '22', label: 'La Nacion' },
          { value: '31', label: 'Sports.ru' },
          { value: '39', label: 'Daily Mail' },
          { value: '62', label: 'Twitter' },
          { value: '140', label: 'Globo Esporte' },
          { value: '250', label: 'news.sportbox.ru' },
          { value: '254', label: 'euro-football.ru' },
          { value: '312', label: 'El Comercio' },
          { value: '623', label: 'Mirror' },
          { value: '667', label: 'AZ Online' },
          { value: '1064', label: '365Scores Transfers' },
          { value: '1111', label: 'The Sun' },
          { value: '1861', label: 'Instagram' },
          { value: '1966', label: 'so3ody' },
          { value: '2065', label: 'Notícias 365Scores' },
          { value: '2121', label: 'أخبار365' },
          { value: '2262', label: '365Scores noticias' }
        ]},
        { key: 'filtersourcesout', label: 'Filter Sources Out', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'FilterSourcesOut', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'istablet', label: 'Is Tablet', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'IsTablet', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'sections', label: 'Sections', placeholder: 'Select section', type: 'select', category: 'shared', alias: 'Sections', options: [
          { value: 'Games', label: 'Games' },
          { value: 'Outrights', label: 'Outrights' },
          { value: 'PlayersStats', label: 'Players Stats' },
          { value: 'TeamsStats', label: 'Teams Stats' },
          { value: 'Details', label: 'Details' },
          { value: 'MATCHES', label: 'Matches' },
          { value: 'Standings', label: 'Standings' },
          { value: 'Trophies', label: 'Trophies' },
          { value: 'News', label: 'News' },
          { value: 'SOCIAL', label: 'Social' },
          { value: 'Chat', label: 'Chat' },
          { value: 'Transfers', label: 'Transfers' },
          { value: 'SQUAD', label: 'Squad' },
          { value: 'Highlights', label: 'Highlights' }
        ]},
        { key: 'isinitialstatsrequest', label: 'Is Initial Stats Request', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ], alias: 'isInitialStatsRequest' },
        { key: 'oddsformat', label: 'Odds Format', placeholder: 'Enter odds format', type: 'select', category: 'shared', alias: 'OddsFormat', options: [
          { value: '1', label: 'Decimal' },
          { value: '2', label: 'Fractional' },
          { value: '3', label: 'American' }
        ]},
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', alias: 'AppType', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core', alias: 'AppVersion' },
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core', alias: 'StoreVersion' },
        { key: 'athletessupported', label: 'Athletes Supported', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'athletesSupported', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'usertestgroup', label: 'User Test Group', placeholder: 'Enter user test group', type: 'text', category: 'shared', alias: 'UserTestGroup' }
      ]
    },
    {
      id: 'competition-teams-stats',
      label: 'Competition Teams Stats',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Dashboard/Light/',
      parameters: [
        // Order: Same as player stats but Sections=TeamsStats
        { key: 'newslang', label: 'News Language', placeholder: 'Select language', type: 'select', category: 'shared', alias: 'NewsLang', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'countries', label: 'Countries', placeholder: 'Comma separated country IDs', type: 'select', category: 'shared', alias: 'Countries', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'competitions', label: 'Competitions', placeholder: 'Comma separated competition IDs', type: 'text', category: 'shared', alias: 'Competitions' },
        { key: 'competitors', label: 'Competitors', placeholder: 'Comma separated competitor IDs', type: 'text', category: 'shared', alias: 'Competitors' },
        { key: 'games', label: 'Games', placeholder: 'Comma separated game IDs', type: 'text', category: 'shared', alias: 'Games' },
        { key: 'athletes', label: 'Athletes', placeholder: 'Comma separated athlete IDs', type: 'text', category: 'shared', alias: 'Athletes' },
        { key: 'usercountry', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'shared', alias: 'UserCountry', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'onlyinlang', label: 'Only In Language', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'OnlyInLang', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'onlyincountry', label: 'Only In Country', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'OnlyInCountry', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withtransfers', label: 'With Transfers', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'WithTransfers', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'newssources', label: 'News Sources', placeholder: 'Comma separated news source IDs', type: 'select', category: 'shared', options: [
          { value: '11', label: 'BBC' },
          { value: '12', label: 'Yahoo! Sports' },
          { value: '20', label: 'Mundo Deportivo' },
          { value: '22', label: 'La Nacion' },
          { value: '31', label: 'Sports.ru' },
          { value: '39', label: 'Daily Mail' },
          { value: '62', label: 'Twitter' },
          { value: '140', label: 'Globo Esporte' },
          { value: '250', label: 'news.sportbox.ru' },
          { value: '254', label: 'euro-football.ru' },
          { value: '312', label: 'El Comercio' },
          { value: '623', label: 'Mirror' },
          { value: '667', label: 'AZ Online' },
          { value: '1064', label: '365Scores Transfers' },
          { value: '1111', label: 'The Sun' },
          { value: '1861', label: 'Instagram' },
          { value: '1966', label: 'so3ody' },
          { value: '2065', label: 'Notícias 365Scores' },
          { value: '2121', label: 'أخبار365' },
          { value: '2262', label: '365Scores noticias' }
        ]},
        { key: 'filtersourcesout', label: 'Filter Sources Out', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'FilterSourcesOut', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'istablet', label: 'Is Tablet', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'IsTablet', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'sections', label: 'Sections', placeholder: 'Select section', type: 'select', category: 'shared', alias: 'Sections', options: [
          { value: 'Games', label: 'Games' },
          { value: 'Outrights', label: 'Outrights' },
          { value: 'PlayersStats', label: 'Players Stats' },
          { value: 'TeamsStats', label: 'Teams Stats' },
          { value: 'Details', label: 'Details' },
          { value: 'MATCHES', label: 'Matches' },
          { value: 'Standings', label: 'Standings' },
          { value: 'Trophies', label: 'Trophies' },
          { value: 'News', label: 'News' },
          { value: 'SOCIAL', label: 'Social' },
          { value: 'Chat', label: 'Chat' },
          { value: 'Transfers', label: 'Transfers' },
          { value: 'SQUAD', label: 'Squad' },
          { value: 'Highlights', label: 'Highlights' }
        ]},
        { key: 'isinitialstatsrequest', label: 'Is Initial Stats Request', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ], alias: 'isInitialStatsRequest' },
        { key: 'oddsformat', label: 'Odds Format', placeholder: 'Enter odds format', type: 'select', category: 'shared', alias: 'OddsFormat', options: [
          { value: '1', label: 'Decimal' },
          { value: '2', label: 'Fractional' },
          { value: '3', label: 'American' }
        ]},
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', alias: 'AppType', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core', alias: 'AppVersion' },
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core', alias: 'StoreVersion' },
        { key: 'athletessupported', label: 'Athletes Supported', placeholder: 'Select option', type: 'select', category: 'shared', alias: 'athletesSupported', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'usertestgroup', label: 'User Test Group', placeholder: 'Enter user test group', type: 'text', category: 'shared', alias: 'UserTestGroup' }
      ]
    },
    {
      id: 'competition-outrights',
      label: 'Competition Outrights',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Dashboard/',
      parameters: [
        // Order: apptype, appversion, competitions, filtersourcesout, lang, newslang, sections, storeversion, theme, tz, uc, withmainodds, withoddspreviews, withtransfers
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'competitions', label: 'Competitions', placeholder: 'Comma separated competition IDs', type: 'text', category: 'shared' },
        { key: 'filtersourcesout', label: 'Filter Sources Out', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'newslang', label: 'News Language', placeholder: 'Select language', type: 'select', category: 'shared', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'sections', label: 'Sections', placeholder: 'Select section', type: 'select', category: 'shared', options: [
          { value: 'Games', label: 'Games' },
          { value: 'Outrights', label: 'Outrights' },
          { value: 'PlayersStats', label: 'Players Stats' },
          { value: 'TeamsStats', label: 'Teams Stats' },
          { value: 'Details', label: 'Details' },
          { value: 'MATCHES', label: 'Matches' },
          { value: 'Standings', label: 'Standings' },
          { value: 'TopScorers', label: 'TopScorers' },
          { value: 'TopAssists', label: 'TopAssists' },
          { value: 'TopCards', label: 'TopCards' },
          { value: 'Scores', label: 'Scores' },
          { value: 'Buzz', label: 'Buzz' },
          { value: 'Brackets', label: 'Brackets' },
          { value: 'CompetitionsStats', label: 'Competitions Stats' },
          { value: 'Videos', label: 'Videos' },
          { value: 'Teams', label: 'Teams' },
          { value: 'History', label: 'History' },
          { value: 'DrawingOpponents', label: 'Drawing Opponents' }
        ]},
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'withmainodds', label: 'With Main Odds', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withoddspreviews', label: 'With Odds Previews', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withtransfers', label: 'With Transfers', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]}
      ]
    }
  ],
  Competitor: [
    {
      id: 'competitor-dashboard',
      label: 'Competitor Dashboard (Light)',
      baseUrl: 'https://mobileapi.365scores.com',
      endpoint: '/Data/Dashboard/Light/',
      parameters: [
        // Order: apptype, appversion, competitors, filtersourcesout, lang, newslang, storeversion, theme, tz, uc, usertestgroup, withmainodds, withoddspreviews, withtransfers
        { key: 'apptype', label: 'App Type', placeholder: 'e.g. 1,2 etc.', type: 'select', category: 'core', options: [
          { value: '1', label: 'iPhone' },
          { value: '2', label: 'Android' },
          { value: '5', label: 'Web' }
        ]},
        { key: 'appversion', label: 'App Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'competitors', label: 'Competitors', placeholder: 'Comma separated competitor IDs', type: 'text', category: 'shared' },
        { key: 'filtersourcesout', label: 'Filter Sources Out', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'lang', label: 'Language', placeholder: 'Select language', type: 'select', category: 'core', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'newslang', label: 'News Language', placeholder: 'Select language', type: 'select', category: 'shared', options: [
          { value: '1', label: 'English' },
          { value: '2', label: 'Hebrew-IL' },
          { value: '9', label: 'English-US' },
          { value: '10', label: 'English-GB' },
          { value: '12', label: 'Italian' },
          { value: '14', label: 'Spanish-ES' },
          { value: '15', label: 'French' },
          { value: '16', label: 'German' },
          { value: '21', label: 'Russian' },
          { value: '27', label: 'Arabic' },
          { value: '30', label: 'Portuguese-PT' },
          { value: '31', label: 'Portuguese-BR' },
          { value: '33', label: 'Turkish' },
          { value: '34', label: 'Indian' }
        ]},
        { key: 'storeversion', label: 'Store Version', placeholder: 'e.g. 9.9.9', type: 'text', category: 'core' },
        { key: 'theme', label: 'Theme', placeholder: 'Select theme', type: 'select', category: 'core', options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' }
        ]},
        { key: 'tz', label: 'Timezone', placeholder: 'Enter timezone ID', type: 'select', category: 'core', options: [
          { value: '2', label: 'GMT' },
          { value: '5', label: 'Central Europe' },
          { value: '11', label: 'Middle East' },
          { value: '15', label: 'Israel' },
          { value: '33', label: 'India' },
          { value: '76', label: 'US Eastern' },
          { value: '77', label: 'Central America' },
          { value: '86', label: 'Pacific' },
          { value: '110', label: 'Central Brazilian' }
        ]},
        { key: 'uc', label: 'User Country', placeholder: 'Enter user country ID', type: 'select', category: 'core', options: [
          { value: '1', label: 'England' },
          { value: '2', label: 'Spain' },
          { value: '3', label: 'Italy' },
          { value: '4', label: 'Germany' },
          { value: '5', label: 'France' },
          { value: '6', label: 'Israel' },
          { value: '18', label: 'USA' },
          { value: '21', label: 'Brazil' },
          { value: '119', label: 'Jordan' }
        ]},
        { key: 'usertestgroup', label: 'User Test Group', placeholder: 'Enter user test group', type: 'text', category: 'shared' },
        { key: 'withmainodds', label: 'With Main Odds', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withoddspreviews', label: 'With Odds Previews', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]},
        { key: 'withtransfers', label: 'With Transfers', placeholder: 'Select option', type: 'select', category: 'shared', options: [
          { value: 'true', label: 'True' },
          { value: 'false', label: 'False' }
        ]}
      ]
    }
  ]
};

// DSG Request Types Configuration
export const dsgRequestTypesConfig = [
  {
    id: 'game',
    label: 'Game',
    baseUrl: 'https://dsg-api.com/clients/365scores',
    endpoint: '/get_matches',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select' as const,
        required: true,
        category: 'shared' as const,
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
        type: 'text' as const,
        required: true,
        category: 'shared' as const,
        placeholder: 'Enter DSG Match PID'
      }
    ]
  },
  {
    id: 'daily-matches',
    label: 'Daily Schedule',
    baseUrl: 'https://dsg-api.com/clients/365scores',
    endpoint: '/get_daily_schedule',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'shared',
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
        label: 'Daily Schedule',
        type: 'date',
        required: true,
        category: 'shared',
        placeholder: 'Select matches date'
      }
    ]
  },
  {
    id: 'team-squad',
    label: 'Team Squad',
    baseUrl: 'https://dsg-api.com/clients/365scores',
    endpoint: '/get_team_squad',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport Type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'basketball', label: 'Basketball' },
          { value: 'soccer', label: 'Soccer' },
          { value: 'tennis', label: 'Tennis' },
          { value: 'baseball', label: 'Baseball' },
          { value: 'football', label: 'Football' },
          { value: 'hockey', label: 'Hockey' }
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
    baseUrl: 'https://dsg-api.com/clients/365scores',
    endpoint: '/get_player',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport type',
        type: 'select',
        required: true,
        category: 'shared',
        options: [
          { value: 'soccer', label: 'Soccer' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'tennis', label: 'Tennis' },
          { value: 'baseball', label: 'Baseball' },
          { value: 'football', label: 'Football' },
          { value: 'hockey', label: 'Hockey' }
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

export const optaRequestTypesConfig: RequestTypeConfig[] = [
  {
    id: 'game-feed',
    label: 'Game Feed',
    baseUrl: 'https://api.performfeeds.com/soccerdata/match',
    endpoint: '',
    parameters: [
      {
        key: 'optaPID',
        label: 'Opta P.ID',
        type: 'text' as const,
        required: true,
        category: 'unique' as const,
        placeholder: 'Enter Opta P.ID'
      }
    ]
  },
  {
    id: 'tournament-schedule',
    label: 'Tournament Schedule',
    baseUrl: 'https://api.performfeeds.com/soccerdata/tournamentschedule/137iv2fgxqg281d2xtb1pl4oyi',
    endpoint: '',
    parameters: [
      { key: 'optaTournamentPID', label: 'Tournament Calendar PID', placeholder: 'Enter Tournament Calendar PID', type: 'text', category: 'unique', required: true }
      ]
    }
  ];

// SportRadar request types configuration
export const sportRadarRequestTypesConfig = [
  {
    id: 'daily-schedule',
    label: 'Daily Schedule',
    baseUrl: 'https://api.sportradar.com',
    endpoint: '',
    parameters: [
      {
        key: 'sportType',
        label: 'Sport type',
        type: 'select' as const,
        category: 'unique',
        required: true,
        options: [
          { value: 'soccer', label: 'Soccer' },
          { value: 'basketball', label: 'Basketball' },
          { value: 'tennis', label: 'Tennis' }
        ]
      },
      {
        key: 'date',
        label: 'Date',
        type: 'date' as const,
        category: 'unique',
        required: true,
        placeholder: 'Select date'
      }
    ]
  }
];