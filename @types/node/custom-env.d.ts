declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_URL: "production" | "development";
      APP_PORT: string;
    }
  }
}

export {};
