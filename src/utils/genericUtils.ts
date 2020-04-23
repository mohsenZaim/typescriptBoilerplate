export function navigation(history: any, location: any, path: string, replace?: boolean, deleteParam?: string): void {
    let url = path + location.search;
    if (location.search !== "" && deleteParam) {
        const urlParams = new URLSearchParams(location.search);
        urlParams.delete(deleteParam);
        url = path + "?" + urlParams.toString();
    }
    if (replace) {
        history.replace(url);
    } else {
        history.push(url);
    }
}