import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { tmpdir } from 'node:os';
import { Server } from 'node:http';
import { resolve, dirname, join } from 'node:path';
import nodeCrypto from 'node:crypto';
import { isMainThread, parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, createEvent, fetchWithEvent, isEvent, eventHandler, setHeaders, getResponseHeader, createError, sendRedirect, proxyRequest, getRequestHeader, getRequestProtocol, getRequestHost as getRequestHost$1, getRequestURL, readRawBody, isError, setResponseHeaders, setResponseStatus, send, setResponseHeader, appendResponseHeader, getRequestHeaders, getResponseStatus, getCookie, setCookie, sanitizeStatusCode, removeResponseHeader, getRouterParam, writeEarlyHints, getQuery as getQuery$1, getRequestWebStream, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler, readBody, setHeader, toWebRequest } from 'file://D:/work/portfolio/node_modules/h3/dist/index.mjs';
import { escapeHtml } from 'file://D:/work/portfolio/node_modules/@vue/shared/dist/shared.cjs.js';
import viteNodeEntry_mjs from 'file:///D:/work/portfolio/node_modules/@nuxt/vite-builder/dist/vite-node-entry.mjs';
import { viteNodeFetch } from 'file:///D:/work/portfolio/node_modules/@nuxt/vite-builder/dist/vite-node.mjs';
import { existsSync, readFileSync, promises } from 'node:fs';
import { unref, isVNode, toRaw, isReactive, isShallow, shallowReactive, reactive } from 'file://D:/work/portfolio/node_modules/vue/index.mjs';
import { stringify, uneval } from 'file://D:/work/portfolio/node_modules/devalue/src/index.js';
import { createHead as createHead$1, propsToString, renderSSRHead } from 'file://D:/work/portfolio/node_modules/unhead/dist/server.mjs';
import { parseURL, withQuery, getQuery, withoutBase, joinURL, withTrailingSlash, joinRelativeURL, withoutTrailingSlash, parsePath, withLeadingSlash, decodePath } from 'file://D:/work/portfolio/node_modules/ufo/dist/index.mjs';
import { createRenderer, getRequestDependencies, getPreloadLinks, getPrefetchLinks } from 'file://D:/work/portfolio/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import destr, { destr as destr$1 } from 'file://D:/work/portfolio/node_modules/destr/dist/index.mjs';
import process$1 from 'node:process';
import { klona } from 'file://D:/work/portfolio/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file://D:/work/portfolio/node_modules/defu/dist/defu.mjs';
import { snakeCase } from 'file://D:/work/portfolio/node_modules/scule/dist/index.mjs';
import { createHooks } from 'file://D:/work/portfolio/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import { createFetch, Headers as Headers$1 } from 'file://D:/work/portfolio/node_modules/ofetch/dist/node.mjs';
import { fetchNodeRequestHandler, callNodeRequestHandler } from 'file://D:/work/portfolio/node_modules/node-mock-http/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/work/portfolio/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/work/portfolio/node_modules/unstorage/drivers/fs.mjs';
import { digest } from 'file://D:/work/portfolio/node_modules/ohash/dist/index.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/work/portfolio/node_modules/radix3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import consola, { consola as consola$1 } from 'file://D:/work/portfolio/node_modules/consola/dist/index.mjs';
import { ErrorParser } from 'file://D:/work/portfolio/node_modules/youch-core/build/index.js';
import { Youch } from 'file://D:/work/portfolio/node_modules/youch/build/index.js';
import { SourceMapConsumer } from 'file://D:/work/portfolio/node_modules/nitropack/node_modules/source-map/source-map.js';
import { defineDiagnostics, createConsoleReporter } from 'file://D:/work/portfolio/node_modules/nostics/dist/index.mjs';
import { ansiFormatter } from 'file://D:/work/portfolio/node_modules/nostics/dist/formatters/ansi.mjs';
import { AsyncLocalStorage } from 'node:async_hooks';
import { getContext } from 'file://D:/work/portfolio/node_modules/@nuxt/nitro-server/node_modules/unctx/dist/index.mjs';
import { captureRawStackTrace, parseRawStackTrace } from 'file://D:/work/portfolio/node_modules/@nuxt/nitro-server/node_modules/errx/dist/index.mjs';
import _5142yCVpWwn5PvE6XHDDXBP_DBYEq2vNEckbujKQINE from 'file://D:/work/portfolio/node_modules/@nuxt/cli/runtime/dev-close-sockets.mjs';
import dc from 'node:diagnostics_channel';
import { formatWithOptions } from 'node:util';
import _Z4Vm0BJMJeyU_KFYzGBgSOBoZ4JOQn4jYmko_KtDwU from 'file:///D:/work/portfolio/node_modules/@nuxt/vite-builder/dist/ssr-sourcemap.mjs';
import _LB91z6Ht2T49ncvhFWMKIA26eT4mdBc7tIFl06yLKKs from 'file:///D:/work/portfolio/node_modules/@nuxt/vite-builder/dist/vite-node-warmup.mjs';
import { fileURLToPath } from 'node:url';
import { dirname as dirname$1, resolve as resolve$1 } from 'file://D:/work/portfolio/node_modules/pathe/dist/index.mjs';
import { walkResolver, resolveTags } from 'file://D:/work/portfolio/node_modules/unhead/dist/utils.mjs';
import { PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin, SafeInputPlugin } from 'file://D:/work/portfolio/node_modules/unhead/dist/plugins.mjs';
import { renderToSimpleStream } from 'file://D:/work/portfolio/node_modules/vue/server-renderer/index.mjs';
import { HookableCore } from 'file://D:/work/portfolio/node_modules/hookable/dist/index.mjs';
import { DeprecationsPlugin } from 'file://D:/work/portfolio/node_modules/unhead/dist/legacy.mjs';

const serverAssets = [{"baseName":"server","dir":"D:/work/portfolio/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir, ignore: (asset?.ignore || []) }));
}

const storage$2 = createStorage({});

storage$2.mount('/assets', assets$1);

storage$2.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/work/portfolio","ignore":["**/node_modules","**/*.stories.js","**/*.stories.cts","**/*.stories.mts","**/*.stories.ts","**/*.stories.jsx","**/*.stories.tsx","**/*.spec.js","**/*.spec.cts","**/*.spec.mts","**/*.spec.ts","**/*.spec.jsx","**/*.spec.tsx","**/*.test.js","**/*.test.cts","**/*.test.mts","**/*.test.ts","**/*.test.jsx","**/*.test.tsx","**/*.d.cts","**/*.d.mts","**/*.d.ts","**/*.d.vue.cts","**/*.d.vue.mts","**/*.d.vue.ts","**/.pnpm-store","**/.vercel","**/.netlify","**/.wrangler","**/.output","**/.git","**/.cache","**/.data","**/.direnv","D:/work/portfolio/vendor","**/node-compile-cache","**/test-results","**/*.sock","D:/work/portfolio/.nuxt/analyze","**/.nuxt","**/-*.*"]}));
storage$2.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:/work/portfolio/server","ignore":["**/node_modules","**/*.stories.js","**/*.stories.cts","**/*.stories.mts","**/*.stories.ts","**/*.stories.jsx","**/*.stories.tsx","**/*.spec.js","**/*.spec.cts","**/*.spec.mts","**/*.spec.ts","**/*.spec.jsx","**/*.spec.tsx","**/*.test.js","**/*.test.cts","**/*.test.mts","**/*.test.ts","**/*.test.jsx","**/*.test.tsx","**/*.d.cts","**/*.d.mts","**/*.d.ts","**/*.d.vue.cts","**/*.d.vue.mts","**/*.d.vue.ts","**/.pnpm-store","**/.vercel","**/.netlify","**/.wrangler","**/.output","**/.git","**/.cache","**/.data","**/.direnv","**/node-compile-cache","**/test-results","**/*.sock","**/-*.*"]}));
storage$2.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/work/portfolio/.nuxt"}));
storage$2.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:/work/portfolio/.nuxt/cache"}));
storage$2.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"D:/work/portfolio/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage$2, base) : storage$2;
}

