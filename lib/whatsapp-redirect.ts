/**
 * WhatsApp Redirect Utility
 * Handles intelligent redirection to WhatsApp app or web based on device and app availability
 */

interface WhatsAppRedirectOptions {
  phone: string;
  text?: string;
  fallbackToWeb?: boolean;
}

/**
 * Detects if WhatsApp app is likely installed on the device
 * Uses user agent detection and device type analysis
 */
export function isWhatsAppLikelyInstalled(): boolean {
  if (typeof window === 'undefined') return false;

  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  
  // WhatsApp is primarily a mobile app
  // On desktop, we'll always use web version
  return isMobile;
}

/**
 * Detects if the current device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  const userAgent = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

/**
 * Generates WhatsApp URLs for different scenarios
 */
export function generateWhatsAppUrls(options: WhatsAppRedirectOptions) {
  const { phone, text = '' } = options;
  const encodedText = encodeURIComponent(text);
  
  return {
    // For mobile devices - tries to open native app first
    appUrl: `whatsapp://send?phone=${phone}&text=${encodedText}`,
    // WhatsApp Web API - works on all devices
    webUrl: `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`,
    // Alternative web URL
    webAlternative: `https://web.whatsapp.com/send?phone=${phone}&text=${encodedText}`
  };
}

/**
 * Intelligent WhatsApp redirect function
 * Attempts to open native app on mobile, falls back to web
 */
export function redirectToWhatsApp(options: WhatsAppRedirectOptions): void {
  const { fallbackToWeb = true } = options;
  const urls = generateWhatsAppUrls(options);
  const isMobile = isMobileDevice();
  
  if (isMobile && isWhatsAppLikelyInstalled()) {
    // On mobile: try native app first, with web fallback
    attemptNativeAppRedirect(urls.appUrl, urls.webUrl, fallbackToWeb);
  } else {
    // On desktop or when app not detected: use web version
    window.open(urls.webUrl, '_blank', 'noopener,noreferrer');
  }
}

/**
 * Attempts to open native WhatsApp app with fallback to web
 */
function attemptNativeAppRedirect(appUrl: string, webUrl: string, fallbackToWeb: boolean): void {
  let hasRedirected = false;
  
  // Create a hidden iframe to attempt app redirect
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = appUrl;
  document.body.appendChild(iframe);
  
  // Set a timeout to fallback to web if app doesn't open
  const fallbackTimeout = setTimeout(() => {
    if (!hasRedirected && fallbackToWeb) {
      window.open(webUrl, '_blank', 'noopener,noreferrer');
    }
    document.body.removeChild(iframe);
  }, 2000);
  
  // Listen for page visibility change (indicates app opened)
  const handleVisibilityChange = () => {
    if (document.hidden) {
      hasRedirected = true;
      clearTimeout(fallbackTimeout);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    }
  };
  
  document.addEventListener('visibilitychange', handleVisibilityChange);
  
  // Also try direct assignment for better compatibility
  setTimeout(() => {
    if (!hasRedirected) {
      try {
        window.location.href = appUrl;
      } catch (error) {
        // If direct assignment fails, we'll rely on the iframe method
        console.log('Direct app redirect failed, using fallback');
      }
    }
  }, 500);
}

/**
 * Creates a WhatsApp link element with intelligent redirect
 */
export function createWhatsAppLink(options: WhatsAppRedirectOptions & {
  className?: string;
  children: React.ReactNode;
}) {
  const { className, children, ...redirectOptions } = options;
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    redirectToWhatsApp(redirectOptions);
  };
  
  // Return props for the link element
  return {
    href: generateWhatsAppUrls(redirectOptions).webUrl,
    onClick: handleClick,
    className,
    'aria-label': 'Contactar por WhatsApp',
    children
  };
}

/**
 * Hook for React components to use WhatsApp redirect functionality
 */
export function useWhatsAppRedirect(options: WhatsAppRedirectOptions) {
  const handleRedirect = () => {
    redirectToWhatsApp(options);
  };
  
  const urls = generateWhatsAppUrls(options);
  
  return {
    redirect: handleRedirect,
    urls,
    isMobile: isMobileDevice(),
    isAppLikelyInstalled: isWhatsAppLikelyInstalled()
  };
}
