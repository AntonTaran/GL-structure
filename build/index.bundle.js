/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "b2471efff7e9f768a4dc";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);
 //var css = require('../assets/styles/index.css');

var svg1 = document.getElementsByTagName('svg');
var wrapper = document.querySelector('#collapsable-example');
var container = document.querySelector('.container');
var tree;

function foo2() {
  var scale = 0;
  return function () {
    scale = scale + 1 / 10;
    return scale;
  };
}

console.log('csdcdcdscds');
var counter = foo2();
var currentZoom;

function scaleOnCollapse(x) {
  console.log(Array.from(svg1)[0].getBoundingClientRect().right);
  console.log(container.clientWidth);

  if (Array.from(svg1)[0].getBoundingClientRect().right > container.clientWidth) {
    currentZoom = 1 - counter();
    wrapper.style.transform = "scale(".concat(1 - counter(), ")");
  }
}

function onChangeZoom() {}

var chart_config = {
  chart: {
    container: "#collapsable-example",
    animateOnInit: true,
    callback: {
      onToggleCollapseFinished: function onToggleCollapseFinished(e) {//        scaleOnCollapse(e.X);
      }
    },
    node: {
      collapsable: true
    },
    levelSeparation: 30,
    siblingSeparation: 10,
    subTeeSeparation: 15,
    nodeAlign: 'LEFT',
    connectors: {
      type: 'step',
      style: {
        'stroke': 'grey',
        //        'arrow-end': {string},
        //        'cursor': {string},
        //        'fill': {string},
        ////'fill-opacity': {0.5},
        //        'opacity': {number},
        //        'stroke': {string},
        //        'stroke-dasharray': {string},
        //        'stroke-linecap': {string},
        //        'stroke-opacity': {number},
        'stroke-width': 4
      }
    },
    animation: {
      nodeAnimation: "linear ",
      nodeSpeed: 500,
      connectorsAnimation: "linear",
      connectorsSpeed: 100
    }
  },
  nodeStructure: {
    image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
    text: {
      desc: 'i',
      name: {
        val: "Nataliya Siromakha",
        href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
        target: "_blank"
      },
      nodeAlign: 'BOTTOM'
    },
    children: [{
      image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
      text: {
        desc: 'i',
        name: {
          val: "Iulia Izonina",
          href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
          target: "_blank"
        }
      },
      //        stackChildren: true,
      //        childrenDropLevel: 2,
      collapsed: true,
      children: [{
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Some longnameeeeeee",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        children: [{}]
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Iulia Izonina",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        children: [{}, {}]
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Iulia Izonina",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        children: [{}]
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Iulia Izonina",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        children: [{}]
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Iulia Izonina",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        children: [{}]
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Iulia Izonina",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        children: [{}, {}]
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Iuldcdscsia Izonina",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        }
      }]
    }, {
      image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
      text: {
        desc: 'i',
        name: {
          val: "Igor Rudko",
          href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
          target: "_blank"
        }
      },
      stackChildren: true,
      collapsed: true,
      children: [{
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }]
    }, {
      image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
      text: {
        desc: 'i',
        name: {
          val: "Viktor Matusov",
          href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
          target: "_blank"
        }
      },
      stackChildren: true,
      drawLineThrough: true,
      collapsed: true,
      children: [{
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Alexander Lanin",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true,
        children: [{}]
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Vitalii Litvin",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        }
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Vitalii Tilinskii",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        }
      }]
    }, {
      image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
      text: {
        desc: 'i',
        name: {
          val: "Yevgenii Kolometskiy",
          href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
          target: "_blank"
        }
      },
      stackChildren: true,
      collapsed: true,
      children: [{
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true,
        children: [{
          children: [{}]
        }]
      }]
    }, {
      image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
      text: {
        desc: 'i',
        name: {
          val: "Dmytro Levitskiy (US)",
          href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
          target: "_blank"
        }
      },
      stackChildren: true,
      collapsed: true,
      children: [{
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }]
    }, {
      image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
      text: {
        desc: 'i',
        name: {
          val: "Denys Bratchuk",
          href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
          target: "_blank"
        }
      },
      stackChildren: true,
      collapsed: true,
      children: [{
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        drawLineThrough: true,
        children: [{}]
      }, {
        image: "https://portal-apps.globallogic.com/avatar/api/v2/employee/c78a706e9134/last.jpeg?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiI5ZWZhMjk4NTg3M2EiLCJiIjpudWxsLCJleHAiOjE1NDM5MjAyMDYsImlhdCI6MTU0MzgzMzgwNiwiaWQiOiI3MDA3MWM0N2ZkOWIiLCJqdGkiOiJQRHp0Yk1LQTBLU2I4XzRNb1pWVU53IiwibmJmIjoxNTQzODMzODA2fQ.UfPl-GZsKgTe37r2YkGKYvdZWGiROhDYX0fSTMnwA-dXaGplgVZhtYZNRy68vn6eVarNEn0uZ6IsokDH9E3LSOIjdED0jIp4n7kmQ2wF0Y8Zn6uH1AwPpNM50mc4Lc-_d0NL9xGH0etf4d45d9il6xEJquukFZTpFmfbsfTXKQP8xV9sZlzf5eIutsLzJY8v-nZqBagHDNRh3MczPaWEm7H_r-1zeEGnWK6wrNo8fLGL6FUoJmRySi6yhjJk-1gRut3UH2d_rMaIzFJ6V-S5oGuOCyx4kyxDHe49ZJGM92HIUyjPKjxRDLFirqZjsdFa2ZdlCnkgxM_pN7-hwRjigw?size=320",
        text: {
          desc: 'i',
          name: {
            val: "Liliya Kondratieva",
            href: 'https://portal.globallogic.com/user/profile/nataliya.siromakha/c78a706e9134/general',
            target: "_blank"
          }
        },
        stackChildren: true,
        children: [{}]
      }]
    }]
  }
};
tree = new Treant(chart_config);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(3);

if (typeof content === 'string') content = [[module.i, content, '']];
var transform;
var insertInto;
var options = {
  "hmr": true
};
options.transform = transform;
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if (content.locals) module.exports = content.locals;