const Hasher = /* @__PURE__ */ (() => {
  class Hasher2 {
    buff = "";
    #context = /* @__PURE__ */ new Map();
    write(str) {
      this.buff += str;
    }
    dispatch(value) {
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    }
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = this.#context.get(object)) === void 0) {
        this.#context.set(object, this.#context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        this.write("buffer:");
        return this.write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else {
          this.unknown(object, objType);
        }
      } else {
        const keys = Object.keys(object).sort();
        const extraKeys = [];
        this.write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          this.write(":");
          this.dispatch(object[key]);
          this.write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    }
    array(arr, unordered) {
      unordered = unordered === void 0 ? false : unordered;
      this.write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = new Hasher2();
        hasher.dispatch(entry);
        for (const [key, value] of hasher.#context) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      this.#context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    }
    date(date) {
      return this.write("date:" + date.toJSON());
    }
    symbol(sym) {
      return this.write("symbol:" + sym.toString());
    }
    unknown(value, type) {
      this.write(type);
      if (!value) {
        return;
      }
      this.write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          [...value.entries()],
          true
          /* ordered */
        );
      }
    }
    error(err) {
      return this.write("error:" + err.toString());
    }
    boolean(bool) {
      return this.write("bool:" + bool);
    }
    string(string) {
      this.write("string:" + string.length + ":");
      this.write(string);
    }
    function(fn) {
      this.write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
    }
    number(number) {
      return this.write("number:" + number);
    }
    null() {
      return this.write("Null");
    }
    undefined() {
      return this.write("Undefined");
    }
    regexp(regex) {
      return this.write("regex:" + regex.toString());
    }
    arraybuffer(arr) {
      this.write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    }
    url(url) {
      return this.write("url:" + url.toString());
    }
    map(map) {
      this.write("map:");
      const arr = [...map];
      return this.array(arr, false);
    }
    set(set) {
      this.write("set:");
      const arr = [...set];
      return this.array(arr, false);
    }
    bigint(number) {
      return this.write("bigint:" + number.toString());
    }
  }
  for (const type of [
    "uint8array",
    "uint8clampedarray",
    "unt8array",
    "uint16array",
    "unt16array",
    "uint32array",
    "unt32array",
    "float32array",
    "float64array"
  ]) {
    Hasher2.prototype[type] = function(arr) {
      this.write(type + ":");
      return this.array([...arr], false);
    };
  }
  function isNativeFunction(f) {
    if (typeof f !== "function") {
      return false;
    }
    return Function.prototype.toString.call(f).slice(
      -15
      /* "[native code] }".length */
    ) === "[native code] }";
  }
  return Hasher2;
})();
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
const MAX_WRITE_HOLD_MS = 3e4;
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const heldUntil = /* @__PURE__ */ new WeakMap();
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      let isPending = pending[key];
      if (isPending && heldUntil.has(isPending) && (shouldInvalidateCache || Date.now() > heldUntil.get(isPending))) {
        delete pending[key];
        isPending = void 0;
      }
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = (async () => resolver())();
      }
      const current = pending[key];
      const release = () => {
        if (pending[key] === current) {
          delete pending[key];
        }
      };
      try {
        entry.value = await current;
      } catch (error) {
        if (!isPending) {
          release();
        }
        throw error;
      }
      if (!isPending) {
        let isWriting = false;
        try {
          entry.mtime = Date.now();
          entry.integrity = integrity;
          if (validate(entry) === false) {
            if (opts._removeStaleOnInvalid?.(entry)) {
              const promise = useStorage().removeItem(cacheKey).catch((error) => {
                console.error(`[cache] Cache remove error.`, error);
                useNitroApp().captureError(error, {
                  event,
                  tags: ["cache"]
                });
              });
              if (event?.waitUntil) {
                event.waitUntil(promise);
              }
            }
          } else {
            heldUntil.set(
              current,
              entry.mtime + Math.min(MAX_WRITE_HOLD_MS, ttl || Infinity)
            );
            let setOpts;
            if (opts.maxAge && !opts.swr) {
              setOpts = { ttl: opts.maxAge };
            }
            const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
              console.error(`[cache] Cache write error.`, error);
              useNitroApp().captureError(error, { event, tags: ["cache"] });
            }).finally(release);
            isWriting = true;
            if (event?.waitUntil) {
              event.waitUntil(promise);
            }
          }
        } finally {
          if (!isWriting) {
            release();
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const _methodSuffix = event.method === "HEAD" ? ":HEAD" : "";
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey) + _methodSuffix;
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":") + _methodSuffix;
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      if (!isCacheableResponse(entry.value.headers, variableHeaderNames)) {
        return false;
      }
      return true;
    },
    _removeStaleOnInvalid: (entry) => !!entry.value && !isCacheableResponse(entry.value.headers, variableHeaderNames),
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _resolveResponse = async (incomingEvent) => {
    const variableHeaders = {};
    for (const header of variableHeaderNames) {
      const value = incomingEvent.node.req.headers[header];
      if (value !== void 0) {
        variableHeaders[header] = value;
      }
    }
    const reqProxy = cloneWithProxy(incomingEvent.node.req, {
      headers: variableHeaders
    });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.node.res, {
      statusCode: 200,
      writableEnded: false,
      writableFinished: false,
      headersSent: false,
      closed: false,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      appendHeader(name, value) {
        const values = [resHeaders[name], value].flat().filter((v) => v !== void 0).map(String);
        resHeaders[name] = values.length === 1 ? values[0] : values;
        return this;
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2(void 0);
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return true;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          if (Array.isArray(headers2) || typeof headers2 === "string") {
            throw new TypeError("Raw headers  is not supported.");
          }
          for (const header in headers2) {
            const value = headers2[header];
            if (value !== void 0) {
              this.setHeader(header, value);
            }
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event._path = incomingEvent._path;
    event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
      fetch: useNitroApp().localFetch
    });
    event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
      fetch: globalThis.$fetch
    });
    event.waitUntil = incomingEvent.waitUntil;
    event.context = incomingEvent.context;
    event.context.cache = {
      options: _opts
    };
    const body = await handler(event) || _resSendBody;
    const headers = event.node.res.getHeaders();
    headers.etag = String(headers.Etag || headers.etag || `W/"${hash(body)}"`);
    headers["last-modified"] = String(
      headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
    );
    const cacheControl = [];
    if (!isCacheableResponse(headers, variableHeaderNames)) ; else if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length > 0) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.node.res.statusCode,
      headers,
      body
    };
    responseOrigins.set(cacheEntry, incomingEvent);
    return cacheEntry;
  };
  const _cachedHandler = cachedFunction(
    // Anonymous wrapper keeps the default cache name (`fn.name` fallback) unchanged
    (event) => _resolveResponse(event),
    _opts
  );
  return defineEventHandler(async (event) => {
    if (event.method !== "GET" && event.method !== "HEAD" || event.node.req.headers.range !== void 0) {
      return handler(event);
    }
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    let response = await _cachedHandler(
      event
    );
    let isCacheable = isCacheableResponse(
      response.headers,
      variableHeaderNames
    );
    if (!isCacheable && responseOrigins.get(response) !== event) {
      response = await _resolveResponse(event);
      isCacheable = isCacheableResponse(response.headers, variableHeaderNames);
    }
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    const isOrigin = responseOrigins.get(response) === event;
    if (isCacheable && handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name.toLowerCase() === "set-cookie") {
        if (isOrigin && value !== void 0) {
          event.node.res.appendHeader(
            name,
            splitCookiesString(value)
          );
        }
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
const responseOrigins = /* @__PURE__ */ new WeakMap();
function getHeaderValue(headers, name) {
  const values = [];
  for (const key in headers) {
    if (key.toLowerCase() === name) {
      const value = headers[key];
      if (value !== void 0) {
        values.push(Array.isArray(value) ? value.join(", ") : String(value));
      }
    }
  }
  return values.length > 0 ? values.join(", ") : void 0;
}
const VARY_IGNORED_HEADERS = /* @__PURE__ */ new Set(["accept-encoding"]);
function isCacheableResponse(headers, variableHeaderNames) {
  if (getHeaderValue(headers, "set-cookie") !== void 0) {
    return false;
  }
  const cacheControl = getHeaderValue(headers, "cache-control");
  if (cacheControl && /(?:^|[\s,])(?:private|no-store|no-cache)(?:$|[\s,=])/i.test(cacheControl)) {
    return false;
  }
  const vary = getHeaderValue(headers, "vary");
  if (vary) {
    for (const _name of vary.split(",")) {
      const name = _name.trim().toLowerCase();
      if (!name || VARY_IGNORED_HEADERS.has(name)) {
        continue;
      }
      if (name === "*" || !variableHeaderNames.includes(name)) {
        return false;
      }
    }
  }
  return true;
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const envKeys = /* @__PURE__ */ new Map();
const MAX_ENV_KEYS = 5e3;
function toEnvKey(key) {
  let envKey = envKeys.get(key);
  if (envKey === void 0) {
    envKey = snakeCase(key).toUpperCase();
    if (envKeys.size < MAX_ENV_KEYS) {
      envKeys.set(key, envKey);
    }
  }
  return envKey;
}
function getEnv(key, opts) {
  const envKey = toEnvKey(key);
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "dev",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/**": {
        "swr": 60,
        "cache": {
          "swr": true,
          "maxAge": 60
        }
      },
      "/admin/**": {
        "ssr": false,
        "swr": false,
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "appSecret": "4322168a0cfefa7c527bd8fc90f215d800bab02a1263c9a90b534aaa438e177d",
  "public": {
    "siteUrl": "https://example.vercel.app",
    "githubUser": "osamaday27",
    "apiBase": "http://localhost:8000/api/v1",
    "i18n": {
      "baseUrl": "https://example.vercel.app",
      "defaultLocale": "en",
      "rootRedirect": "",
      "redirectStatusCode": 302,
      "skipSettingLocaleOnNavigate": false,
      "locales": [
        {
          "code": "en",
          "language": "en-US",
          "dir": "ltr",
          "name": "English",
          "domains": [],
          "defaultForDomains": []
        },
        {
          "code": "ar",
          "language": "ar-EG",
          "dir": "rtl",
          "name": "العربية",
          "domains": [],
          "defaultForDomains": []
        }
      ],
      "detectBrowserLanguage": false,
      "experimental": {
        "localeDetector": "",
        "typedPages": true,
        "typedOptionsAndMessages": false,
        "alternateLinkCanonicalQueries": true,
        "devCache": false,
        "cacheLifetime": "",
        "stripMessagesPayload": false,
        "preload": false,
        "strictSeo": false,
        "nitroContextDetection": true,
        "httpCacheDuration": 10,
        "compactRoutes": false,
        "prerenderMessages": false,
        "optimizeMessageBundling": true
      },
      "domainLocales": {
        "en": {
          "domain": ""
        },
        "ar": {
          "domain": ""
        }
      }
    }
  },
  "githubToken": ""
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const MAX_DECODE_PASSES = 8;
const PERCENT_ESCAPE_RE = /%([\da-f]{2})/gi;
const HAS_PERCENT_ESCAPE_RE = /%[\da-f]{2}/i;
function canonicalizePath(pathname) {
  let path = pathname;
  for (let pass = 0; HAS_PERCENT_ESCAPE_RE.test(path); pass++) {
    if (pass >= MAX_DECODE_PASSES) {
      return void 0;
    }
    path = path.replace(
      PERCENT_ESCAPE_RE,
      (_, hex) => String.fromCharCode(Number.parseInt(hex, 16))
    );
  }
  const segments = [];
  for (const segment of path.replace(/\\/g, "/").split("/")) {
    if (segment === "" || segment === ".") {
      continue;
    }
    if (segment === "..") {
      segments.pop();
      continue;
    }
    segments.push(segment);
  }
  return "/" + segments.join("/");
}
function whatwgPathname(pathname) {
  try {
    return new URL(pathname, "http://_").pathname;
  } catch {
    return void 0;
  }
}
const READINGS = [
  (p) => canonicalizePath(p),
  (p) => {
    const whatwg = whatwgPathname(p);
    return whatwg === void 0 ? void 0 : canonicalizePath(whatwg);
  }
];
function getPathReadings(pathname) {
  return [.../* @__PURE__ */ new Set([pathname, ...READINGS.map((read) => read(pathname))])];
}
function isPathInScope(pathname, base) {
  if (!base || base === "/") {
    return true;
  }
  for (const read of READINGS) {
    const canonicalBase = read(base);
    const canonical = read(pathname);
    if (canonicalBase === void 0 || canonical === void 0) {
      return false;
    }
    if (canonicalBase === "/") {
      continue;
    }
    if (canonical !== canonicalBase && !canonical.startsWith(canonicalBase + "/")) {
      return false;
    }
  }
  return true;
}
function isTargetInScope(target, targetBase) {
  return isPathInScope(
    parseURL(target).pathname || "/",
    parseURL(targetBase).pathname || ""
  );
}
const LEADING_SEPARATORS_RE = (
  // eslint-disable-next-line no-control-regex
  /^(?:[\u0000-\u0020/\\]|%(?:2f|5c|[01][\da-f]|20))+/i
);
function normalizeRedirectPath(path) {
  return path.replace(LEADING_SEPARATORS_RE, "/");
}
function resolveRedirectTarget(path, to, stripBase) {
  if (!to.endsWith("/**")) {
    return path.includes("?") ? withQuery(to, getQuery(path)) : to;
  }
  let targetPath = path;
  if (stripBase) {
    if (!isPathInScope(path.split("?")[0], stripBase)) {
      return void 0;
    }
    targetPath = withoutBase(targetPath, stripBase);
  }
  targetPath = normalizeRedirectPath(targetPath);
  const targetBase = to.slice(0, -3);
  if (targetBase && targetBase !== "/" && !isPathInScope(joinURL("/_", targetPath.split("?")[0]), "/_")) {
    return void 0;
  }
  let target = joinURL(targetBase, targetPath);
  if (!targetBase || targetBase === "/") {
    target = normalizeRedirectPath(target);
    if (!target.startsWith("/")) {
      target = "/" + target;
    }
  }
  if (!isTargetInScope(target, targetBase)) {
    return void 0;
  }
  return target;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
const _caseInsensitiveMatcher = toRouteMatcher(
  createRouter({
    routes: createCaseInsensitiveRoutes(config.nitro.routeRules)
  })
);
function createCaseInsensitiveRoutes(routeRules = {}) {
  const routes = {};
  for (const [key, rules] of Object.entries(routeRules)) {
    const route = routes[key.toLowerCase()] ||= {};
    for (const rule of ["cache", "isr"]) {
      if (rules[rule] !== void 0 && route[rule] !== false) {
        route[rule] = rules[rule];
      }
    }
  }
  return routes;
}
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules$1(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
      if (Object.keys(routeRules.headers).some(
        (name) => name.toLowerCase() === "cache-control"
      )) {
        event.context._nitro.routeRulesCacheControl = getResponseHeader(
          event,
          "cache-control"
        );
      }
    }
    if (routeRules.redirect) {
      const target = resolveRedirectTarget(
        event.path,
        routeRules.redirect.to,
        routeRules.redirect._redirectStripBase
      );
      if (target === void 0) {
        throw createError({ statusCode: 400 });
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      const target = resolveRuleTarget(
        event,
        routeRules.proxy.to,
        routeRules.proxy._proxyStripBase
      );
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function resolveRuleTarget(event, to, stripBase) {
  if (!to.endsWith("/**")) {
    if (event.path.includes("?")) {
      return withQuery(to, getQuery(event.path));
    }
    return to;
  }
  const targetBase = to.slice(0, -3);
  let targetPath = event.path;
  if (stripBase) {
    if (!isPathInScope(event.path.split("?")[0], stripBase)) {
      throw createError({ statusCode: 400 });
    }
    targetPath = withoutBase(targetPath, stripBase);
  } else if (targetPath.startsWith("//")) {
    targetPath = targetPath.replace(/^\/+/, "/");
  }
  const target = joinURL(targetBase, targetPath);
  if (!isTargetInScope(target, targetBase)) {
    throw createError({ statusCode: 400 });
  }
  return target;
}
function getRouteRulesPath(event) {
  event.context._nitro = event.context._nitro || {};
  if (event.context._nitro.routeRulesPath === void 0) {
    event.context._nitro.routeRulesPath = withoutBase(
      event.path.split("?")[0],
      useRuntimeConfig().app.baseURL
    );
  }
  return event.context._nitro.routeRulesPath;
}
function getRouteRules$1(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      getRouteRulesPath(event)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteCacheRule(event) {
  const cache = getRouteRules$1(event).cache;
  if (!cache || isRouteRuleDisabled(getRouteRulesPath(event), "cache")) {
    return void 0;
  }
  return cache;
}
function isRouteRuleDisabled(path, rule) {
  for (const reading of getPathReadings(path)) {
    if (reading === void 0 || getRouteRulesForPath(reading)[rule] === false || _getCaseInsensitiveRules(reading)[rule] === false) {
      return true;
    }
  }
  return false;
}
function _getCaseInsensitiveRules(path) {
  return defu(
    {},
    ..._caseInsensitiveMatcher.matchAll(path.toLowerCase()).reverse()
  );
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

// src/runtime/utils/error.ts
/**
* Nitro internal functions extracted from https://github.com/nitrojs/nitro/blob/v2/src/runtime/internal/utils.ts
*/
function isJsonRequest(event) {
	if (hasReqHeader(event, "accept", "text/html")) return false;
	return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
	const value = getRequestHeader(event, name);
	return !!(value && typeof value === "string" && value.toLowerCase().includes(includes));
}

// src/runtime/utils/event.ts
const ENC_PIPE_RE = /%7C/g;
const ENC_BRACKET_OPEN_RE = /%5B/g;
const ENC_BRACKET_CLOSE_RE = /%5D/g;
const ENC_ENC_SLASH_RE = /%252F/gi;
const HASH_RE = /#/g;
const QUESTION_MARK_RE = /\?/g;
const DOT_SEGMENT_RE = /(?:^|\/)\.{1,2}(?:\/|$)/;
function encodeEventPath(path) {
	const queryIndex = path.indexOf("?");
	if (queryIndex === -1) return encodeVueRouterPath(path);
	return encodeVueRouterPath(path.slice(0, queryIndex)) + path.slice(queryIndex);
}
function encodeVueRouterPath(path) {
	return encodeURI(path).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]").replace(HASH_RE, "%23").replace(QUESTION_MARK_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F");
}
/**
* The response headers of an h3 v1 event, in the shape the renderer writes them in.
*
* Backed by the node response rather than a copy of it, so a header the app sets through
* h3 and a header the renderer sets are the same header, and both are sent.
*/
var NodeResponseHeaders = class {
	res;
	constructor(res) {
		this.res = res;
	}
	get(name) {
		const value = this.res.getHeader(name);
		if (value === void 0) return null;
		return Array.isArray(value) ? value.join(", ") : String(value);
	}
	has(name) {
		return this.res.hasHeader(name);
	}
	set(name, value) {
		this.res.setHeader(name, value);
	}
	append(name, value) {
		const existing = this.res.getHeader(name);
		if (existing === void 0) {
			this.res.setHeader(name, value);
			return;
		}
		this.res.setHeader(name, Array.isArray(existing) ? [...existing, value] : [String(existing), value]);
	}
	delete(name) {
		this.res.removeHeader(name);
	}
	getSetCookie() {
		const value = this.res.getHeader("set-cookie");
		if (value === void 0) return [];
		return Array.isArray(value) ? value.map(String) : [String(value)];
	}
	*entries() {
		const headers = this.res.getHeaders();
		for (const name of Object.keys(headers).sort()) {
			const value = headers[name];
			if (value === void 0) continue;
			if (name === "set-cookie" && Array.isArray(value)) for (const entry of value) yield [name, entry];
			else yield [name, Array.isArray(value) ? value.join(", ") : String(value)];
		}
	}
	*keys() {
		for (const [name] of this.entries()) yield name;
	}
	*values() {
		for (const [, value] of this.entries()) yield value;
	}
	forEach(callback, thisArg) {
		for (const [name, value] of this.entries()) callback.call(thisArg, value, name, this);
	}
	[Symbol.iterator]() {
		return this.entries();
	}
};
const WEB_PROPERTIES = /* @__PURE__ */ new Set([
	"req",
	"res",
	"url",
	"~app"
]);
const PAYLOAD_METHODS = /* @__PURE__ */ new Set([
	"PATCH",
	"POST",
	"PUT",
	"DELETE"
]);
const BODY_READ_METHODS = /* @__PURE__ */ new Set([
	"arrayBuffer",
	"blob",
	"bytes",
	"formData",
	"json",
	"text"
]);
const RAW_BODY = Symbol.for("h3RawBody");
const requestBodies = /* @__PURE__ */ new WeakMap();
/**
* The request in the web-standard shape, with every read of its body served from the bytes
* h3 v1 caches on the node request.
*
* A body read here and a `readBody(event)` elsewhere in the same request therefore resolve
* to the same bytes whichever happens first, and reading the request twice - directly, from
* a clone, or as a stream - resolves the same bytes each time rather than the second read
* finding a stream the first has drained.
*/
function toWebRequest$1(event) {
	const existing = event.web?.request;
	if (existing) return existing;
	const method = event.method;
	const url = getRequestURL(event, { xForwardedProto: false });
	if (!PAYLOAD_METHODS.has(method)) return new Request(url, {
		method,
		headers: event.headers,
		signal: toRequestSignal(event)
	});
	const request = new Request(url, {
		method,
		headers: event.headers,
		body: getRequestBody(event).stream(),
		signal: toRequestSignal(event),
		duplex: "half"
	});
	const copy = () => getRequestBody(event).read().then((body) => new Response(body, { headers: request.headers }));
	const buffered = new Proxy(request, { get(target, property) {
		if (property === "bodyUsed") return false;
		if (property === "body") return getRequestBody(event).stream();
		if (property === "clone") return () => buffered;
		if (typeof property === "string" && BODY_READ_METHODS.has(property)) return () => copy().then((response) => response[property]());
		const value = Reflect.get(target, property, target);
		return typeof value === "function" ? value.bind(target) : value;
	} });
	return buffered;
}
/**
* Aborts when the client disconnects before the response is finished, the same moment an h3 v1
* handler would catch with `event.node.req.on('close')`.
*/
function toRequestSignal(event) {
	const controller = new AbortController();
	const res = event.node?.res;
	if (typeof res?.once === "function") res.once("close", () => {
		if (!res.writableFinished) controller.abort();
	});
	return controller.signal;
}
/**
* The body of the request, shared by every view of it and by h3's own body helpers.
*
* An unread node request is read incrementally, only as far as a read of the body has
* requested, and the chunks are kept so that later reads resolve the same bytes. A body h3
* has already read, or one the request carries in memory, is served from h3.
*/
function getRequestBody(event) {
	const req = event.node.req;
	let body = requestBodies.get(req);
	if (!body) {
		const hasBody = Number.parseInt(req.headers["content-length"] || "") || /\bchunked\b/i.test(String(req.headers["transfer-encoding"] ?? ""));
		const readByH3 = event._requestBody || req[RAW_BODY] || req.rawBody || req.body;
		body = hasBody && !readByH3 ? toIncrementalBody(req) : toRawBody(event);
		requestBodies.set(req, body);
	}
	return body;
}
function toRawBody(event) {
	const read = () => readRawBody(event, false).then((body) => body ? new Uint8Array(body) : /* @__PURE__ */ new Uint8Array());
	return {
		read,
		stream: () => new ReadableStream({ async pull(controller) {
			const body = await read();
			if (body.byteLength) controller.enqueue(body);
			controller.close();
		} }, { highWaterMark: 0 })
	};
}
function toIncrementalBody(req) {
	const chunks = [];
	let source;
	let done = false;
	let pending;
	const readChunk = () => pending ??= (source ??= req[Symbol.asyncIterator]()).next().then((result) => {
		if (result.done) done = true;
		else chunks.push(result.value);
	}).finally(() => {
		pending = void 0;
	});
	const readAll = async () => {
		while (!done) await readChunk();
		return Buffer.concat(chunks);
	};
	Object.defineProperty(req, RAW_BODY, {
		configurable: true,
		get: readAll
	});
	return {
		read: () => readAll().then((body) => new Uint8Array(body)),
		stream: () => {
			let index = 0;
			return new ReadableStream({ async pull(controller) {
				while (index >= chunks.length && !done) await readChunk();
				if (index < chunks.length) controller.enqueue(new Uint8Array(chunks[index++]));
				else controller.close();
			} }, { highWaterMark: 0 });
		}
	};
}
const portableEvents = /* @__PURE__ */ new WeakMap();
/**
* The event a `nuxt/server` handler is given, in the web-standard shape.
*
* Both shapes are served from one object: `req`, `res`, `url` and `~app` resolve to the web
* view, everything else to the h3 v1 event, so h3's own helpers work on it too (they read
* `event.node`, not its deprecated `req`/`res` aliases). Cached per event, with the web view
* built on first access. `resolveURL` replaces how `url` is derived from the event's path.
*/
function toPortableEvent(event, resolveURL) {
	const cached = portableEvents.get(event);
	if (cached) return cached;
	let web;
	const portable = new Proxy(event, {
		get(target, property) {
			if (property === "~portable") return true;
			return WEB_PROPERTIES.has(property) ? (web ??= toWebView(event, resolveURL))[property] : Reflect.get(target, property, target);
		},
		set(target, property, value) {
			if (property === "url") {
				(web ??= toWebView(event, resolveURL)).url = value;
				return true;
			}
			return Reflect.set(target, property, value, target);
		},
		has(target, property) {
			return WEB_PROPERTIES.has(property) || Reflect.has(target, property);
		}
	});
	portableEvents.set(event, portable);
	return portable;
}
/**
* The Nuxt context a request nitro made to itself was fetched with: `node-mock-http` carries
* it on the mock request rather than in the h3 event's own context. A request that arrives
* over the network has none, whoever sent it.
*/
function getFetchedRequestContext(event) {
	return event.node.req.__unenv__?.nuxt;
}
/**
* The event the SSR renderer reads, which reaches the h3 v1 event itself through `~app`.
* Of the Nuxt context a request nitro made to itself was fetched with, only the error render
* flag carries over.
*
* Paths with `.` or `..` segments 404, as `url` would resolve them to a page other than the
* one `event.path` names.
*/
function toRequestEvent(event) {
	const queryIndex = event.path.indexOf("?");
	if (DOT_SEGMENT_RE.test(queryIndex === -1 ? event.path : event.path.slice(0, queryIndex))) throw createError({
		statusCode: 404,
		statusMessage: "Page Not Found"
	});
	const requestEvent = toWebView(event);
	if (getFetchedRequestContext(event)?.["~rendering-error"]) event.context.nuxt = {
		"~rendering-error": true,
		...event.context.nuxt
	};
	return requestEvent;
}
function resolveEventURL(event) {
	const url = new URL(`${getRequestProtocol(event, { xForwardedProto: false })}://${getRequestHost$1(event)}`);
	const path = encodeEventPath(event.path);
	const queryIndex = path.indexOf("?");
	url.pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	url.search = queryIndex === -1 ? "" : path.slice(queryIndex);
	url.hash = "";
	return url;
}
/**
* Describe an h3 v1 event in the web-standard shape, rather than adapting it in place:
* `event.req` and `event.res` already name the node request and response, and that is the
* shape `useRequestEvent()` and the render hooks must keep seeing.
*
* Everything is resolved on access, and the response is backed by the node response rather
* than a copy of it, so a header the application sets through h3 and a header the renderer
* sets are the same header.
*/
function toWebView(event, resolveURL = () => resolveEventURL(event)) {
	const node = event.node;
	let request;
	let url;
	const res = {
		get status() {
			return node.res.statusCode;
		},
		set status(status) {
			node.res.statusCode = status;
		},
		get statusText() {
			return node.res.statusMessage;
		},
		set statusText(statusText) {
			node.res.statusMessage = statusText;
		},
		headers: new NodeResponseHeaders(node.res)
	};
	const requestEvent = {
		context: event.context,
		res,
		get req() {
			return request ??= toWebRequest$1(event);
		},
		get url() {
			return url ??= resolveURL();
		},
		set url(value) {
			url = value;
			event._path = node.req.url = value.pathname + value.search;
		}
	};
	requestEvent["~app"] = event;
	return requestEvent;
}

const appId$1 = "nuxt-app";

const headSymbol = "usehead";
function installHead(app, head) {
  app.config.globalProperties.$unhead = app.config.globalProperties.$head = head;
  app.provide(headSymbol, head);
}
// @__NO_SIDE_EFFECTS__
function vueInstall(head) {
  return (app) => installHead(app, head);
}

const VueResolver = /* @__PURE__ */ Object.assign(
  // unref reads a ref and returns anything else as it is, functions included
  (_, value) => unref(value),
  // identity for plain non-reactive values, so SSR init entries keep
  // their precomputed fast path (see unhead/server createHead)
  { _static: true }
);

// @__NO_SIDE_EFFECTS__
function createHead(options = {}) {
  const head = createHead$1({
    ...options,
    propResolvers: [VueResolver]
  });
  head.install = vueInstall(head);
  return head;
}

const legacyPlugins = [DeprecationsPlugin, PromisesPlugin, TemplateParamsPlugin, AliasSortingPlugin];

const unheadOptions = {
  disableDefaults: true,
  plugins: legacyPlugins,
};

const renderSSRHeadOptions = {"omitLineBreaks":true};
const appComponentHead = [];

const NUXT_PRERENDER_NO_SSR_ROUTES = ["/index.html","/200.html","/404.html"];
const NUXT_NO_SCRIPTS_PATTERNS = [];
const NUXT_PAGE_PATTERNS = ["/projects/:slug","/ar/projects/:slug","/about","/ar/about","/contact","/ar/contact","/projects","/ar/projects","/skills","/ar/skills","/","/ar"];
const NUXT_PAYLOAD_INLINE = false;
const NUXT_SSR_STREAMING = false;
const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[{"rel":"preconnect","href":"https://fonts.googleapis.com"},{"rel":"preconnect","href":"https://fonts.gstatic.com","crossorigin":""},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500&family=IBM+Plex+Sans+Arabic:wght@400;600&family=Cairo:wght@700&family=JetBrains+Mono:wght@400&display=swap"}],"style":[],"script":[{"type":"module","src":"/__devtools/embedded.js","tagPosition":"bodyClose"}],"noscript":[]};
const appRootTag = "div";
const appRootAttrs = {"id":"__nuxt"};
const appTeleportTag = "div";
const appTeleportAttrs = {"id":"teleports"};
const appSpaLoaderTag = "div";
const appSpaLoaderAttrs = {"id":"__nuxt-loader"};
const appId = "nuxt-app";

// src/runtime/handlers/error.ts
var error_default = async function errorhandler(error, event, { defaultHandler }) {
	if (event.handled) return;
	const isRenderingError = !!(event.context.nuxt?.["~rendering-error"] || getFetchedRequestContext(event)?.["~rendering-error"]);
	let devError;
	let errorCause;
	{
		const errorChannel = await Promise.resolve().then(function () { return errorChannel$1; });
		const isHTTPError = isError(error);
		const isExpected = !error.unhandled && isHTTPError && (error.statusCode || 500) < 500 && !(THROWN_VALUE in error);
		devError = await errorChannel.observeDevError(error, event, {
			expected: isExpected,
			publish: !isRenderingError && true,
			print: !isRenderingError && (error.unhandled ?? !isHTTPError)
		});
		errorCause = errorChannel.serializeErrorCause(error.cause);
	}
	const stacks = snapshotStacks(error) ;
	if (isJsonRequest(event)) {
		if (!devError && true) return;
		const { headers, status, statusText, body } = await defaultHandler(error, event, {
			json: true,
			silent: !!devError
		});
		stacks?.restore();
		setResponseHeaders(event, headers);
		appendVary(event, "accept, sec-fetch-mode");
		setResponseStatus(event, status, statusText);
		return send(event, typeof body === "string" ? body : JSON.stringify(body, null, 2));
	}
	const defaultRes = await defaultHandler(error, event, {
		json: true,
		silent: !!devError
	});
	stacks?.restore();
	if ((error.status || error.statusCode || 500) === 404 && defaultRes.status === 302) {
		setResponseHeaders(event, defaultRes.headers);
		appendVary(event, "accept, sec-fetch-mode");
		setResponseStatus(event, defaultRes.status, defaultRes.statusText);
		return send(event, JSON.stringify(defaultRes.body, null, 2));
	}
	if (typeof defaultRes.body !== "string" && Array.isArray(defaultRes.body.stack)) defaultRes.body.stack = defaultRes.body.stack.join("\n");
	const errorObject = defaultRes.body;
	const url = new URL(errorObject.url);
	errorObject.url = withoutBase(url.pathname, useRuntimeConfig(event).app.baseURL) + url.search + url.hash;
	errorObject.message = error.unhandled ? errorObject.message || "Server Error" : error.message || errorObject.message || "Server Error";
	if (!error.unhandled) errorObject.data ||= error.data;
	errorObject.statusText ||= error.statusText || error.statusMessage;
	delete defaultRes.headers["content-type"];
	delete defaultRes.headers["content-security-policy"];
	setResponseHeaders(event, defaultRes.headers);
	appendVary(event, "accept, sec-fetch-mode");
	if (!isRenderingError) event.context.nuxt = {
		...event.context.nuxt,
		"~rendering-error": true
	};
	const res = isRenderingError ? null : await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), {
		...errorObject,
		...errorCause !== void 0 && { cause: JSON.stringify(errorCause) }
	}), {
		headers: event.headers,
		redirect: "manual",
		context: { nuxt: { "~rendering-error": true } }
	}).catch(() => null);
	if (event.handled) return;
	if (!res) {
		setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
		if (isRenderingError) setResponseHeader(event, ERROR_PAGE_HEADER, "1");
		else if (devError) {
			const body = await devError.page().catch(() => void 0);
			if (body) return send(event, body);
		}
		const { template } = await Promise.resolve().then(function () { return errorTemplate; });
		errorObject.description = errorObject.message;
		return send(event, template(errorObject));
	}
	let html = await res.text();
	for (const [header, value] of res.headers.entries()) {
		if (header === ERROR_PAGE_HEADER) continue;
		if (header === "set-cookie" || header === "x-nitro-prerender") {
			appendResponseHeader(event, header, value);
			continue;
		}
		setResponseHeader(event, header, value);
	}
	setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
	if (devError && typeof html === "string") try {
		html = res.headers.has(ERROR_PAGE_HEADER) ? await devError.page() : await devError.overlay(html);
	} catch {}
	return send(event, html);
};
/** The stacks of an error and its causes as raised, before Nitro rewrites them. */
function snapshotStacks(error) {
	const stacks = [];
	const seen = /* @__PURE__ */ new Set();
	for (let current = error; current instanceof Error && !seen.has(current); current = current.cause) {
		seen.add(current);
		stacks.push([current, current.stack]);
	}
	return { restore() {
		for (const [target, stack] of stacks) if (target.stack !== stack) try {
			Object.defineProperty(target, "stack", {
				value: stack,
				writable: true,
				configurable: true
			});
		} catch {}
	} };
}
/** Set on an error created from a thrown value that was not an `Error`. */
const THROWN_VALUE = Symbol.for("nuxt:dev:thrown");
/** Set when the app's own error page could not render. */
const ERROR_PAGE_HEADER = "x-nuxt-error-page";
/**
* Add `value`'s tokens to the response `vary` header, keeping any already
* present. `*` absorbs everything else, since it means the response varies on
* all headers.
*/
function appendVary(event, value) {
	const incoming = parseVary(value);
	if (!incoming.length) return;
	const existing = parseVary(getResponseHeader(event, "vary"));
	if (existing.includes("*")) return;
	if (incoming.includes("*")) {
		setResponseHeader(event, "vary", "*");
		return;
	}
	const merged = existing.slice();
	for (const token of incoming) if (!merged.includes(token)) merged.push(token);
	setResponseHeader(event, "vary", merged.join(", "));
}
function parseVary(value) {
	return (Array.isArray(value) ? value : typeof value === "string" ? value.split(",") : []).map((token) => token.trim().toLowerCase()).filter(Boolean);
}

function defineNitroErrorHandler(handler) {
  return handler;
}
function shouldDisableErrorCache(event, statusCode) {
  if (statusCode === 404) {
    return true;
  }
  const cacheControl = getResponseHeader(event, "cache-control");
  return !cacheControl || cacheControl === event.context._nitro?.routeRulesCacheControl;
}

const errorHandler$1 = defineNitroErrorHandler(
  async function defaultNitroErrorHandler(error, event) {
    const res = await defaultHandler(error, event);
    if (!event.node?.res.headersSent) {
      setResponseHeaders(event, res.headers);
    }
    setResponseStatus(event, res.status, res.statusText);
    return send(
      event,
      typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2)
    );
  }
);
async function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  await loadStackTrace(error).catch(consola.error);
  const youch = new Youch();
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    const ansiError = await (await youch.toANSI(error)).replaceAll(process.cwd(), ".");
    consola.error(
      `[request error] ${tags} [${event.method}] ${url}

`,
      ansiError
    );
  }
  const useJSON = opts?.json ?? !getRequestHeader(event, "accept")?.includes("text/html");
  const headers = {
    "content-type": useJSON ? "application/json" : "text/html",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';"
  };
  if (shouldDisableErrorCache(event, statusCode)) {
    headers["cache-control"] = "no-cache";
  }
  const body = useJSON ? {
    error: true,
    url,
    statusCode,
    statusMessage,
    message: error.message,
    data: error.data,
    stack: error.stack?.split("\n").map((line) => line.trim())
  } : await youch.toHTML(error, {
    request: {
      url: url.href,
      method: event.method,
      headers: getRequestHeaders(event)
    }
  });
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}
async function loadStackTrace(error) {
  if (!(error instanceof Error)) {
    return;
  }
  const consumerCache = /* @__PURE__ */ new Map();
  let parsed;
  try {
    parsed = await new ErrorParser().defineSourceLoader((frame) => sourceLoader(frame, consumerCache)).parse(error);
  } finally {
    for (const consumer of consumerCache.values()) {
      await consumer.then((c) => c?.destroy()).catch(() => {
      });
    }
  }
  const stack = error.message + "\n" + parsed.frames.map((frame) => fmtFrame(frame)).join("\n");
  Object.defineProperty(error, "stack", { value: stack });
  if (error.cause) {
    await loadStackTrace(error.cause).catch(consola.error);
  }
}
function loadConsumer(fileName, cache) {
  const cached = cache.get(fileName);
  if (cached) {
    return cached;
  }
  const promise = (async () => {
    const rawSourceMap = await readFile(`${fileName}.map`, "utf8").catch(
      () => {
      }
    );
    if (!rawSourceMap) {
      return void 0;
    }
    return await new SourceMapConsumer(rawSourceMap);
  })().catch(() => void 0);
  cache.set(fileName, promise);
  return promise;
}
async function sourceLoader(frame, consumerCache) {
  if (!frame.fileName || frame.fileType !== "fs" || frame.type === "native") {
    return;
  }
  if (frame.type === "app") {
    const bundleFileName = frame.fileName;
    try {
      const consumer = await loadConsumer(bundleFileName, consumerCache);
      if (consumer) {
        const originalPosition = consumer.originalPositionFor({ line: frame.lineNumber, column: (frame.columnNumber || 1) - 1 });
        if (originalPosition.source && originalPosition.line) {
          frame.fileName = resolve(dirname(bundleFileName), originalPosition.source);
          frame.lineNumber = originalPosition.line;
          frame.columnNumber = (originalPosition.column ?? 0) + 1;
        }
      }
    } catch {
    }
  }
  const contents = await readFile(frame.fileName, "utf8").catch(() => {
  });
  return contents ? { contents } : void 0;
}
function fmtFrame(frame) {
  if (frame.type === "native") {
    return frame.raw;
  }
  const src = `${frame.fileName || ""}:${frame.lineNumber}:${frame.columnNumber})`;
  return frame.functionName ? `at ${frame.functionName} (${src}` : `at ${src}`;
}

const errorHandlers = [error_default, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const decodeRoutePath = function decodeRoutePath$1(path) {
	if (!path.includes("%")) return path;
	const queryIndex = path.indexOf("?");
	const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	try {
		return queryIndex === -1 ? decodeURI(pathname) : decodeURI(pathname) + path.slice(queryIndex);
	} catch {
		return path;
	}
};
const resolveRoutePathDotSegments = function resolveRoutePathDotSegments(path) {
	const queryIndex = path.indexOf("?");
	const pathname = queryIndex === -1 ? path : path.slice(0, queryIndex);
	if (!/(?:^|\/)(?:\.|%2e)/i.test(pathname)) return path;
	const input = pathname.split("/");
	const output = [];
	const root = pathname.startsWith("/") ? 1 : 0;
	for (const [i, segment] of input.entries()) {
		const dots = /^(?:\.|%2e)(\.|%2e)?$/i.exec(segment);
		if (!dots) {
			output.push(segment);
			continue;
		}
		if (dots[1] && output.length > root) output.pop();
		if (i === input.length - 1) output.push("");
	}
	const resolved = output.join("/");
	return queryIndex === -1 ? resolved : resolved + path.slice(queryIndex);
};
const foldRouteCase = function foldRouteCase$1(path) {
	return path.replace(/[A-Z]+|[^\0-\x7F]/g, (char) => {
		if (char.charCodeAt(0) < 128) return char.toLowerCase();
		const upper = char.toUpperCase();
		if (upper.length !== 1 || upper.charCodeAt(0) < 128) return char;
		const lower = upper.toLowerCase();
		return lower.length === 1 && lower.toUpperCase() === upper ? lower : upper;
	});
};
const matchAllRouteRules = function matchAllRouteRules$1(match, path) {
	const matches = match(path);
	if (typeof path !== "string") return matches;
	const collapse = (reading) => reading.replace(/^[^?]*/, (pathname) => pathname.replace(/\/{2,}/g, "/"));
	const split = path.replace(/^[^?]*/, (pathname) => pathname.replace(/%2f/gi, "/"));
	for (const reading of /* @__PURE__ */ new Set([
		collapse(path),
		split,
		collapse(split)
	])) {
		if (reading === path) continue;
		for (const rules of match(reading)) if (!matches.includes(rules)) matches.push(rules);
	}
	return matches;
};
const normalizePath = (path, fold) => {
  if (typeof path !== 'string') { return path }
  const decoded = decodeRoutePath(resolveRoutePathDotSegments(path));
  return fold ? foldRouteCase(decoded) : decoded
};
const normalizeRouteRulePath = path => normalizePath(path, true);

// src/runtime/utils/route-rules.ts
let matcher;
function getMatcher() {
	if (!matcher) {
		const routes = {};
		for (const [route, rules] of Object.entries(useRuntimeConfig().nitro?.routeRules || {})) routes[normalizeRouteRulePath(route)] = rules;
		matcher = toRouteMatcher(createRouter({ routes }));
	}
	return matcher;
}
/**
* Resolve the route rules for a path without the base URL. Keys and path are decoded,
* and case-folded unless routing is `sensitive`.
*/
function matchRouteRules(path) {
	return defu$1({}, ...matchAllRouteRules((path) => getMatcher().matchAll(normalizeRouteRulePath(path)), path).reverse());
}
const STRIP_BASE_KEYS = {
	redirect: "_redirectStripBase",
	proxy: "_proxyStripBase"
};
function withRequestStripBases(rules, path, baseURL) {
	for (const [name, key] of Object.entries(STRIP_BASE_KEYS)) {
		const options = rules[name];
		const stripBase = options?.[key];
		if (typeof stripBase !== "string") continue;
		const base = baseURL.replace(/\/$/, "") + stripBase;
		const rest = base.split("/").slice(1).reduce((remaining) => remaining.replace(/^(?:\/|%2f)+(?:(?!%2f)[^/])*/i, ""), path);
		const prefix = path.slice(0, path.length - rest.length);
		if (prefix !== stripBase && normalizeRouteRulePath(prefix.replace(/%2f/gi, "/").replace(/\/{2,}/g, "/")) === normalizeRouteRulePath(base)) rules[name] = {
			...options,
			[key]: prefix
		};
	}
	return rules;
}
/**
* Resolve the route rules for a request, as {@link matchRouteRules} does for its path. The
* strip base of a wildcard `redirect` or `proxy` rule is taken from the request path.
*/
function resolveRequestRouteRules(event) {
	const path = event.path.split("?")[0];
	const baseURL = useRuntimeConfig().app.baseURL;
	return withRequestStripBases(matchRouteRules(withoutBase(path, baseURL)), path, baseURL);
}
/** The route rules for a request, reusing those already resolved for it. */
function getRouteRules(event) {
	const context = event.context._nitro ||= {};
	return context.routeRules ||= resolveRequestRouteRules(event);
}

// src/runtime/plugins/route-rules.ts
var route_rules_default = (nitroApp) => {
	nitroApp.hooks.hook("request", (event) => {
		event.context._nitro ||= {};
		event.context._nitro.routeRules = resolveRequestRouteRules(event);
	});
};

// src/runtime/diagnostics.ts
const ansi$1 = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
const colors$1 = {
	red: ansi$1(31, 39),
	yellow: ansi$1(33, 39),
	cyan: ansi$1(36, 39),
	gray: ansi$1(90, 39),
	bold: ansi$1(1, 22),
	dim: ansi$1(2, 22)
};
/**
* E8xxx
* Nitro server runtime (dev server) diagnostics, sharing the range with the
* SSR renderer.
*/
const docsBase$1 = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const serverDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase: docsBase$1,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors$1) } )],
	codes: {
		NUXT_E8003: {
			why: (p) => `Failed to stringify dev server logs.${p.error ? ` Received \`${p.error}\`.` : ""}`,
			fix: "You can define your own reducer/reviver for rich types following the instructions in `https://nuxt.com/docs/4.x/api/composables/use-nuxt-app#payload`.",
			docs: false
		},
		NUXT_E8005: {
			why: "Island props cannot contain a `template` key, which the Vue runtime compiler would compile and execute.",
			fix: "Rename the prop (e.g. `templateName`), or disable `vue.runtimeCompiler` if you do not need runtime template compilation.",
			docs: false
		},
		NUXT_E8012: {
			why: (p) => `\`${p.helper}\` from \`nuxt/server\` was called with an h3 event. The handler was defined with h3's \`defineEventHandler\` (auto-imported), which passes a different event.`,
			fix: "Import `defineHandler` from `nuxt/server` alongside the helpers. See `https://nuxt.com/docs/4.x/getting-started/upgrade#moving-to-nuxtserver`.",
			docs: false
		},
		NUXT_E8016: {
			why: (p) => `\`defineHandler\` from \`nuxt/server\` accepts a handler function, but received ${p.received}. The object form is specific to h3.`,
			fix: "Pass the handler function directly, or import `defineEventHandler` from `h3` in this file to use the object form (`{ handler, onRequest, onBeforeResponse }`).",
			docs: false
		}
	}
});

const rootDir = "D:/work/portfolio";
const srcDir = "D:/work/portfolio/app";
const reportFs = {"allow":["D:/work/portfolio","D:/work/portfolio/.nuxt","D:/work/portfolio/app","D:/work/portfolio"],"deny":[".env",".env.*","*.{crt,pem,key,p12,pfx,cer,der}",".npmrc",".yarnrc.yml","**/.git/**","**/app-secret","D:/work/portfolio/.output/**","D:/work/portfolio/.nuxt/prerender/**","D:/work/portfolio/node_modules/.cache/nuxt/.nuxt/prerender/**"]};
const allowedHosts = ["localhost"];

// src/runtime/plugins/dev-server-logs.ts
const devReducers = {
	VNode: (data) => isVNode(data) ? {
		type: data.type,
		props: data.props
	} : void 0,
	URL: (data) => data instanceof URL ? data.toString() : void 0,
	Symbol: (data) => typeof data === "symbol" ? data.description ?? "" : void 0
};
function appendLogs(ctx, bodyAppend) {
	try {
		const reducers = Object.assign(Object.create(null), devReducers, ctx.event.context["~payloadReducers"]);
		bodyAppend.unshift(`<script type="application/json" data-nuxt-logs="${appId$1}">${stringify(ctx.logs, reducers)}<\/script>`);
	} catch (e) {
		serverDiagnostics.NUXT_E8003({
			error: e instanceof Error ? e.toString() : void 0,
			cause: e
		});
	}
}
const asyncContext = getContext("nuxt-dev", {
	asyncContext: true,
	AsyncLocalStorage
});
var dev_server_logs_default = (nitroApp) => {
	const handler = nitroApp.h3App.handler;
	nitroApp.h3App.handler = (event) => {
		return asyncContext.callAsync({
			logs: [],
			event
		}, () => handler(event));
	};
	onConsoleLog((_log) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		const rawStack = captureRawStackTrace();
		if (!rawStack || rawStack.includes("runtime/vite-node.mjs")) return;
		const trace = [];
		let filename = "";
		for (const entry of parseRawStackTrace(rawStack)) {
			if (entry.source === globalThis._importMeta_.url) continue;
			if (EXCLUDE_TRACE_RE.test(entry.source)) continue;
			filename ||= entry.source.replace(withTrailingSlash(rootDir), "");
			trace.push({
				...entry,
				source: entry.source.startsWith("file://") ? entry.source.replace("file://", "") : entry.source
			});
		}
		const log = {
			..._log,
			filename,
			stack: trace
		};
		ctx.logs.push(log);
	});
	nitroApp.hooks.hook("afterResponse", () => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		return nitroApp.hooks.callHook("dev:ssr-logs", {
			logs: ctx.logs,
			path: ctx.event.path
		});
	});
	nitroApp.hooks.hook("render:html", (htmlContext, { streaming }) => {
		if (streaming) return;
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		appendLogs(ctx, htmlContext.bodyAppend);
	});
	nitroApp.hooks.hook("render:html:close", (closeContext) => {
		const ctx = asyncContext.tryUse();
		if (!ctx) return;
		appendLogs(ctx, closeContext.bodyAppend);
	});
};
const EXCLUDE_TRACE_RE = /\/node_modules\/(?:.*\/)?(?:nuxt|nuxt-nightly|nuxt-edge|nuxt3|consola|@vue)\/|core\/runtime\/nitro/;
function onConsoleLog(callback) {
	consola$1.addReporter({ log(logObj) {
		callback(logObj);
	} });
	consola$1.wrapConsole();
}

/**
 * Attribute the app's logs, and the spans it publishes on `diagnostics_channel`,
 * to the request that caused them.
 *
 * Nitro runs the app in a worker thread, so the CLI's own request context cannot
 * reach it: `AsyncLocalStorage` does not cross threads, and neither `globalThis`
 * nor `process` is the same object either side. This runs on the app's side of
 * that boundary, opening its own context around the handler and reporting from
 * inside it. Only the request identity crosses, as a header, and only the
 * finished log or span comes back, on a `BroadcastChannel`.
 *
 * Everything here is best-effort: a dev server must never fail because a log
 * could not be attributed.
 */
const CHANNEL = 'nuxt:dev:log';
const SPAN_CHANNEL = 'nuxt:dev:span';
/** Left on the request: Nuxt reads it to attribute the error reports it publishes. */
const HEADER = 'x-nuxt-dev-request-id';
const LABEL_HEADER = 'x-nuxt-dev-request-label';

const storage$1 = new AsyncLocalStorage();

let spanChannel;

function _TaCFkNVInH8F5XJ0wGB3_x1XAKT5nu7K6NBWTkwhmQ (nitroApp) {
  try {
    trackRequests(nitroApp);
    reportLogs();
    trackHooks(nitroApp);
    subscribeSpans();
  }
  catch {}
}

function now() {
  return performance.timeOrigin + performance.now()
}

function postSpan(request, kind, name, start, extra) {
  try {
    if (!spanChannel) {
      spanChannel = new BroadcastChannel(SPAN_CHANNEL);
      spanChannel.unref?.();
    }
    spanChannel.postMessage({
      requestId: request.id,
      kind,
      name,
      start,
      duration: now() - start,
      ...extra,
    });
  }
  catch {}
}

/** A module path as a reader would name it: from its package, or from the project. */
function shortenPath(path) {
  if (!path) {
    return undefined
  }
  const file = String(path).replace(/^@(?=\/)/, '');
  const packaged = file.lastIndexOf('/node_modules/');
  if (packaged !== -1) {
    return file.slice(packaged + '/node_modules/'.length)
  }
  const root = `${process$1.cwd()}/`;
  return file.startsWith(root)
    ? file.slice(root.length)
    : file
}

function pathOf(url) {
  try {
    const { pathname, search } = new URL(url, 'http://localhost');
    return `${pathname}${search}`
  }
  catch {
    return String(url ?? '/')
  }
}

/**
 * `TracingChannel`s published by Nuxt, h3 and Nitro, and how each span is shown.
 * All of them are published with `tracePromise`, so a span ends on `asyncEnd`
 * or `error`.
 */
const TRACING_CHANNELS = {
  'nuxt.plugin': context => ['plugin', context.plugin?.name || 'anonymous'],
  'nuxt.data': context => [
    'data',
    context.functionName
      ? `${context.functionName}(${context.key})`
      : String(context.key),
  ],
  'nuxt.render': context => [
    'render',
    context.streaming ? 'stream' : 'renderToString',
  ],
  'nuxt.island': context => ['island', context.islandContext?.name || 'island'],
  'nuxt.hook': context => [
    'hook',
    String(context.name ?? context.hook?.name),
  ],
  'nuxt.middleware': context => ['middleware', context.middleware?.name || shortenPath(context.middleware?.path) || 'anonymous'],
  'h3.request': (context) => {
    const request = context.event?.req ?? context.event?.node?.req;
    const label = `${request?.method || 'GET'} ${pathOf(request?.url)}`;
    return [
      context.type === 'middleware'
        ? 'middleware'
        : 'route',
      label,
    ]
  },
};

/** Undici's fetch lifecycle, published as plain channels rather than a `TracingChannel`. */
const UNDICI_CHANNELS = [
  'undici:request:create',
  'undici:request:headers',
  'undici:request:trailers',
  'undici:request:error',
];

const SUBSCRIPTION = Symbol.for('nuxt:dev:span:subscription');
const STARTED = Symbol('nuxt:dev:span:started');

/**
 * Report spans published while serving a request, against that request.
 *
 * Subscriptions are process-wide, so any left by an earlier copy of this module
 * are dropped first.
 */
