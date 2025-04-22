import { toast, ToastOptions } from 'react-toastify';

// Default toast options
const defaultToastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

/**
 * Show an error toast notification
 * @param message The error message to display
 * @param options Optional toast options to override defaults
 */
export const showErrorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, { ...defaultToastOptions, ...options });
};

/**
 * Show a success toast notification
 * @param message The success message to display
 * @param options Optional toast options to override defaults
 */
export const showSuccessToast = (message: string, options?: ToastOptions) => {
  toast.success(message, { ...defaultToastOptions, ...options });
};

/**
 * Show an info toast notification
 * @param message The info message to display
 * @param options Optional toast options to override defaults
 */
export const showInfoToast = (message: string, options?: ToastOptions) => {
  toast.info(message, { ...defaultToastOptions, ...options });
};

/**
 * Show a warning toast notification
 * @param message The warning message to display
 * @param options Optional toast options to override defaults
 */
export const showWarningToast = (message: string, options?: ToastOptions) => {
  toast.warning(message, { ...defaultToastOptions, ...options });
};

export default {
  showErrorToast,
  showSuccessToast,
  showInfoToast,
  showWarningToast,
};
