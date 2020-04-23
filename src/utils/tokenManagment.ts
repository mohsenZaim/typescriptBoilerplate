import configs from "../configs";
// Get, Set and Remove a global AccessToken
// At the moment token has been kept presistantly
let accessToken: string = null;

/**
 * Set the token and store it in localStorage
 * @param {string} value Token value
 */
export function setAccessToken(value: string): void {
    accessToken = "Bearer " + value;
    if (configs && configs.tokenStorage) {
        switch (configs.tokenStorage) {
            case "TOKEN_SESSION":
                sessionStorage.setItem("TOKEN", accessToken);
                break;
            case "TOKEN_PERSIST":
                localStorage.setItem("TOKEN", accessToken);
                break;
            default:
                accessToken = value;
        }
    }
}

/**
 * Retrieves the token from localStorage
 * @returns {string} The token
 */
export function getAccessToken(): string {
    if (configs && configs.tokenStorage) {
        switch (configs.tokenStorage) {
            case "TOKEN_SESSION":
                if (sessionStorage.getItem("TOKEN")) {
                    accessToken = sessionStorage.getItem("TOKEN");
                }
                break;
            case "TOKEN_PERSIST":
                if (localStorage.getItem("TOKEN")) {
                    accessToken = localStorage.getItem("TOKEN");
                }
                break;
            default:
                accessToken = accessToken;
        }
    }
    return accessToken;
}

/**
 * Removes the access token from localStorage
 */
export function removeAccessToken(): void {
    accessToken = null;
    if (configs && configs.tokenStorage) {
        switch (configs.tokenStorage) {
            case "TOKEN_SESSION":
                if (sessionStorage.getItem("TOKEN")) {
                    sessionStorage.removeItem("TOKEN");
                }
                break;
            case "TOKEN_PERSIST":
                if (localStorage.getItem("TOKEN")) {
                    localStorage.removeItem("TOKEN");
                }
                break;
            default:
                accessToken = null;
        }
    }
}
