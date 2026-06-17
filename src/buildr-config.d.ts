// Type declarations for window.__buildr_config — runtime config injected by
// the Buildr deploy pipeline into src/index.html (between BUILDR_CONFIG_START
// markers). Read backend URL from apiBaseUrl, env vars from env.<KEY>.
//
// SECURITY: every key in env ships inside index.html and is publicly visible
// (DevTools → window.__buildr_config). Never put backend secrets here.
//
// process.env (Node-only) and import.meta.env (Vite-only) are NOT populated
// in this Angular project. Read env values from window.__buildr_config.env.

declare global {
  interface Window {
    __buildr_config?: {
      apiBaseUrl: string;
      debugUrl: string;
      debugId: string;
      env?: Record<string, string>;
    };
  }
}

export {};
