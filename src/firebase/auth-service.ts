import {
  signInWithPhoneNumber,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  ApplicationVerifier,
} from 'firebase/auth';
import { auth } from './config';

class AuthService {
  private recaptchaVerifier: ApplicationVerifier | null = null;

  initRecaptcha(elementId: string) {
    this.recaptchaVerifier = new RecaptchaVerifier(auth, elementId, {
      size: 'invisible',
    });
  }

  async signInWithPhone(phoneNumber: string) {
    if (!this.recaptchaVerifier) {
      throw new Error('Recaptcha not initialized');
    }
    return signInWithPhoneNumber(auth, phoneNumber, this.recaptchaVerifier);
  }

  async signInWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async signUpWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
}

export const authService = new AuthService();
