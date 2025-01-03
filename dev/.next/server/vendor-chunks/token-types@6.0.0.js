"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/token-types@6.0.0";
exports.ids = ["vendor-chunks/token-types@6.0.0"];
exports.modules = {

/***/ "(rsc)/../node_modules/.pnpm/token-types@6.0.0/node_modules/token-types/lib/index.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/.pnpm/token-types@6.0.0/node_modules/token-types/lib/index.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnsiStringType: () => (/* binding */ AnsiStringType),\n/* harmony export */   Float16_BE: () => (/* binding */ Float16_BE),\n/* harmony export */   Float16_LE: () => (/* binding */ Float16_LE),\n/* harmony export */   Float32_BE: () => (/* binding */ Float32_BE),\n/* harmony export */   Float32_LE: () => (/* binding */ Float32_LE),\n/* harmony export */   Float64_BE: () => (/* binding */ Float64_BE),\n/* harmony export */   Float64_LE: () => (/* binding */ Float64_LE),\n/* harmony export */   Float80_BE: () => (/* binding */ Float80_BE),\n/* harmony export */   Float80_LE: () => (/* binding */ Float80_LE),\n/* harmony export */   INT16_BE: () => (/* binding */ INT16_BE),\n/* harmony export */   INT16_LE: () => (/* binding */ INT16_LE),\n/* harmony export */   INT24_BE: () => (/* binding */ INT24_BE),\n/* harmony export */   INT24_LE: () => (/* binding */ INT24_LE),\n/* harmony export */   INT32_BE: () => (/* binding */ INT32_BE),\n/* harmony export */   INT32_LE: () => (/* binding */ INT32_LE),\n/* harmony export */   INT64_BE: () => (/* binding */ INT64_BE),\n/* harmony export */   INT64_LE: () => (/* binding */ INT64_LE),\n/* harmony export */   INT8: () => (/* binding */ INT8),\n/* harmony export */   IgnoreType: () => (/* binding */ IgnoreType),\n/* harmony export */   StringType: () => (/* binding */ StringType),\n/* harmony export */   UINT16_BE: () => (/* binding */ UINT16_BE),\n/* harmony export */   UINT16_LE: () => (/* binding */ UINT16_LE),\n/* harmony export */   UINT24_BE: () => (/* binding */ UINT24_BE),\n/* harmony export */   UINT24_LE: () => (/* binding */ UINT24_LE),\n/* harmony export */   UINT32_BE: () => (/* binding */ UINT32_BE),\n/* harmony export */   UINT32_LE: () => (/* binding */ UINT32_LE),\n/* harmony export */   UINT64_BE: () => (/* binding */ UINT64_BE),\n/* harmony export */   UINT64_LE: () => (/* binding */ UINT64_LE),\n/* harmony export */   UINT8: () => (/* binding */ UINT8),\n/* harmony export */   Uint8ArrayType: () => (/* binding */ Uint8ArrayType)\n/* harmony export */ });\n/* harmony import */ var ieee754__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ieee754 */ \"(rsc)/../node_modules/.pnpm/ieee754@1.2.1/node_modules/ieee754/index.js\");\n\n// Primitive types\nfunction dv(array) {\n    return new DataView(array.buffer, array.byteOffset);\n}\n/**\n * 8-bit unsigned integer\n */\nconst UINT8 = {\n    len: 1,\n    get(array, offset) {\n        return dv(array).getUint8(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint8(offset, value);\n        return offset + 1;\n    }\n};\n/**\n * 16-bit unsigned integer, Little Endian byte order\n */\nconst UINT16_LE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getUint16(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setUint16(offset, value, true);\n        return offset + 2;\n    }\n};\n/**\n * 16-bit unsigned integer, Big Endian byte order\n */\nconst UINT16_BE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getUint16(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint16(offset, value);\n        return offset + 2;\n    }\n};\n/**\n * 24-bit unsigned integer, Little Endian byte order\n */\nconst UINT24_LE = {\n    len: 3,\n    get(array, offset) {\n        const dataView = dv(array);\n        return dataView.getUint8(offset) + (dataView.getUint16(offset + 1, true) << 8);\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint8(offset, value & 0xff);\n        dataView.setUint16(offset + 1, value >> 8, true);\n        return offset + 3;\n    }\n};\n/**\n * 24-bit unsigned integer, Big Endian byte order\n */\nconst UINT24_BE = {\n    len: 3,\n    get(array, offset) {\n        const dataView = dv(array);\n        return (dataView.getUint16(offset) << 8) + dataView.getUint8(offset + 2);\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint16(offset, value >> 8);\n        dataView.setUint8(offset + 2, value & 0xff);\n        return offset + 3;\n    }\n};\n/**\n * 32-bit unsigned integer, Little Endian byte order\n */\nconst UINT32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getUint32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setUint32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * 32-bit unsigned integer, Big Endian byte order\n */\nconst UINT32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getUint32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setUint32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * 8-bit signed integer\n */\nconst INT8 = {\n    len: 1,\n    get(array, offset) {\n        return dv(array).getInt8(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt8(offset, value);\n        return offset + 1;\n    }\n};\n/**\n * 16-bit signed integer, Big Endian byte order\n */\nconst INT16_BE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getInt16(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt16(offset, value);\n        return offset + 2;\n    }\n};\n/**\n * 16-bit signed integer, Little Endian byte order\n */\nconst INT16_LE = {\n    len: 2,\n    get(array, offset) {\n        return dv(array).getInt16(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setInt16(offset, value, true);\n        return offset + 2;\n    }\n};\n/**\n * 24-bit signed integer, Little Endian byte order\n */\nconst INT24_LE = {\n    len: 3,\n    get(array, offset) {\n        const unsigned = UINT24_LE.get(array, offset);\n        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint8(offset, value & 0xff);\n        dataView.setUint16(offset + 1, value >> 8, true);\n        return offset + 3;\n    }\n};\n/**\n * 24-bit signed integer, Big Endian byte order\n */\nconst INT24_BE = {\n    len: 3,\n    get(array, offset) {\n        const unsigned = UINT24_BE.get(array, offset);\n        return unsigned > 0x7fffff ? unsigned - 0x1000000 : unsigned;\n    },\n    put(array, offset, value) {\n        const dataView = dv(array);\n        dataView.setUint16(offset, value >> 8);\n        dataView.setUint8(offset + 2, value & 0xff);\n        return offset + 3;\n    }\n};\n/**\n * 32-bit signed integer, Big Endian byte order\n */\nconst INT32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getInt32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setInt32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * 32-bit signed integer, Big Endian byte order\n */\nconst INT32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getInt32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setInt32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * 64-bit unsigned integer, Little Endian byte order\n */\nconst UINT64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigUint64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setBigUint64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit signed integer, Little Endian byte order\n */\nconst INT64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigInt64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setBigInt64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit unsigned integer, Big Endian byte order\n */\nconst UINT64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigUint64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setBigUint64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * 64-bit signed integer, Big Endian byte order\n */\nconst INT64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getBigInt64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setBigInt64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 16-bit (half precision) float, big endian\n */\nconst Float16_BE = {\n    len: 2,\n    get(dataView, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(dataView, offset, false, 10, this.len);\n    },\n    put(dataView, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(dataView, value, offset, false, 10, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 16-bit (half precision) float, little endian\n */\nconst Float16_LE = {\n    len: 2,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, true, 10, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, true, 10, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 32-bit (single precision) float, big endian\n */\nconst Float32_BE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getFloat32(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat32(offset, value);\n        return offset + 4;\n    }\n};\n/**\n * IEEE 754 32-bit (single precision) float, little endian\n */\nconst Float32_LE = {\n    len: 4,\n    get(array, offset) {\n        return dv(array).getFloat32(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat32(offset, value, true);\n        return offset + 4;\n    }\n};\n/**\n * IEEE 754 64-bit (double precision) float, big endian\n */\nconst Float64_BE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getFloat64(offset);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat64(offset, value);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 64-bit (double precision) float, little endian\n */\nconst Float64_LE = {\n    len: 8,\n    get(array, offset) {\n        return dv(array).getFloat64(offset, true);\n    },\n    put(array, offset, value) {\n        dv(array).setFloat64(offset, value, true);\n        return offset + 8;\n    }\n};\n/**\n * IEEE 754 80-bit (extended precision) float, big endian\n */\nconst Float80_BE = {\n    len: 10,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, false, 63, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, false, 63, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * IEEE 754 80-bit (extended precision) float, little endian\n */\nconst Float80_LE = {\n    len: 10,\n    get(array, offset) {\n        return ieee754__WEBPACK_IMPORTED_MODULE_0__.read(array, offset, true, 63, this.len);\n    },\n    put(array, offset, value) {\n        ieee754__WEBPACK_IMPORTED_MODULE_0__.write(array, value, offset, true, 63, this.len);\n        return offset + this.len;\n    }\n};\n/**\n * Ignore a given number of bytes\n */\nclass IgnoreType {\n    /**\n     * @param len number of bytes to ignore\n     */\n    constructor(len) {\n        this.len = len;\n    }\n    // ToDo: don't read, but skip data\n    // eslint-disable-next-line @typescript-eslint/no-empty-function\n    get(array, off) {\n    }\n}\nclass Uint8ArrayType {\n    constructor(len) {\n        this.len = len;\n    }\n    get(array, offset) {\n        return array.subarray(offset, offset + this.len);\n    }\n}\n/**\n * Consume a fixed number of bytes from the stream and return a string with a specified encoding.\n */\nclass StringType {\n    constructor(len, encoding) {\n        this.len = len;\n        this.encoding = encoding;\n        this.textDecoder = new TextDecoder(encoding);\n    }\n    get(uint8Array, offset) {\n        return this.textDecoder.decode(uint8Array.subarray(offset, offset + this.len));\n    }\n}\n/**\n * ANSI Latin 1 String\n * Using windows-1252 / ISO 8859-1 decoding\n */\nclass AnsiStringType {\n    constructor(len) {\n        this.len = len;\n        this.textDecoder = new TextDecoder('windows-1252');\n    }\n    get(uint8Array, offset = 0) {\n        return this.textDecoder.decode(uint8Array.subarray(offset, offset + this.len));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3Rva2VuLXR5cGVzQDYuMC4wL25vZGVfbW9kdWxlcy90b2tlbi10eXBlcy9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGVBQWUseUNBQVk7QUFDM0IsS0FBSztBQUNMO0FBQ0EsUUFBUSwwQ0FBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxlQUFlLHlDQUFZO0FBQzNCLEtBQUs7QUFDTDtBQUNBLFFBQVEsMENBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGVBQWUseUNBQVk7QUFDM0IsS0FBSztBQUNMO0FBQ0EsUUFBUSwwQ0FBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxlQUFlLHlDQUFZO0FBQzNCLEtBQUs7QUFDTDtBQUNBLFFBQVEsMENBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW5rdXMvR2l0aHViL21vbm90d28vcGF5bG9hZC1wbHVnaW4tbWV0YS9ub2RlX21vZHVsZXMvLnBucG0vdG9rZW4tdHlwZXNANi4wLjAvbm9kZV9tb2R1bGVzL3Rva2VuLXR5cGVzL2xpYi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpZWVlNzU0IGZyb20gJ2llZWU3NTQnO1xuLy8gUHJpbWl0aXZlIHR5cGVzXG5mdW5jdGlvbiBkdihhcnJheSkge1xuICAgIHJldHVybiBuZXcgRGF0YVZpZXcoYXJyYXkuYnVmZmVyLCBhcnJheS5ieXRlT2Zmc2V0KTtcbn1cbi8qKlxuICogOC1iaXQgdW5zaWduZWQgaW50ZWdlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDggPSB7XG4gICAgbGVuOiAxLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0VWludDgob2Zmc2V0KTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0VWludDgob2Zmc2V0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyAxO1xuICAgIH1cbn07XG4vKipcbiAqIDE2LWJpdCB1bnNpZ25lZCBpbnRlZ2VyLCBMaXR0bGUgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IFVJTlQxNl9MRSA9IHtcbiAgICBsZW46IDIsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRVaW50MTYob2Zmc2V0LCB0cnVlKTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0VWludDE2KG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgMjtcbiAgICB9XG59O1xuLyoqXG4gKiAxNi1iaXQgdW5zaWduZWQgaW50ZWdlciwgQmlnIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UMTZfQkUgPSB7XG4gICAgbGVuOiAyLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0VWludDE2KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldFVpbnQxNihvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDI7XG4gICAgfVxufTtcbi8qKlxuICogMjQtYml0IHVuc2lnbmVkIGludGVnZXIsIExpdHRsZSBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDI0X0xFID0ge1xuICAgIGxlbjogMyxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IGR2KGFycmF5KTtcbiAgICAgICAgcmV0dXJuIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCkgKyAoZGF0YVZpZXcuZ2V0VWludDE2KG9mZnNldCArIDEsIHRydWUpIDw8IDgpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gZHYoYXJyYXkpO1xuICAgICAgICBkYXRhVmlldy5zZXRVaW50OChvZmZzZXQsIHZhbHVlICYgMHhmZik7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihvZmZzZXQgKyAxLCB2YWx1ZSA+PiA4LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDM7XG4gICAgfVxufTtcbi8qKlxuICogMjQtYml0IHVuc2lnbmVkIGludGVnZXIsIEJpZyBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDI0X0JFID0ge1xuICAgIGxlbjogMyxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IGR2KGFycmF5KTtcbiAgICAgICAgcmV0dXJuIChkYXRhVmlldy5nZXRVaW50MTYob2Zmc2V0KSA8PCA4KSArIGRhdGFWaWV3LmdldFVpbnQ4KG9mZnNldCArIDIpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gZHYoYXJyYXkpO1xuICAgICAgICBkYXRhVmlldy5zZXRVaW50MTYob2Zmc2V0LCB2YWx1ZSA+PiA4KTtcbiAgICAgICAgZGF0YVZpZXcuc2V0VWludDgob2Zmc2V0ICsgMiwgdmFsdWUgJiAweGZmKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDM7XG4gICAgfVxufTtcbi8qKlxuICogMzItYml0IHVuc2lnbmVkIGludGVnZXIsIExpdHRsZSBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgVUlOVDMyX0xFID0ge1xuICAgIGxlbjogNCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldFVpbnQzMihvZmZzZXQsIHRydWUpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRVaW50MzIob2Zmc2V0LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA0O1xuICAgIH1cbn07XG4vKipcbiAqIDMyLWJpdCB1bnNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IFVJTlQzMl9CRSA9IHtcbiAgICBsZW46IDQsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRVaW50MzIob2Zmc2V0KTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0VWludDMyKG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgNDtcbiAgICB9XG59O1xuLyoqXG4gKiA4LWJpdCBzaWduZWQgaW50ZWdlclxuICovXG5leHBvcnQgY29uc3QgSU5UOCA9IHtcbiAgICBsZW46IDEsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRJbnQ4KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEludDgob2Zmc2V0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyAxO1xuICAgIH1cbn07XG4vKipcbiAqIDE2LWJpdCBzaWduZWQgaW50ZWdlciwgQmlnIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBJTlQxNl9CRSA9IHtcbiAgICBsZW46IDIsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRJbnQxNihvZmZzZXQpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRJbnQxNihvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDI7XG4gICAgfVxufTtcbi8qKlxuICogMTYtYml0IHNpZ25lZCBpbnRlZ2VyLCBMaXR0bGUgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDE2X0xFID0ge1xuICAgIGxlbjogMixcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEludDE2KG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEludDE2KG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgMjtcbiAgICB9XG59O1xuLyoqXG4gKiAyNC1iaXQgc2lnbmVkIGludGVnZXIsIExpdHRsZSBFbmRpYW4gYnl0ZSBvcmRlclxuICovXG5leHBvcnQgY29uc3QgSU5UMjRfTEUgPSB7XG4gICAgbGVuOiAzLFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IHVuc2lnbmVkID0gVUlOVDI0X0xFLmdldChhcnJheSwgb2Zmc2V0KTtcbiAgICAgICAgcmV0dXJuIHVuc2lnbmVkID4gMHg3ZmZmZmYgPyB1bnNpZ25lZCAtIDB4MTAwMDAwMCA6IHVuc2lnbmVkO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gZHYoYXJyYXkpO1xuICAgICAgICBkYXRhVmlldy5zZXRVaW50OChvZmZzZXQsIHZhbHVlICYgMHhmZik7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQxNihvZmZzZXQgKyAxLCB2YWx1ZSA+PiA4LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDM7XG4gICAgfVxufTtcbi8qKlxuICogMjQtYml0IHNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDI0X0JFID0ge1xuICAgIGxlbjogMyxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICBjb25zdCB1bnNpZ25lZCA9IFVJTlQyNF9CRS5nZXQoYXJyYXksIG9mZnNldCk7XG4gICAgICAgIHJldHVybiB1bnNpZ25lZCA+IDB4N2ZmZmZmID8gdW5zaWduZWQgLSAweDEwMDAwMDAgOiB1bnNpZ25lZDtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBkYXRhVmlldyA9IGR2KGFycmF5KTtcbiAgICAgICAgZGF0YVZpZXcuc2V0VWludDE2KG9mZnNldCwgdmFsdWUgPj4gOCk7XG4gICAgICAgIGRhdGFWaWV3LnNldFVpbnQ4KG9mZnNldCArIDIsIHZhbHVlICYgMHhmZik7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyAzO1xuICAgIH1cbn07XG4vKipcbiAqIDMyLWJpdCBzaWduZWQgaW50ZWdlciwgQmlnIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBJTlQzMl9CRSA9IHtcbiAgICBsZW46IDQsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRJbnQzMihvZmZzZXQpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRJbnQzMihvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDQ7XG4gICAgfVxufTtcbi8qKlxuICogMzItYml0IHNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDMyX0xFID0ge1xuICAgIGxlbjogNCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEludDMyKG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEludDMyKG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgNDtcbiAgICB9XG59O1xuLyoqXG4gKiA2NC1iaXQgdW5zaWduZWQgaW50ZWdlciwgTGl0dGxlIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UNjRfTEUgPSB7XG4gICAgbGVuOiA4LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0QmlnVWludDY0KG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEJpZ1VpbnQ2NChvZmZzZXQsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDg7XG4gICAgfVxufTtcbi8qKlxuICogNjQtYml0IHNpZ25lZCBpbnRlZ2VyLCBMaXR0bGUgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDY0X0xFID0ge1xuICAgIGxlbjogOCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEJpZ0ludDY0KG9mZnNldCwgdHJ1ZSk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEJpZ0ludDY0KG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgODtcbiAgICB9XG59O1xuLyoqXG4gKiA2NC1iaXQgdW5zaWduZWQgaW50ZWdlciwgQmlnIEVuZGlhbiBieXRlIG9yZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBVSU5UNjRfQkUgPSB7XG4gICAgbGVuOiA4LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0QmlnVWludDY0KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEJpZ1VpbnQ2NChvZmZzZXQsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDg7XG4gICAgfVxufTtcbi8qKlxuICogNjQtYml0IHNpZ25lZCBpbnRlZ2VyLCBCaWcgRW5kaWFuIGJ5dGUgb3JkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IElOVDY0X0JFID0ge1xuICAgIGxlbjogOCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEJpZ0ludDY0KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEJpZ0ludDY0KG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgODtcbiAgICB9XG59O1xuLyoqXG4gKiBJRUVFIDc1NCAxNi1iaXQgKGhhbGYgcHJlY2lzaW9uKSBmbG9hdCwgYmlnIGVuZGlhblxuICovXG5leHBvcnQgY29uc3QgRmxvYXQxNl9CRSA9IHtcbiAgICBsZW46IDIsXG4gICAgZ2V0KGRhdGFWaWV3LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGllZWU3NTQucmVhZChkYXRhVmlldywgb2Zmc2V0LCBmYWxzZSwgMTAsIHRoaXMubGVuKTtcbiAgICB9LFxuICAgIHB1dChkYXRhVmlldywgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBpZWVlNzU0LndyaXRlKGRhdGFWaWV3LCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgMTAsIHRoaXMubGVuKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIHRoaXMubGVuO1xuICAgIH1cbn07XG4vKipcbiAqIElFRUUgNzU0IDE2LWJpdCAoaGFsZiBwcmVjaXNpb24pIGZsb2F0LCBsaXR0bGUgZW5kaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBGbG9hdDE2X0xFID0ge1xuICAgIGxlbjogMixcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gaWVlZTc1NC5yZWFkKGFycmF5LCBvZmZzZXQsIHRydWUsIDEwLCB0aGlzLmxlbik7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgaWVlZTc1NC53cml0ZShhcnJheSwgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgMTAsIHRoaXMubGVuKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIHRoaXMubGVuO1xuICAgIH1cbn07XG4vKipcbiAqIElFRUUgNzU0IDMyLWJpdCAoc2luZ2xlIHByZWNpc2lvbikgZmxvYXQsIGJpZyBlbmRpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEZsb2F0MzJfQkUgPSB7XG4gICAgbGVuOiA0LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0RmxvYXQzMihvZmZzZXQpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRGbG9hdDMyKG9mZnNldCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgNDtcbiAgICB9XG59O1xuLyoqXG4gKiBJRUVFIDc1NCAzMi1iaXQgKHNpbmdsZSBwcmVjaXNpb24pIGZsb2F0LCBsaXR0bGUgZW5kaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBGbG9hdDMyX0xFID0ge1xuICAgIGxlbjogNCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gZHYoYXJyYXkpLmdldEZsb2F0MzIob2Zmc2V0LCB0cnVlKTtcbiAgICB9LFxuICAgIHB1dChhcnJheSwgb2Zmc2V0LCB2YWx1ZSkge1xuICAgICAgICBkdihhcnJheSkuc2V0RmxvYXQzMihvZmZzZXQsIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9mZnNldCArIDQ7XG4gICAgfVxufTtcbi8qKlxuICogSUVFRSA3NTQgNjQtYml0IChkb3VibGUgcHJlY2lzaW9uKSBmbG9hdCwgYmlnIGVuZGlhblxuICovXG5leHBvcnQgY29uc3QgRmxvYXQ2NF9CRSA9IHtcbiAgICBsZW46IDgsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGR2KGFycmF5KS5nZXRGbG9hdDY0KG9mZnNldCk7XG4gICAgfSxcbiAgICBwdXQoYXJyYXksIG9mZnNldCwgdmFsdWUpIHtcbiAgICAgICAgZHYoYXJyYXkpLnNldEZsb2F0NjQob2Zmc2V0LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyA4O1xuICAgIH1cbn07XG4vKipcbiAqIElFRUUgNzU0IDY0LWJpdCAoZG91YmxlIHByZWNpc2lvbikgZmxvYXQsIGxpdHRsZSBlbmRpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEZsb2F0NjRfTEUgPSB7XG4gICAgbGVuOiA4LFxuICAgIGdldChhcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiBkdihhcnJheSkuZ2V0RmxvYXQ2NChvZmZzZXQsIHRydWUpO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGR2KGFycmF5KS5zZXRGbG9hdDY0KG9mZnNldCwgdmFsdWUsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgODtcbiAgICB9XG59O1xuLyoqXG4gKiBJRUVFIDc1NCA4MC1iaXQgKGV4dGVuZGVkIHByZWNpc2lvbikgZmxvYXQsIGJpZyBlbmRpYW5cbiAqL1xuZXhwb3J0IGNvbnN0IEZsb2F0ODBfQkUgPSB7XG4gICAgbGVuOiAxMCxcbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gaWVlZTc1NC5yZWFkKGFycmF5LCBvZmZzZXQsIGZhbHNlLCA2MywgdGhpcy5sZW4pO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGllZWU3NTQud3JpdGUoYXJyYXksIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCA2MywgdGhpcy5sZW4pO1xuICAgICAgICByZXR1cm4gb2Zmc2V0ICsgdGhpcy5sZW47XG4gICAgfVxufTtcbi8qKlxuICogSUVFRSA3NTQgODAtYml0IChleHRlbmRlZCBwcmVjaXNpb24pIGZsb2F0LCBsaXR0bGUgZW5kaWFuXG4gKi9cbmV4cG9ydCBjb25zdCBGbG9hdDgwX0xFID0ge1xuICAgIGxlbjogMTAsXG4gICAgZ2V0KGFycmF5LCBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGllZWU3NTQucmVhZChhcnJheSwgb2Zmc2V0LCB0cnVlLCA2MywgdGhpcy5sZW4pO1xuICAgIH0sXG4gICAgcHV0KGFycmF5LCBvZmZzZXQsIHZhbHVlKSB7XG4gICAgICAgIGllZWU3NTQud3JpdGUoYXJyYXksIHZhbHVlLCBvZmZzZXQsIHRydWUsIDYzLCB0aGlzLmxlbik7XG4gICAgICAgIHJldHVybiBvZmZzZXQgKyB0aGlzLmxlbjtcbiAgICB9XG59O1xuLyoqXG4gKiBJZ25vcmUgYSBnaXZlbiBudW1iZXIgb2YgYnl0ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIElnbm9yZVR5cGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBsZW4gbnVtYmVyIG9mIGJ5dGVzIHRvIGlnbm9yZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGxlbikge1xuICAgICAgICB0aGlzLmxlbiA9IGxlbjtcbiAgICB9XG4gICAgLy8gVG9EbzogZG9uJ3QgcmVhZCwgYnV0IHNraXAgZGF0YVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgICBnZXQoYXJyYXksIG9mZikge1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBVaW50OEFycmF5VHlwZSB7XG4gICAgY29uc3RydWN0b3IobGVuKSB7XG4gICAgICAgIHRoaXMubGVuID0gbGVuO1xuICAgIH1cbiAgICBnZXQoYXJyYXksIG9mZnNldCkge1xuICAgICAgICByZXR1cm4gYXJyYXkuc3ViYXJyYXkob2Zmc2V0LCBvZmZzZXQgKyB0aGlzLmxlbik7XG4gICAgfVxufVxuLyoqXG4gKiBDb25zdW1lIGEgZml4ZWQgbnVtYmVyIG9mIGJ5dGVzIGZyb20gdGhlIHN0cmVhbSBhbmQgcmV0dXJuIGEgc3RyaW5nIHdpdGggYSBzcGVjaWZpZWQgZW5jb2RpbmcuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpbmdUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcihsZW4sIGVuY29kaW5nKSB7XG4gICAgICAgIHRoaXMubGVuID0gbGVuO1xuICAgICAgICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gICAgICAgIHRoaXMudGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoZW5jb2RpbmcpO1xuICAgIH1cbiAgICBnZXQodWludDhBcnJheSwgb2Zmc2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHREZWNvZGVyLmRlY29kZSh1aW50OEFycmF5LnN1YmFycmF5KG9mZnNldCwgb2Zmc2V0ICsgdGhpcy5sZW4pKTtcbiAgICB9XG59XG4vKipcbiAqIEFOU0kgTGF0aW4gMSBTdHJpbmdcbiAqIFVzaW5nIHdpbmRvd3MtMTI1MiAvIElTTyA4ODU5LTEgZGVjb2RpbmdcbiAqL1xuZXhwb3J0IGNsYXNzIEFuc2lTdHJpbmdUeXBlIHtcbiAgICBjb25zdHJ1Y3RvcihsZW4pIHtcbiAgICAgICAgdGhpcy5sZW4gPSBsZW47XG4gICAgICAgIHRoaXMudGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3dpbmRvd3MtMTI1MicpO1xuICAgIH1cbiAgICBnZXQodWludDhBcnJheSwgb2Zmc2V0ID0gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXh0RGVjb2Rlci5kZWNvZGUodWludDhBcnJheS5zdWJhcnJheShvZmZzZXQsIG9mZnNldCArIHRoaXMubGVuKSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/.pnpm/token-types@6.0.0/node_modules/token-types/lib/index.js\n");

/***/ })

};
;