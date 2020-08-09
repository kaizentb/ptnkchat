/**
 * Parse configuration from environment (`.env` is supported).
 * Fallback to default value if not available.
 * @packageDocumentation
 */

/**
 * Parse string from environment variable
 * @param key - Environment key
 */
const parseEnvString = (key: string): string | undefined => {
  return process.env[key];
};

/**
 * Parse number from environment variable
 * @param key - Environment key
 */
const parseEnvNumber = (key: string): number | undefined => {
  if (process.env[key]) {
    return Number(process.env[key]);
  } else {
    return undefined;
  }
};

/**
 * Parse boolean from environment variable
 * @param key - Environment key
 */
const parseEnvBoolean = (key: string): boolean | undefined => {
  if (process.env[key]) {
    return String(process.env[key]).toLowerCase() === 'true';
  } else {
    return undefined;
  }
};

export interface ConfigProps {
  MAINTENANCE: boolean;
  GRAPH_API: string;
  APP_SECRET: string;
  PAGE_ACCESS_TOKEN: string;
  PAGE_VERIFY_TOKEN: string;
  MAX_MESSAGE_LENGTH: number;
  APP_NAME: string;
  HEROKU_API_KEY: string;
  MONGO_URI: string;
  HAS_POST_LOG: boolean;
  POST_LOG_ID: string;
  POST_LOG_P1: string;
  POST_LOG_P2: string;
  POST_LOG_NAME1: string;
  POST_LOG_NAME2: string;
  REPORT_LINK: string;
  MAX_PEOPLE_IN_WAITROOM: number;
  MAX_WAIT_TIME_MINUTES: number;
  ADMIN_PASSWORD: string;
  MAX_SESSION_MINUTES: number;
  DEV_ID: string;
  VERSION: string;
}
//change something
export default {
  // Maintenance mode
  MAINTENANCE: parseEnvBoolean('MAINTENANCE') || false,

  // Graph API
  GRAPH_API: parseEnvString('GRAPH_API') || 'https://graph.facebook.com/v7.0',

  // App secret
  APP_SECRET: parseEnvString('APP_SECRET') || '68a91f0b986b63ddb58775f4560331dc',

  // Page access token
  PAGE_ACCESS_TOKEN: parseEnvString('PAGE_ACCESS_TOKEN') || 'EAAEmaryVOsgBAGZBNolIzQL5FwOj0lBLcMLwpZBI6kxyynXL9LNi26sp4eyesaZBjeqhvOBkAmwHmd0OZCHsyYpCte0R7GmRGIeZCjJllz74LODprj5orfRb69ncnuyTJLf20EwsFe8CCrSPZAMsXiv8HcszXNWe9HPI7tcgdsagZDZD',

  // Page verify token
  PAGE_VERIFY_TOKEN: parseEnvString('PAGE_VERIFY_TOKEN') || 'helloworld',

  // Maximum length of text message
  MAX_MESSAGE_LENGTH: parseEnvNumber('MAX_MESSAGE_LENGTH') || 2000,

  // App name (must be the same on Heroku)
  APP_NAME: parseEnvString('APP_NAME') || 'mtachatbot',

  // Heroku API key
  HEROKU_API_KEY: parseEnvString('HEROKU_API_KEY') || 'acb1f3f5-fecc-4894-ac30-415e29b36968',

  // URI to MongoDB server
  MONGO_URI: parseEnvString('MONGO_URI') || 'mongodb+srv://User:123456789jk@cluster0.llu4v.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',

  // Logging stuffs
  HAS_POST_LOG: parseEnvBoolean('HAS_POST_LOG') || true,
  POST_LOG_ID: parseEnvString('POST_LOG_ID') || '',
  POST_LOG_P1: parseEnvString('POST_LOG_P1') || '',
  POST_LOG_P2: parseEnvString('POST_LOG_P2') || '',
  POST_LOG_NAME1: parseEnvString('POST_LOG_NAME1') || '',
  POST_LOG_NAME2: parseEnvString('POST_LOG_NAME2') || '',

  // Link to Google Form for reporting
  REPORT_LINK: parseEnvString('REPORT_LINK') || 'https://forms.gle/nsXUn7qBpnbaCjEJ7',

  // Maximum number of people in wait room
  MAX_PEOPLE_IN_WAITROOM: parseEnvNumber('MAX_PEOPLE_IN_WAITROOM') || 20,

  // Maximum amount of time in wait room
  // 0 for unlimited
  MAX_WAIT_TIME_MINUTES: parseEnvNumber('MAX_WAIT_TIME_MINUTES') || 240,

  // Password to log into admin page
  ADMIN_PASSWORD: parseEnvString('ADMIN_PASSWORD') || '',

  // Maximum amount of time of a session
  // 0 for unlimited
  MAX_SESSION_MINUTES: parseEnvNumber('MAX_SESSION_MINUTES') || 240, // Thời gian 1 session

  // ID of developer's Facebook account
  DEV_ID: parseEnvString('DEV_ID') || '',

  // Project version. You don't need to set this.
  VERSION: require('../../package.json').version
} as ConfigProps;