function subscribeSpans() {
  globalThis[SUBSCRIPTION]?.();
  const unsubscribers = [];

  for (const [name, describe] of Object.entries(TRACING_CHANNELS)) {
    const handlers = {
      start(context) {
        const request = storage$1.getStore();
        if (request) {
          context[STARTED] = {
            request,
            start: now(),
          };
        }
      },
      asyncEnd: context => finishTraced(context, describe),
      error: context => finishTraced(context, describe, true),
    };
    const channel = dc.tracingChannel(name);
    channel.subscribe(handlers);
    unsubscribers.push(() => channel.unsubscribe(handlers));
  }

  const fetches = new WeakMap();
  const onFetch = {
    'undici:request:create': ({ request }) => {
      const inflight = storage$1.getStore();
      if (inflight) {
        fetches.set(request, {
          request: inflight,
          start: now(),
        });
      }
    },
    'undici:request:headers': ({ request, response }) => {
      const started = fetches.get(request);
      if (started) {
        started.status = response?.statusCode;
      }
    },
    'undici:request:trailers': ({ request }) => finishFetch(fetches, request),
    'undici:request:error': ({ request }) => finishFetch(fetches, request, true),
  };
  for (const name of UNDICI_CHANNELS) {
    const listener = (message) => {
      try {
        onFetch[name](message);
      }
      catch {}
    };
    dc.subscribe(name, listener);
    unsubscribers.push(() => dc.unsubscribe(name, listener));
  }

  globalThis[SUBSCRIPTION] = () => {
    for (const unsubscribe of unsubscribers) {
      unsubscribe();
    }
  };
}

function finishTraced(context, describe, error) {
  const started = context[STARTED];
  if (!started) {
    return
  }
  context[STARTED] = undefined;
  try {
    const [kind, name] = describe(context);
    const status = context.event?.res?.status ?? context.event?.node?.res?.statusCode;
    postSpan(started.request, kind, name, started.start, {
      ...kind === 'route' && typeof status === 'number'
        ? { status }
        : {},
      ...error
        ? { error: true }
        : {},
    });
  }
  catch {}
}

function finishFetch(fetches, request, error) {
  const started = fetches.get(request);
  if (!started) {
    return
  }
  fetches.delete(request);
  const url = `${request.origin ?? ''}${request.path ?? ''}`;
  postSpan(started.request, 'fetch', `${request.method || 'GET'} ${url}`, started.start, {
    ...typeof started.status === 'number'
      ? { status: started.status }
      : {},
    ...error
      ? { error: true }
      : {},
  });
}

/**
 * Time the Nitro hooks the app has listeners for. Nitro publishes no channel for
 * its hooks, so these are timed through hookable directly.
 */
function trackHooks(nitroApp) {
  const hooks = nitroApp?.hooks;
  if (typeof hooks?.beforeEach !== 'function' || typeof hooks?.afterEach !== 'function') {
    return
  }
  hooks.beforeEach((event) => {
    const request = storage$1.getStore();
    if (request && event.context && hooks._hooks?.[event.name]?.length) {
      event.context[STARTED] = {
        request,
        start: now(),
      };
    }
  });
  hooks.afterEach((event) => {
    const started = event.context?.[STARTED];
    if (started) {
      postSpan(started.request, 'hook', event.name, started.start);
    }
  });
}

function parseRequest(id, label) {
  if (!id) {
    return undefined
  }
  let decoded = label || '';
  try {
    decoded = decodeURIComponent(decoded);
  }
  catch {}
  return { id, label: decoded }
}

function withRequest(read, remove, serve) {
  let request;
  try {
    request = parseRequest(read(HEADER), read(LABEL_HEADER));
    if (request) {
      remove(LABEL_HEADER);
    }
  }
  catch {}
  return request
    ? storage$1.run(request, serve)
    : serve()
}

function trackRequests(nitroApp) {
  const h3App = nitroApp?.h3App;
  if (typeof h3App?.handler === 'function') {
    const handler = h3App.handler;
    h3App.handler = Object.assign(function (event) {
      const headers = event?.node?.req?.headers;
      return withRequest(name => headers?.[name], name => delete headers[name], () => handler.call(this, event))
    }, handler);
    return
  }

  // Every nitro v3 entry, dev and deployed, serves through `nitroApp.fetch`.
  if (typeof nitroApp?.fetch === 'function') {
    const fetch = nitroApp.fetch.bind(nitroApp);
    nitroApp.fetch = (req, ...args) => withRequest(name => req?.headers?.get?.(name), name => req.headers.delete(name), () => fetch(req, ...args));
  }
}

/** `console` methods worth reporting, and the consola level each maps to. */
const CONSOLE_LEVELS = {
  error: 0,
  warn: 1,
  log: 3,
  info: 3,
  debug: 4,
  trace: 5,
};

function reportLogs() {
  const channel = new BroadcastChannel(CHANNEL);
  channel.unref();

  const post = (level, logType, tag, args) => {
    try {
      const request = storage$1.getStore();
      channel.postMessage({
        level,
        logType,
        tag: tag || undefined,
        message: formatWithOptions({ colors: false }, ...args),
        origin: request ? 'runtime' : 'build',
        request: request?.label,
        requestId: request?.id,
      });
    }
    catch {}
  };

  consola$1.addReporter({
    log(logObj) {
      post(logObj.level, logObj.type, logObj.tag, logObj.args);
    },
  });

  // `consola.wrapConsole()` replaces each console method with `raw` off the
  // instance that wrapped it, so this says whether the app logs through the
  // instance above. When it does not, the app's logs never reach the reporter
  // and `console` is the only way to see them.
  // eslint-disable-next-line no-console
  if (console.log !== consola$1.log?.raw) {
    wrapConsole(post);
  }
}

/* eslint-disable no-console */
function wrapConsole(post) {
  for (const [type, level] of Object.entries(CONSOLE_LEVELS)) {
    const original = console[type];
    if (typeof original !== 'function') {
      continue
    }
    console[type] = function (...args) {
      post(level, type, undefined, args);
      return original.apply(this, args)
    };
  }
}

/*!
  * shared v11.4.23
  * (c) 2026 kazuya kawaguchi
  * Released under the MIT License.
  */
/**
 * Original Utilities
 * written by kazuya kawaguchi
 */
const _create = Object.create;
const create = (obj = null) => _create(obj);
/**
 * Useful Utilities By Evan you
 * Modified by kazuya kawaguchi
 * MIT License
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/index.ts
 * https://github.com/vuejs/vue-next/blob/master/packages/shared/src/codeframe.ts
 */
const isArray$1 = Array.isArray;
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isObject = (val) => val !== null && typeof val === 'object';
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);

const isNotObjectOrIsArray = (val) => !isObject(val) || isArray$1(val);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepCopy(src, des) {
    // src and des should both be objects, and none of them can be a array.
    // des can't be `Object.prototype` either: copying into it would pollute
    // every object
    if (isNotObjectOrIsArray(src) ||
        isNotObjectOrIsArray(des) ||
        des === Object.prototype) {
        throw new Error('Invalid value');
    }
    const stack = [{ src, des }];
    while (stack.length) {
        const { src, des } = stack.pop();
        // using `Object.keys` which skips prototype properties
        Object.keys(src).forEach(key => {
            if (key === '__proto__') {
                return;
            }
            const value = src[key];
            if (isArray$1(value)) {
                // replace arrays instead of merging them, without retaining source references
                const copied = [];
                copied.length = value.length;
                des[key] = copied;
                stack.push({ src: value, des: copied });
            }
            else if (isObject(value)) {
                if (!isObject(des[key]) || isArray$1(des[key])) {
                    des[key] = create();
                }
                stack.push({ src: value, des: des[key] });
            }
            else {
                des[key] = value;
            }
        });
    }
}

const __nuxtMock = { runWithContext: async (fn) => await fn() };
function cloneDeep(value) {
  if (value == null || typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(cloneDeep);
  }
  const out = create(null);
  for (const key of Object.keys(value)) {
    out[key] = cloneDeep(value[key]);
  }
  return out;
}
function hasMessageFunction(value, seen = /* @__PURE__ */ new WeakSet()) {
  if (isFunction(value)) {
    return true;
  }
  if (value == null || typeof value !== "object") {
    return false;
  }
  if (seen.has(value)) {
    return false;
  }
  seen.add(value);
  return Object.values(value).some((x) => hasMessageFunction(x, seen));
}
function warnMissedMessageFunctions(locale, messages) {
  const undeliverable = [];
  if (undeliverable.includes(locale) || !hasMessageFunction(messages)) {
    return;
  }
  console.warn(
    `[nuxt-i18n] Messages for locale "${locale}" contain message functions the build did not detect - they are dropped when messages are delivered as JSON. Write message functions literally in a locale file to make them detectable.`
  );
}
const merger = createDefu((obj, key, value) => {
  if (key === "messages" || key === "datetimeFormats" || key === "numberFormats") {
    obj[key] ??= create(null);
    deepCopy(value, obj[key]);
    return true;
  }
});
async function loadVueI18nOptions(vueI18nConfigs) {
  const nuxtApp = __nuxtMock;
  let vueI18nOptions = { messages: create(null) };
  for (const configFile of vueI18nConfigs) {
    const resolver = await configFile().then((x) => isModule(x) ? x.default : x);
    const resolved = isFunction(resolver) ? await nuxtApp.runWithContext(() => resolver()) : resolver;
    vueI18nOptions = merger(create(null), resolved, vueI18nOptions);
  }
  vueI18nOptions.fallbackLocale ??= false;
  return vueI18nOptions;
}
const isModule = (val) => toTypeString(val) === "[object Module]";
async function getLocaleMessages(locale, loader) {
  const nuxtApp = __nuxtMock;
  try {
    const getter = await nuxtApp.runWithContext(loader.load).then((x) => isModule(x) ? x.default : x);
    return isFunction(getter) ? await nuxtApp.runWithContext(() => getter(locale)) : getter;
  } catch (e) {
    throw new Error(`Failed loading locale (${locale}): ` + e.message, { cause: e });
  }
}
async function getLocaleMessagesMerged(locale, loaders = []) {
  const nuxtApp = __nuxtMock;
  const messages = await Promise.all(
    loaders.map((loader) => nuxtApp.runWithContext(() => getLocaleMessages(locale, loader)))
  );
  const merged = {};
  for (const message of messages) {
    deepCopy(message, merged);
  }
  return merged;
}

const locale_en_46json_8112df66 = /* @__PURE__ */ JSON.parse("{\"nav\":{\"home\":\"Home\",\"about\":\"About\",\"projects\":\"Projects\",\"skills\":\"Skills\",\"contact\":\"Contact\"},\"brand\":\"Ahmed Amasha\",\"cv\":\"Download CV\",\"cvMissing\":\"CV not available yet\",\"contactCta\":\"Contact me\",\"explore\":\"Explore projects\",\"theme\":\"Toggle theme\",\"lang\":\"العربية\",\"menu\":\"Menu\",\"hero\":{\"hello\":\"Hello, I'm\",\"name\":\"Ahmed Amasha\",\"title\":\"Full-Stack Software Engineer\",\"desc\":\"I build scalable web applications, business management systems, and reliable digital solutions. My background combines software engineering with IT infrastructure, networking, security fundamentals, and cloud technologies.\",\"available\":\"Available for opportunities\",\"stack\":\"Main stack\"},\"footer\":{\"rights\":\"All rights reserved.\"},\"projects\":{\"pending\":\"Screenshot pending\",\"noDesc\":\"Description will be added.\",\"caseStudy\":\"Case study\",\"open\":\"Open image\",\"close\":\"Close\",\"intro\":\"Selected repositories. Content is curated locally and enriched with live GitHub data.\",\"live\":\"GitHub data: live\",\"local\":\"GitHub data: unavailable, showing local data\",\"filter\":\"Filter projects\",\"empty\":\"No projects in this category yet.\",\"demo\":\"Live demo\",\"preparing\":\"This case study is being prepared.\"},\"cat\":{\"all\":\"All projects\",\"web\":\"Web applications\",\"backend\":\"Backend systems\",\"ecommerce\":\"E-commerce\",\"healthcare\":\"Healthcare systems\",\"management\":\"Management systems\",\"education\":\"Education platforms\",\"business\":\"Business websites\",\"api\":\"APIs\",\"ui\":\"UI/UX\"},\"case\":{\"overview\":\"Project overview\",\"problem\":\"Business problem\",\"objectives\":\"Objectives\",\"role\":\"My role\",\"architecture\":\"Technical architecture\",\"database\":\"Database structure\",\"features\":\"Main features\",\"challenges\":\"Development challenges\",\"solutions\":\"Solutions\",\"screens\":\"Application screenshots\",\"related\":\"Related projects\"},\"skills\":{\"title\":\"Skills & expertise\",\"intro\":\"Grouped by discipline. Proficiency levels appear only once verified.\",\"dev\":\"Software development\",\"design\":\"Software engineering & system design\",\"network\":\"Networking & infrastructure\",\"security\":\"Cybersecurity & application security\",\"cloud\":\"Cloud computing & deployment\",\"database\":\"Database engineering\",\"pm\":\"Project management\",\"tools\":\"Development tools\"},\"level\":{\"core\":\"Core experience\",\"working\":\"Working knowledge\",\"fundamentals\":\"Fundamentals\"},\"about\":{\"title\":\"About Ahmed Amasha\",\"intro\":\"I am a software engineer who works from business requirements to deployed applications, with a practical background in IT support, networking and security fundamentals.\",\"approach\":\"How I work\",\"experience\":\"Professional experience\",\"step\":{\"req\":\"Understand business requirements\",\"flow\":\"Analyze system workflows\",\"db\":\"Design database structures\",\"tech\":\"Select suitable technologies\",\"logic\":\"Implement application logic\",\"api\":\"Build secure APIs\",\"test\":\"Test and deploy\",\"maintain\":\"Maintain and improve\"},\"present\":\"Present\"},\"exp\":{\"it\":{\"title\":\"IT & Network Support Technician\",\"desc\":\"Editable: add responsibilities here.\"},\"pc\":{\"title\":\"Project Coordinator\",\"desc\":\"Editable: add responsibilities here.\"},\"be\":{\"title\":\"Backend Developer (Laravel)\",\"desc\":\"Editable: add responsibilities here.\"}},\"contact\":{\"title\":\"Let's build something together.\",\"send\":\"Send message\",\"f\":{\"name\":\"Full name\",\"email\":\"Email\",\"subject\":\"Subject\",\"message\":\"Message\",\"type\":\"Inquiry type\"},\"v\":{\"required\":\"This field is required.\",\"email\":\"Enter a valid email address.\",\"message\":\"Write at least 10 characters.\"},\"type\":{\"fullstack\":\"Full-stack developer opportunity\",\"backend\":\"Backend developer opportunity\",\"it\":\"IT support opportunity\",\"project\":\"Software development project\",\"collab\":\"Technical collaboration\",\"other\":\"Other\"},\"sending\":\"Sending…\",\"success\":\"Message sent. Thank you, I will reply soon.\",\"error\":\"Could not send the message right now. Please email me directly:\"}}");

const locale_ar_46json_ab145ceb = /* @__PURE__ */ JSON.parse("{\"nav\":{\"home\":\"الرئيسية\",\"about\":\"نبذة\",\"projects\":\"المشاريع\",\"skills\":\"المهارات\",\"contact\":\"تواصل\"},\"brand\":\"أحمد عماشة\",\"cv\":\"تحميل السيرة الذاتية\",\"cvMissing\":\"السيرة الذاتية غير متاحة حالياً\",\"contactCta\":\"تواصل معي\",\"explore\":\"استعرض المشاريع\",\"theme\":\"تبديل المظهر\",\"lang\":\"English\",\"menu\":\"القائمة\",\"hero\":{\"hello\":\"مرحباً، أنا\",\"name\":\"أحمد عماشة\",\"title\":\"مهندس برمجيات ومطوّر تطبيقات متكامل\",\"desc\":\"أبني تطبيقات الويب والأنظمة الإدارية والحلول الرقمية، مع اهتمام بهندسة البرمجيات والبنية التحتية والشبكات وأساسيات الأمن السيبراني والحوسبة السحابية.\",\"available\":\"متاح لفرص العمل\",\"stack\":\"التقنيات الأساسية\"},\"footer\":{\"rights\":\"جميع الحقوق محفوظة.\"},\"projects\":{\"pending\":\"لقطة الشاشة قيد الإضافة\",\"noDesc\":\"سيتم إضافة الوصف.\",\"caseStudy\":\"دراسة الحالة\",\"open\":\"فتح الصورة\",\"close\":\"إغلاق\",\"intro\":\"مستودعات مختارة. المحتوى منسّق محلياً ومدعوم ببيانات GitHub المباشرة.\",\"live\":\"بيانات GitHub: مباشرة\",\"local\":\"بيانات GitHub غير متاحة، يتم عرض البيانات المحلية\",\"filter\":\"تصفية المشاريع\",\"empty\":\"لا توجد مشاريع في هذه الفئة بعد.\",\"demo\":\"عرض مباشر\",\"preparing\":\"دراسة الحالة قيد الإعداد.\"},\"cat\":{\"all\":\"كل المشاريع\",\"web\":\"تطبيقات الويب\",\"backend\":\"أنظمة الخلفية\",\"ecommerce\":\"التجارة الإلكترونية\",\"healthcare\":\"الأنظمة الصحية\",\"management\":\"أنظمة الإدارة\",\"education\":\"منصات التعليم\",\"business\":\"مواقع الأعمال\",\"api\":\"واجهات برمجية\",\"ui\":\"تصميم الواجهات\"},\"case\":{\"overview\":\"نظرة عامة\",\"problem\":\"مشكلة العمل\",\"objectives\":\"الأهداف\",\"role\":\"دوري\",\"architecture\":\"البنية التقنية\",\"database\":\"هيكل قاعدة البيانات\",\"features\":\"الميزات الرئيسية\",\"challenges\":\"التحديات\",\"solutions\":\"الحلول\",\"screens\":\"لقطات التطبيق\",\"related\":\"مشاريع ذات صلة\"},\"skills\":{\"title\":\"المهارات والخبرات\",\"intro\":\"مقسّمة حسب التخصص. تظهر مستويات الإتقان فقط بعد التحقق منها.\",\"dev\":\"تطوير البرمجيات\",\"design\":\"هندسة البرمجيات وتصميم الأنظمة\",\"network\":\"الشبكات والبنية التحتية\",\"security\":\"الأمن السيبراني وأمن التطبيقات\",\"cloud\":\"الحوسبة السحابية والنشر\",\"database\":\"هندسة قواعد البيانات\",\"pm\":\"إدارة المشاريع\",\"tools\":\"أدوات التطوير\"},\"level\":{\"core\":\"خبرة أساسية\",\"working\":\"معرفة عملية\",\"fundamentals\":\"أساسيات\"},\"about\":{\"title\":\"نبذة عن أحمد عماشة\",\"intro\":\"مهندس برمجيات أعمل من فهم متطلبات العمل حتى نشر التطبيق، بخلفية عملية في الدعم التقني والشبكات وأساسيات الأمن.\",\"approach\":\"طريقة عملي\",\"experience\":\"الخبرة المهنية\",\"step\":{\"req\":\"فهم متطلبات العمل\",\"flow\":\"تحليل مسارات النظام\",\"db\":\"تصميم قواعد البيانات\",\"tech\":\"اختيار التقنيات المناسبة\",\"logic\":\"تنفيذ منطق التطبيق\",\"api\":\"بناء واجهات برمجية آمنة\",\"test\":\"الاختبار والنشر\",\"maintain\":\"الصيانة والتحسين\"},\"present\":\"حتى الآن\"},\"exp\":{\"it\":{\"title\":\"فني دعم تقني وشبكات\",\"desc\":\"قابل للتعديل: أضف المسؤوليات هنا.\"},\"pc\":{\"title\":\"منسق مشاريع\",\"desc\":\"قابل للتعديل: أضف المسؤوليات هنا.\"},\"be\":{\"title\":\"مطوّر Backend (Laravel)\",\"desc\":\"قابل للتعديل: أضف المسؤوليات هنا.\"}},\"contact\":{\"title\":\"لنبنِ شيئاً مميزاً معاً.\",\"send\":\"إرسال الرسالة\",\"f\":{\"name\":\"الاسم الكامل\",\"email\":\"البريد الإلكتروني\",\"subject\":\"الموضوع\",\"message\":\"الرسالة\",\"type\":\"نوع الطلب\"},\"v\":{\"required\":\"هذا الحقل مطلوب.\",\"email\":\"أدخل بريداً إلكترونياً صحيحاً.\",\"message\":\"اكتب 10 أحرف على الأقل.\"},\"type\":{\"fullstack\":\"فرصة مطوّر Full-Stack\",\"backend\":\"فرصة مطوّر Backend\",\"it\":\"فرصة دعم تقني\",\"project\":\"مشروع تطوير برمجيات\",\"collab\":\"تعاون تقني\",\"other\":\"أخرى\"},\"sending\":\"جارٍ الإرسال…\",\"success\":\"تم إرسال الرسالة. شكراً لك، سأرد قريباً.\",\"error\":\"تعذر إرسال الرسالة الآن. راسلني مباشرة على:\"}}");

// @ts-nocheck
const localeCodes =  [
  "en",
  "ar"
];
const localeLoaders = {
  en: [
    {
      key: "locale_en_46json_8112df66",
      load: () => Promise.resolve(locale_en_46json_8112df66),
      cache: true
    }
  ],
  ar: [
    {
      key: "locale_ar_46json_ab145ceb",
      load: () => Promise.resolve(locale_ar_46json_ab145ceb),
      cache: true
    }
  ]
};
const vueI18nConfigs = [];
const normalizedLocales = [
  {
    code: "en",
    language: "en-US",
    dir: "ltr",
    name: "English",
    domains: [],
    defaultForDomains: []
  },
  {
    code: "ar",
    language: "ar-EG",
    dir: "rtl",
    name: "العربية",
    domains: [],
    defaultForDomains: []
  }
];

const setupVueI18nOptions = async (defaultLocale) => {
  const options = await loadVueI18nOptions(vueI18nConfigs);
  options.locale = defaultLocale || options.locale || "en-US";
  options.defaultLocale = defaultLocale;
  options.fallbackLocale ??= false;
  options.messages ??= {};
  for (const locale of localeCodes) {
    options.messages[locale] ??= {};
  }
  return options;
};

function defineNitroPlugin(def) {
  return def;
}

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const scheduledTasks = false;

const tasks = {
  
};

const __runningTasks__ = {};
async function runTask(name, {
  payload = {},
  context = {}
} = {}) {
  if (__runningTasks__[name]) {
    return __runningTasks__[name];
  }
  if (!(name in tasks)) {
    throw createError({
      message: `Task \`${name}\` is not available!`,
      statusCode: 404
    });
  }
  if (!tasks[name].resolve) {
    throw createError({
      message: `Task \`${name}\` is not implemented!`,
      statusCode: 501
    });
  }
  const handler = await tasks[name].resolve();
  const taskEvent = { name, payload, context };
  __runningTasks__[name] = handler.run(taskEvent);
  try {
    const res = await __runningTasks__[name];
    return res;
  } finally {
    delete __runningTasks__[name];
  }
}

function buildAssetsDir() {
	return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
	return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
	const app = useRuntimeConfig().app;
	const publicBase = app.cdnURL || app.baseURL;
	return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

function parseAcceptLanguage(value) {
  return value.split(",").map((tag) => tag.split(";")[0]).filter(
    (tag) => !(tag === "*" || tag === "")
  );
}
function createPathIndexLanguageParser(index = 0) {
  return (path) => {
    const rawPath = typeof path === "string" ? path : path.pathname;
    const normalizedPath = rawPath.split("?")[0];
    const parts = normalizedPath.split("/");
    if (parts[0] === "") {
      parts.shift();
    }
    return parts.length > index ? parts[index] || "" : "";
  };
}

function useRuntimeI18n(nuxtApp, event) {
  {
    const getRuntimeConfig = useRuntimeConfig;
    return getRuntimeConfig(event).public.i18n;
  }
}
function useI18nDetection(nuxtApp) {
  const detectBrowserLanguage = useRuntimeI18n().detectBrowserLanguage;
  const detect = detectBrowserLanguage || {};
  return {
    ...detect,
    enabled: !!detectBrowserLanguage,
    cookieKey: detect.cookieKey || "i18n_redirected"
  };
}
function resolveRootRedirect(config) {
  if (!config) {
    return void 0;
  }
  return {
    path: "/" + (isString(config) ? config : config.path).replace(/^\//, ""),
    code: !isString(config) && config.statusCode || 302
  };
}

const normalizeDomain = (domain = "") => domain.replace(/^https?:\/\//i, "").toLowerCase();
function isLocaleOnHost(locale, host) {
  return !!locale?.domains.some((x) => normalizeDomain(x) === host);
}
function resolveLocaleReach(locales, host, locale) {
  const target = locales.find((l) => l.code === locale);
  if (!target?.domains.length || isLocaleOnHost(target, host)) {
    return "here";
  }
  return locales.some((l) => isLocaleOnHost(l, host)) ? "other-domain" : "off-host";
}
function isLocaleServedOnHost(locales, host, locale) {
  return resolveLocaleReach(locales, host, locale) !== "other-domain";
}
function matchDomainLocale(locales, host, pathLocale) {
  const matches = locales.filter((locale) => isLocaleOnHost(locale, host));
  return (
    // match by current path locale
    (matches.find((l) => l.code === pathLocale) || matches.find((l) => l.defaultForDomains.some((domain) => normalizeDomain(domain) === host)) || matches[0])?.code
  );
}
function cookieSpansDomains(locales, cookieDomain) {
  const scope = cookieDomain.replace(/^\./, "").replace(/:\d+$/, "").toLowerCase();
  return locales.every(
    (l) => l.domains.concat(l.domain || []).every((domain) => {
      const host = normalizeDomain(domain).replace(/:\d+$/, "");
      return host === scope || host.endsWith("." + scope);
    })
  );
}
function withRuntimeDomain(locale, domainLocales) {
  if (typeof locale === "string") {
    return locale;
  }
  const properties = locale;
  const domain = domainLocales[properties.code]?.domain;
  if (!domain || domain === properties.domain) {
    return locale;
  }
  return {
    ...properties,
    domain,
    domains: [domain],
    defaultForDomains: properties.defaultForDomains.length ? [domain] : []
  };
}

function createLocaleConfigs(fallbackLocale) {
  const localeConfigs = {};
  for (const locale of localeCodes) {
    const fallbacks = getFallbackLocaleCodes(fallbackLocale, [locale]);
    const cacheable = isLocaleWithFallbacksCacheable(locale, fallbacks);
    localeConfigs[locale] = { fallbacks, cacheable };
  }
  return localeConfigs;
}
function getFallbackLocaleCodes(fallback, locales) {
  if (fallback === false) {
    return [];
  }
  if (isArray$1(fallback)) {
    return fallback;
  }
  let fallbackLocales = [];
  if (isString(fallback)) {
    if (locales.every((locale) => locale !== fallback)) {
      fallbackLocales.push(fallback);
    }
    return fallbackLocales;
  }
  const targets = [...locales, "default"];
  for (const locale of targets) {
    if (locale in fallback == false) {
      continue;
    }
    fallbackLocales = [...fallbackLocales, ...fallback[locale].filter(Boolean)];
  }
  return fallbackLocales;
}
function isLocaleCacheable(locale) {
  return localeLoaders[locale] != null && localeLoaders[locale].every((loader) => loader.cache !== false);
}
function isLocaleWithFallbacksCacheable(locale, fallbackLocales) {
  return isLocaleCacheable(locale) && fallbackLocales.every((fallbackLocale) => isLocaleCacheable(fallbackLocale));
}
function getDefaultLocaleForDomain(host, locales = normalizedLocales) {
  return locales.find((l) => l.defaultForDomains.some((domain) => normalizeDomain(domain) === host))?.code;
}
function resolveDefaultLocale(host, defaultLocale, locales = normalizedLocales) {
  const resolved = getDefaultLocaleForDomain(host, locales) || defaultLocale;
  if (resolved) {
    return resolved;
  }
  return (locales.some((l) => l.domains.length) ? locales[0]?.code : "") || "";
}
const isSupportedLocale = (locale) => localeCodes.includes(locale || "");

const storage = prefixStorage(useStorage(), "i18n");
function deepFreeze(value) {
  if (value == null || typeof value !== "object" || Object.isFrozen(value)) {
    return value;
  }
  for (const key of Object.keys(value)) {
    deepFreeze(value[key]);
  }
  return Object.freeze(value);
}
function cachedFunctionI18n(fn, opts) {
  opts = { maxAge: 1, ...opts };
  const pending = {};
  async function get(key, resolver) {
    const isPending = pending[key];
    if (!isPending) {
      pending[key] = Promise.resolve(resolver());
    }
    try {
      return await pending[key];
    } finally {
      delete pending[key];
    }
  }
  return async (...args) => {
    const key = [opts.name, opts.getKey(...args)].join(":").replace(/:\/$/, ":index");
    const maxAge = opts.maxAge ?? 1;
    const isCacheable = !opts.shouldBypassCache(...args) && maxAge >= 0;
    const cache = isCacheable && await storage.getItemRaw(key);
    if (!cache || cache.ttl < Date.now()) {
      pending[key] = Promise.resolve(fn(...args));
      const value = await get(key, () => fn(...args));
      if (isCacheable) {
        deepFreeze(value);
        await storage.setItemRaw(key, { ttl: Date.now() + maxAge * 1e3, value, mtime: Date.now() });
      }
      return value;
    }
    return cache.value;
  };
}

const _getMessages = async (locale) => {
  return { [locale]: await getLocaleMessagesMerged(locale, localeLoaders[locale]) };
};
cachedFunctionI18n(_getMessages, {
  name: "messages",
  maxAge: -1 ,
  getKey: (locale) => locale,
  shouldBypassCache: (locale) => !isLocaleCacheable(locale)
});
const getMessages = _getMessages ;
function appContextHint(e) {
  if (!/ is not defined|Nuxt instance unavailable/.test(e.message)) {
    return "";
  }
  return ". Locale loaders run outside the Nuxt app when the server produces messages, so Nuxt app composables (`useNuxtApp`, `useState`, `useCookie`, ...) are unavailable - call them in the locale file itself to have the build keep that locale in the app instead.";
}
const _getMergedMessages = async (locale, fallbackLocales) => {
  try {
    if (fallbackLocales.length === 0) {
      return await getMessages(locale) ?? {};
    }
    const merged = {};
    const messages = await Promise.all(fallbackLocales.map(getMessages));
    for (const message of messages) {
      deepCopy(message, merged);
    }
    deepCopy(await getMessages(locale), merged);
    return merged;
  } catch (e) {
    throw new Error("Failed to merge messages: " + e.message + appContextHint(e), { cause: e });
  }
};
const getMergedMessages = cachedFunctionI18n(_getMergedMessages, {
  name: "merged-single",
  maxAge: -1 ,
  getKey: (locale, fallbackLocales) => `${locale}-[${[...new Set(fallbackLocales)].sort().join("-")}]`,
  shouldBypassCache: (locale, fallbackLocales) => !isLocaleWithFallbacksCacheable(locale, fallbackLocales)
});

function useI18nContext(event) {
  if (event.context.nuxtI18n == null) {
    throw new Error("Nuxt I18n server context has not been set up yet.");
  }
  return event.context.nuxtI18n;
}
function tryUseI18nContext(event) {
  return event.context.nuxtI18n;
}
const getHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
async function initializeI18nContext(event) {
  const runtimeI18n = useRuntimeI18n(void 0, event);
  const defaultLocale = runtimeI18n.defaultLocale || "";
  const options = await setupVueI18nOptions(resolveDefaultLocale(getHost(event), defaultLocale));
  const localeConfigs = createLocaleConfigs(options.fallbackLocale);
  const ctx = createI18nContext();
  ctx.vueI18nOptions = options;
  ctx.localeConfigs = localeConfigs;
  event.context.nuxtI18n = ctx;
  return ctx;
}
function createI18nContext() {
  return {
    messages: {},
    slp: {},
    localeConfigs: {},
    trackMap: {},
    vueI18nOptions: void 0,
    trackKey(key, locale) {
      this.trackMap[locale] ??= /* @__PURE__ */ new Set();
      this.trackMap[locale].add(key);
    },
    async loadMessages(locale) {
      const messages = await getMergedMessages(locale, this.localeConfigs?.[locale]?.fallbacks ?? []) ?? {};
      return this.vueI18nOptions?.flatJson ? cloneDeep(messages) : messages;
    }
  };
}

const separator = "___";
const createTrailingSlashFormatter = (trailingSlash) => trailingSlash ? withTrailingSlash : withoutTrailingSlash;
function prefixable(currentLocale, defaultLocale, options) {
  return (currentLocale !== defaultLocale || options.strategy === "prefix");
}
const pathLanguageParser = createPathIndexLanguageParser(0);
const getLocaleFromRoutePath = (path) => pathLanguageParser(path);
const getLocaleFromRouteName = (name) => name.split(separator).at(1) ?? "";
function normalizeInput(input) {
  return typeof input !== "object" ? String(input) : String(input?.name || input?.path || "");
}
function getLocaleFromRoute(route) {
  const input = normalizeInput(route);
  if (input[0] === "/") {
    return getLocaleFromRoutePath(input);
  }
  const fromName = getLocaleFromRouteName(input);
  if (fromName) {
    return fromName;
  }
  if (typeof route === "object" && route?.path) {
    return getLocaleFromRoutePath(String(route.path));
  }
  return "";
}

function matchBrowserLocale(locales, browserLocales) {
  const matchedLocales = [];
  for (const [index, browserCode] of browserLocales.entries()) {
    const matchedLocale = locales.find((l) => l.language?.toLowerCase() === browserCode.toLowerCase());
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 1 - index / browserLocales.length });
      break;
    }
  }
  for (const [index, browserCode] of browserLocales.entries()) {
    const languageCode = browserCode.split("-")[0].toLowerCase();
    const matchedLocale = locales.find((l) => l.language?.split("-")[0].toLowerCase() === languageCode);
    if (matchedLocale) {
      matchedLocales.push({ code: matchedLocale.code, score: 0.999 - index / browserLocales.length });
      break;
    }
  }
  return matchedLocales;
}
function compareBrowserLocale(a, b) {
  if (a.score === b.score) {
    return b.code.length - a.code.length;
  }
  return b.score - a.score;
}
function findBrowserLocale(locales, browserLocales) {
  const matchedLocales = matchBrowserLocale(
    locales.map((l) => ({ code: l.code, language: l.language || l.code })),
    browserLocales
  );
  return matchedLocales.sort(compareBrowserLocale).at(0)?.code ?? "";
}

