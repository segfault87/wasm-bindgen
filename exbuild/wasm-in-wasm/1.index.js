(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/wasm_in_wasm.js":
/*!*****************************!*\
  !*** ./pkg/wasm_in_wasm.js ***!
  \*****************************/
/*! exports provided: __wbg_log_993ce57de1915a59, run, __wbg_new_5ef819e8b2fe8965, __wbg_exports_b7da5d72446dd655, __wbg_new_2f4fd8e0922f6c08, __wbg_instanceof_Memory_06567bb0710f3de7, __wbg_buffer_4b5b3334b7c8524c, __wbg_grow_084de5355cdf3bd4, __wbg_instanceof_Function_35a2b81f156e4305, __wbg_call_7d492f332f3e8798, __wbg_new_a0666d0392f59dc3, __wbg_get_e323dac36fd230a3, __wbg_new_0aee37cce32c00a4, __wbg_subarray_7502bca93dbd9b24, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbindgen_number_new, __wbindgen_debug_string, __wbindgen_memory, __wbindgen_rethrow, __wbindgen_defer_start, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_993ce57de1915a59\", function() { return __wbg_log_993ce57de1915a59; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_5ef819e8b2fe8965\", function() { return __wbg_new_5ef819e8b2fe8965; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_exports_b7da5d72446dd655\", function() { return __wbg_exports_b7da5d72446dd655; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_2f4fd8e0922f6c08\", function() { return __wbg_new_2f4fd8e0922f6c08; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Memory_06567bb0710f3de7\", function() { return __wbg_instanceof_Memory_06567bb0710f3de7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_buffer_4b5b3334b7c8524c\", function() { return __wbg_buffer_4b5b3334b7c8524c; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_grow_084de5355cdf3bd4\", function() { return __wbg_grow_084de5355cdf3bd4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Function_35a2b81f156e4305\", function() { return __wbg_instanceof_Function_35a2b81f156e4305; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_7d492f332f3e8798\", function() { return __wbg_call_7d492f332f3e8798; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_a0666d0392f59dc3\", function() { return __wbg_new_a0666d0392f59dc3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_get_e323dac36fd230a3\", function() { return __wbg_get_e323dac36fd230a3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_0aee37cce32c00a4\", function() { return __wbg_new_0aee37cce32c00a4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_subarray_7502bca93dbd9b24\", function() { return __wbg_subarray_7502bca93dbd9b24; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_new\", function() { return __wbindgen_number_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_memory\", function() { return __wbindgen_memory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_rethrow\", function() { return __wbindgen_rethrow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_defer_start\", function() { return __wbindgen_defer_start; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_in_wasm_bg */ \"./pkg/wasm_in_wasm_bg.wasm\");\n/* tslint:disable */\n\n\nlet cachedTextDecoder = new TextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction __wbg_log_993ce57de1915a59(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    try {\n        console.log(varg0);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n/**\n* @returns {void}\n*/\nfunction run() {\n    return _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nconst heap = new Array(32);\n\nheap.fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nfunction handleError(exnptr, e) {\n    const view = getUint32Memory();\n    view[exnptr / 4] = 1;\n    view[exnptr / 4 + 1] = addHeapObject(e);\n}\n\nfunction __wbg_new_5ef819e8b2fe8965(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(new WebAssembly.Instance(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __wbg_exports_b7da5d72446dd655(arg0) {\n    try {\n        return addHeapObject(getObject(arg0).exports);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_new_2f4fd8e0922f6c08(arg0, exnptr) {\n    try {\n        return addHeapObject(new WebAssembly.Module(getObject(arg0)));\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __wbg_instanceof_Memory_06567bb0710f3de7(idx) {\n    return getObject(idx) instanceof WebAssembly.Memory ? 1 : 0;\n}\n\nfunction __wbg_buffer_4b5b3334b7c8524c(arg0) {\n    try {\n        return addHeapObject(getObject(arg0).buffer);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_grow_084de5355cdf3bd4(arg0, arg1) {\n    try {\n        return getObject(arg0).grow(arg1);\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_instanceof_Function_35a2b81f156e4305(idx) {\n    return getObject(idx) instanceof Function ? 1 : 0;\n}\n\nfunction __wbg_call_7d492f332f3e8798(arg0, arg1, arg2, arg3, exnptr) {\n    try {\n        return addHeapObject(getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3)));\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __wbg_new_a0666d0392f59dc3() {\n    try {\n        return addHeapObject(new Object());\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_get_e323dac36fd230a3(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(Reflect.get(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        handleError(exnptr, e);\n    }\n}\n\nfunction __wbg_new_0aee37cce32c00a4(arg0) {\n    try {\n        return addHeapObject(new Uint8Array(getObject(arg0)));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction __wbg_subarray_7502bca93dbd9b24(arg0, arg1, arg2) {\n    try {\n        return addHeapObject(getObject(arg0).subarray(arg1, arg2));\n    } catch (e) {\n        console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", e);\n        throw e;\n    }\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) { dropObject(i); }\n\nfunction __wbindgen_string_new(p, l) {\n    return addHeapObject(getStringFromWasm(p, l));\n}\n\nfunction __wbindgen_number_new(i) { return addHeapObject(i); }\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passStringToWasm(arg) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    WASM_VECTOR_LEN = buf.length;\n    return ptr;\n}\n\nfunction __wbindgen_debug_string(i, len_ptr) {\n    const toString = Object.prototype.toString;\n    const debug_str = val => {\n        // primitive types\n        const type = typeof val;\n        if (type == 'number' || type == 'boolean' || val == null) {\n            return  `${val}`;\n        }\n        if (type == 'string') {\n            return `\"${val}\"`;\n        }\n        if (type == 'symbol') {\n            const description = val.description;\n            if (description == null) {\n                return 'Symbol';\n            } else {\n                return `Symbol(${description})`;\n            }\n        }\n        if (type == 'function') {\n            const name = val.name;\n            if (typeof name == 'string' && name.length > 0) {\n                return `Function(${name})`;\n            } else {\n                return 'Function';\n            }\n        }\n        // objects\n        if (Array.isArray(val)) {\n            const length = val.length;\n            let debug = '[';\n            if (length > 0) {\n                debug += debug_str(val[0]);\n            }\n            for(let i = 1; i < length; i++) {\n                debug += ', ' + debug_str(val[i]);\n            }\n            debug += ']';\n            return debug;\n        }\n        // Test for built-in\n        const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n        let className;\n        if (builtInMatches.length > 1) {\n            className = builtInMatches[1];\n        } else {\n            // Failed to match the standard '[object ClassName]'\n            return toString.call(val);\n        }\n        if (className == 'Object') {\n            // we're a user defined class or Object\n            // JSON.stringify avoids problems with cycles, and is generally much\n            // easier than looping through ownProperties of `val`.\n            try {\n                return 'Object(' + JSON.stringify(val) + ')';\n            } catch (_) {\n                return 'Object';\n            }\n        }\n        // errors\n        if (val instanceof Error) {\n        return `${val.name}: ${val.message}\n        ${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n};\nconst val = getObject(i);\nconst debug = debug_str(val);\nconst ptr = passStringToWasm(debug);\ngetUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;\nreturn ptr;\n}\n\nfunction __wbindgen_memory() { return addHeapObject(_wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"]); }\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction __wbindgen_rethrow(idx) { throw takeObject(idx); }\n\nfunction __wbindgen_defer_start() {\n    Promise.resolve().then(() => _wasm_in_wasm_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]());\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./pkg/wasm_in_wasm.js?");

/***/ }),

/***/ "./pkg/wasm_in_wasm_bg.wasm":
/*!**********************************!*\
  !*** ./pkg/wasm_in_wasm_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, __rustc_debug_gdb_scripts_section__, run, __wbindgen_malloc, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_in_wasm */ \"./pkg/wasm_in_wasm.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/wasm_in_wasm_bg.wasm?");

/***/ })

}]);