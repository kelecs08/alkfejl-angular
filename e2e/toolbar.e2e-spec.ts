import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Toolbar', () => {

    it('should navigate to the login page', () => {
        expect(getPath()).toEqual('/login');
    });

    it('should not show Add and Delete buttons', () => {
        browser.get('/');
        var buttons = element.all(by.css('button'));
        expect(buttons.count()).toEqual(4);
    });

    it('should show Add and Delete buttons', () => {
        browser.get('/login');
        element(by.css('input[type="text"]')).sendKeys('admin');
        element(by.css('input[type="password"]')).sendKeys('admin');
        element(by.buttonText('Login')).click();
        var buttons = element.all(by.css('button'));
        expect(buttons.count()).toEqual(5);
    });
});