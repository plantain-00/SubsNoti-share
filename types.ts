export const enum StatusCode {
    OK = 200,
    createdOrModified = 201,
    accepted = 202,
    deleted = 204,
    invalidRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    notAcceptable = 406,
    gone = 410,
    unprocessableEntity = 422,
    tooManyRequest = 429,
    internalServerError = 500
}

export const yes = "√";
export const no = "X";

export type ResponseType = "json" | "others";

export const responseType = stringEnumify({
    json: "json",
    others: "others",
});

export type HttpMethod = "get" | "post" | "put" | "delete";

export const httpMethod = stringEnumify({
    get: "get",
    post: "post",
    put: "put",
    delete: "delete",
});


function stringEnumify<T extends { [prop: string]: "" | string }>(obj: T) {
    return obj;
}

export interface Response {
    isSuccess: boolean;
    statusCode: StatusCode;
    errorMessage?: string;
    stack?: string;
    documentUrl?: string;
    actualErrorMessage?: string;
}


export interface User {
    id: string;
    name: string;
    email?: string;
    avatar: string;
    createdOrganizationCount?: number;
    joinedOrganizationCount?: number;
}

export interface UserResult {
    user: User;
}

export interface CurrentUserResponse extends Response, UserResult { }

export const enum UserStatus {
    normal
}


export interface Organization {
    id: string;
    name: string;
}

export interface OrganizationsResult {
    organizations: Organization[];
}

export interface OrganizationsResponse extends Response, OrganizationsResult { }


export interface Theme {
    id: string;
    title: string;
    detail: string;
    organizationId: string;
    createTime: string;
    updateTime?: string;
    status: ThemeStatusType;
    creator: User;
    owners: User[];
    watchers: User[];
}

export interface ThemesResult {
    themes: Theme[];
    totalCount: number;
}

export interface ThemesResponse extends Response, ThemesResult { }

export const enum ThemeStatus {
    open,
    closed
}

export type ThemeStatusType = "open" | "closed";

export const themeStatus = stringEnumify({
    open: "open",
    closed: "closed",
});

export type ThemeOrder = "newest" | "recently updated";

export const themeOrder = stringEnumify({
    newest: "newest",
    recentlyUpdated: "recently updated",
});

export type ThemePushEvent = "theme created" | "theme updated";

export const themePushEvents = stringEnumify({
    themeCreated: "theme created",
    themeUpdated: "theme updated",
});


export interface Scope {
    name: string;
    description: string;
}

export interface ScopesResult {
    scopes: Scope[];
}

export interface ScopesResponse extends Response, ScopesResult { }


export interface Application {
    id: string;
    name: string;
    homeUrl: string;
    description: string;
    authorizationCallbackUrl?: string;
    clientId?: string;
    clientSecret?: string;
    creator?: User;
    scopes?: Scope[];
    lastUsed?: string;
}

export interface ApplicationsResult {
    applications: Application[];
}

export interface ApplicationsResponse extends Response, ApplicationsResult { }

export interface ApplicationResult {
    application: Application;
}

export interface ApplicationResponse extends Response, ApplicationResult { }


export type LoginStatus = "unknown" | "fail" | "success";

export const loginStatus = stringEnumify({
    unknown: "unknown",
    fail: "fail",
    success: "success",
});



export interface Self<T> {
    state?: T;
    setState?: (state: T, callback?: () => void) => void;
    replaceState?: (state: T, callback?: () => void) => void;
    isMounted?: () => boolean;
    componentDidMount?: () => void;
    componentWillUnmount?: () => void;
    getInitialState?: () => T;
    render: () => any;
}

export const enum OrganizationStatus {
    normal
}

export interface E extends Error {
    statusCode: StatusCode;
}


export interface VersionResult {
    version: string;
}

export interface VersionResponse extends Response, VersionResult { }

export interface CaptchaResult {
    url: string;
    code?: string;
}

export interface CaptchaResponse extends Response, CaptchaResult { }

export interface TokenResult {
    url?: string;
}

export interface TokenResponse extends Response, TokenResult { }


export interface Document {
    url: string;
    method: HttpMethod;
    documentUrl: string;
}

export interface ObsoleteDocument extends Document {
    versionRange: string;
    expiredDate: string;
}

export type Environment = "development" | "test" | "production";

export const environment = stringEnumify({
    development: "development",
    test: "test",
    production: "production",
});

export interface TemperaryResponse extends Response {
    names: string[];
}

export type ScopeName = "read:user" | "write:user"
    | "read:organization" | "write:organization"
    | "read:theme" | "write:theme"
    | "read:application" | "write:application" | "delete:application"
    | "read:access_token" | "write:access_token" | "delete:access_token";

export const scopeNames = stringEnumify({
    readUser: "read:user",
    writeUser: "write:user",
    readOrganization: "read:organization",
    writeOrganization: "write:organization",
    readTheme: "read:theme",
    writeTheme: "write:theme",
    readApplication: "read:application",
    writeApplication: "write:application",
    deleteApplication: "delete:application",
    readAccessToken: "read:access_token",
    writeAccessToken: "write:access_token",
    deleteAccessToken: "delete:access_token",
});

export interface AccessToken {
    id: string;
    description: string;
    scopes?: Scope[];
    lastUsed: string;
}

export interface AccessTokensResult {
    accessTokens: AccessToken[];
}

export interface AccessTokensResponse extends Response, AccessTokensResult { }

export interface AccessTokenResult {
    accessToken: string;
}

export interface AccessTokenResponse extends Response, AccessTokenResult { }

export interface TestSeed {
    user: {
        email: string;
        name: string;
    };
    organization: {
        name: string;
    };
    theme: {
        title: string;
        detail: string;
    };
    newTheme: {
        title: string;
        detail: string;
    };
    newUser: {
        name: string;
    };
    clientUser: {
        email: string;
        name: string;
    };
    application: {
        name: string;
        homeUrl: string;
        description: string;
        authorizationCallbackUrl: string;
    };
    newApplication: {
        name: string;
        homeUrl: string;
        description: string;
        authorizationCallbackUrl: string;
    };
    accessToken: {
        description: string;
    };
    newAccessToken: {
        description: string;
    };
}

export interface OAuthCodeValue {
    scopes: string[];
    creator: string;
    application: string;
    state: string;
    confirmed: boolean;
}

export type OAuthAuthorization = "login" | "authorization";

export const oauthAuthorization = stringEnumify({
    login: "login",
    authorization: "authorization",
});

export interface OAuthAuthorizationResult {
    pageName?: OAuthAuthorization;
    code?: string;
}

export interface OAuthAuthorizationResponse extends Response, OAuthAuthorizationResult { }

