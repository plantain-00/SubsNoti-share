export const yes = "√";
export const no = "X";

export type ResponseType = "json" | "others";

export const responseType = {
    json: "json" as "json",
    others: "others" as "others",
};

export type HttpMethod = "get" | "post" | "put" | "delete";

export const httpMethod = {
    get: "get" as "get",
    post: "post" as "post",
    put: "put" as "put",
    delete: "delete" as "delete",
};

export type Response = {
    status: number;
    errorMessage?: string;
    stack?: string;
    documentUrl?: string;
};


export type User = {
    id: string;
    name: string;
    email?: string;
    avatar: string;
    createdOrganizationCount?: number;
    joinedOrganizationCount?: number;
};

export type UserResult = {
    user: User;
};

export type CurrentUserResponse = Response & UserResult;

export const enum UserStatus {
    normal
}


export type Organization = {
    id: string;
    name: string;
};

export type OrganizationsResult = {
    organizations: Organization[];
};

export type OrganizationsResponse = Response & OrganizationsResult;


export type Theme = {
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

    createTimeText?: string;
    updateTimeText?: string;
    isWatching?: boolean;
    isHovering?: boolean;
    watchersEmails?: string;
    ownersEmails?: string;
    isOwner?: boolean;
};

export type ThemesResult = {
    themes: Theme[];
    totalCount: number;
};

export type ThemesResponse = Response & ThemesResult;

export const enum ThemeStatus {
    open,
    closed
}

export type ThemeStatusType = "open" | "closed";

export const themeStatus = {
    open: "open" as "open",
    closed: "closed" as "closed",
};

export type ThemeOrder = "newest" | "recently updated";

export const themeOrder = {
    newest: "newest" as "newest",
    recentlyUpdated: "recently updated" as "recently updated",
};

export type ThemePushEvent = "theme created" | "theme updated";

export const themePushEvents = {
    themeCreated: "theme created" as "theme created",
    themeUpdated: "theme updated" as "theme updated",
};


export type Scope = {
    name: string;
    description: string;
};

export type ScopesResult = {
    scopes: Scope[];
};

export type ScopesResponse = Response & ScopesResult;


export type Application = {
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
};

export type ApplicationsResult = {
    applications: Application[];
};

export type ApplicationsResponse = Response & ApplicationsResult;

export type ApplicationResult = {
    application: Application;
};

export type ApplicationResponse = Response & ApplicationResult;


export type LoginStatus = "unknown" | "fail" | "success";

export const loginStatus = {
    unknown: "unknown" as "unknown",
    fail: "fail" as "fail",
    success: "success" as "success",
};



export type Self<T> = {
    state?: T;
    setState?: (state: T, callback?: () => void) => void;
    replaceState?: (state: T, callback?: () => void) => void;
    isMounted?: () => boolean;
    componentDidMount?: () => void;
    componentWillUnmount?: () => void;
    getInitialState?: () => T;
    render: () => any;
};

export const enum OrganizationStatus {
    normal
}

export type VersionResult = {
    version: string;
};

export type VersionResponse = Response & VersionResult;

export type CaptchaResult = {
    url: string;
    code?: string;
};

export type CaptchaResponse = Response & CaptchaResult;

export type TokenResult = {
    url?: string;
};

export type TokenResponse = Response & TokenResult;


export type Document = {
    url: string;
    method: HttpMethod;
    documentUrl: string;
};

export type ObsoleteDocument = Document & {
    versionRange: string;
    expiredDate: string;
};

export type Environment = "development" | "test" | "production";

export const environment = {
    development: "development" as "development",
    test: "test" as "test",
    production: "production" as "production",
};

export type TemperaryResponse = Response & {
    names: string[];
};

export type ScopeName = "read:user" | "write:user"
    | "read:organization" | "write:organization"
    | "read:theme" | "write:theme"
    | "read:application" | "write:application" | "delete:application"
    | "read:access_token" | "write:access_token" | "delete:access_token";

export const scopeNames = {
    readUser: "read:user" as "read:user",
    writeUser: "write:user" as "write:user",
    readOrganization: "read:organization" as "read:organization",
    writeOrganization: "write:organization" as "write:organization",
    readTheme: "read:theme" as "read:theme",
    writeTheme: "write:theme" as "write:theme",
    readApplication: "read:application" as "read:application",
    writeApplication: "write:application" as "write:application",
    deleteApplication: "delete:application" as "delete:application",
    readAccessToken: "read:access_token" as "read:access_token",
    writeAccessToken: "write:access_token" as "write:access_token",
    deleteAccessToken: "delete:access_token" as "delete:access_token",
};

export type AccessToken = {
    id: string;
    description: string;
    scopes?: Scope[];
    lastUsed?: string;
};

export type AccessTokensResult = {
    accessTokens: AccessToken[];
};

export type AccessTokensResponse = Response & AccessTokensResult;

export type AccessTokenResult = {
    accessToken: string;
};

export type AccessTokenResponse = Response & AccessTokenResult;

export type TestSeed = {
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
};

export type OAuthCodeValue = {
    scopes: string[];
    creator: string;
    application: string;
    state: string;
    confirmed: boolean;
};

export type OAuthAuthorization = "login" | "authorization";

export const oauthAuthorization = {
    login: "login" as "login",
    authorization: "authorization" as "authorization",
};

export type OAuthAuthorizationResult = {
    pageName?: OAuthAuthorization;
    code?: string;
};

export type OAuthAuthorizationResponse = Response & OAuthAuthorizationResult;
