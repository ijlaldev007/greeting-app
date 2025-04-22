import * as yup from 'yup';

/**
 * Validation schema for the signup form
 */
export const signupSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .test(
      'len',
      'Phone number must be either 10 or 11 digits',
      (val) => val?.length === 10 || val?.length === 11,
    ),
});

/**
 * Validation schema for the sender details form
 */
export const senderDetailsSchema = yup.object({
  senderName: yup
    .string()
    .required('Your name is required')
    .min(2, 'Name must be at least 2 characters'),
});

/**
 * Validation schema for the recipient details form
 */
export const recipientDetailsSchema = yup.object({
  recipientName: yup
    .string()
    .required('Recipient name is required')
    .min(2, 'Recipient name must be at least 2 characters')
    .max(50, 'Recipient name cannot exceed 50 characters')
    .matches(
      /^[a-zA-Z\s'-]+$/,
      'Recipient name can only contain letters, spaces, hyphens, and apostrophes',
    ),
  relationship: yup.string().required('Please select a relationship'),
});
