import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import { firebaseConfig } from './config/firebase';

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

let analyticsInstance = null;

// Initialize Analytics only in environments where it's supported (browser)
isSupported()
  .then((supported) => {
    if (supported) {
      analyticsInstance = getAnalytics(app);
    }
  })
  .catch(() => {
    // No-op: analytics not supported in this environment
  });

export const trackEvent = (eventName, params) => {
  if (!analyticsInstance) return;
  try {
    logEvent(analyticsInstance, eventName, params || {});
  } catch (_) {
    // Swallow logging errors to avoid breaking UX
  }
};

export const trackPageView = (path) => {
  const pagePath = path || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const pageTitle = typeof document !== 'undefined' ? document.title : undefined;
  trackEvent('page_view', { page_path: pagePath, page_title: pageTitle });
};

export const trackCvDownload = () => {
  trackEvent('cv_download', {
    file_name: 'Abdullah Qadeer - Unity Game Developer.pdf',
    file_type: 'pdf',
    location: 'hero_section'
  });
};

export const trackContactForm = (eventType, params = {}) => {
  const baseParams = {
    form_type: 'contact',
    timestamp: new Date().toISOString()
  };
  
  trackEvent(`contact_form_${eventType}`, {
    ...baseParams,
    ...params
  });
};

export default app;

