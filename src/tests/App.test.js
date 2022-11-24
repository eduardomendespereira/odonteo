import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App.js';

describe('Test sanity of routes', () => {
    beforeEach(() => {
        const currentState = window.history.state;

        window.history.replaceState(currentState, '', '/');
    });

    it('Should render login page', async () => {
        window.history.pushState({}, 'Login page', '/login')

        render(<App/>)

        const loginPage = screen.getByTestId('login-test-id');

        expect(loginPage).toBeInTheDocument();
    });

    it('should get main page', async () => {
        render(<App />);
        const passwordInput = screen.getByTestId('password-id');
        const emailInput = screen.getByTestId('email-id');

        const loginButton = screen.getByTestId('login-button-id');

        fireEvent.change(passwordInput, { target: {
            value: 'Password1!23'
        }});
     
        fireEvent.change(emailInput, { target: {
            value: 'userFake@gmail.com'
        }});

        expect(emailInput).toHaveValue('userFake@gmail.com');
        expect(passwordInput).toHaveValue('Password1!23');

        fireEvent.click(loginButton);

        const mainPage = screen.getByTestId('main-test-id');

        expect(mainPage).toBeInTheDocument();
    });

    it('should get statement page', async () => {
        window.history.pushState({}, 'Login page', '/login')
        render(<App />);
        const passwordInput = screen.getByTestId('password-id');
        const emailInput = screen.getByTestId('email-id');

        const loginButton = screen.getByTestId('login-button-id');

        fireEvent.change(passwordInput, { target: {
            value: 'Password1!23'
        }});
     
        fireEvent.change(emailInput, { target: {
            value: 'userFake@gmail.com'
        }});

        expect(emailInput).toHaveValue('userFake@gmail.com');
        expect(passwordInput).toHaveValue('Password1!23');

        fireEvent.click(loginButton);

        const statementButton = screen.getByTestId('statement-button-id');

        fireEvent.click(statementButton);

        const statementPage = screen.getByTestId('statement-test-id');
       

        expect(statementPage).toBeInTheDocument();
    });
});