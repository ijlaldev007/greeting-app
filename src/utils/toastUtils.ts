import { toast, ToastOptions, Id } from 'react-toastify';

// Keep track of active toast IDs
let activeToastId: Id | null = null;

// Default toast options
const defaultToastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  // Custom styling is applied via CSS
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

/**
 * Show a single error toast, dismissing any existing toasts first
 * @param message The error message to display
 * @param options Optional toast configuration options
 */
export const showSingleErrorToast = (
  message: string,
  options?: ToastOptions,
) => {
  // Dismiss any existing toasts
  if (activeToastId !== null) {
    toast.dismiss(activeToastId);
  }

  // Show the new toast and store its ID
  activeToastId = toast.error(message, {
    ...defaultToastOptions,
    ...options,
    onClose: () => {
      activeToastId = null;
      options?.onClose?.();
    },
  });

  return activeToastId;
};

/**
 * Dismiss all active toasts
 */
export const dismissAllToasts = () => {
  toast.dismiss();
  activeToastId = null;
};

/**
 * Show a single success toast, dismissing any existing toasts first
 * @param message The success message to display
 * @param options Optional toast configuration options
 */
export const showSingleSuccessToast = (
  message: string,
  options?: ToastOptions,
) => {
  // Dismiss any existing toasts
  if (activeToastId !== null) {
    toast.dismiss(activeToastId);
  }

  // Show the new toast and store its ID
  activeToastId = toast.success(message, {
    ...defaultToastOptions,
    ...options,
    onClose: () => {
      activeToastId = null;
      options?.onClose?.();
    },
  });

  return activeToastId;
};

export default {
  showErrorToast,
  showSuccessToast,
  showInfoToast,
  showWarningToast,
  showSingleErrorToast,
  showSingleSuccessToast,
  dismissAllToasts,
};
