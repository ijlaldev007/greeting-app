import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../ui/card';
import PhoneNumberInput from '../ui/phone-number-input';
import EmailInput from '../ui/email-input';
import { NextButton } from '../ui/button';
import { authService } from '../../firebase/auth-service';

type AuthMethod = 'phone' | 'email';

const AuthScreen: React.FC = () => {
  const navigate = useNavigate();
  const [authMethod, setAuthMethod] = useState<AuthMethod>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (authMethod === 'phone') {
        authService.initRecaptcha('sign-in-button');
        await authService.signInWithPhone(phoneNumber);
        // Handle phone verification flow
      } else {
        // For demo purposes, we're just signing up with email
        // In a real app, you'd want to handle both sign in and sign up
        await authService.signUpWithEmail(email, 'temporary-password');
      }
      navigate('/create-greeting');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4'>
      <Card className='w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center mb-6'>
          Sign In to Create Greetings
        </h2>

        <div className='space-y-4'>
          <div className='flex gap-4 mb-6'>
            <button
              className={`flex-1 py-2 rounded-lg ${
                authMethod === 'phone'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}
              onClick={() => setAuthMethod('phone')}
            >
              Phone
            </button>
            <button
              className={`flex-1 py-2 rounded-lg ${
                authMethod === 'email'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700'
              }`}
              onClick={() => setAuthMethod('email')}
            >
              Email
            </button>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            {authMethod === 'phone' ? (
              <PhoneNumberInput
                value={phoneNumber}
                onChange={(number) => setPhoneNumber(number)}
                error={error}
              />
            ) : (
              <EmailInput
                value={email}
                onChange={(value) => setEmail(value)}
                error={error}
              />
            )}
            <div id='sign-in-button' /> {/* Recaptcha container */}
            <NextButton type='submit' className='w-full'>
              Continue
            </NextButton>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default AuthScreen;
