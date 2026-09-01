import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';

const Toast = () => {
  const { isDark } = useTheme();

  return (
    <Toaster
      position="bottom-center"
      gutter={8}
      toastOptions={{
        duration: 3500,
        style: {
          background: isDark ? '#1e293b' : '#ffffff',
          color: isDark ? '#e2e8f0' : '#0f172a',
          border: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
          borderRadius: '12px',
          padding: '12px 16px',
          fontSize: '14px',
          boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.15)'
        },
        success: {
          iconTheme: { primary: '#10b981', secondary: isDark ? '#1e293b' : '#ffffff' }
        },
        error: {
          duration: 4500,
          iconTheme: { primary: '#ef4444', secondary: isDark ? '#1e293b' : '#ffffff' }
        }
      }}
    />
  );
};

export default Toast;
