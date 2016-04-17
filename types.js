"use strict";
exports.yes = "√";
exports.no = "X";
exports.responseType = stringEnumify({
    json: "json",
    others: "others",
});
exports.httpMethod = stringEnumify({
    get: "get",
    post: "post",
    put: "put",
    delete: "delete",
});
function stringEnumify(obj) {
    return obj;
}
exports.themeStatus = stringEnumify({
    open: "open",
    closed: "closed",
});
exports.themeOrder = stringEnumify({
    newest: "newest",
    recentlyUpdated: "recently updated",
});
exports.themePushEvents = stringEnumify({
    themeCreated: "theme created",
    themeUpdated: "theme updated",
});
exports.loginStatus = stringEnumify({
    unknown: "unknown",
    fail: "fail",
    success: "success",
});
exports.environment = stringEnumify({
    development: "development",
    test: "test",
    production: "production",
});
exports.scopeNames = stringEnumify({
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
exports.oauthAuthorization = stringEnumify({
    login: "login",
    authorization: "authorization",
});
