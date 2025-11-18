import React, { useState } from 'react';
import { Copy, ExternalLink, Trash2 } from 'lucide-react';
import FormField from './FormField';
import { requestTypesConfig } from '../config/requestTypesConfig';
import { dsgRequestTypesConfig } from '../config/dsgRequestTypesConfig';
import { optaRequestTypesConfig } from '../config/optaRequestTypesConfig';
import { sportRadarRequestTypesConfig } from '../config/sportRadarConfig';
import { optaStandingsConfig } from '../config/optaStandingsConfig';

const RequestsGenerator: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    source: '',
    environment: '',
    requestType: ''
  });

  const [editableUrl, setEditableUrl] = useState<string>('');
  const [showCopyNotification, setShowCopyNotification] = useState<boolean>(false);

  const updateFormField = (field: string, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      
      // Clear dependent fields when source changes
      if (field === 'source' && value !== '365scores-ds') {
        newData.environment = '';
        newData.requestType = '';
        // Clear all request-specific parameters
        Object.keys(prev).forEach(key => {
          if (!['source', 'environment', 'requestType'].includes(key)) {
            newData[key] = '';
          }
        });
      }
      
      // Clear request-specific parameters when request type changes
      if (field === 'requestType') {
        Object.keys(prev).forEach(key => {
          if (!['source', 'environment', 'requestType'].includes(key)) {
            newData[key] = '';
          }
        });
        
        // Set default values for specific request types
        if (value === 'game-summary' && formData.source === 'sportRadar') {
          newData.SummaryType = 'summary';
        }
      }
      
      return newData;
    });
  };

  const clearForm = () => {
    setFormData({
      source: '',
      environment: '',
      requestType: ''
    });
    setEditableUrl('');
  };

  const generateRequestUrl = () => {
    const { source, environment, requestType } = formData;
    if (!source || !requestType) {
      return null;
    }

    // Handle 365Scores DS requests
    if (source === '365scores-ds') {
      if (!environment) {
        return null;
      }
      
      let requestConfig = null;
      for (const configs of Object.values(requestTypesConfig)) {
        requestConfig = configs.find(c => c.id === requestType);
        if (requestConfig) break;
      }
      
      if (!requestConfig) {
        return null;
      }

      const queryParts: string[] = [];
      
      // Add parameters based on the configuration, using aliases when available
      requestConfig.parameters.forEach(param => {
        const value = formData[param.key];
        if (value) {
          const paramKey = param.alias || param.key;
          // Use raw values without any encoding, but format dates for All Scores
          let formattedValue = value;
          if (requestType === 'all-scores' && (param.key === 'startdate' || param.key === 'enddate')) {
            // Convert from YYYY-MM-DD to DD/MM/YYYY
            const dateMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
            if (dateMatch) {
               const day = dateMatch[3].padStart(2, '0');
               const month = dateMatch[2].padStart(2, '0');
               const year = dateMatch[1];
               formattedValue = `${day}/${month}/${year}`;
              formattedValue = `${dateMatch[3]}/${dateMatch[2]}/${dateMatch[1]}`;
            }
          }
          queryParts.push(`${paramKey}=${formattedValue}`);
        }
      });

      const fullUrl = `${requestConfig.baseUrl}${requestConfig.endpoint}${queryParts.length ? '?' + queryParts.join('&') : ''}`;
      return fullUrl;
    }
    
    // Handle Opta requests
    if (source === 'opta') {
      const requestConfig = getSelectedRequestConfig();
      if (!requestConfig) {
        return null;
      }

      // For Opta Tournament Calendar, replace the Tournament PID in the URL
      if (requestType === 'tournament-schedule') {
        const optaTournamentPID = formData.optaTournamentPID;
        if (!optaTournamentPID) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/tournamentschedule/137iv2fgxqg281d2xtb1pl4oyi/${optaTournamentPID}?_fmt=json&_rt=b`;
      }
      
      // For Opta Standings, replace the Tournament Calendar ID in the URL
      if (requestType === 'standings') {
        const tournamentCalendarID = formData.tournamentCalendarID;
        if (!tournamentCalendarID) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/standings/137iv2fgxqg281d2xtb1pl4oyi?_rt=b&_fmt=json&tmcl=${tournamentCalendarID}&type=total`;
      }
      
      // For Opta Career History, replace the Person ID in the URL
      if (requestType === 'career-history') {
        const playerId = formData.player_id;
        if (!playerId) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/playercareer/137iv2fgxqg281d2xtb1pl4oyi?prsn=${playerId}&_fmt=json&_rt=b`;
      }
      
      // For Opta Transfer History, replace the Person ID in the URL
      if (requestType === 'transfer-history') {
        const playerId = formData.player_id;
        if (!playerId) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/transfers/137iv2fgxqg281d2xtb1pl4oyi?_rt=b&_fmt=json&prsn=${playerId}`;
      }
      
      // For Opta Venues, replace the Contest ID in the URL
      if (requestType === 'venues') {
        const optaContestID = formData.OptaContestID;
        if (!optaContestID) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/venues/137iv2fgxqg281d2xtb1pl4oyi?ctst=${optaContestID}&_fmt=json&_rt=b`;
      }
      
      // For Opta Match Events, replace the Game ID in the URL
      if (requestType === 'match-events') {
        const optaGameID = formData.OptaGameID;
        if (!optaGameID) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/matchevent/137iv2fgxqg281d2xtb1pl4oyi/${optaGameID}?_rt=b&_fmt=json`;
      }
      
      // For Opta Trophies, replace the Person ID in the URL
      if (requestType === 'trophies') {
        const optaPersonID = formData.OptaPersonID;
        if (!optaPersonID) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/trophies/137iv2fgxqg281d2xtb1pl4oyi?prsn=${optaPersonID}&_rt=b&_fmt=json`;
      }
      
      // For Opta Squads, replace the Contest ID in the URL
      if (requestType === 'squads') {
        const optaContestID = formData.OptaContestID;
        if (!optaContestID) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/squads/137iv2fgxqg281d2xtb1pl4oyi?ctst=${optaContestID}&_fmt=json&_rt=b&detailed=yes`;
      }
      
      // For Opta Referees, replace the Tournament Calendar ID in the URL
      if (requestType === 'referees') {
        const optaTournamentCalendarID = formData.OPTATournamentCalendarID;
        if (!optaTournamentCalendarID) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/referees/1vmmaetzoxkgg1qf6pkpfmku0k?_rt=b&tmcl=${optaTournamentCalendarID}&_fmt=json`;
      }
      
      // For Opta Seasonal Stats, build URL with optional parameters
      if (requestType === 'seasonal-stats' || requestType === 'seasonal-stats-team' || requestType === 'seasonal-stats-player') {
        const optaContestID = formData.OptaContestID;
        const optaTournamentCalendarID = formData.OPTATournamentCalendarID;
        
        const queryParams = [];
        if (optaContestID) {
          queryParams.push(`ctst=${optaContestID}`);
        }
        if (optaTournamentCalendarID) {
          queryParams.push(`tmcl=${optaTournamentCalendarID}`);
        }
        queryParams.push('detailed=yes', '_rt=b', '_fmt=json');
        
        return `https://api.performfeeds.com/soccerdata/seasonstats/137iv2fgxqg281d2xtb1pl4oyi?${queryParams.join('&')}`;
      }
      
      // For Opta PBP, replace the Game ID in the URL and add language parameter
      if (requestType === 'pbp') {
        const optaGameID = formData.OptaGameID;
        if (!optaGameID) {
          return null;
        }
        
        const queryParams = ['_rt=b', '_fmt=json', 'type=fallback'];
        const optaLanguage = formData.OPTALanguage;
        if (optaLanguage) {
          queryParams.push(`_lcl=${optaLanguage}`);
        }
        
        return `https://api.performfeeds.com/soccerdata/commentary/137iv2fgxqg281d2xtb1pl4oyi/${optaGameID}?${queryParams.join('&')}`;
      }
      
      // For Opta Match Stats, replace the Opta PID in the URL
      if (requestType === 'match-stats') {
        const optaPID = formData.OptaPID;
        if (!optaPID) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/matchstats/8a46333n0iqf19n7oh3f1953y/${optaPID}?_fmt=json&_rt=b&detailed=yes`;
      }
      
      // For Opta Match xG, replace the Opta PID in the URL
      if (requestType === 'match-xg') {
        const optaPID = formData.Opta_PID;
        if (!optaPID) {
          return null;
        }
        
        return `https://api.performfeeds.com/soccerdata/matchexpectedgoals/8a46333n0iqf19n7oh3f1953y/${optaPID}?_rt=b&_fmt=json`;
      }
    }

    // Handle DSG requests
    if (source === 'dsg') {
      const requestConfig = dsgRequestTypesConfig.find(config => config.id === requestType);
      if (!requestConfig) {
        return null;
      }

      // For DSG Game request, build the URL with sport type and match ID
      if (requestType === 'game') {
        const sportType = formData.sportType;
        const dsgMatchPID = formData.dsgMatchPID;
        
        if (!sportType || !dsgMatchPID) {
          return null;
        }
        
        return `${requestConfig.baseUrl}/${sportType.toLowerCase()}/get_matches?type=match&id=${dsgMatchPID}&client=365scores&authkey=20HY4kxTKp9UbiMV7wuyqOs8WfjPBZmgndo`;
      }
      
      // For DSG Daily Matches request, build the URL with sport type and date
      if (requestType === 'daily-matches') {
        const sportType = formData.sportType;
        const date = formData.date;
        
        if (!sportType || !date) {
          return null;
        }
        
        return `${requestConfig.baseUrl}/${sportType.toLowerCase()}/get_matches_day?day=${date}&client=365scores&authkey=20HY4kxTKp9UbiMV7wuyqOs8WfjPBZmgndo`;
      }
      
      // For DSG Team Squad request, build the URL with sport type and team ID
      if (requestType === 'team-squad') {
        const sportType = formData.sportType;
        const teamId = formData.Team_ID;
        
        if (!sportType || !teamId) {
          return null;
        }
        
        return `${requestConfig.baseUrl}/${sportType.toLowerCase()}/get_squad?team=${teamId}&client=365scores&authkey=20HY4kxTKp9UbiMV7wuyqOs8WfjPBZmgndo`;
      }
      
      // For DSG Player Request, build the URL with sport type and player ID
      if (requestType === 'player-request') {
        const sportType = formData.sportType;
        const playerId = formData.Player_ID;
        
        if (!sportType || !playerId) {
          return null;
        }
        
        return `${requestConfig.baseUrl}/${sportType.toLowerCase()}/get_peoples?id=${playerId}&client=365scores&authkey=20HY4kxTKp9UbiMV7wuyqOs8WfjPBZmgndo`;
      }
      
      // For DSG Play by Play request, build the URL with competition, version, and game PID
      if (requestType === 'play-by-play') {
        const competition = formData.DSGCompetition;
        const gamePID = formData.DSGGamePID;
        
        if (!competition || !gamePID) {
          return null;
        }
        
        // Determine version based on competition
        const version = ['nfl', 'ncaafb', 'nhl'].includes(competition) ? 'v7' : 'v8';
        
        return `https://api.sportradar.com/${competition}/official/production/${version}/en/games/${gamePID}/pbp.json?api_key=1xvTXAAxCa7D4kP4dzQ1E4XXobYFrjAi7r3lZeH4`;
      }
    }


    // Handle SportRadar requests
    if (source === 'sportRadar') {
      const requestConfig = sportRadarRequestTypesConfig.find(config => config.id === requestType);
      if (!requestConfig) {
        return null;
      }

      // For SportRadar Daily Schedule, build the URL with sport type and date
      if (requestType === 'daily-schedule') {
        const sportType = formData.sportType;
        const date = formData.date;
        
        if (!sportType || !date) {
          return null;
        }
        
        // Convert date from YYYY-MM-DD to YYYY/MM/DD format
        const formattedDate = date.replace(/-/g, '/');
        
        // Use v7 for NHL, v8 for all other competitions
        const apiVersion = sportType === 'nhl' ? 'v7' : 'v8';
        
        return `https://api.sportradar.com/${sportType.toLowerCase()}/production/${apiVersion}/en/games/${formattedDate}/schedule.json?api_key=1xvTXAAxCa7D4kP4dzQ1E4XXobYFrjAi7r3lZeH4`;
      }
      
      // For SportRadar Sport Event, build the URL with sport event ID
      if (requestType === 'sport-event') {
        const sportEventId = formData['sr:sport_event'];
        
        if (!sportEventId) {
          return null;
        }
        
        return `https://api.sportradar.us/tennis/trial/v3/en/sport_events/sr:sport_event:${sportEventId}/timeline.json?api_key=hdq7wcu8xkavawwtjjgp2hpp`;
      }
      
      // For SportRadar Game Boxscore, build the URL with game PID
      if (requestType === 'game-boxscore') {
        const competition = formData.Competition;
        const gameId = formData.SportRadarGamePID;
        
        if (!competition || !gameId) {
          return null;
        }
        
        // NFL uses "official" in the URL path, NCAAFB does not
        const urlPath = competition === 'nfl' 
          ? `${competition}/official/production/v7/en/games/${gameId}/boxscore.json`
          : `${competition}/production/v7/en/games/${gameId}/boxscore.json`;
        
        return `https://api.sportradar.com/${urlPath}?api_key=1xvTXAAxCa7D4kP4dzQ1E4XXobYFrjAi7r3lZeH4`;
      }
      
      // For SportRadar Season Schedule, build the URL with season year and type
      if (requestType === 'season-schedule') {
        const competition = formData.Competition;
        const seasonYear = formData.SeasonYear;
        const seasonType = formData.SeasonType;
        
        if (!competition || !seasonYear || !seasonType) {
          return null;
        }
        
        // NFL uses "official" in the URL path, NCAAFB does not
        const urlPath = competition === 'nfl' 
          ? `${competition}/official/production/v7/en/games/${seasonYear}/${seasonType}/schedule.json`
          : `${competition}/production/v7/en/games/${seasonYear}/${seasonType}/schedule.json`;
        
        return `https://api.sportradar.com/${urlPath}?api_key=1xvTXAAxCa7D4kP4dzQ1E4XXobYFrjAi7r3lZeH4`;
      }
      
      // For SportRadar Game Summary, build the URL with competition, PID, and summary type
      if (requestType === 'game-summary') {
        const competition = formData.Competition;
        const sportRadarPID = formData.SportRadarPID;
        const summaryType = formData.SummaryType;
        
        if (!competition || !sportRadarPID || !summaryType) {
          return null;
        }
        
        // Use v7 for NHL, v8 for all other competitions
        const apiVersion = competition === 'nhl' ? 'v7' : 'v8';
        
        return `https://api.sportradar.com/${competition}/production/${apiVersion}/en/games/${sportRadarPID}/${summaryType}.json?api_key=1xvTXAAxCa7D4kP4dzQ1E4XXobYFrjAi7r3lZeH4`;
      }
    }

    return null;
  };

  const getRequestTypeOptions = () => {
    if (formData.source === '365scores-ds') {
      const options: { value: string; label: string; category: string }[] = [];
      
      Object.entries(requestTypesConfig).forEach(([category, configs]) => {
        configs.forEach(config => {
          options.push({
            value: config.id,
            label: config.label,
            category: category
          });
        });
      });
      
      return options;
    }
    
    if (formData.source === 'opta') {
      const existingOptions = optaRequestTypesConfig.map(config => ({
        value: config.id,
        label: config.label,
        category: config.category || 'default'
      }));
      
      const standingsOptions = optaStandingsConfig.map(config => ({
        value: config.id,
        label: config.label,
        category: config.category || 'default'
      }));
      
      return [...existingOptions, ...standingsOptions];
    }
    
    if (formData.source === 'dsg') {
      return dsgRequestTypesConfig.map(config => ({
        value: config.id,
        label: config.label
      }));
    }
    
    if (formData.source === 'sportRadar') {
      return sportRadarRequestTypesConfig.map(config => ({
        value: config.id,
        label: config.label
      }));
    }
    
    return [];
  };

  const getSelectedRequestConfig = () => {
    if (formData.source === '365scores-ds') {
      for (const configs of Object.values(requestTypesConfig)) {
        const config = configs.find(c => c.id === formData.requestType);
        if (config) return config;
      }
      return null;
    }
    
    if (formData.source === 'opta') {
      const existingConfig = optaRequestTypesConfig.find(config => config.id === formData.requestType);
      if (existingConfig) return existingConfig;
      
      return optaStandingsConfig.find(config => config.id === formData.requestType);
    }
    
    if (formData.source === 'dsg') {
      return dsgRequestTypesConfig.find(config => config.id === formData.requestType);
    }
    
    if (formData.source === 'sportRadar') {
      return sportRadarRequestTypesConfig.find(config => config.id === formData.requestType);
    }
    
    return null;
  };

  const shouldShowEnvironment = () => {
    return formData.source === '365scores-ds';
  };

  const shouldShowRequestParameters = () => {
    if (formData.source === '365scores-ds') {
      return formData.environment && formData.requestType;
    }
    
    if (formData.source === 'opta') {
      return formData.requestType;
    }
    
    if (formData.source === 'dsg') {
      return formData.requestType;
    }
    
    if (formData.source === 'sportRadar') {
      return formData.requestType;
    }
    
    return false;
  };

  const requestUrl = generateRequestUrl();

  // Update editable URL when generated URL changes
  React.useEffect(() => {
    if (requestUrl) {
      setEditableUrl(requestUrl);
    }
  }, [requestUrl]);

  const copyToClipboard = () => {
    if (!editableUrl) {
      return;
    }
    
    navigator.clipboard.writeText(editableUrl).then(() => {
      setShowCopyNotification(true);
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 3000);
    }).catch(() => {
      // Fallback for browsers that don't support clipboard API
      setShowCopyNotification(true);
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 3000);
    });
  };

  const openInNewTab = () => {
    if (!editableUrl) {
      return;
    }
    
    window.open(editableUrl, '_blank');
  };

  const sourceOptions = [
    { value: '365scores-ds', label: '365Scores DS' },
    { value: 'opta', label: 'Opta' },
    { value: 'dsg', label: 'DSG' },
    { value: 'sportRadar', label: 'SportRadar' }
  ];

  const environmentOptions = [
    { value: 'production', label: 'Production' },
    { value: 'staging', label: 'Staging' },
    { value: 'development', label: 'Development' }
  ];

  // Get request type options based on selected source
  const requestTypeOptions = getRequestTypeOptions();

  // Get the selected request type configuration
  const selectedRequestConfig = getSelectedRequestConfig();

  // Group parameters by category for better organization
  const getParametersByCategory = () => {
    if (!selectedRequestConfig) return { unique: [], shared: [], core: [] };
    
    const unique = selectedRequestConfig.parameters.filter(p => p.category === 'unique');
    const shared = selectedRequestConfig.parameters.filter(p => p.category === 'shared');
    const core = selectedRequestConfig.parameters.filter(p => p.category === 'core');
    
    return { unique, shared, core };
  };

  const { unique, shared, core } = getParametersByCategory();

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Requests Generator</h1>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
          <FormField
            label="Source"
            value={formData.source}
            placeholder="Select source"
            required
            options={sourceOptions}
            disabledOptions={[]}
            onChange={(value) => updateFormField('source', value)}
          />
          
          {shouldShowEnvironment() && (
            <>
              <FormField
                label="Request type"
                value={formData.requestType}
                placeholder="Select request"
                required
                options={requestTypeOptions}
                disabledOptions={formData.source === 'opta' ? ['match-stats', 'match-xg'] : []}
                onChange={(value) => updateFormField('requestType', value)}
              />
              
              <FormField
                label="Environment"
                value={formData.environment}
                placeholder="Select environment"
                required
                options={environmentOptions}
                disabledOptions={['staging', 'development']}
                onChange={(value) => updateFormField('environment', value)}
              />
            </>
          )}
          
          {formData.source === 'opta' && (
            <FormField
              label="Request type"
              value={formData.requestType}
              placeholder="Select request"
              required
              options={requestTypeOptions}
              onChange={(value) => updateFormField('requestType', value)}
            />
          )}
          
          {formData.source === 'dsg' && (
            <FormField
              label="Request type"
              value={formData.requestType}
              placeholder="Select request"
              required
              options={requestTypeOptions}
              onChange={(value) => updateFormField('requestType', value)}
            />
          )}
          
          {formData.source === 'sportRadar' && (
            <FormField
              label="Request type"
              value={formData.requestType}
              placeholder="Select request"
              required
              options={requestTypeOptions}
              onChange={(value) => updateFormField('requestType', value)}
            />
          )}
          
          {/* Render parameters in order: Unique, Shared, Core */}
          {shouldShowRequestParameters() && (
            <>
              {/* Unique Parameters */}
              {unique.map((param) => (
                <FormField
                  key={param.key}
                  label={param.label}
                  value={formData[param.key] || ''}
                  placeholder={param.placeholder || `Enter ${param.label.toLowerCase()}`}
                  required={param.required}
                  type={param.type}
                  options={param.options}
                  onChange={(value) => updateFormField(param.key, value)}
                />
              ))}
              
              {/* Shared Parameters */}
              {shared.map((param) => (
                <FormField
                  key={param.key}
                  label={param.label}
                  value={formData[param.key] || ''}
                  placeholder={param.placeholder || `Enter ${param.label.toLowerCase()}`}
                  required={param.required}
                  type={param.type}
                  options={param.options}
                  onChange={(value) => updateFormField(param.key, value)}
                />
              ))}
              
              {/* Core Parameters */}
              {core.map((param) => (
                <FormField
                  key={param.key}
                  label={param.label}
                  value={formData[param.key] || ''}
                  placeholder={param.placeholder || `Enter ${param.label.toLowerCase()}`}
                  required={param.required}
                  type={param.type}
                  options={param.options}
                  onChange={(value) => updateFormField(param.key, value)}
                />
              ))}
            </>
          )}
        </div>
        
        {editableUrl && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Request URL</h3>
            {showCopyNotification && (
              <div className="mb-3 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md text-sm flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                URL copied to clipboard!
              </div>
            )}
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <textarea
                value={editableUrl}
                onChange={(e) => setEditableUrl(e.target.value)}
                className="text-sm text-gray-800 flex-1 sm:mr-4 bg-transparent border-none resize-none outline-none font-mono w-full"
                rows={Math.max(2, Math.ceil(editableUrl.length / 80))}
                style={{ minHeight: '2.5rem' }}
              />
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  onClick={copyToClipboard}
                  className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  title="Copy to clipboard"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={openInNewTab}
                  className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={clearForm}
            className="text-red-700 hover:text-red-800 hover:bg-red-50 border border-red-300 hover:border-red-400 px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-sm"
          >
            <div className="flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              Clear Form
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestsGenerator;