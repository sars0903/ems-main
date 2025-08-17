import toast from 'react-hot-toast';

export const toastConfig = {
  duration: 3000,
  position: 'top-right',
  style: {
    background: '#1e1e1e',
    color: '#fff',
    padding: '16px',
    borderRadius: '8px',
  },
};

export const showSuccessToast = (message) => {
  toast.success(message, {
    ...toastConfig,
    icon: '✅',
    style: {
      ...toastConfig.style,
      border: '1px solid #059669',
    },
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    ...toastConfig,
    icon: '❌',
    style: {
      ...toastConfig.style,
      border: '1px solid #dc2626',
    },
  });
};

export const showFailureToast = (message) => {
  toast.error(message, {
    ...toastConfig,
    icon: '⚠️',
    style: {
      ...toastConfig.style,
      border: '1px solid #f59e0b',
    },
  });
};