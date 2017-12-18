import { browser, by, element } from 'protractor';
import { getPath } from './getpath';

describe('Login functionality', () => {
    beforeEach(() => {
        browser.get('/login');
    });

    it('should navigate to the login page', () => {
        expect(getPath()).toEqual('/login');
    });

    it('should fail to login for empty credentials', () => {
        element(by.buttonText('Login')).click();
        expect(getPath()).toEqual('/login');
    });

    it('should fail to login for invalid credentials', () => {
        element(by.css('input[type="text"]')).sendKeys('lol');
        element(by.css('input[type="password"]')).sendKeys('éasklduélasukdtzé');
        element(by.buttonText('Login')).click();
        expect(getPath()).toEqual('/login');
    });

    it('should log in for valid credentials', () => {
        element(by.css('input[type="text"]')).sendKeys('anna');
        element(by.css('input[type="password"]')).sendKeys('anna');
        element(by.buttonText('Login')).click();
        expect(getPath()).toEqual('/');
    });
});