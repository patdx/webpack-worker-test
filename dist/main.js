/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/index.js':
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.a(
          module,
          async (__webpack_handle_async_dependencies__) => {
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var worker_threads__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
              /*! worker_threads */ 'worker_threads'
            );
            /* harmony import */ var worker_threads__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
              worker_threads__WEBPACK_IMPORTED_MODULE_0__
            );
            // https://github.com/GoogleChromeLabs/worker-plugin/blob/master/src/loader.js
            // https://github.com/webpack/webpack/blob/923be31fba88468b70499428e1f2b83aad49af84/lib/dependencies/WorkerPlugin.js

            await __webpack_require__
              .e(/*! import() */ 'src_shared_js')
              .then(
                __webpack_require__.bind(
                  __webpack_require__,
                  /*! ./shared */ './src/shared.js'
                )
              )
              .then((m) => m.hello());
            const createWorker = () =>
              new worker_threads__WEBPACK_IMPORTED_MODULE_0__.Worker(
                new URL(
                  /* worker import */ __webpack_require__.p +
                    __webpack_require__.u('src_worker_js'),
                  __webpack_require__.b
                )
              );

            const Bree = await Promise.all(
              /*! import() */ [
                __webpack_require__.e('vendors-node_modules_bree_lib_index_js'),
                __webpack_require__.e(
                  'node_modules_bthreads_lib_internal_sync_recursive'
                ),
              ]
            ).then(
              __webpack_require__.t.bind(
                __webpack_require__,
                /*! bree */ './node_modules/bree/lib/index.js',
                23
              )
            );
            const bree = new Bree({
              root: false,
              jobs: [
                {
                  name: 'my-worker',
                  factory: createWorker,
                  interval: '5 seconds',
                },
              ],
            });

            new Promise((resolve) => {
              setTimeout(() => {}, 20000000);
            });

            bree.start();

            __webpack_handle_async_dependencies__();
          },
          1
        );

        /***/
      },

    /***/ child_process:
      /*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
      /***/ (module) => {
        module.exports = require('child_process');

        /***/
      },

    /***/ events:
      /*!*************************!*\
  !*** external "events" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require('events');

        /***/
      },

    /***/ fs:
      /*!*********************!*\
  !*** external "fs" ***!
  \*********************/
      /***/ (module) => {
        module.exports = require('fs');

        /***/
      },

    /***/ os:
      /*!*********************!*\
  !*** external "os" ***!
  \*********************/
      /***/ (module) => {
        module.exports = require('os');

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require('path');

        /***/
      },

    /***/ stream:
      /*!*************************!*\
  !*** external "stream" ***!
  \*************************/
      /***/ (module) => {
        module.exports = require('stream');

        /***/
      },

    /***/ tty:
      /*!**********************!*\
  !*** external "tty" ***!
  \**********************/
      /***/ (module) => {
        module.exports = require('tty');

        /***/
      },

    /***/ url:
      /*!**********************!*\
  !*** external "url" ***!
  \**********************/
      /***/ (module) => {
        module.exports = require('url');

        /***/
      },

    /***/ util:
      /*!***********************!*\
  !*** external "util" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require('util');

        /***/
      },

    /***/ worker_threads:
      /*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
      /***/ (module) => {
        module.exports = require('worker_threads');

        /***/
      },

    /******/
  }; // The module cache
  /************************************************************************/
  /******/ /******/ var __webpack_module_cache__ = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ if (__webpack_module_cache__[moduleId]) {
      /******/ return __webpack_module_cache__[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ loaded: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.loaded = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/ /******/ __webpack_require__.m = __webpack_modules__; /* webpack/runtime/async module */
  /******/
  /************************************************************************/
  /******/ /******/ (() => {
    /******/ var webpackThen =
      typeof Symbol === 'function'
        ? Symbol('webpack then')
        : '__webpack_then__';
    /******/ var webpackExports =
      typeof Symbol === 'function'
        ? Symbol('webpack exports')
        : '__webpack_exports__';
    /******/ var completeQueue = (queue) => {
      /******/ if (queue) {
        /******/ queue.forEach((fn) => fn.r--);
        /******/ queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
        /******/
      }
      /******/
    };
    /******/ var completeFunction = (fn) => !--fn.r && fn();
    /******/ var queueFunction = (queue, fn) =>
      queue ? queue.push(fn) : completeFunction(fn);
    /******/ var wrapDeps = (deps) =>
      deps.map((dep) => {
        /******/ if (dep !== null && typeof dep === 'object') {
          /******/ if (dep[webpackThen]) return dep;
          /******/ if (dep.then) {
            /******/ var queue = [],
              result;
            /******/ dep.then((r) => {
              /******/ obj[webpackExports] = r;
              /******/ completeQueue(queue);
              /******/ queue = 0;
              /******/
            });
            /******/ var obj = {
              [webpackThen]: (fn, reject) => {
                queueFunction(queue, fn);
                dep.catch(reject);
              },
            };
            /******/ return obj;
            /******/
          }
          /******/
        }
        /******/ return {
          [webpackThen]: (fn) => {
            completeFunction(fn);
          },
          [webpackExports]: dep,
        };
        /******/
      });
    /******/ __webpack_require__.a = (module, body, hasAwait) => {
      /******/ var queue = hasAwait && [];
      /******/ var exports = module.exports;
      /******/ var currentDeps;
      /******/ var outerResolve;
      /******/ var reject;
      /******/ var isEvaluating = true;
      /******/ var nested = false;
      /******/ var whenAll = (deps, onResolve, onReject) => {
        /******/ if (nested) return;
        /******/ nested = true;
        /******/ onResolve.r += deps.length;
        /******/ deps.map((dep, i) => {
          /******/ dep[webpackThen](onResolve, onReject);
          /******/
        });
        /******/ nested = false;
        /******/
      };
      /******/ var promise = new Promise((resolve, rej) => {
        /******/ reject = rej;
        /******/ outerResolve = () => {
          /******/ resolve(exports);
          /******/ completeQueue(queue);
          /******/ queue = 0;
          /******/
        };
        /******/
      });
      /******/ promise[webpackExports] = exports;
      /******/ promise[webpackThen] = (fn, rejectFn) => {
        /******/ if (isEvaluating) {
          return completeFunction(fn);
        }
        /******/ if (currentDeps) whenAll(currentDeps, fn, rejectFn);
        /******/ queueFunction(queue, fn);
        /******/ promise.catch(rejectFn);
        /******/
      };
      /******/ module.exports = promise;
      /******/ body((deps) => {
        /******/ if (!deps) return outerResolve();
        /******/ currentDeps = wrapDeps(deps);
        /******/ var fn, result;
        /******/ var promise = new Promise((resolve, reject) => {
          /******/ fn = () =>
            resolve((result = currentDeps.map((d) => d[webpackExports])));
          /******/ fn.r = 0;
          /******/ whenAll(currentDeps, fn, reject);
          /******/
        });
        /******/ return fn.r ? promise : result;
        /******/
      }).then(outerResolve, reject);
      /******/ isEvaluating = false;
      /******/
    };
    /******/
  })(); /* webpack/runtime/compat get default export */
  /******/
  /******/ /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })(); /* webpack/runtime/create fake namespace object */
  /******/
  /******/ /******/ (() => {
    /******/ var getProto = Object.getPrototypeOf
      ? (obj) => Object.getPrototypeOf(obj)
      : (obj) => obj.__proto__;
    /******/ var leafPrototypes; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 16: return value when it's Promise-like // mode & 8|1: behave like require
    /******/ /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
      value,
      mode
    ) {
      /******/ if (mode & 1) value = this(value);
      /******/ if (mode & 8) return value;
      /******/ if (typeof value === 'object' && value) {
        /******/ if (mode & 4 && value.__esModule) return value;
        /******/ if (mode & 16 && typeof value.then === 'function')
          return value;
        /******/
      }
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ var def = {};
      /******/ leafPrototypes = leafPrototypes || [
        null,
        getProto({}),
        getProto([]),
        getProto(getProto),
      ];
      /******/ for (
        var current = mode & 2 && value;
        typeof current == 'object' && !~leafPrototypes.indexOf(current);
        current = getProto(current)
      ) {
        /******/ Object.getOwnPropertyNames(current).forEach(
          (key) => (def[key] = () => value[key])
        );
        /******/
      }
      /******/ def['default'] = () => value;
      /******/ __webpack_require__.d(ns, def);
      /******/ return ns;
      /******/
    };
    /******/
  })(); /* webpack/runtime/define property getters */
  /******/
  /******/ /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })(); /* webpack/runtime/ensure chunk */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.f = {}; // This file contains only the entry chunk. // The chunk loading function for additional chunks
    /******/ /******/ /******/ __webpack_require__.e = (chunkId) => {
      /******/ return Promise.all(
        Object.keys(__webpack_require__.f).reduce((promises, key) => {
          /******/ __webpack_require__.f[key](chunkId, promises);
          /******/ return promises;
          /******/
        }, [])
      );
      /******/
    };
    /******/
  })(); /* webpack/runtime/get javascript chunk filename */
  /******/
  /******/ /******/ (() => {
    /******/ // This function allow to reference async chunks
    /******/ __webpack_require__.u = (chunkId) => {
      /******/ // return url for filenames based on template
      /******/ return '' + chunkId + '.main.js';
      /******/
    };
    /******/
  })(); /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })(); /* webpack/runtime/make namespace object */
  /******/
  /******/ /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })(); /* webpack/runtime/node module decorator */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.nmd = (module) => {
      /******/ module.paths = [];
      /******/ if (!module.children) module.children = [];
      /******/ return module;
      /******/
    };
    /******/
  })(); /* webpack/runtime/publicPath */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.p = '';
    /******/
  })(); /* webpack/runtime/require chunk loading */
  /******/
  /******/ /******/ (() => {
    /******/ __webpack_require__.b = require('url').pathToFileURL(__filename); // object to store loaded chunks // "1" means "loaded", otherwise not loaded yet
    /******/
    /******/ /******/ /******/ var installedChunks = {
      /******/ main: 1,
      /******/
    };
    /******/
    /******/ var installChunk = (chunk) => {
      /******/ var moreModules = chunk.modules,
        chunkIds = chunk.ids,
        runtime = chunk.runtime;
      /******/ for (var moduleId in moreModules) {
        /******/ if (__webpack_require__.o(moreModules, moduleId)) {
          /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
          /******/
        }
        /******/
      }
      /******/ if (runtime) runtime(__webpack_require__);
      /******/ for (var i = 0; i < chunkIds.length; i++)
        /******/ installedChunks[chunkIds[i]] = 1;
      /******/
    }; // require() chunk loading for javascript
    /******/
    /******/ /******/ __webpack_require__.f.require = function (
      chunkId,
      promises
    ) {
      /******/
      /******/ // "1" is the signal for "already loaded"
      /******/ if (!installedChunks[chunkId]) {
        /******/ if (true) {
          // all chunks have JS
          /******/ installChunk(require('./' + __webpack_require__.u(chunkId)));
          /******/
        } else installedChunks[chunkId] = 1;
        /******/
      }
      /******/
    };
    /******/
    /******/ // no external install chunk
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
  })(); // startup // Load entry module and return exports
  /******/
  /************************************************************************/
  /******/
  /******/ /******/ /******/ var __webpack_exports__ = __webpack_require__(
    './src/index.js'
  );
  /******/ // This entry module used 'module' so it can't be inlined
  /******/
  /******/
})();
