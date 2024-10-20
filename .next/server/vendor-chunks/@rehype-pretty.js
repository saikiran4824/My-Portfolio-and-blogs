"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@rehype-pretty";
exports.ids = ["vendor-chunks/@rehype-pretty"];
exports.modules = {

/***/ "(rsc)/./node_modules/@rehype-pretty/transformers/dist/chunk-P2G3MLOR.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@rehype-pretty/transformers/dist/chunk-P2G3MLOR.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   transformerCopyButton: () => (/* binding */ transformerCopyButton)\n/* harmony export */ });\n// src/utilities/index.ts\nvar whitespaceRegEx = /\\s*\\n\\s*/g;\nvar trimWhitespace = (input) => input.replaceAll(whitespaceRegEx, \"\").trim();\n\n// src/copy-button.ts\nfunction transformerCopyButton(options = {\n  visibility: \"hover\",\n  feedbackDuration: 3e3\n}) {\n  return {\n    name: \"@rehype-pretty/transformers/copy-button\",\n    code(node) {\n      node.children.push({\n        type: \"element\",\n        tagName: \"button\",\n        properties: {\n          type: \"button\",\n          title: \"Copy code\",\n          \"aria-label\": \"Copy code\",\n          data: this.source,\n          class: \"rehype-pretty-copy\",\n          onclick: trimWhitespace(\n            /* javascript */\n            `\n            navigator.clipboard.writeText(this.attributes.data.value);\n            this.classList.add('rehype-pretty-copied');\n            window.setTimeout(() => this.classList.remove('rehype-pretty-copied'), ${options.feedbackDuration});\n          `\n          )\n        },\n        children: [\n          {\n            type: \"element\",\n            tagName: \"span\",\n            properties: { class: \"ready\" },\n            children: []\n          },\n          {\n            type: \"element\",\n            tagName: \"span\",\n            properties: { class: \"success\" },\n            children: []\n          }\n        ]\n      });\n      node.children.push({\n        type: \"element\",\n        tagName: \"style\",\n        properties: {},\n        children: [\n          {\n            type: \"text\",\n            value: copyButtonStyle({\n              copyIcon: options.copyIcon,\n              successIcon: options.successIcon,\n              visibility: options.visibility\n            })\n          }\n        ]\n      });\n    }\n  };\n}\nfunction copyButtonStyle({\n  copyIcon = \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23adadad' d='M16.187 9.5H12.25a1.75 1.75 0 0 0-1.75 1.75v28.5c0 .967.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75v-28.5a1.75 1.75 0 0 0-1.75-1.75h-3.937a4.25 4.25 0 0 1-4.063 3h-7.5a4.25 4.25 0 0 1-4.063-3M31.813 7h3.937A4.25 4.25 0 0 1 40 11.25v28.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75v-28.5A4.25 4.25 0 0 1 12.25 7h3.937a4.25 4.25 0 0 1 4.063-3h7.5a4.25 4.25 0 0 1 4.063 3M18.5 8.25c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 1 0 0-3.5h-7.5a1.75 1.75 0 0 0-1.75 1.75'/%3E%3C/svg%3E\",\n  successIcon = \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2366ff85' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'/%3E%3C/svg%3E\",\n  visibility = \"hover\"\n} = {}) {\n  let copyButtonStyle2 = (\n    /* css */\n    `\n    :root {\n      --copy-icon: url(\"${copyIcon}\");\n      --success-icon: url(\"${successIcon}\");\n    }\n    pre:has(code) {\n      position: relative;\n    }\n    pre button.rehype-pretty-copy {\n      right: 1px;\n      padding: 0;\n      width: 24px;\n      height: 24px;\n      display: flex;\n      margin-top: 2px;\n      margin-right: 8px;\n      position: absolute;\n      border-radius: 25%;\n      backdrop-filter: blur(3px);\n      & span {\n        width: 100%;\n        aspect-ratio: 1 / 1;\n      }\n      & .ready {\n        background-image: var(--copy-icon);\n      }\n      & .success {\n        display: none; background-image: var(--success-icon);\n      }\n    }\n    &.rehype-pretty-copied { \n      & .success { \n        display: block;\n      } & .ready {\n        display: none;\n      }\n    }\n    pre button.rehype-pretty-copy.rehype-pretty-copied {\n      opacity: 1;\n      & .ready { display: none; }\n      & .success { display: block; }\n    }\n`\n  );\n  if (visibility === \"hover\") {\n    copyButtonStyle2 += /* css */\n    `\n        pre button.rehype-pretty-copy { opacity: 0; }\n        figure[data-rehype-pretty-code-figure]:hover > pre > code button.rehype-pretty-copy {\n          opacity: 1;\n        }\n      `;\n  }\n  return trimWhitespace(copyButtonStyle2);\n}\n\n\n//# sourceMappingURL=out.js.map\n//# sourceMappingURL=chunk-P2G3MLOR.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHJlaHlwZS1wcmV0dHkvdHJhbnNmb3JtZXJzL2Rpc3QvY2h1bmstUDJHM01MT1IuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUZBQXFGLHlCQUF5QjtBQUM5RztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQjtBQUMxQztBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkMsNkJBQTZCLFlBQVk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUM7QUFDakM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F3ZXNvbWUtcHdoLWJsb2cvLi9ub2RlX21vZHVsZXMvQHJlaHlwZS1wcmV0dHkvdHJhbnNmb3JtZXJzL2Rpc3QvY2h1bmstUDJHM01MT1IuanM/YjMwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvdXRpbGl0aWVzL2luZGV4LnRzXG52YXIgd2hpdGVzcGFjZVJlZ0V4ID0gL1xccypcXG5cXHMqL2c7XG52YXIgdHJpbVdoaXRlc3BhY2UgPSAoaW5wdXQpID0+IGlucHV0LnJlcGxhY2VBbGwod2hpdGVzcGFjZVJlZ0V4LCBcIlwiKS50cmltKCk7XG5cbi8vIHNyYy9jb3B5LWJ1dHRvbi50c1xuZnVuY3Rpb24gdHJhbnNmb3JtZXJDb3B5QnV0dG9uKG9wdGlvbnMgPSB7XG4gIHZpc2liaWxpdHk6IFwiaG92ZXJcIixcbiAgZmVlZGJhY2tEdXJhdGlvbjogM2UzXG59KSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJAcmVoeXBlLXByZXR0eS90cmFuc2Zvcm1lcnMvY29weS1idXR0b25cIixcbiAgICBjb2RlKG5vZGUpIHtcbiAgICAgIG5vZGUuY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgIHR5cGU6IFwiZWxlbWVudFwiLFxuICAgICAgICB0YWdOYW1lOiBcImJ1dHRvblwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICB0aXRsZTogXCJDb3B5IGNvZGVcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDb3B5IGNvZGVcIixcbiAgICAgICAgICBkYXRhOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgICBjbGFzczogXCJyZWh5cGUtcHJldHR5LWNvcHlcIixcbiAgICAgICAgICBvbmNsaWNrOiB0cmltV2hpdGVzcGFjZShcbiAgICAgICAgICAgIC8qIGphdmFzY3JpcHQgKi9cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRoaXMuYXR0cmlidXRlcy5kYXRhLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgncmVoeXBlLXByZXR0eS1jb3BpZWQnKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgncmVoeXBlLXByZXR0eS1jb3BpZWQnKSwgJHtvcHRpb25zLmZlZWRiYWNrRHVyYXRpb259KTtcbiAgICAgICAgICBgXG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiZWxlbWVudFwiLFxuICAgICAgICAgICAgdGFnTmFtZTogXCJzcGFuXCIsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IGNsYXNzOiBcInJlYWR5XCIgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJlbGVtZW50XCIsXG4gICAgICAgICAgICB0YWdOYW1lOiBcInNwYW5cIixcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgY2xhc3M6IFwic3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgdHlwZTogXCJlbGVtZW50XCIsXG4gICAgICAgIHRhZ05hbWU6IFwic3R5bGVcIixcbiAgICAgICAgcHJvcGVydGllczoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICB2YWx1ZTogY29weUJ1dHRvblN0eWxlKHtcbiAgICAgICAgICAgICAgY29weUljb246IG9wdGlvbnMuY29weUljb24sXG4gICAgICAgICAgICAgIHN1Y2Nlc3NJY29uOiBvcHRpb25zLnN1Y2Nlc3NJY29uLFxuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBvcHRpb25zLnZpc2liaWxpdHlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBjb3B5QnV0dG9uU3R5bGUoe1xuICBjb3B5SWNvbiA9IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0OCA0OCclM0UlM0NwYXRoIGZpbGw9JyUyM2FkYWRhZCcgZD0nTTE2LjE4NyA5LjVIMTIuMjVhMS43NSAxLjc1IDAgMCAwLTEuNzUgMS43NXYyOC41YzAgLjk2Ny43ODQgMS43NSAxLjc1IDEuNzVoMjMuNWExLjc1IDEuNzUgMCAwIDAgMS43NS0xLjc1di0yOC41YTEuNzUgMS43NSAwIDAgMC0xLjc1LTEuNzVoLTMuOTM3YTQuMjUgNC4yNSAwIDAgMS00LjA2MyAzaC03LjVhNC4yNSA0LjI1IDAgMCAxLTQuMDYzLTNNMzEuODEzIDdoMy45MzdBNC4yNSA0LjI1IDAgMCAxIDQwIDExLjI1djI4LjVBNC4yNSA0LjI1IDAgMCAxIDM1Ljc1IDQ0aC0yMy41QTQuMjUgNC4yNSAwIDAgMSA4IDM5Ljc1di0yOC41QTQuMjUgNC4yNSAwIDAgMSAxMi4yNSA3aDMuOTM3YTQuMjUgNC4yNSAwIDAgMSA0LjA2My0zaDcuNWE0LjI1IDQuMjUgMCAwIDEgNC4wNjMgM00xOC41IDguMjVjMCAuOTY2Ljc4NCAxLjc1IDEuNzUgMS43NWg3LjVhMS43NSAxLjc1IDAgMSAwIDAtMy41aC03LjVhMS43NSAxLjc1IDAgMCAwLTEuNzUgMS43NScvJTNFJTNDL3N2ZyUzRVwiLFxuICBzdWNjZXNzSWNvbiA9IFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCclM0UlM0NwYXRoIGZpbGw9JyUyMzY2ZmY4NScgZD0nTTkgMTYuMTdMNS41MyAxMi43YS45OTYuOTk2IDAgMSAwLTEuNDEgMS40MWw0LjE4IDQuMThjLjM5LjM5IDEuMDIuMzkgMS40MSAwTDIwLjI5IDcuNzFhLjk5Ni45OTYgMCAxIDAtMS40MS0xLjQxeicvJTNFJTNDL3N2ZyUzRVwiLFxuICB2aXNpYmlsaXR5ID0gXCJob3ZlclwiXG59ID0ge30pIHtcbiAgbGV0IGNvcHlCdXR0b25TdHlsZTIgPSAoXG4gICAgLyogY3NzICovXG4gICAgYFxuICAgIDpyb290IHtcbiAgICAgIC0tY29weS1pY29uOiB1cmwoXCIke2NvcHlJY29ufVwiKTtcbiAgICAgIC0tc3VjY2Vzcy1pY29uOiB1cmwoXCIke3N1Y2Nlc3NJY29ufVwiKTtcbiAgICB9XG4gICAgcHJlOmhhcyhjb2RlKSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIHByZSBidXR0b24ucmVoeXBlLXByZXR0eS1jb3B5IHtcbiAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgICAgICYgc3BhbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgICAgfVxuICAgICAgJiAucmVhZHkge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1jb3B5LWljb24pO1xuICAgICAgfVxuICAgICAgJiAuc3VjY2VzcyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLXN1Y2Nlc3MtaWNvbik7XG4gICAgICB9XG4gICAgfVxuICAgICYucmVoeXBlLXByZXR0eS1jb3BpZWQgeyBcbiAgICAgICYgLnN1Y2Nlc3MgeyBcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9ICYgLnJlYWR5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJlIGJ1dHRvbi5yZWh5cGUtcHJldHR5LWNvcHkucmVoeXBlLXByZXR0eS1jb3BpZWQge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgICYgLnJlYWR5IHsgZGlzcGxheTogbm9uZTsgfVxuICAgICAgJiAuc3VjY2VzcyB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgfVxuYFxuICApO1xuICBpZiAodmlzaWJpbGl0eSA9PT0gXCJob3ZlclwiKSB7XG4gICAgY29weUJ1dHRvblN0eWxlMiArPSAvKiBjc3MgKi9cbiAgICBgXG4gICAgICAgIHByZSBidXR0b24ucmVoeXBlLXByZXR0eS1jb3B5IHsgb3BhY2l0eTogMDsgfVxuICAgICAgICBmaWd1cmVbZGF0YS1yZWh5cGUtcHJldHR5LWNvZGUtZmlndXJlXTpob3ZlciA+IHByZSA+IGNvZGUgYnV0dG9uLnJlaHlwZS1wcmV0dHktY29weSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgYDtcbiAgfVxuICByZXR1cm4gdHJpbVdoaXRlc3BhY2UoY29weUJ1dHRvblN0eWxlMik7XG59XG5cbmV4cG9ydCB7IHRyYW5zZm9ybWVyQ29weUJ1dHRvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3V0LmpzLm1hcFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2h1bmstUDJHM01MT1IuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@rehype-pretty/transformers/dist/chunk-P2G3MLOR.js\n");

/***/ })

};
;