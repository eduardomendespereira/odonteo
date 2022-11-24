import { render, screen } from '@testing-library/react';
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

    // it('Should render main page', async () => {
    //     window.history.pushState({}, 'Main page', '/')

    //     render(<App/>)
    
    //     const mainPage = screen.getByTestId('main-test-id');

    //     expect(mainPage).toBeInTheDocument();
    // });

    // it('Should render statement page', async () => {
    //     window.history.pushState({}, 'Statement page', '/statement')

    //     render(<App/>)
    //     testeA();
    //     const statementPage = screen.getByTestId('statement-test-id');

    //     expect(mainPage).toBeInTheDocument();
    // });
});