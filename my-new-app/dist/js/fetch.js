"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callApi = void 0;
function callApi(url = '', method = 'GET', body = {}) {
    return fetch(url, Object.assign({ method }, (method === 'GET' ? {} : { body: JSON.stringify(body) })))
        .then(response => response.json())
        .catch(err => {
        console.log('Server ERRORED', err);
    });
}
exports.callApi = callApi;
//# sourceMappingURL=fetch.js.map