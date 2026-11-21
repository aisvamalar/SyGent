//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-NJBVU6F7.js
var manifest = { "82d837babb1b42fb2153f7d8d449e1a15ef05107fd75fa8c3f03e3eddd02587d": {
	functionName: "submitContactForm$_createServerFn_handler",
	importer: () => import("./_ssr/contact-form-CXK6WX1a.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
