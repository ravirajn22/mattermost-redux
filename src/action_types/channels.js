// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
// @flow

import keyMirror from 'utils/key_mirror';

export default keyMirror({
    CHANNEL_REQUEST: null,
    CHANNEL_SUCCESS: null,
    CHANNEL_FAILURE: null,

    CHANNELS_REQUEST: null,
    CHANNELS_SUCCESS: null,
    CHANNELS_FAILURE: null,

    CHANNEL_MEMBERS_REQUEST: null,
    CHANNEL_MEMBERS_SUCCESS: null,
    CHANNEL_MEMBERS_FAILURE: null,

    CHANNEL_MY_MEMBERS_REQUEST: null,
    CHANNEL_MY_MEMBERS_SUCCESS: null,
    CHANNEL_MY_MEMBERS_FAILURE: null,

    CREATE_CHANNEL_REQUEST: null,
    CREATE_CHANNEL_SUCCESS: null,
    CREATE_CHANNEL_FAILURE: null,

    UPDATE_CHANNEL_REQUEST: null,
    UPDATE_CHANNEL_SUCCESS: null,
    UPDATE_CHANNEL_FAILURE: null,

    NOTIFY_PROPS_REQUEST: null,
    NOTIFY_PROPS_SUCCESS: null,
    NOTIFY_PROPS_FAILURE: null,

    JOIN_CHANNEL_REQUEST: null,
    JOIN_CHANNEL_SUCCESS: null,
    JOIN_CHANNEL_FAILURE: null,

    DELETE_CHANNEL_REQUEST: null,
    DELETE_CHANNEL_SUCCESS: null,
    DELETE_CHANNEL_FAILURE: null,

    UPDATE_LAST_VIEWED_REQUEST: null,
    UPDATE_LAST_VIEWED_SUCCESS: null,
    UPDATE_LAST_VIEWED_FAILURE: null,

    GET_CHANNELS_REQUEST: null,
    GET_CHANNELS_SUCCESS: null,
    GET_CHANNELS_FAILURE: null,

    GET_ALL_CHANNELS_REQUEST: null,
    GET_ALL_CHANNELS_SUCCESS: null,
    GET_ALL_CHANNELS_FAILURE: null,

    GET_CHANNELS_TIMEZONE_REQUEST: null,
    GET_CHANNELS_TIMEZONE_SUCCESS: null,
    GET_CHANNELS_TIMEZONE_FAILURE: null,

    CHANNEL_STATS_REQUEST: null,
    CHANNEL_STATS_SUCCESS: null,
    CHANNEL_STATS_FAILURE: null,

    ADD_CHANNEL_MEMBER_REQUEST: null,
    ADD_CHANNEL_MEMBER_SUCCESS: null,
    ADD_CHANNEL_MEMBER_FAILURE: null,

    REMOVE_CHANNEL_MEMBER_REQUEST: null,
    REMOVE_CHANNEL_MEMBER_SUCCESS: null,
    REMOVE_CHANNEL_MEMBER_FAILURE: null,

    UPDATE_CHANNEL_MEMBER_REQUEST: null,
    UPDATE_CHANNEL_MEMBER_SUCCESS: null,
    UPDATE_CHANNEL_MEMBER_FAILURE: null,

    UPDATE_CHANNEL_SCHEME_REQUEST: null,
    UPDATE_CHANNEL_SCHEME_SUCCESS: null,
    UPDATE_CHANNEL_SCHEME_FAILURE: null,

    UPDATE_CHANNEL_MEMBER_SCHEME_ROLES_REQUEST: null,
    UPDATE_CHANNEL_MEMBER_SCHEME_ROLES_SUCCESS: null,
    UPDATE_CHANNEL_MEMBER_SCHEME_ROLES_FAILURE: null,

    SELECT_CHANNEL: null,
    LEAVE_CHANNEL: null,
    RECEIVED_CHANNEL: null,
    RECEIVED_CHANNELS: null,
    RECEIVED_ALL_CHANNELS: null,
    RECEIVED_CHANNELS_LIST: null,
    RECEIVED_MY_CHANNEL_MEMBERS: null,
    RECEIVED_MY_CHANNEL_MEMBER: null,
    RECEIVED_CHANNEL_MEMBERS: null,
    RECEIVED_CHANNEL_MEMBER: null,
    RECEIVED_CHANNEL_STATS: null,
    RECEIVED_CHANNEL_PROPS: null,
    RECEIVED_CHANNEL_DELETED: null,
    RECEIVED_LAST_VIEWED_AT: null,
    UPDATE_CHANNEL_HEADER: null,
    UPDATE_CHANNEL_PURPOSE: null,
    CHANNEL_MEMBER_ADDED: null,
    CHANNEL_MEMBER_REMOVED: null,

    INCREMENT_TOTAL_MSG_COUNT: null,
    INCREMENT_UNREAD_MSG_COUNT: null,
    DECREMENT_UNREAD_MSG_COUNT: null,
    INCREMENT_UNREAD_MENTION_COUNT: null,
    DECREMENT_UNREAD_MENTION_COUNT: null,

    UPDATED_CHANNEL_SCHEME: null,
    UPDATED_CHANNEL_MEMBER_SCHEME_ROLES: null,
});
