// ─────────────────────────────────────────────
//  EMCENT PORTFOLIO — ANALYTICS HELPER
//  Wraps GA4 event tracking with safe fallbacks.
//  Import and call trackEvent() anywhere in the app.
// ─────────────────────────────────────────────

export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

export const analytics = {
  linkedInClick: () =>
    trackEvent('linkedin_click', {
      event_category: 'engagement',
      event_label: 'LinkedIn Profile',
    }),

  githubClick: () =>
    trackEvent('github_click', {
      event_category: 'engagement',
      event_label: 'GitHub Profile',
    }),

  emailClick: () =>
    trackEvent('email_click', {
      event_category: 'engagement',
      event_label: 'Email Contact',
    }),

  contactFormSubmit: () =>
    trackEvent('contact_form_submit', {
      event_category: 'conversion',
      event_label: 'Contact Form',
    }),

  projectClick: (projectName) =>
    trackEvent('project_click', {
      event_category: 'engagement',
      event_label: projectName,
    }),
}