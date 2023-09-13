window.editorSetting = {
    privateKey: window.c2.privateKey,
    editorBasePath: window.c2.editorBasePath,
    cdnPath: window.Cacoo.settings.cdnPath,
    imgConverterURL: "http://editor-image-converter/",
    emojiCdnPathRoot: `${window.Cacoo.settings.cdnPath}emoji/`,
    debug: false,
    dataRecover: window.c2.dataRecover,
    sessionKey: window.c2.sessionKey,
    appsAccessToken: window.c2.appsAccessToken,
    token: window.c2.jws,
    shapeCount: window.c2.shapeCount,
    refreshTokenInterval: 3 * 60 * 1000,
    dropboxAppKey: window.c2.dropboxAppKey,
    oneDriveAppKey: window.c2.oneDriveAppKey,
    oneDriveRedirectUrl: window.c2.oneDriveRedirectUrl,
    boxAppKey: window.c2.boxAppKey,
    adobeAppKey: window.c2.adobeAppKey,
    fontListSwf: window.c2.contextPath + "/swf/fontlist.swf",
    sentryDSN: window.c2.sentryDSN == null || window.c2.sentryDSN.length === 0 ? null : window.c2.sentryDSN,
    onboarding: true,
    useTemplate: false,
    olduser: false,
    plainViewer: false,
    canBeBetaUser: window.c2.canBeBetaUser,
    googleDeveloperKey() {
        return window.c2.googleDeveloperKey;
    },
    googleClientId() {
        return window.c2.googleDeveloperClient;
    },
    editDiagramURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/meta";
    },
    getImageShapeURL(id, width, height) {
        if (window.editorSetting.plainViewer === true && width > 0 && height > 0) {
            return (
                window.editorSetting.imgConverterURL +
                "api/v1/imageShapeStore/resize?id=" +
                id +
                "&width=" +
                Math.floor(width) +
                "&height=" +
                Math.floor(height)
            );
        } else {
            return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/images/" + id;
        }
    },
    loadSheetShapeAllURL(sheetUid) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/sheets/" + sheetUid;
    },
    loadSheetShapeRestURL(sheetUid) {
        return window.editorSetting.loadSheetShapeAllURL(sheetUid);
    },
    updateDiagramURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/realtime";
    },
    updateDiagramForSaveURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/update_for_save";
    },
    modifiedSheetURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/modified_sheets";
    },
    stencilGroupsURL() {
        return window.c2.apiBaseURL + "api/v2/stencils/categories";
    },
    stencilGroupsURL2() {
        return window.c2.apiBaseURL + "api/v2/stencils";
    },
    userSelectedGroupsURL() {
        return window.c2.apiBaseURL + "api/v2/stencils/selected_categories";
    },
    eachStencilCategories() {
        return window.c2.apiBaseURL + "api/v2/stencils/categories/shapes";
    },
    stencilsURL(uniqueId) {
        return window.c2.apiBaseURL + "api/v2/stencils/categories/" + encodeURIComponent(uniqueId) + "/data";
    },
    stencilImageURL(uniqueId) {
        return window.c2.apiBaseURL + "api/v2/stencils/categories/" + encodeURIComponent(uniqueId) + "/thumbnail";
    },
    templateGroupsURL() {
        return window.c2.apiBaseURL + "api/v2/templates/categories";
    },
    templateURL(uniqueId) {
        return window.c2.apiBaseURL + "api/v2/templates/categories/" + encodeURIComponent(uniqueId) + "/data";
    },
    templatelImageURL(uniqueId, sheetUid) {
        return window.c2.appBaseURL + "/api/v2j/template/" + encodeURIComponent(uniqueId) + "/" + sheetUid + "/thumbnail.png";
    },
    saveSvgURL() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/imageshape/svg";
    },
    saveVisioURL() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/import/visio";
    },
    refreshToken(randomParam) {
        return (
            window.c2.appBaseURL +
            "/api/v2j/diagrams/" +
            window.c2.privateKey +
            "/refresh.json?rev=" +
            encodeURIComponent(window.c2.revision) +
            "&r=" +
            randomParam
        );
    },
    republishToken() {
        return window.c2.appBaseURL + "/diagrams/" + window.c2.privateKey + "/republish_token";
    },
    projectsURL(spaceId) {
        return window.c2.apiBaseURL + "api/v2/spaces/" + spaceId + "/projects";
    },
    foldersURL() {
        return window.c2.apiBaseURL + "api/v2/user/folders";
    },
    saveShapeURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey;
    },
    saveCopyShapeURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/copy";
    },
    editCopyURL(privateKeyCopied) {
        return window.c2.appBaseURL + "/diagrams/" + privateKeyCopied + "/edit";
    },
    saveImageShapeURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/images";
    },
    convertImageURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/images";
    },
    shapeURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey;
    },
    folderImageURL(folderId, time) {
        return window.editorSetting.folderIconUrlRoot + "/folder/p/" + folderId + "?t=" + time;
    },
    projectImageURL(projectId, spaceKey, time) {
        return window.editorSetting.folderIconUrlRoot + "/folder/o/" + spaceKey + "/" + projectId + "?t=" + time;
    },
    postMessageURL() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/chat.json";
    },
    eventPollingURL() {
        return window.c2.eventMessagingApiBaseURL + "api/v2/diagrams/" + window.c2.privateKey + "/event/lp.json";
    },
    eventWebSocketURL() {
        let base = window.c2.eventMessagingApiBaseURL;
        base = base.replace("https://", "wss://");
        base = base.replace("http://", "ws://");
        return base + "api/v2/diagrams/" + window.c2.privateKey + "/event/ws.json";
    },
    onlineMembersURL() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/realtime/members";
    },
    chatHistoryURL() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/chat.json";
    },
    userIconURL(externalId, size) {
        return window.editorSetting.folderIconUrlRoot + "/account/" + externalId + "/image/" + size + "x" + size;
    },
    userIconLegacyURL(name, size) {
        return window.c2.appBaseURL + "/account/" + name + "/image/" + size + "x" + size;
    },
    postSelectedURL() {
        return window.c2.eventMessagingApiBaseURL + "api/v2/diagrams/" + window.c2.privateKey + "/selected.json";
    },
    adobeCreativeSDK() {
        return window.c2.appBaseURL + "/adobe/asset_browser";
    },
    availableSheetNumber() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/available_sheet";
    },
    updateShapeProperties() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/properties";
    },
    sharedUser() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/invite/sharedUser";
    },
    searchInviteHistoryUser() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/invite/searchInviteHistoryUser";
    },
    getInviteHistoryUser() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/invite/getInviteHistoryUser";
    },
    executeInvite() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/invite/exec";
    },
    deleteInviteByAccountId() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/invite/deleteShapeShared";
    },
    deleteInviteByMailId() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/invite/delete";
    },
    inviteDiagramLimit() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/invitations/limit";
    },
    exportSvgURL(sheetUid) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/sheets/" + sheetUid + "/exports/svg";
    },
    exportSvgVersionURL(sheetUid, version) {
        return window.c2.appBaseURL + "/api/v2j/export/" + window.c2.privateKey + "/V" + version + "/" + sheetUid + "/svg";
    },
    // It is used when ppt, ps, pdf export
    exportFilesURL(format) {
        return window.c2.appBaseURL + "/api/v2j/export/" + window.c2.privateKey + "/" + format;
    },
    exportFilesVersionURL(format, version) {
        return window.c2.appBaseURL + "/api/v2j/export/" + window.c2.privateKey + "/V" + version + "/" + format;
    },
    diagramListURL() {
        return window.c2.appBaseURL + "/diagrams/";
    },
    communityURL() {
        return "https://community.nulab.com/c/cacoo/12";
    },
    contactFormURL() {
        const lang = window.c2.lang === "ja" ? "/ja" : "";
        return `${window.c2.appBaseURL}${lang}/contact`;
    },
    signInEditDiagramUrl(isSample) {
        const next = `${window.location.href.split("diagrams")[0]}diagrams/${window.c2.privateKey}${isSample ? "/mine" : ""}`;
        return window.c2.appBaseURL + "/signin?next=" + encodeURIComponent(next);
    },
    trialTeamSignUpURL() {
        return window.c2.appBaseURL + "/team/try?diagramKey=" + window.c2.privateKey;
    },
    exportPdfWithLocalFontInfoURL() {
        return "https://support.cacoo.com/hc/articles/115010830428";
    },
    pasteCaptureInfoURL() {
        return "https://support.cacoo.com/hc/articles/115011976248";
    },
    minimumFontSizeInfoURL() {
        return "https://support.cacoo.com/hc/articles/115011824607";
    },
    recoverDataURL() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/recover.json";
    },
    exportPng() {
        return window.c2.appBaseURL + "/api/v2j/export/" + window.c2.privateKey + "/png";
    },
    guestCount() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/realtime/guest_count";
    },
    updateGuestName() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/realtime/guest_name";
    },
    thumbnailURL(privateKey, sheetUid) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/sheets/" + sheetUid + "/thumbnail";
    },
    revokeThumbnails() {
        return window.c2.appBaseURL + "/api/v2j/diagrams/" + window.c2.privateKey + "/thumbnail";
    },
    unreadCounts(mentioned) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/unread_annotations/count?mentioned=" + mentioned;
    },
    sheetUnreadCount(sheetUid) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/unread_annotations/sheets/" + sheetUid + "/count";
    },
    timelineComments(offset, limit, mentioned) {
        return (
            window.c2.apiBaseURL +
            "api/v2/shapes/" +
            window.c2.privateKey +
            "/timeline?offset=" +
            offset +
            "&limit=" +
            limit +
            "&mentioned=" +
            mentioned
        );
    },
    activityLogPage(offset, limit) {
        return window.c2.apiBaseURL + "api/v2/activity?offset=" + offset + "&limit=" + limit;
    },
    activityLog() {
        return window.c2.apiBaseURL + "api/v2/activity";
    },
    activityLogBeacon() {
        return window.c2.apiBaseURL + "api/v2/activity/beacon";
    },
    annotations(sheetUid) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/annotations/" + sheetUid;
    },
    annotation(sheetUid, annotationId) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/annotations/" + sheetUid + "/" + annotationId;
    },
    annotationMarkAsRead(sheetUid, annotationId) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/annotations/" + sheetUid + "/" + annotationId + "/mark_as_read";
    },
    comments(sheetUid, annotationId) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/annotations/" + sheetUid + "/" + annotationId + "/comments";
    },
    comment(sheetUid, annotationId, commentId) {
        return (
            window.c2.apiBaseURL +
            "api/v2/shapes/" +
            window.c2.privateKey +
            "/annotations/" +
            sheetUid +
            "/" +
            annotationId +
            "/comments/" +
            commentId
        );
    },
    commentMarkAsRead(sheetUid, annotationId, commentId) {
        return (
            window.c2.apiBaseURL +
            "api/v2/shapes/" +
            window.c2.privateKey +
            "/annotations/" +
            sheetUid +
            "/" +
            annotationId +
            "/comments/" +
            commentId +
            "/mark_as_read"
        );
    },
    star(privateKey) {
        return window.c2.apiBaseURL + "api/v2/user/starred/shapes/" + window.c2.privateKey;
    },
    unstar(privateKey) {
        return window.c2.apiBaseURL + "api/v2/user/starred/shapes/" + window.c2.privateKey;
    },
    stencilCategories() {
        return window.c2.appBaseURL + "/api/v2j/stencils/categories";
    },
    histories(privateKey) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + privateKey + "/histories";
    },
    history(privateKey, verId) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + privateKey + "/histories/" + verId;
    },
    historySheet(privateKey, verId, sheetUid) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + privateKey + "/histories/" + verId + "/" + sheetUid;
    },
    spaces() {
        return window.c2.apiBaseURL + "api/v2/spaces";
    },
    oldComments() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/comments";
    },
    collaborators() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/collaborators";
    },
    collaborator(collaboratorId) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/collaborators/" + collaboratorId;
    },
    invitationLimit() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/invitations/limit";
    },
    invitations() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/invitations";
    },
    invitation(invitationId) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/invitations/" + invitationId;
    },
    putTextImage() {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/texts";
    },
    getTextImage(sheetUid, shapeUid) {
        return window.c2.apiBaseURL + "api/v2/shapes/" + window.c2.privateKey + "/sheets/" + sheetUid + "/texts/" + shapeUid;
    },
    helpLink() {
        if (window.c2.lang === "en") {
            return "https://support.cacoo.com/hc/en-us/articles/360001613527";
        }
        return "https://support.cacoo.com/hc/ja/articles/360001613527";
    },
    awsArchitecture() {
        return window.c2.apiBaseURL + "api/v2/aws/architectures";
    },
    excelParser() {
        return window.c2.excelParserUrl + "/xls";
    },
    tutorialsLink() {
        if (window.c2.lang === "en") {
            return "https://cacoo.com/resources/tutorials/";
        }
        return "https://cacoo.com/ja/resources/tutorials/";
    },
    sendToGoogleDrive() {
        return `${window.c2.apiBaseURL}api/v2/shapes/${window.c2.privateKey}/gdrive`;
    },
    googleDriveHelpLink() {
        if (window.c2.lang === "en") {
            return "https://support.cacoo.com/hc/en-us/articles/360001620647-Google-Drive-Cacoo";
        }
        return "https://support.cacoo.com/hc/ja/articles/360001620647-Google-Drive-Cacoo";
    },
    isEmailRegistered() {
        return window.c2.appBaseURL + "/api/site/user/isEmailRegistered";
    },
    signup() {
        return `${window.c2.appBaseURL}/api/site/team/signup`;
    },
    diagramSpaceCollaborators(spaceId) {
        return `${window.c2.apiBaseURL}api/v2/shapes/${window.c2.privateKey}/spaces/${spaceId}/collaborators`;
    },
    chatPosts() {
        return `${window.c2.apiBaseURL}api/v2/shapes/${window.c2.privateKey}/chat/posts`;
    },
    chatPost(postId) {
        return `${window.c2.apiBaseURL}api/v2/shapes/${window.c2.privateKey}/chat/posts/${postId}`;
    },
    chatUnreadPostsCount() {
        return `${window.c2.apiBaseURL}api/v2/shapes/${window.c2.privateKey}/chat/unread_posts/count`;
    },
    isEmailRegistered() {
        return window.c2.appBaseURL + "/api/site/user/isEmailRegistered";
    },
    sendFeedback() {
        return `${window.c2.apiBaseURL}api/v2/support/feedback`;
    },
    sendSurvey(category) {
        return `${window.c2.apiBaseURL}api/v2/support/feedback/${category}`;
    },
    signup() {
        return `${window.c2.appBaseURL}/api/site/team/signup`;
    },
    spaceMembers(spaceId) {
        return `${window.c2.apiBaseURL}api/v2/spaces/${spaceId}/members`;
    },
    spaceMembersExcludeCollaborators(spaceId) {
        return `${window.c2.apiBaseURL}api/v2/spaces/${spaceId}/members?excludeCollaborators=true`;
    },
    diagramSpaceCollaborators(spaceId) {
        return `${window.c2.apiBaseURL}api/v2/shapes/${window.c2.privateKey}/spaces/${spaceId}/collaborators`;
    },
    teamIconURL(spaceKey, teamKey, size) {
        // size: large, medium, small
        return `${this.nulabAppBaseURL}/spaces/${spaceKey}/groups/${teamKey}/photo/${size}`;
    },
    getFolderCollaborators(spaceId, folderId) {
        return window.c2.apiBaseURL + "api/v2/spaces/" + spaceId + "/folders/" + folderId + "/members?detailed=true";
    },
    authorizeTurnServer() {
        return `${window.c2.apiBaseURL}api/v2/shapes/${window.c2.privateKey}/chat/turn/credentials`;
    },
    appMessageWebsocket(isBeta) {
        let base = `${window.c2.appBaseURL}/app${isBeta ? "" : "-beta"}/messaging`;
        base = base.replace("https://", "wss://");
        base = base.replace("http://", "ws://");
        return base;
    },
    auditLog() {
        return `${window.c2.apiBaseURL}api/v2/audit`;
    },
    onboardingSteps() {
        return `${window.c2.apiBaseURL}api/v2/onboarding/steps`;
    },
    signout() {
        return `${editorSetting.dashboardUrl}/auth/signout`;
    },
};