if (true) {
  module.hot.accept(3, function () {
    var newContent = __webpack_require__(3);

    if (typeof newContent === 'string') newContent = [[module.i, newContent, '']];

    var locals = function (a, b) {
      var key,
          idx = 0;

      for (key in a) {
        if (!b || a[key] !== b[key]) return false;
        idx++;
      }

      for (key in b) {
        idx--;
      }

      return idx === 0;
    }(content.locals, newContent.locals);

    if (!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');
    update(newContent);
  });
  module.hot.dispose(function () {
    update();
  });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: 'Montserrat', sans-serif; }\n\na {\n  display: block;\n  text-decoration: none;\n  color: #000; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL2luZGV4LnNjc3M/OWYzNCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiXSwibmFtZXMiOlsic3ZnMSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3cmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsInRyZWUiLCJmb28yIiwic2NhbGUiLCJjb25zb2xlIiwibG9nIiwiY291bnRlciIsImN1cnJlbnRab29tIiwic2NhbGVPbkNvbGxhcHNlIiwieCIsIkFycmF5IiwiZnJvbSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsInRyYW5zZm9ybSIsIm9uQ2hhbmdlWm9vbSIsImNoYXJ0X2NvbmZpZyIsImNoYXJ0IiwiYW5pbWF0ZU9uSW5pdCIsImNhbGxiYWNrIiwib25Ub2dnbGVDb2xsYXBzZUZpbmlzaGVkIiwiZSIsIm5vZGUiLCJjb2xsYXBzYWJsZSIsImxldmVsU2VwYXJhdGlvbiIsInNpYmxpbmdTZXBhcmF0aW9uIiwic3ViVGVlU2VwYXJhdGlvbiIsIm5vZGVBbGlnbiIsImNvbm5lY3RvcnMiLCJ0eXBlIiwiYW5pbWF0aW9uIiwibm9kZUFuaW1hdGlvbiIsIm5vZGVTcGVlZCIsImNvbm5lY3RvcnNBbmltYXRpb24iLCJjb25uZWN0b3JzU3BlZWQiLCJub2RlU3RydWN0dXJlIiwiaW1hZ2UiLCJ0ZXh0IiwiZGVzYyIsIm5hbWUiLCJ2YWwiLCJocmVmIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJjb2xsYXBzZWQiLCJzdGFja0NoaWxkcmVuIiwiZHJhd0xpbmVUaHJvdWdoIiwiVHJlYW50IiwiY29udGVudCIsInJlcXVpcmUiLCJtb2R1bGUiLCJpbnNlcnRJbnRvIiwib3B0aW9ucyIsInVuZGVmaW5lZCIsInVwZGF0ZSIsImxvY2FscyIsImV4cG9ydHMiLCJob3QiLCJhY2NlcHQiLCJuZXdDb250ZW50IiwiYSIsImIiLCJrZXkiLCJpZHgiLCJFcnJvciIsImRpc3Bvc2UiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiaWQiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290IiwiY29uY2F0Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImNzcyIsImxvY2F0aW9uIiwid2luZG93IiwiYmFzZVVybCIsInByb3RvY29sIiwiaG9zdCIsImN1cnJlbnREaXIiLCJwYXRobmFtZSIsInJlcGxhY2UiLCJmaXhlZENzcyIsImZ1bGxNYXRjaCIsIm9yaWdVcmwiLCJ1bnF1b3RlZE9yaWdVcmwiLCJ0cmltIiwibyIsIiQxIiwidGVzdCIsIm5ld1VybCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxlQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBNkI7QUFDN0IscUNBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUFxQixnQkFBZ0I7QUFDckM7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2QkFBcUIsZ0JBQWdCO0FBQ3JDO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGFBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQWtCLDhCQUE4QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsZUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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eEIsTUFBaUMsQ0FBckMsRUFBd0M7QUFDOUM7QUFDQUQsWUFBTSxHQUFHZCxPQUFPLEdBQUdTLGVBQW5CLENBRjhDLENBRVY7QUFDcEMsS0FITSxNQUdBO0FBQ047QUFDQUssWUFBTSxHQUFHWCxVQUFVLEdBQUdNLGVBQWUsQ0FBQ0osT0FBaEIsQ0FBd0IsT0FBeEIsRUFBaUMsRUFBakMsQ0FBdEIsQ0FGTSxDQUVzRDtBQUM1RCxLQXhCNkcsQ0EwQjlHOzs7QUFDQSxXQUFPLFNBQVNYLElBQUksQ0FBQ0MsU0FBTCxDQUFlbUIsTUFBZixDQUFULEdBQWtDLEdBQXpDO0FBQ0EsR0E1QmMsQ0FBZixDQTFDK0IsQ0F3RS9COztBQUNBLFNBQU9SLFFBQVA7QUFDQSxDQTFFRCxDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlXCJdO1xuIFx0d2luZG93W1wid2VicGFja0hvdFVwZGF0ZVwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9IFwidXRmLThcIjtcbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBjaHVua0lkICsgXCIuXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNcIjtcbiBcdFx0aWYgKG51bGwpIHNjcmlwdC5jcm9zc09yaWdpbiA9IG51bGw7XG4gXHRcdGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KHJlcXVlc3RUaW1lb3V0KSB7XG4gXHRcdHJlcXVlc3RUaW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQgfHwgMTAwMDA7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgc3VwcG9ydFwiKSk7XG4gXHRcdFx0fVxuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuIFx0XHRcdFx0dmFyIHJlcXVlc3RQYXRoID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHRcdFx0XHRyZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgcmVxdWVzdFBhdGgsIHRydWUpO1xuIFx0XHRcdFx0cmVxdWVzdC50aW1lb3V0ID0gcmVxdWVzdFRpbWVvdXQ7XG4gXHRcdFx0XHRyZXF1ZXN0LnNlbmQobnVsbCk7XG4gXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRyZXR1cm4gcmVqZWN0KGVycik7XG4gXHRcdFx0fVxuIFx0XHRcdHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSByZXR1cm47XG4gXHRcdFx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDApIHtcbiBcdFx0XHRcdFx0Ly8gdGltZW91dFxuIFx0XHRcdFx0XHRyZWplY3QoXG4gXHRcdFx0XHRcdFx0bmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgdGltZWQgb3V0LlwiKVxuIFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gNDA0KSB7XG4gXHRcdFx0XHRcdC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcbiBcdFx0XHRcdFx0cmVzb2x2ZSgpO1xuIFx0XHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0LnN0YXR1cyAhPT0gMjAwICYmIHJlcXVlc3Quc3RhdHVzICE9PSAzMDQpIHtcbiBcdFx0XHRcdFx0Ly8gb3RoZXIgZmFpbHVyZVxuIFx0XHRcdFx0XHRyZWplY3QobmV3IEVycm9yKFwiTWFuaWZlc3QgcmVxdWVzdCB0byBcIiArIHJlcXVlc3RQYXRoICsgXCIgZmFpbGVkLlwiKSk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHQvLyBzdWNjZXNzXG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0dmFyIHVwZGF0ZSA9IEpTT04ucGFyc2UocmVxdWVzdC5yZXNwb25zZVRleHQpO1xuIFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7XG4gXHRcdFx0XHRcdFx0cmVqZWN0KGUpO1xuIFx0XHRcdFx0XHRcdHJldHVybjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRyZXNvbHZlKHVwZGF0ZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdHZhciBob3RBcHBseU9uVXBkYXRlID0gdHJ1ZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRIYXNoID0gXCJiMjQ3MWVmZmY3ZTlmNzY4YTRkY1wiO1xuIFx0dmFyIGhvdFJlcXVlc3RUaW1lb3V0ID0gMTAwMDA7XG4gXHR2YXIgaG90Q3VycmVudE1vZHVsZURhdGEgPSB7fTtcbiBcdHZhciBob3RDdXJyZW50Q2hpbGRNb2R1bGU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHNUZW1wID0gW107XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgbWUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0aWYgKCFtZSkgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX187XG4gXHRcdHZhciBmbiA9IGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiBcdFx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuIFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcbiBcdFx0XHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5pbmRleE9mKG1vZHVsZUlkKSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuIFx0XHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcbiBcdFx0XHRcdFx0XHRyZXF1ZXN0ICtcbiBcdFx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuIFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHQpO1xuIFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ocmVxdWVzdCk7XG4gXHRcdH07XG4gXHRcdHZhciBPYmplY3RGYWN0b3J5ID0gZnVuY3Rpb24gT2JqZWN0RmFjdG9yeShuYW1lKSB7XG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXTtcbiBcdFx0XHRcdH0sXG4gXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX19bbmFtZV0gPSB2YWx1ZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9O1xuIFx0XHRmb3IgKHZhciBuYW1lIGluIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoX193ZWJwYWNrX3JlcXVpcmVfXywgbmFtZSkgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwiZVwiICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcInRcIlxuIFx0XHRcdCkge1xuIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGZuLCBuYW1lLCBPYmplY3RGYWN0b3J5KG5hbWUpKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0Zm4uZSA9IGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInJlYWR5XCIpIGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0aG90Q2h1bmtzTG9hZGluZysrO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoY2h1bmtJZCkudGhlbihmaW5pc2hDaHVua0xvYWRpbmcsIGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0ZmluaXNoQ2h1bmtMb2FkaW5nKCk7XG4gXHRcdFx0XHR0aHJvdyBlcnI7XG4gXHRcdFx0fSk7XG5cbiBcdFx0XHRmdW5jdGlvbiBmaW5pc2hDaHVua0xvYWRpbmcoKSB7XG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nLS07XG4gXHRcdFx0XHRpZiAoaG90U3RhdHVzID09PSBcInByZXBhcmVcIikge1xuIFx0XHRcdFx0XHRpZiAoIWhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChob3RDaHVua3NMb2FkaW5nID09PSAwICYmIGhvdFdhaXRpbmdGaWxlcyA9PT0gMCkge1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0Zm4udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdFx0aWYgKG1vZGUgJiAxKSB2YWx1ZSA9IGZuKHZhbHVlKTtcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy50KHZhbHVlLCBtb2RlICYgfjEpO1xuIFx0XHR9O1xuIFx0XHRyZXR1cm4gZm47XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBob3QgPSB7XG4gXHRcdFx0Ly8gcHJpdmF0ZSBzdHVmZlxuIFx0XHRcdF9hY2NlcHRlZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X2RlY2xpbmVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfc2VsZkFjY2VwdGVkOiBmYWxzZSxcbiBcdFx0XHRfc2VsZkRlY2xpbmVkOiBmYWxzZSxcbiBcdFx0XHRfZGlzcG9zZUhhbmRsZXJzOiBbXSxcbiBcdFx0XHRfbWFpbjogaG90Q3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZCxcblxuIFx0XHRcdC8vIE1vZHVsZSBBUElcbiBcdFx0XHRhY3RpdmU6IHRydWUsXG4gXHRcdFx0YWNjZXB0OiBmdW5jdGlvbihkZXAsIGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdFx0ZWxzZSBob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpIHt9O1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGVjbGluZTogZnVuY3Rpb24oZGVwKSB7XG4gXHRcdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkRlY2xpbmVkID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG4gXHRcdFx0fSxcbiBcdFx0XHRkaXNwb3NlOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRmdW5jdGlvbiB0b01vZHVsZUlkKGlkKSB7XG4gXHRcdHZhciBpc051bWJlciA9ICtpZCArIFwiXCIgPT09IGlkO1xuIFx0XHRyZXR1cm4gaXNOdW1iZXIgPyAraWQgOiBpZDtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90Q2hlY2soYXBwbHkpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJpZGxlXCIpIHtcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJjaGVjaygpIGlzIG9ubHkgYWxsb3dlZCBpbiBpZGxlIHN0YXR1c1wiKTtcbiBcdFx0fVxuIFx0XHRob3RBcHBseU9uVXBkYXRlID0gYXBwbHk7XG4gXHRcdGhvdFNldFN0YXR1cyhcImNoZWNrXCIpO1xuIFx0XHRyZXR1cm4gaG90RG93bmxvYWRNYW5pZmVzdChob3RSZXF1ZXN0VGltZW91dCkudGhlbihmdW5jdGlvbih1cGRhdGUpIHtcbiBcdFx0XHRpZiAoIXVwZGF0ZSkge1xuIFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gMDtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHQvKmdsb2JhbHMgY2h1bmtJZCAqL1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuIFx0XHR2YXIgY2I7XG4gXHRcdHZhciBpO1xuIFx0XHR2YXIgajtcbiBcdFx0dmFyIG1vZHVsZTtcbiBcdFx0dmFyIG1vZHVsZUlkO1xuXG4gXHRcdGZ1bmN0aW9uIGdldEFmZmVjdGVkU3R1ZmYodXBkYXRlTW9kdWxlSWQpIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuIFx0XHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHQpXG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdGVycm9ySGFuZGxlcjogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWRcbiBcdFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdCBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBob3RDcmVhdGVSZXF1aXJlKDApKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuLi9hc3NldHMvc2Nzcy9pbmRleC5zY3NzJztcblxuLy92YXIgY3NzID0gcmVxdWlyZSgnLi4vYXNzZXRzL3N0eWxlcy9pbmRleC5jc3MnKTtcblxudmFyIHN2ZzEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZnJyk7XG52YXIgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xsYXBzYWJsZS1leGFtcGxlJyk7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG52YXIgdHJlZTtcblxuZnVuY3Rpb24gZm9vMigpIHtcbiAgdmFyIHNjYWxlID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHNjYWxlID0gc2NhbGUgKyAoMSAvIDEwKTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cbn1cblxuY29uc29sZS5sb2coJ2NzZGNkY2RzY2RzJyk7XG5cbnZhciBjb3VudGVyID0gZm9vMigpO1xudmFyIGN1cnJlbnRab29tO1xuZnVuY3Rpb24gc2NhbGVPbkNvbGxhcHNlKHgpIHtcbiAgY29uc29sZS5sb2coQXJyYXkuZnJvbShzdmcxKVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCk7XG4gIGNvbnNvbGUubG9nKGNvbnRhaW5lci5jbGllbnRXaWR0aCk7XG5cbiAgaWYgKEFycmF5LmZyb20oc3ZnMSlbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgPiBjb250YWluZXIuY2xpZW50V2lkdGgpIHtcbiAgICBjdXJyZW50Wm9vbSA9IDEgLSBjb3VudGVyKCk7XG4gICAgd3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoJHsxIC0gY291bnRlcigpfSlgO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uQ2hhbmdlWm9vbSgpIHtcblxufVxuXG52YXIgY2hhcnRfY29uZmlnID0ge1xuICBjaGFydDoge1xuICAgIGNvbnRhaW5lcjogXCIjY29sbGFwc2FibGUtZXhhbXBsZVwiLFxuICAgIGFuaW1hdGVPbkluaXQ6IHRydWUsXG4gICAgY2FsbGJhY2s6IHtcbiAgICAgIG9uVG9nZ2xlQ29sbGFwc2VGaW5pc2hlZDogZnVuY3Rpb24gKGUpIHtcblxuLy8gICAgICAgIHNjYWxlT25Db2xsYXBzZShlLlgpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIG5vZGU6IHtcbiAgICAgIGNvbGxhcHNhYmxlOiB0cnVlXG4gICAgfSxcbiAgICBsZXZlbFNlcGFyYXRpb246IDMwLFxuICAgIHNpYmxpbmdTZXBhcmF0aW9uOiAxMCxcbiAgICBzdWJUZWVTZXBhcmF0aW9uOiAxNSxcbiAgICBub2RlQWxpZ246ICdMRUZUJyxcbiAgICBjb25uZWN0b3JzOiB7XG4gICAgICB0eXBlOiAnc3RlcCcsXG4gICAgICBzdHlsZToge1xuICAgICAgICAnc3Ryb2tlJzogJ2dyZXknLFxuLy8gICAgICAgICdhcnJvdy1lbmQnOiB7c3RyaW5nfSxcbi8vICAgICAgICAnY3Vyc29yJzoge3N0cmluZ30sXG4vLyAgICAgICAgJ2ZpbGwnOiB7c3RyaW5nfSxcbi8vLy8nZmlsbC1vcGFjaXR5JzogezAuNX0sXG4vLyAgICAgICAgJ29wYWNpdHknOiB7bnVtYmVyfSxcbi8vICAgICAgICAnc3Ryb2tlJzoge3N0cmluZ30sXG4vLyAgICAgICAgJ3N0cm9rZS1kYXNoYXJyYXknOiB7c3RyaW5nfSxcbi8vICAgICAgICAnc3Ryb2tlLWxpbmVjYXAnOiB7c3RyaW5nfSxcbi8vICAgICAgICAnc3Ryb2tlLW9wYWNpdHknOiB7bnVtYmVyfSxcbiAgICAgICAgJ3N0cm9rZS13aWR0aCc6IDQsXG4gICAgICB9XG4gICAgfSxcbiAgICBhbmltYXRpb246IHtcbiAgICAgIG5vZGVBbmltYXRpb246IFwibGluZWFyIFwiLFxuICAgICAgbm9kZVNwZWVkOiA1MDAsXG4gICAgICBjb25uZWN0b3JzQW5pbWF0aW9uOiBcImxpbmVhclwiLFxuICAgICAgY29ubmVjdG9yc1NwZWVkOiAxMDBcbiAgICB9XG4gIH0sXG4gIG5vZGVTdHJ1Y3R1cmU6IHtcbiAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgIHRleHQ6IHtcbiAgICAgIGRlc2M6ICdpJyxcbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdmFsOiBcIk5hdGFsaXlhIFNpcm9tYWtoYVwiLFxuICAgICAgICBocmVmOiAnaHR0cHM6Ly9wb3J0YWwuZ2xvYmFsbG9naWMuY29tL3VzZXIvcHJvZmlsZS9uYXRhbGl5YS5zaXJvbWFraGEvYzc4YTcwNmU5MTM0L2dlbmVyYWwnLFxuICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgIH0sXG4gICAgICBub2RlQWxpZ246ICdCT1RUT00nLFxuICAgIH0sXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wb3J0YWwtYXBwcy5nbG9iYWxsb2dpYy5jb20vYXZhdGFyL2FwaS92Mi9lbXBsb3llZS9jNzhhNzA2ZTkxMzQvbGFzdC5qcGVnP3Rva2VuPWV5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoY0hCZmFXUWlPaUk1WldaaE1qazROVGczTTJFaUxDSmlJanB1ZFd4c0xDSmxlSEFpT2pFMU5ETTVNakF5TURZc0ltbGhkQ0k2TVRVME16Z3pNemd3Tml3aWFXUWlPaUkzTURBM01XTTBOMlprT1dJaUxDSnFkR2tpT2lKUVJIcDBZazFMUVRCTFUySTRYelJOYjFwV1ZVNTNJaXdpYm1KbUlqb3hOVFF6T0RNek9EQTJmUS5VZlBsLUdac0tnVGUzN3IyWWtHS1l2ZFpXR2lST2hEWVgwZlNUTW53QS1kWGFHcGxnVlpodFlaTlJ5Njh2bjZlVmFyTkVuMHVaNklzb2tESDlFM0xTT0lqZEVEMGpJcDRuN2ttUTJ3RjBZOFpuNnVIMUF3UHBOTTUwbWM0TGMtX2QwTkw5eEdIMGV0ZjRkNDVkOWlsNnhFSnF1dWtGWlRwRm1mYnNmVFhLUVA4eFY5c1psemY1ZUl1dHNMekpZOHYtblpxQmFnSEROUmgzTWN6UGFXRW03SF9yLTF6ZUVHbldLNndyTm84ZkxHTDZGVW9KbVJ5U2k2eWhqSmstMWdSdXQzVUgyZF9yTWFJekZKNlYtUzVvR3VPQ3l4NGt5eERIZTQ5WkpHTTkySElVeWpQS2p4UkRMRmlycVpqc2RGYTJaZGxDbmtneE1fcE43LWh3UmppZ3c/c2l6ZT0zMjBcIixcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIGRlc2M6ICdpJyxcbiAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB2YWw6IFwiSXVsaWEgSXpvbmluYVwiLFxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4vLyAgICAgICAgc3RhY2tDaGlsZHJlbjogdHJ1ZSxcbi8vICAgICAgICBjaGlsZHJlbkRyb3BMZXZlbDogMixcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIGRlc2M6ICdpJyxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHZhbDogXCJTb21lIGxvbmduYW1lZWVlZWVlXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7fV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIGRlc2M6ICdpJyxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHZhbDogXCJJdWxpYSBJem9uaW5hXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7fSwge31dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiSXVsaWEgSXpvbmluYVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3BvcnRhbC5nbG9iYWxsb2dpYy5jb20vdXNlci9wcm9maWxlL25hdGFsaXlhLnNpcm9tYWtoYS9jNzhhNzA2ZTkxMzQvZ2VuZXJhbCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7fV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIGRlc2M6ICdpJyxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHZhbDogXCJJdWxpYSBJem9uaW5hXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW3t9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wb3J0YWwtYXBwcy5nbG9iYWxsb2dpYy5jb20vYXZhdGFyL2FwaS92Mi9lbXBsb3llZS9jNzhhNzA2ZTkxMzQvbGFzdC5qcGVnP3Rva2VuPWV5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoY0hCZmFXUWlPaUk1WldaaE1qazROVGczTTJFaUxDSmlJanB1ZFd4c0xDSmxlSEFpT2pFMU5ETTVNakF5TURZc0ltbGhkQ0k2TVRVME16Z3pNemd3Tml3aWFXUWlPaUkzTURBM01XTTBOMlprT1dJaUxDSnFkR2tpT2lKUVJIcDBZazFMUVRCTFUySTRYelJOYjFwV1ZVNTNJaXdpYm1KbUlqb3hOVFF6T0RNek9EQTJmUS5VZlBsLUdac0tnVGUzN3IyWWtHS1l2ZFpXR2lST2hEWVgwZlNUTW53QS1kWGFHcGxnVlpodFlaTlJ5Njh2bjZlVmFyTkVuMHVaNklzb2tESDlFM0xTT0lqZEVEMGpJcDRuN2ttUTJ3RjBZOFpuNnVIMUF3UHBOTTUwbWM0TGMtX2QwTkw5eEdIMGV0ZjRkNDVkOWlsNnhFSnF1dWtGWlRwRm1mYnNmVFhLUVA4eFY5c1psemY1ZUl1dHNMekpZOHYtblpxQmFnSEROUmgzTWN6UGFXRW03SF9yLTF6ZUVHbldLNndyTm84ZkxHTDZGVW9KbVJ5U2k2eWhqSmstMWdSdXQzVUgyZF9yTWFJekZKNlYtUzVvR3VPQ3l4NGt5eERIZTQ5WkpHTTkySElVeWpQS2p4UkRMRmlycVpqc2RGYTJaZGxDbmtneE1fcE43LWh3UmppZ3c/c2l6ZT0zMjBcIixcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgZGVzYzogJ2knLFxuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgdmFsOiBcIkl1bGlhIEl6b25pbmFcIixcbiAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9wb3J0YWwuZ2xvYmFsbG9naWMuY29tL3VzZXIvcHJvZmlsZS9uYXRhbGl5YS5zaXJvbWFraGEvYzc4YTcwNmU5MTM0L2dlbmVyYWwnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbe31dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiSXVsaWEgSXpvbmluYVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3BvcnRhbC5nbG9iYWxsb2dpYy5jb20vdXNlci9wcm9maWxlL25hdGFsaXlhLnNpcm9tYWtoYS9jNzhhNzA2ZTkxMzQvZ2VuZXJhbCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7fSwge31dXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiSXVsZGNkc2NzaWEgSXpvbmluYVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3BvcnRhbC5nbG9iYWxsb2dpYy5jb20vdXNlci9wcm9maWxlL25hdGFsaXlhLnNpcm9tYWtoYS9jNzhhNzA2ZTkxMzQvZ2VuZXJhbCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdmFsOiBcIklnb3IgUnVka29cIixcbiAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3BvcnRhbC5nbG9iYWxsb2dpYy5jb20vdXNlci9wcm9maWxlL25hdGFsaXlhLnNpcm9tYWtoYS9jNzhhNzA2ZTkxMzQvZ2VuZXJhbCcsXG4gICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wb3J0YWwtYXBwcy5nbG9iYWxsb2dpYy5jb20vYXZhdGFyL2FwaS92Mi9lbXBsb3llZS9jNzhhNzA2ZTkxMzQvbGFzdC5qcGVnP3Rva2VuPWV5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoY0hCZmFXUWlPaUk1WldaaE1qazROVGczTTJFaUxDSmlJanB1ZFd4c0xDSmxlSEFpT2pFMU5ETTVNakF5TURZc0ltbGhkQ0k2TVRVME16Z3pNemd3Tml3aWFXUWlPaUkzTURBM01XTTBOMlprT1dJaUxDSnFkR2tpT2lKUVJIcDBZazFMUVRCTFUySTRYelJOYjFwV1ZVNTNJaXdpYm1KbUlqb3hOVFF6T0RNek9EQTJmUS5VZlBsLUdac0tnVGUzN3IyWWtHS1l2ZFpXR2lST2hEWVgwZlNUTW53QS1kWGFHcGxnVlpodFlaTlJ5Njh2bjZlVmFyTkVuMHVaNklzb2tESDlFM0xTT0lqZEVEMGpJcDRuN2ttUTJ3RjBZOFpuNnVIMUF3UHBOTTUwbWM0TGMtX2QwTkw5eEdIMGV0ZjRkNDVkOWlsNnhFSnF1dWtGWlRwRm1mYnNmVFhLUVA4eFY5c1psemY1ZUl1dHNMekpZOHYtblpxQmFnSEROUmgzTWN6UGFXRW03SF9yLTF6ZUVHbldLNndyTm84ZkxHTDZGVW9KbVJ5U2k2eWhqSmstMWdSdXQzVUgyZF9yTWFJekZKNlYtUzVvR3VPQ3l4NGt5eERIZTQ5WkpHTTkySElVeWpQS2p4UkRMRmlycVpqc2RGYTJaZGxDbmtneE1fcE43LWh3UmppZ3c/c2l6ZT0zMjBcIixcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgZGVzYzogJ2knLFxuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgdmFsOiBcIkxpbGl5YSBLb25kcmF0aWV2YVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3BvcnRhbC5nbG9iYWxsb2dpYy5jb20vdXNlci9wcm9maWxlL25hdGFsaXlhLnNpcm9tYWtoYS9jNzhhNzA2ZTkxMzQvZ2VuZXJhbCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhY2tDaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgICAgIGRyYXdMaW5lVGhyb3VnaDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdmFsOiBcIlZpa3RvciBNYXR1c292XCIsXG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9wb3J0YWwuZ2xvYmFsbG9naWMuY29tL3VzZXIvcHJvZmlsZS9uYXRhbGl5YS5zaXJvbWFraGEvYzc4YTcwNmU5MTM0L2dlbmVyYWwnLFxuICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhY2tDaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgZHJhd0xpbmVUaHJvdWdoOiB0cnVlLFxuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wb3J0YWwtYXBwcy5nbG9iYWxsb2dpYy5jb20vYXZhdGFyL2FwaS92Mi9lbXBsb3llZS9jNzhhNzA2ZTkxMzQvbGFzdC5qcGVnP3Rva2VuPWV5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoY0hCZmFXUWlPaUk1WldaaE1qazROVGczTTJFaUxDSmlJanB1ZFd4c0xDSmxlSEFpT2pFMU5ETTVNakF5TURZc0ltbGhkQ0k2TVRVME16Z3pNemd3Tml3aWFXUWlPaUkzTURBM01XTTBOMlprT1dJaUxDSnFkR2tpT2lKUVJIcDBZazFMUVRCTFUySTRYelJOYjFwV1ZVNTNJaXdpYm1KbUlqb3hOVFF6T0RNek9EQTJmUS5VZlBsLUdac0tnVGUzN3IyWWtHS1l2ZFpXR2lST2hEWVgwZlNUTW53QS1kWGFHcGxnVlpodFlaTlJ5Njh2bjZlVmFyTkVuMHVaNklzb2tESDlFM0xTT0lqZEVEMGpJcDRuN2ttUTJ3RjBZOFpuNnVIMUF3UHBOTTUwbWM0TGMtX2QwTkw5eEdIMGV0ZjRkNDVkOWlsNnhFSnF1dWtGWlRwRm1mYnNmVFhLUVA4eFY5c1psemY1ZUl1dHNMekpZOHYtblpxQmFnSEROUmgzTWN6UGFXRW03SF9yLTF6ZUVHbldLNndyTm84ZkxHTDZGVW9KbVJ5U2k2eWhqSmstMWdSdXQzVUgyZF9yTWFJekZKNlYtUzVvR3VPQ3l4NGt5eERIZTQ5WkpHTTkySElVeWpQS2p4UkRMRmlycVpqc2RGYTJaZGxDbmtneE1fcE43LWh3UmppZ3c/c2l6ZT0zMjBcIixcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgZGVzYzogJ2knLFxuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgdmFsOiBcIkFsZXhhbmRlciBMYW5pblwiLFxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3BvcnRhbC5nbG9iYWxsb2dpYy5jb20vdXNlci9wcm9maWxlL25hdGFsaXlhLnNpcm9tYWtoYS9jNzhhNzA2ZTkxMzQvZ2VuZXJhbCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhY2tDaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgICAgIGRyYXdMaW5lVGhyb3VnaDogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiVml0YWxpaSBMaXR2aW5cIixcbiAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9wb3J0YWwuZ2xvYmFsbG9naWMuY29tL3VzZXIvcHJvZmlsZS9uYXRhbGl5YS5zaXJvbWFraGEvYzc4YTcwNmU5MTM0L2dlbmVyYWwnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wb3J0YWwtYXBwcy5nbG9iYWxsb2dpYy5jb20vYXZhdGFyL2FwaS92Mi9lbXBsb3llZS9jNzhhNzA2ZTkxMzQvbGFzdC5qcGVnP3Rva2VuPWV5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoY0hCZmFXUWlPaUk1WldaaE1qazROVGczTTJFaUxDSmlJanB1ZFd4c0xDSmxlSEFpT2pFMU5ETTVNakF5TURZc0ltbGhkQ0k2TVRVME16Z3pNemd3Tml3aWFXUWlPaUkzTURBM01XTTBOMlprT1dJaUxDSnFkR2tpT2lKUVJIcDBZazFMUVRCTFUySTRYelJOYjFwV1ZVNTNJaXdpYm1KbUlqb3hOVFF6T0RNek9EQTJmUS5VZlBsLUdac0tnVGUzN3IyWWtHS1l2ZFpXR2lST2hEWVgwZlNUTW53QS1kWGFHcGxnVlpodFlaTlJ5Njh2bjZlVmFyTkVuMHVaNklzb2tESDlFM0xTT0lqZEVEMGpJcDRuN2ttUTJ3RjBZOFpuNnVIMUF3UHBOTTUwbWM0TGMtX2QwTkw5eEdIMGV0ZjRkNDVkOWlsNnhFSnF1dWtGWlRwRm1mYnNmVFhLUVA4eFY5c1psemY1ZUl1dHNMekpZOHYtblpxQmFnSEROUmgzTWN6UGFXRW03SF9yLTF6ZUVHbldLNndyTm84ZkxHTDZGVW9KbVJ5U2k2eWhqSmstMWdSdXQzVUgyZF9yTWFJekZKNlYtUzVvR3VPQ3l4NGt5eERIZTQ5WkpHTTkySElVeWpQS2p4UkRMRmlycVpqc2RGYTJaZGxDbmtneE1fcE43LWh3UmppZ3c/c2l6ZT0zMjBcIixcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgZGVzYzogJ2knLFxuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgdmFsOiBcIlZpdGFsaWkgVGlsaW5za2lpXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgZGVzYzogJ2knLFxuICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHZhbDogXCJZZXZnZW5paSBLb2xvbWV0c2tpeVwiLFxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YWNrQ2hpbGRyZW46IHRydWUsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiTGlsaXlhIEtvbmRyYXRpZXZhXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgZHJhd0xpbmVUaHJvdWdoOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiTGlsaXlhIEtvbmRyYXRpZXZhXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgZHJhd0xpbmVUaHJvdWdoOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiTGlsaXlhIEtvbmRyYXRpZXZhXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgZHJhd0xpbmVUaHJvdWdoOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiTGlsaXlhIEtvbmRyYXRpZXZhXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgZHJhd0xpbmVUaHJvdWdoOiB0cnVlLFxuICAgICAgICAgICAgY2hpbGRyZW46IFt7XG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbe31dXG4gICAgICAgICAgICB9XVxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdmFsOiBcIkRteXRybyBMZXZpdHNraXkgKFVTKVwiLFxuICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHN0YWNrQ2hpbGRyZW46IHRydWUsXG4gICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiTGlsaXlhIEtvbmRyYXRpZXZhXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgZHJhd0xpbmVUaHJvdWdoOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiTGlsaXlhIEtvbmRyYXRpZXZhXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgZHJhd0xpbmVUaHJvdWdoOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiTGlsaXlhIEtvbmRyYXRpZXZhXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgZHJhd0xpbmVUaHJvdWdoOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWFnZTogXCJodHRwczovL3BvcnRhbC1hcHBzLmdsb2JhbGxvZ2ljLmNvbS9hdmF0YXIvYXBpL3YyL2VtcGxveWVlL2M3OGE3MDZlOTEzNC9sYXN0LmpwZWc/dG9rZW49ZXlKaGJHY2lPaUpTVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhjSEJmYVdRaU9pSTVaV1poTWprNE5UZzNNMkVpTENKaUlqcHVkV3hzTENKbGVIQWlPakUxTkRNNU1qQXlNRFlzSW1saGRDSTZNVFUwTXpnek16Z3dOaXdpYVdRaU9pSTNNREEzTVdNME4yWmtPV0lpTENKcWRHa2lPaUpRUkhwMFlrMUxRVEJMVTJJNFh6Uk5iMXBXVlU1M0lpd2libUptSWpveE5UUXpPRE16T0RBMmZRLlVmUGwtR1pzS2dUZTM3cjJZa0dLWXZkWldHaVJPaERZWDBmU1RNbndBLWRYYUdwbGdWWmh0WVpOUnk2OHZuNmVWYXJORW4wdVo2SXNva0RIOUUzTFNPSWpkRUQwaklwNG43a21RMndGMFk4Wm42dUgxQXdQcE5NNTBtYzRMYy1fZDBOTDl4R0gwZXRmNGQ0NWQ5aWw2eEVKcXV1a0ZaVHBGbWZic2ZUWEtRUDh4VjlzWmx6ZjVlSXV0c0x6Slk4di1uWnFCYWdIRE5SaDNNY3pQYVdFbTdIX3ItMXplRUduV0s2d3JObzhmTEdMNkZVb0ptUnlTaTZ5aGpKay0xZ1J1dDNVSDJkX3JNYUl6Rko2Vi1TNW9HdU9DeXg0a3l4REhlNDlaSkdNOTJISVV5alBLanhSRExGaXJxWmpzZEZhMlpkbENua2d4TV9wTjctaHdSamlndz9zaXplPTMyMFwiLFxuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB2YWw6IFwiTGlsaXlhIEtvbmRyYXRpZXZhXCIsXG4gICAgICAgICAgICAgICAgaHJlZjogJ2h0dHBzOi8vcG9ydGFsLmdsb2JhbGxvZ2ljLmNvbS91c2VyL3Byb2ZpbGUvbmF0YWxpeWEuc2lyb21ha2hhL2M3OGE3MDZlOTEzNC9nZW5lcmFsJyxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFja0NoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgZHJhd0xpbmVUaHJvdWdoOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgIHRleHQ6IHtcbiAgICAgICAgICBkZXNjOiAnaScsXG4gICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgdmFsOiBcIkRlbnlzIEJyYXRjaHVrXCIsXG4gICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9wb3J0YWwuZ2xvYmFsbG9naWMuY29tL3VzZXIvcHJvZmlsZS9uYXRhbGl5YS5zaXJvbWFraGEvYzc4YTcwNmU5MTM0L2dlbmVyYWwnLFxuICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhY2tDaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIGRlc2M6ICdpJyxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHZhbDogXCJMaWxpeWEgS29uZHJhdGlldmFcIixcbiAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9wb3J0YWwuZ2xvYmFsbG9naWMuY29tL3VzZXIvcHJvZmlsZS9uYXRhbGl5YS5zaXJvbWFraGEvYzc4YTcwNmU5MTM0L2dlbmVyYWwnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YWNrQ2hpbGRyZW46IHRydWUsXG4gICAgICAgICAgICBkcmF3TGluZVRocm91Z2g6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIGRlc2M6ICdpJyxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHZhbDogXCJMaWxpeWEgS29uZHJhdGlldmFcIixcbiAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9wb3J0YWwuZ2xvYmFsbG9naWMuY29tL3VzZXIvcHJvZmlsZS9uYXRhbGl5YS5zaXJvbWFraGEvYzc4YTcwNmU5MTM0L2dlbmVyYWwnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YWNrQ2hpbGRyZW46IHRydWUsXG4gICAgICAgICAgICBkcmF3TGluZVRocm91Z2g6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIGRlc2M6ICdpJyxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHZhbDogXCJMaWxpeWEgS29uZHJhdGlldmFcIixcbiAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9wb3J0YWwuZ2xvYmFsbG9naWMuY29tL3VzZXIvcHJvZmlsZS9uYXRhbGl5YS5zaXJvbWFraGEvYzc4YTcwNmU5MTM0L2dlbmVyYWwnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YWNrQ2hpbGRyZW46IHRydWUsXG4gICAgICAgICAgICBkcmF3TGluZVRocm91Z2g6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vcG9ydGFsLWFwcHMuZ2xvYmFsbG9naWMuY29tL2F2YXRhci9hcGkvdjIvZW1wbG95ZWUvYzc4YTcwNmU5MTM0L2xhc3QuanBlZz90b2tlbj1leUpoYkdjaU9pSlNVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGNIQmZhV1FpT2lJNVpXWmhNams0TlRnM00yRWlMQ0ppSWpwdWRXeHNMQ0psZUhBaU9qRTFORE01TWpBeU1EWXNJbWxoZENJNk1UVTBNemd6TXpnd05pd2lhV1FpT2lJM01EQTNNV00wTjJaa09XSWlMQ0pxZEdraU9pSlFSSHAwWWsxTFFUQkxVMkk0WHpSTmIxcFdWVTUzSWl3aWJtSm1Jam94TlRRek9ETXpPREEyZlEuVWZQbC1HWnNLZ1RlMzdyMllrR0tZdmRaV0dpUk9oRFlYMGZTVE1ud0EtZFhhR3BsZ1ZaaHRZWk5SeTY4dm42ZVZhck5FbjB1WjZJc29rREg5RTNMU09JamRFRDBqSXA0bjdrbVEyd0YwWThabjZ1SDFBd1BwTk01MG1jNExjLV9kME5MOXhHSDBldGY0ZDQ1ZDlpbDZ4RUpxdXVrRlpUcEZtZmJzZlRYS1FQOHhWOXNabHpmNWVJdXRzTHpKWTh2LW5acUJhZ0hETlJoM01jelBhV0VtN0hfci0xemVFR25XSzZ3ck5vOGZMR0w2RlVvSm1SeVNpNnloakprLTFnUnV0M1VIMmRfck1hSXpGSjZWLVM1b0d1T0N5eDRreXhESGU0OVpKR005MkhJVXlqUEtqeFJETEZpcnFaanNkRmEyWmRsQ25rZ3hNX3BONy1od1JqaWd3P3NpemU9MzIwXCIsXG4gICAgICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICAgIGRlc2M6ICdpJyxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIHZhbDogXCJMaWxpeWEgS29uZHJhdGlldmFcIixcbiAgICAgICAgICAgICAgICBocmVmOiAnaHR0cHM6Ly9wb3J0YWwuZ2xvYmFsbG9naWMuY29tL3VzZXIvcHJvZmlsZS9uYXRhbGl5YS5zaXJvbWFraGEvYzc4YTcwNmU5MTM0L2dlbmVyYWwnLFxuICAgICAgICAgICAgICAgIHRhcmdldDogXCJfYmxhbmtcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YWNrQ2hpbGRyZW46IHRydWUsXG4gICAgICAgICAgICBkcmF3TGluZVRocm91Z2g6IHRydWUsXG4gICAgICAgICAgICBjaGlsZHJlbjogW3t9XVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9wb3J0YWwtYXBwcy5nbG9iYWxsb2dpYy5jb20vYXZhdGFyL2FwaS92Mi9lbXBsb3llZS9jNzhhNzA2ZTkxMzQvbGFzdC5qcGVnP3Rva2VuPWV5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpoY0hCZmFXUWlPaUk1WldaaE1qazROVGczTTJFaUxDSmlJanB1ZFd4c0xDSmxlSEFpT2pFMU5ETTVNakF5TURZc0ltbGhkQ0k2TVRVME16Z3pNemd3Tml3aWFXUWlPaUkzTURBM01XTTBOMlprT1dJaUxDSnFkR2tpT2lKUVJIcDBZazFMUVRCTFUySTRYelJOYjFwV1ZVNTNJaXdpYm1KbUlqb3hOVFF6T0RNek9EQTJmUS5VZlBsLUdac0tnVGUzN3IyWWtHS1l2ZFpXR2lST2hEWVgwZlNUTW53QS1kWGFHcGxnVlpodFlaTlJ5Njh2bjZlVmFyTkVuMHVaNklzb2tESDlFM0xTT0lqZEVEMGpJcDRuN2ttUTJ3RjBZOFpuNnVIMUF3UHBOTTUwbWM0TGMtX2QwTkw5eEdIMGV0ZjRkNDVkOWlsNnhFSnF1dWtGWlRwRm1mYnNmVFhLUVA4eFY5c1psemY1ZUl1dHNMekpZOHYtblpxQmFnSEROUmgzTWN6UGFXRW03SF9yLTF6ZUVHbldLNndyTm84ZkxHTDZGVW9KbVJ5U2k2eWhqSmstMWdSdXQzVUgyZF9yTWFJekZKNlYtUzVvR3VPQ3l4NGt5eERIZTQ5WkpHTTkySElVeWpQS2p4UkRMRmlycVpqc2RGYTJaZGxDbmtneE1fcE43LWh3UmppZ3c/c2l6ZT0zMjBcIixcbiAgICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgICAgZGVzYzogJ2knLFxuICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgdmFsOiBcIkxpbGl5YSBLb25kcmF0aWV2YVwiLFxuICAgICAgICAgICAgICAgIGhyZWY6ICdodHRwczovL3BvcnRhbC5nbG9iYWxsb2dpYy5jb20vdXNlci9wcm9maWxlL25hdGFsaXlhLnNpcm9tYWtoYS9jNzhhNzA2ZTkxMzQvZ2VuZXJhbCcsXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcIl9ibGFua1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhY2tDaGlsZHJlbjogdHJ1ZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbe31dXG4gICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH1cbn07XG5cbnRyZWUgPSBuZXcgVHJlYW50KGNoYXJ0X2NvbmZpZyk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjsgfVxcblxcbmEge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzAwMDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=