const getCookieLocale = (event, cookieName) => (getCookie(event, cookieName)) || void 0;
const getRouteLocale = (event, route) => getLocaleFromRoute(route);
const getHeaderLocale = (event) => findBrowserLocale(normalizedLocales, parseAcceptLanguage(getRequestHeader(event, "accept-language") || ""));
const getRequestHost = (event) => getRequestURL(event, { xForwardedHost: true }).host;
const getRefererHost = (event) => {
  const referer = getRequestHeader(event, "referer");
  try {
    return referer && new URL(referer).host || void 0;
  } catch {
    return void 0;
  }
};
const getDomainLocales = (domainLocales) => normalizedLocales.map((l) => withRuntimeDomain(l, domainLocales));
const useDetectors = (event, config, nuxtApp) => {
  if (!event) {
    throw new Error("H3Event is required for server-side locale detection");
  }
  const runtimeI18n = useRuntimeI18n();
  let host;
  let locales;
  const getHost = () => host ??= getRequestHost(event);
  const getLocales = () => locales ??= getDomainLocales(runtimeI18n.domainLocales);
  return {
    cookie: () => getCookieLocale(event, config.cookieKey),
    header: () => getHeaderLocale(event) ,
    navigator: () => void 0,
    host: (path) => matchDomainLocale(getLocales(), getHost(), getLocaleFromRoutePath(path)),
    route: (path) => getRouteLocale(event, path),
    /** Passes the locale through when the current host serves it, `undefined` otherwise */
    onHost: (locale) => !locale || isLocaleServedOnHost(getLocales(), getHost(), locale) ? locale : void 0,
    /** Whether the visitor arrived from one of the configured domains */
    fromOwnDomain: () => {
      const referer = getRefererHost(event);
      return !!referer && getLocales().some((l) => isLocaleOnHost(l, referer));
    },
    /** Whether a cookie scoped to the configured `cookieDomain` is readable on every domain */
    cookieSpans: () => !!config.cookieDomain && cookieSpansDomains(getLocales(), config.cookieDomain)
  };
};
function createLocaleDetector(config) {
  const { detection} = config;
  const isSupported = config.isSupportedLocale ?? isSupportedLocale;
  function skipDetect(path, pathLocale) {
    if (detection.redirectOn === "root" && path !== "/") {
      return true;
    }
    if (detection.redirectOn === "no prefix" && !detection.alwaysRedirect && isSupported(pathLocale)) {
      return true;
    }
    return false;
  }
  return function detectLocale(detectors, route, initial) {
    const path = isString(route) ? parsePath(route).pathname : route.path;
    const pass = (locale) => locale;
    const onHost = pass;
    function* detect() {
      const detecting = initial && detection.enabled && !skipDetect(path, detectors.route(path));
      if (detecting) {
        const cookie = onHost;
        const browser = onHost;
        yield cookie(detectors.cookie());
        yield browser(detectors.header());
        yield browser(detectors.navigator());
      }
      {
        yield detectors.route(route);
      }
      if (detecting) {
        yield onHost(detection.fallbackLocale);
      }
    }
    for (const detected of detect()) {
      if (detected && isSupported(detected)) {
        return detected;
      }
    }
    return "";
  };
}

