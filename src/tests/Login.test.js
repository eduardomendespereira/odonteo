
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter, Routes } from 'react-router-dom';
import App from '../App.js';



describe('Test login page', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve({})
        }))
    })

    it('should get email input value', async () => {
        render(<App />);
        const emailInput = screen.getByTestId('email-id');

        fireEvent.change(emailInput, { target: {
            value: 'userFake@gmail.com'
        }});

        expect(emailInput).toHaveValue('userFake@gmail.com');
    });

    it('should get password input value', async () => {
        render(<App />);
        const passwordInput = screen.getByTestId('password-id');

        fireEvent.change(passwordInput, { target: {
            value: 'password123'
        }});

        expect(passwordInput).toHaveValue('password123');
    });
});
