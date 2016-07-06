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

export type Response = {
    status: number;
    errorMessage: string | undefined;
    stack: string | undefined;
    documentUrl: string | undefined;
};


export type User = {
    id: string;
    name: string;
    email: string | undefined;
    avatar: string;
    createdOrganizationCount: number | undefined;
    joinedOrganizationCount: number | undefined;
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
    updateTime: string | undefined;
    status: ThemeStatusType;
    creator: User;
    owners: User[];
    watchers: User[];

    createTimeText: string | undefined;
    updateTimeText: string | undefined;
    isWatching: boolean | undefined;
    isHovering: boolean | undefined;
    watchersEmails: string | undefined;
    ownersEmails: string | undefined;
    isOwner: boolean | undefined;
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
    authorizationCallbackUrl: string | undefined;
    clientId: string | undefined;
    clientSecret: string | undefined;
    creator: User | undefined;
    scopes: Scope[] | undefined;
    lastUsed: string | undefined;
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

export const loginStatus = stringEnumify({
    unknown: "unknown",
    fail: "fail",
    success: "success",
});



export type Self<T> = {
    state: T | undefined;
    setState: ((state: T, callback: (() => void) | undefined) => void) | undefined;
    replaceState: ((state: T, callback: (() => void) | undefined) => void) | undefined;
    isMounted: (() => boolean) | undefined;
    componentDidMount: (() => void) | undefined;
    componentWillUnmount: (() => void) | undefined;
    getInitialState: (() => T) | undefined;
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
    code: string | undefined;
};

export type CaptchaResponse = Response & CaptchaResult;

export type TokenResult = {
    url: string | undefined;
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

export const environment = stringEnumify({
    development: "development",
    test: "test",
    production: "production",
});

export type TemperaryResponse = Response & {
    names: string[];
};

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

export type AccessToken = {
    id: string;
    description: string;
    scopes: Scope[] | undefined;
    lastUsed: string | undefined;
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

export const oauthAuthorization = stringEnumify({
    login: "login",
    authorization: "authorization",
});

export type OAuthAuthorizationResult = {
    pageName: OAuthAuthorization | undefined;
    code: string | undefined;
};

export type OAuthAuthorizationResponse = Response & OAuthAuthorizationResult;