/*!
* vue-router v5.5.2
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
/**
* Checks if a path is absolute, meaning it starts with a `/`.
*
* @param path - path to check
*
* @internal
*/
const isAbsolutePath = (path) => path.startsWith("/");
const assign = Object.assign;
const noop = () => {};
/**
* Typesafe alternative to Array.isArray
* https://github.com/microsoft/TypeScript/pull/48228
*
* @internal
*/
const isArray = Array.isArray;
function mergeOptions(defaults, partialOptions) {
	const options = {};
	for (const key in defaults) options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
	return options;
}
// src/errors.ts
const NavigationFailureSymbol = Symbol("navigation failure" );
const ErrorTypeMessages = {
	[1]({ location, currentLocation }) {
		return `No match for\n ${JSON.stringify(location)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
	},
	[2]({ from, to }) {
		return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
	},
	[4]({ from, to }) {
		return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
	},
	[8]({ from, to }) {
		return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
	},
	[16]({ from, to: _to }) {
		return `Avoided redundant navigation to current location: "${from.fullPath}".`;
	}
};
/**
* Creates a typed NavigationFailure object.
* @internal
* @param type - NavigationFailureType
* @param params - { from, to }
*/
function createRouterError(type, params) {
	return assign(new Error(ErrorTypeMessages[type](params)), {
		type,
		[NavigationFailureSymbol]: true
	}, params);
}
const propertiesToLog = [
	"params",
	"query",
	"hash"
];
/**
* Stringifies a raw location for display in dev warnings.
*
* @internal
*/
function stringifyRoute(to) {
	if (!to || typeof to === "string") return to;
	if (to.path != null) return to.path;
	const location = {};
	for (const key of propertiesToLog) if (key in to) location[key] = to[key];
	return JSON.stringify(location, null, 2);
}
// src/diagnostics.ts
/**
* Runtime diagnostics catalog for Vue Router.
*
* Every entry has a stable `VUE_ROUTER_X####` code, a `why` that states the problem
* (the diagnosis only, never the remedy) and a `fix` that states the remedy
* (only, never the diagnosis). They are complementary: the reporter prints
* both, so neither repeats the other. The diagnosis substrings asserted by the
* warning tests stay in `why`. All call sites stay behind the existing `__DEV__` (or
* `"development" !== 'production'`) guards and remain bare expression
* statements so they tree-shake out of production builds.
*
* Codes are permanent: never rename or reuse one.
* - `VUE_ROUTER_R0###` core runtime warnings
* - `VUE_ROUTER_R1###` experimental data-loaders
* - `VUE_ROUTER_D0###` deprecations
*/
const diagnostics = /*#__PURE__*/ defineDiagnostics({
	reporters: [/*#__PURE__*/ createConsoleReporter()],
	codes: {
		VUE_ROUTER_R0122: {
			why: (p) => `The optional path param "${p.param}" is being removed with "${p.value}".`,
			fix: "Use null to remove an optional path param."
		},
		VUE_ROUTER_R0124: {
			why: (p) => `The repeatable param "${p.param}" cannot be empty.`,
			fix: "Pass at least one value, or make the param optional."
		},
		VUE_ROUTER_R0123: {
			why: (p) => `The query value of "${p.key}" is ignored because a param already sets this key.`,
			fix: (p) => `Pass the value in \`params\` instead of \`query\`, or omit "${p.key}" from \`query\`.`
		},
		VUE_ROUTER_R0126: {
			why: (p) => `An error was thrown while matching "${p.path}" against the route "${p.name}". The route is skipped.`,
			fix: "Return null from match() to skip a route, or call miss() in a param parser. Fix the thrown error if it is a bug."
		},
		VUE_ROUTER_R0129: {
			why: (p) => `Cannot resolve a relative location without a "name": there is no current location, or the current location has no route. This crashes in production.\nLocation: ${stringifyRoute(p.location)}`,
			fix: "Pass the location it is relative to as the second argument of resolve(), or use a location with a \"name\" or an absolute \"path\"."
		},
		VUE_ROUTER_R0125: {
			why: (p) => `The params, query, or hash do not match the route "${p.name}".`,
			fix: "Pass params, query, and hash values that the route matchers accept."
		},
		VUE_ROUTER_D0001: {
			why: (p) => `Route "${p.name}" uses beforeEnter, which is deprecated in the experimental router.`,
			fix: "Move the condition to the route meta field and check to.meta in router.beforeEach()."
		},
		VUE_ROUTER_R0130: {
			why: (p) => `Cannot resolve a relative location before the initial navigation. This throws in production.\nLocation: ${stringifyRoute(p.location)}`,
			fix: "Use a \"name\" or an absolute \"path\", or await router.isReady() before mounting the app."
		},
		VUE_ROUTER_D0002: {
			why: (p) => `The query value of "${p.key}" is not an array (${p.value}). Non array query values are deprecated in the experimental router.`,
			fix: (p) => `Wrap the value in an array: \`{ ${JSON.stringify(p.key)}: [${p.value}] }\`. Use undefined to remove the key.`
		},
		VUE_ROUTER_D0003: {
			why: "The \"custom\" prop of <RouterLink> is deprecated in the experimental router. It will be removed in the next major version.",
			fix: "Use useLink() in your own link component instead.",
			docs: "https://router.vuejs.org/guide/advanced/extending-router-link.html"
		},
		VUE_ROUTER_R0001: {
			why: (p) => `Parent route "${p.name}" not found when adding child route`,
			fix: "Add the parent route before its children, or check the parent name for typos.",
			docs: "https://router.vuejs.org/guide/advanced/dynamic-routing.html#Adding-nested-routes"
		},
		VUE_ROUTER_R0002: {
			why: (p) => `Cannot remove non-existent route "${p.name}"`,
			fix: "Check the route name; it may already have been removed or was never added.",
			docs: "https://router.vuejs.org/guide/advanced/dynamic-routing.html#Removing-routes"
		},
		VUE_ROUTER_R0003: {
			why: (p) => `Location "${stringifyRoute(p.location)}" resolved to "${p.href}". A resolved location cannot start with multiple slashes.`,
			fix: "Remove the leading slashes from the location or fix the route configuration."
		},
		VUE_ROUTER_R0004: {
			why: (p) => `No match found for location with path "${stringifyRoute(p.path)}"`,
			fix: "Add a route matching this path or check for typos in the location.",
			docs: "https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route"
		},
		VUE_ROUTER_R0005: {
			why: (p) => `router.resolve() was passed an invalid location. This will fail in production.\nLocation: ${stringifyRoute(p.rawLocation)}`,
			fix: "Pass a valid route location: a string path or an object with `path` or `name`."
		},
		VUE_ROUTER_R0006: {
			why: (p) => `Path "${p.path}" was passed with params but they will be ignored because a "path" was passed.`,
			fix: "Use a named route `{ name, params }` instead of `{ path, params }`.",
			docs: "https://router.vuejs.org/guide/essentials/navigation.html#Navigate-to-a-different-location"
		},
		VUE_ROUTER_R0007: {
			why: (p) => `A \`hash\` should always start with the character "#" but received "${p.hash}".`,
			fix: (p) => `Prepend "#" to the hash in your route location: use "#${p.hash}".`
		},
		VUE_ROUTER_R0008: {
			why: (p) => `Invalid redirect found:\n${p.target}\n when navigating to "${p.to}".\nThis will break in production.`,
			fix: "A redirect must resolve to a location with a `name` or `path`; return one of those (or a string path) from `redirect`.",
			docs: "https://router.vuejs.org/guide/essentials/redirect-and-alias.html#Redirect"
		},
		VUE_ROUTER_R0009: {
			why: (p) => `Detected a possibly infinite redirection in a navigation guard when going from "${p.from}" to "${p.to}". Aborting to avoid a Stack Overflow. This might break in production if not fixed.`,
			fix: "A guard is returning a new location on every call; make that return conditional so it only redirects when actually needed.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Global-Before-Guards"
		},
		VUE_ROUTER_R0010: {
			why: "Uncaught error during route navigation",
			fix: "Register an error handler with `router.onError()` to handle navigation errors."
		},
		VUE_ROUTER_R0011: {
			why: "Unexpected error when starting the router:",
			fix: "Inspect the actual cause; a navigation guard or async component likely threw during the initial navigation."
		},
		VUE_ROUTER_R0020: {
			why: (p) => `No active route record was found when calling \`${p.fn}()\`. Maybe you called it inside of App.vue?`,
			fix: "Call it from a component rendered inside <router-view> (a page component or one of its children), not from App.vue.",
			docs: "https://router.vuejs.org/guide/advanced/composition-api.html#Navigation-Guards"
		},
		VUE_ROUTER_R0021: {
			why: "No active route record was found when reactivating component with navigation guard. This is likely a bug in vue-router.",
			fix: "Report with a minimal reproduction at https://github.com/vuejs/router/issues/new/choose."
		},
		VUE_ROUTER_R0022: {
			why: (p) => `${p.fn}() was called outside of component setup but it must be called at the top of a setup function`,
			fix: "Call it synchronously at the top of `setup()`, before any `await`.",
			docs: "https://router.vuejs.org/guide/advanced/composition-api.html#Navigation-Guards"
		},
		VUE_ROUTER_R0023: {
			why: (p) => `The "next" callback was never called inside of ${p.name ? `"${p.name}"` : ""}:\n${p.guard}`,
			fix: "Make sure `next()` runs on every branch, including early returns and async paths, or drop the `next` parameter and return the value instead.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0024: {
			why: (p) => `The "next" callback was called more than once in one navigation guard when going from "${p.from}" to "${p.to}". This will fail in production.`,
			fix: "Call `next()` exactly once per guard: remove the extra call, or migrate to returning the value you passed to `next()`.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0025: {
			why: "The `next()` callback in navigation guards is deprecated.",
			fix: "Return the value instead: `next()` becomes `return`, `next(false)` becomes `return false`, `next(\"/path\")` becomes `return \"/path\"`.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0026: {
			why: (p) => `Record with path "${p.path}" is either missing a "component(s)" or "children" property.`,
			fix: "Add a `component`, `components`, or `children` to the route record.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html"
		},
		VUE_ROUTER_R0027: {
			why: (p) => `Component "${p.name}" in record with path "${p.path}" is not a valid component. Received "${p.received}".`,
			fix: "Pass a component or a function returning a Promise that resolves to one."
		},
		VUE_ROUTER_R0028: {
			why: (p) => `Component "${p.name}" in record with path "${p.path}" is a Promise instead of a function that returns a Promise. This will break in production if not fixed.`,
			fix: `Defer the import in an arrow function so it loads lazily: write "() => import('./MyPage.vue')", not "import('./MyPage.vue')".`,
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html"
		},
		VUE_ROUTER_R0029: {
			why: (p) => `Component "${p.name}" in record with path "${p.path}" is defined using "defineAsyncComponent()".`,
			fix: `Drop the wrapper and pass "() => import('./MyPage.vue')" directly; the router handles lazy components itself.`,
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html#Relationship-to-async-components"
		},
		VUE_ROUTER_R0030: {
			why: (p) => `Component "${p.name}" in record with path "${p.path}" is a function that does not return a Promise. This will break in production if not fixed.`,
			fix: "Return a dynamic import (`() => import(\"./MyPage.vue\")`) from the function, or add a `displayName` if it is a functional component.",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html"
		},
		VUE_ROUTER_R0040: {
			why: (p) => `Because "${p.el}" starts with "#", scrollBehavior resolves it as an element id via document.getElementById("${p.el.slice(1)}"), not as a CSS selector. No element has that id, but "${p.el}" does match an element with document.querySelector().`,
			fix: (p) => `Resolve the element yourself and return the node: el: document.querySelector('${p.el}').`,
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0041: {
			why: (p) => `The selector "${p.el}" is invalid. See https://mathiasbynens.be/notes/css-escapes or CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape) for the escaping rules.`,
			fix: "Build an id selector as `#${CSS.escape(id)}` so special characters in the id are escaped.",
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0042: {
			why: (p) => `Couldn't find element using selector "${p.el}" returned by scrollBehavior.`,
			fix: "Return a selector that matches an existing element, or guard against missing elements.",
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0043: {
			why: (p) => `Several active useScrollRestoration() calls use the key "${p.key}" with different "capture" or "restore" options. They overwrite each other's saved entry.`,
			fix: "Give each call a different \"key\", or combine them if they are in the same component."
		},
		VUE_ROUTER_R0044: {
			why: "No ScrollRestoration plugin is available to useScrollRestoration().",
			fix: "Install ScrollRestoration on the app before calling useScrollRestoration()."
		},
		VUE_ROUTER_R0050: {
			why: (p) => {
				let to;
				try {
					to = p.to === void 0 ? "undefined" : JSON.stringify(p.to);
				} catch {
					to = String(p.to);
				}
				return `Invalid value for prop "to" in useLink()\n- to: ${to}`;
			},
			fix: "Pass a valid route location (a string path or an object) to the \"to\" prop."
		},
		VUE_ROUTER_R0051: {
			why: "<RouterLink custom> is not supported in Vapor mode.",
			fix: "Use useLink() in your own link component instead.",
			docs: "https://router.vuejs.org/guide/advanced/extending-router-link.html"
		},
		VUE_ROUTER_R0060: {
			why: (p) => `<router-view> can no longer be used directly inside <${p.comp}>.`,
			fix: (p) => `Wrap the slot's resolved component with <${p.comp}> instead of nesting <router-view> in it:\n\n<router-view v-slot="{ Component }">\n  <${p.comp}>\n    <component :is="Component" />\n  </${p.comp}>\n</router-view>`,
			docs: "https://router.vuejs.org/guide/advanced/router-view-slot.html#KeepAlive-Transition"
		},
		VUE_ROUTER_R0070: {
			why: (p) => `Cannot resolve a relative location without an absolute path. Trying to resolve "${p.to}" from "${p.from}".`,
			fix: (p) => `Resolve from an absolute \`from\` path that starts with "/", e.g. "/${p.from}".`
		},
		VUE_ROUTER_R0080: {
			why: (p) => `Error decoding "${p.text}". Using original value`,
			fix: "Ensure the value is correctly percent-encoded."
		},
		VUE_ROUTER_R0090: {
			why: (p) => `Found duplicated params with name "${p.name}" for path "${p.path}". Only the last one will be available on "$route.params".`,
			fix: "Give each param a unique name within the path.",
			docs: "https://router.vuejs.org/guide/essentials/route-matching-syntax.html"
		},
		VUE_ROUTER_R0100: {
			why: (p) => `Discarded invalid param(s) "${p.params}" when navigating.` + p.inherited + ` See https://github.com/vuejs/router/commit/e887570 for more details.`,
			fix: "Only pass params that exist on the target route."
		},
		VUE_ROUTER_R0101: {
			why: (p) => `The Matcher cannot resolve relative paths but received "${p.path}". Unless you directly called \`matcher.resolve("${p.path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`,
			fix: "Pass an absolute path (starting with \"/\") to the matcher."
		},
		VUE_ROUTER_R0102: {
			why: (p) => `Alias "${p.alias}" and the original record: "${p.original}" must have the exact same param named "${p.name}"`,
			fix: "Use the same param names in the alias as in the original route.",
			docs: "https://router.vuejs.org/guide/essentials/redirect-and-alias.html#Alias"
		},
		VUE_ROUTER_R0103: {
			why: (p) => `The route named "${p.name}" has a child without a name, an empty path, and no children. Using that name won't render the empty path child, so this is probably a mistake.`,
			fix: "Move the `name` onto the empty-path child; or, if intentional, give the child its own name to silence this.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html#Nested-Named-Routes"
		},
		VUE_ROUTER_R0104: {
			why: (p) => `Absolute path "${p.path}" must have the exact same param named "${p.name}" as its parent "${p.parent}".`,
			fix: "Include the parent route params in the absolute child path.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html"
		},
		VUE_ROUTER_R0105: {
			why: (p) => `Finding ancestor route "${p.ancestor}" failed for "${p.record}"`,
			fix: "Report a reproduction at https://github.com/vuejs/router/issues/new/choose."
		},
		VUE_ROUTER_R0106: {
			why: (p) => `Repeatable param "${p.name}" was provided without an array.`,
			fix: (p) => `Pass it as an array, even when it has one item: { ${JSON.stringify(p.name)}: [value] }. If the param is optional (e.g. ":${p.name}*"), pass an empty array or null to remove it.`
		},
		VUE_ROUTER_R0107: {
			why: (p) => `The required param "${p.param}" is set to "${p.value}" but it keeps its current value.`,
			fix: (p) => `Omit "${p.param}" to keep its current value, or pass a new value.`
		},
		VUE_ROUTER_R0131: {
			why: (p) => `The repeatable param "${p.param}" in "${p.path}" is not alone in its segment. This throws a generic SyntaxError in production.`,
			fix: "Put the repeatable param in its own segment, e.g. \"/users/:ids+\".",
			docs: "https://router.vuejs.org/guide/essentials/route-matching-syntax.html#Repeatable-params"
		},
		VUE_ROUTER_R0110: {
			why: `A hash base must end with a "#"`,
			fix: (p) => `Append "#" to the "base" argument passed to "createWebHashHistory()": "${p.base}" should be "${p.suggestion}".`
		},
		VUE_ROUTER_R0120: {
			why: "Error with push/replace State",
			fix: "The browser rejected the history API call; check for cross-origin or rate-limit issues."
		},
		VUE_ROUTER_R0121: {
			why: "history.state seems to have been manually replaced without preserving the necessary values.\nYou can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state",
			fix: "Merge the router's state into your own when calling it manually: `history.replaceState({ ...history.state, ...yourState }, '', url)`.",
			docs: "https://router.vuejs.org/guide/migration.html#Usage-of-history-state"
		},
		VUE_ROUTER_R0127: {
			why: "The page is loaded from a file:// URL. createWebHistory() cannot reliably change the path of file:// URLs.",
			fix: "Use createWebHashHistory() instead.",
			docs: "https://router.vuejs.org/guide/essentials/history-mode.html#hash-mode"
		},
		VUE_ROUTER_R0128: {
			why: "The page is loaded in an about: URL (e.g. an iframe with srcdoc). Browsers do not let the web and hash histories change this URL.",
			fix: "Use createMemoryHistory() instead.",
			docs: "https://router.vuejs.org/guide/essentials/history-mode.html#memory-mode"
		},
		VUE_ROUTER_R1001: {
			why: (p) => `Data loader "${String(p.key)}" has a different parent than the current context. This shouldn't be happening.`,
			fix: "Report a bug with a minimal reproduction at https://github.com/vuejs/router/."
		},
		VUE_ROUTER_R1002: {
			why: "Returning a NavigationResult is deprecated.",
			fix: "Replace `return new NavigationResult(to)` with `reroute(to)`, which throws internally to reroute.",
			docs: "https://router.vuejs.org/data-loaders/navigation-aware.html#Controlling-the-navigation-with-reroute-"
		},
		VUE_ROUTER_R1003: {
			why: (p) => `Loader "${p.key}"'s "commit()" was called but there is no staged data.`,
			fix: "Ensure the loader resolved before calling `commit()`.",
			docs: "https://router.vuejs.org/data-loaders/defining-loaders.html#Delaying-data-updates-with-commit"
		},
		VUE_ROUTER_R1004: {
			why: (p) => "A loader returned a NavigationResult but is not registered on the route." + p.key,
			fix: "Export the loader from the page component so it gets registered, e.g. `export const useUserData = defineLoader(...)`.",
			docs: "https://router.vuejs.org/data-loaders/organization.html"
		},
		VUE_ROUTER_R1005: {
			why: (p) => `Data loader "${p.key}" has itself as parent. This shouldn't be happening.`,
			fix: "Report a bug with a minimal reproduction at https://github.com/vuejs/router/."
		},
		VUE_ROUTER_R1006: {
			why: (p) => `A query was defined with the same key as the loader "[${p.key}]".\nSee https://pinia-colada.esm.dev/#TODO`,
			fix: "If the key is meant to match, use the data loader directly; otherwise rename the `useQuery()` key so it no longer collides.",
			docs: "https://router.vuejs.org/data-loaders/colada.html"
		},
		VUE_ROUTER_R1007: {
			why: "Data Loader was setup twice.",
			fix: "Register `DataLoaderPlugin` a single time via `app.use()`.",
			docs: "https://router.vuejs.org/data-loaders.html#Installation"
		},
		VUE_ROUTER_R1008: {
			why: "Data Loader is experimental and subject to breaking changes in the future.",
			docs: "https://router.vuejs.org/data-loaders.html"
		},
		VUE_ROUTER_R1009: {
			why: "Returning a NavigationResult from a loader is deprecated.",
			fix: "Call `reroute(to)` inside the loader instead of returning `new NavigationResult(to)`; it throws internally to reroute.",
			docs: "https://router.vuejs.org/data-loaders/navigation-aware.html#Controlling-the-navigation-with-reroute-"
		}
	}
});

/*!
* vue-router v5.5.2
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
function isRouteName(name) {
	return typeof name === "string" || typeof name === "symbol";
}

/*!
* vue-router v5.5.2
* (c) 2026 Eduardo San Martin Morote
* @license MIT
*/
// src/matcher/pathTokenizer.ts
const ROOT_TOKEN = {
	type: 0,
	value: ""
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
function tokenizePath(path) {
	if (!path) return [[]];
	if (path === "/") return [[ROOT_TOKEN]];
	if (!isAbsolutePath(path)) throw new Error(`Route paths should start with a "/": "${path}" should be "/${path}".` );
	function crash(message) {
		throw new Error(`ERR (${state})/"${buffer}": ${message}`);
	}
	let state = 0;
	let previousState = state;
	const tokens = [];
	let segment;
	function finalizeSegment() {
		if (segment) tokens.push(segment);
		segment = [];
	}
	let i = 0;
	let char;
	let buffer = "";
	let customRe = "";
	function consumeBuffer() {
		if (!buffer) return;
		const lastToken = segment[segment.length - 1];
		if (lastToken?.type === 1 && lastToken.repeatable) throw diagnostics.VUE_ROUTER_R0131({
			param: lastToken.value,
			path
		}) ;
		if (state === 0) segment.push({
			type: 0,
			value: buffer
		});
		else if (state === 1 || state === 2 || state === 3) {
			if (segment.length && (char === "*" || char === "+")) throw diagnostics.VUE_ROUTER_R0131({
				param: buffer,
				path
			}) ;
			segment.push({
				type: 1,
				value: buffer,
				regexp: customRe,
				repeatable: char === "*" || char === "+",
				optional: char === "*" || char === "?"
			});
		} else crash("Invalid state to consume buffer");
		buffer = "";
	}
	function addCharToBuffer() {
		buffer += char;
	}
	while (i < path.length) {
		char = path[i++];
		switch (state) {
			case 0:
				if (char === "\\") {
					previousState = state;
					state = 4;
				} else if (char === "/") {
					if (buffer) consumeBuffer();
					finalizeSegment();
				} else if (char === ":") {
					consumeBuffer();
					state = 1;
				} else addCharToBuffer();
				break;
			case 4:
				addCharToBuffer();
				state = previousState;
				break;
			case 1:
				if (char === "(") state = 2;
				else if (VALID_PARAM_RE.test(char)) addCharToBuffer();
				else {
					consumeBuffer();
					state = 0;
					if (char !== "*" && char !== "?" && char !== "+") i--;
				}
				break;
			case 2:
				if (char === ")") {
					if (customRe[customRe.length - 1] == "\\") customRe = customRe.slice(0, -1) + char;
					else state = 3;
				} else customRe += char;
				break;
			case 3:
				consumeBuffer();
				state = 0;
				if (char !== "*" && char !== "?" && char !== "+") i--;
				customRe = "";
				break;
			default: crash("Unknown state");
		}
	}
	if (state === 2) crash(`Unfinished custom RegExp for param "${buffer}"`);
	consumeBuffer();
	finalizeSegment();
	return tokens;
}
// src/matcher/pathParserRanker.ts
const BASE_PARAM_PATTERN = "[^/]+?";
const BASE_PATH_PARSER_OPTIONS = {
	sensitive: false,
	strict: false,
	start: true,
	end: true
};
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\|]/g;
/**
* Creates a path parser from an array of Segments (a segment is an array of Tokens)
*
* @param segments - array of segments returned by tokenizePath
* @param extraOptions - optional options for the regexp
* @returns a PathParser
*/
function tokensToParser(segments, extraOptions) {
	const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
	const score = [];
	let pattern = options.start ? "^" : "";
	const keys = [];
	const hasBackreference = segments.some((segment) => segment.some((token) => token.type === 1 && /\\[1-9k]/.test(token.regexp || "")));
	for (const segment of segments) {
		const segmentScores = segment.length ? [] : [90];
		if (options.strict && !segment.length) pattern += "/";
		for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
			const token = segment[tokenIndex];
			let subSegmentScore = 40 + (options.sensitive ? .25 : 0);
			if (token.type === 0) {
				if (!tokenIndex) pattern += "/";
				pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
				subSegmentScore += 40;
			} else if (token.type === 1) {
				const { value, repeatable, optional, regexp } = token;
				keys.push({
					name: value,
					repeatable,
					optional
				});
				const re = regexp ? regexp : BASE_PARAM_PATTERN;
				if (re !== BASE_PARAM_PATTERN) {
					subSegmentScore += 10;
					try {
						new RegExp(`(${re})`);
					} catch (err) {
						throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` + err.message);
					}
				}
				let subPattern = repeatable && re !== ".+" && re !== ".*" ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
				const next = segment[tokenIndex + 1];
				const afterNext = segment[tokenIndex + 2];
				if (!hasBackreference && !regexp && !repeatable && afterNext && afterNext.type === 1 && !afterNext.regexp && next.type === 0) subPattern = `([^/](?:(?!${next.value.replace(REGEX_CHARS_RE, "\\$&")})[^/])*)`;
				if (!tokenIndex) subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
				if (optional) subPattern += "?";
				pattern += subPattern;
				subSegmentScore += 20;
				if (optional) subSegmentScore += -8;
				if (repeatable) subSegmentScore += -20;
				if (re === ".*") subSegmentScore += -50;
			}
			segmentScores.push(subSegmentScore);
		}
		score.push(segmentScores);
	}
	if (options.strict && options.end) {
		const i = score.length - 1;
		score[i][score[i].length - 1] += .7000000000000001;
	}
	if (!options.strict) pattern += "/?";
	if (options.end) pattern += "$";
	else if (options.strict && !pattern.endsWith("/")) pattern += "(?:/|$)";
	const re = new RegExp(pattern, options.sensitive ? "" : "i");
	function parse(path) {
		const match = path.match(re);
		const params = {};
		if (!match) return null;
		for (let i = 1; i < match.length; i++) {
			const value = match[i] || "";
			const key = keys[i - 1];
			params[key.name] = value && key.repeatable ? value.split("/") : value;
		}
		return params;
	}
	function stringify(params) {
		let path = "";
		let avoidDuplicatedSlash = false;
		for (const segment of segments) {
			if (!avoidDuplicatedSlash || !path.endsWith("/")) path += "/";
			avoidDuplicatedSlash = false;
			for (const token of segment) if (token.type === 0) path += token.value;
			else if (token.type === 1) {
				const { value, repeatable, optional } = token;
				const param = value in params ? params[value] : "";
				if (isArray(param) && !repeatable) throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
				const text = isArray(param) ? param.join("/") : param;
				if (!text) {
					if (optional) {
						if (segment.length < 2) {
							if (path.endsWith("/")) path = path.slice(0, -1);
							else avoidDuplicatedSlash = true;
						}
					} else throw new Error(`Missing required param "${value}"`);
				}
				path += text;
			}
		}
		return path || "/";
	}
	return {
		re,
		score,
		keys,
		parse,
		stringify
	};
}
/**
* Compares an array of numbers as used in PathParser.score and returns a
* number. This function can be used to `sort` an array
*
* @param a - first array of numbers
* @param b - second array of numbers
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
* should be sorted first
*/
function compareScoreArray(a, b) {
	let i = 0;
	while (i < a.length && i < b.length) {
		const diff = b[i] - a[i];
		if (diff) return diff;
		i++;
	}
	if (a.length < b.length) return a.length === 1 && a[0] === 80 ? -1 : 1;
	else if (a.length > b.length) return b.length === 1 && b[0] === 80 ? 1 : -1;
	return 0;
}
/**
* Compare function that can be used with `sort` to sort an array of PathParser
*
* @param a - first PathParser
* @param b - second PathParser
* @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
*/
function comparePathParserScore(a, b) {
	let i = 0;
	const aScore = a.score;
	const bScore = b.score;
	while (i < aScore.length && i < bScore.length) {
		const comp = compareScoreArray(aScore[i], bScore[i]);
		if (comp) return comp;
		i++;
	}
	if (Math.abs(bScore.length - aScore.length) === 1) {
		if (isLastScoreNegative(aScore)) return 1;
		if (isLastScoreNegative(bScore)) return -1;
	}
	return bScore.length - aScore.length;
}
/**
* This allows detecting splats at the end of a path: /home/:id(.*)*
*
* @param score - score to check
* @returns true if the last entry is negative
*/
function isLastScoreNegative(score) {
	const last = score[score.length - 1];
	return score.length > 0 && last[last.length - 1] < 0;
}
const PATH_PARSER_OPTIONS_DEFAULTS = {
	strict: false,
	end: true,
	sensitive: false
};
// src/matcher/pathMatcher.ts
function createRouteRecordMatcher(record, parent, options) {
	const parser = tokensToParser(tokenizePath(record.path), options);
	{
		const existingKeys = /* @__PURE__ */ new Set();
		for (const key of parser.keys) {
			if (existingKeys.has(key.name)) diagnostics.VUE_ROUTER_R0090({
				name: key.name,
				path: record.path
			});
			existingKeys.add(key.name);
		}
	}
	const matcher = assign(parser, {
		record,
		parent,
		children: [],
		alias: []
	});
	if (parent) {
		if (!matcher.record.aliasOf === !parent.record.aliasOf) parent.children.push(matcher);
	}
	return matcher;
}
// src/matcher/index.ts
/**
* Creates a Router Matcher.
*
* @internal
* @param routes - array of initial routes
* @param globalOptions - global route options
*/
function createRouterMatcher(routes, globalOptions) {
	const matchers = [];
	const matcherMap = /* @__PURE__ */ new Map();
	globalOptions = mergeOptions(PATH_PARSER_OPTIONS_DEFAULTS, globalOptions);
	function getRecordMatcher(name) {
		return matcherMap.get(name);
	}
	function addRoute(record, parent, originalRecord) {
		const isRootAdd = !originalRecord;
		const mainNormalizedRecord = normalizeRouteRecord(record);
		checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent);
		mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
		const options = mergeOptions(globalOptions, record);
		const normalizedRecords = [mainNormalizedRecord];
		if ("alias" in record) {
			const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
			for (const alias of aliases) normalizedRecords.push(normalizeRouteRecord(assign({}, mainNormalizedRecord, {
				components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
				path: alias,
				aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
			})));
		}
		let matcher;
		let originalMatcher;
		for (const normalizedRecord of normalizedRecords) {
			const { path } = normalizedRecord;
			if (parent && !isAbsolutePath(path)) {
				const parentPath = parent.record.path;
				const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
				normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
			}
			if (normalizedRecord.path === "*") throw new Error("Catch all routes (\"*\") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.");
			matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
			if (parent && isAbsolutePath(path)) checkMissingParamsInAbsolutePath(matcher, parent);
			if (originalRecord) {
				originalRecord.alias.push(matcher);
				checkSameParams(originalRecord, matcher);
			} else {
				originalMatcher = originalMatcher || matcher;
				if (originalMatcher !== matcher) originalMatcher.alias.push(matcher);
				if (isRootAdd && record.name && !isAliasRecord(matcher)) {
					checkSameNameAsAncestor(record, parent);
					removeRoute(record.name);
				}
			}
			if (isMatchable(matcher)) insertMatcher(matcher);
			if (mainNormalizedRecord.children) {
				const children = mainNormalizedRecord.children;
				for (let i = 0; i < children.length; i++) addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
			}
			originalRecord = originalRecord || matcher;
		}
		return originalMatcher ? () => {
			removeRoute(originalMatcher);
		} : noop;
	}
	function removeRoute(matcherRef) {
		if (isRouteName(matcherRef)) {
			const matcher = matcherMap.get(matcherRef);
			if (matcher) {
				matcherMap.delete(matcherRef);
				matchers.splice(matchers.indexOf(matcher), 1);
				matcher.children.forEach(removeRoute);
				matcher.alias.forEach(removeRoute);
			}
		} else {
			const index = matchers.indexOf(matcherRef);
			if (index > -1) {
				matchers.splice(index, 1);
				if (matcherRef.record.name) matcherMap.delete(matcherRef.record.name);
			}
			matcherRef.children.forEach(removeRoute);
			matcherRef.alias.forEach(removeRoute);
		}
	}
	function getRoutes() {
		return matchers;
	}
	function insertMatcher(matcher) {
		const index = findInsertionIndex(matcher, matchers);
		matchers.splice(index, 0, matcher);
		if (matcher.record.name && !isAliasRecord(matcher)) matcherMap.set(matcher.record.name, matcher);
	}
	function resolve(location, currentLocation) {
		let matcher;
		let params = {};
		let path;
		let name;
		if ("name" in location && location.name) {
			matcher = matcherMap.get(location.name);
			if (!matcher) throw createRouterError(1, { location });
			{
				const explicitParams = location.params || {};
				const invalidParams = Object.keys(explicitParams).filter((paramName) => explicitParams[paramName] != null && !matcher.keys.find((k) => k.name === paramName));
				if (invalidParams.length) {
					const isInherited = !matcher.keys.length && invalidParams.some((name) => name in currentLocation.params);
					diagnostics.VUE_ROUTER_R0100({
						params: invalidParams.join("\", \""),
						inherited: isInherited ? ` If you are using a catch-all route with a named redirect, pass an empty \`params\` object: \`redirect: { name: '...', params: {} }\`.` : ""
					});
				}
				checkParamValues(matcher, location.params);
			}
			name = matcher.record.name;
			const inheritedParams = pickParams(currentLocation.params, matcher.keys.filter((k) => !k.optional).concat(matcher.parent ? matcher.parent.keys.filter((k) => k.optional) : []).map((k) => k.name));
			params = assign({}, inheritedParams, location.params && pickParams(location.params, matcher.keys.map((k) => k.name)));
			applyNullishParams(matcher, params, inheritedParams);
			path = matcher.stringify(params);
		} else if (location.path != null) {
			path = location.path;
			if (!isAbsolutePath(path)) diagnostics.VUE_ROUTER_R0101({ path });
			matcher = matchers.find((m) => m.re.test(path));
			if (matcher) {
				params = matcher.parse(path);
				name = matcher.record.name;
				matcher.keys.forEach((key) => {
					if (key.optional && !params[key.name]) delete params[key.name];
				});
			}
		} else {
			matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
			if (!matcher) throw createRouterError(1, {
				location,
				currentLocation
			});
			checkParamValues(matcher, location.params);
			name = matcher.record.name;
			params = assign({}, currentLocation.params, location.params);
			applyNullishParams(matcher, params, currentLocation.params);
			path = matcher.stringify(params);
		}
		const matched = [];
		let parentMatcher = matcher;
		while (parentMatcher) {
			matched.unshift(parentMatcher.record);
			parentMatcher = parentMatcher.parent;
		}
		return {
			name,
			path,
			params,
			matched,
			meta: mergeMetaFields(matched)
		};
	}
	routes.forEach((route) => addRoute(route));
	function clearRoutes() {
		matchers.length = 0;
		matcherMap.clear();
	}
	return {
		addRoute,
		resolve,
		removeRoute,
		clearRoutes,
		getRoutes,
		getRecordMatcher
	};
}
/**
* Picks an object param to contain only specified keys.
*
* @param params - params object to pick from
* @param keys - keys to pick
*/
function pickParams(params, keys) {
	const newParams = {};
	for (const key of keys) if (key in params) newParams[key] = params[key];
	return newParams;
}
/**
* Normalizes a RouteRecordRaw. Creates a copy
*
* @param record
* @returns the normalized version
*/
function normalizeRouteRecord(record) {
	const normalized = {
		path: record.path,
		redirect: record.redirect,
		name: record.name,
		meta: record.meta || {},
		aliasOf: record.aliasOf,
		beforeEnter: record.beforeEnter,
		props: normalizeRecordProps(record),
		children: record.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in record ? record.components || null : record.component && { default: record.component }
	};
	Object.defineProperty(normalized, "mods", { value: {} });
	return normalized;
}
/**
* Normalize the optional `props` in a record to always be an object similar to
* components. Also accept a boolean for components.
* @param record
*/
function normalizeRecordProps(record) {
	const propsObject = {};
	const props = record.props || false;
	if ("component" in record) propsObject.default = props;
	else for (const name in record.components) propsObject[name] = typeof props === "object" ? props[name] : props;
	return propsObject;
}
/**
* Checks if a record or any of its parent is an alias
* @param record
*/
function isAliasRecord(record) {
	while (record) {
		if (record.record.aliasOf) return true;
		record = record.parent;
	}
	return false;
}
/**
* Merge meta fields of an array of records
*
* @param matched - array of matched records
*/
function mergeMetaFields(matched) {
	return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function isSameParam(a, b) {
	return a.name === b.name && a.optional === b.optional && a.repeatable === b.repeatable;
}
/**
* Check if a path and its alias have the same required params
*
* @param a - original record
* @param b - alias record
*/
function checkSameParams(a, b) {
	for (const key of a.keys) if (!key.optional && !b.keys.find(isSameParam.bind(null, key))) {
		diagnostics.VUE_ROUTER_R0102({
			alias: b.record.path,
			original: a.record.path,
			name: key.name
		});
		return;
	}
	for (const key of b.keys) if (!key.optional && !a.keys.find(isSameParam.bind(null, key))) {
		diagnostics.VUE_ROUTER_R0102({
			alias: b.record.path,
			original: a.record.path,
			name: key.name
		});
		return;
	}
}
/**
* A route with a name and a child with an empty path without a name should warn when adding the route
*
* @param mainNormalizedRecord - RouteRecordNormalized
* @param parent - RouteRecordMatcher
*/
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
	if (parent && parent.record.name && !mainNormalizedRecord.name && !mainNormalizedRecord.path && mainNormalizedRecord.children.length === 0) diagnostics.VUE_ROUTER_R0103({ name: String(parent.record.name) });
}
function checkSameNameAsAncestor(record, parent) {
	for (let ancestor = parent; ancestor; ancestor = ancestor.parent) if (ancestor.record.name === record.name) throw new Error(`A route named "${String(record.name)}" has been added as a ${parent === ancestor ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
/**
* Handles nullish values of explicit params: they remove optional params and
* keep the inherited value of required params.
*
* @param matcher - matcher of the resolved location
* @param params - merged params, modified in place
* @param inheritedParams - params inherited from the current location
*/
function applyNullishParams(matcher, params, inheritedParams) {
	for (const name in params) {
		const value = params[name];
		if (value == null) {
			const key = matcher.keys.find((k) => k.name === name);
			if (key && !key.optional && name in inheritedParams) {
				params[name] = inheritedParams[name];
				diagnostics.VUE_ROUTER_R0107({
					param: name,
					value: String(value)
				});
			} else {
				delete params[name];
				if (value === void 0 && key?.optional) diagnostics.VUE_ROUTER_R0122({
					param: name,
					value: "undefined"
				});
			}
		}
	}
}
/**
* Warns about explicit param values that are probably mistakes.
*
* @param matcher - matcher of the resolved location
* @param params - params explicitly passed in the location
*/
function checkParamValues(matcher, params) {
	if (!params) return;
	for (const key of matcher.keys) {
		const value = params[key.name];
		if (key.optional && value === "") diagnostics.VUE_ROUTER_R0122({
			param: key.name,
			value: "an empty string"
		});
		else if (key.repeatable && value != null && !Array.isArray(value)) diagnostics.VUE_ROUTER_R0106({ name: key.name });
	}
}
function checkMissingParamsInAbsolutePath(record, parent) {
	for (const key of parent.keys) if (!record.keys.find(isSameParam.bind(null, key))) {
		diagnostics.VUE_ROUTER_R0104({
			path: record.record.path,
			name: key.name,
			parent: parent.record.path
		});
		return;
	}
}
/**
* Performs a binary search to find the correct insertion index for a new matcher.
*
* Matchers are primarily sorted by their score. If scores are tied then we also consider parent/child relationships,
* with descendants coming before ancestors. If there's still a tie, new routes are inserted after existing routes.
*
* @param matcher - new matcher to be inserted
* @param matchers - existing matchers
*/
function findInsertionIndex(matcher, matchers) {
	let lower = 0;
	let upper = matchers.length;
	while (lower !== upper) {
		const mid = lower + upper >> 1;
		if (comparePathParserScore(matcher, matchers[mid]) < 0) upper = mid;
		else lower = mid + 1;
	}
	const insertionAncestor = getInsertionAncestor(matcher);
	if (insertionAncestor) {
		upper = matchers.lastIndexOf(insertionAncestor, upper - 1);
		if (upper < 0) diagnostics.VUE_ROUTER_R0105({
			ancestor: insertionAncestor.record.path,
			record: matcher.record.path
		});
	}
	return upper;
}
function getInsertionAncestor(matcher) {
	let ancestor = matcher;
	while (ancestor = ancestor.parent) if (isMatchable(ancestor) && comparePathParserScore(matcher, ancestor) === 0) return ancestor;
}
/**
* Checks if a matcher can be reachable. This means if it's possible to reach it as a route. For example, routes without
* a component, or name, or redirect, are just used to group other routes.
* @param matcher
* @param matcher.record record of the matcher
* @returns
*/
function isMatchable({ record }) {
	return !!(record.name || record.components && Object.keys(record.components).length || record.redirect);
}

// Generated by @nuxtjs/i18n
const localizedPaths = [
  "/projects/:slug()",
  "/about",
  "/contact",
  "/projects",
  "/skills",
  "/"
];
const pathToI18nConfig = {};
const i18nPathToPath = {};
const disabledPaths = [];

const emptyRoute = { path: "/", name: "", matched: [], params: {}, meta: {} };
function createPathMatcher(resources, config) {
  const matcher = createRouterMatcher([], {});
  for (const path of [...resources.localizedPaths, ...Object.keys(resources.i18nPathToPath)]) {
    matcher.addRoute({ path, component: () => "", meta: {} });
  }
  const disabledI18nMatcher = createRouterMatcher([], {});
  for (const path of resources.disabledPaths) {
    disabledI18nMatcher.addRoute({ path, component: () => "", meta: {} });
  }
  const formatTrailingSlash = createTrailingSlashFormatter(config.trailingSlash);
  const getI18nPathToI18nPath = (path, locale) => {
    if (!path || !locale) {
      return;
    }
    const plainPath = resources.i18nPathToPath[path] ?? path;
    const i18nConfig = resources.pathToI18nConfig[plainPath];
    if (i18nConfig == null || !(locale in i18nConfig)) {
      return plainPath;
    }
    return i18nConfig[locale] || void 0;
  };
  function isExistingNuxtRoute2(path) {
    if (path === "") {
      return;
    }
    if (path.endsWith("/__nuxt_error")) {
      return;
    }
    if (disabledI18nMatcher.resolve({ path }, emptyRoute).matched.length > 0) {
      return;
    }
    const resolvedMatch = matcher.resolve({ path }, emptyRoute);
    return resolvedMatch.matched.length > 0 ? resolvedMatch : void 0;
  }
  function matchLocalized2(path, locale, defaultLocale) {
    if (path === "") {
      return;
    }
    const parsed = parsePath(path);
    const resolvedMatch = matcher.resolve({ path: parsed.pathname || "/" }, emptyRoute);
    if (resolvedMatch.matched.length === 0) {
      return;
    }
    const alternate = getI18nPathToI18nPath(resolvedMatch.matched[0].path, locale);
    if (!alternate) {
      return;
    }
    const match = matcher.resolve({ params: resolvedMatch.params }, { ...emptyRoute, path: alternate });
    const isPrefixable = prefixable(locale, defaultLocale, config);
    return formatTrailingSlash(withLeadingSlash(joinURL(isPrefixable ? locale : "", match.path)), true);
  }
  return { isExistingNuxtRoute: isExistingNuxtRoute2, matchLocalized: matchLocalized2 };
}
const { isExistingNuxtRoute, matchLocalized } = createPathMatcher(
  { localizedPaths, i18nPathToPath, pathToI18nConfig, disabledPaths },
  { strategy: "prefix_except_default", trailingSlash: false }
);

function createRedirectResolver(config) {
  const { detection, rootRedirect, matchLocalized} = config;
  const isSupported = config.isSupportedLocale ?? isSupportedLocale;
  const detectLocale = createLocaleDetector({ detection, isSupportedLocale: isSupported});
  return function resolveRedirectPath(fullPath, path, pathLocale, defaultLocale, detectors, relocate) {
    let locale = detectLocale(detectors, fullPath, true) || defaultLocale;
    function getLocalizedMatch(locale2) {
      const res = matchLocalized(path || "/", locale2, defaultLocale);
      if (res && res !== fullPath) {
        return res;
      }
    }
    let resolvedPath = void 0;
    let redirectCode = 302;
    const pathname = parsePath(fullPath).pathname;
    if (rootRedirect && pathname === "/") {
      locale = detection.enabled && locale || defaultLocale;
      resolvedPath = isSupported(detectors.route(rootRedirect.path)) && rootRedirect.path || matchLocalized(rootRedirect.path, locale, defaultLocale);
      redirectCode = rootRedirect.code;
    } else if (config.redirectStatusCode) {
      redirectCode = config.redirectStatusCode;
    }
    switch (detection.redirectOn) {
      case "root":
        if (pathname !== "/") {
          break;
        }
      // fallthrough (root has no prefix)
      case "no prefix":
        if (pathLocale) {
          break;
        }
      // fallthrough to resolve
      case "all":
        resolvedPath ??= getLocalizedMatch(locale);
        break;
    }
    return { path: resolvedPath, code: redirectCode, locale };
  };
}

function createRedirectResponse(event, dest, code) {
  event.node.res.setHeader("location", dest);
  event.node.res.statusCode = sanitizeStatusCode(code, event.node.res.statusCode);
  return {
    headers: event.node.res.getHeaders(),
    statusCode: event.node.res.statusCode,
    body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${dest.replace(/"/g, "%22")}"></head></html>`
  };
}
const _4U7UCCuGtdWqcqwb0rLthoig_q82rq9Rt77O17LpwFo = defineNitroPlugin(async (nitro) => {
  const runtimeI18n = useRuntimeI18n();
  const rootRedirect = resolveRootRedirect(runtimeI18n.rootRedirect);
  runtimeI18n.defaultLocale || "";
  try {
    const cacheStorage = useStorage("cache");
    const cachedKeys = await cacheStorage.getKeys("nitro:handlers:i18n");
    await Promise.all(cachedKeys.map((key) => cacheStorage.removeItem(key)));
  } catch {
  }
  const detection = useI18nDetection();
  const cookieOptions = {
    path: "/",
    domain: detection.cookieDomain || void 0,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: detection.cookieSecure
  };
  const legacyBaseUrl = isFunction(runtimeI18n.baseUrl);
  if (legacyBaseUrl) {
    console.warn("[nuxt-i18n] Configuring baseUrl as a function is deprecated and will be removed in v11.");
  }
  const baseUrlGetter = (event) => {
    return "";
  };
  const resolveRedirectPath = createRedirectResolver({
    detection,
    rootRedirect,
    redirectStatusCode: runtimeI18n.redirectStatusCode,
    matchLocalized});
  nitro.hooks.hook("request", async (event) => {
    await initializeI18nContext(event);
  });
  nitro.hooks.hook("render:before", async (context) => {
    const { event } = context;
    const ctx = useI18nContext(event);
    const url = getRequestURL(event);
    const detector = useDetectors(event, detection);
    const localeSegment = detector.route(event.path);
    const pathLocale = isSupportedLocale(localeSegment) && localeSegment || void 0;
    const { pathname } = parsePath(event.path);
    const path = pathLocale ? pathname.slice(pathLocale.length + 1) || "/" : pathname;
    if (!url.pathname.includes("/_i18n") && !isExistingNuxtRoute(path)) {
      return;
    }
    const resolved = resolveRedirectPath(
      event.path,
      path,
      pathLocale,
      ctx.vueI18nOptions.defaultLocale,
      detector);
    if (resolved.path && (resolved.origin || resolved.path !== pathname)) {
      ctx.detectLocale = resolved.locale;
      detection.useCookie && (!resolved.origin || detection.cookieDomain) && setCookie(event, detection.cookieKey, resolved.locale, cookieOptions);
      context.response = createRedirectResponse(
        event,
        // the resolved path is base-free (matched against base-free routes), re-add `app.baseURL`
        joinURL(
          resolved.origin || baseUrlGetter(),
          useRuntimeConfig(event).app.baseURL,
          resolved.path + url.search
        ),
        resolved.code
      );
      return;
    }
  });
  nitro.hooks.hook("render:html", (htmlContext, { event }) => {
    tryUseI18nContext(event);
  });
});

// src/runtime/server/dev-error/channel.ts
/** Base path the dev server owning the channel serves it at. */
const ERROR_CHANNEL_ENV$1 = "NUXT_DEV_ERROR_CHANNEL";
/** `BroadcastChannel` name reports are forwarded on. */
const ERROR_CHANNEL_BROADCAST$1 = "nuxt:dev:error";
const CHANNEL_KEY = Symbol.for("nuxt:dev:error-channel");
let isForwarding = () => false;
/**
* Whether reports are forwarded to a dev server in front rather than served from here.
* Read when the channel is first used, not when this module loads.
*/
function setErrorChannelForwarding(forward) {
	isForwarding = forward;
}
function isForwardingReports() {
	return isForwarding();
}
let channelAccess = {};
/** Confine the channel this process owns. Read when the channel is first used. */
function setErrorChannelAccess(access) {
	channelAccess = access;
}
/** The live error channel, forwarding to the dev server in front when there is one. */
function useErrorChannel$1() {
	const store = globalThis;
	store[CHANNEL_KEY] ||= isForwarding() ? Promise.resolve(createForwardingChannel()) : import('file://D:/work/portfolio/node_modules/my-bad/dist/channel/index.mjs').then(({ createChannel }) => createOwnedChannel(createChannel({
		open: true,
		root: channelAccess.root,
		allowedHosts: channelAccess.allowedHosts
	})));
	return store[CHANNEL_KEY];
}
/** The `BroadcastChannel` reports travel between threads on, which must not hold the process open. It drops every message where none can be opened. */
function openErrorBroadcast() {
	try {
		const broadcast = new BroadcastChannel(ERROR_CHANNEL_BROADCAST$1);
		broadcast.unref?.();
		return broadcast;
	} catch {
		return {
			onmessage: null,
			postMessage() {},
			close() {}
		};
	}
}
function openBroadcast() {
	const broadcast = openErrorBroadcast();
	return {
		broadcast,
		post: (message) => broadcast.postMessage(message)
	};
}
/** A channel of this process, which also relays reports to and from other threads. */
function createOwnedChannel(channel) {
	const { broadcast, post } = openBroadcast();
	broadcast.onmessage = (event) => {
		const message = event.data;
		switch (message?.type) {
			case "nuxt:dev:error:report": return channel.setError(message.report, message.requestId, message.request);
			case "nuxt:dev:error:clear": return channel.clearError(message.id, scopeOf(message));
			case "nuxt:dev:error:log": return channel.log(message.entry);
			case "nuxt:dev:error:warning": return channel.warn(message.report);
			case "nuxt:dev:error:warning:clear": return channel.clearWarning(message.id);
			case "nuxt:dev:error:progress": return channel.progress(message.progress);
			case "nuxt:dev:error:problems": return channel.setProblems(message.source, message.reports, message.meta);
			case "nuxt:dev:error:problems:clear": return channel.clearProblems(message.source);
			case "nuxt:dev:error:devtools": return channel.setDevTools(message.registered);
		}
	};
	post({ type: "nuxt:dev:error:sync" });
	return {
		...channel,
		setError(report, requestId, request) {
			channel.setError(report, requestId, request);
			post({
				type: "nuxt:dev:error:report",
				report,
				requestId,
				request
			});
		},
		clearError(id, request) {
			channel.clearError(id, request);
			post({
				type: "nuxt:dev:error:clear",
				id,
				...request
			});
		},
		get current() {
			return channel.current;
		},
		get clients() {
			return channel.clients;
		},
		get history() {
			return channel.history;
		},
		get problems() {
			return channel.problems;
		}
	};
}
function createForwardingChannel() {
	const { broadcast, post } = openBroadcast();
	let current;
	return {
		handler: () => Promise.resolve(false),
		fetchHandler: () => Promise.resolve(void 0),
		setError(report, requestId, request) {
			current = report;
			post({
				type: "nuxt:dev:error:report",
				report,
				requestId,
				request
			});
		},
		clearError(id, request) {
			if (!scopeOf(request ?? {})) current = void 0;
			post({
				type: "nuxt:dev:error:clear",
				id,
				...request
			});
		},
		warn(report) {
			post({
				type: "nuxt:dev:error:warning",
				report
			});
		},
		clearWarning(id) {
			post({
				type: "nuxt:dev:error:warning:clear",
				id
			});
		},
		log(entry) {
			post({
				type: "nuxt:dev:error:log",
				entry: {
					timestamp: Date.now(),
					...entry
				}
			});
		},
		progress(progress) {
			post({
				type: "nuxt:dev:error:progress",
				progress
			});
		},
		setProblems(source, reports, meta) {
			post({
				type: "nuxt:dev:error:problems",
				source,
				reports,
				meta
			});
		},
		clearProblems(source) {
			post({
				type: "nuxt:dev:error:problems:clear",
				source
			});
		},
		setDevTools(registered) {
			post({
				type: "nuxt:dev:error:devtools",
				registered
			});
		},
		get current() {
			return current;
		},
		history: [],
		historyFor: () => [],
		problems: [],
		subscribe: () => () => {},
		getReport: () => void 0,
		clients: 0,
		close() {
			broadcast.close();
		}
	};
}
const PUBLISHED_KEY = Symbol.for("nuxt:dev:error-published");
/** The ids of the reports published for each requested path, by the request (`METHOD /path`) that raised them. */
function publishedByPath() {
	const store = globalThis;
	return store[PUBLISHED_KEY] ||= /* @__PURE__ */ new Map();
}
/** The request a clear names, if it names one. */
function scopeOf({ requestId, request }) {
	return requestId || request ? {
		...requestId && { requestId },
		...request && { request }
	} : void 0;
}
/** Publish a report as an open error, paired with the request it came from. */
async function publishErrorReport$1(report, request) {
	const channel = await useErrorChannel$1();
	const path = request && `${request.url.pathname}${request.url.search}`;
	const scope = path && `${request.method} ${path}`;
	channel.setError(report, requestIdOf(request), scope);
	if (scope) {
		const published = publishedByPath();
		const byRequest = published.get(path) ?? /* @__PURE__ */ new Map();
		published.set(path, byRequest.set(scope, (byRequest.get(scope) ?? /* @__PURE__ */ new Set()).add(report.id)));
	}
}
/** The id a dev server in front gave the request. */
function requestIdOf(request) {
	return request?.headers.get("x-nuxt-dev-request-id") ?? void 0;
}
/**
* Retire the reports published for requests to `url`, which has since rendered. Each stays open
* for any other request that raised it.
*/
async function clearErrorReport(url) {
	const path = `${url.pathname}${url.search}`;
	const reports = publishedByPath().get(path);
	if (!reports) return;
	publishedByPath().delete(path);
	const channel = await useErrorChannel$1();
	for (const [request, ids] of reports) for (const id of ids) channel.clearError(id, { request });
}
/** Stream a log entry to connected error pages and overlays. */
async function publishDevLog(entry) {
	(await useErrorChannel$1()).log(entry);
}
/** Report build progress. A `percent` of 100 retires the progress bar. */
async function publishDevProgress(progress) {
	(await useErrorChannel$1()).progress(progress);
}

// src/runtime/server/dev-error/report.ts
const THROWN_CONTEXT = Symbol.for("nuxt:dev:context");
/** The component instance and route the app recorded on `error` when it threw. */
function thrownContext(error) {
	return (typeof error === "object" && error !== null && THROWN_CONTEXT in error ? error[THROWN_CONTEXT] : void 0) ?? {};
}
/**
* A `canRead` check that allows real paths within `allow` and not matching `deny`, matched as
* Vite matches `server.fs`.
*/
async function createFsAccessCheck(fs) {
	const [{ default: picomatch }, { existsSync, realpathSync }] = await Promise.all([import('file://D:/work/portfolio/node_modules/picomatch/index.js'), import('node:fs')]);
	const toRoot = (dir) => dir.replaceAll("\\", "/").replace(/\/$/, "");
	const roots = /* @__PURE__ */ new Set();
	for (const dir of fs.allow) {
		roots.add(toRoot(dir));
		if (existsSync(dir)) roots.add(toRoot(realpathSync(dir)));
	}
	const denied = picomatch(fs.deny.map((pattern) => pattern.includes("/") ? pattern : `**/${pattern}`), {
		matchBase: false,
		nocase: true,
		dot: true
	});
	return (file) => {
		const path = file.replaceAll("\\", "/");
		return !denied(path) && [...roots].some((root) => path === root || path.startsWith(`${root}/`));
	};
}
/** A filesystem loader reading only the real paths `canRead` allows, or files within `cwd` without it. */
async function createReportFsLoader(options) {
	const [{ fsLoader }, { realpathSync }, { basename, dirname, join }] = await Promise.all([
		import('file://D:/work/portfolio/node_modules/my-bad/dist/index.mjs'),
		import('node:fs'),
		import('node:path')
	]);
	const canRead = options.canRead;
	if (!canRead) return fsLoader({ roots: [options.cwd] });
	const realPath = (file) => {
		try {
			return realpathSync(file);
		} catch {
			const parent = dirname(file);
			return parent === file ? file : join(realPath(parent), basename(file));
		}
	};
	return fsLoader({ canRead: (file) => canRead(realPath(file).replaceAll("\\", "/")) });
}
/**
* Build a report for an error raised while rendering. Must run before anything rewrites
* `error.stack`, as frames are mapped by the loaders rather than read off the stack.
*/
async function createErrorReport$1(error, options) {
	const [{ createReport }, { nuxtPreset }, fs] = await Promise.all([
		import('file://D:/work/portfolio/node_modules/my-bad/dist/index.mjs'),
		import('file://D:/work/portfolio/node_modules/my-bad/dist/presets/index.mjs'),
		createReportFsLoader(options)
	]);
	return withoutEchoingCauses(await createReport(error, {
		cwd: options.cwd,
		loaders: [...options.loaders ?? [], fs],
		presets: [nuxtPreset()],
		context: {
			...thrownContext(error),
			...options.context
		}
	}));
}
/** Add the error overlay to an already-rendered page. */
async function withErrorOverlay(html, report, options) {
	const [{ injectOverlay }, { nuxtTheme }] = await Promise.all([import('file://D:/work/portfolio/node_modules/my-bad/dist/index.mjs'), import('file://D:/work/portfolio/node_modules/my-bad/dist/presets/index.mjs')]);
	return injectOverlay(html, report, {
		cwd: options.cwd,
		channel: options.channel,
		requestId: options.requestId,
		theme: nuxtTheme,
		tag: "nuxt-error-overlay",
		startMinimized: options.startMinimized,
		nonce: SCRIPT_NONCE_RE$1.exec(html)?.[1] || void 0
	});
}
/** The CSP nonce a page's scripts carry, when it is a valid one. */
const SCRIPT_NONCE_RE$1 = /<script(?=[\s>])[^>]*?\snonce="([\w+/\-=]*)"/;
/**
* Render the badge for the head of a dev page, which shows the channel's errors and warnings
* on it. The page reloads once its error clears, unless `window.__NUXT_DEV_ERROR__.recovers()`
* reports that the app can update in place.
*/
async function renderDevBadge$2(options) {
	const [{ renderBadge }, { nuxtTheme }] = await Promise.all([import('file://D:/work/portfolio/node_modules/my-bad/dist/index.mjs'), import('file://D:/work/portfolio/node_modules/my-bad/dist/presets/index.mjs')]);
	const requestId = requestIdOf(options.request) ?? crypto.randomUUID();
	const state = JSON.stringify({ requestId }).replaceAll("<", "\\u003c");
	return `<script${options.nonce ? ` nonce="${options.nonce.replaceAll("&", "&amp;").replaceAll("\"", "&quot;")}"` : ""}>window.__NUXT_DEV_ERROR__=${state};addEventListener('my-bad:error:clear',()=>__NUXT_DEV_ERROR__.recovers?.()||location.reload())<\/script>` + renderBadge({
		channel: options.channel,
		cwd: options.cwd,
		theme: nuxtTheme,
		tag: "nuxt-error-overlay",
		requestId,
		awaitHost: 500,
		nonce: options.nonce
	});
}
/** Render a standalone error page, for when the app itself cannot render one. */
async function renderErrorPage(report, options) {
	const [{ renderPage }, { nuxtTheme }] = await Promise.all([import('file://D:/work/portfolio/node_modules/my-bad/dist/index.mjs'), import('file://D:/work/portfolio/node_modules/my-bad/dist/presets/index.mjs')]);
	return renderPage(report, {
		cwd: options.cwd,
		channel: options.channel,
		requestId: options.requestId,
		theme: nuxtTheme
	});
}
/** Render a report for the terminal. It carries its own icon and colours. */
async function renderErrorAnsi(report, options) {
	const { renderAnsi } = await import('file://D:/work/portfolio/node_modules/my-bad/dist/index.mjs');
	return renderAnsi(withoutEchoingCauses(report), { cwd: options.cwd });
}
const CONTROL_CHARACTER_RE = /[\u0000-\u0008\u000B-\u001F\u007F-\u009F]/g;
/** `text` without the C0 and C1 control characters, other than tab and newline, that could drive a terminal. */
function stripControlCharacters(text) {
	return text.replace(CONTROL_CHARACTER_RE, "");
}
/** Print a report to the terminal, falling back to the raw error when it cannot be rendered. */
async function printErrorReport(report, options) {
	const label = options.request ? ` [${options.request.method}] ${options.request.url.href}` : "";
	const rendered = await renderErrorAnsi(report, { cwd: options.cwd }).catch(() => void 0);
	if (rendered) console.log(`[request error]${label}\n\n${rendered}`);
	else {
		const error = options.error instanceof Error ? options.error.stack || options.error.message : options.error ?? report.message;
		console.error(`[request error]${label}\n\n${stripControlCharacters(String(error))}`);
	}
}
/**
* Build the reporter a builder hands the renderer as `onDevError`. The report is built on the
* stack as raised, so this must run before anything rewrites it.
*/
function createDevErrorReporter(options) {
	return async function observeDevError(error, event, observe = {}) {
		const request = event && options.requestInfo(event);
		const report = observe.expected ? void 0 : await options.createReport(error, event).catch(() => void 0);
		options.mapStack?.(error);
		if (!report) return;
		if (observe.publish !== false) await publishErrorReport$1(report, isCompileFailure(report) ? void 0 : request).catch(() => {});
		if (observe.print !== false && !isForwardingReports()) await printErrorReport(report, {
			cwd: options.cwd,
			error,
			request
		});
		const requestId = requestIdOf(request);
		return {
			report,
			overlay: (html) => withErrorOverlay(html, report, {
				cwd: options.cwd,
				channel: options.channel(),
				requestId,
				startMinimized: true
			}),
			page: () => renderErrorPage(report, {
				cwd: options.cwd,
				channel: options.channel(),
				requestId
			})
		};
	};
}
/** Whether a report, or one of its causes, is a file that does not compile. */
function isCompileFailure(report) {
	return report.kind === "compile" || report.causes.some(isCompileFailure) || !!report.errors?.some(isCompileFailure);
}
/** A line of a code frame, as a compiler embeds one in a message. */
const FRAME_LINE_RE = /^[^\S\n]*(?:\d+[^\S\n]*[|:│]|[|│][^\S\n]*\^|\^)/m;
/**
* Drop causes that only repeat the report's own message, so the failure is read once. A
* wrapper is only dropped when all it adds is the code frame the report shows as a snippet.
*/
function withoutEchoingCauses(report) {
	const causes = report.causes.filter((cause) => !echoesMessage(cause.message, report.message)).map(withoutEchoingCauses);
	return causes.length === report.causes.length ? report : {
		...report,
		causes
	};
}
function echoesMessage(candidate, message) {
	if (candidate === message) return true;
	if (!candidate.startsWith(message)) return false;
	const remainder = candidate.slice(message.length);
	return remainder.trim() === "" || FRAME_LINE_RE.test(remainder);
}
/**
* Rewrite the module ids a transform failure names, and those of its causes, with
* `resolve`. A bundler names the module it was serving, which is not always a path.
*/
function resolveErrorPaths(error, resolve, seen = /* @__PURE__ */ new Set()) {
	if (typeof error !== "object" || error === null || seen.has(error)) return;
	seen.add(error);
	const candidate = error;
	if (typeof candidate.id === "string") candidate.id = resolve(candidate.id);
	if (candidate.loc && typeof candidate.loc.file === "string") candidate.loc.file = resolve(candidate.loc.file);
	resolveErrorPaths(candidate.cause, resolve, seen);
	if (Array.isArray(candidate.errors)) for (const nested of candidate.errors) resolveErrorPaths(nested, resolve, seen);
}
/** An error, including one from another realm that fails `instanceof Error`. */
function isErrorLike(value) {
	return typeof value === "object" && value !== null && typeof value.message === "string";
}
/** Flatten an error's `cause` chain into something the payload can carry. */
function serializeErrorCause(cause, depth = 0, seen = /* @__PURE__ */ new WeakSet()) {
	if (depth >= 10 || isErrorLike(cause) && seen.has(cause)) return;
	if (isErrorLike(cause)) {
		seen.add(cause);
		const nestedCause = serializeErrorCause(cause.cause, depth + 1, seen);
		return {
			name: typeof cause.name === "string" ? cause.name : "Error",
			message: cause.message,
			...typeof cause.stack === "string" && cause.stack && { stack: cause.stack },
			...nestedCause !== void 0 && { cause: nestedCause }
		};
	}
	if (cause === null || typeof cause === "string" || typeof cause === "number" || typeof cause === "boolean") return cause;
}

