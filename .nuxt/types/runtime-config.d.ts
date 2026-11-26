import { RuntimeConfig as UserRuntimeConfig } from 'nuxt/schema'
interface SharedRuntimeConfig {
  appSecret: string,
  app: {
    buildId: string,
    baseURL: string,
    buildAssetsDir: string,
    cdnURL: string,
  },
  githubToken: string,
}
interface SharedPublicRuntimeConfig {
  siteUrl: string,
  githubUser: string,
  i18n: {
    baseUrl: string,
    defaultLocale: string,
    rootRedirect?: any,
    redirectStatusCode: number,
    skipSettingLocaleOnNavigate: boolean,
    locales: Array<{
      code?: string,
      language?: string,
      dir?: string,
      name?: string,
      domains?: Array<any>,
      defaultForDomains?: Array<any>,
    }>,
    detectBrowserLanguage: {
      alwaysRedirect: boolean,
      cookieCrossOrigin: boolean,
      cookieDomain: any,
      cookieKey: string,
      cookieSecure: boolean,
      fallbackLocale: string,
      redirectOn: string,
      useCookie: boolean,
    },
    experimental: {
      localeDetector: string,
      typedPages: boolean,
      typedOptionsAndMessages: boolean,
      alternateLinkCanonicalQueries: boolean,
      devCache: boolean,
      cacheLifetime?: any,
      stripMessagesPayload: boolean,
      preload: boolean,
      strictSeo: boolean,
      nitroContextDetection: boolean,
      httpCacheDuration: number,
      compactRoutes: boolean,
      prerenderMessages: boolean,
      optimizeMessageBundling: boolean,
    },
    domainLocales: {
      en: {
        domain: string,
      },
      ar: {
        domain: string,
      },
    },
  },
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module '@nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }