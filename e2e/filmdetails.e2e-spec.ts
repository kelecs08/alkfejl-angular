import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Film details functionality', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should navigate to the homepage', () => {    
        expect(getPath()).toEqual('/');
    });

    it('should show the performances of the selected film', () => {
        element(by.cssContainingText('.films', 'The hangover')).click();
        element(by.cssContainingText('.mat-tab-label', 'Performance times')).click();
        var buttons = element.all(by.deepCss('button'));
        expect(buttons.count()).toEqual(7);
    });

    it('should navigate to the booking page', () => {
        element(by.cssContainingText('.films', 'The hangover')).click();
        element(by.cssContainingText('.mat-tab-label', 'Performance times')).click();
        element(by.cssContainingText('button', '13:00')).click();
        expect(getPath()).toEqual('/booking/5');
    });
});