const NUXT_ERROR_CHANNEL = "/__nuxt_dev__/error";

// src/runtime/utils/error-channel.ts
const ERROR_CHANNEL_ENV = ERROR_CHANNEL_ENV$1;
const ERROR_CHANNEL_BROADCAST = ERROR_CHANNEL_BROADCAST$1;
/** Whether reports should be forwarded to the dev server that set {@link ERROR_CHANNEL_ENV}. */
function shouldForwardReports(env = process$1.env, mainThread = isMainThread) {
	return !!env[ERROR_CHANNEL_ENV] && !mainThread;
}
/** Base path pages should subscribe to. */
function getErrorChannelPath() {
	return process$1.env[ERROR_CHANNEL_ENV] || joinURL(useRuntimeConfig().app.baseURL, NUXT_ERROR_CHANNEL);
}
setErrorChannelForwarding(() => shouldForwardReports());
setErrorChannelAccess({
	root: reportFs.allow,
	allowedHosts
});
/** The live error channel, forwarding to the dev server in front when there is one. */
function useErrorChannel() {
	return useErrorChannel$1();
}
/** Publish a report as the current error, paired with the request it came from. */
function publishErrorReport(report, event) {
	return publishErrorReport$1(report, event && {
		method: event.method,
		url: getRequestURL(event),
		headers: event.headers
	});
}
/** Render the badge for the head of a page rendered for `event`. */
function renderDevBadge$1(event, nonce) {
	return renderDevBadge$2({
		cwd: rootDir,
		channel: getErrorChannelPath(),
		request: event,
		nonce
	});
}
/**
* Build a report for an error raised while rendering. Must run on the stack as it was
* raised, since frames are mapped through the SSR bundle's sourcemaps.
*/
async function createErrorReport(error, event) {
	resolveErrorPaths(error, resolveTransformPath);
	const ssrSourceMaps = useNitroApp().ssrSourceMaps;
	canRead ||= createFsAccessCheck(reportFs).catch(() => () => false);
	return createErrorReport$1(error, {
		cwd: rootDir,
		loaders: ssrSourceMaps ? [compiledPositionLoader(ssrSourceMaps)] : [],
		canRead: await canRead,
		context: { event }
	});
}
let canRead;
/**
* Resolve a bundler module id such as `/app.vue`, which reads as an absolute path but is
* relative to the environment root, to a file the developer can open.
*/
function resolveTransformPath(path) {
	const query = path.indexOf("?");
	const file = query === -1 ? path : path.slice(0, query);
	if (!file.startsWith("/") || existsSync(file)) return path;
	for (const root of [srcDir, rootDir]) {
		const resolved = join(root, file);
		if (existsSync(resolved)) return query === -1 ? resolved : resolved + path.slice(query);
	}
	return path;
}
/**
* Recover the generated position of frames the runner has already mapped. A frame mapped
* to its module but not to a line in it points at generated code, so counts as a vendor frame.
*/
function compiledPositionLoader(ssrSourceMaps) {
	return {
		name: "nuxt-compiled-position",
		map(frame) {
			if (!frame.file || frame.line === void 0 || frame.compiled) return;
			const compiled = ssrSourceMaps.getCompiledPosition?.(frame.file, frame.line, frame.column);
			if (compiled) return {
				...frame,
				compiled
			};
			return ssrSourceMaps.getCode(frame.file) !== void 0 && frame.line > lineCount(frame.file) ? {
				...frame,
				type: "vendor"
			} : void 0;
		},
		readCompiled: (file) => ssrSourceMaps.getCode(file)
	};
}
function lineCount(file) {
	try {
		return readFileSync(file, "utf8").split("\n").length;
	} catch {
		return Number.POSITIVE_INFINITY;
	}
}
/** Report an error raised while serving a request. */
const observeDevError = createDevErrorReporter({
	cwd: rootDir,
	channel: getErrorChannelPath,
	createReport: (error, event) => createErrorReport(error, event),
	requestInfo: (event) => ({
		method: event.method,
		url: getRequestURL(event),
		headers: event.headers
	})
});

// src/runtime/plugins/dev-errors.ts
/** Opens the error channel before anything requests a page. */
var dev_errors_default = (_nitroApp) => {
	useErrorChannel().catch(() => {});
	streamLogsToChannel();
};
/** Mirror what the server logs onto the error channel. */
function streamLogsToChannel() {
	let publishing = false;
	consola$1.addReporter({ log(logObject) {
		if (publishing) return;
		publishing = true;
		try {
			publishDevLog(toLogEntry(logObject)).catch(() => {});
		} finally {
			publishing = false;
		}
	} });
}
function toLogEntry(logObject) {
	const args = logObject.args ?? [];
	const message = formatWithOptions({
		colors: false,
		depth: 2
	}, ...args);
	return {
		level: toLogLevel(logObject),
		text: logObject.tag ? `[${logObject.tag}] ${message}` : message,
		timestamp: logObject.date ? new Date(logObject.date).getTime() : void 0
	};
}
const LOG_LEVELS = {
	trace: "trace",
	debug: "debug",
	verbose: "debug",
	info: "info",
	log: "log",
	warn: "warn",
	error: "error",
	fail: "error",
	fatal: "fatal"
};
/** Fallback for consola types whose names say nothing about severity. */
const LOG_LEVELS_BY_SEVERITY = [
	"error",
	"warn",
	"log",
	"info",
	"debug",
	"trace"
];
function toLogLevel(logObject) {
	if (LOG_LEVELS[logObject.type]) return LOG_LEVELS[logObject.type];
	const severity = Math.round(logObject.level);
	return LOG_LEVELS_BY_SEVERITY[Math.max(0, Math.min(severity, LOG_LEVELS_BY_SEVERITY.length - 1))] ?? "log";
}

const plugins$1 = [
  route_rules_default,
dev_server_logs_default,
_5142yCVpWwn5PvE6XHDDXBP_DBYEq2vNEckbujKQINE,
_TaCFkNVInH8F5XJ0wGB3_x1XAKT5nu7K6NBWTkwhmQ,
_4U7UCCuGtdWqcqwb0rLthoig_q82rq9Rt77O17LpwFo,
dev_errors_default,
_Z4Vm0BJMJeyU_KFYzGBgSOBoZ4JOQn4jYmko_KtDwU,
_LB91z6Ht2T49ncvhFWMKIA26eT4mdBc7tIFl06yLKKs
];

const assets = {};

function readAsset (id) {
  const serverDir = dirname$1(fileURLToPath(globalThis._importMeta_.url));
  // Public dirs might be pruned after the build (uploaded to a CDN, sourcemaps
  // stripped), so a manifest entry with no file behind it reads as absent, not broken.
  return promises.readFile(resolve$1(serverDir, assets[id].path)).catch((error) => {
    if (error?.code !== 'ENOENT') { throw error }
  })
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _WlJyii = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({ statusCode: 404 });
    }
    return;
  }
  if (asset.encoding !== void 0) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  const data = readAsset(id);
  return typeof data?.then === "function" ? data.then(
    (resolved) => assertAssetData(event, resolved)
  ) : assertAssetData(event, data);
});
function assertAssetData(event, data) {
  if (data === null || data === void 0) {
    removeResponseHeader(event, "Cache-Control");
    throw createError({ statusCode: 404 });
  }
  return data;
}

const _messagesHandler = defineEventHandler(async (event) => {
  const locale = getRouterParam(event, "locale");
  if (!locale) {
    throw createError({ status: 400, message: "Locale not specified." });
  }
  const ctx = useI18nContext(event);
  if (ctx.localeConfigs && locale in ctx.localeConfigs === false) {
    throw createError({ status: 404, message: `Locale '${locale}' not found.` });
  }
  const messages = await ctx.loadMessages(locale);
  {
    for (const k of Object.keys(messages)) {
      warnMissedMessageFunctions(k, messages[k]);
    }
  }
  return messages;
});
const getCacheKey = (event) => [getRouterParam(event, "locale") ?? "null", getRouterParam(event, "hash") ?? "null"].join("-");
async function shouldBypassCache(event) {
  const locale = getRouterParam(event, "locale");
  if (locale == null) {
    return false;
  }
  const ctx = tryUseI18nContext(event) || await initializeI18nContext(event);
  return !ctx.localeConfigs?.[locale]?.cacheable;
}
const _cachedMessageLoader = defineCachedFunction(_messagesHandler, {
  name: "i18n:messages-internal",
  maxAge: -1 ,
  getKey: getCacheKey,
  shouldBypassCache
});
defineCachedEventHandler(_cachedMessageLoader, {
  name: "i18n:messages",
  maxAge: -1 ,
  swr: false,
  getKey: getCacheKey,
  shouldBypassCache
});
const _G7s3ac = _messagesHandler ;

// ../nuxt/src/app/island-hash.ts
/**
* Strip Vue scoped-style attributes (`data-v-*`) from island props before hashing
* or rendering. Scoped-id markers leak in from parent components and are not part
* of the logical island input.
*
* Used before island props are serialized and sent to the island handler.
*
* @internal
*/
function filterIslandProps(props) {
	if (!props) return {};
	const out = {};
	for (const key in props) if (!key.startsWith("data-v-")) out[key] = props[key];
	return out;
}
/**
* Compute the `hashId` segment embedded in an island URL (`/__nuxt_island/<Name>_<hashId>.json`).
*
* The hash binds the response to the requested `(name, props, context, source)` tuple, so the
* server can reject requests whose URL hash does not match the supplied query/body. Use this
* from island clients if you need to ensure a hash stays in step with Nuxt's implementation.
*
* `props` may be passed either as the raw props object or as the JSON string that will be sent
* over the wire; the two produce the same hash when the round-trip is identity.
*
* @since 4.5.0
*/
function getIslandHash(input) {
	const props = typeof input.props === "string" ? parseSerializedProps(input.props) : input.props ?? {};
	return digest(canonicalJSON([
		input.name,
		props,
		input.context ?? {},
		input.source
	])).replace(/[-_]/g, "");
}
function canonicalJSON(value) {
	return JSON.stringify(value, (_key, val) => {
		if (val === null || typeof val !== "object" || Array.isArray(val)) return val;
		return Object.fromEntries(Object.keys(val).sort().map((key) => [key, val[key]]));
	});
}
function parseSerializedProps(serializedProps) {
	try {
		return JSON.parse(serializedProps);
	} catch {
		return serializedProps;
	}
}

// src/runtime/utils/island-props.ts
/** @internal */
const MAX_ISLAND_BODY_BYTES = 65536;
/**
* Whether the bracket nesting of a JSON-ish string exceeds `maxDepth`, in a single linear
* pass. Brackets inside string values are ignored.
*
* @internal
*/
function exceedsMaxDepth(raw, maxDepth = 64) {
	let depth = 0;
	let inString = false;
	let escaped = false;
	for (let i = 0; i < raw.length; i++) {
		const ch = raw[i];
		if (inString) {
			if (escaped) escaped = false;
			else if (ch === "\\") escaped = true;
			else if (ch === "\"") inString = false;
			continue;
		}
		if (ch === "\"") inString = true;
		else if (ch === "{" || ch === "[") {
			if (++depth > maxDepth) return true;
		} else if (ch === "}" || ch === "]") {
			if (depth > 0) depth--;
		}
	}
	return false;
}
/** @internal */
function exceedsMaxBytes(raw, maxBytes = MAX_ISLAND_BODY_BYTES) {
	return Buffer.byteLength(raw, "utf8") > maxBytes;
}

// src/runtime/utils/island-head.ts
const TAG_CONFIG_KEYS = [
	"key",
	"tagPosition",
	"tagPriority"
];
/**
* Apply the `useHeadSafe` allowlist to resolved head input, returning input that renders
* the same tags when pushed without it.
*/
function toSafeHeadInput(input) {
	const { titleTemplate, ...rest } = input;
	const head = createHead({
		disableDefaults: true,
		plugins: [SafeInputPlugin]
	});
	head.push(rest, { _safe: true });
	const safe = {};
	if (typeof titleTemplate === "string" || titleTemplate === null) safe.titleTemplate = titleTemplate;
	for (const tag of resolveTags(head)) {
		if (tag.tag === "title") {
			safe.title = tag.textContent;
			continue;
		}
		const value = toInputValue(tag);
		if (tag.tag === "htmlAttrs" || tag.tag === "bodyAttrs" || tag.tag === "base") safe[tag.tag] = value;
		else (safe[tag.tag] ||= []).push(value);
	}
	return safe;
}
/**
* Merge resolved head entries into a single serializable head input for an island response.
*/
function mergeIslandHead(entries) {
	const islandHead = {};
	for (const entry of entries) {
		const input = walkResolver(entry.input, VueResolver);
		for (const [key, value] of Object.entries(entry.options?._safe ? toSafeHeadInput(input) : input)) {
			const currentValue = islandHead[key];
			if (Array.isArray(currentValue)) currentValue.push(...value);
			else islandHead[key] = Array.isArray(value) ? [...value] : value;
		}
	}
	return islandHead;
}
function toInputValue(tag) {
	const value = {};
	for (const [name, prop] of Object.entries(tag.props)) value[name] = prop instanceof Set ? [...prop].join(" ") : prop instanceof Map ? [...prop].map(([property, propertyValue]) => `${property}:${propertyValue}`).join(";") : prop;
	if (tag.textContent !== void 0) value.textContent = tag.textContent;
	for (const key of TAG_CONFIG_KEYS) if (tag[key] !== void 0) value[key] = tag[key];
	return value;
}

// ../nuxt/src/app/internal/tracing.ts
let _channels$1;
function getChannel$1(name) {
	_channels$1 ??= {};
	if (name in _channels$1) return _channels$1[name];
	const dc = globalThis.process?.getBuiltinModule?.("node:diagnostics_channel");
	const channel = dc?.tracingChannel ? dc.tracingChannel(name) : null;
	_channels$1[name] = channel;
	return channel;
}
function traceAsync$1(name, context, fn) {
	const channel = getChannel$1(name);
	if (!channel || channel.hasSubscribers === false) return fn();
	return channel.tracePromise(() => Promise.resolve(fn()), context);
}

// src/runtime/utils/response.ts
/**
* The response the renderer builds, keeping its body as the renderer produced it.
*
* A real `Response` turns every body into a `ReadableStream`, which would send a rendered
* document as a chunked stream where nitro sends the string it was given. The renderer only
* reads the fields below back, so this describes just those.
*/
var NodeRenderResponse = class {
	body;
	status;
	statusText;
	headers;
	/** The rendered document as ordered chunks, which the render handler encodes in place of `body`. */
	chunks;
	constructor(body, init) {
		this.body = body;
		this.status = init?.status || 200;
		this.statusText = init?.statusText || "";
		this.headers = init?.headers instanceof Headers ? init.headers : new Headers(init?.headers);
	}
};
/**
* The headers of a node response as the record nitro's `render:response` hook passes,
* read from and written to the node response itself. `set-cookie` is omitted, as it
* cannot be represented as one string. The proxy target is kept as a snapshot for
* `util.inspect`, which bypasses the traps.
*/
function createResponseHeaderRecord(res) {
	const read = (name) => {
		if (typeof name !== "string" || name.toLowerCase() === "set-cookie") return;
		const value = res.getHeader(name);
		if (value === void 0) return;
		return Array.isArray(value) ? value.join(", ") : String(value);
	};
	const snapshot = {};
	const sync = (name) => {
		const value = read(name);
		if (value === void 0) delete snapshot[name.toLowerCase()];
		else snapshot[name.toLowerCase()] = value;
	};
	for (const name of res.getHeaderNames()) sync(name);
	return new Proxy(snapshot, {
		get: (_, name) => read(name),
		has: (_, name) => read(name) !== void 0,
		set(_, name, value) {
			if (typeof name === "string") {
				if (value === void 0 || value === null) res.removeHeader(name);
				else res.setHeader(name, value);
				sync(name);
			}
			return true;
		},
		deleteProperty(_, name) {
			if (typeof name === "string") {
				res.removeHeader(name);
				sync(name);
			}
			return true;
		},
		ownKeys: () => res.getHeaderNames().filter((name) => name !== "set-cookie"),
		getOwnPropertyDescriptor(_, name) {
			const value = read(name);
			return value === void 0 ? void 0 : {
				value,
				writable: true,
				enumerable: true,
				configurable: true
			};
		}
	});
}

// src/runtime/server/renderer/diagnostics.ts
const ansi = (open, close) => (s) => `\x1B[${open}m${s}\x1B[${close}m`;
const colors = {
	red: ansi(31, 39),
	yellow: ansi(33, 39),
	cyan: ansi(36, 39),
	gray: ansi(90, 39),
	bold: ansi(1, 22),
	dim: ansi(2, 22)
};
/**
* E8xxx
* SSR rendering diagnostics, sharing the range with the server runtime that
* hosts the renderer.
*/
const docsBase = (code) => `https://nuxt.com/docs/4.x/errors/${code.replace("NUXT_", "").toLowerCase()}`;
const rendererDiagnostics = /* #__PURE__ */ defineDiagnostics({
	docsBase,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors) } )],
	codes: {
		NUXT_E8001: {
			why: (p) => `\`render:html\` mutated \`body\`/\`bodyAppend\` while streaming (\`${p.path}\`). These fields are silently dropped because the body is about to stream.`,
			fix: "Use the `render:html:close` hook instead.",
			docs: false
		},
		NUXT_E8002: {
			why: (p) => `SSR streaming committed the response before render completed (\`${p.path}\`). The following mutations did not reach the client and were dropped:\n  - ${p.mutations}`,
			fix: (p) => `Move the mutation into a plugin (which runs before the shell is flushed), or opt this route out of streaming with \`routeRules: { '${p.path}': { streaming: false } }\` or the \`render:route\` hook.`,
			docs: false
		},
		NUXT_E8004: {
			why: "The server bundle is not available.",
			fix: "Ensure the Nuxt build completed successfully and the server entry was emitted by your builder.",
			docs: false
		},
		NUXT_E8006: {
			why: (p) => `The payload for \`${p.path}\` is ${p.size}, which will increase the page size and slow down hydration.${p.keys ? ` Largest payload keys:\n  - ${p.keys}` : ""}`,
			fix: "Use the `pick` or `transform` options of `useAsyncData`/`useFetch` to strip out data the client does not need.",
			docs: false
		},
		NUXT_E8007: {
			why: (p) => `\`${p.path}\` relies on client-side JavaScript, but \`features.noScripts: 'production'\` will strip scripts from this route in production:\n  - ${p.reasons}`,
			fix: "Remove the client-side dependency from this route, or scope script stripping with the `noScripts` route rule instead of enabling it globally."
		},
		NUXT_E8009: {
			why: (p) => `A page error interrupted the stream for \`${p.path}\`, and ${p.what} also failed while rendering the error response.\n  ${p.cause}`,
			fix: "Fix the page error first. If it keeps happening, report the failure below - the browser will show a blank or partial page instead of the error page."
		}
	}
});
/** Diagnostics reported only while prerendering. */
/* #__PURE__ */ defineDiagnostics({
	docsBase,
	reporters: [/* @__PURE__ */ createConsoleReporter({ formatter: ansiFormatter(colors) } )],
	codes: {
		NUXT_E8015: {
			why: (p) => `\`${p.path}\` was read while prerendering, but it is required and \`${p.env}\` is not set.`,
			fix: "Set the environment variable when prerendering, or make the value optional in its schema. The server will not start without it.",
			docs: false
		},
		NUXT_E8018: {
			why: (p) => `\`${p.url}\` was requested while it was already being prerendered (${p.chain}), so the request failed with \`508 Loop Detected\`.`,
			fix: "Check for `useFetch` or `$fetch` calls that target the page being rendered, for example from a middleware or layout that runs on every page.",
			docs: false
		},
		NUXT_E8019: {
			why: (p) => `The island \`${p.url}\` was requested while it was already being prerendered (${p.chain}), so the request failed with \`508 Loop Detected\`.`,
			fix: "Check for a server component that renders itself with the same props, directly or through another server component.",
			docs: false
		}
	}
});

// src/runtime/server/renderer/cache.ts
function lazyCachedFunction(fn) {
	let res = null;
	return () => {
		if (res === null) res = fn().catch((err) => {
			res = null;
			throw err;
		});
		return res;
	};
}

