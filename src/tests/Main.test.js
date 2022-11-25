import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App.js';

describe('Tests main page', () => {

    it('should check inputs main', async () => {
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

        const amountInput = screen.getByTestId('amount-id');
        const installmentsInput = screen.getByTestId('installments-id');
        const billingInput = screen.getByTestId('billing-day-id');
        const firstInstallmentDateInput = screen.getByTestId('first-installment-date-id');

        fireEvent.change(amountInput, { target: {
            value: 3500
        }});
        fireEvent.change(installmentsInput, { target: {
            value: 2
        }});
        fireEvent.change(billingInput, { target: {
            value: 15
        }});
        fireEvent.change(firstInstallmentDateInput, { target: {
            value: '2022-07-07' 
        }});
        
        expect(amountInput).toHaveValue(3500);
        expect(installmentsInput).toHaveValue(2);
        expect(billingInput).toHaveValue(15);
        expect(firstInstallmentDateInput).toHaveValue('2022-07-07');

        const registerButton = screen.getByTestId('register-button-id');

        fireEvent.click(registerButton);

        expect(mainPage).toBeInTheDocument('Informações em formato incorreto.');
    
    });
});