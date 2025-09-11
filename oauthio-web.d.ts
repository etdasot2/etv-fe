// oauthio-web.d.ts
declare module 'oauthio-web' {
    interface OAuth {
      initialize(publicKey: string): void;
      popup(provider: string): Promise<any>;
    }
    
    const OAuth: OAuth;
    export default OAuth;
  }
  