// src/runtime/server/renderer/build-files.ts
const APP_ROOT_OPEN_TAG = `<${appRootTag}${propsToString(appRootAttrs)}>`;
const APP_ROOT_CLOSE_TAG = `</${appRootTag}>`;
const getServerEntry = () => Promise.resolve().then(function () { return entry; }).then((r) => r.default || r);
const getClientManifest = () => Promise.resolve().then(function () { return manifest$1; }).then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
/** Load the build artifacts for a set of renderer options, caching each of them on the returned object. */
function createBuildFiles(options) {
	const buildAssetsURL = (...path) => options.buildAssetsURL(...path);
	const getSSRRenderer = lazyCachedFunction(async () => {
		const createSSRApp = await getServerEntry();
		if (!createSSRApp) throw rendererDiagnostics.NUXT_E8004();
		const precomputed = void 0 ;
		const renderer = createRenderer(createSSRApp, {
			precomputed,
			manifest: await getClientManifest() ,
			renderToString,
			buildAssetsURL
		});
		async function renderToString(input, context = {}) {
			const chunks = await renderToChunks(input, context);
			let html = APP_ROOT_OPEN_TAG;
			for (const chunk of chunks) html += chunk;
			html += APP_ROOT_CLOSE_TAG;
			chunks.unshift(APP_ROOT_OPEN_TAG);
			chunks.push(APP_ROOT_CLOSE_TAG);
			context["~htmlChunks"] = chunks;
			if (process.env.NUXT_VITE_NODE_OPTIONS) renderer.rendererContext.updateManifest(await getClientManifest());
			return html;
		}
		return renderer;
	});
	const getSPARenderer = lazyCachedFunction(async () => {
		const precomputed = void 0 ;
		const template = renderSPATemplate();
		const renderer = createRenderer(() => () => {}, {
			precomputed,
			manifest: await getClientManifest() ,
			renderToString: () => template,
			buildAssetsURL
		});
		const result = await renderer.renderToString({});
		const renderToString = (ssrContext) => {
			const config = ssrContext.runtimeConfig;
			ssrContext.modules ||= /* @__PURE__ */ new Set();
			ssrContext.payload.serverRendered = false;
			ssrContext.config = {
				public: config.public,
				app: config.app
			};
			return Promise.resolve(result);
		};
		return {
			rendererContext: renderer.rendererContext,
			renderToString
		};
	});
	return {
		getRenderer: (ssrContext) => ssrContext.noSSR ? getSPARenderer() : getSSRRenderer(),
		getSSRRenderer,
		getServerApp: lazyCachedFunction(getServerEntry)
	};
}
/** Render through Vue's simple stream so the markup is kept as the chunks Vue produced. */
function renderToChunks(input, context) {
	return new Promise((resolve, reject) => {
		const chunks = [];
		renderToSimpleStream(input, context, {
			push(chunk) {
				if (chunk === null) resolve(chunks);
				else chunks.push(chunk);
			},
			destroy: reject
		});
	});
}
function renderSPATemplate() {
	{
		`<${appSpaLoaderTag}${propsToString(appSpaLoaderAttrs)}>`;
		return APP_ROOT_OPEN_TAG + APP_ROOT_CLOSE_TAG + ("");
	}
}
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));

const plugins = [];

// src/runtime/server/renderer/plugins.ts
/** Fresh hooks with every renderer plugin registered on them, or `undefined` when there are none. */
function createRendererPluginHooks() {
	if (!plugins.length) return;
	const hooks = new HookableCore();
	const context = { hooks: { hook: hooks.hook.bind(hooks) } };
	for (const plugin of plugins) plugin(context);
	return hooks;
}

// src/runtime/server/renderer/instance.ts
/**
* Create the renderer state for a set of options, calling each renderer plugin with the
* hooks of the new renderer.
*
* Called by `createNuxtRenderer()`; call it directly only to render against the same
* artifacts as a renderer created elsewhere (an island handler sharing the server bundle
* loaded for page renders), and pass the result to `createNuxtRenderer()`.
*/
function createRendererInstance(options) {
	return {
		options,
		hooks: createRendererHooks(options),
		...createBuildFiles(options)
	};
}
function createRendererHooks(options) {
	const own = createRendererPluginHooks();
	if (!own) return { callHook: (name, ...args) => options.hooks().callHook(name, ...args) };
	const pluginEvent = options.pluginEvent;
	return { callHook(name, ...args) {
		const [context, extra] = args;
		const pluginArgs = pluginEvent ? [context, {
			...extra,
			event: pluginEvent(extra.event)
		}] : args;
		const result = own.callHook(name, ...pluginArgs);
		if (result instanceof Promise) return result.then(() => options.hooks().callHook(name, ...args));
		return options.hooks().callHook(name, ...args);
	} };
}

// src/runtime/server/renderer/runtime.ts
/** The event to pass to application code and to the render hooks. */
function appEvent(event) {
	return event["~app"] ?? event;
}
function getRequestState(event) {
	return event.context.nuxt;
}

// src/runtime/utils/renderer/options.ts
globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
/** The capabilities a nitropack v2 host provides to the Nuxt renderer. */
const rendererOptions = {
	runtimeConfig: (event) => useRuntimeConfig(appEvent(event)),
	buildAssetsURL,
	publicAssetsURL,
	getRouteRules: (event) => getRouteRules(appEvent(event)),
	hooks: () => useNitroApp().hooks,
	pluginEvent: (event) => toPortableEvent(event),
	createResponse: (body, init) => new NodeRenderResponse(body, init),
	createDocumentResponse: (chunks, init) => Object.assign(new NodeRenderResponse(null, init), { chunks }),
	createError: (init) => createError({
		statusCode: init.status,
		statusMessage: init.statusText,
		message: init.statusText,
		data: init.data
	}),
	writeEarlyHints: (event, hints) => writeEarlyHints(appEvent(event), hints.link),
	onRenderSuccess: (event) => {
		Promise.resolve().then(function () { return errorChannel$1; }).then(({ clearErrorReport }) => clearErrorReport(event.url)).catch(() => {});
	} ,
	prerender: void 0
};
{
	rendererOptions.onDevError = (error, event, options) => Promise.resolve().then(function () { return errorChannel$1; }).then(({ observeDevError }) => observeDevError(error, appEvent(event), options));
	rendererOptions.renderDevBadge = (event, nonce) => Promise.resolve().then(function () { return errorChannel$1; }).then(({ renderDevBadge }) => renderDevBadge(appEvent(event), nonce));
}
/**
* The renderer the page and island handlers share, so that both render against a single
* load of the server bundle and its manifest.
*/
const rendererInstance = createRendererInstance(rendererOptions);

// src/runtime/server/renderer/url.ts
/**
* The fragment of a request URL, avoiding the lazy URL parse that reading `hash` triggers when
* there is none. A fragment is never sent over the wire, so it can only appear on a URL the
* server constructed itself.
*/
function urlHash(url) {
	return url.href.includes("#") ? url.hash : "";
}
const PAYLOAD_BUILD_ID_PARAM = "_b";
/** Parse a request path without treating a leading `//` as an authority. */
function parseRequestPath(path) {
	return new URL("http://localhost" + path);
}
/** The page route a `_payload.json` (or `_payload.js`) request renders, without the build id param. */
function payloadRequestToRoute(path, filename = "_payload.json") {
	const payloadURL = parseRequestPath(path);
	const url = payloadURL.pathname.slice(0, -`/${filename}`.length) || "/";
	payloadURL.searchParams.delete(PAYLOAD_BUILD_ID_PARAM);
	return url + payloadURL.search;
}
const LEADING_SLASHES_RE = /^\/+/;
/** Strip every trailing `/` from a path. */
function withoutTrailingSlashes(path) {
	let end = path.length;
	while (end > 0 && path[end - 1] === "/") end--;
	return path.slice(0, end);
}
/** The same-origin `_payload.json` (or `_payload.js`) URL for a page route, tagged with the build id if one is given. */
function routeToPayloadURL(baseURL, path, buildId, filename = "_payload.json") {
	const request = parseRequestPath(path);
	const base = new URL(withoutTrailingSlashes(baseURL) + "/", "http://localhost");
	const route = withoutTrailingSlashes(request.pathname.replace(LEADING_SLASHES_RE, "")) + "/";
	const url = new URL("./" + (route === "/" ? "" : route) + filename, base);
	url.search = request.search;
	if (buildId) url.searchParams.set(PAYLOAD_BUILD_ID_PARAM, buildId);
	return URL.canParse(baseURL) ? url.href : url.pathname + url.search;
}
/** `url` with its path and query replaced by those of the request path `path`, keeping its origin. */
function withRequestPath(url, path) {
	const request = parseRequestPath(path);
	const target = new URL(url);
	target.pathname = request.pathname;
	target.search = request.search;
	return target;
}

/** Hand the error to the server runtime's error sink, which must never replace the error. */
async function captureError(runtime, event, error, tags) {
	try {
		await runtime.captureError?.(error, {
			event,
			tags
		});
	} catch {}
}

// src/runtime/server/renderer/app.ts
new Set(NUXT_PRERENDER_NO_SSR_ROUTES);
function createServerHead() {
	return createHead(unheadOptions);
}
function createSSRContext(options, event) {
	const url = event.url.pathname + event.url.search + urlHash(event.url);
	const ssrContext = {
		url,
		event: appEvent(event),
		runtimeConfig: options.runtimeConfig(event),
		noSSR: getRequestState(event)?.noSSR || (false),
		head: createServerHead(),
		error: false,
		nuxt: void 0,
		payload: {},
		["~payloadReducers"]: Object.create(null),
		["~captureError"]: (error) => {
			captureError(options, event, error, ["async-data"]);
		},
		modules: /* @__PURE__ */ new Set()
	};
	return ssrContext;
}
/**
* Turn the response the renderer assembled into a web-standard `Response`, carrying the
* headers queued on the event alongside the ones the response names for itself.
*/
function returnRenderResponse(options, event, response) {
	const headers = new Headers(event.res.headers);
	for (const name in response.headers) headers.set(name, response.headers[name]);
	const init = {
		status: response.statusCode ?? event.res.status,
		statusText: response.statusMessage ?? event.res.statusText,
		headers
	};
	if (response.chunks) return options.createDocumentResponse ? options.createDocumentResponse(response.chunks, init) : options.createResponse(response.chunks.join(""), init);
	return options.createResponse(response.body ?? null, init);
}
function setSSRError(ssrContext, error) {
	ssrContext.error = true;
	ssrContext.payload = { error };
	ssrContext.url = error.url;
}

// src/runtime/server/renderer/inline-styles.ts
async function renderInlineStyles(usedModules) {
	const [, styles] = await renderSplitInlineStyles(usedModules, []);
	return styles;
}
function loadStyles(loader) {
	return loader();
}
async function renderSplitInlineStyles(usedModules, entryModules) {
	const styleMap = await getSSRStyles();
	const entry = new Set(entryModules);
	const pending = [];
	for (const mod of usedModules) if (mod in styleMap && styleMap[mod]) {
		const styles = loadStyles(styleMap[mod]);
		pending.push(Array.isArray(styles) ? [entry.has(mod), styles] : styles.then((styles) => [entry.has(mod), styles]));
	}
	const results = await Promise.all(pending);
	const entryStyles = new Set(results.flatMap(([isEntry, styles]) => isEntry ? styles : []));
	const restStyles = new Set(results.flatMap(([isEntry, styles]) => isEntry ? [] : styles.filter((style) => !entryStyles.has(style))));
	return [toStyles(entryStyles), toStyles(restStyles)];
}
function toStyles(styles) {
	return Array.from(styles).map((style) => ({ innerHTML: style }));
}

// src/runtime/server/renderer/islands.ts
const ROOT_NODE_REGEX = new RegExp(`^<${appRootTag}[^>]*>([\\s\\S]*)<\\/${appRootTag}>$`);
/**
* remove the root node from the html body
*/
function getServerComponentHTML(body) {
	return body.match(ROOT_NODE_REGEX)?.[1] || body;
}
const SSR_SLOT_TELEPORT_MARKER = /^uid=([^;]*);slot=(.*)$/;
const SSR_CLIENT_TELEPORT_MARKER = /^uid=([^;]*);client=(.*)$/;
const SSR_CLIENT_SLOT_MARKER = /^island-slot=([^;]*);(.*)$/;
function getSlotIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.slots).length) return;
	const response = {};
	for (const [name, slot] of Object.entries(ssrContext.islandContext.slots)) response[name] = {
		...slot,
		fallback: ssrContext.teleports?.[`island-fallback=${name}`]
	};
	return response;
}
function getClientIslandResponse(ssrContext) {
	if (!ssrContext.islandContext || !Object.keys(ssrContext.islandContext.components).length) return;
	const response = {};
	for (const [clientUid, component] of Object.entries(ssrContext.islandContext.components)) {
		let html = ssrContext.teleports?.[clientUid]?.replaceAll("<!--teleport start anchor-->", "") || "";
		if (!html && ssrContext.teleports) for (const [key, value] of Object.entries(ssrContext.teleports)) {
			const [, , componentUid] = key.match(SSR_CLIENT_TELEPORT_MARKER) ?? [];
			if (componentUid === clientUid) {
				html = value.replaceAll("<!--teleport start anchor-->", "");
				break;
			}
		}
		response[clientUid] = {
			...component,
			html,
			slots: getComponentSlotTeleport(clientUid, ssrContext.teleports ?? {})
		};
	}
	return response;
}
function getComponentSlotTeleport(clientUid, teleports) {
	const entries = Object.entries(teleports);
	const slots = {};
	for (const [key, value] of entries) {
		const match = key.match(SSR_CLIENT_SLOT_MARKER);
		if (match) {
			const [, id, slot] = match;
			if (!slot || clientUid !== id) continue;
			slots[slot] = value;
		}
	}
	return slots;
}
const ISLAND_TELEPORT_ANCHOR_RE = / data-island-uid="([^"]*)" data-island-(component|slot)="([^"]*)"[^>]*>/g;
function replaceIslandTeleports(ssrContext, html) {
	const { teleports, islandContext } = ssrContext;
	if (islandContext || !teleports) return html;
	const contentsByAnchor = /* @__PURE__ */ new Map();
	const uids = /* @__PURE__ */ new Set();
	for (const key in teleports) {
		const matchClientComp = key.match(SSR_CLIENT_TELEPORT_MARKER);
		if (matchClientComp) {
			const [, uid, clientId] = matchClientComp;
			if (!uid || !clientId) continue;
			contentsByAnchor.set(`${uid};component;${clientId}`, teleports[key]);
			uids.add(uid);
			continue;
		}
		const matchSlot = key.match(SSR_SLOT_TELEPORT_MARKER);
		if (matchSlot) {
			const [, uid, slot] = matchSlot;
			if (!uid || !slot) continue;
			contentsByAnchor.set(`${uid};slot;${slot}`, teleports[key]);
			uids.add(uid);
		}
	}
	if (!contentsByAnchor.size) return html;
	const stitch = (html) => {
		const anchorRE = new RegExp(ISLAND_TELEPORT_ANCHOR_RE);
		let out = "";
		let cursor = 0;
		let m;
		while (contentsByAnchor.size && (m = anchorRE.exec(html))) {
			if (!uids.has(m[1])) continue;
			const anchor = `${m[1]};${m[2]};${m[3]}`;
			const content = contentsByAnchor.get(anchor);
			if (content === void 0) continue;
			contentsByAnchor.delete(anchor);
			const end = m.index + m[0].length;
			out += html.slice(cursor, end) + stitch(content);
			cursor = end;
		}
		return cursor ? out + html.slice(cursor) : html;
	};
	return stitch(html);
}

// src/runtime/server/renderer/dev-css.ts
const QUERY_RE = /\?.*$/;
const LEADING_RELATIVE_RE = /^(?:\.\.?\/)+/;
/**
* Whether a dev stylesheet belongs to one of the modules a render actually used.
*
* The dev CSS set is the builder's whole module graph, not a per-request subset, so
* consumers that must not leak unrelated styles (islands) narrow it with the modules
* Vue registered during their own render.
*/
function isStyleOfModule(file, modules) {
	const path = file.replace(QUERY_RE, "");
	for (const mod of modules) {
		const normalized = mod.replace(LEADING_RELATIVE_RE, "");
		if (normalized && (path === normalized || path.endsWith("/" + normalized))) return true;
	}
	return false;
}

// src/runtime/handlers/island.ts
const ISLAND_SUFFIX_RE = /\.json(?:\?.*)?$/;
const handler$1 = defineEventHandler(async (event) => {
	setResponseHeaders(event, {
		"content-type": "application/json;charset=utf-8",
		"x-powered-by": "Nuxt"
	});
	return toResponse(event, await renderIsland(event));
});
function toResponse(event, result) {
	return "raw" in result ? returnIslandResponse(event, result.raw) : result;
}
async function renderIsland(event) {
	const islandContext = await getIslandContext(event);
	const ssrContext = {
		...createSSRContext(rendererInstance.options, toRequestEvent(event)),
		islandContext,
		noSSR: false,
		url: islandContext.url
	};
	const renderer = await rendererInstance.getSSRRenderer();
	const renderResult = await (traceAsync$1("nuxt.island", {
		event,
		ssrContext,
		islandContext
	}, () => renderer.renderToString(ssrContext)) ).catch(async (err) => {
		if (ssrContext["~renderResponse"] && err?.message === "skipping render") return {};
		await ssrContext.nuxt?.hooks.callHook("app:error", err);
		throw err;
	});
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult
	});
	if (ssrContext["~renderResponse"]) {
		const response = ssrContext["~renderResponse"];
		if (response.statusCode && response.statusCode >= 400) throw createError({
			statusCode: response.statusCode,
			statusMessage: response.statusMessage
		});
		return { raw: response };
	}
	if (ssrContext.payload?.error) throw ssrContext.payload.error;
	const inlinedStyles = await renderInlineStyles(ssrContext.modules ?? []);
	if (inlinedStyles.length) ssrContext.head.push({ style: inlinedStyles });
	{
		const { styles } = getRequestDependencies(ssrContext, renderer.rendererContext);
		const link = [];
		const modules = ssrContext.modules ?? [];
		for (const resource of Object.values(styles)) {
			if ("inline" in getQuery(resource.file)) continue;
			if (isStyleOfModule(resource.file, modules)) link.push({
				rel: "stylesheet",
				href: renderer.rendererContext.buildAssetsURL(resource.file),
				crossorigin: ""
			});
		}
		if (link.length) ssrContext.head.push({ link });
	}
	const islandResponse = {
		id: islandContext.id,
		head: mergeIslandHead(ssrContext.head.entries.values()),
		html: getServerComponentHTML(renderResult.html),
		components: getClientIslandResponse(ssrContext),
		slots: getSlotIslandResponse(ssrContext)
	};
	await rendererInstance.hooks.callHook("render:island", islandResponse, {
		event,
		islandContext
	});
	return islandResponse;
}
function returnIslandResponse(event, response) {
	for (const header in response.headers || {}) setResponseHeader(event, header, response.headers[header]);
	if (response.statusCode) setResponseStatus(event, response.statusCode, response.statusMessage);
	return response.body;
}
const ISLAND_PATH_PREFIX = "/__nuxt_island/";
const VALID_COMPONENT_NAME_RE = /^[a-z][\w.-]*$/i;
async function drainBody(event) {
	const stream = getRequestWebStream(event);
	if (!stream) return;
	const reader = stream.getReader();
	try {
		for (;;) {
			const { done } = await reader.read();
			if (done) break;
		}
	} finally {
		reader.releaseLock();
	}
}
async function readGuardedIslandBody(event) {
	const contentLength = Number(getRequestHeader(event, "content-length"));
	if (contentLength > 65536) {
		if (contentLength <= 4194304) await drainBody(event);
		throw createError({
			statusCode: 413,
			statusMessage: "Island request body too large"
		});
	}
	let received = 0;
	let raw = "";
	let overflowed = false;
	const stream = getRequestWebStream(event);
	if (stream) {
		const decoder = new TextDecoder();
		const reader = stream.getReader();
		try {
			for (;;) {
				const { done, value } = await reader.read();
				if (done) break;
				received += value.byteLength;
				if (received > 65536) {
					overflowed = true;
					continue;
				}
				raw += decoder.decode(value, { stream: true });
			}
		} finally {
			reader.releaseLock();
		}
		raw += decoder.decode();
	}
	if (overflowed) throw createError({
		statusCode: 413,
		statusMessage: "Island request body too large"
	});
	if (!raw) return {};
	if (exceedsMaxDepth(raw)) throw createError({
		statusCode: 400,
		statusMessage: "Island request body too deeply nested"
	});
	return destr$1(raw) || {};
}
async function getIslandContext(event) {
	let url = event.path || "";
	url.replace(/\?.*$/, "");
	if (!url.startsWith(ISLAND_PATH_PREFIX)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request path"
	});
	const componentParts = url.substring(15).replace(ISLAND_SUFFIX_RE, "").split("_");
	const hashId = componentParts.length > 1 ? componentParts.pop() : void 0;
	const componentName = componentParts.join("_");
	if (!componentName || !VALID_COMPONENT_NAME_RE.test(componentName)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island component name"
	});
	const rawContext = event.method === "GET" ? getQuery$1(event) : await readGuardedIslandBody(event);
	const serializedProps = typeof rawContext?.props === "string" ? rawContext.props : "{}";
	if (exceedsMaxBytes(serializedProps)) throw createError({
		statusCode: 413,
		statusMessage: "Island request props too large"
	});
	if (exceedsMaxDepth(serializedProps)) throw createError({
		statusCode: 400,
		statusMessage: "Island request props too deeply nested"
	});
	const clientContext = {};
	if (rawContext && typeof rawContext === "object") {
		for (const key in rawContext) if (key !== "props") clientContext[key] = rawContext[key];
	}
	const parsed = destr$1(serializedProps);
	if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request props"
	});
	const parsedProps = filterIslandProps(parsed);
	const expectedHash = getIslandHash({
		name: componentName,
		props: parsedProps,
		context: clientContext
	});
	if (!hashId || hashId !== expectedHash) throw createError({
		statusCode: 400,
		statusMessage: "Invalid island request hash"
	});
	return {
		url: typeof rawContext?.url === "string" ? rawContext.url : "/",
		id: hashId,
		name: componentName,
		props: parsedProps,
		slots: {},
		components: {}
	};
}

const _lazy_n8en1F = () => Promise.resolve().then(function () { return cvStatus_get$1; });
const _lazy_P8a9bG = () => Promise.resolve().then(function () { return repos_get$1; });
const _lazy_HCas9p = () => Promise.resolve().then(function () { return sitemap_xml$1; });
const _lazy_tcOJLS = () => Promise.resolve().then(function () { return renderer$1; });
const _lazy_8rZjYQ = () => Promise.resolve().then(function () { return errorChannel; });

const handlers = [
  { route: '', handler: _WlJyii, lazy: false, middleware: true, method: undefined },
  { route: '/api/cv-status', handler: _lazy_n8en1F, lazy: true, middleware: false, method: "get" },
  { route: '/api/github/repos', handler: _lazy_P8a9bG, lazy: true, middleware: false, method: "get" },
  { route: '/sitemap.xml', handler: _lazy_HCas9p, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_tcOJLS, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_dev__/error/**', handler: _lazy_8rZjYQ, lazy: true, middleware: false, method: undefined },
  { route: '/_i18n/:hash/:locale/messages.json', handler: _G7s3ac, lazy: false, middleware: false, method: undefined },
  { route: '/__nuxt_island/**', handler: handler$1, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_tcOJLS, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const fetchContext = event.node.req?.__unenv__;
      if (fetchContext?._platform) {
        event.context = {
          _platform: fetchContext?._platform,
          // #3335
          ...fetchContext._platform,
          ...event.context
        };
      }
      if (!event.context.waitUntil && fetchContext?.waitUntil) {
        event.context.waitUntil = fetchContext.waitUntil;
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (event.context.waitUntil) {
          event.context.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => callNodeRequestHandler(
    nodeHandler,
    aRequest
  );
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return fetchNodeRequestHandler(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  const hasCacheRules = Object.values(config.nitro.routeRules || {}).some(
    (rule) => rule.cache
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      if (hasCacheRules) {
        handler = withRouteRulesCache(handler);
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function withRouteRulesCache(handler) {
  const cachedHandlers = /* @__PURE__ */ new Map();
  const _handler = eventHandler((event) => {
    const cacheRule = getRouteCacheRule(event);
    if (!cacheRule) {
      return handler(event);
    }
    const key = JSON.stringify(cacheRule);
    let cachedHandler = cachedHandlers.get(key);
    if (!cachedHandler) {
      cachedHandler = cachedEventHandler(handler, {
        group: "nitro/routes",
        ...cacheRule
      });
      cachedHandlers.set(key, cachedHandler);
    }
    return cachedHandler(event);
  });
  if (handler.__resolve__) {
    _handler.__resolve__ = handler.__resolve__;
  }
  if (handler.__websocket__) {
    _handler.__websocket__ = handler.__websocket__;
  }
  return _handler;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins$1) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

if (!globalThis.crypto) {
  globalThis.crypto = nodeCrypto.webcrypto;
}
const { NITRO_NO_UNIX_SOCKET, NITRO_DEV_WORKER_ID } = process.env;
trapUnhandledNodeErrors();
parentPort?.on("message", (msg) => {
  if (msg && msg.event === "shutdown") {
    shutdown();
  }
});
const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));
let listener;
const upgradedSockets = /* @__PURE__ */ new Set();
listen().catch(() => listen(
  true
  /* use random port */
)).catch((error) => {
  console.error("Dev worker failed to listen:", error);
  return shutdown();
});
nitroApp.router.get(
  "/_nitro/tasks",
  defineEventHandler(async (event) => {
    const _tasks = await Promise.all(
      Object.entries(tasks).map(async ([name, task]) => {
        const _task = await task.resolve?.();
        return [name, { description: _task?.meta?.description }];
      })
    );
    return {
      tasks: Object.fromEntries(_tasks),
      scheduledTasks
    };
  })
);
nitroApp.router.use(
  "/_nitro/tasks/:name",
  defineEventHandler(async (event) => {
    const name = getRouterParam(event, "name");
    const payload = {
      ...getQuery$1(event),
      ...await readBody(event).then((r) => r?.payload).catch(() => ({}))
    };
    return await runTask(name, { payload });
  })
);
function listen(useRandomPort = Boolean(
  NITRO_NO_UNIX_SOCKET || process.versions.webcontainer || "Bun" in globalThis && process.platform === "win32"
)) {
  return new Promise((resolve, reject) => {
    try {
      const onListen = () => {
        const address = server.address();
        parentPort?.postMessage({
          event: "listen",
          address: typeof address === "string" ? { socketPath: address } : { host: "127.0.0.1", port: address?.port }
        });
        resolve();
      };
      listener = useRandomPort ? server.listen(0, "127.0.0.1", onListen) : server.listen(getSocketAddress(), onListen);
    } catch (error) {
      reject(error);
    }
  });
}
function getSocketAddress() {
  const socketName = `nitro-worker-${process.pid}-${threadId}-${NITRO_DEV_WORKER_ID}-${Math.round(Math.random() * 1e4)}.sock`;
  if (process.platform === "win32") {
    return join(String.raw`\\.\pipe`, socketName);
  }
  if (process.platform === "linux") {
    const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
    if (nodeMajor >= 20) {
      return `\0${socketName}`;
    }
  }
  return join(tmpdir(), socketName);
}
async function shutdown() {
  server.closeAllConnections?.();
  for (const socket of upgradedSockets) {
    socket.destroy();
  }
  await Promise.all([
    new Promise((resolve) => listener?.close(resolve)),
    nitroApp.hooks.callHook("close").catch(console.error)
  ]);
  parentPort?.postMessage({ event: "exit" });
}

const errorChannel$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ERROR_CHANNEL_BROADCAST: ERROR_CHANNEL_BROADCAST,
  ERROR_CHANNEL_ENV: ERROR_CHANNEL_ENV,
  clearErrorReport: clearErrorReport,
  createErrorReport: createErrorReport,
  getErrorChannelPath: getErrorChannelPath,
  observeDevError: observeDevError,
  publishDevLog: publishDevLog,
  publishDevProgress: publishDevProgress,
  publishErrorReport: publishErrorReport,
  renderDevBadge: renderDevBadge$1,
  serializeErrorCause: serializeErrorCause,
  shouldForwardReports: shouldForwardReports,
  useErrorChannel: useErrorChannel
}, Symbol.toStringTag, { value: 'Module' }));

// src/runtime/server/renderer/error-template.ts
const _messages = {
	"appName": "Nuxt",
	"status": 500,
	"statusText": "Internal server error",
	"description": "This page is temporarily unavailable.",
	"refresh": "Refresh this page"
};
const template = (messages) => {
	messages = {
		..._messages,
		...messages
	};
	return "<!DOCTYPE html><html lang=\"en\"><head><title>" + escapeHtml(messages.status) + " - " + escapeHtml(messages.statusText) + " | " + escapeHtml(messages.appName) + "</title><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1,minimum-scale=1\" name=\"viewport\"><style>*,:after,:before{box-sizing:border-box;border-style:solid;border-width:0;border-color:var(--un-default-border-color,#e5e7eb);--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 #0000;--un-ring-shadow:0 0 #0000;--un-shadow-inset: ;--un-shadow:0 0 #0000;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:#93c5fd80;--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }:after,:before{--un-content:\"\"}html{-webkit-text-size-adjust:100%;tab-size:4;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}h1,h2,p{margin:0}.grid{display:grid}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.place-content-center{place-content:center}.overflow-hidden{overflow:hidden}.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255/var(--un-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.text-center{text-align:center}.text-\\[56px\\]{font-size:56px}.text-2xl{font-size:1.5rem;line-height:2rem}.text-neutral-500{--un-text-opacity:1;color:rgb(115 115 115/var(--un-text-opacity))}.text-neutral-950{--un-text-opacity:1;color:rgb(10 10 10/var(--un-text-opacity))}.font-medium{font-weight:500}.font-semibold{font-weight:600}.leading-none{line-height:1}.tracking-wide{letter-spacing:.025em}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.tabular-nums{--un-numeric-spacing:tabular-nums;font-variant-numeric:var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media(prefers-color-scheme:dark){.dark\\:bg-neutral-950{--un-bg-opacity:1;background-color:rgb(10 10 10/var(--un-bg-opacity))}.dark\\:text-white{--un-text-opacity:1;color:rgb(255 255 255/var(--un-text-opacity))}}@media(width>=640px){.sm\\:text-\\[72px\\]{font-size:72px}.sm\\:text-3xl{font-size:1.875rem;line-height:2.25rem}}</style></head><body class=\"antialiased bg-white dark:bg-neutral-950 dark:text-white font-sans grid min-h-screen overflow-hidden place-content-center text-neutral-950 tracking-wide\"><div class=\"max-w-520px text-center\"><h1 class=\"font-medium leading-none mb-4 sm:text-[72px] tabular-nums text-[56px]\">" + escapeHtml(messages.status) + "</h1><h2 class=\"font-semibold mb-2 sm:text-3xl text-2xl\">" + escapeHtml(messages.statusText) + "</h2><p class=\"mb-4 px-2 text-md text-neutral-500\">" + escapeHtml(messages.description) + "</p></div></body></html>";
};

