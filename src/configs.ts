// API CALL TYPE
const TYPE_LOCAL = "LOCAL";
const TYPE_REST = "REST";

// LANGUAGES
const LANG_EN = "en";
const LANG_MALAY = "my";
const LANG_CHINESE = "ch";

// TOKEN storage
const TOKEN_MEMORY = "TOKEN_MEMORY";
const TOKEN_SESSION = "TOKEN_SESSION";
const TOKEN_PERSIST = "TOKEN_PERSIST";

// API Domain using .env variable
const DOMAIN = process.env.DOMAIN ? process.env.DOMAIN : "http://domain.com" ;

// API contexts
// We will pass this to swagger class constractor if we need different base urls
const DEFAULT = "";
const SECONDARY = "/something";

// CONFIG DATA (Please change here only)
const configs = {
    delay: 500,
    toastDelay: 5000,
    domain: DOMAIN,
    tokenStorage: TOKEN_MEMORY,
    type: process.env.NODE_ENV === "production" ? TYPE_REST : TYPE_LOCAL,
    context: DEFAULT,
    lang: LANG_EN,
    activateSW: false
};

export default configs;
