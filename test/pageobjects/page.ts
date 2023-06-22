import { BrowsingContextNavigateResult } from '../node_modules/webdriver/build/bidi/localTypes';

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Opens a sub page of the page
     * @param path path of the sub page (e.g. /path/to/page.html)
     */
    async open(path: string): Promise<string | BrowsingContextNavigateResult> {
        return browser.url(`https://the-internet.herokuapp.com/${path}`);
    }
}
