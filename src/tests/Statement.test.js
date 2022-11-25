import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App.js';

describe('Tests statement page', () => {

    it('should check inputs statement', async () => {
        render(<App />);
        const passwordInput = screen.getByTestId('password-id');
        const emailInput = screen.getByTestId('email-id');
        const loginButton = screen.getByTestId('login-button-id');
    
        fireEvent.change(passwordInput, { target: {
            value: 'Password1!23'
        }});
     
        fireEvent.change(emailInput, { target: {
            value: 'eduardo@gmail.com'
        }});
    
        expect(emailInput).toHaveValue('eduardo@gmail.com');
        expect(passwordInput).toHaveValue('Password1!23');
    
        fireEvent.click(loginButton);
    
        const mainPage = screen.getByTestId('main-test-id');
    
        expect(mainPage).toBeInTheDocument();

        const statementButton = screen.getByTestId('statement-button-id');

        fireEvent.click(statementButton);

        const statementPage = screen.getByTestId('statement-test-id');
       

        expect(statementPage).toBeInTheDocument();

        const initialDataInput = screen.getByTestId('initial-date-id');
        const endDataInput = screen.getByTestId('end-date-id');
    
        fireEvent.change(initialDataInput, { target: {
            value: new Date('11/11/2011')
        }});
        fireEvent.change(endDataInput, { target: {
            value: new Date('11/11/2011')
        }});
    });
});