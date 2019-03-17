import { DocumentMetadata } from './prismic-uids';

/**
 * Defines the relationship between a Prismic custom type
 * and the associated path inside the Angular application.
 */
export interface DocTypeConfig {
    /**
     * API-name of the Custom Type.
     */
    documentType: string;
    /**
     * This function takes the UID of a Prismic document and
     * must return the absolute path to render this document.
     */
    uidMappingFunc: (uid: string) => string;
}

export interface RouteConfig {
    /**
     * Your repository's API URL.
     * You can find this string at Settings > API & Security > API Endpoint.
     * 
     * Please note that only Prismic API v2 is supported.
     */
    prismicApiUrl: string;
    docTypeConfigs: DocTypeConfig[];
}

export interface PrismicRoute {
    /**
     * The mapped route.
     */
    route: string;
    /**
     * Additional metadata.
     */
    meta: DocumentMetadata;
}

export interface NgxPrismicExtraOptions {
    logFunc?: (message: string) => any;
}

export const DEFAULT_EXTRA_OPTIONS: NgxPrismicExtraOptions = {
    logFunc: (message: string) => console.log(`[ngx-prismic] ${message}`)
}