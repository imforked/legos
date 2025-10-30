declare global {
  interface Window {
    grecaptcha: {
      /**
       * Standard reCAPTCHA v3 methods
       */
      ready?: (cb: () => void) => void;
      execute?: (
        siteKey: string,
        options: { action: string }
      ) => Promise<string>;

      enterprise?: {
        ready: (cb: () => void) => void;
        execute: (
          siteKey: string,
          options: { action: string }
        ) => Promise<string>;
      };
    };
  }
}

export {};