const errorTemplate = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  template: template
}, Symbol.toStringTag, { value: 'Module' }));

const entry = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: viteNodeEntry_mjs
}, Symbol.toStringTag, { value: 'Module' }));

const manifest = () => viteNodeFetch.getManifest();

const manifest$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: manifest
}, Symbol.toStringTag, { value: 'Module' }));

const styles = {};
const inlinedCSS = {};

const styles$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: styles,
  inlinedCSS: inlinedCSS
}, Symbol.toStringTag, { value: 'Module' }));

const cvStatus_get = defineEventHandler(() => existsSync(join(process.cwd(), "public/files/Ahmed-Amasha-CV.pdf")));

const cvStatus_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cvStatus_get
}, Symbol.toStringTag, { value: 'Module' }));

const repos_get = defineCachedEventHandler(async () => {
  const cfg = useRuntimeConfig();
  try {
    const repos = await $fetch(`https://api.github.com/users/${cfg.public.githubUser}/repos`, {
      query: { per_page: 100, sort: "updated" },
      headers: { Accept: "application/vnd.github+json", "User-Agent": "portfolio", ...cfg.githubToken ? { Authorization: `Bearer ${cfg.githubToken}` } : {} }
    });
    return repos.filter((r) => !r.private).map((r) => {
      var _a;
      return {
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        updatedAt: r.pushed_at,
        url: r.html_url,
        topics: (_a = r.topics) != null ? _a : [],
        homepage: r.homepage
      };
    });
  } catch {
    return [];
  }
}, { maxAge: 3600, swr: true });

const repos_get$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: repos_get
}, Symbol.toStringTag, { value: 'Module' }));

const p = (repo, categories, stack = [], images = []) => ({ slug: repo.toLowerCase(), repo, categories, stack, images });
const projects = [
  p("my-clinic", ["healthcare", "management"], [], ["dashboard.webp", "frontend.webp", "mobile.webp", "gallery-01.webp", "gallery-02.webp"]),
  p("mousatech-academy", ["education", "web"], [], ["dashboard.webp", "frontend.webp"]),
  p("dermovive-demo", ["ecommerce", "web"], [], ["homepage.webp", "product-page.webp"]),
  p("hospital-sys", ["healthcare", "management"], [], ["dashboard.webp", "frontend.webp"]),
  p("sncfiro", ["web"]),
  p("pospro", ["management", "ecommerce"], [], ["dashboard.webp", "reports.webp"]),
  p("coretech", ["business", "web"]),
  p("MousaTech-Agency", ["business", "web"]),
  p("digpro", ["web"]),
  p("Ahmed-Amasha", ["web"]),
  p("my-portfolio", ["ui", "web"]),
  p("theqa", ["web"]),
  p("neogym", ["management", "web"], [], ["dashboard.webp", "frontend.webp"]),
  p("shendygrouppcrm", ["management"]),
  p("neopos", ["management", "ecommerce"]),
  p("linkapp", ["web"])
];

const sitemap_xml = defineEventHandler(async (event) => {
  const cfg = useRuntimeConfig();
  const base = cfg.public.siteUrl.replace(/\/$/, "");
  let slugs = projects.map((p) => p.slug);
  try {
    slugs = (await $fetch("/projects", { baseURL: cfg.public.apiBase, timeout: 4e3 })).data.map((p) => p.slug);
  } catch {
  }
  const paths = ["", "/about", "/projects", "/skills", "/contact", ...slugs.map((s) => `/projects/${s}`)];
  setHeader(event, "content-type", "application/xml");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.flatMap((p) => [`${base}${p}`, `${base}/ar${p}`]).map((u) => `<url><loc>${u}</loc></url>`).join("")}</urlset>`;
});

const sitemap_xml$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sitemap_xml
}, Symbol.toStringTag, { value: 'Module' }));

// src/app/internal/tracing.ts
let _channels;
function getChannel(name) {
	_channels ??= {};
	if (name in _channels) return _channels[name];
	const dc = globalThis.process?.getBuiltinModule?.("node:diagnostics_channel");
	const channel = dc?.tracingChannel ? dc.tracingChannel(name) : null;
	_channels[name] = channel;
	return channel;
}
function traceAsync(name, context, fn) {
	const channel = getChannel(name);
	if (!channel || channel.hasSubscribers === false) return fn();
	return channel.tracePromise(() => Promise.resolve(fn()), context);
}

// src/runtime/server/renderer/payload.ts
function renderPayloadResponse(ssrContext, event) {
	return {
		body: encodeForwardSlashes(stringify(sortContainers(splitPayload(ssrContext).payload), ssrContext["~payloadReducers"])) ,
		statusCode: event.res.status,
		statusMessage: event.res.statusText,
		headers: {
			"content-type": "application/json;charset=utf-8" ,
			"x-powered-by": "Nuxt"
		}
	};
}
function renderPayloadJsonScript(opts) {
	const contents = opts.data ? encodeForwardSlashes(stringify(sortContainers(omitEmptyContainers(opts.data)), opts.ssrContext["~payloadReducers"])) : "";
	warnOnLargePayload(opts.ssrContext, opts.data, contents.length);
	const payload = {
		"type": "application/json",
		"innerHTML": contents,
		"data-nuxt-data": appId,
		"data-ssr": !(opts.ssrContext.noSSR)
	};
	payload.id = "__NUXT_DATA__";
	if (opts.src) payload["data-src"] = opts.src;
	const config = uneval(opts.ssrContext.config);
	return [payload, { innerHTML: `window.__NUXT__={};window.__NUXT__.config=${config}` }];
}
const PAYLOAD_CONTAINERS = [
	"data",
	"state",
	"once",
	"_errors"
];
/** The client creates these containers itself, so empty ones are left out of the document. */
function omitEmptyContainers(data) {
	let result = data;
	for (const key of PAYLOAD_CONTAINERS) {
		const value = data[key];
		if (value && typeof value === "object" && (value instanceof Set ? value.size === 0 : Object.keys(value).length === 0)) {
			if (result === data) result = { ...data };
			delete result[key];
		}
	}
	return result;
}
/** Keys are added in the order async work settles, so they are sorted to keep the output stable. */
function sortContainers(data) {
	const result = { ...data };
	for (const key of PAYLOAD_CONTAINERS) {
		const value = data[key];
		if (value instanceof Set) result[key] = new Set([...value].sort());
		else if (value && typeof value === "object") result[key] = withSortedKeys(value);
	}
	return result;
}
function withSortedKeys(container) {
	const raw = toRaw(container);
	const sorted = {};
	for (const key of Object.keys(raw).sort()) sorted[key] = raw[key];
	if (!isReactive(container)) return sorted;
	return isShallow(container) ? shallowReactive(sorted) : reactive(sorted);
}
/**
* Encode forward slashes as unicode escape sequences to prevent
* Google from treating them as internal links and trying to crawl them.
* @see https://github.com/nuxt/nuxt/issues/24175
*/
function encodeForwardSlashes(str) {
	return str.replaceAll("/", "\\u002F");
}
const PAYLOAD_SIZE_WARNING_BYTES = 102400;
const PAYLOAD_WARNING_CACHE_SIZE = 100;
const warnedPayloadURLs = /* @__PURE__ */ new Set();
function formatPayloadSize(bytes) {
	return `${(bytes / 1024).toFixed(1)} kB`;
}
function getPayloadKeySizes(data, reducers) {
	const sizes = [];
	for (const key in data) try {
		sizes.push([key, stringify(data[key], reducers).length]);
	} catch {}
	return sizes.sort((a, b) => b[1] - a[1]);
}
function warnOnLargePayload(ssrContext, data, size) {
	if (size <= PAYLOAD_SIZE_WARNING_BYTES || warnedPayloadURLs.has(ssrContext.url)) return;
	if (warnedPayloadURLs.size >= PAYLOAD_WARNING_CACHE_SIZE) warnedPayloadURLs.delete(warnedPayloadURLs.values().next().value);
	warnedPayloadURLs.add(ssrContext.url);
	const keys = getPayloadKeySizes(data?.data, ssrContext["~payloadReducers"]).slice(0, 5).map(([key, keySize]) => `\`${key}\` (${formatPayloadSize(keySize)})`).join("\n  - ");
	rendererDiagnostics.NUXT_E8006({
		path: ssrContext.url,
		size: formatPayloadSize(size),
		keys: keys || void 0
	});
}
function splitPayload(ssrContext) {
	const { data, prerenderedAt, prefetchLinks, ...initial } = ssrContext.payload;
	const payload = {
		data,
		prerenderedAt,
		buildId: ssrContext.runtimeConfig.app.buildId
	};
	if (prefetchLinks?.length) payload.prefetchLinks = prefetchLinks;
	return {
		initial: {
			...initial,
			prerenderedAt
		},
		payload
	};
}

// src/runtime/server/renderer/csp-nonce.ts
const SCRIPT_NONCE_RE = /<script(?=[\s>])[^>]*?\snonce="([\w+/\-=]*)"/;
function extractCspNonce(headTags) {
	return SCRIPT_NONCE_RE.exec(headTags)?.[1] || void 0;
}

// src/runtime/server/renderer/document.ts
const APP_TELEPORT_ID = appTeleportAttrs.id ? `#${appTeleportAttrs.id}` : void 0;
const APP_TELEPORT_OPEN_TAG = APP_TELEPORT_ID ? `<${appTeleportTag}${propsToString(appTeleportAttrs)}>` : "";
const APP_TELEPORT_CLOSE_TAG = APP_TELEPORT_ID ? `</${appTeleportTag}>` : "";
/** The app teleport target, holding what the render teleported into it. */
function renderAppTeleports(ssrContext) {
	return APP_TELEPORT_OPEN_TAG + (APP_TELEPORT_ID ? ssrContext.teleports?.[APP_TELEPORT_ID] ?? "" : "") + APP_TELEPORT_CLOSE_TAG;
}
/** The dev error badge for the head of a page, unless it runs no scripts. */
function renderDevBadge(runtime, event, noScripts, nonce) {
	if (!noScripts) return runtime.renderDevBadge?.(event, nonce).catch(() => void 0);
}
/** Re-render the dev badge with a CSP nonce added by a `render:html` listener. */
async function stampDevBadgeNonce(runtime, event, context, badge, nonce) {
	const rendered = badge?.trim();
	const index = rendered && !nonce ? context.head.findIndex((chunk) => chunk.includes(rendered)) : -1;
	if (!rendered || index === -1) return;
	const hookNonce = extractCspNonce(joinTags([
		...context.head,
		...context.bodyPrepend,
		...context.bodyAppend,
		...context.body
	]));
	const stamped = hookNonce ? (await renderDevBadge(runtime, event, false, hookNonce))?.trim() : void 0;
	if (stamped) context.head[index] = context.head[index].replace(rendered, () => stamped);
}
function normalizeChunks(chunks) {
	const result = [];
	for (const _chunk of chunks) {
		const chunk = _chunk?.trim();
		if (chunk) result.push(chunk);
	}
	return result;
}
function joinTags(tags) {
	return tags.join("");
}
function joinAttrs(chunks) {
	if (chunks.length === 0) return "";
	return " " + chunks.join(" ");
}
/** The document up to and including `bodyPrepend`. */
function renderDocumentOpen(html) {
	return `<!DOCTYPE html><html${joinAttrs(html.htmlAttrs)}><head>${joinTags(html.head)}</head><body${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}`;
}
function renderHTMLDocument(html) {
	return renderDocumentOpen(html) + `${joinTags(html.body)}${joinTags(html.bodyAppend)}</body></html>`;
}
/** The document with the app markup kept as the chunks it was rendered in. */
function renderHTMLDocumentChunks(html, appChunks) {
	return [
		renderDocumentOpen(html),
		...appChunks,
		`${html.body[1]}${joinTags(html.bodyAppend)}</body></html>`
	];
}

/** A stylesheet Vite serves inline in development, which needs no link. */
function isDevInlineStyle(file) {
	return "inline" in getQuery(file);
}
function pushEntryScripts(ssrContext, scripts, rendererContext, tagPosition = "head") {
	ssrContext.head.push({ script: Object.values(scripts).map((resource) => ({
		type: resource.module ? "module" : null,
		src: rendererContext.buildAssetsURL(resource.file),
		defer: resource.module ? null : true,
		tagPosition,
		crossorigin: ""
	})) });
}
function pushPayloadPreload(ssrContext, href) {
	ssrContext.head.push({ link: [{
		rel: "preload",
		as: "fetch",
		crossorigin: "anonymous",
		href
	} ] });
}
/**
* The payload, inlined in full or split into the initial state and an external `_payload.json`.
* `prefetchLinks` is only read from a `_payload.json` another page prefetched, so an inlined
* payload leaves it out.
*/
function pushPayloadScript(ssrContext, inline, src, routeOptions) {
	const data = inline ? withoutPrefetchLinks(ssrContext.payload) : splitPayload(ssrContext).initial;
	ssrContext.head.push({ script: renderPayloadJsonScript({
		ssrContext,
		data,
		src: inline ? void 0 : src
	})  }, {
		tagPosition: "bodyClose",
		tagPriority: "high"
	});
}
function withoutPrefetchLinks(payload) {
	if (!payload.prefetchLinks) return payload;
	const { prefetchLinks: _, ...rest } = payload;
	return rest;
}
/**
* Routes served without scripts navigate with full-page loads. This emits the
* declarative navigation hints that speed those up, on both the pages served
* without scripts (a blanket rule over same-origin links) and scripted pages
* that may link to them (rules scoped to the `noScripts` route patterns):
*
* - speculation rules, so supporting browsers prefetch and prerender the
*   target ahead of the navigation;
* - when view transitions are enabled, an opt-in to same-origin cross-document
*   view transitions, animating the navigation without a client runtime (the
*   client-side `startViewTransition` plugin is not shipped).
*
* Both tags are declarative and execute no JavaScript.
*/
function pushNoScriptsHints(ssrContext, noScripts) {
	if (noScripts) pushSpeculationRulesScript(ssrContext, NUXT_PAGE_PATTERNS.length ? NUXT_PAGE_PATTERNS : ["/*"]);
	else if (NUXT_NO_SCRIPTS_PATTERNS.length) pushSpeculationRulesScript(ssrContext, NUXT_NO_SCRIPTS_PATTERNS);
	else return;
}
function pushSpeculationRulesScript(ssrContext, patterns) {
	const rules = patterns.map((href_matches) => ({
		where: { href_matches },
		eagerness: "moderate"
	}));
	ssrContext.head.push({ script: [{
		tagPosition: "head",
		type: "speculationrules",
		innerHTML: {
			prefetch: rules,
			prerender: rules
		}
	}] });
}
/** Prefetch hints in an inert `<template>`, which the client moves into the head to activate them. */
function renderDeferredPrefetchHints(links) {
	let html = "";
	for (const link of links) html += `<link${propsToString("crossorigin" in link && link.crossorigin === "" ? {
		...link,
		crossorigin: true
	} : link)}>`;
	return html && `<template data-nuxt-prefetch>${html}</template>`;
}

// src/runtime/server/renderer/index.ts
const PAYLOAD_URL_RE = /^[^?]*\/_payload.json(?:\?.*)?$/ ;
const PAYLOAD_FILENAME = "_payload.json" ;
/**
* Create a Nuxt SSR renderer, returning a web-standard handler for the requests a Nuxt
* app serves from its pages.
*
* Everything the renderer reads belongs to the renderer it was created for, so a bundle
* may create as many as it needs. Pass an instance from `createRendererInstance()` to
* render against the artifacts already loaded for another renderer.
*/
function createNuxtRenderer(optionsOrInstance) {
	const instance = "getRenderer" in optionsOrInstance ? optionsOrInstance : createRendererInstance(optionsOrInstance);
	return { fetch: (event) => traceAsync("nuxt.request", { event: appEvent(event) }, () => fetch(instance, event))  };
}
function fetch(instance, event) {
	const runtime = instance.options;
	if (runtime.renderIsland && event.url.pathname.startsWith("/__nuxt_island/")) return Promise.resolve(runtime.renderIsland(event));
	const isErrorRoute = event.url.pathname.startsWith("/__nuxt_error");
	if (isErrorRoute && !getRequestState(event)?.["~rendering-error"]) {
		const error = runtime.createError({
			status: 404,
			statusText: "Page Not Found: /__nuxt_error"
		});
		return Promise.reject(error);
	}
	const ssrError = isErrorRoute ? getQuery(event.url.href) : null;
	const render = () => renderRoute(instance, event, ssrError).then((response) => returnRenderResponse(runtime, event, response));
	const rendering = render();
	return rendering;
}
async function renderRoute(instance, event, ssrError) {
	const runtime = instance.options;
	const hooks = instance.hooks;
	const hookEvent = appEvent(event);
	runtime.prerender?.payloadCache;
	const ssrContext = createSSRContext(runtime, event);
	ssrContext.head.push(appHead);
	if (ssrError) {
		const status = ssrError.status || ssrError.statusCode;
		if (status) ssrError.status = ssrError.statusCode = Number.parseInt(status);
		if (typeof ssrError.data === "string") try {
			ssrError.data = destr(ssrError.data);
		} catch {}
		if (typeof ssrError.cause === "string") ssrError.cause = destr(ssrError.cause);
		setSSRError(ssrContext, ssrError);
	}
	const routeOptions = runtime.getRouteRules(event);
	const NO_SCRIPTS = !!routeOptions.noScripts;
	const DEFER_PREFETCH = !NO_SCRIPTS;
	if (routeOptions.ssr === false && true) ssrContext.noSSR = true;
	if (ssrContext.noSSR) for (const input of appComponentHead) ssrContext.head.push(input);
	const payloadExtraction = !ssrContext.noSSR && !ssrError && !!((routeOptions.isr || routeOptions.cache));
	const payloadInline = !payloadExtraction || NUXT_PAYLOAD_INLINE;
	const isRenderingPayload = (payloadExtraction || routeOptions.prerender) && PAYLOAD_URL_RE.test(ssrContext.url);
	if (isRenderingPayload) {
		ssrContext.url = payloadRequestToRoute(ssrContext.url, PAYLOAD_FILENAME);
		event.url = withRequestPath(event.url, ssrContext.url);
		getPayloadCacheKey(ssrContext.url);
	}
	const payloadURL = payloadExtraction ? buildPayloadURL(ssrContext, !!(routeOptions.isr || routeOptions.cache)) : void 0;
	const renderer = await instance.getRenderer(ssrContext);
	const { rendererContext } = renderer;
	const canStream = NUXT_SSR_STREAMING;
	const renderRouteContext = {
		canStream,
		prefersStream: false
	};
	await hooks.callHook("render:route", renderRouteContext, { event: hookEvent });
	const _rendered = await (traceAsync("nuxt.render", {
		event: hookEvent,
		ssrContext,
		streaming: false
	}, () => renderer.renderToString(ssrContext)) ).catch(async (error) => {
		if ((ssrContext["~renderResponse"] || ssrContext._renderResponse) && error.message === "skipping render") return {};
		const _err = !ssrError && ssrContext.payload?.error || error;
		await ssrContext.nuxt?.hooks.callHook("app:error", _err);
		throw _err;
	});
	const renderedHtml = _rendered.html;
	const [entryInlinedStyles, componentInlinedStyles] = [[], []];
	await ssrContext.nuxt?.hooks.callHook("app:rendered", {
		ssrContext,
		renderResult: _rendered
	});
	if (ssrContext["~renderResponse"] || ssrContext._renderResponse) return ssrContext["~renderResponse"] || ssrContext._renderResponse;
	if (ssrContext.payload?.error && !ssrError) throw ssrContext.payload.error;
	if (isRenderingPayload) {
		const response = renderPayloadResponse(ssrContext, event);
		return response;
	}
	if (!ssrError && !ssrContext.error) runtime.onRenderSuccess?.(event);
	const { styles, scripts } = getRequestDependencies(ssrContext, rendererContext);
	pushNoScriptsHints(ssrContext, NO_SCRIPTS);
	if (payloadExtraction && !payloadInline && !NO_SCRIPTS) pushPayloadPreload(ssrContext, payloadURL);
	if (entryInlinedStyles.length) ssrContext.head.push({ style: entryInlinedStyles });
	const link = [];
	const inlinedHrefs = [];
	for (const resource of Object.values(styles)) {
		if (isDevInlineStyle(resource.file)) continue;
		link.push({
			rel: "stylesheet",
			href: rendererContext.buildAssetsURL(resource.file),
			crossorigin: ""
		});
	}
	if (!NO_SCRIPTS) for (const href of inlinedHrefs) link.push({
		rel: "stylesheet",
		href,
		disabled: true
	});
	if (link.length) ssrContext.head.push({ link });
	if (componentInlinedStyles.length) ssrContext.head.push({ style: componentInlinedStyles });
	const dependencyOptions = {
		exclude: ssrContext["~lazyHydratedModules"]?.size ? ssrContext["~lazyHydratedModules"] : void 0,
		scripts: !NO_SCRIPTS
	};
	const excludeHrefs = new Set(link.map((l) => l.href));
	for (const href of inlinedHrefs) excludeHrefs.add(href);
	for (const resource of Object.values(scripts)) excludeHrefs.add(rendererContext.buildAssetsURL(resource.file));
	for (const id of ssrContext["~neverHydratedModules"] ?? []) {
		const file = (rendererContext.manifest ?? rendererContext.precomputed?.modules)?.[id]?.file;
		if (file) excludeHrefs.add(rendererContext.buildAssetsURL(file));
	}
	const hints = [];
	const deferredHints = [];
	let preloadContext = ssrContext;
	for (const l of getPreloadLinks(preloadContext, rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) hints.push(l);
	for (const l of getPrefetchLinks(preloadContext, rendererContext, dependencyOptions)) if (!excludeHrefs.has(l.href)) (DEFER_PREFETCH ? deferredHints : hints).push(l);
	if (hints.length) ssrContext.head.push({ link: hints });
	if (!NO_SCRIPTS) pushPayloadScript(ssrContext, payloadInline, payloadURL);
	if (!routeOptions.noScripts) pushEntryScripts(ssrContext, scripts, rendererContext, "head");
	const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = renderSSRHead(ssrContext.head, renderSSRHeadOptions);
	const headNonce = extractCspNonce(headTags) ;
	const devBadge = await renderDevBadge(runtime, event, NO_SCRIPTS, headNonce) ;
	const htmlContext = {
		htmlAttrs: htmlAttrs ? [htmlAttrs] : [],
		head: normalizeChunks([
			headTags,
			renderDeferredPrefetchHints(deferredHints),
			devBadge
		]),
		bodyAttrs: bodyAttrs ? [bodyAttrs] : [],
		bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
		body: [replaceIslandTeleports(ssrContext, _rendered.html) , renderAppTeleports(ssrContext)],
		bodyAppend: [bodyTags]
	};
	await hooks.callHook("render:html", htmlContext, { event: hookEvent });
	await stampDevBadgeNonce(runtime, event, htmlContext, devBadge, headNonce);
	let documentHtml;
	let replaced = false;
	const documentContext = {
		get html() {
			return documentHtml ??= renderHTMLDocument(htmlContext);
		},
		set html(value) {
			documentHtml = value;
			replaced = true;
		}
	};
	await hooks.callHook("render:document", documentContext, { event: hookEvent });
	const response = {
		statusCode: event.res.status,
		statusMessage: event.res.statusText,
		headers: {
			"content-type": "text/html;charset=utf-8",
			"x-powered-by": "Nuxt"
		}
	};
	const chunks = ssrContext["~htmlChunks"];
	if (!replaced && runtime.createDocumentResponse && chunks && htmlContext.body.length === 2 && htmlContext.body[0] === renderedHtml) return {
		...response,
		chunks: renderHTMLDocumentChunks(htmlContext, chunks)
	};
	return {
		...response,
		body: documentContext.html
	};
}
function buildPayloadURL(ssrContext, cached) {
	const baseURL = ssrContext.runtimeConfig.app.cdnURL || ssrContext.runtimeConfig.app.baseURL;
	return routeToPayloadURL(baseURL, ssrContext.url, cached ? void 0 : ssrContext.runtimeConfig.app.buildId, PAYLOAD_FILENAME);
}
function getPayloadCacheKey(url) {
	const { pathname, search } = new URL(url, "http://localhost");
	return (pathname === "/" ? "/" : pathname.replace(/\/$/, "")) + (search ? encodeURIComponent(search) : "") + ".json";
}

// src/runtime/server/renderer/encode.ts
const hasBuffer = typeof Buffer !== "undefined";
const textEncoder = new TextEncoder();
const MIN_SCRATCH_SIZE = 65536;
const MAX_SCRATCH_SIZE = 4194304;
const MIN_TRANSCODE_LENGTH = 2048;
const NON_LATIN1_RE = /[^\0-\xFF]/;
let scratch;
let utf16Scratch;
const nodeBuffer = hasBuffer && hasSlowUtf8Write() ? resolveTranscoder() : void 0;
function hasSlowUtf8Write() {
	const versions = globalThis.process?.versions;
	if (!versions?.node || versions.bun || versions.deno) return false;
	const [major = 0, minor = 0] = String(versions.node).split(".").map(Number);
	return major < 26 || major === 26 && minor < 8;
}
function resolveTranscoder() {
	try {
		const mod = globalThis.process?.getBuiltinModule?.("node:buffer");
		if (mod?.transcode && mod.transcode(Buffer.from("→", "utf16le"), "utf16le", "utf8").equals(Buffer.from("→"))) return mod;
	} catch {}
}
function writeUtf8(target, chunk, offset) {
	if (nodeBuffer && chunk.length >= MIN_TRANSCODE_LENGTH && NON_LATIN1_RE.test(chunk)) {
		const size = chunk.length * 2;
		if (!utf16Scratch || utf16Scratch.length < size) utf16Scratch = Buffer.allocUnsafeSlow(Math.max(size, (utf16Scratch?.length ?? 0) * 2));
		try {
			const bytes = nodeBuffer.transcode(utf16Scratch.subarray(0, utf16Scratch.write(chunk, 0, "utf16le")), "utf16le", "utf8");
			target.set(bytes, offset);
			return bytes.length;
		} catch {} finally {
			if (utf16Scratch.length > MAX_SCRATCH_SIZE) utf16Scratch = void 0;
		}
	}
	return target.write(chunk, offset);
}
/**
* Encode a rendered document, given as chunks, into one UTF-8 buffer. Each chunk is written
* separately, so a non-Latin1 character only affects the encoding speed of its own chunk.
*
* Documents are encoded through a reused buffer of at most 4MiB; larger documents get a
* buffer of their own, which is not retained.
*/
function encodeDocument(chunks) {
	let length = 0;
	for (const chunk of chunks) length += chunk.length;
	const needed = length * 3;
	if (needed > MAX_SCRATCH_SIZE) return hasBuffer ? encodeExact(chunks) : encodeVia(chunks, new Uint8Array(needed));
	if (!scratch || scratch.length < needed) {
		const size = Math.min(MAX_SCRATCH_SIZE, Math.max(needed, MIN_SCRATCH_SIZE, (scratch?.length ?? 0) * 2));
		scratch = hasBuffer ? Buffer.allocUnsafeSlow(size) : new Uint8Array(size);
	}
	return encodeVia(chunks, scratch);
}
/** Write each chunk in turn, rewriting a high surrogate that ends a chunk with the chunk after it. */
function writeChunks(chunks, write) {
	let offset = 0;
	let carry = "";
	for (let chunk of chunks) {
		if (carry) {
			chunk = carry + chunk;
			carry = "";
		}
		offset += write(chunk, offset);
		const last = chunk.charCodeAt(chunk.length - 1);
		if (last >= 55296 && last <= 56319) {
			offset -= 3;
			carry = chunk.slice(-1);
		}
	}
	if (carry) offset += write(carry, offset);
	return offset;
}
function encodeVia(chunks, target) {
	if (hasBuffer) {
		const offset = writeChunks(chunks, (chunk, offset) => writeUtf8(target, chunk, offset));
		return Buffer.from(target.subarray(0, offset));
	}
	const offset = writeChunks(chunks, (chunk, offset) => textEncoder.encodeInto(chunk, target.subarray(offset)).written);
	return target.slice(0, offset);
}
function encodeExact(chunks) {
	let size = 0;
	for (const chunk of chunks) size += Buffer.byteLength(chunk);
	const bytes = Buffer.allocUnsafe(size);
	return bytes.subarray(0, writeChunks(chunks, (chunk, offset) => writeUtf8(bytes, chunk, offset)));
}

const renderer = createNuxtRenderer(rendererInstance);
const handler = defineRenderHandler(async (event) => {
	const response = await renderer.fetch(toRequestEvent(event));
	for (const [name, value] of response.headers) {
		if (name === "set-cookie") continue;
		setResponseHeader(event, name, value);
	}
	const { chunks } = response;
	return {
		body: chunks ? toDocumentBody(event, chunks) : response.body,
		statusCode: response.status,
		statusMessage: response.statusText || void 0,
		headers: createResponseHeaderRecord(event.node.res)
	};
});
/**
* `render:response` listeners and nitro's cached handlers both expect a string body, so the
* document is only encoded to bytes when neither will read it.
*/
function toDocumentBody(event, chunks) {
	const listeners = useNitroApp().hooks._hooks?.["render:response"];
	if (event.context.cache || listeners?.length) return chunks.join("");
	return encodeDocument(chunks);
}

const renderer$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: handler
}, Symbol.toStringTag, { value: 'Module' }));

// src/runtime/server/dev/peer.ts
/**
* Peer checks shared by the dev-only endpoints that disclose local state.
*
* @module nuxt/internal/dev/peer
*/
/** Header the dev server in front sets, to {@link DEV_PEER_TOKEN_ENV}, on requests from a loopback peer. */
const DEV_PEER_HEADER = "x-nuxt-dev-peer";
/** Environment variable holding the value the dev server in front sets {@link DEV_PEER_HEADER} to. */
const DEV_PEER_TOKEN_ENV = "NUXT_DEV_PEER_TOKEN";
/**
* Whether the dev server in front vouched for a request as coming from a loopback peer.
* The app's own socket only ever sees that server, so its address says nothing about the client.
*/
function isVouchedLoopbackPeer(header) {
	const token = globalThis.process?.env[DEV_PEER_TOKEN_ENV];
	if (!token || typeof header !== "string" || header.length !== token.length) return false;
	let difference = 0;
	for (let i = 0; i < token.length; i++) difference |= token.charCodeAt(i) ^ header.charCodeAt(i);
	return difference === 0;
}

// src/runtime/handlers/error-channel.ts
/**
* Serves the live error channel: the SSE stream, report lookups and "open in editor".
*
* Trust follows the socket the dev server in front accepted, since a request's origin
* headers are forgeable over a direct connection.
*/
var error_channel_default = defineEventHandler(async (event) => {
	const channel = await useErrorChannel();
	const trusted = isVouchedLoopbackPeer(getRequestHeader(event, DEV_PEER_HEADER));
	return await channel.fetchHandler(toWebRequest(event), { trusted }) ?? new Response("Not Found", { status: 404 });
});

const errorChannel = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: error_channel_default
}, Symbol.toStringTag, { value: 'Module' }));
//# sourceMappingURL=index.mjs.map
