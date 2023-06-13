/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1898:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jQ: () => (/* binding */ configure),
  BX: () => (/* binding */ fireEvent),
  W2: () => (/* binding */ getQueriesForElement),
  vF: () => (/* binding */ prettyDOM),
  sp: () => (/* binding */ screen)
});

// UNUSED EXPORTS: buildQueries, createEvent, findAllByAltText, findAllByDisplayValue, findAllByLabelText, findAllByPlaceholderText, findAllByRole, findAllByTestId, findAllByText, findAllByTitle, findByAltText, findByDisplayValue, findByLabelText, findByPlaceholderText, findByRole, findByTestId, findByText, findByTitle, getAllByAltText, getAllByDisplayValue, getAllByLabelText, getAllByPlaceholderText, getAllByRole, getAllByTestId, getAllByText, getAllByTitle, getByAltText, getByDisplayValue, getByLabelText, getByPlaceholderText, getByRole, getByTestId, getByText, getByTitle, getConfig, getDefaultNormalizer, getElementError, getMultipleElementsFoundError, getNodeText, getRoles, getSuggestedQuery, isInaccessible, logDOM, logRoles, makeFindQuery, makeGetAllQuery, makeSingleQuery, prettyFormat, queries, queryAllByAltText, queryAllByAttribute, queryAllByDisplayValue, queryAllByLabelText, queryAllByPlaceholderText, queryAllByRole, queryAllByTestId, queryAllByText, queryAllByTitle, queryByAltText, queryByAttribute, queryByDisplayValue, queryByLabelText, queryByPlaceholderText, queryByRole, queryByTestId, queryByText, queryByTitle, queryHelpers, waitFor, waitForElementToBeRemoved, within, wrapAllByQueryWithSuggestion, wrapSingleQueryWithSuggestion

// EXTERNAL MODULE: ./node_modules/pretty-format/build/index.js
var build = __webpack_require__(5914);
;// CONCATENATED MODULE: ./node_modules/dom-accessibility-api/dist/polyfills/array.from.mjs
/**
 * @source {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill}
 * but without thisArg (too hard to type, no need to `this`)
 */
var toStr = Object.prototype.toString;
function isCallable(fn) {
  return typeof fn === "function" || toStr.call(fn) === "[object Function]";
}
function toInteger(value) {
  var number = Number(value);
  if (isNaN(number)) {
    return 0;
  }
  if (number === 0 || !isFinite(number)) {
    return number;
  }
  return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
}
var maxSafeInteger = Math.pow(2, 53) - 1;
function toLength(value) {
  var len = toInteger(value);
  return Math.min(Math.max(len, 0), maxSafeInteger);
}
/**
 * Creates an array from an iterable object.
 * @param iterable An iterable object to convert to an array.
 */

/**
 * Creates an array from an iterable object.
 * @param iterable An iterable object to convert to an array.
 * @param mapfn A mapping function to call on every element of the array.
 * @param thisArg Value of 'this' used to invoke the mapfn.
 */
function arrayFrom(arrayLike, mapFn) {
  // 1. Let C be the this value.
  // edit(@eps1lon): we're not calling it as Array.from
  var C = Array;

  // 2. Let items be ToObject(arrayLike).
  var items = Object(arrayLike);

  // 3. ReturnIfAbrupt(items).
  if (arrayLike == null) {
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  }

  // 4. If mapfn is undefined, then let mapping be false.
  // const mapFn = arguments.length > 1 ? arguments[1] : void undefined;

  if (typeof mapFn !== "undefined") {
    // 5. else
    // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
    if (!isCallable(mapFn)) {
      throw new TypeError("Array.from: when provided, the second argument must be a function");
    }
  }

  // 10. Let lenValue be Get(items, "length").
  // 11. Let len be ToLength(lenValue).
  var len = toLength(items.length);

  // 13. If IsConstructor(C) is true, then
  // 13. a. Let A be the result of calling the [[Construct]] internal method
  // of C with an argument list containing the single item len.
  // 14. a. Else, Let A be ArrayCreate(len).
  var A = isCallable(C) ? Object(new C(len)) : new Array(len);

  // 16. Let k be 0.
  var k = 0;
  // 17. Repeat, while k < len… (also steps a - h)
  var kValue;
  while (k < len) {
    kValue = items[k];
    if (mapFn) {
      A[k] = mapFn(kValue, k);
    } else {
      A[k] = kValue;
    }
    k += 1;
  }
  // 18. Let putStatus be Put(A, "length", len, true).
  A.length = len;
  // 20. Return A.
  return A;
}
//# sourceMappingURL=array.from.mjs.map
;// CONCATENATED MODULE: ./node_modules/dom-accessibility-api/dist/polyfills/SetLike.mjs
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// for environments without Set we fallback to arrays with unique members
var SetLike = /*#__PURE__*/function () {
  function SetLike() {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    _classCallCheck(this, SetLike);
    _defineProperty(this, "items", void 0);
    this.items = items;
  }
  _createClass(SetLike, [{
    key: "add",
    value: function add(value) {
      if (this.has(value) === false) {
        this.items.push(value);
      }
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function _delete(value) {
      var previousLength = this.items.length;
      this.items = this.items.filter(function (item) {
        return item !== value;
      });
      return previousLength !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function forEach(callbackfn) {
      var _this = this;
      this.items.forEach(function (item) {
        callbackfn(item, item, _this);
      });
    }
  }, {
    key: "has",
    value: function has(value) {
      return this.items.indexOf(value) !== -1;
    }
  }, {
    key: "size",
    get: function get() {
      return this.items.length;
    }
  }]);
  return SetLike;
}();
/* harmony default export */ const polyfills_SetLike = (typeof Set === "undefined" ? Set : SetLike);
//# sourceMappingURL=SetLike.mjs.map
;// CONCATENATED MODULE: ./node_modules/dom-accessibility-api/dist/getRole.mjs
// https://w3c.github.io/html-aria/#document-conformance-requirements-for-use-of-aria-attributes-in-html

/**
 * Safe Element.localName for all supported environments
 * @param element
 */
function getLocalName(element) {
  var _element$localName;
  return (// eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (_element$localName = element.localName) !== null && _element$localName !== void 0 ? _element$localName :
    // eslint-disable-next-line no-restricted-properties -- required for the fallback
    element.tagName.toLowerCase()
  );
}
var localNameToRoleMappings = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
};
var prohibitedAttributes = {
  caption: new Set(["aria-label", "aria-labelledby"]),
  code: new Set(["aria-label", "aria-labelledby"]),
  deletion: new Set(["aria-label", "aria-labelledby"]),
  emphasis: new Set(["aria-label", "aria-labelledby"]),
  generic: new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: new Set(["aria-label", "aria-labelledby"]),
  paragraph: new Set(["aria-label", "aria-labelledby"]),
  presentation: new Set(["aria-label", "aria-labelledby"]),
  strong: new Set(["aria-label", "aria-labelledby"]),
  subscript: new Set(["aria-label", "aria-labelledby"]),
  superscript: new Set(["aria-label", "aria-labelledby"])
};

/**
 *
 * @param element
 * @param role The role used for this element. This is specified to control whether you want to use the implicit or explicit role.
 */
function hasGlobalAriaAttributes(element, role) {
  // https://rawgit.com/w3c/aria/stable/#global_states
  // commented attributes are deprecated
  return ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details",
  // "disabled",
  "aria-dropeffect",
  // "errormessage",
  "aria-flowto", "aria-grabbed",
  // "haspopup",
  "aria-hidden",
  // "invalid",
  "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"].some(function (attributeName) {
    var _prohibitedAttributes;
    return element.hasAttribute(attributeName) && !((_prohibitedAttributes = prohibitedAttributes[role]) !== null && _prohibitedAttributes !== void 0 && _prohibitedAttributes.has(attributeName));
  });
}
function ignorePresentationalRole(element, implicitRole) {
  // https://rawgit.com/w3c/aria/stable/#conflict_resolution_presentation_none
  return hasGlobalAriaAttributes(element, implicitRole);
}
function getRole(element) {
  var explicitRole = getExplicitRole(element);
  if (explicitRole === null || explicitRole === "presentation") {
    var implicitRole = getImplicitRole(element);
    if (explicitRole !== "presentation" || ignorePresentationalRole(element, implicitRole || "")) {
      return implicitRole;
    }
  }
  return explicitRole;
}
function getImplicitRole(element) {
  var mappedByTag = localNameToRoleMappings[getLocalName(element)];
  if (mappedByTag !== undefined) {
    return mappedByTag;
  }
  switch (getLocalName(element)) {
    case "a":
    case "area":
    case "link":
      if (element.hasAttribute("href")) {
        return "link";
      }
      break;
    case "img":
      if (element.getAttribute("alt") === "" && !ignorePresentationalRole(element, "img")) {
        return "presentation";
      }
      return "img";
    case "input":
      {
        var _ref = element,
          type = _ref.type;
        switch (type) {
          case "button":
          case "image":
          case "reset":
          case "submit":
            return "button";
          case "checkbox":
          case "radio":
            return type;
          case "range":
            return "slider";
          case "email":
          case "tel":
          case "text":
          case "url":
            if (element.hasAttribute("list")) {
              return "combobox";
            }
            return "textbox";
          case "search":
            if (element.hasAttribute("list")) {
              return "combobox";
            }
            return "searchbox";
          case "number":
            return "spinbutton";
          default:
            return null;
        }
      }
    case "select":
      if (element.hasAttribute("multiple") || element.size > 1) {
        return "listbox";
      }
      return "combobox";
  }
  return null;
}
function getExplicitRole(element) {
  var role = element.getAttribute("role");
  if (role !== null) {
    var explicitRole = role.trim().split(" ")[0];
    // String.prototype.split(sep, limit) will always return an array with at least one member
    // as long as limit is either undefined or > 0
    if (explicitRole.length > 0) {
      return explicitRole;
    }
  }
  return null;
}
//# sourceMappingURL=getRole.mjs.map
;// CONCATENATED MODULE: ./node_modules/dom-accessibility-api/dist/util.mjs


function isElement(node) {
  return node !== null && node.nodeType === node.ELEMENT_NODE;
}
function isHTMLTableCaptionElement(node) {
  return isElement(node) && getLocalName(node) === "caption";
}
function isHTMLInputElement(node) {
  return isElement(node) && getLocalName(node) === "input";
}
function isHTMLOptGroupElement(node) {
  return isElement(node) && getLocalName(node) === "optgroup";
}
function isHTMLSelectElement(node) {
  return isElement(node) && getLocalName(node) === "select";
}
function isHTMLTableElement(node) {
  return isElement(node) && getLocalName(node) === "table";
}
function isHTMLTextAreaElement(node) {
  return isElement(node) && getLocalName(node) === "textarea";
}
function safeWindow(node) {
  var _ref = node.ownerDocument === null ? node : node.ownerDocument,
    defaultView = _ref.defaultView;
  if (defaultView === null) {
    throw new TypeError("no window available");
  }
  return defaultView;
}
function isHTMLFieldSetElement(node) {
  return isElement(node) && getLocalName(node) === "fieldset";
}
function isHTMLLegendElement(node) {
  return isElement(node) && getLocalName(node) === "legend";
}
function isHTMLSlotElement(node) {
  return isElement(node) && getLocalName(node) === "slot";
}
function isSVGElement(node) {
  return isElement(node) && node.ownerSVGElement !== undefined;
}
function isSVGSVGElement(node) {
  return isElement(node) && getLocalName(node) === "svg";
}
function isSVGTitleElement(node) {
  return isSVGElement(node) && getLocalName(node) === "title";
}

/**
 *
 * @param {Node} node -
 * @param {string} attributeName -
 * @returns {Element[]} -
 */
function queryIdRefs(node, attributeName) {
  if (isElement(node) && node.hasAttribute(attributeName)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute check
    var ids = node.getAttribute(attributeName).split(" ");

    // Browsers that don't support shadow DOM won't have getRootNode
    var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    return ids.map(function (id) {
      return root.getElementById(id);
    }).filter(function (element) {
      return element !== null;
    }
    // TODO: why does this not narrow?
    );
  }

  return [];
}
function hasAnyConcreteRoles(node, roles) {
  if (isElement(node)) {
    return roles.indexOf(getRole(node)) !== -1;
  }
  return false;
}
//# sourceMappingURL=util.mjs.map
;// CONCATENATED MODULE: ./node_modules/dom-accessibility-api/dist/accessible-name-and-description.mjs
/**
 * implements https://w3c.github.io/accname/
 */




/**
 *  A string of characters where all carriage returns, newlines, tabs, and form-feeds are replaced with a single space, and multiple spaces are reduced to a single space. The string contains only character data; it does not contain any markup.
 */

/**
 *
 * @param {string} string -
 * @returns {FlatString} -
 */
function asFlatString(s) {
  return s.trim().replace(/\s\s+/g, " ");
}

/**
 *
 * @param node -
 * @param options - These are not optional to prevent accidentally calling it without options in `computeAccessibleName`
 * @returns {boolean} -
 */
function isHidden(node, getComputedStyleImplementation) {
  if (!isElement(node)) {
    return false;
  }
  if (node.hasAttribute("hidden") || node.getAttribute("aria-hidden") === "true") {
    return true;
  }
  var style = getComputedStyleImplementation(node);
  return style.getPropertyValue("display") === "none" || style.getPropertyValue("visibility") === "hidden";
}

/**
 * @param {Node} node -
 * @returns {boolean} - As defined in step 2E of https://w3c.github.io/accname/#mapping_additional_nd_te
 */
function isControl(node) {
  return hasAnyConcreteRoles(node, ["button", "combobox", "listbox", "textbox"]) || hasAbstractRole(node, "range");
}
function hasAbstractRole(node, role) {
  if (!isElement(node)) {
    return false;
  }
  switch (role) {
    case "range":
      return hasAnyConcreteRoles(node, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(role, "'. This is likely a bug :("));
  }
}

/**
 * element.querySelectorAll but also considers owned tree
 * @param element
 * @param selectors
 */
function querySelectorAllSubtree(element, selectors) {
  var elements = arrayFrom(element.querySelectorAll(selectors));
  queryIdRefs(element, "aria-owns").forEach(function (root) {
    // babel transpiles this assuming an iterator
    elements.push.apply(elements, arrayFrom(root.querySelectorAll(selectors)));
  });
  return elements;
}
function querySelectedOptions(listbox) {
  if (isHTMLSelectElement(listbox)) {
    // IE11 polyfill
    return listbox.selectedOptions || querySelectorAllSubtree(listbox, "[selected]");
  }
  return querySelectorAllSubtree(listbox, '[aria-selected="true"]');
}
function isMarkedPresentational(node) {
  return hasAnyConcreteRoles(node, ["none", "presentation"]);
}

/**
 * Elements specifically listed in html-aam
 *
 * We don't need this for `label` or `legend` elements.
 * Their implicit roles already allow "naming from content".
 *
 * sources:
 *
 * - https://w3c.github.io/html-aam/#table-element
 */
function isNativeHostLanguageTextAlternativeElement(node) {
  return isHTMLTableCaptionElement(node);
}

/**
 * https://w3c.github.io/aria/#namefromcontent
 */
function allowsNameFromContent(node) {
  return hasAnyConcreteRoles(node, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}

/**
 * TODO https://github.com/eps1lon/dom-accessibility-api/issues/100
 */
function isDescendantOfNativeHostLanguageTextAlternativeElement(
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- not implemented yet
node) {
  return false;
}
function getValueOfTextbox(element) {
  if (isHTMLInputElement(element) || isHTMLTextAreaElement(element)) {
    return element.value;
  }
  // https://github.com/eps1lon/dom-accessibility-api/issues/4
  return element.textContent || "";
}
function getTextualContent(declaration) {
  var content = declaration.getPropertyValue("content");
  if (/^["'].*["']$/.test(content)) {
    return content.slice(1, -1);
  }
  return "";
}

/**
 * https://html.spec.whatwg.org/multipage/forms.html#category-label
 * TODO: form-associated custom elements
 * @param element
 */
function isLabelableElement(element) {
  var localName = getLocalName(element);
  return localName === "button" || localName === "input" && element.getAttribute("type") !== "hidden" || localName === "meter" || localName === "output" || localName === "progress" || localName === "select" || localName === "textarea";
}

/**
 * > [...], then the first such descendant in tree order is the label element's labeled control.
 * -- https://html.spec.whatwg.org/multipage/forms.html#labeled-control
 * @param element
 */
function findLabelableElement(element) {
  if (isLabelableElement(element)) {
    return element;
  }
  var labelableElement = null;
  element.childNodes.forEach(function (childNode) {
    if (labelableElement === null && isElement(childNode)) {
      var descendantLabelableElement = findLabelableElement(childNode);
      if (descendantLabelableElement !== null) {
        labelableElement = descendantLabelableElement;
      }
    }
  });
  return labelableElement;
}

/**
 * Polyfill of HTMLLabelElement.control
 * https://html.spec.whatwg.org/multipage/forms.html#labeled-control
 * @param label
 */
function getControlOfLabel(label) {
  if (label.control !== undefined) {
    return label.control;
  }
  var htmlFor = label.getAttribute("for");
  if (htmlFor !== null) {
    return label.ownerDocument.getElementById(htmlFor);
  }
  return findLabelableElement(label);
}

/**
 * Polyfill of HTMLInputElement.labels
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels
 * @param element
 */
function getLabels(element) {
  var labelsProperty = element.labels;
  if (labelsProperty === null) {
    return labelsProperty;
  }
  if (labelsProperty !== undefined) {
    return arrayFrom(labelsProperty);
  }

  // polyfill
  if (!isLabelableElement(element)) {
    return null;
  }
  var document = element.ownerDocument;
  return arrayFrom(document.querySelectorAll("label")).filter(function (label) {
    return getControlOfLabel(label) === element;
  });
}

/**
 * Gets the contents of a slot used for computing the accname
 * @param slot
 */
function getSlotContents(slot) {
  // Computing the accessible name for elements containing slots is not
  // currently defined in the spec. This implementation reflects the
  // behavior of NVDA 2020.2/Firefox 81 and iOS VoiceOver/Safari 13.6.
  var assignedNodes = slot.assignedNodes();
  if (assignedNodes.length === 0) {
    // if no nodes are assigned to the slot, it displays the default content
    return arrayFrom(slot.childNodes);
  }
  return assignedNodes;
}

/**
 * implements https://w3c.github.io/accname/#mapping_additional_nd_te
 * @param root
 * @param options
 * @returns
 */
function computeTextAlternative(root) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var consultedNodes = new polyfills_SetLike();
  var window = safeWindow(root);
  var _options$compute = options.compute,
    compute = _options$compute === void 0 ? "name" : _options$compute,
    _options$computedStyl = options.computedStyleSupportsPseudoElements,
    computedStyleSupportsPseudoElements = _options$computedStyl === void 0 ? options.getComputedStyle !== undefined : _options$computedStyl,
    _options$getComputedS = options.getComputedStyle,
    getComputedStyle = _options$getComputedS === void 0 ? window.getComputedStyle.bind(window) : _options$getComputedS,
    _options$hidden = options.hidden,
    hidden = _options$hidden === void 0 ? false : _options$hidden;

  // 2F.i
  function computeMiscTextAlternative(node, context) {
    var accumulatedText = "";
    if (isElement(node) && computedStyleSupportsPseudoElements) {
      var pseudoBefore = getComputedStyle(node, "::before");
      var beforeContent = getTextualContent(pseudoBefore);
      accumulatedText = "".concat(beforeContent, " ").concat(accumulatedText);
    }

    // FIXME: Including aria-owns is not defined in the spec
    // But it is required in the web-platform-test
    var childNodes = isHTMLSlotElement(node) ? getSlotContents(node) : arrayFrom(node.childNodes).concat(queryIdRefs(node, "aria-owns"));
    childNodes.forEach(function (child) {
      var result = computeTextAlternative(child, {
        isEmbeddedInLabel: context.isEmbeddedInLabel,
        isReferenced: false,
        recursion: true
      });
      // TODO: Unclear why display affects delimiter
      // see https://github.com/w3c/accname/issues/3
      var display = isElement(child) ? getComputedStyle(child).getPropertyValue("display") : "inline";
      var separator = display !== "inline" ? " " : "";
      // trailing separator for wpt tests
      accumulatedText += "".concat(separator).concat(result).concat(separator);
    });
    if (isElement(node) && computedStyleSupportsPseudoElements) {
      var pseudoAfter = getComputedStyle(node, "::after");
      var afterContent = getTextualContent(pseudoAfter);
      accumulatedText = "".concat(accumulatedText, " ").concat(afterContent);
    }
    return accumulatedText.trim();
  }

  /**
   *
   * @param element
   * @param attributeName
   * @returns A string non-empty string or `null`
   */
  function useAttribute(element, attributeName) {
    var attribute = element.getAttributeNode(attributeName);
    if (attribute !== null && !consultedNodes.has(attribute) && attribute.value.trim() !== "") {
      consultedNodes.add(attribute);
      return attribute.value;
    }
    return null;
  }
  function computeTooltipAttributeValue(node) {
    if (!isElement(node)) {
      return null;
    }
    return useAttribute(node, "title");
  }
  function computeElementTextAlternative(node) {
    if (!isElement(node)) {
      return null;
    }

    // https://w3c.github.io/html-aam/#fieldset-and-legend-elements
    if (isHTMLFieldSetElement(node)) {
      consultedNodes.add(node);
      var children = arrayFrom(node.childNodes);
      for (var i = 0; i < children.length; i += 1) {
        var child = children[i];
        if (isHTMLLegendElement(child)) {
          return computeTextAlternative(child, {
            isEmbeddedInLabel: false,
            isReferenced: false,
            recursion: false
          });
        }
      }
    } else if (isHTMLTableElement(node)) {
      // https://w3c.github.io/html-aam/#table-element
      consultedNodes.add(node);
      var _children = arrayFrom(node.childNodes);
      for (var _i = 0; _i < _children.length; _i += 1) {
        var _child = _children[_i];
        if (isHTMLTableCaptionElement(_child)) {
          return computeTextAlternative(_child, {
            isEmbeddedInLabel: false,
            isReferenced: false,
            recursion: false
          });
        }
      }
    } else if (isSVGSVGElement(node)) {
      // https://www.w3.org/TR/svg-aam-1.0/
      consultedNodes.add(node);
      var _children2 = arrayFrom(node.childNodes);
      for (var _i2 = 0; _i2 < _children2.length; _i2 += 1) {
        var _child2 = _children2[_i2];
        if (isSVGTitleElement(_child2)) {
          return _child2.textContent;
        }
      }
      return null;
    } else if (getLocalName(node) === "img" || getLocalName(node) === "area") {
      // https://w3c.github.io/html-aam/#area-element
      // https://w3c.github.io/html-aam/#img-element
      var nameFromAlt = useAttribute(node, "alt");
      if (nameFromAlt !== null) {
        return nameFromAlt;
      }
    } else if (isHTMLOptGroupElement(node)) {
      var nameFromLabel = useAttribute(node, "label");
      if (nameFromLabel !== null) {
        return nameFromLabel;
      }
    }
    if (isHTMLInputElement(node) && (node.type === "button" || node.type === "submit" || node.type === "reset")) {
      // https://w3c.github.io/html-aam/#input-type-text-input-type-password-input-type-search-input-type-tel-input-type-email-input-type-url-and-textarea-element-accessible-description-computation
      var nameFromValue = useAttribute(node, "value");
      if (nameFromValue !== null) {
        return nameFromValue;
      }

      // TODO: l10n
      if (node.type === "submit") {
        return "Submit";
      }
      // TODO: l10n
      if (node.type === "reset") {
        return "Reset";
      }
    }
    var labels = getLabels(node);
    if (labels !== null && labels.length !== 0) {
      consultedNodes.add(node);
      return arrayFrom(labels).map(function (element) {
        return computeTextAlternative(element, {
          isEmbeddedInLabel: true,
          isReferenced: false,
          recursion: true
        });
      }).filter(function (label) {
        return label.length > 0;
      }).join(" ");
    }

    // https://w3c.github.io/html-aam/#input-type-image-accessible-name-computation
    // TODO: wpt test consider label elements but html-aam does not mention them
    // We follow existing implementations over spec
    if (isHTMLInputElement(node) && node.type === "image") {
      var _nameFromAlt = useAttribute(node, "alt");
      if (_nameFromAlt !== null) {
        return _nameFromAlt;
      }
      var nameFromTitle = useAttribute(node, "title");
      if (nameFromTitle !== null) {
        return nameFromTitle;
      }

      // TODO: l10n
      return "Submit Query";
    }
    if (hasAnyConcreteRoles(node, ["button"])) {
      // https://www.w3.org/TR/html-aam-1.0/#button-element
      var nameFromSubTree = computeMiscTextAlternative(node, {
        isEmbeddedInLabel: false,
        isReferenced: false
      });
      if (nameFromSubTree !== "") {
        return nameFromSubTree;
      }
    }
    return null;
  }
  function computeTextAlternative(current, context) {
    if (consultedNodes.has(current)) {
      return "";
    }

    // 2A
    if (!hidden && isHidden(current, getComputedStyle) && !context.isReferenced) {
      consultedNodes.add(current);
      return "";
    }

    // 2B
    var labelAttributeNode = isElement(current) ? current.getAttributeNode("aria-labelledby") : null;
    // TODO: Do we generally need to block query IdRefs of attributes we have already consulted?
    var labelElements = labelAttributeNode !== null && !consultedNodes.has(labelAttributeNode) ? queryIdRefs(current, "aria-labelledby") : [];
    if (compute === "name" && !context.isReferenced && labelElements.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- Can't be null here otherwise labelElements would be empty
      consultedNodes.add(labelAttributeNode);
      return labelElements.map(function (element) {
        // TODO: Chrome will consider repeated values i.e. use a node multiple times while we'll bail out in computeTextAlternative.
        return computeTextAlternative(element, {
          isEmbeddedInLabel: context.isEmbeddedInLabel,
          isReferenced: true,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: false
        });
      }).join(" ");
    }

    // 2C
    // Changed from the spec in anticipation of https://github.com/w3c/accname/issues/64
    // spec says we should only consider skipping if we have a non-empty label
    var skipToStep2E = context.recursion && isControl(current) && compute === "name";
    if (!skipToStep2E) {
      var ariaLabel = (isElement(current) && current.getAttribute("aria-label") || "").trim();
      if (ariaLabel !== "" && compute === "name") {
        consultedNodes.add(current);
        return ariaLabel;
      }

      // 2D
      if (!isMarkedPresentational(current)) {
        var elementTextAlternative = computeElementTextAlternative(current);
        if (elementTextAlternative !== null) {
          consultedNodes.add(current);
          return elementTextAlternative;
        }
      }
    }

    // special casing, cheating to make tests pass
    // https://github.com/w3c/accname/issues/67
    if (hasAnyConcreteRoles(current, ["menu"])) {
      consultedNodes.add(current);
      return "";
    }

    // 2E
    if (skipToStep2E || context.isEmbeddedInLabel || context.isReferenced) {
      if (hasAnyConcreteRoles(current, ["combobox", "listbox"])) {
        consultedNodes.add(current);
        var selectedOptions = querySelectedOptions(current);
        if (selectedOptions.length === 0) {
          // defined per test `name_heading_combobox`
          return isHTMLInputElement(current) ? current.value : "";
        }
        return arrayFrom(selectedOptions).map(function (selectedOption) {
          return computeTextAlternative(selectedOption, {
            isEmbeddedInLabel: context.isEmbeddedInLabel,
            isReferenced: false,
            recursion: true
          });
        }).join(" ");
      }
      if (hasAbstractRole(current, "range")) {
        consultedNodes.add(current);
        if (current.hasAttribute("aria-valuetext")) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
          return current.getAttribute("aria-valuetext");
        }
        if (current.hasAttribute("aria-valuenow")) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
          return current.getAttribute("aria-valuenow");
        }
        // Otherwise, use the value as specified by a host language attribute.
        return current.getAttribute("value") || "";
      }
      if (hasAnyConcreteRoles(current, ["textbox"])) {
        consultedNodes.add(current);
        return getValueOfTextbox(current);
      }
    }

    // 2F: https://w3c.github.io/accname/#step2F
    if (allowsNameFromContent(current) || isElement(current) && context.isReferenced || isNativeHostLanguageTextAlternativeElement(current) || isDescendantOfNativeHostLanguageTextAlternativeElement(current)) {
      var accumulatedText2F = computeMiscTextAlternative(current, {
        isEmbeddedInLabel: context.isEmbeddedInLabel,
        isReferenced: false
      });
      if (accumulatedText2F !== "") {
        consultedNodes.add(current);
        return accumulatedText2F;
      }
    }
    if (current.nodeType === current.TEXT_NODE) {
      consultedNodes.add(current);
      return current.textContent || "";
    }
    if (context.recursion) {
      consultedNodes.add(current);
      return computeMiscTextAlternative(current, {
        isEmbeddedInLabel: context.isEmbeddedInLabel,
        isReferenced: false
      });
    }
    var tooltipAttributeValue = computeTooltipAttributeValue(current);
    if (tooltipAttributeValue !== null) {
      consultedNodes.add(current);
      return tooltipAttributeValue;
    }

    // TODO should this be reachable?
    consultedNodes.add(current);
    return "";
  }
  return asFlatString(computeTextAlternative(root, {
    isEmbeddedInLabel: false,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: compute === "description",
    recursion: false
  }));
}
//# sourceMappingURL=accessible-name-and-description.mjs.map
;// CONCATENATED MODULE: ./node_modules/dom-accessibility-api/dist/accessible-description.mjs
function accessible_description_typeof(obj) { "@babel/helpers - typeof"; return accessible_description_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, accessible_description_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { accessible_description_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function accessible_description_defineProperty(obj, key, value) { key = accessible_description_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function accessible_description_toPropertyKey(arg) { var key = accessible_description_toPrimitive(arg, "string"); return accessible_description_typeof(key) === "symbol" ? key : String(key); }
function accessible_description_toPrimitive(input, hint) { if (accessible_description_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (accessible_description_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
 * @param root
 * @param options
 * @returns
 */
function computeAccessibleDescription(root) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var description = queryIdRefs(root, "aria-describedby").map(function (element) {
    return computeTextAlternative(element, _objectSpread(_objectSpread({}, options), {}, {
      compute: "description"
    }));
  }).join(" ");

  // TODO: Technically we need to make sure that node wasn't used for the accessible name
  //       This causes `description_1.0_combobox-focusable-manual` to fail
  //
  // https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation
  // says for so many elements to use the `title` that we assume all elements are considered
  if (description === "") {
    var title = root.getAttribute("title");
    description = title === null ? "" : title;
  }
  return description;
}
//# sourceMappingURL=accessible-description.mjs.map
;// CONCATENATED MODULE: ./node_modules/dom-accessibility-api/dist/accessible-name.mjs



/**
 * https://w3c.github.io/aria/#namefromprohibited
 */
function prohibitsNaming(node) {
  return hasAnyConcreteRoles(node, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}

/**
 * implements https://w3c.github.io/accname/#mapping_additional_nd_name
 * @param root
 * @param options
 * @returns
 */
function computeAccessibleName(root) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (prohibitsNaming(root)) {
    return "";
  }
  return computeTextAlternative(root, options);
}
//# sourceMappingURL=accessible-name.mjs.map
;// CONCATENATED MODULE: ./node_modules/dom-accessibility-api/dist/index.mjs




//# sourceMappingURL=index.mjs.map
// EXTERNAL MODULE: ./node_modules/aria-query/lib/index.js
var lib = __webpack_require__(2461);
// EXTERNAL MODULE: ./node_modules/lz-string/libs/lz-string.js
var lz_string = __webpack_require__(6961);
var lz_string_default = /*#__PURE__*/__webpack_require__.n(lz_string);
;// CONCATENATED MODULE: ./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js
/* module decorator */ module = __webpack_require__.hmd(module);






/**
 * Source: https://github.com/facebook/jest/blob/e7bb6a1e26ffab90611b2593912df15b69315611/packages/pretty-format/src/plugins/DOMElement.ts
 */
/* eslint-disable -- trying to stay as close to the original as possible */
/* istanbul ignore file */

function escapeHTML(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
// Return empty string if keys is empty.
const printProps = (keys, props, config, indentation, depth, refs, printer) => {
  const indentationNext = indentation + config.indent;
  const colors = config.colors;
  return keys.map(key => {
    const value = props[key];
    let printed = printer(value, config, indentationNext, depth, refs);
    if (typeof value !== 'string') {
      if (printed.indexOf('\n') !== -1) {
        printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
      }
      printed = '{' + printed + '}';
    }
    return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + '=' + colors.value.open + printed + colors.value.close;
  }).join('');
};

// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
const NodeTypeTextNode = 3;

// Return empty string if children is empty.
const printChildren = (children, config, indentation, depth, refs, printer) => children.map(child => {
  const printedChild = typeof child === 'string' ? printText(child, config) : printer(child, config, indentation, depth, refs);
  if (printedChild === '' && typeof child === 'object' && child !== null && child.nodeType !== NodeTypeTextNode) {
    // A plugin serialized this Node to '' meaning we should ignore it.
    return '';
  }
  return config.spacingOuter + indentation + printedChild;
}).join('');
const printText = (text, config) => {
  const contentColor = config.colors.content;
  return contentColor.open + escapeHTML(text) + contentColor.close;
};
const printComment = (comment, config) => {
  const commentColor = config.colors.comment;
  return commentColor.open + '<!--' + escapeHTML(comment) + '-->' + commentColor.close;
};

// Separate the functions to format props, children, and element,
// so a plugin could override a particular function, if needed.
// Too bad, so sad: the traditional (but unnecessary) space
// in a self-closing tagColor requires a second test of printedProps.
const printElement = (type, printedProps, printedChildren, config, indentation) => {
  const tagColor = config.colors.tag;
  return tagColor.open + '<' + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? '>' + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + '</' + type : (printedProps && !config.min ? '' : ' ') + '/') + '>' + tagColor.close;
};
const printElementAsLeaf = (type, config) => {
  const tagColor = config.colors.tag;
  return tagColor.open + '<' + type + tagColor.close + ' …' + tagColor.open + ' />' + tagColor.close;
};
const ELEMENT_NODE$1 = 1;
const TEXT_NODE$1 = 3;
const COMMENT_NODE$1 = 8;
const FRAGMENT_NODE = 11;
const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
const testNode = val => {
  const constructorName = val.constructor.name;
  const {
    nodeType,
    tagName
  } = val;
  const isCustomElement = typeof tagName === 'string' && tagName.includes('-') || typeof val.hasAttribute === 'function' && val.hasAttribute('is');
  return nodeType === ELEMENT_NODE$1 && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE$1 && constructorName === 'Text' || nodeType === COMMENT_NODE$1 && constructorName === 'Comment' || nodeType === FRAGMENT_NODE && constructorName === 'DocumentFragment';
};
function nodeIsText(node) {
  return node.nodeType === TEXT_NODE$1;
}
function nodeIsComment(node) {
  return node.nodeType === COMMENT_NODE$1;
}
function nodeIsFragment(node) {
  return node.nodeType === FRAGMENT_NODE;
}
function createDOMElementFilter(filterNode) {
  return {
    test: val => {
      var _val$constructor2;
      return (val == null ? void 0 : (_val$constructor2 = val.constructor) == null ? void 0 : _val$constructor2.name) && testNode(val);
    },
    serialize: (node, config, indentation, depth, refs, printer) => {
      if (nodeIsText(node)) {
        return printText(node.data, config);
      }
      if (nodeIsComment(node)) {
        return printComment(node.data, config);
      }
      const type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
      if (++depth > config.maxDepth) {
        return printElementAsLeaf(type, config);
      }
      return printElement(type, printProps(nodeIsFragment(node) ? [] : Array.from(node.attributes).map(attr => attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
        props[attribute.name] = attribute.value;
        return props;
      }, {}), config, indentation + config.indent, depth, refs, printer), printChildren(Array.prototype.slice.call(node.childNodes || node.children).filter(filterNode), config, indentation + config.indent, depth, refs, printer), config, indentation);
    }
  };
}

// We try to load node dependencies
let chalk = null;
let readFileSync = null;
let codeFrameColumns = null;
try {
  const nodeRequire = module && module.require;
  readFileSync = nodeRequire.call(module, 'fs').readFileSync;
  codeFrameColumns = nodeRequire.call(module, '@babel/code-frame').codeFrameColumns;
  chalk = nodeRequire.call(module, 'chalk');
} catch {
  // We're in a browser environment
}

// frame has the form "at myMethod (location/to/my/file.js:10:2)"
function getCodeFrame(frame) {
  const locationStart = frame.indexOf('(') + 1;
  const locationEnd = frame.indexOf(')');
  const frameLocation = frame.slice(locationStart, locationEnd);
  const frameLocationElements = frameLocation.split(':');
  const [filename, line, column] = [frameLocationElements[0], parseInt(frameLocationElements[1], 10), parseInt(frameLocationElements[2], 10)];
  let rawFileContents = '';
  try {
    rawFileContents = readFileSync(filename, 'utf-8');
  } catch {
    return '';
  }
  const codeFrame = codeFrameColumns(rawFileContents, {
    start: {
      line,
      column
    }
  }, {
    highlightCode: true,
    linesBelow: 0
  });
  return chalk.dim(frameLocation) + "\n" + codeFrame + "\n";
}
function getUserCodeFrame() {
  // If we couldn't load dependencies, we can't generate the user trace
  /* istanbul ignore next */
  if (!readFileSync || !codeFrameColumns) {
    return '';
  }
  const err = new Error();
  const firstClientCodeFrame = err.stack.split('\n').slice(1) // Remove first line which has the form "Error: TypeError"
  .find(frame => !frame.includes('node_modules/')); // Ignore frames from 3rd party libraries

  return getCodeFrame(firstClientCodeFrame);
}

// Constant node.nodeType for text nodes, see:
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
const TEXT_NODE = 3;
function jestFakeTimersAreEnabled() {
  /* istanbul ignore else */
  // eslint-disable-next-line
  if (typeof jest !== 'undefined' && jest !== null) {
    return (
      // legacy timers
      setTimeout._isMockFunction === true ||
      // modern timers
      // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
      Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    );
  }
  // istanbul ignore next
  return false;
}
function getDocument() {
  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    throw new Error('Could not find default container');
  }
  return window.document;
}
function getWindowFromNode(node) {
  if (node.defaultView) {
    // node is document
    return node.defaultView;
  } else if (node.ownerDocument && node.ownerDocument.defaultView) {
    // node is a DOM node
    return node.ownerDocument.defaultView;
  } else if (node.window) {
    // node is window
    return node.window;
  } else if (node.ownerDocument && node.ownerDocument.defaultView === null) {
    throw new Error("It looks like the window object is not available for the provided node.");
  } else if (node.then instanceof Function) {
    throw new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?");
  } else if (Array.isArray(node)) {
    throw new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?");
  } else if (typeof node.debug === 'function' && typeof node.logTestingPlaygroundURL === 'function') {
    throw new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?");
  } else {
    // The user passed something unusual to a calling function
    throw new Error("The given node is not an Element, the node type is: " + typeof node + ".");
  }
}
function checkContainerType(container) {
  if (!container || !(typeof container.querySelector === 'function') || !(typeof container.querySelectorAll === 'function')) {
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + getTypeName(container) + ".");
  }
  function getTypeName(object) {
    if (typeof object === 'object') {
      return object === null ? 'null' : object.constructor.name;
    }
    return typeof object;
  }
}

const shouldHighlight = () => {
  let colors;
  try {
    var _process, _process$env;
    colors = JSON.parse((_process = process) == null ? void 0 : (_process$env = _process.env) == null ? void 0 : _process$env.COLORS);
  } catch (e) {
    // If this throws, process?.env?.COLORS wasn't parsable. Since we only
    // care about `true` or `false`, we can safely ignore the error.
  }
  if (typeof colors === 'boolean') {
    // If `colors` is set explicitly (both `true` and `false`), use that value.
    return colors;
  } else {
    // If `colors` is not set, colorize if we're in node.
    return typeof process !== 'undefined' && process.versions !== undefined && process.versions.node !== undefined;
  }
};
const {
  DOMCollection
} = build.plugins;

// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
const ELEMENT_NODE = 1;
const COMMENT_NODE = 8;

// https://github.com/facebook/jest/blob/615084195ae1ae61ddd56162c62bbdda17587569/packages/pretty-format/src/plugins/DOMElement.ts#L50
function filterCommentsAndDefaultIgnoreTagsTags(value) {
  return value.nodeType !== COMMENT_NODE && (value.nodeType !== ELEMENT_NODE || !value.matches(getConfig().defaultIgnore));
}
function prettyDOM(dom, maxLength, options) {
  if (options === void 0) {
    options = {};
  }
  if (!dom) {
    dom = getDocument().body;
  }
  if (typeof maxLength !== 'number') {
    maxLength = typeof process !== 'undefined' && process.env.DEBUG_PRINT_LIMIT || 7000;
  }
  if (maxLength === 0) {
    return '';
  }
  if (dom.documentElement) {
    dom = dom.documentElement;
  }
  let domTypeName = typeof dom;
  if (domTypeName === 'object') {
    domTypeName = dom.constructor.name;
  } else {
    // To don't fall with `in` operator
    dom = {};
  }
  if (!('outerHTML' in dom)) {
    throw new TypeError("Expected an element or document but got " + domTypeName);
  }
  const {
    filterNode = filterCommentsAndDefaultIgnoreTagsTags,
    ...prettyFormatOptions
  } = options;
  const debugContent = build/* format */.WU(dom, {
    plugins: [createDOMElementFilter(filterNode), DOMCollection],
    printFunctionName: false,
    highlight: shouldHighlight(),
    ...prettyFormatOptions
  });
  return maxLength !== undefined && dom.outerHTML.length > maxLength ? debugContent.slice(0, maxLength) + "..." : debugContent;
}
const logDOM = function () {
  const userCodeFrame = getUserCodeFrame();
  if (userCodeFrame) {
    console.log(prettyDOM(...arguments) + "\n\n" + userCodeFrame);
  } else {
    console.log(prettyDOM(...arguments));
  }
};

// It would be cleaner for this to live inside './queries', but
// other parts of the code assume that all exports from
// './queries' are query functions.
let config = {
  testIdAttribute: 'data-testid',
  asyncUtilTimeout: 1000,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: cb => cb(),
  unstable_advanceTimersWrapper: cb => cb(),
  eventWrapper: cb => cb(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: false,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: 'script, style',
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: false,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: false,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(message, container) {
    const prettifiedDOM = prettyDOM(container);
    const error = new Error([message, "Ignored nodes: comments, " + config.defaultIgnore + "\n" + prettifiedDOM].filter(Boolean).join('\n\n'));
    error.name = 'TestingLibraryElementError';
    return error;
  },
  _disableExpensiveErrorDiagnostics: false,
  computedStyleSupportsPseudoElements: false
};
function runWithExpensiveErrorDiagnosticsDisabled(callback) {
  try {
    config._disableExpensiveErrorDiagnostics = true;
    return callback();
  } finally {
    config._disableExpensiveErrorDiagnostics = false;
  }
}
function configure(newConfig) {
  if (typeof newConfig === 'function') {
    // Pass the existing config out to the provided function
    // and accept a delta in return
    newConfig = newConfig(config);
  }

  // Merge the incoming config delta
  config = {
    ...config,
    ...newConfig
  };
}
function getConfig() {
  return config;
}

const labelledNodeNames = ['button', 'meter', 'output', 'progress', 'select', 'textarea', 'input'];
function getTextContent(node) {
  if (labelledNodeNames.includes(node.nodeName.toLowerCase())) {
    return '';
  }
  if (node.nodeType === TEXT_NODE) return node.textContent;
  return Array.from(node.childNodes).map(childNode => getTextContent(childNode)).join('');
}
function getLabelContent(element) {
  let textContent;
  if (element.tagName.toLowerCase() === 'label') {
    textContent = getTextContent(element);
  } else {
    textContent = element.value || element.textContent;
  }
  return textContent;
}

// Based on https://github.com/eps1lon/dom-accessibility-api/pull/352
function getRealLabels(element) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- types are not aware of older browsers that don't implement `labels`
  if (element.labels !== undefined) {
    var _labels;
    return (_labels = element.labels) != null ? _labels : [];
  }
  if (!isLabelable(element)) return [];
  const labels = element.ownerDocument.querySelectorAll('label');
  return Array.from(labels).filter(label => label.control === element);
}
function isLabelable(element) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(element.tagName) || element.tagName === 'INPUT' && element.getAttribute('type') !== 'hidden';
}
function dom_esm_getLabels(container, element, _temp) {
  let {
    selector = '*'
  } = _temp === void 0 ? {} : _temp;
  const ariaLabelledBy = element.getAttribute('aria-labelledby');
  const labelsId = ariaLabelledBy ? ariaLabelledBy.split(' ') : [];
  return labelsId.length ? labelsId.map(labelId => {
    const labellingElement = container.querySelector("[id=\"" + labelId + "\"]");
    return labellingElement ? {
      content: getLabelContent(labellingElement),
      formControl: null
    } : {
      content: '',
      formControl: null
    };
  }) : Array.from(getRealLabels(element)).map(label => {
    const textToMatch = getLabelContent(label);
    const formControlSelector = 'button, input, meter, output, progress, select, textarea';
    const labelledFormControl = Array.from(label.querySelectorAll(formControlSelector)).filter(formControlElement => formControlElement.matches(selector))[0];
    return {
      content: textToMatch,
      formControl: labelledFormControl
    };
  });
}

function assertNotNullOrUndefined(matcher) {
  if (matcher === null || matcher === undefined) {
    throw new Error( // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
    "It looks like " + matcher + " was passed instead of a matcher. Did you do something like getByText(" + matcher + ")?");
  }
}
function fuzzyMatches(textToMatch, node, matcher, normalizer) {
  if (typeof textToMatch !== 'string') {
    return false;
  }
  assertNotNullOrUndefined(matcher);
  const normalizedText = normalizer(textToMatch);
  if (typeof matcher === 'string' || typeof matcher === 'number') {
    return normalizedText.toLowerCase().includes(matcher.toString().toLowerCase());
  } else if (typeof matcher === 'function') {
    return matcher(normalizedText, node);
  } else {
    return matchRegExp(matcher, normalizedText);
  }
}
function matches(textToMatch, node, matcher, normalizer) {
  if (typeof textToMatch !== 'string') {
    return false;
  }
  assertNotNullOrUndefined(matcher);
  const normalizedText = normalizer(textToMatch);
  if (matcher instanceof Function) {
    return matcher(normalizedText, node);
  } else if (matcher instanceof RegExp) {
    return matchRegExp(matcher, normalizedText);
  } else {
    return normalizedText === String(matcher);
  }
}
function getDefaultNormalizer(_temp) {
  let {
    trim = true,
    collapseWhitespace = true
  } = _temp === void 0 ? {} : _temp;
  return text => {
    let normalizedText = text;
    normalizedText = trim ? normalizedText.trim() : normalizedText;
    normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, ' ') : normalizedText;
    return normalizedText;
  };
}

/**
 * Constructs a normalizer to pass to functions in matches.js
 * @param {boolean|undefined} trim The user-specified value for `trim`, without
 * any defaulting having been applied
 * @param {boolean|undefined} collapseWhitespace The user-specified value for
 * `collapseWhitespace`, without any defaulting having been applied
 * @param {Function|undefined} normalizer The user-specified normalizer
 * @returns {Function} A normalizer
 */

function makeNormalizer(_ref) {
  let {
    trim,
    collapseWhitespace,
    normalizer
  } = _ref;
  if (!normalizer) {
    // No custom normalizer specified. Just use default.
    return getDefaultNormalizer({
      trim,
      collapseWhitespace
    });
  }
  if (typeof trim !== 'undefined' || typeof collapseWhitespace !== 'undefined') {
    // They've also specified a value for trim or collapseWhitespace
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. ' + 'If you want to use the default trim and collapseWhitespace logic in your normalizer, ' + 'use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  }
  return normalizer;
}
function matchRegExp(matcher, text) {
  const match = matcher.test(text);
  if (matcher.global && matcher.lastIndex !== 0) {
    console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.");
    matcher.lastIndex = 0;
  }
  return match;
}

function getNodeText(node) {
  if (node.matches('input[type=submit], input[type=button], input[type=reset]')) {
    return node.value;
  }
  return Array.from(node.childNodes).filter(child => child.nodeType === TEXT_NODE && Boolean(child.textContent)).map(c => c.textContent).join('');
}

const elementRoleList = buildElementRoleList(lib/* elementRoles */.Qv);

/**
 * @param {Element} element -
 * @returns {boolean} - `true` if `element` and its subtree are inaccessible
 */
function isSubtreeInaccessible(element) {
  if (element.hidden === true) {
    return true;
  }
  if (element.getAttribute('aria-hidden') === 'true') {
    return true;
  }
  const window = element.ownerDocument.defaultView;
  if (window.getComputedStyle(element).display === 'none') {
    return true;
  }
  return false;
}

/**
 * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
 * which should only be used for elements with a non-presentational role i.e.
 * `role="none"` and `role="presentation"` will not be excluded.
 *
 * Implements aria-hidden semantics (i.e. parent overrides child)
 * Ignores "Child Presentational: True" characteristics
 *
 * @param {Element} element -
 * @param {object} [options] -
 * @param {function (element: Element): boolean} options.isSubtreeInaccessible -
 * can be used to return cached results from previous isSubtreeInaccessible calls
 * @returns {boolean} true if excluded, otherwise false
 */
function isInaccessible(element, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    isSubtreeInaccessible: isSubtreeInaccessibleImpl = isSubtreeInaccessible
  } = options;
  const window = element.ownerDocument.defaultView;
  // since visibility is inherited we can exit early
  if (window.getComputedStyle(element).visibility === 'hidden') {
    return true;
  }
  let currentElement = element;
  while (currentElement) {
    if (isSubtreeInaccessibleImpl(currentElement)) {
      return true;
    }
    currentElement = currentElement.parentElement;
  }
  return false;
}
function getImplicitAriaRoles(currentNode) {
  // eslint bug here:
  // eslint-disable-next-line no-unused-vars
  for (const {
    match,
    roles
  } of elementRoleList) {
    if (match(currentNode)) {
      return [...roles];
    }
  }
  return [];
}
function buildElementRoleList(elementRolesMap) {
  function makeElementSelector(_ref) {
    let {
      name,
      attributes
    } = _ref;
    return "" + name + attributes.map(_ref2 => {
      let {
        name: attributeName,
        value,
        constraints = []
      } = _ref2;
      const shouldNotExist = constraints.indexOf('undefined') !== -1;
      if (shouldNotExist) {
        return ":not([" + attributeName + "])";
      } else if (value) {
        return "[" + attributeName + "=\"" + value + "\"]";
      } else {
        return "[" + attributeName + "]";
      }
    }).join('');
  }
  function getSelectorSpecificity(_ref3) {
    let {
      attributes = []
    } = _ref3;
    return attributes.length;
  }
  function bySelectorSpecificity(_ref4, _ref5) {
    let {
      specificity: leftSpecificity
    } = _ref4;
    let {
      specificity: rightSpecificity
    } = _ref5;
    return rightSpecificity - leftSpecificity;
  }
  function match(element) {
    let {
      attributes = []
    } = element;

    // https://github.com/testing-library/dom-testing-library/issues/814
    const typeTextIndex = attributes.findIndex(attribute => attribute.value && attribute.name === 'type' && attribute.value === 'text');
    if (typeTextIndex >= 0) {
      // not using splice to not mutate the attributes array
      attributes = [...attributes.slice(0, typeTextIndex), ...attributes.slice(typeTextIndex + 1)];
    }
    const selector = makeElementSelector({
      ...element,
      attributes
    });
    return node => {
      if (typeTextIndex >= 0 && node.type !== 'text') {
        return false;
      }
      return node.matches(selector);
    };
  }
  let result = [];

  // eslint bug here:
  // eslint-disable-next-line no-unused-vars
  for (const [element, roles] of elementRolesMap.entries()) {
    result = [...result, {
      match: match(element),
      roles: Array.from(roles),
      specificity: getSelectorSpecificity(element)
    }];
  }
  return result.sort(bySelectorSpecificity);
}
function getRoles(container, _temp) {
  let {
    hidden = false
  } = _temp === void 0 ? {} : _temp;
  function flattenDOM(node) {
    return [node, ...Array.from(node.children).reduce((acc, child) => [...acc, ...flattenDOM(child)], [])];
  }
  return flattenDOM(container).filter(element => {
    return hidden === false ? isInaccessible(element) === false : true;
  }).reduce((acc, node) => {
    let roles = [];
    // TODO: This violates html-aria which does not allow any role on every element
    if (node.hasAttribute('role')) {
      roles = node.getAttribute('role').split(' ').slice(0, 1);
    } else {
      roles = getImplicitAriaRoles(node);
    }
    return roles.reduce((rolesAcc, role) => Array.isArray(rolesAcc[role]) ? {
      ...rolesAcc,
      [role]: [...rolesAcc[role], node]
    } : {
      ...rolesAcc,
      [role]: [node]
    }, acc);
  }, {});
}
function prettyRoles(dom, _ref6) {
  let {
    hidden,
    includeDescription
  } = _ref6;
  const roles = getRoles(dom, {
    hidden
  });
  // We prefer to skip generic role, we don't recommend it
  return Object.entries(roles).filter(_ref7 => {
    let [role] = _ref7;
    return role !== 'generic';
  }).map(_ref8 => {
    let [role, elements] = _ref8;
    const delimiterBar = '-'.repeat(50);
    const elementsString = elements.map(el => {
      const nameString = "Name \"" + computeAccessibleName(el, {
        computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
      }) + "\":\n";
      const domString = prettyDOM(el.cloneNode(false));
      if (includeDescription) {
        const descriptionString = "Description \"" + computeAccessibleDescription(el, {
          computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
        }) + "\":\n";
        return "" + nameString + descriptionString + domString;
      }
      return "" + nameString + domString;
    }).join('\n\n');
    return role + ":\n\n" + elementsString + "\n\n" + delimiterBar;
  }).join('\n');
}
const logRoles = function (dom, _temp2) {
  let {
    hidden = false
  } = _temp2 === void 0 ? {} : _temp2;
  return console.log(prettyRoles(dom, {
    hidden
  }));
};

/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)selected, undefined if not selectable
 */
function computeAriaSelected(element) {
  // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
  // https://www.w3.org/TR/html-aam-1.0/#details-id-97
  if (element.tagName === 'OPTION') {
    return element.selected;
  }

  // explicit value
  return checkBooleanAttribute(element, 'aria-selected');
}

/**
 * @param {Element} element -
 * @returns {boolean} -
 */
function computeAriaBusy(element) {
  // https://www.w3.org/TR/wai-aria-1.1/#aria-busy
  return element.getAttribute('aria-busy') === 'true';
}

/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)checked, undefined if not checked-able
 */
function computeAriaChecked(element) {
  // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
  // https://www.w3.org/TR/html-aam-1.0/#details-id-56
  // https://www.w3.org/TR/html-aam-1.0/#details-id-67
  if ('indeterminate' in element && element.indeterminate) {
    return undefined;
  }
  if ('checked' in element) {
    return element.checked;
  }

  // explicit value
  return checkBooleanAttribute(element, 'aria-checked');
}

/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)pressed, undefined if not press-able
 */
function computeAriaPressed(element) {
  // https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
  return checkBooleanAttribute(element, 'aria-pressed');
}

/**
 * @param {Element} element -
 * @returns {boolean | string | null} -
 */
function computeAriaCurrent(element) {
  var _ref9, _checkBooleanAttribut;
  // https://www.w3.org/TR/wai-aria-1.1/#aria-current
  return (_ref9 = (_checkBooleanAttribut = checkBooleanAttribute(element, 'aria-current')) != null ? _checkBooleanAttribut : element.getAttribute('aria-current')) != null ? _ref9 : false;
}

/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)expanded, undefined if not expand-able
 */
function computeAriaExpanded(element) {
  // https://www.w3.org/TR/wai-aria-1.1/#aria-expanded
  return checkBooleanAttribute(element, 'aria-expanded');
}
function checkBooleanAttribute(element, attribute) {
  const attributeValue = element.getAttribute(attribute);
  if (attributeValue === 'true') {
    return true;
  }
  if (attributeValue === 'false') {
    return false;
  }
  return undefined;
}

/**
 * @param {Element} element -
 * @returns {number | undefined} - number if implicit heading or aria-level present, otherwise undefined
 */
function computeHeadingLevel(element) {
  // https://w3c.github.io/html-aam/#el-h1-h6
  // https://w3c.github.io/html-aam/#el-h1-h6
  const implicitHeadingLevels = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  // explicit aria-level value
  // https://www.w3.org/TR/wai-aria-1.2/#aria-level
  const ariaLevelAttribute = element.getAttribute('aria-level') && Number(element.getAttribute('aria-level'));
  return ariaLevelAttribute || implicitHeadingLevels[element.tagName];
}

/**
 * @param {Element} element -
 * @returns {number | undefined} -
 */
function computeAriaValueNow(element) {
  const valueNow = element.getAttribute('aria-valuenow');
  return valueNow === null ? undefined : +valueNow;
}

/**
 * @param {Element} element -
 * @returns {number | undefined} -
 */
function computeAriaValueMax(element) {
  const valueMax = element.getAttribute('aria-valuemax');
  return valueMax === null ? undefined : +valueMax;
}

/**
 * @param {Element} element -
 * @returns {number | undefined} -
 */
function computeAriaValueMin(element) {
  const valueMin = element.getAttribute('aria-valuemin');
  return valueMin === null ? undefined : +valueMin;
}

/**
 * @param {Element} element -
 * @returns {string | undefined} -
 */
function computeAriaValueText(element) {
  const valueText = element.getAttribute('aria-valuetext');
  return valueText === null ? undefined : valueText;
}

const normalize = getDefaultNormalizer();
function escapeRegExp(string) {
  return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function getRegExpMatcher(string) {
  return new RegExp(escapeRegExp(string.toLowerCase()), 'i');
}
function makeSuggestion(queryName, element, content, _ref) {
  let {
    variant,
    name
  } = _ref;
  let warning = '';
  const queryOptions = {};
  const queryArgs = [['Role', 'TestId'].includes(queryName) ? content : getRegExpMatcher(content)];
  if (name) {
    queryOptions.name = getRegExpMatcher(name);
  }
  if (queryName === 'Role' && isInaccessible(element)) {
    queryOptions.hidden = true;
    warning = "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    ";
  }
  if (Object.keys(queryOptions).length > 0) {
    queryArgs.push(queryOptions);
  }
  const queryMethod = variant + "By" + queryName;
  return {
    queryName,
    queryMethod,
    queryArgs,
    variant,
    warning,
    toString() {
      if (warning) {
        console.warn(warning);
      }
      let [text, options] = queryArgs;
      text = typeof text === 'string' ? "'" + text + "'" : text;
      options = options ? ", { " + Object.entries(options).map(_ref2 => {
        let [k, v] = _ref2;
        return k + ": " + v;
      }).join(', ') + " }" : '';
      return queryMethod + "(" + text + options + ")";
    }
  };
}
function canSuggest(currentMethod, requestedMethod, data) {
  return data && (!requestedMethod || requestedMethod.toLowerCase() === currentMethod.toLowerCase());
}
function getSuggestedQuery(element, variant, method) {
  var _element$getAttribute, _getImplicitAriaRoles;
  if (variant === void 0) {
    variant = 'get';
  }
  // don't create suggestions for script and style elements
  if (element.matches(getConfig().defaultIgnore)) {
    return undefined;
  }

  //We prefer to suggest something else if the role is generic
  const role = (_element$getAttribute = element.getAttribute('role')) != null ? _element$getAttribute : (_getImplicitAriaRoles = getImplicitAriaRoles(element)) == null ? void 0 : _getImplicitAriaRoles[0];
  if (role !== 'generic' && canSuggest('Role', method, role)) {
    return makeSuggestion('Role', element, role, {
      variant,
      name: computeAccessibleName(element, {
        computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
      })
    });
  }
  const labelText = dom_esm_getLabels(document, element).map(label => label.content).join(' ');
  if (canSuggest('LabelText', method, labelText)) {
    return makeSuggestion('LabelText', element, labelText, {
      variant
    });
  }
  const placeholderText = element.getAttribute('placeholder');
  if (canSuggest('PlaceholderText', method, placeholderText)) {
    return makeSuggestion('PlaceholderText', element, placeholderText, {
      variant
    });
  }
  const textContent = normalize(getNodeText(element));
  if (canSuggest('Text', method, textContent)) {
    return makeSuggestion('Text', element, textContent, {
      variant
    });
  }
  if (canSuggest('DisplayValue', method, element.value)) {
    return makeSuggestion('DisplayValue', element, normalize(element.value), {
      variant
    });
  }
  const alt = element.getAttribute('alt');
  if (canSuggest('AltText', method, alt)) {
    return makeSuggestion('AltText', element, alt, {
      variant
    });
  }
  const title = element.getAttribute('title');
  if (canSuggest('Title', method, title)) {
    return makeSuggestion('Title', element, title, {
      variant
    });
  }
  const testId = element.getAttribute(getConfig().testIdAttribute);
  if (canSuggest('TestId', method, testId)) {
    return makeSuggestion('TestId', element, testId, {
      variant
    });
  }
  return undefined;
}

// This is so the stack trace the developer sees is one that's
// closer to their code (because async stack traces are hard to follow).
function copyStackTrace(target, source) {
  target.stack = source.stack.replace(source.message, target.message);
}
function waitFor(callback, _ref) {
  let {
    container = getDocument(),
    timeout = getConfig().asyncUtilTimeout,
    showOriginalStackTrace = getConfig().showOriginalStackTrace,
    stackTraceError,
    interval = 50,
    onTimeout = error => {
      error.message = getConfig().getElementError(error.message, container).message;
      return error;
    },
    mutationObserverOptions = {
      subtree: true,
      childList: true,
      attributes: true,
      characterData: true
    }
  } = _ref;
  if (typeof callback !== 'function') {
    throw new TypeError('Received `callback` arg must be a function');
  }
  return new Promise(async (resolve, reject) => {
    let lastError, intervalId, observer;
    let finished = false;
    let promiseStatus = 'idle';
    const overallTimeoutTimer = setTimeout(handleTimeout, timeout);
    const usingJestFakeTimers = jestFakeTimersAreEnabled();
    if (usingJestFakeTimers) {
      const {
        unstable_advanceTimersWrapper: advanceTimersWrapper
      } = getConfig();
      checkCallback();
      // this is a dangerous rule to disable because it could lead to an
      // infinite loop. However, eslint isn't smart enough to know that we're
      // setting finished inside `onDone` which will be called when we're done
      // waiting or when we've timed out.
      // eslint-disable-next-line no-unmodified-loop-condition
      while (!finished) {
        if (!jestFakeTimersAreEnabled()) {
          const error = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          if (!showOriginalStackTrace) copyStackTrace(error, stackTraceError);
          reject(error);
          return;
        }

        // In this rare case, we *need* to wait for in-flight promises
        // to resolve before continuing. We don't need to take advantage
        // of parallelization so we're fine.
        // https://stackoverflow.com/a/59243586/971592
        // eslint-disable-next-line no-await-in-loop
        await advanceTimersWrapper(async () => {
          // we *could* (maybe should?) use `advanceTimersToNextTimer` but it's
          // possible that could make this loop go on forever if someone is using
          // third party code that's setting up recursive timers so rapidly that
          // the user's timer's don't get a chance to resolve. So we'll advance
          // by an interval instead. (We have a test for this case).
          jest.advanceTimersByTime(interval);
        });

        // It's really important that checkCallback is run *before* we flush
        // in-flight promises. To be honest, I'm not sure why, and I can't quite
        // think of a way to reproduce the problem in a test, but I spent
        // an entire day banging my head against a wall on this.
        checkCallback();
        if (finished) {
          break;
        }
      }
    } else {
      try {
        checkContainerType(container);
      } catch (e) {
        reject(e);
        return;
      }
      intervalId = setInterval(checkRealTimersCallback, interval);
      const {
        MutationObserver
      } = getWindowFromNode(container);
      observer = new MutationObserver(checkRealTimersCallback);
      observer.observe(container, mutationObserverOptions);
      checkCallback();
    }
    function onDone(error, result) {
      finished = true;
      clearTimeout(overallTimeoutTimer);
      if (!usingJestFakeTimers) {
        clearInterval(intervalId);
        observer.disconnect();
      }
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    }
    function checkRealTimersCallback() {
      if (jestFakeTimersAreEnabled()) {
        const error = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        if (!showOriginalStackTrace) copyStackTrace(error, stackTraceError);
        return reject(error);
      } else {
        return checkCallback();
      }
    }
    function checkCallback() {
      if (promiseStatus === 'pending') return;
      try {
        const result = runWithExpensiveErrorDiagnosticsDisabled(callback);
        if (typeof (result == null ? void 0 : result.then) === 'function') {
          promiseStatus = 'pending';
          result.then(resolvedValue => {
            promiseStatus = 'resolved';
            onDone(null, resolvedValue);
          }, rejectedValue => {
            promiseStatus = 'rejected';
            lastError = rejectedValue;
          });
        } else {
          onDone(null, result);
        }
        // If `callback` throws, wait for the next mutation, interval, or timeout.
      } catch (error) {
        // Save the most recent callback error to reject the promise with it in the event of a timeout
        lastError = error;
      }
    }
    function handleTimeout() {
      let error;
      if (lastError) {
        error = lastError;
        if (!showOriginalStackTrace && error.name === 'TestingLibraryElementError') {
          copyStackTrace(error, stackTraceError);
        }
      } else {
        error = new Error('Timed out in waitFor.');
        if (!showOriginalStackTrace) {
          copyStackTrace(error, stackTraceError);
        }
      }
      onDone(onTimeout(error), null);
    }
  });
}
function waitForWrapper(callback, options) {
  // create the error here so its stack trace is as close to the
  // calling code as possible
  const stackTraceError = new Error('STACK_TRACE_MESSAGE');
  return getConfig().asyncWrapper(() => waitFor(callback, {
    stackTraceError,
    ...options
  }));
}

/*
eslint
  max-lines-per-function: ["error", {"max": 200}],
*/

function getElementError(message, container) {
  return getConfig().getElementError(message, container);
}
function getMultipleElementsFoundError(message, container) {
  return getElementError(message + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", container);
}
function queryAllByAttribute(attribute, container, text, _temp) {
  let {
    exact = true,
    collapseWhitespace,
    trim,
    normalizer
  } = _temp === void 0 ? {} : _temp;
  const matcher = exact ? matches : fuzzyMatches;
  const matchNormalizer = makeNormalizer({
    collapseWhitespace,
    trim,
    normalizer
  });
  return Array.from(container.querySelectorAll("[" + attribute + "]")).filter(node => matcher(node.getAttribute(attribute), node, text, matchNormalizer));
}
function queryByAttribute(attribute, container, text, options) {
  const els = queryAllByAttribute(attribute, container, text, options);
  if (els.length > 1) {
    throw getMultipleElementsFoundError("Found multiple elements by [" + attribute + "=" + text + "]", container);
  }
  return els[0] || null;
}

// this accepts a query function and returns a function which throws an error
// if more than one elements is returned, otherwise it returns the first
// element or null
function makeSingleQuery(allQuery, getMultipleError) {
  return function (container) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    const els = allQuery(container, ...args);
    if (els.length > 1) {
      const elementStrings = els.map(element => getElementError(null, element).message).join('\n\n');
      throw getMultipleElementsFoundError(getMultipleError(container, ...args) + "\n\nHere are the matching elements:\n\n" + elementStrings, container);
    }
    return els[0] || null;
  };
}
function getSuggestionError(suggestion, container) {
  return getConfig().getElementError("A better query is available, try this:\n" + suggestion.toString() + "\n", container);
}

// this accepts a query function and returns a function which throws an error
// if an empty list of elements is returned
function makeGetAllQuery(allQuery, getMissingError) {
  return function (container) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    const els = allQuery(container, ...args);
    if (!els.length) {
      throw getConfig().getElementError(getMissingError(container, ...args), container);
    }
    return els;
  };
}

// this accepts a getter query function and returns a function which calls
// waitFor and passing a function which invokes the getter.
function makeFindQuery(getter) {
  return (container, text, options, waitForOptions) => {
    return waitForWrapper(() => {
      return getter(container, text, options);
    }, {
      container,
      ...waitForOptions
    });
  };
}
const wrapSingleQueryWithSuggestion = (query, queryAllByName, variant) => function (container) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }
  const element = query(container, ...args);
  const [{
    suggest = getConfig().throwSuggestions
  } = {}] = args.slice(-1);
  if (element && suggest) {
    const suggestion = getSuggestedQuery(element, variant);
    if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) {
      throw getSuggestionError(suggestion.toString(), container);
    }
  }
  return element;
};
const wrapAllByQueryWithSuggestion = (query, queryAllByName, variant) => function (container) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }
  const els = query(container, ...args);
  const [{
    suggest = getConfig().throwSuggestions
  } = {}] = args.slice(-1);
  if (els.length && suggest) {
    // get a unique list of all suggestion messages.  We are only going to make a suggestion if
    // all the suggestions are the same
    const uniqueSuggestionMessages = [...new Set(els.map(element => {
      var _getSuggestedQuery;
      return (_getSuggestedQuery = getSuggestedQuery(element, variant)) == null ? void 0 : _getSuggestedQuery.toString();
    }))];
    if (
    // only want to suggest if all the els have the same suggestion.
    uniqueSuggestionMessages.length === 1 && !queryAllByName.endsWith(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
    getSuggestedQuery(els[0], variant).queryName)) {
      throw getSuggestionError(uniqueSuggestionMessages[0], container);
    }
  }
  return els;
};

// TODO: This deviates from the published declarations
// However, the implementation always required a dyadic (after `container`) not variadic `queryAllBy` considering the implementation of `makeFindQuery`
// This is at least statically true and can be verified by accepting `QueryMethod<Arguments, HTMLElement[]>`
function buildQueries(queryAllBy, getMultipleError, getMissingError) {
  const queryBy = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllBy, getMultipleError), queryAllBy.name, 'query');
  const getAllBy = makeGetAllQuery(queryAllBy, getMissingError);
  const getBy = makeSingleQuery(getAllBy, getMultipleError);
  const getByWithSuggestions = wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'get');
  const getAllWithSuggestions = wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name.replace('query', 'get'), 'getAll');
  const findAllBy = makeFindQuery(wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, 'findAll'));
  const findBy = makeFindQuery(wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, 'find'));
  return [queryBy, getAllWithSuggestions, getByWithSuggestions, findAllBy, findBy];
}

var queryHelpers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getElementError: getElementError,
  wrapAllByQueryWithSuggestion: wrapAllByQueryWithSuggestion,
  wrapSingleQueryWithSuggestion: wrapSingleQueryWithSuggestion,
  getMultipleElementsFoundError: getMultipleElementsFoundError,
  queryAllByAttribute: queryAllByAttribute,
  queryByAttribute: queryByAttribute,
  makeSingleQuery: makeSingleQuery,
  makeGetAllQuery: makeGetAllQuery,
  makeFindQuery: makeFindQuery,
  buildQueries: buildQueries
});

function queryAllLabels(container) {
  return Array.from(container.querySelectorAll('label,input')).map(node => {
    return {
      node,
      textToMatch: getLabelContent(node)
    };
  }).filter(_ref => {
    let {
      textToMatch
    } = _ref;
    return textToMatch !== null;
  });
}
const queryAllLabelsByText = function (container, text, _temp) {
  let {
    exact = true,
    trim,
    collapseWhitespace,
    normalizer
  } = _temp === void 0 ? {} : _temp;
  const matcher = exact ? matches : fuzzyMatches;
  const matchNormalizer = makeNormalizer({
    collapseWhitespace,
    trim,
    normalizer
  });
  const textToMatchByLabels = queryAllLabels(container);
  return textToMatchByLabels.filter(_ref2 => {
    let {
      node,
      textToMatch
    } = _ref2;
    return matcher(textToMatch, node, text, matchNormalizer);
  }).map(_ref3 => {
    let {
      node
    } = _ref3;
    return node;
  });
};
const queryAllByLabelText = function (container, text, _temp2) {
  let {
    selector = '*',
    exact = true,
    collapseWhitespace,
    trim,
    normalizer
  } = _temp2 === void 0 ? {} : _temp2;
  checkContainerType(container);
  const matcher = exact ? matches : fuzzyMatches;
  const matchNormalizer = makeNormalizer({
    collapseWhitespace,
    trim,
    normalizer
  });
  const matchingLabelledElements = Array.from(container.querySelectorAll('*')).filter(element => {
    return getRealLabels(element).length || element.hasAttribute('aria-labelledby');
  }).reduce((labelledElements, labelledElement) => {
    const labelList = dom_esm_getLabels(container, labelledElement, {
      selector
    });
    labelList.filter(label => Boolean(label.formControl)).forEach(label => {
      if (matcher(label.content, label.formControl, text, matchNormalizer) && label.formControl) {
        labelledElements.push(label.formControl);
      }
    });
    const labelsValue = labelList.filter(label => Boolean(label.content)).map(label => label.content);
    if (matcher(labelsValue.join(' '), labelledElement, text, matchNormalizer)) {
      labelledElements.push(labelledElement);
    }
    if (labelsValue.length > 1) {
      labelsValue.forEach((labelValue, index) => {
        if (matcher(labelValue, labelledElement, text, matchNormalizer)) {
          labelledElements.push(labelledElement);
        }
        const labelsFiltered = [...labelsValue];
        labelsFiltered.splice(index, 1);
        if (labelsFiltered.length > 1) {
          if (matcher(labelsFiltered.join(' '), labelledElement, text, matchNormalizer)) {
            labelledElements.push(labelledElement);
          }
        }
      });
    }
    return labelledElements;
  }, []).concat(queryAllByAttribute('aria-label', container, text, {
    exact,
    normalizer: matchNormalizer
  }));
  return Array.from(new Set(matchingLabelledElements)).filter(element => element.matches(selector));
};

// the getAll* query would normally look like this:
// const getAllByLabelText = makeGetAllQuery(
//   queryAllByLabelText,
//   (c, text) => `Unable to find a label with the text of: ${text}`,
// )
// however, we can give a more helpful error message than the generic one,
// so we're writing this one out by hand.
const getAllByLabelText = function (container, text) {
  for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }
  const els = queryAllByLabelText(container, text, ...rest);
  if (!els.length) {
    const labels = queryAllLabelsByText(container, text, ...rest);
    if (labels.length) {
      const tagNames = labels.map(label => getTagNameOfElementAssociatedWithLabelViaFor(container, label)).filter(tagName => !!tagName);
      if (tagNames.length) {
        throw getConfig().getElementError(tagNames.map(tagName => "Found a label with the text of: " + text + ", however the element associated with this label (<" + tagName + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + tagName + " />, you can use aria-label or aria-labelledby instead.").join('\n\n'), container);
      } else {
        throw getConfig().getElementError("Found a label with the text of: " + text + ", however no form control was found associated to that label. Make sure you're using the \"for\" attribute or \"aria-labelledby\" attribute correctly.", container);
      }
    } else {
      throw getConfig().getElementError("Unable to find a label with the text of: " + text, container);
    }
  }
  return els;
};
function getTagNameOfElementAssociatedWithLabelViaFor(container, label) {
  const htmlFor = label.getAttribute('for');
  if (!htmlFor) {
    return null;
  }
  const element = container.querySelector("[id=\"" + htmlFor + "\"]");
  return element ? element.tagName.toLowerCase() : null;
}

// the reason mentioned above is the same reason we're not using buildQueries
const getMultipleError$7 = (c, text) => "Found multiple elements with the text of: " + text;
const queryByLabelText = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllByLabelText, getMultipleError$7), queryAllByLabelText.name, 'query');
const getByLabelText = makeSingleQuery(getAllByLabelText, getMultipleError$7);
const findAllByLabelText = makeFindQuery(wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, 'findAll'));
const findByLabelText = makeFindQuery(wrapSingleQueryWithSuggestion(getByLabelText, getAllByLabelText.name, 'find'));
const getAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, 'getAll');
const getByLabelTextWithSuggestions = wrapSingleQueryWithSuggestion(getByLabelText, getAllByLabelText.name, 'get');
const queryAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByLabelText, queryAllByLabelText.name, 'queryAll');

const queryAllByPlaceholderText = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  checkContainerType(args[0]);
  return queryAllByAttribute('placeholder', ...args);
};
const getMultipleError$6 = (c, text) => "Found multiple elements with the placeholder text of: " + text;
const getMissingError$6 = (c, text) => "Unable to find an element with the placeholder text of: " + text;
const queryAllByPlaceholderTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByPlaceholderText, queryAllByPlaceholderText.name, 'queryAll');
const [queryByPlaceholderText, getAllByPlaceholderText, getByPlaceholderText, findAllByPlaceholderText, findByPlaceholderText] = buildQueries(queryAllByPlaceholderText, getMultipleError$6, getMissingError$6);

const queryAllByText = function (container, text, _temp) {
  let {
    selector = '*',
    exact = true,
    collapseWhitespace,
    trim,
    ignore = getConfig().defaultIgnore,
    normalizer
  } = _temp === void 0 ? {} : _temp;
  checkContainerType(container);
  const matcher = exact ? matches : fuzzyMatches;
  const matchNormalizer = makeNormalizer({
    collapseWhitespace,
    trim,
    normalizer
  });
  let baseArray = [];
  if (typeof container.matches === 'function' && container.matches(selector)) {
    baseArray = [container];
  }
  return [...baseArray, ...Array.from(container.querySelectorAll(selector))]
  // TODO: `matches` according lib.dom.d.ts can get only `string` but according our code it can handle also boolean :)
  .filter(node => !ignore || !node.matches(ignore)).filter(node => matcher(getNodeText(node), node, text, matchNormalizer));
};
const getMultipleError$5 = (c, text) => "Found multiple elements with the text: " + text;
const getMissingError$5 = function (c, text, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    collapseWhitespace,
    trim,
    normalizer,
    selector
  } = options;
  const matchNormalizer = makeNormalizer({
    collapseWhitespace,
    trim,
    normalizer
  });
  const normalizedText = matchNormalizer(text.toString());
  const isNormalizedDifferent = normalizedText !== text.toString();
  const isCustomSelector = (selector != null ? selector : '*') !== '*';
  return "Unable to find an element with the text: " + (isNormalizedDifferent ? normalizedText + " (normalized from '" + text + "')" : text) + (isCustomSelector ? ", which matches selector '" + selector + "'" : '') + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
};
const queryAllByTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByText, queryAllByText.name, 'queryAll');
const [queryByText, getAllByText, getByText, findAllByText, findByText] = buildQueries(queryAllByText, getMultipleError$5, getMissingError$5);

const queryAllByDisplayValue = function (container, value, _temp) {
  let {
    exact = true,
    collapseWhitespace,
    trim,
    normalizer
  } = _temp === void 0 ? {} : _temp;
  checkContainerType(container);
  const matcher = exact ? matches : fuzzyMatches;
  const matchNormalizer = makeNormalizer({
    collapseWhitespace,
    trim,
    normalizer
  });
  return Array.from(container.querySelectorAll("input,textarea,select")).filter(node => {
    if (node.tagName === 'SELECT') {
      const selectedOptions = Array.from(node.options).filter(option => option.selected);
      return selectedOptions.some(optionNode => matcher(getNodeText(optionNode), optionNode, value, matchNormalizer));
    } else {
      return matcher(node.value, node, value, matchNormalizer);
    }
  });
};
const getMultipleError$4 = (c, value) => "Found multiple elements with the display value: " + value + ".";
const getMissingError$4 = (c, value) => "Unable to find an element with the display value: " + value + ".";
const queryAllByDisplayValueWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByDisplayValue, queryAllByDisplayValue.name, 'queryAll');
const [queryByDisplayValue, getAllByDisplayValue, getByDisplayValue, findAllByDisplayValue, findByDisplayValue] = buildQueries(queryAllByDisplayValue, getMultipleError$4, getMissingError$4);

// Valid tags are img, input, area and custom elements
const VALID_TAG_REGEXP = /^(img|input|area|.+-.+)$/i;
const queryAllByAltText = function (container, alt, options) {
  if (options === void 0) {
    options = {};
  }
  checkContainerType(container);
  return queryAllByAttribute('alt', container, alt, options).filter(node => VALID_TAG_REGEXP.test(node.tagName));
};
const getMultipleError$3 = (c, alt) => "Found multiple elements with the alt text: " + alt;
const getMissingError$3 = (c, alt) => "Unable to find an element with the alt text: " + alt;
const queryAllByAltTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByAltText, queryAllByAltText.name, 'queryAll');
const [queryByAltText, getAllByAltText, getByAltText, findAllByAltText, findByAltText] = buildQueries(queryAllByAltText, getMultipleError$3, getMissingError$3);

const isSvgTitle = node => {
  var _node$parentElement;
  return node.tagName.toLowerCase() === 'title' && ((_node$parentElement = node.parentElement) == null ? void 0 : _node$parentElement.tagName.toLowerCase()) === 'svg';
};
const queryAllByTitle = function (container, text, _temp) {
  let {
    exact = true,
    collapseWhitespace,
    trim,
    normalizer
  } = _temp === void 0 ? {} : _temp;
  checkContainerType(container);
  const matcher = exact ? matches : fuzzyMatches;
  const matchNormalizer = makeNormalizer({
    collapseWhitespace,
    trim,
    normalizer
  });
  return Array.from(container.querySelectorAll('[title], svg > title')).filter(node => matcher(node.getAttribute('title'), node, text, matchNormalizer) || isSvgTitle(node) && matcher(getNodeText(node), node, text, matchNormalizer));
};
const getMultipleError$2 = (c, title) => "Found multiple elements with the title: " + title + ".";
const getMissingError$2 = (c, title) => "Unable to find an element with the title: " + title + ".";
const queryAllByTitleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTitle, queryAllByTitle.name, 'queryAll');
const [queryByTitle, getAllByTitle, getByTitle, findAllByTitle, findByTitle] = buildQueries(queryAllByTitle, getMultipleError$2, getMissingError$2);

/* eslint-disable complexity */
const queryAllByRole = function (container, role, _temp) {
  let {
    hidden = getConfig().defaultHidden,
    name,
    description,
    queryFallbacks = false,
    selected,
    busy,
    checked,
    pressed,
    current,
    level,
    expanded,
    value: {
      now: valueNow,
      min: valueMin,
      max: valueMax,
      text: valueText
    } = {}
  } = _temp === void 0 ? {} : _temp;
  checkContainerType(container);
  if (selected !== undefined) {
    var _allRoles$get;
    // guard against unknown roles
    if (((_allRoles$get = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get.props['aria-selected']) === undefined) {
      throw new Error("\"aria-selected\" is not supported on role \"" + role + "\".");
    }
  }
  if (busy !== undefined) {
    var _allRoles$get2;
    // guard against unknown roles
    if (((_allRoles$get2 = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get2.props['aria-busy']) === undefined) {
      throw new Error("\"aria-busy\" is not supported on role \"" + role + "\".");
    }
  }
  if (checked !== undefined) {
    var _allRoles$get3;
    // guard against unknown roles
    if (((_allRoles$get3 = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get3.props['aria-checked']) === undefined) {
      throw new Error("\"aria-checked\" is not supported on role \"" + role + "\".");
    }
  }
  if (pressed !== undefined) {
    var _allRoles$get4;
    // guard against unknown roles
    if (((_allRoles$get4 = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get4.props['aria-pressed']) === undefined) {
      throw new Error("\"aria-pressed\" is not supported on role \"" + role + "\".");
    }
  }
  if (current !== undefined) {
    var _allRoles$get5;
    /* istanbul ignore next */
    // guard against unknown roles
    // All currently released ARIA versions support `aria-current` on all roles.
    // Leaving this for symetry and forward compatibility
    if (((_allRoles$get5 = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get5.props['aria-current']) === undefined) {
      throw new Error("\"aria-current\" is not supported on role \"" + role + "\".");
    }
  }
  if (level !== undefined) {
    // guard against using `level` option with any role other than `heading`
    if (role !== 'heading') {
      throw new Error("Role \"" + role + "\" cannot have \"level\" property.");
    }
  }
  if (valueNow !== undefined) {
    var _allRoles$get6;
    // guard against unknown roles
    if (((_allRoles$get6 = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get6.props['aria-valuenow']) === undefined) {
      throw new Error("\"aria-valuenow\" is not supported on role \"" + role + "\".");
    }
  }
  if (valueMax !== undefined) {
    var _allRoles$get7;
    // guard against unknown roles
    if (((_allRoles$get7 = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get7.props['aria-valuemax']) === undefined) {
      throw new Error("\"aria-valuemax\" is not supported on role \"" + role + "\".");
    }
  }
  if (valueMin !== undefined) {
    var _allRoles$get8;
    // guard against unknown roles
    if (((_allRoles$get8 = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get8.props['aria-valuemin']) === undefined) {
      throw new Error("\"aria-valuemin\" is not supported on role \"" + role + "\".");
    }
  }
  if (valueText !== undefined) {
    var _allRoles$get9;
    // guard against unknown roles
    if (((_allRoles$get9 = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get9.props['aria-valuetext']) === undefined) {
      throw new Error("\"aria-valuetext\" is not supported on role \"" + role + "\".");
    }
  }
  if (expanded !== undefined) {
    var _allRoles$get10;
    // guard against unknown roles
    if (((_allRoles$get10 = lib/* roles */.uJ.get(role)) == null ? void 0 : _allRoles$get10.props['aria-expanded']) === undefined) {
      throw new Error("\"aria-expanded\" is not supported on role \"" + role + "\".");
    }
  }
  const subtreeIsInaccessibleCache = new WeakMap();
  function cachedIsSubtreeInaccessible(element) {
    if (!subtreeIsInaccessibleCache.has(element)) {
      subtreeIsInaccessibleCache.set(element, isSubtreeInaccessible(element));
    }
    return subtreeIsInaccessibleCache.get(element);
  }
  return Array.from(container.querySelectorAll(
  // Only query elements that can be matched by the following filters
  makeRoleSelector(role))).filter(node => {
    const isRoleSpecifiedExplicitly = node.hasAttribute('role');
    if (isRoleSpecifiedExplicitly) {
      const roleValue = node.getAttribute('role');
      if (queryFallbacks) {
        return roleValue.split(' ').filter(Boolean).some(roleAttributeToken => roleAttributeToken === role);
      }
      // other wise only send the first token to match
      const [firstRoleAttributeToken] = roleValue.split(' ');
      return firstRoleAttributeToken === role;
    }
    const implicitRoles = getImplicitAriaRoles(node);
    return implicitRoles.some(implicitRole => {
      return implicitRole === role;
    });
  }).filter(element => {
    if (selected !== undefined) {
      return selected === computeAriaSelected(element);
    }
    if (busy !== undefined) {
      return busy === computeAriaBusy(element);
    }
    if (checked !== undefined) {
      return checked === computeAriaChecked(element);
    }
    if (pressed !== undefined) {
      return pressed === computeAriaPressed(element);
    }
    if (current !== undefined) {
      return current === computeAriaCurrent(element);
    }
    if (expanded !== undefined) {
      return expanded === computeAriaExpanded(element);
    }
    if (level !== undefined) {
      return level === computeHeadingLevel(element);
    }
    if (valueNow !== undefined || valueMax !== undefined || valueMin !== undefined || valueText !== undefined) {
      let valueMatches = true;
      if (valueNow !== undefined) {
        valueMatches && (valueMatches = valueNow === computeAriaValueNow(element));
      }
      if (valueMax !== undefined) {
        valueMatches && (valueMatches = valueMax === computeAriaValueMax(element));
      }
      if (valueMin !== undefined) {
        valueMatches && (valueMatches = valueMin === computeAriaValueMin(element));
      }
      if (valueText !== undefined) {
        var _computeAriaValueText;
        valueMatches && (valueMatches = matches((_computeAriaValueText = computeAriaValueText(element)) != null ? _computeAriaValueText : null, element, valueText, text => text));
      }
      return valueMatches;
    }
    // don't care if aria attributes are unspecified
    return true;
  }).filter(element => {
    if (name === undefined) {
      // Don't care
      return true;
    }
    return matches(computeAccessibleName(element, {
      computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
    }), element, name, text => text);
  }).filter(element => {
    if (description === undefined) {
      // Don't care
      return true;
    }
    return matches(computeAccessibleDescription(element, {
      computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
    }), element, description, text => text);
  }).filter(element => {
    return hidden === false ? isInaccessible(element, {
      isSubtreeInaccessible: cachedIsSubtreeInaccessible
    }) === false : true;
  });
};
function makeRoleSelector(role) {
  var _roleElements$get;
  const explicitRoleSelector = "*[role~=\"" + role + "\"]";
  const roleRelations = (_roleElements$get = lib/* roleElements */.UN.get(role)) != null ? _roleElements$get : new Set();
  const implicitRoleSelectors = new Set(Array.from(roleRelations).map(_ref => {
    let {
      name
    } = _ref;
    return name;
  }));

  // Current transpilation config sometimes assumes `...` is always applied to arrays.
  // `...` is equivalent to `Array.prototype.concat` for arrays.
  // If you replace this code with `[explicitRoleSelector, ...implicitRoleSelectors]`, make sure every transpilation target retains the `...` in favor of `Array.prototype.concat`.
  return [explicitRoleSelector].concat(Array.from(implicitRoleSelectors)).join(',');
}
const getNameHint = name => {
  let nameHint = '';
  if (name === undefined) {
    nameHint = '';
  } else if (typeof name === 'string') {
    nameHint = " and name \"" + name + "\"";
  } else {
    nameHint = " and name `" + name + "`";
  }
  return nameHint;
};
const getMultipleError$1 = function (c, role, _temp2) {
  let {
    name
  } = _temp2 === void 0 ? {} : _temp2;
  return "Found multiple elements with the role \"" + role + "\"" + getNameHint(name);
};
const getMissingError$1 = function (container, role, _temp3) {
  let {
    hidden = getConfig().defaultHidden,
    name,
    description
  } = _temp3 === void 0 ? {} : _temp3;
  if (getConfig()._disableExpensiveErrorDiagnostics) {
    return "Unable to find role=\"" + role + "\"" + getNameHint(name);
  }
  let roles = '';
  Array.from(container.children).forEach(childElement => {
    roles += prettyRoles(childElement, {
      hidden,
      includeDescription: description !== undefined
    });
  });
  let roleMessage;
  if (roles.length === 0) {
    if (hidden === false) {
      roleMessage = 'There are no accessible roles. But there might be some inaccessible roles. ' + 'If you wish to access them, then set the `hidden` option to `true`. ' + 'Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole';
    } else {
      roleMessage = 'There are no available roles.';
    }
  } else {
    roleMessage = ("\nHere are the " + (hidden === false ? 'accessible' : 'available') + " roles:\n\n  " + roles.replace(/\n/g, '\n  ').replace(/\n\s\s\n/g, '\n\n') + "\n").trim();
  }
  let nameHint = '';
  if (name === undefined) {
    nameHint = '';
  } else if (typeof name === 'string') {
    nameHint = " and name \"" + name + "\"";
  } else {
    nameHint = " and name `" + name + "`";
  }
  let descriptionHint = '';
  if (description === undefined) {
    descriptionHint = '';
  } else if (typeof description === 'string') {
    descriptionHint = " and description \"" + description + "\"";
  } else {
    descriptionHint = " and description `" + description + "`";
  }
  return ("\nUnable to find an " + (hidden === false ? 'accessible ' : '') + "element with the role \"" + role + "\"" + nameHint + descriptionHint + "\n\n" + roleMessage).trim();
};
const queryAllByRoleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByRole, queryAllByRole.name, 'queryAll');
const [queryByRole, getAllByRole, getByRole, findAllByRole, findByRole] = buildQueries(queryAllByRole, getMultipleError$1, getMissingError$1);

const getTestIdAttribute = () => getConfig().testIdAttribute;
const queryAllByTestId = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  checkContainerType(args[0]);
  return queryAllByAttribute(getTestIdAttribute(), ...args);
};
const getMultipleError = (c, id) => "Found multiple elements by: [" + getTestIdAttribute() + "=\"" + id + "\"]";
const getMissingError = (c, id) => "Unable to find an element by: [" + getTestIdAttribute() + "=\"" + id + "\"]";
const queryAllByTestIdWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTestId, queryAllByTestId.name, 'queryAll');
const [queryByTestId, getAllByTestId, getByTestId, findAllByTestId, findByTestId] = buildQueries(queryAllByTestId, getMultipleError, getMissingError);

var queries = /*#__PURE__*/Object.freeze({
  __proto__: null,
  queryAllByLabelText: queryAllByLabelTextWithSuggestions,
  queryByLabelText: queryByLabelText,
  getAllByLabelText: getAllByLabelTextWithSuggestions,
  getByLabelText: getByLabelTextWithSuggestions,
  findAllByLabelText: findAllByLabelText,
  findByLabelText: findByLabelText,
  queryByPlaceholderText: queryByPlaceholderText,
  queryAllByPlaceholderText: queryAllByPlaceholderTextWithSuggestions,
  getByPlaceholderText: getByPlaceholderText,
  getAllByPlaceholderText: getAllByPlaceholderText,
  findAllByPlaceholderText: findAllByPlaceholderText,
  findByPlaceholderText: findByPlaceholderText,
  queryByText: queryByText,
  queryAllByText: queryAllByTextWithSuggestions,
  getByText: getByText,
  getAllByText: getAllByText,
  findAllByText: findAllByText,
  findByText: findByText,
  queryByDisplayValue: queryByDisplayValue,
  queryAllByDisplayValue: queryAllByDisplayValueWithSuggestions,
  getByDisplayValue: getByDisplayValue,
  getAllByDisplayValue: getAllByDisplayValue,
  findAllByDisplayValue: findAllByDisplayValue,
  findByDisplayValue: findByDisplayValue,
  queryByAltText: queryByAltText,
  queryAllByAltText: queryAllByAltTextWithSuggestions,
  getByAltText: getByAltText,
  getAllByAltText: getAllByAltText,
  findAllByAltText: findAllByAltText,
  findByAltText: findByAltText,
  queryByTitle: queryByTitle,
  queryAllByTitle: queryAllByTitleWithSuggestions,
  getByTitle: getByTitle,
  getAllByTitle: getAllByTitle,
  findAllByTitle: findAllByTitle,
  findByTitle: findByTitle,
  queryByRole: queryByRole,
  queryAllByRole: queryAllByRoleWithSuggestions,
  getAllByRole: getAllByRole,
  getByRole: getByRole,
  findAllByRole: findAllByRole,
  findByRole: findByRole,
  queryByTestId: queryByTestId,
  queryAllByTestId: queryAllByTestIdWithSuggestions,
  getByTestId: getByTestId,
  getAllByTestId: getAllByTestId,
  findAllByTestId: findAllByTestId,
  findByTestId: findByTestId
});

/**
 * @typedef {{[key: string]: Function}} FuncMap
 */

/**
 * @param {HTMLElement} element container
 * @param {FuncMap} queries object of functions
 * @param {Object} initialValue for reducer
 * @returns {FuncMap} returns object of functions bound to container
 */
function getQueriesForElement(element, queries$1, initialValue) {
  if (queries$1 === void 0) {
    queries$1 = queries;
  }
  if (initialValue === void 0) {
    initialValue = {};
  }
  return Object.keys(queries$1).reduce((helpers, key) => {
    const fn = queries$1[key];
    helpers[key] = fn.bind(null, element);
    return helpers;
  }, initialValue);
}

const isRemoved = result => !result || Array.isArray(result) && !result.length;

// Check if the element is not present.
// As the name implies, waitForElementToBeRemoved should check `present` --> `removed`
function initialCheck(elements) {
  if (isRemoved(elements)) {
    throw new Error('The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.');
  }
}
async function waitForElementToBeRemoved(callback, options) {
  // created here so we get a nice stacktrace
  const timeoutError = new Error('Timed out in waitForElementToBeRemoved.');
  if (typeof callback !== 'function') {
    initialCheck(callback);
    const elements = Array.isArray(callback) ? callback : [callback];
    const getRemainingElements = elements.map(element => {
      let parent = element.parentElement;
      if (parent === null) return () => null;
      while (parent.parentElement) parent = parent.parentElement;
      return () => parent.contains(element) ? element : null;
    });
    callback = () => getRemainingElements.map(c => c()).filter(Boolean);
  }
  initialCheck(callback());
  return waitForWrapper(() => {
    let result;
    try {
      result = callback();
    } catch (error) {
      if (error.name === 'TestingLibraryElementError') {
        return undefined;
      }
      throw error;
    }
    if (!isRemoved(result)) {
      throw timeoutError;
    }
    return undefined;
  }, options);
}

/*
eslint
  require-await: "off"
*/

const eventMap = {
  // Clipboard Events
  copy: {
    EventType: 'ClipboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  cut: {
    EventType: 'ClipboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  paste: {
    EventType: 'ClipboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: 'CompositionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  compositionStart: {
    EventType: 'CompositionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  compositionUpdate: {
    EventType: 'CompositionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: 'KeyboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      charCode: 0,
      composed: true
    }
  },
  keyPress: {
    EventType: 'KeyboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      charCode: 0,
      composed: true
    }
  },
  keyUp: {
    EventType: 'KeyboardEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      charCode: 0,
      composed: true
    }
  },
  // Focus Events
  focus: {
    EventType: 'FocusEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false,
      composed: true
    }
  },
  blur: {
    EventType: 'FocusEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false,
      composed: true
    }
  },
  focusIn: {
    EventType: 'FocusEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  focusOut: {
    EventType: 'FocusEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  // Form Events
  change: {
    EventType: 'Event',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  input: {
    EventType: 'InputEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  invalid: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: true
    }
  },
  submit: {
    EventType: 'Event',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  reset: {
    EventType: 'Event',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  // Mouse Events
  click: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      button: 0,
      composed: true
    }
  },
  contextMenu: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  dblClick: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  drag: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  dragEnd: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  dragEnter: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  dragExit: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  dragLeave: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  dragOver: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  dragStart: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  drop: {
    EventType: 'DragEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  mouseDown: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  mouseEnter: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false,
      composed: true
    }
  },
  mouseLeave: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false,
      composed: true
    }
  },
  mouseMove: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  mouseOut: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  mouseOver: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  mouseUp: {
    EventType: 'MouseEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  // Selection Events
  select: {
    EventType: 'Event',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  // Touch Events
  touchCancel: {
    EventType: 'TouchEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  touchEnd: {
    EventType: 'TouchEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  touchMove: {
    EventType: 'TouchEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  touchStart: {
    EventType: 'TouchEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  // UI Events
  resize: {
    EventType: 'UIEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  scroll: {
    EventType: 'UIEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  // Wheel Events
  wheel: {
    EventType: 'WheelEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  // Media Events
  abort: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  canPlay: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  canPlayThrough: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  durationChange: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  emptied: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  encrypted: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  ended: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  loadedData: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  loadedMetadata: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  loadStart: {
    EventType: 'ProgressEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  pause: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  play: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  playing: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  progress: {
    EventType: 'ProgressEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  rateChange: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  seeked: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  seeking: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  stalled: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  suspend: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  timeUpdate: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  volumeChange: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  waiting: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  error: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  // Animation Events
  animationStart: {
    EventType: 'AnimationEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  animationEnd: {
    EventType: 'AnimationEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  animationIteration: {
    EventType: 'AnimationEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: 'TransitionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  transitionEnd: {
    EventType: 'TransitionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true
    }
  },
  transitionRun: {
    EventType: 'TransitionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  transitionStart: {
    EventType: 'TransitionEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  // pointer events
  pointerOver: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  pointerEnter: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  pointerDown: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  pointerMove: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  pointerUp: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  pointerCancel: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  pointerOut: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: true,
      composed: true
    }
  },
  pointerLeave: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  gotPointerCapture: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  lostPointerCapture: {
    EventType: 'PointerEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false,
      composed: true
    }
  },
  // history events
  popState: {
    EventType: 'PopStateEvent',
    defaultInit: {
      bubbles: true,
      cancelable: false
    }
  },
  // window events
  offline: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  },
  online: {
    EventType: 'Event',
    defaultInit: {
      bubbles: false,
      cancelable: false
    }
  }
};
const eventAliasMap = {
  doubleClick: 'dblClick'
};

function fireEvent(element, event) {
  return getConfig().eventWrapper(() => {
    if (!event) {
      throw new Error("Unable to fire an event - please provide an event object.");
    }
    if (!element) {
      throw new Error("Unable to fire a \"" + event.type + "\" event - please provide a DOM element.");
    }
    return element.dispatchEvent(event);
  });
}
function createEvent(eventName, node, init, _temp) {
  let {
    EventType = 'Event',
    defaultInit = {}
  } = _temp === void 0 ? {} : _temp;
  if (!node) {
    throw new Error("Unable to fire a \"" + eventName + "\" event - please provide a DOM element.");
  }
  const eventInit = {
    ...defaultInit,
    ...init
  };
  const {
    target: {
      value,
      files,
      ...targetProperties
    } = {}
  } = eventInit;
  if (value !== undefined) {
    setNativeValue(node, value);
  }
  if (files !== undefined) {
    // input.files is a read-only property so this is not allowed:
    // input.files = [file]
    // so we have to use this workaround to set the property
    Object.defineProperty(node, 'files', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: files
    });
  }
  Object.assign(node, targetProperties);
  const window = getWindowFromNode(node);
  const EventConstructor = window[EventType] || window.Event;
  let event;
  /* istanbul ignore else  */
  if (typeof EventConstructor === 'function') {
    event = new EventConstructor(eventName, eventInit);
  } else {
    // IE11 polyfill from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
    event = window.document.createEvent(EventType);
    const {
      bubbles,
      cancelable,
      detail,
      ...otherInit
    } = eventInit;
    event.initEvent(eventName, bubbles, cancelable, detail);
    Object.keys(otherInit).forEach(eventKey => {
      event[eventKey] = otherInit[eventKey];
    });
  }

  // DataTransfer is not supported in jsdom: https://github.com/jsdom/jsdom/issues/1568
  const dataTransferProperties = ['dataTransfer', 'clipboardData'];
  dataTransferProperties.forEach(dataTransferKey => {
    const dataTransferValue = eventInit[dataTransferKey];
    if (typeof dataTransferValue === 'object') {
      /* istanbul ignore if  */
      if (typeof window.DataTransfer === 'function') {
        Object.defineProperty(event, dataTransferKey, {
          value: Object.getOwnPropertyNames(dataTransferValue).reduce((acc, propName) => {
            Object.defineProperty(acc, propName, {
              value: dataTransferValue[propName]
            });
            return acc;
          }, new window.DataTransfer())
        });
      } else {
        Object.defineProperty(event, dataTransferKey, {
          value: dataTransferValue
        });
      }
    }
  });
  return event;
}
Object.keys(eventMap).forEach(key => {
  const {
    EventType,
    defaultInit
  } = eventMap[key];
  const eventName = key.toLowerCase();
  createEvent[key] = (node, init) => createEvent(eventName, node, init, {
    EventType,
    defaultInit
  });
  fireEvent[key] = (node, init) => fireEvent(node, createEvent[key](node, init));
});

// function written after some investigation here:
// https://github.com/facebook/react/issues/10135#issuecomment-401496776
function setNativeValue(element, value) {
  const {
    set: valueSetter
  } = Object.getOwnPropertyDescriptor(element, 'value') || {};
  const prototype = Object.getPrototypeOf(element);
  const {
    set: prototypeValueSetter
  } = Object.getOwnPropertyDescriptor(prototype, 'value') || {};
  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    /* istanbul ignore if */
    // eslint-disable-next-line no-lonely-if -- Can't be ignored by istanbul otherwise
    if (valueSetter) {
      valueSetter.call(element, value);
    } else {
      throw new Error('The given element does not have a value setter');
    }
  }
}
Object.keys(eventAliasMap).forEach(aliasKey => {
  const key = eventAliasMap[aliasKey];
  fireEvent[aliasKey] = function () {
    return fireEvent[key](...arguments);
  };
});

/* eslint complexity:["error", 9] */

// WARNING: `lz-string` only has a default export but statically we assume named exports are allowd
function unindent(string) {
  // remove white spaces first, to save a few bytes.
  // testing-playground will reformat on load any ways.
  return string.replace(/[ \t]*[\n][ \t]*/g, '\n');
}
function encode(value) {
  return lz_string_default().compressToEncodedURIComponent(unindent(value));
}
function getPlaygroundUrl(markup) {
  return "https://testing-playground.com/#markup=" + encode(markup);
}
const debug = (element, maxLength, options) => Array.isArray(element) ? element.forEach(el => logDOM(el, maxLength, options)) : logDOM(element, maxLength, options);
const logTestingPlaygroundURL = function (element) {
  if (element === void 0) {
    element = getDocument().body;
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!element || !('innerHTML' in element)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!element.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const playgroundUrl = getPlaygroundUrl(element.innerHTML);
  console.log("Open this URL in your browser\n\n" + playgroundUrl);
  return playgroundUrl;
};
const initialValue = {
  debug,
  logTestingPlaygroundURL
};
const screen = typeof document !== 'undefined' && document.body // eslint-disable-line @typescript-eslint/no-unnecessary-condition
? getQueriesForElement(document.body, queries, initialValue) : Object.keys(queries).reduce((helpers, key) => {
  // `key` is for all intents and purposes the type of keyof `helpers`, which itself is the type of `initialValue` plus incoming properties from `queries`
  // if `Object.keys(something)` returned Array<keyof typeof something> this explicit type assertion would not be necessary
  // see https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript
  helpers[key] = () => {
    throw new TypeError('For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error');
  };
  return helpers;
}, initialValue);




/***/ }),

/***/ 4277:
/***/ ((module) => {

"use strict";


module.exports = ({onlyFirst = false} = {}) => {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
	].join('|');

	return new RegExp(pattern, onlyFirst ? undefined : 'g');
};


/***/ }),

/***/ 7457:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _iterationDecorator = _interopRequireDefault(__webpack_require__(5456));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var properties = [['aria-activedescendant', {
  'type': 'id'
}], ['aria-atomic', {
  'type': 'boolean'
}], ['aria-autocomplete', {
  'type': 'token',
  'values': ['inline', 'list', 'both', 'none']
}], ['aria-busy', {
  'type': 'boolean'
}], ['aria-checked', {
  'type': 'tristate'
}], ['aria-colcount', {
  type: 'integer'
}], ['aria-colindex', {
  type: 'integer'
}], ['aria-colspan', {
  type: 'integer'
}], ['aria-controls', {
  'type': 'idlist'
}], ['aria-current', {
  type: 'token',
  values: ['page', 'step', 'location', 'date', 'time', true, false]
}], ['aria-describedby', {
  'type': 'idlist'
}], ['aria-details', {
  'type': 'id'
}], ['aria-disabled', {
  'type': 'boolean'
}], ['aria-dropeffect', {
  'type': 'tokenlist',
  'values': ['copy', 'execute', 'link', 'move', 'none', 'popup']
}], ['aria-errormessage', {
  'type': 'id'
}], ['aria-expanded', {
  'type': 'boolean',
  'allowundefined': true
}], ['aria-flowto', {
  'type': 'idlist'
}], ['aria-grabbed', {
  'type': 'boolean',
  'allowundefined': true
}], ['aria-haspopup', {
  'type': 'token',
  'values': [false, true, 'menu', 'listbox', 'tree', 'grid', 'dialog']
}], ['aria-hidden', {
  'type': 'boolean',
  'allowundefined': true
}], ['aria-invalid', {
  'type': 'token',
  'values': ['grammar', false, 'spelling', true]
}], ['aria-keyshortcuts', {
  type: 'string'
}], ['aria-label', {
  'type': 'string'
}], ['aria-labelledby', {
  'type': 'idlist'
}], ['aria-level', {
  'type': 'integer'
}], ['aria-live', {
  'type': 'token',
  'values': ['assertive', 'off', 'polite']
}], ['aria-modal', {
  type: 'boolean'
}], ['aria-multiline', {
  'type': 'boolean'
}], ['aria-multiselectable', {
  'type': 'boolean'
}], ['aria-orientation', {
  'type': 'token',
  'values': ['vertical', 'undefined', 'horizontal']
}], ['aria-owns', {
  'type': 'idlist'
}], ['aria-placeholder', {
  type: 'string'
}], ['aria-posinset', {
  'type': 'integer'
}], ['aria-pressed', {
  'type': 'tristate'
}], ['aria-readonly', {
  'type': 'boolean'
}], ['aria-relevant', {
  'type': 'tokenlist',
  'values': ['additions', 'all', 'removals', 'text']
}], ['aria-required', {
  'type': 'boolean'
}], ['aria-roledescription', {
  type: 'string'
}], ['aria-rowcount', {
  type: 'integer'
}], ['aria-rowindex', {
  type: 'integer'
}], ['aria-rowspan', {
  type: 'integer'
}], ['aria-selected', {
  'type': 'boolean',
  'allowundefined': true
}], ['aria-setsize', {
  'type': 'integer'
}], ['aria-sort', {
  'type': 'token',
  'values': ['ascending', 'descending', 'none', 'other']
}], ['aria-valuemax', {
  'type': 'number'
}], ['aria-valuemin', {
  'type': 'number'
}], ['aria-valuenow', {
  'type': 'number'
}], ['aria-valuetext', {
  'type': 'string'
}]];
var ariaPropsMap = {
  entries: function entries() {
    return properties;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var _iterator = _createForOfIteratorHelper(properties),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          values = _step$value[1];
        fn.call(thisArg, values, key, properties);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  get: function get(key) {
    var item = properties.find(function (tuple) {
      return tuple[0] === key ? true : false;
    });
    return item && item[1];
  },
  has: function has(key) {
    return !!ariaPropsMap.get(key);
  },
  keys: function keys() {
    return properties.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return key;
    });
  },
  values: function values() {
    return properties.map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        values = _ref4[1];
      return values;
    });
  }
};
var _default = (0, _iterationDecorator.default)(ariaPropsMap, ariaPropsMap.entries());
exports["default"] = _default;

/***/ }),

/***/ 7549:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _iterationDecorator = _interopRequireDefault(__webpack_require__(5456));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var dom = [['a', {
  reserved: false
}], ['abbr', {
  reserved: false
}], ['acronym', {
  reserved: false
}], ['address', {
  reserved: false
}], ['applet', {
  reserved: false
}], ['area', {
  reserved: false
}], ['article', {
  reserved: false
}], ['aside', {
  reserved: false
}], ['audio', {
  reserved: false
}], ['b', {
  reserved: false
}], ['base', {
  reserved: true
}], ['bdi', {
  reserved: false
}], ['bdo', {
  reserved: false
}], ['big', {
  reserved: false
}], ['blink', {
  reserved: false
}], ['blockquote', {
  reserved: false
}], ['body', {
  reserved: false
}], ['br', {
  reserved: false
}], ['button', {
  reserved: false
}], ['canvas', {
  reserved: false
}], ['caption', {
  reserved: false
}], ['center', {
  reserved: false
}], ['cite', {
  reserved: false
}], ['code', {
  reserved: false
}], ['col', {
  reserved: true
}], ['colgroup', {
  reserved: true
}], ['content', {
  reserved: false
}], ['data', {
  reserved: false
}], ['datalist', {
  reserved: false
}], ['dd', {
  reserved: false
}], ['del', {
  reserved: false
}], ['details', {
  reserved: false
}], ['dfn', {
  reserved: false
}], ['dialog', {
  reserved: false
}], ['dir', {
  reserved: false
}], ['div', {
  reserved: false
}], ['dl', {
  reserved: false
}], ['dt', {
  reserved: false
}], ['em', {
  reserved: false
}], ['embed', {
  reserved: false
}], ['fieldset', {
  reserved: false
}], ['figcaption', {
  reserved: false
}], ['figure', {
  reserved: false
}], ['font', {
  reserved: false
}], ['footer', {
  reserved: false
}], ['form', {
  reserved: false
}], ['frame', {
  reserved: false
}], ['frameset', {
  reserved: false
}], ['h1', {
  reserved: false
}], ['h2', {
  reserved: false
}], ['h3', {
  reserved: false
}], ['h4', {
  reserved: false
}], ['h5', {
  reserved: false
}], ['h6', {
  reserved: false
}], ['head', {
  reserved: true
}], ['header', {
  reserved: false
}], ['hgroup', {
  reserved: false
}], ['hr', {
  reserved: false
}], ['html', {
  reserved: true
}], ['i', {
  reserved: false
}], ['iframe', {
  reserved: false
}], ['img', {
  reserved: false
}], ['input', {
  reserved: false
}], ['ins', {
  reserved: false
}], ['kbd', {
  reserved: false
}], ['keygen', {
  reserved: false
}], ['label', {
  reserved: false
}], ['legend', {
  reserved: false
}], ['li', {
  reserved: false
}], ['link', {
  reserved: true
}], ['main', {
  reserved: false
}], ['map', {
  reserved: false
}], ['mark', {
  reserved: false
}], ['marquee', {
  reserved: false
}], ['menu', {
  reserved: false
}], ['menuitem', {
  reserved: false
}], ['meta', {
  reserved: true
}], ['meter', {
  reserved: false
}], ['nav', {
  reserved: false
}], ['noembed', {
  reserved: true
}], ['noscript', {
  reserved: true
}], ['object', {
  reserved: false
}], ['ol', {
  reserved: false
}], ['optgroup', {
  reserved: false
}], ['option', {
  reserved: false
}], ['output', {
  reserved: false
}], ['p', {
  reserved: false
}], ['param', {
  reserved: true
}], ['picture', {
  reserved: true
}], ['pre', {
  reserved: false
}], ['progress', {
  reserved: false
}], ['q', {
  reserved: false
}], ['rp', {
  reserved: false
}], ['rt', {
  reserved: false
}], ['rtc', {
  reserved: false
}], ['ruby', {
  reserved: false
}], ['s', {
  reserved: false
}], ['samp', {
  reserved: false
}], ['script', {
  reserved: true
}], ['section', {
  reserved: false
}], ['select', {
  reserved: false
}], ['small', {
  reserved: false
}], ['source', {
  reserved: true
}], ['spacer', {
  reserved: false
}], ['span', {
  reserved: false
}], ['strike', {
  reserved: false
}], ['strong', {
  reserved: false
}], ['style', {
  reserved: true
}], ['sub', {
  reserved: false
}], ['summary', {
  reserved: false
}], ['sup', {
  reserved: false
}], ['table', {
  reserved: false
}], ['tbody', {
  reserved: false
}], ['td', {
  reserved: false
}], ['textarea', {
  reserved: false
}], ['tfoot', {
  reserved: false
}], ['th', {
  reserved: false
}], ['thead', {
  reserved: false
}], ['time', {
  reserved: false
}], ['title', {
  reserved: true
}], ['tr', {
  reserved: false
}], ['track', {
  reserved: true
}], ['tt', {
  reserved: false
}], ['u', {
  reserved: false
}], ['ul', {
  reserved: false
}], ['var', {
  reserved: false
}], ['video', {
  reserved: false
}], ['wbr', {
  reserved: false
}], ['xmp', {
  reserved: false
}]];
var domMap = {
  entries: function entries() {
    return dom;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var _iterator = _createForOfIteratorHelper(dom),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          values = _step$value[1];
        fn.call(thisArg, values, key, dom);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  get: function get(key) {
    var item = dom.find(function (tuple) {
      return tuple[0] === key ? true : false;
    });
    return item && item[1];
  },
  has: function has(key) {
    return !!domMap.get(key);
  },
  keys: function keys() {
    return dom.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return key;
    });
  },
  values: function values() {
    return dom.map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        values = _ref4[1];
      return values;
    });
  }
};
var _default = (0, _iterationDecorator.default)(domMap, domMap.entries());
exports["default"] = _default;

/***/ }),

/***/ 3217:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _deepEqual = _interopRequireDefault(__webpack_require__(251));
var _iterationDecorator = _interopRequireDefault(__webpack_require__(5456));
var _rolesMap = _interopRequireDefault(__webpack_require__(3913));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var elementRoles = [];
var keys = _rolesMap.default.keys();
for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  var role = _rolesMap.default.get(key);
  if (role) {
    var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
    for (var k = 0; k < concepts.length; k++) {
      var relation = concepts[k];
      if (relation.module === 'HTML') {
        var concept = relation.concept;
        if (concept) {
          (function () {
            var conceptStr = JSON.stringify(concept);
            var elementRoleRelation = elementRoles.find(function (relation) {
              return JSON.stringify(relation[0]) === conceptStr;
            });
            var roles = void 0;
            if (elementRoleRelation) {
              roles = elementRoleRelation[1];
            } else {
              roles = [];
            }
            var isUnique = true;
            for (var _i = 0; _i < roles.length; _i++) {
              if (roles[_i] === key) {
                isUnique = false;
                break;
              }
            }
            if (isUnique) {
              roles.push(key);
            }
            elementRoles.push([concept, roles]);
          })();
        }
      }
    }
  }
}
var elementRoleMap = {
  entries: function entries() {
    return elementRoles;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var _iterator = _createForOfIteratorHelper(elementRoles),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          _key = _step$value[0],
          values = _step$value[1];
        fn.call(thisArg, values, _key, elementRoles);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  get: function get(key) {
    var item = elementRoles.find(function (tuple) {
      return (0, _deepEqual.default)(key, tuple[0]);
    });
    return item && item[1];
  },
  has: function has(key) {
    return !!elementRoleMap.get(key);
  },
  keys: function keys() {
    return elementRoles.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return key;
    });
  },
  values: function values() {
    return elementRoles.map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        values = _ref4[1];
      return values;
    });
  }
};
var _default = (0, _iterationDecorator.default)(elementRoleMap, elementRoleMap.entries());
exports["default"] = _default;

/***/ }),

/***/ 4329:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var commandRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'menuitem'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget']]
};
var _default = commandRole;
exports["default"] = _default;

/***/ }),

/***/ 1185:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var compositeRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-activedescendant': null,
    'aria-disabled': null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget']]
};
var _default = compositeRole;
exports["default"] = _default;

/***/ }),

/***/ 8173:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var inputRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null
  },
  relatedConcepts: [{
    concept: {
      name: 'input'
    },
    module: 'XForms'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget']]
};
var _default = inputRole;
exports["default"] = _default;

/***/ }),

/***/ 2328:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var landmarkRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = landmarkRole;
exports["default"] = _default;

/***/ }),

/***/ 6238:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var rangeRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-valuemax': null,
    'aria-valuemin': null,
    'aria-valuenow': null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure']]
};
var _default = rangeRole;
exports["default"] = _default;

/***/ }),

/***/ 6678:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var roletypeRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [],
  prohibitedProps: [],
  props: {
    'aria-atomic': null,
    'aria-busy': null,
    'aria-controls': null,
    'aria-current': null,
    'aria-describedby': null,
    'aria-details': null,
    'aria-dropeffect': null,
    'aria-flowto': null,
    'aria-grabbed': null,
    'aria-hidden': null,
    'aria-keyshortcuts': null,
    'aria-label': null,
    'aria-labelledby': null,
    'aria-live': null,
    'aria-owns': null,
    'aria-relevant': null,
    'aria-roledescription': null
  },
  relatedConcepts: [{
    concept: {
      name: 'rel'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'role'
    },
    module: 'XHTML'
  }, {
    concept: {
      name: 'type'
    },
    module: 'Dublin Core'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
};
var _default = roletypeRole;
exports["default"] = _default;

/***/ }),

/***/ 4799:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var sectionRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'frontmatter'
    },
    module: 'DTB'
  }, {
    concept: {
      name: 'level'
    },
    module: 'DTB'
  }, {
    concept: {
      name: 'level'
    },
    module: 'SMIL'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure']]
};
var _default = sectionRole;
exports["default"] = _default;

/***/ }),

/***/ 1656:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var sectionheadRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure']]
};
var _default = sectionheadRole;
exports["default"] = _default;

/***/ }),

/***/ 1804:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var selectRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-orientation': null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite'], ['roletype', 'structure', 'section', 'group']]
};
var _default = selectRole;
exports["default"] = _default;

/***/ }),

/***/ 520:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var structureRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype']]
};
var _default = structureRole;
exports["default"] = _default;

/***/ }),

/***/ 8733:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var widgetRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype']]
};
var _default = widgetRole;
exports["default"] = _default;

/***/ }),

/***/ 47:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var windowRole = {
  abstract: true,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-modal': null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype']]
};
var _default = windowRole;
exports["default"] = _default;

/***/ }),

/***/ 6138:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _commandRole = _interopRequireDefault(__webpack_require__(4329));
var _compositeRole = _interopRequireDefault(__webpack_require__(1185));
var _inputRole = _interopRequireDefault(__webpack_require__(8173));
var _landmarkRole = _interopRequireDefault(__webpack_require__(2328));
var _rangeRole = _interopRequireDefault(__webpack_require__(6238));
var _roletypeRole = _interopRequireDefault(__webpack_require__(6678));
var _sectionRole = _interopRequireDefault(__webpack_require__(4799));
var _sectionheadRole = _interopRequireDefault(__webpack_require__(1656));
var _selectRole = _interopRequireDefault(__webpack_require__(1804));
var _structureRole = _interopRequireDefault(__webpack_require__(520));
var _widgetRole = _interopRequireDefault(__webpack_require__(8733));
var _windowRole = _interopRequireDefault(__webpack_require__(47));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ariaAbstractRoles = [['command', _commandRole.default], ['composite', _compositeRole.default], ['input', _inputRole.default], ['landmark', _landmarkRole.default], ['range', _rangeRole.default], ['roletype', _roletypeRole.default], ['section', _sectionRole.default], ['sectionhead', _sectionheadRole.default], ['select', _selectRole.default], ['structure', _structureRole.default], ['widget', _widgetRole.default], ['window', _windowRole.default]];
var _default = ariaAbstractRoles;
exports["default"] = _default;

/***/ }),

/***/ 5302:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _docAbstractRole = _interopRequireDefault(__webpack_require__(481));
var _docAcknowledgmentsRole = _interopRequireDefault(__webpack_require__(5410));
var _docAfterwordRole = _interopRequireDefault(__webpack_require__(3821));
var _docAppendixRole = _interopRequireDefault(__webpack_require__(2222));
var _docBacklinkRole = _interopRequireDefault(__webpack_require__(5493));
var _docBiblioentryRole = _interopRequireDefault(__webpack_require__(7507));
var _docBibliographyRole = _interopRequireDefault(__webpack_require__(1410));
var _docBibliorefRole = _interopRequireDefault(__webpack_require__(3456));
var _docChapterRole = _interopRequireDefault(__webpack_require__(3881));
var _docColophonRole = _interopRequireDefault(__webpack_require__(8642));
var _docConclusionRole = _interopRequireDefault(__webpack_require__(8556));
var _docCoverRole = _interopRequireDefault(__webpack_require__(945));
var _docCreditRole = _interopRequireDefault(__webpack_require__(4658));
var _docCreditsRole = _interopRequireDefault(__webpack_require__(244));
var _docDedicationRole = _interopRequireDefault(__webpack_require__(212));
var _docEndnoteRole = _interopRequireDefault(__webpack_require__(1111));
var _docEndnotesRole = _interopRequireDefault(__webpack_require__(7171));
var _docEpigraphRole = _interopRequireDefault(__webpack_require__(4552));
var _docEpilogueRole = _interopRequireDefault(__webpack_require__(8373));
var _docErrataRole = _interopRequireDefault(__webpack_require__(711));
var _docExampleRole = _interopRequireDefault(__webpack_require__(3612));
var _docFootnoteRole = _interopRequireDefault(__webpack_require__(6909));
var _docForewordRole = _interopRequireDefault(__webpack_require__(6361));
var _docGlossaryRole = _interopRequireDefault(__webpack_require__(36));
var _docGlossrefRole = _interopRequireDefault(__webpack_require__(6871));
var _docIndexRole = _interopRequireDefault(__webpack_require__(3035));
var _docIntroductionRole = _interopRequireDefault(__webpack_require__(6498));
var _docNoterefRole = _interopRequireDefault(__webpack_require__(7364));
var _docNoticeRole = _interopRequireDefault(__webpack_require__(6589));
var _docPagebreakRole = _interopRequireDefault(__webpack_require__(4216));
var _docPagelistRole = _interopRequireDefault(__webpack_require__(386));
var _docPartRole = _interopRequireDefault(__webpack_require__(2554));
var _docPrefaceRole = _interopRequireDefault(__webpack_require__(5885));
var _docPrologueRole = _interopRequireDefault(__webpack_require__(2186));
var _docPullquoteRole = _interopRequireDefault(__webpack_require__(805));
var _docQnaRole = _interopRequireDefault(__webpack_require__(3135));
var _docSubtitleRole = _interopRequireDefault(__webpack_require__(4174));
var _docTipRole = _interopRequireDefault(__webpack_require__(5903));
var _docTocRole = _interopRequireDefault(__webpack_require__(3535));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ariaDpubRoles = [['doc-abstract', _docAbstractRole.default], ['doc-acknowledgments', _docAcknowledgmentsRole.default], ['doc-afterword', _docAfterwordRole.default], ['doc-appendix', _docAppendixRole.default], ['doc-backlink', _docBacklinkRole.default], ['doc-biblioentry', _docBiblioentryRole.default], ['doc-bibliography', _docBibliographyRole.default], ['doc-biblioref', _docBibliorefRole.default], ['doc-chapter', _docChapterRole.default], ['doc-colophon', _docColophonRole.default], ['doc-conclusion', _docConclusionRole.default], ['doc-cover', _docCoverRole.default], ['doc-credit', _docCreditRole.default], ['doc-credits', _docCreditsRole.default], ['doc-dedication', _docDedicationRole.default], ['doc-endnote', _docEndnoteRole.default], ['doc-endnotes', _docEndnotesRole.default], ['doc-epigraph', _docEpigraphRole.default], ['doc-epilogue', _docEpilogueRole.default], ['doc-errata', _docErrataRole.default], ['doc-example', _docExampleRole.default], ['doc-footnote', _docFootnoteRole.default], ['doc-foreword', _docForewordRole.default], ['doc-glossary', _docGlossaryRole.default], ['doc-glossref', _docGlossrefRole.default], ['doc-index', _docIndexRole.default], ['doc-introduction', _docIntroductionRole.default], ['doc-noteref', _docNoterefRole.default], ['doc-notice', _docNoticeRole.default], ['doc-pagebreak', _docPagebreakRole.default], ['doc-pagelist', _docPagelistRole.default], ['doc-part', _docPartRole.default], ['doc-preface', _docPrefaceRole.default], ['doc-prologue', _docPrologueRole.default], ['doc-pullquote', _docPullquoteRole.default], ['doc-qna', _docQnaRole.default], ['doc-subtitle', _docSubtitleRole.default], ['doc-tip', _docTipRole.default], ['doc-toc', _docTocRole.default]];
var _default = ariaDpubRoles;
exports["default"] = _default;

/***/ }),

/***/ 4337:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _graphicsDocumentRole = _interopRequireDefault(__webpack_require__(4110));
var _graphicsObjectRole = _interopRequireDefault(__webpack_require__(6832));
var _graphicsSymbolRole = _interopRequireDefault(__webpack_require__(5260));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ariaGraphicsRoles = [['graphics-document', _graphicsDocumentRole.default], ['graphics-object', _graphicsObjectRole.default], ['graphics-symbol', _graphicsSymbolRole.default]];
var _default = ariaGraphicsRoles;
exports["default"] = _default;

/***/ }),

/***/ 9081:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _alertRole = _interopRequireDefault(__webpack_require__(3737));
var _alertdialogRole = _interopRequireDefault(__webpack_require__(1412));
var _applicationRole = _interopRequireDefault(__webpack_require__(968));
var _articleRole = _interopRequireDefault(__webpack_require__(8466));
var _bannerRole = _interopRequireDefault(__webpack_require__(8496));
var _blockquoteRole = _interopRequireDefault(__webpack_require__(2540));
var _buttonRole = _interopRequireDefault(__webpack_require__(34));
var _captionRole = _interopRequireDefault(__webpack_require__(589));
var _cellRole = _interopRequireDefault(__webpack_require__(981));
var _checkboxRole = _interopRequireDefault(__webpack_require__(7064));
var _codeRole = _interopRequireDefault(__webpack_require__(9882));
var _columnheaderRole = _interopRequireDefault(__webpack_require__(948));
var _comboboxRole = _interopRequireDefault(__webpack_require__(4978));
var _complementaryRole = _interopRequireDefault(__webpack_require__(6246));
var _contentinfoRole = _interopRequireDefault(__webpack_require__(8844));
var _definitionRole = _interopRequireDefault(__webpack_require__(1463));
var _deletionRole = _interopRequireDefault(__webpack_require__(9174));
var _dialogRole = _interopRequireDefault(__webpack_require__(8422));
var _directoryRole = _interopRequireDefault(__webpack_require__(2686));
var _documentRole = _interopRequireDefault(__webpack_require__(3477));
var _emphasisRole = _interopRequireDefault(__webpack_require__(7089));
var _feedRole = _interopRequireDefault(__webpack_require__(949));
var _figureRole = _interopRequireDefault(__webpack_require__(5000));
var _formRole = _interopRequireDefault(__webpack_require__(3204));
var _genericRole = _interopRequireDefault(__webpack_require__(6481));
var _gridRole = _interopRequireDefault(__webpack_require__(9782));
var _gridcellRole = _interopRequireDefault(__webpack_require__(6974));
var _groupRole = _interopRequireDefault(__webpack_require__(8458));
var _headingRole = _interopRequireDefault(__webpack_require__(2589));
var _imgRole = _interopRequireDefault(__webpack_require__(4046));
var _insertionRole = _interopRequireDefault(__webpack_require__(8186));
var _linkRole = _interopRequireDefault(__webpack_require__(2339));
var _listRole = _interopRequireDefault(__webpack_require__(5448));
var _listboxRole = _interopRequireDefault(__webpack_require__(7297));
var _listitemRole = _interopRequireDefault(__webpack_require__(2573));
var _logRole = _interopRequireDefault(__webpack_require__(397));
var _mainRole = _interopRequireDefault(__webpack_require__(7116));
var _marqueeRole = _interopRequireDefault(__webpack_require__(6718));
var _mathRole = _interopRequireDefault(__webpack_require__(8581));
var _menuRole = _interopRequireDefault(__webpack_require__(3874));
var _menubarRole = _interopRequireDefault(__webpack_require__(5880));
var _menuitemRole = _interopRequireDefault(__webpack_require__(1549));
var _menuitemcheckboxRole = _interopRequireDefault(__webpack_require__(4092));
var _menuitemradioRole = _interopRequireDefault(__webpack_require__(7305));
var _meterRole = _interopRequireDefault(__webpack_require__(1216));
var _navigationRole = _interopRequireDefault(__webpack_require__(5344));
var _noneRole = _interopRequireDefault(__webpack_require__(6541));
var _noteRole = _interopRequireDefault(__webpack_require__(9845));
var _optionRole = _interopRequireDefault(__webpack_require__(4955));
var _paragraphRole = _interopRequireDefault(__webpack_require__(3289));
var _presentationRole = _interopRequireDefault(__webpack_require__(3721));
var _progressbarRole = _interopRequireDefault(__webpack_require__(6669));
var _radioRole = _interopRequireDefault(__webpack_require__(3855));
var _radiogroupRole = _interopRequireDefault(__webpack_require__(5715));
var _regionRole = _interopRequireDefault(__webpack_require__(7397));
var _rowRole = _interopRequireDefault(__webpack_require__(3046));
var _rowgroupRole = _interopRequireDefault(__webpack_require__(8666));
var _rowheaderRole = _interopRequireDefault(__webpack_require__(2544));
var _scrollbarRole = _interopRequireDefault(__webpack_require__(4064));
var _searchRole = _interopRequireDefault(__webpack_require__(5072));
var _searchboxRole = _interopRequireDefault(__webpack_require__(9983));
var _separatorRole = _interopRequireDefault(__webpack_require__(2646));
var _sliderRole = _interopRequireDefault(__webpack_require__(4208));
var _spinbuttonRole = _interopRequireDefault(__webpack_require__(6368));
var _statusRole = _interopRequireDefault(__webpack_require__(2497));
var _strongRole = _interopRequireDefault(__webpack_require__(7575));
var _subscriptRole = _interopRequireDefault(__webpack_require__(4357));
var _superscriptRole = _interopRequireDefault(__webpack_require__(5957));
var _switchRole = _interopRequireDefault(__webpack_require__(8917));
var _tabRole = _interopRequireDefault(__webpack_require__(8743));
var _tableRole = _interopRequireDefault(__webpack_require__(1053));
var _tablistRole = _interopRequireDefault(__webpack_require__(1599));
var _tabpanelRole = _interopRequireDefault(__webpack_require__(3193));
var _termRole = _interopRequireDefault(__webpack_require__(4665));
var _textboxRole = _interopRequireDefault(__webpack_require__(221));
var _timeRole = _interopRequireDefault(__webpack_require__(5313));
var _timerRole = _interopRequireDefault(__webpack_require__(1777));
var _toolbarRole = _interopRequireDefault(__webpack_require__(3316));
var _tooltipRole = _interopRequireDefault(__webpack_require__(9304));
var _treeRole = _interopRequireDefault(__webpack_require__(3538));
var _treegridRole = _interopRequireDefault(__webpack_require__(5627));
var _treeitemRole = _interopRequireDefault(__webpack_require__(8425));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ariaLiteralRoles = [['alert', _alertRole.default], ['alertdialog', _alertdialogRole.default], ['application', _applicationRole.default], ['article', _articleRole.default], ['banner', _bannerRole.default], ['blockquote', _blockquoteRole.default], ['button', _buttonRole.default], ['caption', _captionRole.default], ['cell', _cellRole.default], ['checkbox', _checkboxRole.default], ['code', _codeRole.default], ['columnheader', _columnheaderRole.default], ['combobox', _comboboxRole.default], ['complementary', _complementaryRole.default], ['contentinfo', _contentinfoRole.default], ['definition', _definitionRole.default], ['deletion', _deletionRole.default], ['dialog', _dialogRole.default], ['directory', _directoryRole.default], ['document', _documentRole.default], ['emphasis', _emphasisRole.default], ['feed', _feedRole.default], ['figure', _figureRole.default], ['form', _formRole.default], ['generic', _genericRole.default], ['grid', _gridRole.default], ['gridcell', _gridcellRole.default], ['group', _groupRole.default], ['heading', _headingRole.default], ['img', _imgRole.default], ['insertion', _insertionRole.default], ['link', _linkRole.default], ['list', _listRole.default], ['listbox', _listboxRole.default], ['listitem', _listitemRole.default], ['log', _logRole.default], ['main', _mainRole.default], ['marquee', _marqueeRole.default], ['math', _mathRole.default], ['menu', _menuRole.default], ['menubar', _menubarRole.default], ['menuitem', _menuitemRole.default], ['menuitemcheckbox', _menuitemcheckboxRole.default], ['menuitemradio', _menuitemradioRole.default], ['meter', _meterRole.default], ['navigation', _navigationRole.default], ['none', _noneRole.default], ['note', _noteRole.default], ['option', _optionRole.default], ['paragraph', _paragraphRole.default], ['presentation', _presentationRole.default], ['progressbar', _progressbarRole.default], ['radio', _radioRole.default], ['radiogroup', _radiogroupRole.default], ['region', _regionRole.default], ['row', _rowRole.default], ['rowgroup', _rowgroupRole.default], ['rowheader', _rowheaderRole.default], ['scrollbar', _scrollbarRole.default], ['search', _searchRole.default], ['searchbox', _searchboxRole.default], ['separator', _separatorRole.default], ['slider', _sliderRole.default], ['spinbutton', _spinbuttonRole.default], ['status', _statusRole.default], ['strong', _strongRole.default], ['subscript', _subscriptRole.default], ['superscript', _superscriptRole.default], ['switch', _switchRole.default], ['tab', _tabRole.default], ['table', _tableRole.default], ['tablist', _tablistRole.default], ['tabpanel', _tabpanelRole.default], ['term', _termRole.default], ['textbox', _textboxRole.default], ['time', _timeRole.default], ['timer', _timerRole.default], ['toolbar', _toolbarRole.default], ['tooltip', _tooltipRole.default], ['tree', _treeRole.default], ['treegrid', _treegridRole.default], ['treeitem', _treeitemRole.default]];
var _default = ariaLiteralRoles;
exports["default"] = _default;

/***/ }),

/***/ 481:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docAbstractRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'abstract [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = docAbstractRole;
exports["default"] = _default;

/***/ }),

/***/ 5410:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docAcknowledgmentsRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'acknowledgments [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docAcknowledgmentsRole;
exports["default"] = _default;

/***/ }),

/***/ 3821:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docAfterwordRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'afterword [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docAfterwordRole;
exports["default"] = _default;

/***/ }),

/***/ 2222:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docAppendixRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'appendix [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docAppendixRole;
exports["default"] = _default;

/***/ }),

/***/ 5493:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docBacklinkRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'content'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'referrer [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'command', 'link']]
};
var _default = docBacklinkRole;
exports["default"] = _default;

/***/ }),

/***/ 7507:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docBiblioentryRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'EPUB biblioentry [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: ['doc-bibliography'],
  requiredContextRole: ['doc-bibliography'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'listitem']]
};
var _default = docBiblioentryRole;
exports["default"] = _default;

/***/ }),

/***/ 1410:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docBibliographyRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'bibliography [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['doc-biblioentry']],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docBibliographyRole;
exports["default"] = _default;

/***/ }),

/***/ 3456:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docBibliorefRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'biblioref [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'command', 'link']]
};
var _default = docBibliorefRole;
exports["default"] = _default;

/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docChapterRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'chapter [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docChapterRole;
exports["default"] = _default;

/***/ }),

/***/ 8642:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docColophonRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'colophon [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = docColophonRole;
exports["default"] = _default;

/***/ }),

/***/ 8556:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docConclusionRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'conclusion [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docConclusionRole;
exports["default"] = _default;

/***/ }),

/***/ 945:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docCoverRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'cover [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'img']]
};
var _default = docCoverRole;
exports["default"] = _default;

/***/ }),

/***/ 4658:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docCreditRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'credit [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = docCreditRole;
exports["default"] = _default;

/***/ }),

/***/ 244:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docCreditsRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'credits [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docCreditsRole;
exports["default"] = _default;

/***/ }),

/***/ 212:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docDedicationRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'dedication [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = docDedicationRole;
exports["default"] = _default;

/***/ }),

/***/ 1111:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docEndnoteRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'rearnote [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: ['doc-endnotes'],
  requiredContextRole: ['doc-endnotes'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'listitem']]
};
var _default = docEndnoteRole;
exports["default"] = _default;

/***/ }),

/***/ 7171:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docEndnotesRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'rearnotes [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['doc-endnote']],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docEndnotesRole;
exports["default"] = _default;

/***/ }),

/***/ 4552:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docEpigraphRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'epigraph [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = docEpigraphRole;
exports["default"] = _default;

/***/ }),

/***/ 8373:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docEpilogueRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'epilogue [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docEpilogueRole;
exports["default"] = _default;

/***/ }),

/***/ 711:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docErrataRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'errata [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docErrataRole;
exports["default"] = _default;

/***/ }),

/***/ 3612:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docExampleRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = docExampleRole;
exports["default"] = _default;

/***/ }),

/***/ 6909:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docFootnoteRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'footnote [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = docFootnoteRole;
exports["default"] = _default;

/***/ }),

/***/ 6361:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docForewordRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'foreword [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docForewordRole;
exports["default"] = _default;

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docGlossaryRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'glossary [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['definition'], ['term']],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docGlossaryRole;
exports["default"] = _default;

/***/ }),

/***/ 6871:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docGlossrefRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'glossref [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'command', 'link']]
};
var _default = docGlossrefRole;
exports["default"] = _default;

/***/ }),

/***/ 3035:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docIndexRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'index [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
};
var _default = docIndexRole;
exports["default"] = _default;

/***/ }),

/***/ 6498:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docIntroductionRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'introduction [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docIntroductionRole;
exports["default"] = _default;

/***/ }),

/***/ 7364:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docNoterefRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'noteref [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'command', 'link']]
};
var _default = docNoterefRole;
exports["default"] = _default;

/***/ }),

/***/ 6589:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docNoticeRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'notice [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'note']]
};
var _default = docNoticeRole;
exports["default"] = _default;

/***/ }),

/***/ 4216:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docPagebreakRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'pagebreak [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'separator']]
};
var _default = docPagebreakRole;
exports["default"] = _default;

/***/ }),

/***/ 386:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docPagelistRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'page-list [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
};
var _default = docPagelistRole;
exports["default"] = _default;

/***/ }),

/***/ 2554:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docPartRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'part [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docPartRole;
exports["default"] = _default;

/***/ }),

/***/ 5885:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docPrefaceRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'preface [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docPrefaceRole;
exports["default"] = _default;

/***/ }),

/***/ 2186:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docPrologueRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'prologue [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = docPrologueRole;
exports["default"] = _default;

/***/ }),

/***/ 805:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docPullquoteRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'pullquote [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['none']]
};
var _default = docPullquoteRole;
exports["default"] = _default;

/***/ }),

/***/ 3135:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docQnaRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'qna [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = docQnaRole;
exports["default"] = _default;

/***/ }),

/***/ 4174:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docSubtitleRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'subtitle [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'sectionhead']]
};
var _default = docSubtitleRole;
exports["default"] = _default;

/***/ }),

/***/ 5903:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docTipRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'help [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'note']]
};
var _default = docTipRole;
exports["default"] = _default;

/***/ }),

/***/ 3535:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var docTocRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'toc [EPUB-SSV]'
    },
    module: 'EPUB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
};
var _default = docTocRole;
exports["default"] = _default;

/***/ }),

/***/ 4110:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var graphicsDocumentRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    module: 'GRAPHICS',
    concept: {
      name: 'graphics-object'
    }
  }, {
    module: 'ARIA',
    concept: {
      name: 'img'
    }
  }, {
    module: 'ARIA',
    concept: {
      name: 'article'
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'document']]
};
var _default = graphicsDocumentRole;
exports["default"] = _default;

/***/ }),

/***/ 6832:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var graphicsObjectRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    module: 'GRAPHICS',
    concept: {
      name: 'graphics-document'
    }
  }, {
    module: 'ARIA',
    concept: {
      name: 'group'
    }
  }, {
    module: 'ARIA',
    concept: {
      name: 'img'
    }
  }, {
    module: 'GRAPHICS',
    concept: {
      name: 'graphics-symbol'
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'group']]
};
var _default = graphicsObjectRole;
exports["default"] = _default;

/***/ }),

/***/ 5260:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var graphicsSymbolRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'img']]
};
var _default = graphicsSymbolRole;
exports["default"] = _default;

/***/ }),

/***/ 3737:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var alertRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-atomic': 'true',
    'aria-live': 'assertive'
  },
  relatedConcepts: [{
    concept: {
      name: 'alert'
    },
    module: 'XForms'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = alertRole;
exports["default"] = _default;

/***/ }),

/***/ 1412:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var alertdialogRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'alert'
    },
    module: 'XForms'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'alert'], ['roletype', 'window', 'dialog']]
};
var _default = alertdialogRole;
exports["default"] = _default;

/***/ }),

/***/ 968:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var applicationRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-activedescendant': null,
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null
  },
  relatedConcepts: [{
    concept: {
      name: 'Device Independence Delivery Unit'
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure']]
};
var _default = applicationRole;
exports["default"] = _default;

/***/ }),

/***/ 8466:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var articleRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-posinset': null,
    'aria-setsize': null
  },
  relatedConcepts: [{
    concept: {
      name: 'article'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'document']]
};
var _default = articleRole;
exports["default"] = _default;

/***/ }),

/***/ 8496:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var bannerRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ['direct descendant of document'],
      name: 'header'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = bannerRole;
exports["default"] = _default;

/***/ }),

/***/ 2540:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var blockquoteRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = blockquoteRole;
exports["default"] = _default;

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var buttonRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-pressed': null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'aria-pressed'
      }, {
        name: 'type',
        value: 'checkbox'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'aria-expanded',
        value: 'false'
      }],
      name: 'summary'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'aria-expanded',
        value: 'true'
      }],
      constraints: ['direct descendant of details element with the open attribute defined'],
      name: 'summary'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'type',
        value: 'button'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'type',
        value: 'image'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'type',
        value: 'reset'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'type',
        value: 'submit'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'button'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'trigger'
    },
    module: 'XForms'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'command']]
};
var _default = buttonRole;
exports["default"] = _default;

/***/ }),

/***/ 589:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var captionRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: ['figure', 'grid', 'table'],
  requiredContextRole: ['figure', 'grid', 'table'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = captionRole;
exports["default"] = _default;

/***/ }),

/***/ 981:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var cellRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-colindex': null,
    'aria-colspan': null,
    'aria-rowindex': null,
    'aria-rowspan': null
  },
  relatedConcepts: [{
    concept: {
      constraints: ['descendant of table'],
      name: 'td'
    },
    module: 'HTML'
  }],
  requireContextRole: ['row'],
  requiredContextRole: ['row'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = cellRole;
exports["default"] = _default;

/***/ }),

/***/ 7064:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var checkboxRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-checked': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-required': null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: 'type',
        value: 'checkbox'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'option'
    },
    module: 'ARIA'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': null
  },
  superClass: [['roletype', 'widget', 'input']]
};
var _default = checkboxRole;
exports["default"] = _default;

/***/ }),

/***/ 9882:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var codeRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = codeRole;
exports["default"] = _default;

/***/ }),

/***/ 948:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var columnheaderRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-sort': null
  },
  relatedConcepts: [{
    attributes: [{
      name: 'scope',
      value: 'col'
    }],
    concept: {
      name: 'th'
    },
    module: 'HTML'
  }],
  requireContextRole: ['row'],
  requiredContextRole: ['row'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'structure', 'section', 'cell', 'gridcell'], ['roletype', 'widget', 'gridcell'], ['roletype', 'structure', 'sectionhead']]
};
var _default = columnheaderRole;
exports["default"] = _default;

/***/ }),

/***/ 4978:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var comboboxRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-activedescendant': null,
    'aria-autocomplete': null,
    'aria-errormessage': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-expanded': 'false',
    'aria-haspopup': 'listbox'
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'list'
      }, {
        name: 'type',
        value: 'email'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'list'
      }, {
        name: 'type',
        value: 'search'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'list'
      }, {
        name: 'type',
        value: 'tel'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'list'
      }, {
        name: 'type',
        value: 'text'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'list'
      }, {
        name: 'type',
        value: 'url'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'list'
      }, {
        name: 'type',
        value: 'url'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'multiple'
      }, {
        constraints: ['undefined'],
        name: 'size'
      }],
      name: 'select'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'multiple'
      }, {
        name: 'size',
        value: 1
      }],
      name: 'select'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'select'
    },
    module: 'XForms'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-controls': null,
    'aria-expanded': 'false'
  },
  superClass: [['roletype', 'widget', 'input']]
};
var _default = comboboxRole;
exports["default"] = _default;

/***/ }),

/***/ 6246:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var complementaryRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'aside'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = complementaryRole;
exports["default"] = _default;

/***/ }),

/***/ 8844:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var contentinfoRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      constraints: ['direct descendant of document'],
      name: 'footer'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = contentinfoRole;
exports["default"] = _default;

/***/ }),

/***/ 1463:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var definitionRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'dd'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = definitionRole;
exports["default"] = _default;

/***/ }),

/***/ 9174:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var deletionRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = deletionRole;
exports["default"] = _default;

/***/ }),

/***/ 8422:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var dialogRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'dialog'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'window']]
};
var _default = dialogRole;
exports["default"] = _default;

/***/ }),

/***/ 2686:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var directoryRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    module: 'DAISY Guide'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'list']]
};
var _default = directoryRole;
exports["default"] = _default;

/***/ }),

/***/ 3477:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var documentRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'Device Independence Delivery Unit'
    }
  }, {
    concept: {
      name: 'body'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure']]
};
var _default = documentRole;
exports["default"] = _default;

/***/ }),

/***/ 7089:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var emphasisRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = emphasisRole;
exports["default"] = _default;

/***/ }),

/***/ 949:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var feedRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['article']],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'list']]
};
var _default = feedRole;
exports["default"] = _default;

/***/ }),

/***/ 5000:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var figureRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'figure'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = figureRole;
exports["default"] = _default;

/***/ }),

/***/ 3204:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var formRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'aria-label'
      }],
      name: 'form'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'aria-labelledby'
      }],
      name: 'form'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'name'
      }],
      name: 'form'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = formRole;
exports["default"] = _default;

/***/ }),

/***/ 6481:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var genericRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'span'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'div'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure']]
};
var _default = genericRole;
exports["default"] = _default;

/***/ }),

/***/ 9782:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var gridRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-multiselectable': null,
    'aria-readonly': null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: 'role',
        value: 'grid'
      }],
      name: 'table'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['row'], ['row', 'rowgroup']],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite'], ['roletype', 'structure', 'section', 'table']]
};
var _default = gridRole;
exports["default"] = _default;

/***/ }),

/***/ 6974:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var gridcellRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-selected': null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: 'role',
        value: 'gridcell'
      }],
      name: 'td'
    },
    module: 'HTML'
  }],
  requireContextRole: ['row'],
  requiredContextRole: ['row'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'widget']]
};
var _default = gridcellRole;
exports["default"] = _default;

/***/ }),

/***/ 8458:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var groupRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-activedescendant': null,
    'aria-disabled': null
  },
  relatedConcepts: [{
    concept: {
      name: 'details'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'fieldset'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'optgroup'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = groupRole;
exports["default"] = _default;

/***/ }),

/***/ 2589:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var headingRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-level': '2'
  },
  relatedConcepts: [{
    concept: {
      name: 'h1'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'h2'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'h3'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'h4'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'h5'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'h6'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-level': '2'
  },
  superClass: [['roletype', 'structure', 'sectionhead']]
};
var _default = headingRole;
exports["default"] = _default;

/***/ }),

/***/ 4046:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var imgRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'alt'
      }],
      name: 'img'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'alt'
      }],
      name: 'img'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'imggroup'
    },
    module: 'DTB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = imgRole;
exports["default"] = _default;

/***/ }),

/***/ 8186:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var insertionRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = insertionRole;
exports["default"] = _default;

/***/ }),

/***/ 2339:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var linkRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-expanded': null,
    'aria-haspopup': null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: 'href'
      }],
      name: 'a'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'href'
      }],
      name: 'area'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'href'
      }],
      name: 'link'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'command']]
};
var _default = linkRole;
exports["default"] = _default;

/***/ }),

/***/ 5448:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var listRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'menu'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'ol'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'ul'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['listitem']],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = listRole;
exports["default"] = _default;

/***/ }),

/***/ 7297:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var listboxRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-expanded': null,
    'aria-invalid': null,
    'aria-multiselectable': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-orientation': 'vertical'
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ['>1'],
        name: 'size'
      }, {
        name: 'multiple'
      }],
      name: 'select'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['>1'],
        name: 'size'
      }],
      name: 'select'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'multiple'
      }],
      name: 'select'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'datalist'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'list'
    },
    module: 'ARIA'
  }, {
    concept: {
      name: 'select'
    },
    module: 'XForms'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['option', 'group'], ['option']],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]
};
var _default = listboxRole;
exports["default"] = _default;

/***/ }),

/***/ 2573:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var listitemRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-level': null,
    'aria-posinset': null,
    'aria-setsize': null
  },
  relatedConcepts: [{
    concept: {
      constraints: ['direct descendant of ol, ul or menu'],
      name: 'li'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'item'
    },
    module: 'XForms'
  }],
  requireContextRole: ['directory', 'list'],
  requiredContextRole: ['directory', 'list'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = listitemRole;
exports["default"] = _default;

/***/ }),

/***/ 397:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var logRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-live': 'polite'
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = logRole;
exports["default"] = _default;

/***/ }),

/***/ 7116:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var mainRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'main'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = mainRole;
exports["default"] = _default;

/***/ }),

/***/ 6718:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var marqueeRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = marqueeRole;
exports["default"] = _default;

/***/ }),

/***/ 8581:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var mathRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'math'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = mathRole;
exports["default"] = _default;

/***/ }),

/***/ 3874:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var menuRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-orientation': 'vertical'
  },
  relatedConcepts: [{
    concept: {
      name: 'MENU'
    },
    module: 'JAPI'
  }, {
    concept: {
      name: 'list'
    },
    module: 'ARIA'
  }, {
    concept: {
      name: 'select'
    },
    module: 'XForms'
  }, {
    concept: {
      name: 'sidebar'
    },
    module: 'DTB'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['menuitem', 'group'], ['menuitemradio', 'group'], ['menuitemcheckbox', 'group'], ['menuitem'], ['menuitemcheckbox'], ['menuitemradio']],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]
};
var _default = menuRole;
exports["default"] = _default;

/***/ }),

/***/ 5880:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var menubarRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-orientation': 'horizontal'
  },
  relatedConcepts: [{
    concept: {
      name: 'toolbar'
    },
    module: 'ARIA'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['menuitem', 'group'], ['menuitemradio', 'group'], ['menuitemcheckbox', 'group'], ['menuitem'], ['menuitemcheckbox'], ['menuitemradio']],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite', 'select', 'menu'], ['roletype', 'structure', 'section', 'group', 'select', 'menu']]
};
var _default = menubarRole;
exports["default"] = _default;

/***/ }),

/***/ 1549:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var menuitemRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-posinset': null,
    'aria-setsize': null
  },
  relatedConcepts: [{
    concept: {
      name: 'MENU_ITEM'
    },
    module: 'JAPI'
  }, {
    concept: {
      name: 'listitem'
    },
    module: 'ARIA'
  }, {
    concept: {
      name: 'menuitem'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'option'
    },
    module: 'ARIA'
  }],
  requireContextRole: ['group', 'menu', 'menubar'],
  requiredContextRole: ['group', 'menu', 'menubar'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'command']]
};
var _default = menuitemRole;
exports["default"] = _default;

/***/ }),

/***/ 4092:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var menuitemcheckboxRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'menuitem'
    },
    module: 'ARIA'
  }],
  requireContextRole: ['group', 'menu', 'menubar'],
  requiredContextRole: ['group', 'menu', 'menubar'],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': null
  },
  superClass: [['roletype', 'widget', 'input', 'checkbox'], ['roletype', 'widget', 'command', 'menuitem']]
};
var _default = menuitemcheckboxRole;
exports["default"] = _default;

/***/ }),

/***/ 7305:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var menuitemradioRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'menuitem'
    },
    module: 'ARIA'
  }],
  requireContextRole: ['group', 'menu', 'menubar'],
  requiredContextRole: ['group', 'menu', 'menubar'],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': null
  },
  superClass: [['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'], ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'], ['roletype', 'widget', 'input', 'radio']]
};
var _default = menuitemradioRole;
exports["default"] = _default;

/***/ }),

/***/ 1216:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var meterRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-valuetext': null,
    'aria-valuemax': '100',
    'aria-valuemin': '0'
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-valuenow': null
  },
  superClass: [['roletype', 'structure', 'range']]
};
var _default = meterRole;
exports["default"] = _default;

/***/ }),

/***/ 5344:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var navigationRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'nav'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = navigationRole;
exports["default"] = _default;

/***/ }),

/***/ 6541:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var noneRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: []
};
var _default = noneRole;
exports["default"] = _default;

/***/ }),

/***/ 9845:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var noteRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = noteRole;
exports["default"] = _default;

/***/ }),

/***/ 4955:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var optionRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-checked': null,
    'aria-posinset': null,
    'aria-setsize': null,
    'aria-selected': 'false'
  },
  relatedConcepts: [{
    concept: {
      name: 'item'
    },
    module: 'XForms'
  }, {
    concept: {
      name: 'listitem'
    },
    module: 'ARIA'
  }, {
    concept: {
      name: 'option'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-selected': 'false'
  },
  superClass: [['roletype', 'widget', 'input']]
};
var _default = optionRole;
exports["default"] = _default;

/***/ }),

/***/ 3289:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var paragraphRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = paragraphRole;
exports["default"] = _default;

/***/ }),

/***/ 3721:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var presentationRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure']]
};
var _default = presentationRole;
exports["default"] = _default;

/***/ }),

/***/ 6669:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var progressbarRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-valuetext': null
  },
  relatedConcepts: [{
    concept: {
      name: 'progress'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'status'
    },
    module: 'ARIA'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'range'], ['roletype', 'widget']]
};
var _default = progressbarRole;
exports["default"] = _default;

/***/ }),

/***/ 3855:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var radioRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-checked': null,
    'aria-posinset': null,
    'aria-setsize': null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: 'type',
        value: 'radio'
      }],
      name: 'input'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': null
  },
  superClass: [['roletype', 'widget', 'input']]
};
var _default = radioRole;
exports["default"] = _default;

/***/ }),

/***/ 5715:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var radiogroupRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-required': null
  },
  relatedConcepts: [{
    concept: {
      name: 'list'
    },
    module: 'ARIA'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['radio']],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]
};
var _default = radiogroupRole;
exports["default"] = _default;

/***/ }),

/***/ 7397:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var regionRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'aria-label'
      }],
      name: 'section'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['set'],
        name: 'aria-labelledby'
      }],
      name: 'section'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'Device Independence Glossart perceivable unit'
    }
  }, {
    concept: {
      name: 'frame'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = regionRole;
exports["default"] = _default;

/***/ }),

/***/ 3046:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var rowRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-colindex': null,
    'aria-expanded': null,
    'aria-level': null,
    'aria-posinset': null,
    'aria-rowindex': null,
    'aria-selected': null,
    'aria-setsize': null
  },
  relatedConcepts: [{
    concept: {
      name: 'tr'
    },
    module: 'HTML'
  }],
  requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
  requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
  requiredOwnedElements: [['cell'], ['columnheader'], ['gridcell'], ['rowheader']],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'group'], ['roletype', 'widget']]
};
var _default = rowRole;
exports["default"] = _default;

/***/ }),

/***/ 8666:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var rowgroupRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'tbody'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'tfoot'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'thead'
    },
    module: 'HTML'
  }],
  requireContextRole: ['grid', 'table', 'treegrid'],
  requiredContextRole: ['grid', 'table', 'treegrid'],
  requiredOwnedElements: [['row']],
  requiredProps: {},
  superClass: [['roletype', 'structure']]
};
var _default = rowgroupRole;
exports["default"] = _default;

/***/ }),

/***/ 2544:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var rowheaderRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-sort': null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: 'scope',
        value: 'row'
      }],
      name: 'th'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        name: 'scope',
        value: 'rowgroup'
      }],
      name: 'th'
    },
    module: 'HTML'
  }],
  requireContextRole: ['row', 'rowgroup'],
  requiredContextRole: ['row', 'rowgroup'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'cell'], ['roletype', 'structure', 'section', 'cell', 'gridcell'], ['roletype', 'widget', 'gridcell'], ['roletype', 'structure', 'sectionhead']]
};
var _default = rowheaderRole;
exports["default"] = _default;

/***/ }),

/***/ 4064:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var scrollbarRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-valuetext': null,
    'aria-orientation': 'vertical',
    'aria-valuemax': '100',
    'aria-valuemin': '0'
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-controls': null,
    'aria-valuenow': null
  },
  superClass: [['roletype', 'structure', 'range'], ['roletype', 'widget']]
};
var _default = scrollbarRole;
exports["default"] = _default;

/***/ }),

/***/ 5072:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var searchRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'landmark']]
};
var _default = searchRole;
exports["default"] = _default;

/***/ }),

/***/ 9983:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var searchboxRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'list'
      }, {
        name: 'type',
        value: 'search'
      }],
      name: 'input'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'input', 'textbox']]
};
var _default = searchboxRole;
exports["default"] = _default;

/***/ }),

/***/ 2646:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var separatorRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-orientation': 'horizontal',
    'aria-valuemax': '100',
    'aria-valuemin': '0',
    'aria-valuenow': null,
    'aria-valuetext': null
  },
  relatedConcepts: [{
    concept: {
      name: 'hr'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure']]
};
var _default = separatorRole;
exports["default"] = _default;

/***/ }),

/***/ 4208:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var sliderRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-haspopup': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-valuetext': null,
    'aria-orientation': 'horizontal',
    'aria-valuemax': '100',
    'aria-valuemin': '0'
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: 'type',
        value: 'range'
      }],
      name: 'input'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-valuenow': null
  },
  superClass: [['roletype', 'widget', 'input'], ['roletype', 'structure', 'range']]
};
var _default = sliderRole;
exports["default"] = _default;

/***/ }),

/***/ 6368:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var spinbuttonRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-invalid': null,
    'aria-readonly': null,
    'aria-required': null,
    'aria-valuetext': null,
    'aria-valuenow': '0'
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        name: 'type',
        value: 'number'
      }],
      name: 'input'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite'], ['roletype', 'widget', 'input'], ['roletype', 'structure', 'range']]
};
var _default = spinbuttonRole;
exports["default"] = _default;

/***/ }),

/***/ 2497:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var statusRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-atomic': 'true',
    'aria-live': 'polite'
  },
  relatedConcepts: [{
    concept: {
      name: 'output'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = statusRole;
exports["default"] = _default;

/***/ }),

/***/ 7575:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var strongRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = strongRole;
exports["default"] = _default;

/***/ }),

/***/ 4357:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var subscriptRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = subscriptRole;
exports["default"] = _default;

/***/ }),

/***/ 5957:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var superscriptRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['prohibited'],
  prohibitedProps: ['aria-label', 'aria-labelledby'],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = superscriptRole;
exports["default"] = _default;

/***/ }),

/***/ 8917:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var switchRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'button'
    },
    module: 'ARIA'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-checked': null
  },
  superClass: [['roletype', 'widget', 'input', 'checkbox']]
};
var _default = switchRole;
exports["default"] = _default;

/***/ }),

/***/ 8743:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var tabRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-disabled': null,
    'aria-expanded': null,
    'aria-haspopup': null,
    'aria-posinset': null,
    'aria-setsize': null,
    'aria-selected': 'false'
  },
  relatedConcepts: [],
  requireContextRole: ['tablist'],
  requiredContextRole: ['tablist'],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'sectionhead'], ['roletype', 'widget']]
};
var _default = tabRole;
exports["default"] = _default;

/***/ }),

/***/ 1053:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var tableRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-colcount': null,
    'aria-rowcount': null
  },
  relatedConcepts: [{
    concept: {
      name: 'table'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['row'], ['row', 'rowgroup']],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = tableRole;
exports["default"] = _default;

/***/ }),

/***/ 1599:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var tablistRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-level': null,
    'aria-multiselectable': null,
    'aria-orientation': 'horizontal'
  },
  relatedConcepts: [{
    module: 'DAISY',
    concept: {
      name: 'guide'
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['tab']],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite']]
};
var _default = tablistRole;
exports["default"] = _default;

/***/ }),

/***/ 3193:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var tabpanelRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = tabpanelRole;
exports["default"] = _default;

/***/ }),

/***/ 4665:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var termRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [{
    concept: {
      name: 'dfn'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'dt'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = termRole;
exports["default"] = _default;

/***/ }),

/***/ 221:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var textboxRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-activedescendant': null,
    'aria-autocomplete': null,
    'aria-errormessage': null,
    'aria-haspopup': null,
    'aria-invalid': null,
    'aria-multiline': null,
    'aria-placeholder': null,
    'aria-readonly': null,
    'aria-required': null
  },
  relatedConcepts: [{
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'type'
      }, {
        constraints: ['undefined'],
        name: 'list'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'list'
      }, {
        name: 'type',
        value: 'email'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'list'
      }, {
        name: 'type',
        value: 'tel'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'list'
      }, {
        name: 'type',
        value: 'text'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      attributes: [{
        constraints: ['undefined'],
        name: 'list'
      }, {
        name: 'type',
        value: 'url'
      }],
      name: 'input'
    },
    module: 'HTML'
  }, {
    concept: {
      name: 'input'
    },
    module: 'XForms'
  }, {
    concept: {
      name: 'textarea'
    },
    module: 'HTML'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'input']]
};
var _default = textboxRole;
exports["default"] = _default;

/***/ }),

/***/ 5313:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var timeRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = timeRole;
exports["default"] = _default;

/***/ }),

/***/ 1777:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var timerRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'status']]
};
var _default = timerRole;
exports["default"] = _default;

/***/ }),

/***/ 3316:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var toolbarRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-orientation': 'horizontal'
  },
  relatedConcepts: [{
    concept: {
      name: 'menubar'
    },
    module: 'ARIA'
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section', 'group']]
};
var _default = toolbarRole;
exports["default"] = _default;

/***/ }),

/***/ 9304:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var tooltipRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = tooltipRole;
exports["default"] = _default;

/***/ }),

/***/ 3538:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var treeRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {
    'aria-errormessage': null,
    'aria-invalid': null,
    'aria-multiselectable': null,
    'aria-required': null,
    'aria-orientation': 'vertical'
  },
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite', 'select'], ['roletype', 'structure', 'section', 'group', 'select']]
};
var _default = treeRole;
exports["default"] = _default;

/***/ }),

/***/ 5627:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var treegridRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  prohibitedProps: [],
  props: {},
  relatedConcepts: [],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['row'], ['row', 'rowgroup']],
  requiredProps: {},
  superClass: [['roletype', 'widget', 'composite', 'grid'], ['roletype', 'structure', 'section', 'table', 'grid'], ['roletype', 'widget', 'composite', 'select', 'tree'], ['roletype', 'structure', 'section', 'group', 'select', 'tree']]
};
var _default = treegridRole;
exports["default"] = _default;

/***/ }),

/***/ 8425:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var treeitemRole = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author', 'contents'],
  prohibitedProps: [],
  props: {
    'aria-expanded': null,
    'aria-haspopup': null
  },
  relatedConcepts: [],
  requireContextRole: ['group', 'tree'],
  requiredContextRole: ['group', 'tree'],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-selected': null
  },
  superClass: [['roletype', 'structure', 'section', 'listitem'], ['roletype', 'widget', 'input', 'option']]
};
var _default = treeitemRole;
exports["default"] = _default;

/***/ }),

/***/ 2461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
exports.uJ = exports.UN = exports.Qv = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
var _ariaPropsMap = _interopRequireDefault(__webpack_require__(7457));
var _domMap = _interopRequireDefault(__webpack_require__(7549));
var _rolesMap = _interopRequireDefault(__webpack_require__(3913));
var _elementRoleMap = _interopRequireDefault(__webpack_require__(3217));
var _roleElementMap = _interopRequireDefault(__webpack_require__(6433));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aria = _ariaPropsMap.default;
__webpack_unused_export__ = aria;
var dom = _domMap.default;
__webpack_unused_export__ = dom;
var roles = _rolesMap.default;
exports.uJ = roles;
var elementRoles = _elementRoleMap.default;
exports.Qv = elementRoles;
var roleElements = _roleElementMap.default;
exports.UN = roleElements;

/***/ }),

/***/ 6433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _iterationDecorator = _interopRequireDefault(__webpack_require__(5456));
var _rolesMap = _interopRequireDefault(__webpack_require__(3913));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var roleElement = [];
var keys = _rolesMap.default.keys();
var _loop = function _loop(i) {
  var key = keys[i];
  var role = _rolesMap.default.get(key);
  if (role) {
    var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
    for (var k = 0; k < concepts.length; k++) {
      var relation = concepts[k];
      if (relation.module === 'HTML') {
        var concept = relation.concept;
        if (concept) {
          var roleElementRelation = roleElement.find(function (item) {
            return item[0] === key;
          });
          var relationConcepts = void 0;
          if (roleElementRelation) {
            relationConcepts = roleElementRelation[1];
          } else {
            relationConcepts = [];
          }
          relationConcepts.push(concept);
          roleElement.push([key, relationConcepts]);
        }
      }
    }
  }
};
for (var i = 0; i < keys.length; i++) {
  _loop(i);
}
var roleElementMap = {
  entries: function entries() {
    return roleElement;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var _iterator = _createForOfIteratorHelper(roleElement),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          values = _step$value[1];
        fn.call(thisArg, values, key, roleElement);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  get: function get(key) {
    var item = roleElement.find(function (tuple) {
      return tuple[0] === key ? true : false;
    });
    return item && item[1];
  },
  has: function has(key) {
    return !!roleElementMap.get(key);
  },
  keys: function keys() {
    return roleElement.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        key = _ref2[0];
      return key;
    });
  },
  values: function values() {
    return roleElement.map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        values = _ref4[1];
      return values;
    });
  }
};
var _default = (0, _iterationDecorator.default)(roleElementMap, roleElementMap.entries());
exports["default"] = _default;

/***/ }),

/***/ 3913:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _ariaAbstractRoles = _interopRequireDefault(__webpack_require__(6138));
var _ariaLiteralRoles = _interopRequireDefault(__webpack_require__(9081));
var _ariaDpubRoles = _interopRequireDefault(__webpack_require__(5302));
var _ariaGraphicsRoles = _interopRequireDefault(__webpack_require__(4337));
var _iterationDecorator = _interopRequireDefault(__webpack_require__(5456));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var roles = [].concat(_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default, _ariaGraphicsRoles.default);
roles.forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    roleDefinition = _ref2[1];
  // Conglomerate the properties
  var _iterator = _createForOfIteratorHelper(roleDefinition.superClass),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var superClassIter = _step.value;
      var _iterator2 = _createForOfIteratorHelper(superClassIter),
        _step2;
      try {
        var _loop = function _loop() {
          var superClassName = _step2.value;
          var superClassRoleTuple = roles.find(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 1),
              name = _ref4[0];
            return name === superClassName;
          });
          if (superClassRoleTuple) {
            var superClassDefinition = superClassRoleTuple[1];
            for (var _i2 = 0, _Object$keys = Object.keys(superClassDefinition.props); _i2 < _Object$keys.length; _i2++) {
              var prop = _Object$keys[_i2];
              if (
              // $FlowIssue Accessing the hasOwnProperty on the Object prototype is fine.
              !Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) {
                Object.assign(roleDefinition.props, _defineProperty({}, prop, superClassDefinition.props[prop]));
              }
            }
          }
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
var rolesMap = {
  entries: function entries() {
    return roles;
  },
  forEach: function forEach(fn) {
    var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var _iterator3 = _createForOfIteratorHelper(roles),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
          key = _step3$value[0],
          values = _step3$value[1];
        fn.call(thisArg, values, key, roles);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  },
  get: function get(key) {
    var item = roles.find(function (tuple) {
      return tuple[0] === key ? true : false;
    });
    return item && item[1];
  },
  has: function has(key) {
    return !!rolesMap.get(key);
  },
  keys: function keys() {
    return roles.map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
        key = _ref6[0];
      return key;
    });
  },
  values: function values() {
    return roles.map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
        values = _ref8[1];
      return values;
    });
  }
};
var _default = (0, _iterationDecorator.default)(rolesMap, rolesMap.entries());
exports["default"] = _default;

/***/ }),

/***/ 5456:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = iterationDecorator;
var _iteratorProxy = _interopRequireDefault(__webpack_require__(321));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function iterationDecorator(collection, entries) {
  if (typeof Symbol === 'function' && _typeof(Symbol.iterator) === 'symbol') {
    Object.defineProperty(collection, Symbol.iterator, {
      value: _iteratorProxy.default.bind(entries)
    });
  }
  return collection;
}

/***/ }),

/***/ 321:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

// eslint-disable-next-line no-unused-vars
function iteratorProxy() {
  var values = this;
  var index = 0;
  var iter = {
    '@@iterator': function iterator() {
      return iter;
    },
    next: function next() {
      if (index < values.length) {
        var value = values[index];
        index = index + 1;
        return {
          done: false,
          value: value
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
  return iter;
}
var _default = iteratorProxy;
exports["default"] = _default;

/***/ }),

/***/ 6894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(1924);
var $byteLength = callBound('ArrayBuffer.prototype.byteLength', true);

var isArrayBuffer = __webpack_require__(635);

module.exports = function byteLength(ab) {
	if (!isArrayBuffer(ab)) {
		return NaN;
	}
	return $byteLength ? $byteLength(ab) : ab.byteLength;
}; // in node < 0.11, byteLength is an own nonconfigurable property


/***/ }),

/***/ 6531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _enumify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2829);


/**
 * Cookie names used by us.
 * @enum
 */
class Cookie extends _enumify__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static access_token = new Cookie('access_token');
  static analytics_session = new Cookie('analytics_session');
  static auth_token = new Cookie('authentication_token');
  static bq_auto_lead_send = new Cookie('bq_auto_lead_send');
  static cart = new Cookie('order_id');
  static ccpa = new Cookie('sn-ccpa-optin');
  static debug = new Cookie('sn-debug');
  static dynamic_yield_id_server = new Cookie('_dyid_server');
  static dynamic_yield_id = new Cookie('_dyid'); // This client cookie must match _dyid_server
  static dynamic_yield_jsession = new Cookie('_dyjsession');
  static id_token = new Cookie('id_token');
  static price_lists = new Cookie('plid');
  static promo_drawer = new Cookie('promo_drawer');
  static refresh_token = new Cookie('refresh_token');
  static request_names = new Cookie('request_names'); // Set by rails if user is missing names
  static session = new Cookie('_sleep_number_session');
  static sessions = new Cookie('sessions');
  static sn = new Cookie('sn');
  static _ = this.closeEnum();
  constructor(name) {
    super();
    this.name = name;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookie);

/***/ }),

/***/ 1292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7814);
/**
 * Deferred api for promises.
 * Replaces $.Deferred()
 */

class Deferred {
  // # denotes private fields
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  #state;
  constructor() {
    this.#state = 'pending';
    this.p = new Promise((resolve, reject) => {
      this.resolver = resolve;
      this.rejector = reject;
    });
  }
  state() {
    return this.#state;
  }
  resolve() {
    this.resolver(...arguments);
    this.#state = 'resolved';
    return this;
  }
  reject() {
    this.rejector(...arguments);
    this.#state = 'rejected';
    return this;
  }
  promise() {
    return this.p;
  }
  done(cb) {
    this.p.then(cb, () => {});
    return this;
  }
  then() {
    this.p.then(...arguments);
    return this;
  }
  fail() {
    this.p.catch(...arguments);
    return this;
  }
  catch() {
    this.p.catch(...arguments);
    return this;
  }
  always() {
    this.p.finally(...arguments);
    return this;
  }
  finally() {
    this.p.finally(...arguments);
    return this;
  }
}
(0,_object__WEBPACK_IMPORTED_MODULE_0__.namespace)('sn.dfd', Deferred);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Deferred);

/***/ }),

/***/ 3168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   isDebug: () => (/* binding */ isDebug),
/* harmony export */   isJestEnv: () => (/* binding */ isJestEnv),
/* harmony export */   isProduction: () => (/* binding */ isProduction),
/* harmony export */   styles: () => (/* binding */ styles),
/* harmony export */   win: () => (/* binding */ win)
/* harmony export */ });
/* unused harmony exports localUrl, qaUrl, stageUrl, prodUrl, sn_globals, isStaging, isQa, isDevelopment, isDevPage, isAdminPage, isTestEnv, timezone, locale, attributes, months, specials, keyCodes, spacing, timing, mime, headers, millisPerYear, ALERT_TYPES, ALERT_FLAVORS, Status, Direction, USER_SEGMENT, CheckoutSteps, ZIndex, page_classes, page_selectors, timer, regex */
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3818);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6808);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6531);
/* harmony import */ var _enumify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2829);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5981);
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7814);






const localUrl = 'https://sleepnumber.test';
const qaUrl = 'https://qa.sleepnumber.com';
const stageUrl = 'https://staging.sleepnumber.com';
const prodUrl = 'https://www.sleepnumber.com';
const isJestEnv = __webpack_require__.g?.process?.env?.NODE_ENV === 'test';
let windowObject = __webpack_require__.g || window;
const isSSR = !browser_or_node__WEBPACK_IMPORTED_MODULE_0__/* .isBrowser */ .jU && !isJestEnv;
if (isSSR) {
  const hosts = {
    local: 'https://sleepnumber.test:8090',
    qa: qaUrl,
    staging: stageUrl,
    production: prodUrl
  };
  const ssrHost = hosts[process.env.BUILD_ENV] || hosts.local;
  const ssrHref = `${ssrHost}/categories/beds-on-sale`;
  const ssrUrl = new URL(ssrHref);

  // Set the origin for all the places that check it
  windowObject = {
    ...windowObject,
    location: ssrUrl
  };
}
const win = windowObject;
const sn_globals = win?.sn_globals || {
  config: {}
};
const isProduction = () => sn_globals.config.env === 'production';
const isStaging = () => sn_globals.config.env === 'staging';
const isQa = () => sn_globals.config.env === 'qa';
const isDevelopment = () => sn_globals.config.env === 'development';
const isDevPage = win?.location?.pathname?.startsWith('/dev/');
const isAdminPage = win?.top?.location?.href?.includes('/admin/') || win?.location?.pathname?.startsWith('/admin/');
const isTestEnv = sn_globals.config.env !== 'production';
function isDebug() {
  if (!browser_or_node__WEBPACK_IMPORTED_MODULE_0__/* .isBrowser */ .jU) return false;
  const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(_Cookie__WEBPACK_IMPORTED_MODULE_2__["default"].debug.name);
  return cookieValue && cookieValue !== 'false';
}
(0,_object__WEBPACK_IMPORTED_MODULE_4__.namespace)('sn.toggleDebug', function toggleDebug() {
  const current = isDebug();
  js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set(_Cookie__WEBPACK_IMPORTED_MODULE_2__["default"].debug.name, !current);
  // eslint-disable-next-line no-console
  console.log(`sn-debug set to "${!current}"`);
});
const timezone = 'Intl' in win ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'America/Chicago';

/** Returns the browser locale. Defaults to `en-US`. */
function locale() {
  return navigator.languages && navigator.languages[0] || navigator.language || 'en-US';
}
const attributes = {
  // window.sessionStorage fields
  session: {
    mlp: {
      compare: 'mlp_compare_order'
    }
  },
  // window.localStorage fields
  local: {
    modals: {
      insider_appreciation_shown: 'insider_appreciation_shown',
      insider_signin_shown: 'insider_signin_shown',
      lead_compare_shown: 'lead_compare_shown',
      lead_compare_submitted: 'lead_compare_submitted',
      lead_modal_shown: 'lead_capture_shown',
      lead_modal_submitted: 'lead_capture_submitted',
      lead_modal_email_submitted: 'lead_capture_email_submitted',
      lead_capture_link: 'lead_capture_link',
      lead_quiz_shown: 'lead_quiz_shown',
      lead_quiz_submitted: 'lead_quiz_submitted'
    },
    toasts: {
      blog_toast_shown: 'blog_toast_shown',
      bq_toast_shown: 'bq_toast_shown'
    },
    misc: {
      hd_pending_cancel: 'hd_pending_cancel',
      last_tracked_order_id: 'last_tracked_order_id'
    },
    bq: {
      skus: 'bed-quiz-skus',
      results: 'bed-quiz-results'
    },
    ic: {
      points: 'inner-circle-points'
    }
  },
  // Response header fields
  headers: {
    flash: 'x-flash-messages'
  }
};

// Used in console logging
const css = {
  fwb: 'font-weight: bold;',
  fwn: 'font-weight: normal;',
  black: 'color: #777777;',
  gray: 'color: #9e9e9e;',
  white: 'color: #ffffff',
  blue: 'color: #03a9f4;',
  green: 'color: #4caf50;',
  red: 'color: #f20404;',
  orange: 'color: #ff8000;'
};

// Used in console logging
const styles = {
  normal: `${css.fwn}${css.black}`,
  strong: `${css.fwb}${css.black}`,
  label: `${css.fwb}${css.gray}`,
  value: `${css.fwn}${css.blue}`,
  success: `${css.fwn}${css.green}`,
  error: `${css.fwn}${css.red}`,
  orange: `${css.fwn}${css.orange}`
};
const months = [{
  name: 'January',
  abbr: 'Jan',
  value: 1
}, {
  name: 'February',
  abbr: 'Feb',
  value: 2
}, {
  name: 'March',
  abbr: 'Mar',
  value: 3
}, {
  name: 'April',
  abbr: 'Apr',
  value: 4
}, {
  name: 'May',
  abbr: 'May',
  value: 5
}, {
  name: 'June',
  abbr: 'Jun',
  value: 6
}, {
  name: 'July',
  abbr: 'Jul',
  value: 7
}, {
  name: 'August',
  abbr: 'Aug',
  value: 8
}, {
  name: 'September',
  abbr: 'Sept',
  value: 9
}, {
  name: 'October',
  abbr: 'Oct',
  value: 10
}, {
  name: 'November',
  abbr: 'Nov',
  value: 11
}, {
  name: 'December',
  abbr: 'Dec',
  value: 12
}];
const specials = {
  asterisk: {
    label: 'Asterisk',
    value: '*',
    entity: '*',
    unicode: '\u20F0'
  },
  reg: {
    label: 'Registered Trade Mark',
    value: '®',
    entity: '&reg;',
    unicode: '\u00AE'
  },
  tm: {
    label: 'Trade Mark',
    value: '™',
    entity: '&trade;',
    unicode: '\u2122'
  },
  sm: {
    label: 'Service Mark',
    value: '℠',
    entity: '&#8480;',
    unicode: '\u2120'
  },
  dagger: {
    label: 'Dagger',
    value: '†',
    entity: '&dagger;',
    unicode: '\u2020'
  },
  doubledagger: {
    label: 'Double Dagger',
    value: '‡',
    entity: '&Dagger;',
    unicode: '\u2021'
  },
  section: {
    label: 'Section',
    value: '§',
    entity: '&sect;',
    unicode: '\u00A7'
  }
};
const keyCodes = {
  esc: 27,
  space: 32,
  backspace: 8,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
keyCodes.radio = {
  prev: [keyCodes.left, keyCodes.up],
  next: [keyCodes.right, keyCodes.down]
};
keyCodes.arrows = [keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down];
const spacing = {
  space: '\u0020',
  nbsp: '\u00a0',
  ndash: '\u0096',
  mdash: '\u0097',
  ellipsis: '\u2026'
};
const timing = {
  scroll: 500,
  expand: 150,
  transition: 250,
  animation: 'cubic-bezier(0.42, 0, 0.58, 1)'
};
const mime = {
  app: {
    json: 'application/json',
    form: 'multipart/form-data'
  }
};
const headers = {
  accept: 'Accept',
  content: 'Content-Type'
};
const millisPerYear = 31536000000;
const ALERT_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  dark: 'dark',
  light: 'light'
};
const ALERT_FLAVORS = {
  normal: 'normal',
  toast: 'toast'
};

/**
 * General purpose status enum.
 * @enum
 */
class Status extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static idle = new Status();
  static pending = new Status();
  static success = new Status();
  static error = new Status();
  static active = new Status();
  static complete = new Status();
  static _ = this.closeEnum();
}

/**
 * General purpose direction enum.
 * @enum
 */
class Direction extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static up = new Direction();
  static down = new Direction();
  static left = new Direction();
  static right = new Direction();
  static _ = this.closeEnum();
}

/**
 * Listing of user segments.
 * @enum
 */
const USER_SEGMENT = {
  innercircle: 'InnerCircle',
  insider: 'Insider'
};
class CheckoutSteps extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static NotStarted = new CheckoutSteps({
    name: 'not_started'
  });
  static Login = new CheckoutSteps({
    name: 'login',
    next: () => CheckoutSteps.Shipping
  });
  static Shipping = new CheckoutSteps({
    name: 'shipping',
    next: () => CheckoutSteps.Delivery
  });
  static Delivery = new CheckoutSteps({
    name: 'delivery',
    next: () => CheckoutSteps.Payment
  });
  static Payment = new CheckoutSteps({
    name: 'payment',
    next: () => CheckoutSteps.Review
  });
  static Review = new CheckoutSteps({
    name: 'review',
    next: () => CheckoutSteps.Confirmation
  });
  static Confirmation = new CheckoutSteps({
    name: 'confirmation'
  });
  static _ = this.closeEnum();
  constructor(props) {
    super();
    this.next = props.next;
    this.name = props.name;
  }
}
const zindex_dropdown = 1000;
const zindex_fixed = 1030;
const zindex_modal = 107159;
const zindex_modal_backdrop = 1040;
const zindex_popover = 1060;
const zindex_sticky = 1020;
const zindex_tooltip = 1070;

/** Global z-index values */
class ZIndex extends _enumify__WEBPACK_IMPORTED_MODULE_3__["default"] {
  // From bootstrap
  static dropdown = new ZIndex(zindex_dropdown);
  static sticky = new ZIndex(zindex_sticky);
  static fixed = new ZIndex(zindex_fixed);
  static modal_backdrop = new ZIndex(zindex_modal_backdrop);
  static modal = new ZIndex(zindex_modal);
  static popover = new ZIndex(zindex_popover);
  static tooltip = new ZIndex(zindex_tooltip);

  // Live person chat button
  static chat_button = new ZIndex(107158);
  // Overlap live person chat
  static over_chat = new ZIndex(107159);
  constructor(index) {
    super();
    this.value = index;
  }
}

/** Classes used as logic flags on the page. */
const page_classes = {
  header_unpin: '-unpinned-header',
  jumping: '-jump-scrolling',
  position_sticky: 'position-sticky',
  top_below_header: 'top-below-header',
  search_open: '-search-open',
  skip_nav_show: '-skip-nav-show'
};
// cx can take arrays: `cx('foo', page_classes.sticky_top)`
page_classes.sticky_top = [page_classes.position_sticky, page_classes.top_below_header];
const page_selectors = {
  sticky_top: '.position-sticky.top-below-header',
  search_open: '.-search-open',
  header_unpin: '.-unpinned-header',
  jumping: '.-jump-scrolling'
};

/** Use performance API if it's available for better precision. */
const timer = (0,_function__WEBPACK_IMPORTED_MODULE_5__.isFunc)(win, 'performance.now') ? win?.performance : win?.Date;
const regex = {
  // https://emailregex.com
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/,
  zip_partial: /^\d{1,5}$/,
  zip: /^\d{5}$/,
  zip_full: /^\d{5}(?:-\d{4})?$/,
  iso_state: /(US-[A-Z]{2})/,
  geo: {
    lat: /^-?([0-8]?\d|90)\.\d{1,6}$/,
    long: /^-?((1?[0-7]?|\d?)\d|180)\.\d{1,6}$/
  },
  /** @see http://www.regular-expressions.info/creditcard.html */
  cc: {
    visa: /^4\d{12}(?:\d{3})?$/,
    master: /^5[1-5]\d{14}$/,
    amex: /^3[47]\d{13}$/,
    diners: /^3(?:0[0-5]|[68]\d)\d{11}$/,
    discover: /^6(?:011|5\d{2})\d{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    sn: /^(60346233|60191702|60191708).*/ // Sleep Number Financing Cards
  }
};

/***/ }),

/***/ 3302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   addListeners: () => (/* binding */ addListeners),
/* harmony export */   addTabindexToContent: () => (/* binding */ addTabindexToContent),
/* harmony export */   after: () => (/* binding */ after),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   before: () => (/* binding */ before),
/* harmony export */   closest: () => (/* binding */ closest),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   findWithRetry: () => (/* binding */ findWithRetry),
/* harmony export */   gebi: () => (/* binding */ gebi),
/* harmony export */   getElement: () => (/* binding */ getElement),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   index: () => (/* binding */ index),
/* harmony export */   is: () => (/* binding */ is),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   nextAll: () => (/* binding */ nextAll),
/* harmony export */   prepend: () => (/* binding */ prepend),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   prevAll: () => (/* binding */ prevAll),
/* harmony export */   qs: () => (/* binding */ qs),
/* harmony export */   qsa: () => (/* binding */ qsa),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   removeListeners: () => (/* binding */ removeListeners),
/* harmony export */   siblings: () => (/* binding */ siblings),
/* harmony export */   text: () => (/* binding */ text),
/* harmony export */   toggleClass: () => (/* binding */ toggleClass),
/* harmony export */   trigger: () => (/* binding */ trigger)
/* harmony export */ });
/* unused harmony exports findAncestor, offset, scrollTop, scrollLeft, outerHeight, outerWidth, position, height, width, getMeasurement, getChildMeasurements, getHiddenMeasurements, isElementInViewport, isElementAboveViewport, focusSection, focusFirstElement, isNotHidden, ready, animate, hide, show, isDisplayNone, toggle, fadeOut, fadeIn */
/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3818);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3168);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5813);
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5981);
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5203);
/* harmony import */ var _Deferred__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1292);







/* Utilities
   --------------------------------------------------------------- */

/** Returns true if this is a dom element */
function isElement(node) {
  return !!node?.nodeType;
}

/**
 * Returns target if it is an element or attempts to find it via query selector
 * @param {HTMLElement|string} target -
 *        the target element or a css selector to an element
 * @param {HTMLElement|string} [container] -
 *        an optional container to look inside when using a css selector as the
 *        target
 * @return {HTMLElement|null}
 */
function getElement(target, container) {
  if (target === window || isElement(target)) return target;
  const within = !container ? document : getElement(container);
  try {
    return within.querySelector(target) || null;
  } catch (err) {
    _logger__WEBPACK_IMPORTED_MODULE_2__["default"].error('Error getting element', 'target', target, 'container', container, err);
    return null;
  }
}

/**
 * Get element by id
 * @param {string} id - the id of the element to find
 * @returns {HTMLElement|undefined}
 */
function gebi(id) {
  return document.getElementById(id);
}

/**
 * Returns selected elements as an array
 * If two arguments, the first one is assumed to be the node to query.
 * @return {HTMLElement[]}
 */
function qsa() {
  const node = arguments.length === 2 ? arguments.length <= 0 ? undefined : arguments[0] : document;
  const selector = arguments.length === 2 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 0 ? undefined : arguments[0];
  return Array.from(node.querySelectorAll(selector));
}

/**
 * Find and element by query selector
 * If two arguments, the first one is assumed to be the node to query.
 * @return {HTMLElement|undefined}
 */
function qs() {
  const node = arguments.length === 2 ? arguments.length <= 0 ? undefined : arguments[0] : document;
  const selector = arguments.length === 2 ? arguments.length <= 1 ? undefined : arguments[1] : arguments.length <= 0 ? undefined : arguments[0];
  return node.querySelector(selector);
}

/**
 * Find the closest ancestor matching the selector
 * Replaces $(selector).closest
 * @return {HTMLElement|undefined}
 */
function closest(target, selector) {
  if (!target) return null;
  let element = getElement(target);
  const matchesSelector = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;
  while (element) {
    if (matchesSelector.call(element, selector)) return element;
    element = element.parentElement;
  }
  return null;
}

/**
 * Like `snq.closest()` except a function is used instead of selectors.
 * Finds the closest ancestor that passes the predicate function.
 * @param {string|HTMLElement} target - the starting point node
 * @param {function} predicate - the predicate function
 * @return {HTMLElement|null}
 */
function findAncestor(target, predicate) {
  let element = getElement(target)?.parentElement;
  if (!isElement(element)) return null;
  while (element) {
    if (predicate(element)) return element;
    element = element.parentElement;
  }
  return null;
}

/** Add a class to an element */
function addClass(target) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const classes = className.trim().split(' ');
  const element = getElement(target);
  classes.forEach(c => {
    if (element) element.classList.add(c);
  });
  return element;
}

/** Remove a class from an element */
function removeClass(target) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  const classes = className.trim().split(' ');
  const element = getElement(target);
  classes.forEach(c => {
    if (element) element.classList.remove(c);
  });
  return element;
}

/** Add an element after a target */
function after(target, element) {
  getElement(target).insertAdjacentElement('afterend', element);
}

/** Add an element before a target */
function before(target, element) {
  getElement(target).insertAdjacentElement('beforebegin', element);
}

/** Append an element to a parent */
function append(target, element) {
  getElement(target).appendChild(element);
}

/** Prepend an element to a parent */
function prepend(target, element) {
  const parent = getElement(target);
  const elem = (0,_string__WEBPACK_IMPORTED_MODULE_3__.isString)(element) ? create(element) : element;
  parent.insertBefore(elem, parent.firstChild);
}

/** Is the target a child of the parent */
function contains(parent, child) {
  const p = getElement(parent);
  const c = getElement(child);
  return p !== c && p.contains(c);
}

/** Remove an element */
function remove(target) {
  const element = getElement(target);
  element.parentNode.removeChild(element);
}

/**
 * Get or set a css property on an element
 * @param {string|node} target - the target element or css selector to it
 * @param {string} ruleName - the js version (camelCase) of the css property name
 * @param {string} [value] - if provide, the css property is set to this value
 * @return {string|node} the node when setting a value, the value when getting a value
 */
function css(target, ruleName, value) {
  const rule = (0,_string__WEBPACK_IMPORTED_MODULE_3__.camelCase)(ruleName);
  const element = getElement(target);
  if (typeof value !== 'undefined') {
    // Set a css value
    element.style[rule] = value;
    return element;
  }

  // get a css value
  const win = element.ownerDocument.defaultView;
  return win.getComputedStyle(element)[rule];
}

/**
 * Get or set the text content of an element
 * @param {string|node} target - the target element or css selector to it
 * @param {string} [value] - if provide, the text context is set to this value
 * @return {string|node} the node when the text content is being set, otherwise the text content
 */
function text(target, value) {
  const element = getElement(target);
  if (typeof value === 'undefined') return element.textContent || '';
  element.textContent = value;
  return element;
}

/**
 * Get or set the inner html of an element
 * Replaces $('.foo').html
 * @param {string|node} target - the target element or css selector to it
 * @param {string} [value] - if provide, the inner html is set to this value
 * @return {string|node} the node when the inner html is being set, otherwise the text content
 */
function html(target, value) {
  const element = getElement(target);
  if (typeof value === 'undefined') return element.innerHTML;
  element.innerHTML = value;
  return element;
}

/**
 * Create an html document fragment from html text.
 * Replaces $('<div class="foo">bar</div>');
 * @param {string} html - the html text, i.e. "<div>foo</div>" or "<button>"
 * @return {DocumentFragment|Element} the element if only one was created or the fragment
 */
function create(html) {
  const range = document.createRange();
  const parse = range.createContextualFragment.bind(range);
  const fragment = parse(html);
  if (fragment.childElementCount === 1) return fragment.childNodes[0];
  return fragment;
}

/** Return the text content of an element */
function hasClass(target, className) {
  const elem = getElement(target);
  return elem && elem.classList.contains(className);
}

/**
 * Adds or removes a class from an element
 * @param {string|node} target
 * @param {string} className
 * @param {boolean} [condition] - if present class is added/removed based on this
 */
function toggleClass(target) {
  let className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let condition = arguments.length > 2 ? arguments[2] : undefined;
  const hasCond = typeof condition !== 'undefined';
  const element = getElement(target);
  const classes = className.trim().split(' ');
  classes.forEach(c => {
    if (hasCond) {
      if (condition) element?.classList?.add(c);else element?.classList?.remove(c);
    } else {
      element?.classList?.toggle(c);
    }
  });
  return element;
}

/** Return the index of an element within it's parents child list */
function index(target) {
  let index = -1;
  const element = getElement(target);
  if (!element) return index;
  Array.from(getElement(element.parentElement).children).forEach((c, i) => {
    if (c === element) index = i;
  });
  return index;
}

/** Returns true if the target matches the selector */
function is(target, selector) {
  const element = getElement(target);
  return (element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.webkitMatchesSelector || element.oMatchesSelector).call(element, selector);
}

/** Returns the element immediately after this one */
function next(target) {
  return getElement(target).nextElementSibling;
}

/** Returns all elements after this one */
function nextAll(elem, filter) {
  const siblings = [];
  let nextElem = elem.parentNode.firstChild;
  // eslint-disable-next-line no-cond-assign
  do {
    // eslint-disable-next-line no-continue
    if (nextElem.nodeType === 3) continue; // ignore text nodes
    // eslint-disable-next-line no-continue
    if (nextElem === elem) continue; // ignore elem of target
    if (nextElem === elem.nextElementSibling) {
      if (!filter || filter(elem)) {
        siblings.push(nextElem);
        elem = nextElem;
      }
    }
  } while (nextElem = nextElem.nextSibling);
  return siblings;
}

/** Returns the element immediately before this one */
function prev(target) {
  return getElement(target).previousElementSibling;
}

/** Returns all elements before this one */
function prevAll(elem, filter) {
  const siblings = [];
  let current = elem;
  // eslint-disable-next-line no-cond-assign
  while (current = current.previousSibling) {
    // eslint-disable-next-line no-continue
    if (current.nodeType === 3) continue; // ignore text nodes
    if (!filter || filter(current)) siblings.push(current);
  }
  return siblings;
}

/** Returns the sibling elements of an element */
function siblings(target) {
  const element = getElement(target);
  return Array.from(element.parentNode.children).filter(el => el !== element);
}

/**
 * Returns the top and left offsets of this element relative to the document
 * Replaces $.offset()
 * @param {HTMLElement|string} target
 */
function offset(target) {
  const node = getElement(target);
  const rect = node.getBoundingClientRect();
  return {
    node,
    top: rect.top + window.pageYOffset - document.documentElement.clientTop,
    left: rect.left + window.pageXOffset - document.documentElement.clientLeft
  };
}

/** Replaces $(window).scrollTop() */
function scrollTop() {
  let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : win;
  if (!isBrowser) return 0; // Make safe for SSR
  if (target === window) {
    return (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
  }
  const container = getElement(target);
  return container.scrollTop;
}

/** Replaces $(window).scrollLeft() */
function scrollLeft() {
  let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  if (target === window) {
    return (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
  }
  const container = getElement(target);
  return container.scrollLeft;
}

/**
 * Returns the outer height of the element
 * @param {string|node} target - the element to measure or css selector to it
 * @param {boolean} [includeMargin=false] - if true, measurement will include margin
 * @return {number}
 */
function outerHeight(target) {
  let includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const element = getElement(target);
  if (!element) return 0;
  let height = element.offsetHeight;
  if (!includeMargin) return height;
  const style = getComputedStyle(element);
  height += parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);
  return height;
}

/**
 * Returns the outer width of the element
 * @param {string|node} target - the element to measure
 * @param {boolean} [includeMargin=false] - if true, measurement will include margin
 * @return {number}
 */
function outerWidth(target) {
  let includeMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const element = getElement(target);
  if (!element) return 0;
  let width = element.offsetWidth;
  if (!includeMargin) return width;
  const style = getComputedStyle(element);
  width += parseInt(style.marginLeft, 10) + parseInt(style.marginRight, 10);
  return width;
}

/** Return the offset position of this element */
function position(target) {
  const element = getElement(target);
  return {
    top: element.offsetTop,
    left: element.offsetLeft
  };
}

/**
 * Get or set the height of an element
 * @param {string|node} target - the target element or css selector to it
 * @param {function|string|number} [value] - function, string, or number to set the height to
 * @returns {number|node} the height when not setting a value, the element when setting a value
 */
function height(target, value) {
  const element = getElement(target);
  if (!value) return element.offsetHeight;
  const val = typeof value === 'function' ? value() : value;
  if (typeof val === 'string') element.style.height = val;else element.style.height = `${val}px`;
  return element;
}

/**
 * Get or set the width of an element
 * @param {string|node} target - the element to adjust
 * @param {function|string|number} [value] - function, string, or number to set the width to
 * @returns {number|node} the width when not setting a value, the element when setting a value
 */
function width(target, value) {
  const element = getElement(target);
  if (!value) return element.offsetWidth;
  const val = typeof value === 'function' ? value() : value;
  if (typeof val === 'string') element.style.width = val;else element.style.width = `${val}px`;
  return element;
}

/**
 * Returns the node plus the left, right, width, and height measurements of an element
 * @param {string|node} target - the element to measure
 * @return {{
 *   node: node,
 *   left: number,
 *   width: number,
 *   right: number,
 *   height: number
 * }}
 */
function getMeasurement(target) {
  const node = getElement(target);
  return {
    node,
    left: node.offsetLeft,
    right: node.offsetLeft + node.clientWidth,
    width: node.clientWidth,
    height: node.clientHeight
  };
}

/**
 * Returns the measurements of all children in a container.
 * @param {string|node} target - the element whose children we are measuring
 * @return {[{
 *   index: number,
 *   node: node,
 *   left: number,
 *   width: number,
 *   right: number,
 *   height: number
 * }]}
 */
function getChildMeasurements(target) {
  const container = getElement(target);
  if (!container?.childNodes) return {};
  return Array.from(container.childNodes).map((node, i) => ({
    index: i,
    ...getMeasurement(node)
  }));
}

/**
 * Return the measurements of a hidden element as a promise by cloning it and
 * measuring it in an offscreen container.
 * @param {HTMLElement} node - the currently hidden node to clone
 * @param {string} [selector] - optional selector to the child node to measure
 * @param {boolean} queryAll - return all query selector measurements
 * @return Promise<{ height: string, width: string, outerHeight: string, outerWidth: string }>
 */
function getHiddenMeasurements(node, selector) {
  let queryAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const offscreen = document.createElement('div');
  offscreen.style.position = 'absolute';
  offscreen.style.top = '-9999px';
  offscreen.style.left = '-9999px';
  offscreen.ariaHidden = 'true';
  document.body.appendChild(offscreen);
  const clone = node.cloneNode(true);
  offscreen.style.setProperty('width', `${outerWidth(node, true)}px`);
  offscreen.appendChild(clone);

  // Need to do this in a promise in order to wait for images to load/render
  return new Promise(resolve => {
    setTimeout(() => {
      const targets = typeof selector !== 'undefined' ? qsa(clone, selector) : clone;
      const measurements = targets.map(target => {
        const result = {
          height: '',
          width: '',
          outerHeight: '',
          outerWidth: ''
        };
        result.width = width(target);
        result.height = height(target);
        result.outerWidth = outerWidth(target, true);
        result.outerHeight = outerHeight(target, true);
        return result;
      });
      document.body.removeChild(offscreen);
      const resolved = queryAll ? measurements : measurements[0];
      resolve(resolved);
    }, 200);
  });
}

/**
 * Returns true if the element is in the viewport.
 * @param {node} elem - the element in question
 * @param {number} [offset] - optional offset, i.e. use to determine half in viewport
 * @return {boolean}
 */
function isElementInViewport(elem) {
  let offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Handle elements that are wrapped by jQuery
  const el = getElement(elem);
  if (!el || !el.getBoundingClientRect) return false;
  const rect = el.getBoundingClientRect();
  return rect.top + offset >= 0 && rect.left >= 0 && rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

/** Return `true` if the element is above the current top of the viewport */
function isElementAboveViewport(elem) {
  const el = getElement(elem);
  if (!el || !el.getBoundingClientRect) return false;
  const rect = el.getBoundingClientRect();
  return rect.bottom < 0;
}

/** Find and element, retrying multiple times. */
function findWithRetry(_ref, dfd) {
  let {
    target,
    retries = 3,
    retryDelayMs = 100
  } = _ref;
  const deferred = dfd || new _Deferred__WEBPACK_IMPORTED_MODULE_4__["default"]();
  const element = getElement(target);
  if (element) {
    deferred.resolve(element);
  } else if (retries > 0) {
    setTimeout(() => {
      findWithRetry({
        target,
        retries: retries - 1,
        retryDelayMs
      }, deferred);
    }, retryDelayMs);
  } else {
    deferred.reject(`Failed to find element '${target}'`);
  }
  return deferred;
}
function addTabindexToContent() {
  const contentSelectors = ['.tippy-top', 'header', '.content'];
  const tabableElements = ['a[href]', 'button:not([disabled])', 'area[href]'];
  qsa(contentSelectors.map(s => tabableElements.map(e => `${s} ${e}`)).join(',')).forEach(el => {
    if (!el.getAttribute('tabindex')) el.setAttribute('tabindex', '0');
  });
}

/**
 * Attempt to focus a section of the page, either the target itself or the
 * first visible header inside the section.
 * @param {string|HTMLElement} target - the section to focus
 */
function focusSection(target) {
  if (!target) return;
  const el = getElement(target);
  if (el?.hasAttribute('tabindex')) {
    // Focus this element
    el.focus();
  } else {
    // Focus the first visible header inside element
    const headers = qsa(el, 'h2, h3, h4');
    const filtered = headers.filter(el => el.offsetParent !== null); // remove hidden elements
    const header = filtered?.[0];
    if (header) header.focus();
  }
}

/**
 * Find the first focusable element within the selector, and give it focus
 * @param {node|string} selector
 */
function focusFirstElement() {
  let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.page-body';
  const container = getElement(target);
  const focusable = qsa(container, 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const filtered = focusable.filter(el => el.offsetParent !== null); // remove hidden elements
  const firstFocusable = filtered?.[0] || null;
  if (!firstFocusable) return;
  firstFocusable.focus();
}

/** Return true if this element is visible, by checking offset parents up the tree */
function isNotHidden(target) {
  const el = getElement(target);
  if (!el) return false;
  let current = el.offsetParent;
  if (!current) return false;
  while (current) {
    if (current === document.body) break;
    if (!current.offsetParent) return false;
    current = current.offsetParent;
  }
  return true;
}

/* Events
   --------------------------------------------------------------- */

/**
 * @typedef SnListener
 * @property {function} cb - the event handler callback function
 * @property {string} filter - css selector for event target filters i.e. 'input, .btn'
 * @property {*} opts - any options passed to `addEventHandler`
 * @property {boolean} log - should this particular event be logged
 */

/**
 * Add a set of event listeners to a dom element.
 * A listener can be a function or an array of [function, options object].
 * @param {node|string} target - the dom element or css selector to add listeners to
 * @param {Object.<string, function|SnListener>} listeners - events keyed to listener functions
 * @param {boolean} log - if true, events are logged to the console
 *
 * Examples:
 * // Single with logging
 * const remove = snq.addListeners('#foo', { click: myClickHandler }, true);
 * remove();
 *
 * // Multiple with logging
 * const remove = snq.addListeners(elem, {
 *   click: myClickHandler,
 *   touch: myTouchHandler,
 * }, true);
 * remove();
 *
 * // With specific event listener options and per event logging
 * const remove = snq.addListeners(window, {
 *   click: {
 *     cb: myClickHandler,
 *     log: true,
 *     opts: { passive: false, once: true }
 *   }
 * });
 * remove();
 *
 * // With filtering, only listen for clicks on inputs or .btn elements
 * const remove = snq.addListeners(document, {
 *   click: {
 *     cb: myClickHandler,
 *     filter: 'input, .btn'
 *   }
 * });
 * remove();
 */
function addListeners(target, listeners) {
  let log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const element = getElement(target);
  const grouper = _logger__WEBPACK_IMPORTED_MODULE_2__["default"].groupCollapsed || _logger__WEBPACK_IMPORTED_MODULE_2__["default"].info;
  const groupend = _logger__WEBPACK_IMPORTED_MODULE_2__["default"].groupEnd || _function__WEBPACK_IMPORTED_MODULE_5__.noop;
  const {
    label,
    orange
  } = _constants__WEBPACK_IMPORTED_MODULE_1__.styles;
  const consoleStyles = [`${label}`, `${orange}`, `${label}`];
  const removes = [];
  Object.entries(listeners).forEach(_ref2 => {
    let [event, listener] = _ref2;
    const hasOptions = typeof listener === 'object';
    const cb = hasOptions ? listener.cb : listener;
    const options = hasOptions ? listener.opts : undefined;
    const logThis = hasOptions ? listener.log : false;
    const filters = hasOptions ? listener.filter : undefined;
    const handler = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const [e] = args;
      if (!filters || !!closest(e.target, filters)) {
        if (log || logThis) {
          const msg = `%cFiring listener for "%c${event}%c"`;
          grouper.apply(console, [msg, ...consoleStyles]);
          _logger__WEBPACK_IMPORTED_MODULE_2__["default"].info(`%cCallback`, `${_constants__WEBPACK_IMPORTED_MODULE_1__.css.orange}`, cb);
          _logger__WEBPACK_IMPORTED_MODULE_2__["default"].info(`%cEvent`, `${_constants__WEBPACK_IMPORTED_MODULE_1__.css.orange}`, ...args);
          groupend();
        }
        cb(...args);
      }
    };
    if (event.trim().includes(' ')) {
      // register for multiple events
      const events = event.trim().split(' ');
      events.forEach(e => {
        element.addEventListener(e, handler, options);
        // Add the args we need to call `removeEventListener`
        removes.push([e, handler, options].filter(Boolean));
      });
    } else {
      // single event
      element.addEventListener(event, handler, options);
      // Add the args we need to call `removeEventListener`
      removes.push([event, handler, options].filter(Boolean));
    }
  });
  return function remove() {
    removes.forEach(r => element.removeEventListener(...r));
  };
}

/**
 * Remove a set of event listeners to a dom element
 * @param {Node} el - the dom element to remove listeners from
 * @param {Object.<string, function>} listeners - events keyed to listener functions
 */
function removeListeners(el, listeners) {
  Object.entries(listeners).forEach(_ref3 => {
    let [event, listener] = _ref3;
    el.removeEventListener(event, listener);
  });
}

/** Replaces $(document).ready(eventHandler); and the shorthand $(eventHandler); */
function ready(callback) {
  if (!isBrowser) return;
  if (document.readyState !== 'loading') callback();else document.addEventListener('DOMContentLoaded', callback);
}

/**
 * Trigger an event on a target
 * @param {string|node} target - target of event
 * @param {string} type - the event type
 * @param {*} [data] - optional data to pass along with the event
 */
function trigger(_ref4) {
  let {
    target,
    type,
    data,
    custom = false
  } = _ref4;
  let event;
  const element = getElement(target);
  if (custom) {
    // Build custom event
    if (window.CustomEvent && typeof window.CustomEvent === 'function') {
      event = new CustomEvent(type, data ? {
        detail: data
      } : undefined);
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data || undefined);
    }
  } else {
    // Build native event
    event = document.createEvent('HTMLEvents');
    event.initEvent(type, true, false);
  }
  element.dispatchEvent(event);
}

/* Animation
   --------------------------------------------------------------- */
/** Replaces $el.animate({ 'height', '40px' }, 300ms); */
function animate(target, params, ms) {
  const element = getElement(target);
  element.style.transition = `all ${ms}ms`;
  Object.keys(params).forEach(key => element.style[key] = params[key]);
}

/** Replaces $el.hide() */
function hide(target) {
  getElement(target).style.display = 'none';
}

/** Replaces $el.show() */
function show(target) {
  getElement(target).style.display = '';
}

/** Return true if this element is current display:none */
function isDisplayNone(elem) {
  if (!isElement(elem)) return false;
  return getComputedStyle(elem).display === 'none';
}

/** Replaces $el.toggle() */
function toggle(target) {
  const element = getElement(target);
  const win = element.ownerDocument.defaultView;
  if (win.getComputedStyle(element, null).display === 'none') {
    element.style.display =
    // eslint-disable-next-line no-bitwise
    '' | 'inline' | 'inline-block' | 'inline-table' | 'block';
  } else {
    element.style.display = 'none';
  }
}

/** Replaces $el.fadeOut(3000) */
function fadeOut(target, ms) {
  const element = getElement(target);
  if (ms) {
    const originalTrans = element.style.transition || '';
    element.style.opacity = '1';
    element.style.transition = `opacity ${ms}ms`;
    const end = () => {
      element.style.display = 'none';
      element.style.transition = originalTrans;
    };
    element.addEventListener('transitionend', end, {
      once: true,
      capture: false
    });
  }
  element.style.opacity = '0';
}

/** Replaces $el.fadeIn(3000) */
function fadeIn(target, ms) {
  const element = getElement(target);
  element.style.opacity = '0';
  if (element.style.display === 'none') element.style.display = '';
  if (ms) {
    const originalTrans = element.style.transition || '';
    element.style.opacity = '0.01';
    element.style.transition = `opacity ${ms}ms`;
    const end = () => {
      element.style.opacity = '';
      element.style.transition = originalTrans;
    };
    element.addEventListener('transitionend', end, {
      once: true,
      capture: false
    });
    setTimeout(() => element.style.opacity = '1', 1);
  } else {
    element.style.opacity = '1';
  }
}

/***/ }),

/***/ 2829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports enumKeyOrNull, enumEntryOrNull */
/**
 * This is a copy of the `enumify` package: https://github.com/rauschma/enumify
 * We are porting it to avoid webpack issues caused by mixing module types
 */
class Enumify {
  static closeEnum() {
    const enumKeys = [];
    const enumValues = [];
    // Traverse the enum entries
    for (const [key, value] of Object.entries(this)) {
      enumKeys.push(key);
      value.enumKey = key;
      value.enumOrdinal = enumValues.length;
      enumValues.push(value);
    }
    // Important: only add more static properties *after* processing the enum entries
    this.enumKeys = enumKeys;
    this.enumValues = enumValues;
    // TODO: prevent instantiation now. Freeze `this`?
  }

  /** Use case: parsing enum values */
  static enumValueOf(str) {
    const index = this.enumKeys.indexOf(str);
    if (index >= 0) {
      return this.enumValues[index];
    }
    return undefined;
  }
  static [Symbol.iterator]() {
    return this.enumValues[Symbol.iterator]();
  }
  toString() {
    return `${this.constructor.name}.${this.enumKey}`;
  }
}
function enumKeyOrNull(input) {
  if (input === null) return null;
  if (input instanceof Enumify) return input.enumKey;
  return input;
}
function enumEntryOrNull(Enum, key) {
  if (key === null) return null;
  return Enum?.enumValueOf(key);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enumify);

/***/ }),

/***/ 5981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isFunc: () => (/* binding */ isFunc),
/* harmony export */   noop: () => (/* binding */ noop)
/* harmony export */ });
/* unused harmony exports lazy, compose, required, pipe, debounce, identity, combineReducers, onEnter, onKey, cappedCallback, retry */
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7814);
/**
 * FUNCTION UTILS
 * @module sn.functions
 */


function lazy(f) {
  return function lazyApply() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return f.apply(this, args);
  };
}
const compose = function () {
  for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }
  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    return fns.forEach(fn => fn && fn(...args));
  };
};

/** Returns `true` only if the property on the object is a function. */
const isFunc = function () {
  if (arguments.length === 1) return typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function';
  return typeof (0,_object__WEBPACK_IMPORTED_MODULE_0__.prop)(arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1]) === 'function';
};

/**
 * Use as an ES6 default parameter to make a parameter required.
 * @param name - The required parameter name.
 *
 * USAGE:
 *  makeSandwich = (meat = required('meat'), cheese) => { ... };
 *  makeSandwich = ({ meat = required('meat'), cheese } = {}) => { ... };
 */
const required = name => {
  throw new Error(`${name} is a required parameter.`);
};

/**
 * Pipe data through a series of functions.
 * @param {[Function]} fns - Array of functions to pipe data through.
 *
 * USAGE:
 * let fn1 = s => s.toLowerCase();
 * let fn2 = s => s.split('').reverse().join('');
 * let fn3 = s => s + '!'
 *
 * let emitter = pipe(fn1, fn2, fn3);
 * console.log(emitter('Time')); // emit!
 */
const pipe = function () {
  for (var _len4 = arguments.length, fns = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }
  return x => fns.reduce((v, f) => f(v), x);
};

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} func - The function to debounce.
 * @param {Number} wait - The number of milliseconds to wait between triggering.
 * @param {boolean} [immediate] - Trigger the function on the leading edge, instead of the trailing.
 * @see https://davidwalsh.name/javascript-debounce-function
 *
 * USAGE:
 * let myEfficientFn = sn.debounce(() => {
 *   // All the taxing stuff you do
 * }, 250);
 *
 * window.addEventListener('resize', myEfficientFn);
 */
function debounce(func) {
  let wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  let immediate = arguments.length > 2 ? arguments[2] : undefined;
  let timeout;
  return function debounced() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }
    const context = this;
    function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/** Convenient 'do nothing' function that doesn't require an argument like void(0); */
const noop = () => {};
const identity = o => o;

/**
 * Combine many redux style reducers into one 'root' reducer function.
 * Similar to redux combineReducers except that redux reducers only
 * receive/update a piece of the app state. Ours receive and can update
 * the entire state object.
 * @param reducers - 0 to many reducer functions
 * @return {function(*=, *=)} a single 'root' reducer function
 */
const combineReducers = function () {
  for (var _len6 = arguments.length, reducers = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    reducers[_key6] = arguments[_key6];
  }
  return function () {
    let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let action = arguments.length > 1 ? arguments[1] : undefined;
    return reducers.reduce((nextState, reducer) => reducer(nextState, action), state);
  };
};

/**
 * Produces an event handler that expects to receive an event and will
 * only fire the provided callback if the event key code is the 'Enter' key.
 * Useful for valid a11y handling, i.e. divs with onClick's.
 *
 * USAGE:
 * <div onClick={changeImage} onKeyDown={onEnter(changeImage)}>
 *
 * @param {function} fn - the callback to fire on enter key.
 * @returns {function}
 */
function onEnter(fn) {
  return function handleOnEnter(e) {
    if (e.keyCode === 13) fn(e);
  };
}

/**
 * Produces an event handler that expects to receive an event and will
 * only fire the provided callback if the event key one of the desired keys.
 * USAGE:
 * <input type="range" onKeyDown={onKey(seek, ['ArrowLeft', 'ArrowRight'])}>
 *
 * @param {function} fn - the callback to fire on key down.
 * @param {(number[]|string[])} keys - key names to respond to
 * @returns {function}
 */
function onKey(fn, keys) {
  return function handleOnKey(e) {
    if (keys.includes(e.key) || keys.includes(e.keyCode)) fn(e);
  };
}

/**
 * Returns a function that can be called only a certain number of times.
 * @param {function} fn - the callback to fire
 * @param {number} times - number of times this callback can be called
 * @param {...*} args - callback arguments, if any
 * @return {function(): *}
 */
function cappedCallback(fn, times) {
  for (var _len7 = arguments.length, args = new Array(_len7 > 2 ? _len7 - 2 : 0), _key7 = 2; _key7 < _len7; _key7++) {
    args[_key7 - 2] = arguments[_key7];
  }
  let count = times;
  return function cappedFunction() {
    if (count > 0) {
      fn(...args);
      count -= 1;
    }
  };
}

/**
 * Fire a callback function if a condition is met.
 * If not met, retry until it is met or the # of retries is expended.
 * @param {function} callback - function to fire
 * @param {function} condition - function to determine to fire callback
 * @param {number} [delay] - number of milliseconds to wait before retrying
 * @param [number [retries] - number or retries to attempt
 */
function retry(_ref) {
  let {
    callback,
    condition,
    delay = 200,
    retries = 10
  } = _ref;
  if (condition()) {
    callback();
  } else if (retries > 0) {
    setTimeout(() => {
      retry({
        callback,
        condition,
        delay,
        retries: retries - 1
      });
    }, delay);
  }
}

/***/ }),

/***/ 5813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5981);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3168);
/* eslint-disable no-console */
/**
 * Module to abstract the console.
 * Performs the log only if
 * - the environment has a console,
 * - with the desired log function,
 * - and either the server is in dev mode or the browser is in debug mode.
 */



const logger = {};
['assert', 'dir', 'count', 'log', 'info', 'debug', 'warn', 'error', 'table', 'trace', 'group', 'groupEnd', 'groupCollapsed', 'profile', 'profileEnd', 'time', 'timeEnd', 'timeStamp'].forEach(key => {
  const isLoggable = _constants__WEBPACK_IMPORTED_MODULE_0__.win?.console && _constants__WEBPACK_IMPORTED_MODULE_0__.win?.console[key];
  const shouldLog = !_constants__WEBPACK_IMPORTED_MODULE_0__.isJestEnv && !(0,_constants__WEBPACK_IMPORTED_MODULE_0__.isProduction)() || (0,_constants__WEBPACK_IMPORTED_MODULE_0__.isDebug)();
  logger[key] = isLoggable && shouldLog ? function log() {
    _constants__WEBPACK_IMPORTED_MODULE_0__.win.console[key](...arguments);
  } : _function__WEBPACK_IMPORTED_MODULE_1__.noop;

  /**
   * A log statement that only fires if in `debug mode`,
   * i.e `sn-debug` cookie set to `true`.
   */
  logger.sndebug = function sndebug() {
    if (!(0,_constants__WEBPACK_IMPORTED_MODULE_0__.isDebug)()) return;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    console.log('DEBUG:', ...args);
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);

/***/ }),

/***/ 7814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prop: () => (/* binding */ prop)
/* harmony export */ });
/* unused harmony exports setProp, values, reverse, shallowEqual, shrink, eq, has, isPlainObject, extend, type */
/* OBJECT UTILS
   --------------------------------------------------------------- */

const _identity = o => o;

/**
 * Get the value of a property at a path without throwing a ReferenceError.
 * If the path contains a {undefined} or {null}, it is returned.
 * @param {object} obj - The object to lookup the property from.
 * @param {string} path - The property path string.
 * @returns {*} - The value at the end of the property path,
 *                or {null} or {undefined} if encountered.
 *
 * USAGE:
 * let employee = {
 *   name: 'Bob Vila',
 *   nicknames: ['Bobby V', 'Bob the Builder', 'The Veebs'],
 *   address: {
 *     street1: '12345 67th St',
 *     state: {
 *       'iso-code': 'US-MN',
 *       'short-code': 'US-MN',
 *       'long-code': 'US-Minnesota'
 *     }
 *   }
 * };
 * let format = 'iso';
 *
 * // values without reference errors
 * prop(employee, 'name');                            // "Bob Vila"
 * prop(employee, 'address.street2');                 // undefined
 *
 * // bracket syntax
 * prop(employee, "address.state['long-code']");      // "US-Minnesota"
 * prop(employee, 'address.state["short-code"]');     // "US-MN"
 * prop(employee, 'address.state[`short-code`]');     // "US-MN"
 * prop(employee, `address.state['${format}-code']`); // "US-MN"
 *
 * // and arrays, oh my!
 * prop(employee, 'nicknames[1]');                    // "Bob the Builder"
 * prop(employee, 'nicknames[1].length');             // 15
 * prop(employee, 'nicknames[3].length');             // undefined
 */
function prop(obj, path) {
  if (!obj) return obj;
  let item = obj;

  // Handle bracket syntax.
  const normalized = path.replace(/\[/g, '.') // convert open bracket to dot
  .replace(/[\]"'`]/g, ''); // remove close bracket and all quote flavors

  const parts = normalized.split('.');
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    const value = item[part];

    // Allow empty strings/objects.
    const bad_value = typeof value === 'undefined' || value === null;
    const last_value = i === parts.length - 1;
    item = value;
    if (last_value || bad_value) break;
  }
  return item;
}

/**
 * Set a property at a path on an object. Parts of the path
 * that do not exist yet are lazily created.
 * @param {object} obj - The object to set a property on.
 * @param {string} path - The '.' separated property path to set.
 * @param {*} value - The value to set at the property path.
 *
 * USAGE:
 * setProp(employee, 'address.city', 'Rogers');
 * let bg = sn.setProp({}, 'background.color', '#efefef');
 */
function setProp(obj, path, value) {
  const parts = path.split('.');
  let object;
  let i;
  let n;
  object = obj; // Start the chain at our object.

  for (i = 0, n = parts.length; i < n; i++) {
    if (i === n - 1) {
      // At the end of the path, set the value.
      object[parts[i]] = value;
    } else {
      // If this part of the path isn't there, fill in with object literal.
      if (!object[parts[i]]) object[parts[i]] = {};
      object = object[parts[i]]; // Move `object` to the next path part.
    }
  }

  return obj;
}

/**
 * Namespace function: so we don't have to put all those checks to see if
 * modules exist and either create empty ones or set a reference to one
 * that was previously created.
 * See Zakas, Maintainable JavaScript, pp. 72-73, and
 * Stefanov, Javascript Patterns, pp. 89-90
 * @param {string} ns - a '.' separated namespace like 'foo.bar.baz'
 * @param {*} [o] - and optional object/number/string to set the path value to
 */
function namespace(ns, o) {
  const win = __webpack_require__.g || window;
  const parts = ns.split('.');
  let object;
  let i;
  let n;

  // Start the object if needed.
  if (!win[parts[0]]) {
    win[parts[0]] = {};
  }
  object = win[parts[0]];
  for (i = 1, n = parts.length; i < n; i++) {
    if (!object[parts[i]]) {
      object[parts[i]] = {};
    }
    object = object[parts[i]];
  }
  if (o) {
    setProp(win, ns, o);
    object = o;
  }
  return object;
}

/**
 * Returns and array of the values in an object.
 * It only returns the objects own values, not those from the prototype chain.
 */
function values(obj) {
  if (Object.values) return Object.values(obj);
  return Object.keys(obj || {}).map(key => obj[key]);
}

/** Reverses a simple object containing key - value pairs. */
function reverse(obj) {
  let callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _identity;
  return Object.keys(obj).reduce((prev, curr) => {
    prev[obj[curr]] = callback(curr);
    return prev;
  }, {});
}

/**
 * Returns true if `a` contains the same keys with the same values as `b`.
 * Uses strict equality (===) and does not support `NaN`.
 */
function shallowEqual(a, b) {
  /* eslint-disable no-restricted-syntax */
  for (const key in a) {
    if (!(key in b) || a[key] !== b[key]) return false;
  }
  for (const key in b) {
    if (!(key in a) || a[key] !== b[key]) return false;
  }
  return true;
}

/**
 * Returns a new object containing only the properties listed in `props`.
 * @param {object} o - The object to get properties from.
 * @param {String[]} props - Array of property names to keep.
 * @return {object} - The resulting object containing only the properties listed in `props`.
 *
 * USAGE:
 * const vowels = shrink({ a: 'a', c: 'c', e: 'e' }, ['a', 'e']);
 * // => { a: 'a', e: 'e' }
 */
function shrink(o, props) {
  return props.reduce((acc, curr) => {
    acc[curr] = o[curr];
    return acc;
  }, {});
}

/**
 * Returns `true` if the JSON.stringify result is the same for both arguments.
 * Order matters, properties or array elements in different orders will result in `false`.
 */
function eq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

/**
 * Returns true if the given object has the 'own' property
 * @param {object} o - the object to check for a property
 * @param {string|string[]} p - the property name or array of names to check for
 * @return {boolean}
 */
function has(o, p) {
  if (!o || !p) return false;
  if (Array.isArray(p)) {
    return p.reduce((result, prop) => {
      if (!result) return result;
      return Object.prototype.hasOwnProperty.call(o, prop);
    }, true);
  }
  return Object.prototype.hasOwnProperty.call(o, p);
}

/** Returns true if this is a plain object, not created from a class/prototype */
function isPlainObject(obj) {
  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  if (!obj || {}.toString.call(obj) !== '[object Object]') {
    return false;
  }
  const proto = Object.getPrototypeOf(obj);
  const fnToString = Object.prototype.hasOwnProperty.toString;
  const ObjectFunctionString = fnToString.call(Object);

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true;
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  const Ctor = Object.prototype.hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor === 'function' && fnToString.call(Ctor) === ObjectFunctionString;
}

/**
 * Extend an object with one to many sources.
 * Can be used to produce a deep copy of an object.
 * Replaces $.extend
 * Example:
 * <code>
 *   let clone;
 *   const source = { foo: { bar: 'baz' } };
 *
 *   clone = extend({}, source) // => { foo: { bar: 'baz' } }
 *   source.foo === clone.foo; // => true
 *
 *   clone = extend(true, {}, source) // => { foo: { bar: 'baz' } }
 *   source.foo === clone.foo; // => false
 * </code>
 */
function extend() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  const deepflag = typeof args[0] === 'boolean';
  const deep = deepflag && args[0];
  const destination = args[deepflag ? 1 : 0];
  const sources = args.slice(deepflag ? 2 : 1);
  if (!deep) return Object.assign(destination, ...sources);
  const target = destination || {};
  for (let i = 0; i < sources.length; i++) {
    const options = sources[i];

    // eslint-disable-next-line no-continue
    if (!options) continue;

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const name in options) {
      const copy = options[name];

      // Prevent Object.prototype pollution
      // Prevent never-ending loop
      if (name === '__proto__' || target === copy) {
        // eslint-disable-next-line no-continue
        continue;
      }

      // Recurse if we're merging plain objects or arrays
      let copyIsArray = Array.isArray(copy);
      if (deep && copy && (isPlainObject(copy) || copyIsArray)) {
        const src = target[name];
        let clone;

        // Ensure proper type for the source value
        if (copyIsArray && !Array.isArray(src)) {
          clone = [];
        } else if (!copyIsArray && !isPlainObject(src)) {
          clone = {};
        } else {
          clone = src;
        }
        copyIsArray = false;

        // Never move original objects, clone them
        target[name] = extend(deep, clone, copy);

        // Don't bring in undefined values
      } else if (copy !== undefined) {
        target[name] = copy;
      }
    }
  }
  return target;
}

/**
 * Returns the type of the argument
 * Replaces $.type
 * @param {*} obj - literally anything
 * Example:
 * <code>
 *   type([]); // => "array"
 *   type({}); // => "object"
 *   type(''); // => "string"
 *   type(42); // => "number"
 *   type(Symbol); // => "function"
 *   type(Symbol(42); // => "symbol"
 * </code>
 */
function type(arg) {
  return Object.prototype.toString.call(arg).replace(/^\[object (.+)]$/, '$1').toLowerCase();
}

/***/ }),

/***/ 5203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   isString: () => (/* binding */ isString)
/* harmony export */ });
/* unused harmony exports capitalize, titlecase, camelToSnake, pascalToSnake, snakeToPascal, mattressCase, optionize, deoptionize, dasherize, undasherize, repeat, wordCount, pad, replaceAt, endsWith, firstWord, uuid, lazyId, bytes, pluralIf, pxToNum, truncate, asBool, removeSpecialCharacters */
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3168);

function isString(input) {
  return typeof input === 'string';
}

/**
 * Capitalize the first letter of the string, keep the rest as-is.
 * Example:
 * capitalize('chat with us!') -> "Chat with us!"
 */
function capitalize(phrase) {
  if (!phrase) return phrase;
  return phrase[0].toUpperCase() + phrase.slice(1);
}

/**
 * For each word in the phrase, uppercase the first letter and lowercase the rest.
 * Example:
 * titlecase('LYOCELL uLTra Sheet SET') -> "Lyocell Ultra Sheet Set"
 */
function titlecase(phrase) {
  if (!phrase) return phrase;
  return phrase.replace(/\w\S*/g, word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
}

/**
 * Convert snake_case or sentence to camelCase
 * @param {string} phrase
 * @return {string}
 *
 * Example:
 * camelCase('foo_bar') -> "fooBar"
 * camelCase('Foo Bar') -> "fooBar"
 */
function camelCase(phrase) {
  return phrase.replace(/^\w|[A-Z]|\b\w|_+\w/g, (word, index) => {
    if (word.startsWith('_')) {
      // handle underscore word
      const next = word.replace('_', '');
      if (index === 0) return next[0].toLowerCase() + next.substr(1);
      return next[0].toUpperCase() + next.substr(1);
    }
    // lowercase or uppercase this letter
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/[\s-_]+/g, '');
}

/**
 * Convert camelCase into snake_case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * camelToSnake('fooBar') -> "foo_bar"
 */
function camelToSnake(phrase) {
  return phrase.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

/**
 * Convert PascalCase into snake_case
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * pascalToSnake('FooBar') -> "foo_bar"
 */
function pascalToSnake(phrase) {
  const first = phrase[0].toLowerCase();
  const rest = phrase.substring(1);
  return `${first}${camelToSnake(rest)}`;
}

/**
 * Convert snake_case to PascalCase
 * @param {string} phrase
 * @returns {string}
 *
 * Example:
 * snakeToPascal('foo_bar') -> "FooBar"
 */
function snakeToPascal(phrase) {
  return capitalize(camelCase(phrase));
}

/**
 * Sleep Number's crazy naming scheme
 * @param {string} phrase
 * @returns {string} cased like 'pSE SPECIAL EDITION'
 */
function mattressCase(phrase) {
  let allowSpecialCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!allowSpecialCase) return phrase.toUpperCase();
  return `${phrase[0].toLowerCase()}${phrase.substr(1).toUpperCase()}`;
}

/**
 * Rails has the concept of 'optionizing' text which replaces spaces with
 * underscores and lower-cases text.
 *
 * Example:
 * optionize('Soft Green'); -> "soft_green"
 */
function optionize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return phrase.toLowerCase().replace(/\s/g, '_');
}

/**
 * Replace '_' characters with spaces
 *
 * Example:
 * deoptionize('soft_green'); -> "Soft Green"
 */
function deoptionize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return titlecase(phrase.replace(/_/g, ' '));
}

/**
 * Replaces spaces with dashes and lower-cases text.
 *
 * Example:
 * dasherize('Split California King'); -> "split-california-king"
 */
function dasherize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return phrase.toLowerCase().replace(/\s/g, '-');
}

/**
 * Replaces dashes with spaces and uppercase the first letter of each word.
 *
 * Example:
 * dasherize('split-california-king'); -> "Split California King"
 */
function undasherize() {
  let phrase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const result = phrase.toLowerCase().replaceAll(/-/g, ' ');
  return titlecase(result);
}
function repeat(str, times) {
  return new Array(times + 1).join(str);
}
function wordCount(string) {
  return string.trim().split(/\s+/).length;
}
function pad(num, maxLength) {
  return repeat(`0`, maxLength - num.toString().length) + num;
}
function replaceAt(s, i, c) {
  return s.substr(0, i) + c + s.substr(i + 1);
}
function endsWith(s, c) {
  return s[s.length - 1] === c;
}
function firstWord(s) {
  return s.replace(/ .*/, '');
}

/**
 * Generate a universally unique identifier.
 * @return {string}
 */
function uuid() {
  /* eslint-disable */
  let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
  return 'uuid-' + uuid;
  /* eslint-enable */
}

/** Add a uuid to something if it doesn't already have one. */
function lazyId(o) {
  o.id = o.id || uuid();
  return o;
}

/** Return the size of a string in bytes assuming UTF-8 encoding. */
function bytes(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  const m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
}

/**
 * Returns either an empty string, a plural character of choice, or
 * an optional singular form.
 * @param {boolean} condition False will return an empty string.
 * @param {string} plural Plural suffix, 's' by default.
 * @param {string} [singular] Optional singular suffix, or version.
 */
function pluralIf(condition) {
  let plural = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 's';
  let singular = arguments.length > 2 ? arguments[2] : undefined;
  if (!condition) return singular || '';
  return plural;
}

/**
 * Returns a number of for a string px value, ie: '23px' => 23.
 */
function pxToNum(str) {
  return +str.trim().replace('px', '');
}

/**
 * Returns a truncated string with ellipsis (...) appended.
 * @param {string} string to truncate
 * @param {number} number of characters to keep
 */
function truncate(str, num) {
  if (str.length <= num) {
    return str;
  }
  return `${str.slice(0, num)}...`;
}

/** Convert a 'true' or 'false' string to a boolean */
function asBool(str) {
  if (typeof str === 'boolean') return str;
  if (typeof str === 'string') return str === 'true';
  return !!str;
}

/** Replace all the special characters from a string */
function removeSpecialCharacters() {
  let input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return Object.values(specials).reduce((result, special) => {
    return result.replaceAll(special.value, '');
  }, input);
}

/***/ }),

/***/ 3818:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";

var isNode = typeof process !== "undefined" && process.versions != null && process.versions.node != null;

var isWebWorker = (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope";

/**
 * @see https://github.com/jsdom/jsdom/releases/tag/12.0.0
 * @see https://github.com/jsdom/jsdom/issues/1537
 */
var isJsDom = typeof window !== "undefined" && window.name === "nodejs" || typeof navigator !== "undefined" && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));

var isDeno = typeof Deno !== "undefined" && typeof Deno.version !== "undefined" && typeof Deno.version.deno !== "undefined";

exports.jU = isBrowser;
__webpack_unused_export__ = isWebWorker;
__webpack_unused_export__ = isNode;
__webpack_unused_export__ = isJsDom;
__webpack_unused_export__ = isDeno;

/***/ }),

/***/ 1924:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(210);

var callBind = __webpack_require__(5559);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 5559:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(8612);
var GetIntrinsic = __webpack_require__(210);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 251:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var assign = __webpack_require__(3533);
var callBound = __webpack_require__(1924);
var flags = __webpack_require__(2847);
var GetIntrinsic = __webpack_require__(210);
var getIterator = __webpack_require__(3216);
var getSideChannel = __webpack_require__(7478);
var is = __webpack_require__(609);
var isArguments = __webpack_require__(2584);
var isArray = __webpack_require__(5826);
var isArrayBuffer = __webpack_require__(635);
var isDate = __webpack_require__(8923);
var isRegex = __webpack_require__(8420);
var isSharedArrayBuffer = __webpack_require__(2579);
var objectKeys = __webpack_require__(2215);
var whichBoxedPrimitive = __webpack_require__(3679);
var whichCollection = __webpack_require__(3483);
var whichTypedArray = __webpack_require__(6430);
var byteLength = __webpack_require__(6894);

var sabByteLength = callBound('SharedArrayBuffer.prototype.byteLength', true);

var $getTime = callBound('Date.prototype.getTime');
var gPO = Object.getPrototypeOf;
var $objToString = callBound('Object.prototype.toString');

var $Set = GetIntrinsic('%Set%', true);
var $mapHas = callBound('Map.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSize = callBound('Map.prototype.size', true);
var $setAdd = callBound('Set.prototype.add', true);
var $setDelete = callBound('Set.prototype.delete', true);
var $setHas = callBound('Set.prototype.has', true);
var $setSize = callBound('Set.prototype.size', true);

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414
function setHasEqualElement(set, val1, opts, channel) {
  var i = getIterator(set);
  var result;
  while ((result = i.next()) && !result.done) {
    if (internalDeepEqual(val1, result.value, opts, channel)) { // eslint-disable-line no-use-before-define
      // Remove the matching element to make sure we do not check that again.
      $setDelete(set, result.value);
      return true;
    }
  }

  return false;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439
function findLooseMatchingPrimitives(prim) {
  if (typeof prim === 'undefined') {
    return null;
  }
  if (typeof prim === 'object') { // Only pass in null as object!
    return void 0;
  }
  if (typeof prim === 'symbol') {
    return false;
  }
  if (typeof prim === 'string' || typeof prim === 'number') {
    // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.
    return +prim === +prim; // eslint-disable-line no-implicit-coercion
  }
  return true;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460
function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }
  var curB = $mapGet(b, altValue);
  var looseOpts = assign({}, opts, { strict: false });
  if (
    (typeof curB === 'undefined' && !$mapHas(b, altValue))
    // eslint-disable-next-line no-use-before-define
    || !internalDeepEqual(item, curB, looseOpts, channel)
  ) {
    return false;
  }
  // eslint-disable-next-line no-use-before-define
  return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447
function setMightHaveLoosePrim(a, b, prim) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }

  return $setHas(b, altValue) && !$setHas(a, altValue);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533
function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
  var i = getIterator(set);
  var result;
  var key2;
  while ((result = i.next()) && !result.done) {
    key2 = result.value;
    if (
      // eslint-disable-next-line no-use-before-define
      internalDeepEqual(key1, key2, opts, channel)
      // eslint-disable-next-line no-use-before-define
      && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)
    ) {
      $setDelete(set, key2);
      return true;
    }
  }

  return false;
}

function internalDeepEqual(actual, expected, options, channel) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  var actualBoxed = whichBoxedPrimitive(actual);
  var expectedBoxed = whichBoxedPrimitive(expected);
  if (actualBoxed !== expectedBoxed) {
    return false;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration

  var hasActual = channel.has(actual);
  var hasExpected = channel.has(expected);
  var sentinel;
  if (hasActual && hasExpected) {
    if (channel.get(actual) === channel.get(expected)) {
      return true;
    }
  } else {
    sentinel = {};
  }
  if (!hasActual) { channel.set(actual, sentinel); }
  if (!hasExpected) { channel.set(expected, sentinel); }

  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts, channel);
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }

  return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
}

function setEquiv(a, b, opts, channel) {
  if ($setSize(a) !== $setSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  while ((resultA = iA.next()) && !resultA.done) {
    if (resultA.value && typeof resultA.value === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    } else if (!$setHas(b, resultA.value)) {
      if (opts.strict) { return false; }
      if (!setMightHaveLoosePrim(a, b, resultA.value)) {
        return false;
      }
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    }
  }
  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      // We have to check if a primitive value is already matching and only if it's not, go hunting for it.
      if (resultB.value && typeof resultB.value === 'object') {
        if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && !$setHas(a, resultB.value)
        && !setHasEqualElement(set, resultB.value, opts.strict, channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function mapEquiv(a, b, opts, channel) {
  if ($mapSize(a) !== $mapSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  var key;
  var item1;
  var item2;
  while ((resultA = iA.next()) && !resultA.done) {
    key = resultA.value[0];
    item1 = resultA.value[1];
    if (key && typeof key === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, key);
    } else {
      item2 = $mapGet(b, key);
      if ((typeof item2 === 'undefined' && !$mapHas(b, key)) || !internalDeepEqual(item1, item2, opts, channel)) {
        if (opts.strict) {
          return false;
        }
        if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {
          return false;
        }
        if (!set) { set = new $Set(); }
        $setAdd(set, key);
      }
    }
  }

  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      key = resultB.value[0];
      item2 = resultB.value[1];
      if (key && typeof key === 'object') {
        if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel))
        && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, { strict: false }), channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function objEquiv(a, b, opts, channel) {
  /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5], max-lines: [2, 400] */
  var i, key;

  if (typeof a !== typeof b) { return false; }
  if (a == null || b == null) { return false; }

  if ($objToString(a) !== $objToString(b)) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsArray = isArray(a);
  var bIsArray = isArray(b);
  if (aIsArray !== bIsArray) { return false; }

  // TODO: replace when a cross-realm brand check is available
  var aIsError = a instanceof Error;
  var bIsError = b instanceof Error;
  if (aIsError !== bIsError) { return false; }
  if (aIsError || bIsError) {
    if (a.name !== b.name || a.message !== b.message) { return false; }
  }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {
    return false;
  }

  var aIsDate = isDate(a);
  var bIsDate = isDate(b);
  if (aIsDate !== bIsDate) { return false; }
  if (aIsDate || bIsDate) { // && would work too, because both are true or both false here
    if ($getTime(a) !== $getTime(b)) { return false; }
  }
  if (opts.strict && gPO && gPO(a) !== gPO(b)) { return false; }

  var aWhich = whichTypedArray(a);
  var bWhich = whichTypedArray(b);
  if ((aWhich || bWhich) && aWhich !== bWhich) {
    return false;
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  var aIsArrayBuffer = isArrayBuffer(a);
  var bIsArrayBuffer = isArrayBuffer(b);
  if (aIsArrayBuffer !== bIsArrayBuffer) { return false; }
  if (aIsArrayBuffer || bIsArrayBuffer) { // && would work too, because both are true or both false here
    if (byteLength(a) !== byteLength(b)) { return false; }
    return typeof Uint8Array === 'function' && internalDeepEqual(new Uint8Array(a), new Uint8Array(b), opts, channel);
  }

  var aIsSAB = isSharedArrayBuffer(a);
  var bIsSAB = isSharedArrayBuffer(b);
  if (aIsSAB !== bIsSAB) { return false; }
  if (aIsSAB || bIsSAB) { // && would work too, because both are true or both false here
    if (sabByteLength(a) !== sabByteLength(b)) { return false; }
    return typeof Uint8Array === 'function' && internalDeepEqual(new Uint8Array(a), new Uint8Array(b), opts, channel);
  }

  if (typeof a !== typeof b) { return false; }

  var ka = objectKeys(a);
  var kb = objectKeys(b);
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; } // eslint-disable-line eqeqeq
  }

  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!internalDeepEqual(a[key], b[key], opts, channel)) { return false; }
  }

  var aCollection = whichCollection(a);
  var bCollection = whichCollection(b);
  if (aCollection !== bCollection) {
    return false;
  }
  if (aCollection === 'Set' || bCollection === 'Set') { // aCollection === bCollection
    return setEquiv(a, b, opts, channel);
  }
  if (aCollection === 'Map') { // aCollection === bCollection
    return mapEquiv(a, b, opts, channel);
  }

  return true;
}

module.exports = function deepEqual(a, b, opts) {
  return internalDeepEqual(a, b, opts, getSideChannel());
};


/***/ }),

/***/ 4289:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keys = __webpack_require__(2215);
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var hasPropertyDescriptors = __webpack_require__(1044)();

var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;

var defineProperty = function (object, name, value, predicate) {
	if (name in object) {
		if (predicate === true) {
			if (object[name] === value) {
				return;
			}
		} else if (!isFunction(predicate) || !predicate()) {
			return;
		}
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value; // eslint-disable-line no-param-reassign
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ 4029:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isCallable = __webpack_require__(5320);

var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            } else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};

var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        } else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};

var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            } else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};

var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }

    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }

    if (toStr.call(list) === '[object Array]') {
        forEachArray(list, iterator, receiver);
    } else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    } else {
        forEachObject(list, iterator, receiver);
    }
};

module.exports = forEach;


/***/ }),

/***/ 7648:
/***/ ((module) => {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 8612:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(7648);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 5972:
/***/ ((module) => {

"use strict";


var functionsHaveNames = function functionsHaveNames() {
	return typeof function f() {}.name === 'string';
};

var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) {
	try {
		gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		gOPD = null;
	}
}

functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
	if (!functionsHaveNames() || !gOPD) {
		return false;
	}
	var desc = gOPD(function () {}, 'name');
	return !!desc && !!desc.configurable;
};

var $bind = Function.prototype.bind;

functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
	return functionsHaveNames() && typeof $bind === 'function' && function f() {}.bind().name !== '';
};

module.exports = functionsHaveNames;


/***/ }),

/***/ 210:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(1405)();
var hasProto = __webpack_require__(8185)();

var getProto = Object.getPrototypeOf || (
	hasProto
		? function (x) { return x.__proto__; } // eslint-disable-line no-proto
		: null
);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(8612);
var hasOwn = __webpack_require__(7642);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 7296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(210);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ 932:
/***/ ((module) => {

"use strict";


var $BigInt = typeof BigInt !== 'undefined' && BigInt;

module.exports = function hasNativeBigInts() {
	return typeof $BigInt === 'function'
		&& typeof BigInt === 'function'
		&& typeof $BigInt(42) === 'bigint' // eslint-disable-line no-magic-numbers
		&& typeof BigInt(42) === 'bigint'; // eslint-disable-line no-magic-numbers
};


/***/ }),

/***/ 1044:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(210);

var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	if ($defineProperty) {
		try {
			$defineProperty({}, 'a', { value: 1 });
			return true;
		} catch (e) {
			// IE 8 has a broken defineProperty
			return false;
		}
	}
	return false;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!hasPropertyDescriptors()) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;


/***/ }),

/***/ 8185:
/***/ ((module) => {

"use strict";


var test = {
	foo: {}
};

var $Object = Object;

module.exports = function hasProto() {
	return { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);
};


/***/ }),

/***/ 1405:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(5419);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 5419:
/***/ ((module) => {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 6410:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasSymbols = __webpack_require__(5419);

module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};


/***/ }),

/***/ 7642:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(8612);

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 9496:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(210);
var has = __webpack_require__(7642);
var channel = __webpack_require__(7478)();

var $TypeError = GetIntrinsic('%TypeError%');

var SLOT = {
	assert: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		channel.assert(O);
		if (!SLOT.has(O, slot)) {
			throw new $TypeError('`' + slot + '` is not present on `O`');
		}
	},
	get: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		return slots && slots['$' + slot];
	},
	has: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		return !!slots && has(slots, '$' + slot);
	},
	set: function (O, slot, V) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		if (!slots) {
			slots = {};
			channel.set(O, slots);
		}
		slots['$' + slot] = V;
	}
};

if (Object.freeze) {
	Object.freeze(SLOT);
}

module.exports = SLOT;


/***/ }),

/***/ 2584:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasToStringTag = __webpack_require__(6410)();
var callBound = __webpack_require__(1924);

var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString(value) !== '[object Array]' &&
		$toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ 635:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBind = __webpack_require__(5559);
var callBound = __webpack_require__(1924);
var GetIntrinsic = __webpack_require__(210);
var isTypedArray = __webpack_require__(5692);

var $ArrayBuffer = GetIntrinsic('ArrayBuffer', true);
var $Float32Array = GetIntrinsic('Float32Array', true);
var $byteLength = callBound('ArrayBuffer.prototype.byteLength', true);

// in node 0.10, ArrayBuffers have no prototype methods, but have an own slot-checking `slice` method
var abSlice = $ArrayBuffer && !$byteLength && new $ArrayBuffer().slice;
var $abSlice = abSlice && callBind(abSlice);

module.exports = $byteLength || $abSlice
	? function isArrayBuffer(obj) {
		if (!obj || typeof obj !== 'object') {
			return false;
		}
		try {
			if ($byteLength) {
				$byteLength(obj);
			} else {
				$abSlice(obj, 0);
			}
			return true;
		} catch (e) {
			return false;
		}
	}
	: $Float32Array
		// in node 0.8, ArrayBuffers have no prototype or own methods
		? function IsArrayBuffer(obj) {
			try {
				return (new $Float32Array(obj)).buffer === obj && !isTypedArray(obj);
			} catch (e) {
				return typeof obj === 'object' && e.name === 'RangeError';
			}
		}
		: function isArrayBuffer(obj) { // eslint-disable-line no-unused-vars
			return false;
		};


/***/ }),

/***/ 3376:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hasBigInts = __webpack_require__(932)();

if (hasBigInts) {
	var bigIntValueOf = BigInt.prototype.valueOf;
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') {
			return true;
		}

		return tryBigInt(value);
	};
} else {
	module.exports = function isBigInt(value) {
		return  false && 0;
	};
}


/***/ }),

/***/ 6814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(1924);
var $boolToStr = callBound('Boolean.prototype.toString');
var $toString = callBound('Object.prototype.toString');

var tryBooleanObject = function booleanBrandCheck(value) {
	try {
		$boolToStr(value);
		return true;
	} catch (e) {
		return false;
	}
};
var boolClass = '[object Boolean]';
var hasToStringTag = __webpack_require__(6410)();

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') {
		return true;
	}
	if (value === null || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : $toString(value) === boolClass;
};


/***/ }),

/***/ 5320:
/***/ ((module) => {

"use strict";


var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};


/***/ }),

/***/ 8923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = __webpack_require__(6410)();

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ 8379:
/***/ ((module) => {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Map) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x);
		if ($setHas) {
			try {
				$setHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Map; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),

/***/ 4578:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = __webpack_require__(6410)();

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};


/***/ }),

/***/ 8420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(1924);
var hasToStringTag = __webpack_require__(6410)();
var has;
var $exec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	has = callBound('Object.prototype.hasOwnProperty');
	$exec = callBound('RegExp.prototype.exec');
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var $toString = callBound('Object.prototype.toString');
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			$exec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};


/***/ }),

/***/ 9572:
/***/ ((module) => {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Set) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x);
		if ($mapHas) {
			try {
				$mapHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Set; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),

/***/ 2579:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callBound = __webpack_require__(1924);

var $byteLength = callBound('SharedArrayBuffer.prototype.byteLength', true);

module.exports = $byteLength
	? function isSharedArrayBuffer(obj) {
		if (!obj || typeof obj !== 'object') {
			return false;
		}
		try {
			$byteLength(obj);
			return true;
		} catch (e) {
			return false;
		}
	}
	: function isSharedArrayBuffer(obj) { // eslint-disable-line no-unused-vars
		return false;
	};


/***/ }),

/***/ 9981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = __webpack_require__(6410)();

module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),

/***/ 2636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(1405)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && 0;
	};
}


/***/ }),

/***/ 5692:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var forEach = __webpack_require__(4029);
var availableTypedArrays = __webpack_require__(3083);
var callBound = __webpack_require__(1924);

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = __webpack_require__(6410)();
var gOPD = __webpack_require__(7296);

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;
var typedArrays = availableTypedArrays();

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		var arr = new g[typedArray]();
		if (Symbol.toStringTag in arr) {
			var proto = getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag || !(Symbol.toStringTag in value)) {
		var tag = $slice($toString(value), 8, -1);
		return $indexOf(typedArrays, tag) > -1;
	}
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};


/***/ }),

/***/ 1718:
/***/ ((module) => {

"use strict";


var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isWeakMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x, $mapHas);
		if ($setHas) {
			try {
				$setHas.call(x, $setHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakMap; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};


/***/ }),

/***/ 5899:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(210);
var callBound = __webpack_require__(1924);

var $WeakSet = GetIntrinsic('%WeakSet%', true);

var $setHas = callBound('WeakSet.prototype.has', true);

if ($setHas) {
	var $mapHas = callBound('WeakMap.prototype.has', true);

	module.exports = function isWeakSet(x) {
		if (!x || typeof x !== 'object') {
			return false;
		}
		try {
			$setHas(x, $setHas);
			if ($mapHas) {
				try {
					$mapHas(x, $mapHas);
				} catch (e) {
					return true;
				}
			}
			return x instanceof $WeakSet; // core-js workaround, pre-v3
		} catch (e) {}
		return false;
	};
} else {
	// eslint-disable-next-line no-unused-vars
	module.exports = function isWeakSet(x) {
		// `WeakSet` does not exist, or does not have a `has` method
		return false;
	};
}


/***/ }),

/***/ 5826:
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 6808:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ 6961:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.5
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else {}


/***/ }),

/***/ 631:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = __webpack_require__(4654);
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ 4244:
/***/ ((module) => {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ 609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var callBind = __webpack_require__(5559);

var implementation = __webpack_require__(4244);
var getPolyfill = __webpack_require__(5624);
var shim = __webpack_require__(2281);

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ 5624:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(4244);

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ 2281:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getPolyfill = __webpack_require__(5624);
var define = __webpack_require__(4289);

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ 8987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(1414); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ 2215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(1414);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(8987);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ 1414:
/***/ ((module) => {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ 2837:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var objectKeys = __webpack_require__(2215);
var hasSymbols = __webpack_require__(5419)();
var callBound = __webpack_require__(1924);
var toObject = Object;
var $push = callBound('Array.prototype.push');
var $propIsEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
	if (target == null) { throw new TypeError('target must be an object'); }
	var to = toObject(target); // step 1
	if (arguments.length === 1) {
		return to; // step 2
	}
	for (var s = 1; s < arguments.length; ++s) {
		var from = toObject(arguments[s]); // step 3.a.i

		// step 3.a.ii:
		var keys = objectKeys(from);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			var syms = getSymbols(from);
			for (var j = 0; j < syms.length; ++j) {
				var key = syms[j];
				if ($propIsEnumerable(from, key)) {
					$push(keys, key);
				}
			}
		}

		// step 3.a.iii:
		for (var i = 0; i < keys.length; ++i) {
			var nextKey = keys[i];
			if ($propIsEnumerable(from, nextKey)) { // step 3.a.iii.2
				var propValue = from[nextKey]; // step 3.a.iii.2.a
				to[nextKey] = propValue; // step 3.a.iii.2.b
			}
		}
	}

	return to; // step 4
};


/***/ }),

/***/ 3533:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var defineProperties = __webpack_require__(4289);
var callBind = __webpack_require__(5559);

var implementation = __webpack_require__(2837);
var getPolyfill = __webpack_require__(8162);
var shim = __webpack_require__(4489);

var polyfill = callBind.apply(getPolyfill());
// eslint-disable-next-line no-unused-vars
var bound = function assign(target, source1) {
	return polyfill(Object, arguments);
};

defineProperties(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ 8162:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(2837);

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	/*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	/*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ 4489:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var getPolyfill = __webpack_require__(8162);

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ 7354:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.printIteratorEntries = printIteratorEntries;
exports.printIteratorValues = printIteratorValues;
exports.printListItems = printListItems;
exports.printObjectProperties = printObjectProperties;

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
const getKeysOfEnumerableProperties = (object, compareKeys) => {
  const keys = Object.keys(object).sort(compareKeys);

  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(object).forEach(symbol => {
      if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) {
        keys.push(symbol);
      }
    });
  }

  return keys;
};
/**
 * Return entries (for example, of a map)
 * with spacing, indentation, and comma
 * without surrounding punctuation (for example, braces)
 */

function printIteratorEntries(
  iterator,
  config,
  indentation,
  depth,
  refs,
  printer, // Too bad, so sad that separator for ECMAScript Map has been ' => '
  // What a distracting diff if you change a data structure to/from
  // ECMAScript Object or Immutable.Map/OrderedMap which use the default.
  separator = ': '
) {
  let result = '';
  let current = iterator.next();

  if (!current.done) {
    result += config.spacingOuter;
    const indentationNext = indentation + config.indent;

    while (!current.done) {
      const name = printer(
        current.value[0],
        config,
        indentationNext,
        depth,
        refs
      );
      const value = printer(
        current.value[1],
        config,
        indentationNext,
        depth,
        refs
      );
      result += indentationNext + name + separator + value;
      current = iterator.next();

      if (!current.done) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}
/**
 * Return values (for example, of a set)
 * with spacing, indentation, and comma
 * without surrounding punctuation (braces or brackets)
 */

function printIteratorValues(
  iterator,
  config,
  indentation,
  depth,
  refs,
  printer
) {
  let result = '';
  let current = iterator.next();

  if (!current.done) {
    result += config.spacingOuter;
    const indentationNext = indentation + config.indent;

    while (!current.done) {
      result +=
        indentationNext +
        printer(current.value, config, indentationNext, depth, refs);
      current = iterator.next();

      if (!current.done) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}
/**
 * Return items (for example, of an array)
 * with spacing, indentation, and comma
 * without surrounding punctuation (for example, brackets)
 **/

function printListItems(list, config, indentation, depth, refs, printer) {
  let result = '';

  if (list.length) {
    result += config.spacingOuter;
    const indentationNext = indentation + config.indent;

    for (let i = 0; i < list.length; i++) {
      result += indentationNext;

      if (i in list) {
        result += printer(list[i], config, indentationNext, depth, refs);
      }

      if (i < list.length - 1) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}
/**
 * Return properties of an object
 * with spacing, indentation, and comma
 * without surrounding punctuation (for example, braces)
 */

function printObjectProperties(val, config, indentation, depth, refs, printer) {
  let result = '';
  const keys = getKeysOfEnumerableProperties(val, config.compareKeys);

  if (keys.length) {
    result += config.spacingOuter;
    const indentationNext = indentation + config.indent;

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const name = printer(key, config, indentationNext, depth, refs);
      const value = printer(val[key], config, indentationNext, depth, refs);
      result += indentationNext + name + ': ' + value;

      if (i < keys.length - 1) {
        result += ',' + config.spacingInner;
      } else if (!config.min) {
        result += ',';
      }
    }

    result += config.spacingOuter + indentation;
  }

  return result;
}


/***/ }),

/***/ 5914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = void 0;
exports.WU = format;
exports.plugins = void 0;

var _ansiStyles = _interopRequireDefault(__webpack_require__(7761));

var _collections = __webpack_require__(7354);

var _AsymmetricMatcher = _interopRequireDefault(
  __webpack_require__(9071)
);

var _ConvertAnsi = _interopRequireDefault(__webpack_require__(4990));

var _DOMCollection = _interopRequireDefault(__webpack_require__(10));

var _DOMElement = _interopRequireDefault(__webpack_require__(3195));

var _Immutable = _interopRequireDefault(__webpack_require__(4558));

var _ReactElement = _interopRequireDefault(__webpack_require__(5661));

var _ReactTestComponent = _interopRequireDefault(
  __webpack_require__(2893)
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable local/ban-types-eventually */
const toString = Object.prototype.toString;
const toISOString = Date.prototype.toISOString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
/**
 * Explicitly comparing typeof constructor to function avoids undefined as name
 * when mock identity-obj-proxy returns the key as the value for any key.
 */

const getConstructorName = val =>
  (typeof val.constructor === 'function' && val.constructor.name) || 'Object';
/* global window */

/** Is val is equal to global window object? Works even if it does not exist :) */

const isWindow = val => typeof window !== 'undefined' && val === window;

const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
const NEWLINE_REGEXP = /\n/gi;

class PrettyFormatPluginError extends Error {
  constructor(message, stack) {
    super(message);
    this.stack = stack;
    this.name = this.constructor.name;
  }
}

function isToStringedArrayType(toStringed) {
  return (
    toStringed === '[object Array]' ||
    toStringed === '[object ArrayBuffer]' ||
    toStringed === '[object DataView]' ||
    toStringed === '[object Float32Array]' ||
    toStringed === '[object Float64Array]' ||
    toStringed === '[object Int8Array]' ||
    toStringed === '[object Int16Array]' ||
    toStringed === '[object Int32Array]' ||
    toStringed === '[object Uint8Array]' ||
    toStringed === '[object Uint8ClampedArray]' ||
    toStringed === '[object Uint16Array]' ||
    toStringed === '[object Uint32Array]'
  );
}

function printNumber(val) {
  return Object.is(val, -0) ? '-0' : String(val);
}

function printBigInt(val) {
  return String(`${val}n`);
}

function printFunction(val, printFunctionName) {
  if (!printFunctionName) {
    return '[Function]';
  }

  return '[Function ' + (val.name || 'anonymous') + ']';
}

function printSymbol(val) {
  return String(val).replace(SYMBOL_REGEXP, 'Symbol($1)');
}

function printError(val) {
  return '[' + errorToString.call(val) + ']';
}
/**
 * The first port of call for printing an object, handles most of the
 * data-types in JS.
 */

function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
  if (val === true || val === false) {
    return '' + val;
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (val === null) {
    return 'null';
  }

  const typeOf = typeof val;

  if (typeOf === 'number') {
    return printNumber(val);
  }

  if (typeOf === 'bigint') {
    return printBigInt(val);
  }

  if (typeOf === 'string') {
    if (escapeString) {
      return '"' + val.replace(/"|\\/g, '\\$&') + '"';
    }

    return '"' + val + '"';
  }

  if (typeOf === 'function') {
    return printFunction(val, printFunctionName);
  }

  if (typeOf === 'symbol') {
    return printSymbol(val);
  }

  const toStringed = toString.call(val);

  if (toStringed === '[object WeakMap]') {
    return 'WeakMap {}';
  }

  if (toStringed === '[object WeakSet]') {
    return 'WeakSet {}';
  }

  if (
    toStringed === '[object Function]' ||
    toStringed === '[object GeneratorFunction]'
  ) {
    return printFunction(val, printFunctionName);
  }

  if (toStringed === '[object Symbol]') {
    return printSymbol(val);
  }

  if (toStringed === '[object Date]') {
    return isNaN(+val) ? 'Date { NaN }' : toISOString.call(val);
  }

  if (toStringed === '[object Error]') {
    return printError(val);
  }

  if (toStringed === '[object RegExp]') {
    if (escapeRegex) {
      // https://github.com/benjamingr/RegExp.escape/blob/main/polyfill.js
      return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    return regExpToString.call(val);
  }

  if (val instanceof Error) {
    return printError(val);
  }

  return null;
}
/**
 * Handles more complex objects ( such as objects with circular references.
 * maps and sets etc )
 */

function printComplexValue(
  val,
  config,
  indentation,
  depth,
  refs,
  hasCalledToJSON
) {
  if (refs.indexOf(val) !== -1) {
    return '[Circular]';
  }

  refs = refs.slice();
  refs.push(val);
  const hitMaxDepth = ++depth > config.maxDepth;
  const min = config.min;

  if (
    config.callToJSON &&
    !hitMaxDepth &&
    val.toJSON &&
    typeof val.toJSON === 'function' &&
    !hasCalledToJSON
  ) {
    return printer(val.toJSON(), config, indentation, depth, refs, true);
  }

  const toStringed = toString.call(val);

  if (toStringed === '[object Arguments]') {
    return hitMaxDepth
      ? '[Arguments]'
      : (min ? '' : 'Arguments ') +
          '[' +
          (0, _collections.printListItems)(
            val,
            config,
            indentation,
            depth,
            refs,
            printer
          ) +
          ']';
  }

  if (isToStringedArrayType(toStringed)) {
    return hitMaxDepth
      ? '[' + val.constructor.name + ']'
      : (min
          ? ''
          : !config.printBasicPrototype && val.constructor.name === 'Array'
          ? ''
          : val.constructor.name + ' ') +
          '[' +
          (0, _collections.printListItems)(
            val,
            config,
            indentation,
            depth,
            refs,
            printer
          ) +
          ']';
  }

  if (toStringed === '[object Map]') {
    return hitMaxDepth
      ? '[Map]'
      : 'Map {' +
          (0, _collections.printIteratorEntries)(
            val.entries(),
            config,
            indentation,
            depth,
            refs,
            printer,
            ' => '
          ) +
          '}';
  }

  if (toStringed === '[object Set]') {
    return hitMaxDepth
      ? '[Set]'
      : 'Set {' +
          (0, _collections.printIteratorValues)(
            val.values(),
            config,
            indentation,
            depth,
            refs,
            printer
          ) +
          '}';
  } // Avoid failure to serialize global window object in jsdom test environment.
  // For example, not even relevant if window is prop of React element.

  return hitMaxDepth || isWindow(val)
    ? '[' + getConstructorName(val) + ']'
    : (min
        ? ''
        : !config.printBasicPrototype && getConstructorName(val) === 'Object'
        ? ''
        : getConstructorName(val) + ' ') +
        '{' +
        (0, _collections.printObjectProperties)(
          val,
          config,
          indentation,
          depth,
          refs,
          printer
        ) +
        '}';
}

function isNewPlugin(plugin) {
  return plugin.serialize != null;
}

function printPlugin(plugin, val, config, indentation, depth, refs) {
  let printed;

  try {
    printed = isNewPlugin(plugin)
      ? plugin.serialize(val, config, indentation, depth, refs, printer)
      : plugin.print(
          val,
          valChild => printer(valChild, config, indentation, depth, refs),
          str => {
            const indentationNext = indentation + config.indent;
            return (
              indentationNext +
              str.replace(NEWLINE_REGEXP, '\n' + indentationNext)
            );
          },
          {
            edgeSpacing: config.spacingOuter,
            min: config.min,
            spacing: config.spacingInner
          },
          config.colors
        );
  } catch (error) {
    throw new PrettyFormatPluginError(error.message, error.stack);
  }

  if (typeof printed !== 'string') {
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
    );
  }

  return printed;
}

function findPlugin(plugins, val) {
  for (let p = 0; p < plugins.length; p++) {
    try {
      if (plugins[p].test(val)) {
        return plugins[p];
      }
    } catch (error) {
      throw new PrettyFormatPluginError(error.message, error.stack);
    }
  }

  return null;
}

function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
  const plugin = findPlugin(config.plugins, val);

  if (plugin !== null) {
    return printPlugin(plugin, val, config, indentation, depth, refs);
  }

  const basicResult = printBasicValue(
    val,
    config.printFunctionName,
    config.escapeRegex,
    config.escapeString
  );

  if (basicResult !== null) {
    return basicResult;
  }

  return printComplexValue(
    val,
    config,
    indentation,
    depth,
    refs,
    hasCalledToJSON
  );
}

const DEFAULT_THEME = {
  comment: 'gray',
  content: 'reset',
  prop: 'yellow',
  tag: 'cyan',
  value: 'green'
};
const DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
const DEFAULT_OPTIONS = {
  callToJSON: true,
  compareKeys: undefined,
  escapeRegex: false,
  escapeString: true,
  highlight: false,
  indent: 2,
  maxDepth: Infinity,
  min: false,
  plugins: [],
  printBasicPrototype: true,
  printFunctionName: true,
  theme: DEFAULT_THEME
};
__webpack_unused_export__ = DEFAULT_OPTIONS;

function validateOptions(options) {
  Object.keys(options).forEach(key => {
    if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
      throw new Error(`pretty-format: Unknown option "${key}".`);
    }
  });

  if (options.min && options.indent !== undefined && options.indent !== 0) {
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  }

  if (options.theme !== undefined) {
    if (options.theme === null) {
      throw new Error('pretty-format: Option "theme" must not be null.');
    }

    if (typeof options.theme !== 'object') {
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
      );
    }
  }
}

const getColorsHighlight = options =>
  DEFAULT_THEME_KEYS.reduce((colors, key) => {
    const value =
      options.theme && options.theme[key] !== undefined
        ? options.theme[key]
        : DEFAULT_THEME[key];
    const color = value && _ansiStyles.default[value];

    if (
      color &&
      typeof color.close === 'string' &&
      typeof color.open === 'string'
    ) {
      colors[key] = color;
    } else {
      throw new Error(
        `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
      );
    }

    return colors;
  }, Object.create(null));

const getColorsEmpty = () =>
  DEFAULT_THEME_KEYS.reduce((colors, key) => {
    colors[key] = {
      close: '',
      open: ''
    };
    return colors;
  }, Object.create(null));

const getPrintFunctionName = options =>
  options && options.printFunctionName !== undefined
    ? options.printFunctionName
    : DEFAULT_OPTIONS.printFunctionName;

const getEscapeRegex = options =>
  options && options.escapeRegex !== undefined
    ? options.escapeRegex
    : DEFAULT_OPTIONS.escapeRegex;

const getEscapeString = options =>
  options && options.escapeString !== undefined
    ? options.escapeString
    : DEFAULT_OPTIONS.escapeString;

const getConfig = options => {
  var _options$printBasicPr;

  return {
    callToJSON:
      options && options.callToJSON !== undefined
        ? options.callToJSON
        : DEFAULT_OPTIONS.callToJSON,
    colors:
      options && options.highlight
        ? getColorsHighlight(options)
        : getColorsEmpty(),
    compareKeys:
      options && typeof options.compareKeys === 'function'
        ? options.compareKeys
        : DEFAULT_OPTIONS.compareKeys,
    escapeRegex: getEscapeRegex(options),
    escapeString: getEscapeString(options),
    indent:
      options && options.min
        ? ''
        : createIndent(
            options && options.indent !== undefined
              ? options.indent
              : DEFAULT_OPTIONS.indent
          ),
    maxDepth:
      options && options.maxDepth !== undefined
        ? options.maxDepth
        : DEFAULT_OPTIONS.maxDepth,
    min:
      options && options.min !== undefined ? options.min : DEFAULT_OPTIONS.min,
    plugins:
      options && options.plugins !== undefined
        ? options.plugins
        : DEFAULT_OPTIONS.plugins,
    printBasicPrototype:
      (_options$printBasicPr =
        options === null || options === void 0
          ? void 0
          : options.printBasicPrototype) !== null &&
      _options$printBasicPr !== void 0
        ? _options$printBasicPr
        : true,
    printFunctionName: getPrintFunctionName(options),
    spacingInner: options && options.min ? ' ' : '\n',
    spacingOuter: options && options.min ? '' : '\n'
  };
};

function createIndent(indent) {
  return new Array(indent + 1).join(' ');
}
/**
 * Returns a presentation string of your `val` object
 * @param val any potential JavaScript object
 * @param options Custom settings
 */

function format(val, options) {
  if (options) {
    validateOptions(options);

    if (options.plugins) {
      const plugin = findPlugin(options.plugins, val);

      if (plugin !== null) {
        return printPlugin(plugin, val, getConfig(options), '', 0, []);
      }
    }
  }

  const basicResult = printBasicValue(
    val,
    getPrintFunctionName(options),
    getEscapeRegex(options),
    getEscapeString(options)
  );

  if (basicResult !== null) {
    return basicResult;
  }

  return printComplexValue(val, getConfig(options), '', 0, []);
}

const plugins = {
  AsymmetricMatcher: _AsymmetricMatcher.default,
  ConvertAnsi: _ConvertAnsi.default,
  DOMCollection: _DOMCollection.default,
  DOMElement: _DOMElement.default,
  Immutable: _Immutable.default,
  ReactElement: _ReactElement.default,
  ReactTestComponent: _ReactTestComponent.default
};
exports.plugins = plugins;
var _default = format;
__webpack_unused_export__ = _default;


/***/ }),

/***/ 9071:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.test = exports.serialize = exports["default"] = void 0;

var _collections = __webpack_require__(7354);

var global = (function () {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  } else if (typeof global !== 'undefined') {
    return global;
  } else if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else {
    return Function('return this')();
  }
})();

var Symbol = global['jest-symbol-do-not-touch'] || global.Symbol;
const asymmetricMatcher =
  typeof Symbol === 'function' && Symbol.for
    ? Symbol.for('jest.asymmetricMatcher')
    : 0x1357a5;
const SPACE = ' ';

const serialize = (val, config, indentation, depth, refs, printer) => {
  const stringedValue = val.toString();

  if (
    stringedValue === 'ArrayContaining' ||
    stringedValue === 'ArrayNotContaining'
  ) {
    if (++depth > config.maxDepth) {
      return '[' + stringedValue + ']';
    }

    return (
      stringedValue +
      SPACE +
      '[' +
      (0, _collections.printListItems)(
        val.sample,
        config,
        indentation,
        depth,
        refs,
        printer
      ) +
      ']'
    );
  }

  if (
    stringedValue === 'ObjectContaining' ||
    stringedValue === 'ObjectNotContaining'
  ) {
    if (++depth > config.maxDepth) {
      return '[' + stringedValue + ']';
    }

    return (
      stringedValue +
      SPACE +
      '{' +
      (0, _collections.printObjectProperties)(
        val.sample,
        config,
        indentation,
        depth,
        refs,
        printer
      ) +
      '}'
    );
  }

  if (
    stringedValue === 'StringMatching' ||
    stringedValue === 'StringNotMatching'
  ) {
    return (
      stringedValue +
      SPACE +
      printer(val.sample, config, indentation, depth, refs)
    );
  }

  if (
    stringedValue === 'StringContaining' ||
    stringedValue === 'StringNotContaining'
  ) {
    return (
      stringedValue +
      SPACE +
      printer(val.sample, config, indentation, depth, refs)
    );
  }

  return val.toAsymmetricMatcher();
};

exports.serialize = serialize;

const test = val => val && val.$$typeof === asymmetricMatcher;

exports.test = test;
const plugin = {
  serialize,
  test
};
var _default = plugin;
exports["default"] = _default;


/***/ }),

/***/ 4990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.test = exports.serialize = exports["default"] = void 0;

var _ansiRegex = _interopRequireDefault(__webpack_require__(4277));

var _ansiStyles = _interopRequireDefault(__webpack_require__(7761));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const toHumanReadableAnsi = text =>
  text.replace((0, _ansiRegex.default)(), match => {
    switch (match) {
      case _ansiStyles.default.red.close:
      case _ansiStyles.default.green.close:
      case _ansiStyles.default.cyan.close:
      case _ansiStyles.default.gray.close:
      case _ansiStyles.default.white.close:
      case _ansiStyles.default.yellow.close:
      case _ansiStyles.default.bgRed.close:
      case _ansiStyles.default.bgGreen.close:
      case _ansiStyles.default.bgYellow.close:
      case _ansiStyles.default.inverse.close:
      case _ansiStyles.default.dim.close:
      case _ansiStyles.default.bold.close:
      case _ansiStyles.default.reset.open:
      case _ansiStyles.default.reset.close:
        return '</>';

      case _ansiStyles.default.red.open:
        return '<red>';

      case _ansiStyles.default.green.open:
        return '<green>';

      case _ansiStyles.default.cyan.open:
        return '<cyan>';

      case _ansiStyles.default.gray.open:
        return '<gray>';

      case _ansiStyles.default.white.open:
        return '<white>';

      case _ansiStyles.default.yellow.open:
        return '<yellow>';

      case _ansiStyles.default.bgRed.open:
        return '<bgRed>';

      case _ansiStyles.default.bgGreen.open:
        return '<bgGreen>';

      case _ansiStyles.default.bgYellow.open:
        return '<bgYellow>';

      case _ansiStyles.default.inverse.open:
        return '<inverse>';

      case _ansiStyles.default.dim.open:
        return '<dim>';

      case _ansiStyles.default.bold.open:
        return '<bold>';

      default:
        return '';
    }
  });

const test = val =>
  typeof val === 'string' && !!val.match((0, _ansiRegex.default)());

exports.test = test;

const serialize = (val, config, indentation, depth, refs, printer) =>
  printer(toHumanReadableAnsi(val), config, indentation, depth, refs);

exports.serialize = serialize;
const plugin = {
  serialize,
  test
};
var _default = plugin;
exports["default"] = _default;


/***/ }),

/***/ 10:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.test = exports.serialize = exports["default"] = void 0;

var _collections = __webpack_require__(7354);

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable local/ban-types-eventually */
const SPACE = ' ';
const OBJECT_NAMES = ['DOMStringMap', 'NamedNodeMap'];
const ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;

const testName = name =>
  OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);

const test = val =>
  val &&
  val.constructor &&
  !!val.constructor.name &&
  testName(val.constructor.name);

exports.test = test;

const isNamedNodeMap = collection =>
  collection.constructor.name === 'NamedNodeMap';

const serialize = (collection, config, indentation, depth, refs, printer) => {
  const name = collection.constructor.name;

  if (++depth > config.maxDepth) {
    return '[' + name + ']';
  }

  return (
    (config.min ? '' : name + SPACE) +
    (OBJECT_NAMES.indexOf(name) !== -1
      ? '{' +
        (0, _collections.printObjectProperties)(
          isNamedNodeMap(collection)
            ? Array.from(collection).reduce((props, attribute) => {
                props[attribute.name] = attribute.value;
                return props;
              }, {})
            : {...collection},
          config,
          indentation,
          depth,
          refs,
          printer
        ) +
        '}'
      : '[' +
        (0, _collections.printListItems)(
          Array.from(collection),
          config,
          indentation,
          depth,
          refs,
          printer
        ) +
        ']')
  );
};

exports.serialize = serialize;
const plugin = {
  serialize,
  test
};
var _default = plugin;
exports["default"] = _default;


/***/ }),

/***/ 3195:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.test = exports.serialize = exports["default"] = void 0;

var _markup = __webpack_require__(713);

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;
const FRAGMENT_NODE = 11;
const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;

const testHasAttribute = val => {
  try {
    return typeof val.hasAttribute === 'function' && val.hasAttribute('is');
  } catch {
    return false;
  }
};

const testNode = val => {
  const constructorName = val.constructor.name;
  const {nodeType, tagName} = val;
  const isCustomElement =
    (typeof tagName === 'string' && tagName.includes('-')) ||
    testHasAttribute(val);
  return (
    (nodeType === ELEMENT_NODE &&
      (ELEMENT_REGEXP.test(constructorName) || isCustomElement)) ||
    (nodeType === TEXT_NODE && constructorName === 'Text') ||
    (nodeType === COMMENT_NODE && constructorName === 'Comment') ||
    (nodeType === FRAGMENT_NODE && constructorName === 'DocumentFragment')
  );
};

const test = val => {
  var _val$constructor;

  return (
    (val === null || val === void 0
      ? void 0
      : (_val$constructor = val.constructor) === null ||
        _val$constructor === void 0
      ? void 0
      : _val$constructor.name) && testNode(val)
  );
};

exports.test = test;

function nodeIsText(node) {
  return node.nodeType === TEXT_NODE;
}

function nodeIsComment(node) {
  return node.nodeType === COMMENT_NODE;
}

function nodeIsFragment(node) {
  return node.nodeType === FRAGMENT_NODE;
}

const serialize = (node, config, indentation, depth, refs, printer) => {
  if (nodeIsText(node)) {
    return (0, _markup.printText)(node.data, config);
  }

  if (nodeIsComment(node)) {
    return (0, _markup.printComment)(node.data, config);
  }

  const type = nodeIsFragment(node)
    ? 'DocumentFragment'
    : node.tagName.toLowerCase();

  if (++depth > config.maxDepth) {
    return (0, _markup.printElementAsLeaf)(type, config);
  }

  return (0, _markup.printElement)(
    type,
    (0, _markup.printProps)(
      nodeIsFragment(node)
        ? []
        : Array.from(node.attributes)
            .map(attr => attr.name)
            .sort(),
      nodeIsFragment(node)
        ? {}
        : Array.from(node.attributes).reduce((props, attribute) => {
            props[attribute.name] = attribute.value;
            return props;
          }, {}),
      config,
      indentation + config.indent,
      depth,
      refs,
      printer
    ),
    (0, _markup.printChildren)(
      Array.prototype.slice.call(node.childNodes || node.children),
      config,
      indentation + config.indent,
      depth,
      refs,
      printer
    ),
    config,
    indentation
  );
};

exports.serialize = serialize;
const plugin = {
  serialize,
  test
};
var _default = plugin;
exports["default"] = _default;


/***/ }),

/***/ 4558:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.test = exports.serialize = exports["default"] = void 0;

var _collections = __webpack_require__(7354);

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// SENTINEL constants are from https://github.com/facebook/immutable-js
const IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
const IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';
const IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
const IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';
const IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';
const IS_RECORD_SENTINEL = '@@__IMMUTABLE_RECORD__@@'; // immutable v4

const IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';
const IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';
const IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

const getImmutableName = name => 'Immutable.' + name;

const printAsLeaf = name => '[' + name + ']';

const SPACE = ' ';
const LAZY = '…'; // Seq is lazy if it calls a method like filter

const printImmutableEntries = (
  val,
  config,
  indentation,
  depth,
  refs,
  printer,
  type
) =>
  ++depth > config.maxDepth
    ? printAsLeaf(getImmutableName(type))
    : getImmutableName(type) +
      SPACE +
      '{' +
      (0, _collections.printIteratorEntries)(
        val.entries(),
        config,
        indentation,
        depth,
        refs,
        printer
      ) +
      '}'; // Record has an entries method because it is a collection in immutable v3.
// Return an iterator for Immutable Record from version v3 or v4.

function getRecordEntries(val) {
  let i = 0;
  return {
    next() {
      if (i < val._keys.length) {
        const key = val._keys[i++];
        return {
          done: false,
          value: [key, val.get(key)]
        };
      }

      return {
        done: true,
        value: undefined
      };
    }
  };
}

const printImmutableRecord = (
  val,
  config,
  indentation,
  depth,
  refs,
  printer
) => {
  // _name property is defined only for an Immutable Record instance
  // which was constructed with a second optional descriptive name arg
  const name = getImmutableName(val._name || 'Record');
  return ++depth > config.maxDepth
    ? printAsLeaf(name)
    : name +
        SPACE +
        '{' +
        (0, _collections.printIteratorEntries)(
          getRecordEntries(val),
          config,
          indentation,
          depth,
          refs,
          printer
        ) +
        '}';
};

const printImmutableSeq = (val, config, indentation, depth, refs, printer) => {
  const name = getImmutableName('Seq');

  if (++depth > config.maxDepth) {
    return printAsLeaf(name);
  }

  if (val[IS_KEYED_SENTINEL]) {
    return (
      name +
      SPACE +
      '{' + // from Immutable collection of entries or from ECMAScript object
      (val._iter || val._object
        ? (0, _collections.printIteratorEntries)(
            val.entries(),
            config,
            indentation,
            depth,
            refs,
            printer
          )
        : LAZY) +
      '}'
    );
  }

  return (
    name +
    SPACE +
    '[' +
    (val._iter || // from Immutable collection of values
    val._array || // from ECMAScript array
    val._collection || // from ECMAScript collection in immutable v4
    val._iterable // from ECMAScript collection in immutable v3
      ? (0, _collections.printIteratorValues)(
          val.values(),
          config,
          indentation,
          depth,
          refs,
          printer
        )
      : LAZY) +
    ']'
  );
};

const printImmutableValues = (
  val,
  config,
  indentation,
  depth,
  refs,
  printer,
  type
) =>
  ++depth > config.maxDepth
    ? printAsLeaf(getImmutableName(type))
    : getImmutableName(type) +
      SPACE +
      '[' +
      (0, _collections.printIteratorValues)(
        val.values(),
        config,
        indentation,
        depth,
        refs,
        printer
      ) +
      ']';

const serialize = (val, config, indentation, depth, refs, printer) => {
  if (val[IS_MAP_SENTINEL]) {
    return printImmutableEntries(
      val,
      config,
      indentation,
      depth,
      refs,
      printer,
      val[IS_ORDERED_SENTINEL] ? 'OrderedMap' : 'Map'
    );
  }

  if (val[IS_LIST_SENTINEL]) {
    return printImmutableValues(
      val,
      config,
      indentation,
      depth,
      refs,
      printer,
      'List'
    );
  }

  if (val[IS_SET_SENTINEL]) {
    return printImmutableValues(
      val,
      config,
      indentation,
      depth,
      refs,
      printer,
      val[IS_ORDERED_SENTINEL] ? 'OrderedSet' : 'Set'
    );
  }

  if (val[IS_STACK_SENTINEL]) {
    return printImmutableValues(
      val,
      config,
      indentation,
      depth,
      refs,
      printer,
      'Stack'
    );
  }

  if (val[IS_SEQ_SENTINEL]) {
    return printImmutableSeq(val, config, indentation, depth, refs, printer);
  } // For compatibility with immutable v3 and v4, let record be the default.

  return printImmutableRecord(val, config, indentation, depth, refs, printer);
}; // Explicitly comparing sentinel properties to true avoids false positive
// when mock identity-obj-proxy returns the key as the value for any key.

exports.serialize = serialize;

const test = val =>
  val &&
  (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);

exports.test = test;
const plugin = {
  serialize,
  test
};
var _default = plugin;
exports["default"] = _default;


/***/ }),

/***/ 5661:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.test = exports.serialize = exports["default"] = void 0;

var ReactIs = _interopRequireWildcard(__webpack_require__(9864));

var _markup = __webpack_require__(713);

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Given element.props.children, or subtree during recursive traversal,
// return flattened array of children.
const getChildren = (arg, children = []) => {
  if (Array.isArray(arg)) {
    arg.forEach(item => {
      getChildren(item, children);
    });
  } else if (arg != null && arg !== false) {
    children.push(arg);
  }

  return children;
};

const getType = element => {
  const type = element.type;

  if (typeof type === 'string') {
    return type;
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || 'Unknown';
  }

  if (ReactIs.isFragment(element)) {
    return 'React.Fragment';
  }

  if (ReactIs.isSuspense(element)) {
    return 'React.Suspense';
  }

  if (typeof type === 'object' && type !== null) {
    if (ReactIs.isContextProvider(element)) {
      return 'Context.Provider';
    }

    if (ReactIs.isContextConsumer(element)) {
      return 'Context.Consumer';
    }

    if (ReactIs.isForwardRef(element)) {
      if (type.displayName) {
        return type.displayName;
      }

      const functionName = type.render.displayName || type.render.name || '';
      return functionName !== ''
        ? 'ForwardRef(' + functionName + ')'
        : 'ForwardRef';
    }

    if (ReactIs.isMemo(element)) {
      const functionName =
        type.displayName || type.type.displayName || type.type.name || '';
      return functionName !== '' ? 'Memo(' + functionName + ')' : 'Memo';
    }
  }

  return 'UNDEFINED';
};

const getPropKeys = element => {
  const {props} = element;
  return Object.keys(props)
    .filter(key => key !== 'children' && props[key] !== undefined)
    .sort();
};

const serialize = (element, config, indentation, depth, refs, printer) =>
  ++depth > config.maxDepth
    ? (0, _markup.printElementAsLeaf)(getType(element), config)
    : (0, _markup.printElement)(
        getType(element),
        (0, _markup.printProps)(
          getPropKeys(element),
          element.props,
          config,
          indentation + config.indent,
          depth,
          refs,
          printer
        ),
        (0, _markup.printChildren)(
          getChildren(element.props.children),
          config,
          indentation + config.indent,
          depth,
          refs,
          printer
        ),
        config,
        indentation
      );

exports.serialize = serialize;

const test = val => val != null && ReactIs.isElement(val);

exports.test = test;
const plugin = {
  serialize,
  test
};
var _default = plugin;
exports["default"] = _default;


/***/ }),

/***/ 2893:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.test = exports.serialize = exports["default"] = void 0;

var _markup = __webpack_require__(713);

var global = (function () {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  } else if (typeof global !== 'undefined') {
    return global;
  } else if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else {
    return Function('return this')();
  }
})();

var Symbol = global['jest-symbol-do-not-touch'] || global.Symbol;
const testSymbol =
  typeof Symbol === 'function' && Symbol.for
    ? Symbol.for('react.test.json')
    : 0xea71357;

const getPropKeys = object => {
  const {props} = object;
  return props
    ? Object.keys(props)
        .filter(key => props[key] !== undefined)
        .sort()
    : [];
};

const serialize = (object, config, indentation, depth, refs, printer) =>
  ++depth > config.maxDepth
    ? (0, _markup.printElementAsLeaf)(object.type, config)
    : (0, _markup.printElement)(
        object.type,
        object.props
          ? (0, _markup.printProps)(
              getPropKeys(object),
              object.props,
              config,
              indentation + config.indent,
              depth,
              refs,
              printer
            )
          : '',
        object.children
          ? (0, _markup.printChildren)(
              object.children,
              config,
              indentation + config.indent,
              depth,
              refs,
              printer
            )
          : '',
        config,
        indentation
      );

exports.serialize = serialize;

const test = val => val && val.$$typeof === testSymbol;

exports.test = test;
const plugin = {
  serialize,
  test
};
var _default = plugin;
exports["default"] = _default;


/***/ }),

/***/ 2023:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = escapeHTML;

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function escapeHTML(str) {
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


/***/ }),

/***/ 713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.printText =
  exports.printProps =
  exports.printElementAsLeaf =
  exports.printElement =
  exports.printComment =
  exports.printChildren =
    void 0;

var _escapeHTML = _interopRequireDefault(__webpack_require__(2023));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Return empty string if keys is empty.
const printProps = (keys, props, config, indentation, depth, refs, printer) => {
  const indentationNext = indentation + config.indent;
  const colors = config.colors;
  return keys
    .map(key => {
      const value = props[key];
      let printed = printer(value, config, indentationNext, depth, refs);

      if (typeof value !== 'string') {
        if (printed.indexOf('\n') !== -1) {
          printed =
            config.spacingOuter +
            indentationNext +
            printed +
            config.spacingOuter +
            indentation;
        }

        printed = '{' + printed + '}';
      }

      return (
        config.spacingInner +
        indentation +
        colors.prop.open +
        key +
        colors.prop.close +
        '=' +
        colors.value.open +
        printed +
        colors.value.close
      );
    })
    .join('');
}; // Return empty string if children is empty.

exports.printProps = printProps;

const printChildren = (children, config, indentation, depth, refs, printer) =>
  children
    .map(
      child =>
        config.spacingOuter +
        indentation +
        (typeof child === 'string'
          ? printText(child, config)
          : printer(child, config, indentation, depth, refs))
    )
    .join('');

exports.printChildren = printChildren;

const printText = (text, config) => {
  const contentColor = config.colors.content;
  return (
    contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close
  );
};

exports.printText = printText;

const printComment = (comment, config) => {
  const commentColor = config.colors.comment;
  return (
    commentColor.open +
    '<!--' +
    (0, _escapeHTML.default)(comment) +
    '-->' +
    commentColor.close
  );
}; // Separate the functions to format props, children, and element,
// so a plugin could override a particular function, if needed.
// Too bad, so sad: the traditional (but unnecessary) space
// in a self-closing tagColor requires a second test of printedProps.

exports.printComment = printComment;

const printElement = (
  type,
  printedProps,
  printedChildren,
  config,
  indentation
) => {
  const tagColor = config.colors.tag;
  return (
    tagColor.open +
    '<' +
    type +
    (printedProps &&
      tagColor.close +
        printedProps +
        config.spacingOuter +
        indentation +
        tagColor.open) +
    (printedChildren
      ? '>' +
        tagColor.close +
        printedChildren +
        config.spacingOuter +
        indentation +
        tagColor.open +
        '</' +
        type
      : (printedProps && !config.min ? '' : ' ') + '/') +
    '>' +
    tagColor.close
  );
};

exports.printElement = printElement;

const printElementAsLeaf = (type, config) => {
  const tagColor = config.colors.tag;
  return (
    tagColor.open +
    '<' +
    type +
    tagColor.close +
    ' …' +
    tagColor.open +
    ' />' +
    tagColor.close
  );
};

exports.printElementAsLeaf = printElementAsLeaf;


/***/ }),

/***/ 7761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


const ANSI_BACKGROUND_OFFSET = 10;

const wrapAnsi256 = (offset = 0) => code => `\u001B[${38 + offset};5;${code}m`;

const wrapAnsi16m = (offset = 0) => (red, green, blue) => `\u001B[${38 + offset};2;${red};${green};${blue}m`;

function assembleStyles() {
	const codes = new Map();
	const styles = {
		modifier: {
			reset: [0, 0],
			// 21 isn't widely supported and 22 does the same thing
			bold: [1, 22],
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			overline: [53, 55],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		color: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],

			// Bright color
			blackBright: [90, 39],
			redBright: [91, 39],
			greenBright: [92, 39],
			yellowBright: [93, 39],
			blueBright: [94, 39],
			magentaBright: [95, 39],
			cyanBright: [96, 39],
			whiteBright: [97, 39]
		},
		bgColor: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49],

			// Bright color
			bgBlackBright: [100, 49],
			bgRedBright: [101, 49],
			bgGreenBright: [102, 49],
			bgYellowBright: [103, 49],
			bgBlueBright: [104, 49],
			bgMagentaBright: [105, 49],
			bgCyanBright: [106, 49],
			bgWhiteBright: [107, 49]
		}
	};

	// Alias bright black as gray (and grey)
	styles.color.gray = styles.color.blackBright;
	styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
	styles.color.grey = styles.color.blackBright;
	styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;

	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u001B[${style[0]}m`,
				close: `\u001B[${style[1]}m`
			};

			group[styleName] = styles[styleName];

			codes.set(style[0], style[1]);
		}

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	}

	Object.defineProperty(styles, 'codes', {
		value: codes,
		enumerable: false
	});

	styles.color.close = '\u001B[39m';
	styles.bgColor.close = '\u001B[49m';

	styles.color.ansi256 = wrapAnsi256();
	styles.color.ansi16m = wrapAnsi16m();
	styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
	styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);

	// From https://github.com/Qix-/color-convert/blob/3f0e0d4e92e235796ccb17f6e85c72094a651f49/conversions.js
	Object.defineProperties(styles, {
		rgbToAnsi256: {
			value: (red, green, blue) => {
				// We use the extended greyscale palette here, with the exception of
				// black and white. normal palette only has 4 greyscale shades.
				if (red === green && green === blue) {
					if (red < 8) {
						return 16;
					}

					if (red > 248) {
						return 231;
					}

					return Math.round(((red - 8) / 247) * 24) + 232;
				}

				return 16 +
					(36 * Math.round(red / 255 * 5)) +
					(6 * Math.round(green / 255 * 5)) +
					Math.round(blue / 255 * 5);
			},
			enumerable: false
		},
		hexToRgb: {
			value: hex => {
				const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
				if (!matches) {
					return [0, 0, 0];
				}

				let {colorString} = matches.groups;

				if (colorString.length === 3) {
					colorString = colorString.split('').map(character => character + character).join('');
				}

				const integer = Number.parseInt(colorString, 16);

				return [
					(integer >> 16) & 0xFF,
					(integer >> 8) & 0xFF,
					integer & 0xFF
				];
			},
			enumerable: false
		},
		hexToAnsi256: {
			value: hex => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
			enumerable: false
		}
	});

	return styles;
}

// Make the export immutable
Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});


/***/ }),

/***/ 8531:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k=__webpack_require__(9617),l=__webpack_require__(3743);function m(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function n(a){if(m(a)!==a)throw Error("Unable to find node on an unmounted component.");}
function p(a){var b=a.alternate;if(!b){b=m(a);if(null===b)throw Error("Unable to find node on an unmounted component.");return b!==a?null:a}for(var c=a,d=b;;){var f=c.return;if(null===f)break;var g=f.alternate;if(null===g){d=f.return;if(null!==d){c=d;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===c)return n(f),a;if(g===d)return n(f),b;g=g.sibling}throw Error("Unable to find node on an unmounted component.");}if(c.return!==d.return)c=f,d=g;else{for(var e=!1,h=f.child;h;){if(h===c){e=
!0;c=f;d=g;break}if(h===d){e=!0;d=f;c=g;break}h=h.sibling}if(!e){for(h=g.child;h;){if(h===c){e=!0;c=g;d=f;break}if(h===d){e=!0;d=g;c=f;break}h=h.sibling}if(!e)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");}}if(c.alternate!==d)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");}if(3!==c.tag)throw Error("Unable to find node on an unmounted component.");
return c.stateNode.current===c?a:b}var q=Object.assign;function r(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function t(){return!0}function u(){return!1}
function v(a){function b(c,b,f,g,e){this._reactName=c;this._targetInst=f;this.type=b;this.nativeEvent=g;this.target=e;this.currentTarget=null;for(var d in a)a.hasOwnProperty(d)&&(c=a[d],this[d]=c?c(g):g[d]);this.isDefaultPrevented=(null!=g.defaultPrevented?g.defaultPrevented:!1===g.returnValue)?t:u;this.isPropagationStopped=u;return this}q(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=t)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=t)},persist:function(){},isPersistent:t});return b}var w={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},x=v(w),y=q({},w,{view:0,detail:0});v(y);
var z,A,B,D=q({},y,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:C,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in a)return a.movementX;a!==B&&(B&&"mousemove"===a.type?(z=a.screenX-B.screenX,A=a.screenY-B.screenY):A=z=0,B=a);return z},movementY:function(a){return"movementY"in a?a.movementY:A}});
v(D);var E=q({},D,{dataTransfer:0});v(E);var F=q({},y,{relatedTarget:0});v(F);var aa=q({},w,{animationName:0,elapsedTime:0,pseudoElement:0});v(aa);var ba=q({},w,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}});v(ba);var ca=q({},w,{data:0});v(ca);
var da={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ea={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fa={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ha(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=fa[a])?!!b[a]:!1}function C(){return ha}
var ia=q({},y,{key:function(a){if(a.key){var b=da[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=r(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?ea[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:C,charCode:function(a){return"keypress"===a.type?r(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?r(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}});v(ia);var ja=q({},D,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0});v(ja);var ka=q({},y,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:C});v(ka);var la=q({},w,{propertyName:0,elapsedTime:0,pseudoElement:0});v(la);
var ma=q({},D,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0});v(ma);function na(a,b,c,d,f,g,e,h,N){var G=Array.prototype.slice.call(arguments,3);try{b.apply(c,G)}catch(oa){this.onError(oa)}}var H=!1,I=null,J=!1,K=null,pa={onError:function(a){H=!0;I=a}};function qa(a,b,c,d,f,g,e,h,N){H=!1;I=null;na.apply(pa,arguments)}
function ra(a,b,c,d,f,g,e,h,N){qa.apply(this,arguments);if(H){if(H){var G=I;H=!1;I=null}else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");J||(J=!0,K=G)}}var L=Array.isArray,M=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,sa=M[0],ta=M[1],ua=M[2],va=M[3],wa=M[4],xa=k.unstable_act;function ya(){}
function za(a,b){if(!a)return[];a=p(a);if(!a)return[];for(var c=a,d=[];;){if(5===c.tag||6===c.tag||1===c.tag||0===c.tag){var f=c.stateNode;b(f)&&d.push(f)}if(c.child)c.child.return=c,c=c.child;else{if(c===a)return d;for(;!c.sibling;){if(!c.return||c.return===a)return d;c=c.return}c.sibling.return=c.return;c=c.sibling}}}
function O(a,b){if(a&&!a._reactInternals){var c=String(a);a=L(a)?"an array":a&&1===a.nodeType&&a.tagName?"a DOM node":"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c;throw Error(b+"(...): the first argument must be a React class instance. Instead received: "+(a+"."));}}function P(a){return!(!a||1!==a.nodeType||!a.tagName)}function Q(a){return P(a)?!1:null!=a&&"function"===typeof a.render&&"function"===typeof a.setState}
function R(a,b){return Q(a)?a._reactInternals.type===b:!1}function S(a,b){O(a,"findAllInRenderedTree");return a?za(a._reactInternals,b):[]}
function T(a,b){O(a,"scryRenderedDOMComponentsWithClass");return S(a,function(a){if(P(a)){var c=a.className;"string"!==typeof c&&(c=a.getAttribute("class")||"");var f=c.split(/\s+/);if(!L(b)){if(void 0===b)throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");b=b.split(/\s+/)}return b.every(function(a){return-1!==f.indexOf(a)})}return!1})}
function U(a,b){O(a,"scryRenderedDOMComponentsWithTag");return S(a,function(a){return P(a)&&a.tagName.toUpperCase()===b.toUpperCase()})}function V(a,b){O(a,"scryRenderedComponentsWithType");return S(a,function(a){return R(a,b)})}function W(a,b,c){var d=a.type||"unknown-event";a.currentTarget=ta(c);ra(d,b,void 0,a);a.currentTarget=null}
function X(a,b,c){for(var d=[];a;){d.push(a);do a=a.return;while(a&&5!==a.tag);a=a?a:null}for(a=d.length;0<a--;)b(d[a],"captured",c);for(a=0;a<d.length;a++)b(d[a],"bubbled",c)}
function Y(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error("Expected `"+
b+"` listener to be a function, instead got a value of `"+typeof c+"` type.");return c}function Aa(a,b,c){a&&c&&c._reactName&&(b=Y(a,c._reactName))&&(null==c._dispatchListeners&&(c._dispatchListeners=[]),null==c._dispatchInstances&&(c._dispatchInstances=[]),c._dispatchListeners.push(b),c._dispatchInstances.push(a))}
function Ba(a,b,c){var d=c._reactName;"captured"===b&&(d+="Capture");if(b=Y(a,d))null==c._dispatchListeners&&(c._dispatchListeners=[]),null==c._dispatchInstances&&(c._dispatchInstances=[]),c._dispatchListeners.push(b),c._dispatchInstances.push(a)}var Z={},Ca=new Set(["mouseEnter","mouseLeave","pointerEnter","pointerLeave"]);
function Da(a){return function(b,c){if(k.isValidElement(b))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");if(Q(b))throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");var d="on"+a[0].toUpperCase()+
a.slice(1),f=new ya;f.target=b;f.type=a.toLowerCase();var g=sa(b),e=new x(d,f.type,g,f,b);e.persist();q(e,c);Ca.has(a)?e&&e._reactName&&Aa(e._targetInst,null,e):e&&e._reactName&&X(e._targetInst,Ba,e);l.unstable_batchedUpdates(function(){va(b);if(e){var a=e._dispatchListeners,c=e._dispatchInstances;if(L(a))for(var d=0;d<a.length&&!e.isPropagationStopped();d++)W(e,a[d],c[d]);else a&&W(e,a,c);e._dispatchListeners=null;e._dispatchInstances=null;e.isPersistent()||e.constructor.release(e)}if(J)throw a=
K,J=!1,K=null,a;});wa()}}
"blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(a){Z[a]=Da(a)});
__webpack_unused_export__=Z;exports.act=xa;__webpack_unused_export__=S;__webpack_unused_export__=function(a,b){O(a,"findRenderedComponentWithType");a=V(a,b);if(1!==a.length)throw Error("Did not find exactly one match (found: "+a.length+") for componentType:"+b);return a[0]};__webpack_unused_export__=function(a,b){O(a,"findRenderedDOMComponentWithClass");a=T(a,b);if(1!==a.length)throw Error("Did not find exactly one match (found: "+a.length+") for class:"+b);return a[0]};
__webpack_unused_export__=function(a,b){O(a,"findRenderedDOMComponentWithTag");a=U(a,b);if(1!==a.length)throw Error("Did not find exactly one match (found: "+a.length+") for tag:"+b);return a[0]};__webpack_unused_export__=Q;__webpack_unused_export__=R;__webpack_unused_export__=P;__webpack_unused_export__=function(a){return!!(a&&k.isValidElement(a)&&a.tagName)};__webpack_unused_export__=function(a){return k.isValidElement(a)};
__webpack_unused_export__=function(a,b){return k.isValidElement(a)&&a.type===b};__webpack_unused_export__=function(a,b){b=b||a.mockTagName||"div";a.prototype.render.mockImplementation(function(){return k.createElement(b,null,this.props.children)});return this};__webpack_unused_export__=function(a,b){return{touches:[{pageX:a,pageY:b}]}};__webpack_unused_export__=function(a){var b=document.createElement("div");return l.render(a,b)};__webpack_unused_export__=V;
__webpack_unused_export__=T;__webpack_unused_export__=U;__webpack_unused_export__=X;


/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var m = __webpack_require__(3743);
if (true) {
  exports.s = m.createRoot;
  exports.a = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 8267:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(8531);
} else {}


/***/ }),

/***/ 9921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=60103,c=60106,d=60107,e=60108,f=60114,g=60109,h=60110,k=60112,l=60113,m=60120,n=60115,p=60116,q=60121,r=60122,u=60117,v=60129,w=60131;
if("function"===typeof Symbol&&Symbol.for){var x=Symbol.for;b=x("react.element");c=x("react.portal");d=x("react.fragment");e=x("react.strict_mode");f=x("react.profiler");g=x("react.provider");h=x("react.context");k=x("react.forward_ref");l=x("react.suspense");m=x("react.suspense_list");n=x("react.memo");p=x("react.lazy");q=x("react.block");r=x("react.server.block");u=x("react.fundamental");v=x("react.debug_trace_mode");w=x("react.legacy_hidden")}
function y(a){if("object"===typeof a&&null!==a){var t=a.$$typeof;switch(t){case b:switch(a=a.type,a){case d:case f:case e:case l:case m:return a;default:switch(a=a&&a.$$typeof,a){case h:case k:case p:case n:case g:return a;default:return t}}case c:return t}}}var z=g,A=b,B=k,C=d,D=p,E=n,F=c,G=f,H=e,I=l;exports.ContextConsumer=h;exports.ContextProvider=z;exports.Element=A;exports.ForwardRef=B;exports.Fragment=C;exports.Lazy=D;exports.Memo=E;exports.Portal=F;exports.Profiler=G;exports.StrictMode=H;
exports.Suspense=I;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return y(a)===h};exports.isContextProvider=function(a){return y(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return y(a)===k};exports.isFragment=function(a){return y(a)===d};exports.isLazy=function(a){return y(a)===p};exports.isMemo=function(a){return y(a)===n};
exports.isPortal=function(a){return y(a)===c};exports.isProfiler=function(a){return y(a)===f};exports.isStrictMode=function(a){return y(a)===e};exports.isSuspense=function(a){return y(a)===l};exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===v||a===e||a===l||a===m||a===w||"object"===typeof a&&null!==a&&(a.$$typeof===p||a.$$typeof===n||a.$$typeof===g||a.$$typeof===h||a.$$typeof===k||a.$$typeof===u||a.$$typeof===q||a[0]===r)?!0:!1};
exports.typeOf=y;


/***/ }),

/***/ 9864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(9921);
} else {}


/***/ }),

/***/ 3697:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var functionsHaveConfigurableNames = (__webpack_require__(5972).functionsHaveConfigurableNames)();

var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.hasIndices) {
		result += 'd';
	}
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.unicodeSets) {
		result += 'v';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};

if (functionsHaveConfigurableNames && Object.defineProperty) {
	Object.defineProperty(module.exports, "name", ({ value: 'get flags' }));
}


/***/ }),

/***/ 2847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__(4289);
var callBind = __webpack_require__(5559);

var implementation = __webpack_require__(3697);
var getPolyfill = __webpack_require__(1721);
var shim = __webpack_require__(2753);

var flagsBound = callBind(getPolyfill());

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),

/***/ 1721:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__(3697);

var supportsDescriptors = (__webpack_require__(4289).supportsDescriptors);
var $gOPD = Object.getOwnPropertyDescriptor;

module.exports = function getPolyfill() {
	if (supportsDescriptors && (/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (
			descriptor
			&& typeof descriptor.get === 'function'
			&& typeof RegExp.prototype.dotAll === 'boolean'
			&& typeof RegExp.prototype.hasIndices === 'boolean'
		) {
			/* eslint getter-return: 0 */
			var calls = '';
			var o = {};
			Object.defineProperty(o, 'hasIndices', {
				get: function () {
					calls += 'd';
				}
			});
			Object.defineProperty(o, 'sticky', {
				get: function () {
					calls += 'y';
				}
			});
			if (calls === 'dy') {
				return descriptor.get;
			}
		}
	}
	return implementation;
};


/***/ }),

/***/ 2753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var supportsDescriptors = (__webpack_require__(4289).supportsDescriptors);
var getPolyfill = __webpack_require__(1721);
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),

/***/ 7478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__(210);
var callBound = __webpack_require__(1924);
var inspect = __webpack_require__(631);

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ 6373:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var SLOT = __webpack_require__(9496);

var $SyntaxError = SyntaxError;
var $StopIteration = typeof StopIteration === 'object' ? StopIteration : null;

module.exports = function getStopIterationIterator(origIterator) {
	if (!$StopIteration) {
		throw new $SyntaxError('this environment lacks StopIteration');
	}

	SLOT.set(origIterator, '[[Done]]', false);

	var siIterator = {
		next: function next() {
			var iterator = SLOT.get(this, '[[Iterator]]');
			var done = SLOT.get(iterator, '[[Done]]');
			try {
				return {
					done: done,
					value: done ? void undefined : iterator.next()
				};
			} catch (e) {
				SLOT.set(iterator, '[[Done]]', true);
				if (e !== $StopIteration) {
					throw e;
				}
				return {
					done: true,
					value: void undefined
				};
			}
		}
	};

	SLOT.set(siIterator, '[[Iterator]]', origIterator);

	return siIterator;
};


/***/ }),

/***/ 3679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isString = __webpack_require__(9981);
var isNumber = __webpack_require__(4578);
var isBoolean = __webpack_require__(6814);
var isSymbol = __webpack_require__(2636);
var isBigInt = __webpack_require__(3376);

// eslint-disable-next-line consistent-return
module.exports = function whichBoxedPrimitive(value) {
	// eslint-disable-next-line eqeqeq
	if (value == null || (typeof value !== 'object' && typeof value !== 'function')) {
		return null;
	}
	if (isString(value)) {
		return 'String';
	}
	if (isNumber(value)) {
		return 'Number';
	}
	if (isBoolean(value)) {
		return 'Boolean';
	}
	if (isSymbol(value)) {
		return 'Symbol';
	}
	if (isBigInt(value)) {
		return 'BigInt';
	}
};


/***/ }),

/***/ 6430:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var forEach = __webpack_require__(4029);
var availableTypedArrays = __webpack_require__(3083);
var callBound = __webpack_require__(1924);
var gOPD = __webpack_require__(7296);

var $toString = callBound('Object.prototype.toString');
var hasToStringTag = __webpack_require__(6410)();

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;
var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof g[typedArray] === 'function') {
			var arr = new g[typedArray]();
			if (Symbol.toStringTag in arr) {
				var proto = getPrototypeOf(arr);
				var descriptor = gOPD(proto, Symbol.toStringTag);
				if (!descriptor) {
					var superProto = getPrototypeOf(proto);
					descriptor = gOPD(superProto, Symbol.toStringTag);
				}
				toStrTags[typedArray] = descriptor.get;
			}
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __webpack_require__(5692);

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag || !(Symbol.toStringTag in value)) { return $slice($toString(value), 8, -1); }
	return tryTypedArrays(value);
};


/***/ }),

/***/ 9617:
/***/ ((module) => {

"use strict";
module.exports = require("React");

/***/ }),

/***/ 3743:
/***/ ((module) => {

"use strict";
module.exports = require("ReactDOM");

/***/ }),

/***/ 4654:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3083:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var possibleNames = [
	'BigInt64Array',
	'BigUint64Array',
	'Float32Array',
	'Float64Array',
	'Int16Array',
	'Int32Array',
	'Int8Array',
	'Uint16Array',
	'Uint32Array',
	'Uint8Array',
	'Uint8ClampedArray'
];

var g = typeof globalThis === 'undefined' ? __webpack_require__.g : globalThis;

module.exports = function availableTypedArrays() {
	var out = [];
	for (var i = 0; i < possibleNames.length; i++) {
		if (typeof g[possibleNames[i]] === 'function') {
			out[out.length] = possibleNames[i];
		}
	}
	return out;
};


/***/ }),

/***/ 3216:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* eslint global-require: 0 */
// the code is structured this way so that bundlers can
// alias out `has-symbols` to `() => true` or `() => false` if your target
// environments' Symbol capabilities are known, and then use
// dead code elimination on the rest of this module.
//
// Similarly, `isarray` can be aliased to `Array.isArray` if
// available in all target environments.

var isArguments = __webpack_require__(2584);
var getStopIterationIterator = __webpack_require__(6373);

if (__webpack_require__(1405)() || __webpack_require__(5419)()) {
	var $iterator = Symbol.iterator;
	// Symbol is available natively or shammed
	// natively:
	//  - Chrome >= 38
	//  - Edge 12-14?, Edge >= 15 for sure
	//  - FF >= 36
	//  - Safari >= 9
	//  - node >= 0.12
	module.exports = function getIterator(iterable) {
		// alternatively, `iterable[$iterator]?.()`
		if (iterable != null && typeof iterable[$iterator] !== 'undefined') {
			return iterable[$iterator]();
		}
		if (isArguments(iterable)) {
			// arguments objects lack Symbol.iterator
			// - node 0.12
			return Array.prototype[$iterator].call(iterable);
		}
	};
} else {
	// Symbol is not available, native or shammed
	var isArray = __webpack_require__(5826);
	var isString = __webpack_require__(9981);
	var GetIntrinsic = __webpack_require__(210);
	var $Map = GetIntrinsic('%Map%', true);
	var $Set = GetIntrinsic('%Set%', true);
	var callBound = __webpack_require__(1924);
	var $arrayPush = callBound('Array.prototype.push');
	var $charCodeAt = callBound('String.prototype.charCodeAt');
	var $stringSlice = callBound('String.prototype.slice');

	var advanceStringIndex = function advanceStringIndex(S, index) {
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}

		var first = $charCodeAt(S, index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}

		var second = $charCodeAt(S, index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}

		return index + 2;
	};

	var getArrayIterator = function getArrayIterator(arraylike) {
		var i = 0;
		return {
			next: function next() {
				var done = i >= arraylike.length;
				var value;
				if (!done) {
					value = arraylike[i];
					i += 1;
				}
				return {
					done: done,
					value: value
				};
			}
		};
	};

	var getNonCollectionIterator = function getNonCollectionIterator(iterable, noPrimordialCollections) {
		if (isArray(iterable) || isArguments(iterable)) {
			return getArrayIterator(iterable);
		}
		if (isString(iterable)) {
			var i = 0;
			return {
				next: function next() {
					var nextIndex = advanceStringIndex(iterable, i);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					return {
						done: nextIndex > iterable.length,
						value: value
					};
				}
			};
		}

		// es6-shim and es-shims' es-map use a string "_es6-shim iterator_" property on different iterables, such as MapIterator.
		if (noPrimordialCollections && typeof iterable['_es6-shim iterator_'] !== 'undefined') {
			return iterable['_es6-shim iterator_']();
		}
	};

	if (!$Map && !$Set) {
		// the only language iterables are Array, String, arguments
		// - Safari <= 6.0
		// - Chrome < 38
		// - node < 0.12
		// - FF < 13
		// - IE < 11
		// - Edge < 11

		module.exports = function getIterator(iterable) {
			if (iterable != null) {
				return getNonCollectionIterator(iterable, true);
			}
		};
	} else {
		// either Map or Set are available, but Symbol is not
		// - es6-shim on an ES5 browser
		// - Safari 6.2 (maybe 6.1?)
		// - FF v[13, 36)
		// - IE 11
		// - Edge 11
		// - Safari v[6, 9)

		var isMap = __webpack_require__(8379);
		var isSet = __webpack_require__(9572);

		// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
		var $mapForEach = callBound('Map.prototype.forEach', true);
		var $setForEach = callBound('Set.prototype.forEach', true);
		if (typeof process === 'undefined' || !process.versions || !process.versions.node) { // "if is not node"

			// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either
			// returns a value, or throws a StopIteration object. These browsers
			// do not have any other mechanism for iteration.
			var $mapIterator = callBound('Map.prototype.iterator', true);
			var $setIterator = callBound('Set.prototype.iterator', true);
		}
		// Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
		// this returns a proper iterator object, so we should use it instead of forEach.
		// newer es6-shim versions use a string "_es6-shim iterator_" property.
		var $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);
		var $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);

		var getCollectionIterator = function getCollectionIterator(iterable) {
			if (isMap(iterable)) {
				if ($mapIterator) {
					return getStopIterationIterator($mapIterator(iterable));
				}
				if ($mapAtAtIterator) {
					return $mapAtAtIterator(iterable);
				}
				if ($mapForEach) {
					var entries = [];
					$mapForEach(iterable, function (v, k) {
						$arrayPush(entries, [k, v]);
					});
					return getArrayIterator(entries);
				}
			}
			if (isSet(iterable)) {
				if ($setIterator) {
					return getStopIterationIterator($setIterator(iterable));
				}
				if ($setAtAtIterator) {
					return $setAtAtIterator(iterable);
				}
				if ($setForEach) {
					var values = [];
					$setForEach(iterable, function (v) {
						$arrayPush(values, v);
					});
					return getArrayIterator(values);
				}
			}
		};

		module.exports = function getIterator(iterable) {
			return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
		};
	}
}


/***/ }),

/***/ 3483:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isMap = __webpack_require__(8379);
var isSet = __webpack_require__(9572);
var isWeakMap = __webpack_require__(1718);
var isWeakSet = __webpack_require__(5899);

module.exports = function whichCollection(value) {
	if (value && typeof value === 'object') {
		if (isMap(value)) {
			return 'Map';
		}
		if (isSet(value)) {
			return 'Set';
		}
		if (isWeakMap(value)) {
			return 'WeakMap';
		}
		if (isWeakSet(value)) {
			return 'WeakSet';
		}
	}
	return false;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(9617);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);
// EXTERNAL MODULE: ./node_modules/react-dom/test-utils.js
var test_utils = __webpack_require__(8267);
// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(3743);
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/@testing-library/dom/dist/@testing-library/dom.esm.js + 8 modules
var dom_esm = __webpack_require__(1898);
;// CONCATENATED MODULE: ./node_modules/@testing-library/react/dist/@testing-library/react.esm.js







const domAct = test_utils.act;
function getGlobalThis() {
  /* istanbul ignore else */
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  /* istanbul ignore next */
  if (typeof self !== 'undefined') {
    return self;
  }
  /* istanbul ignore next */
  if (typeof window !== 'undefined') {
    return window;
  }
  /* istanbul ignore next */
  if (typeof __webpack_require__.g !== 'undefined') {
    return __webpack_require__.g;
  }
  /* istanbul ignore next */
  throw new Error('unable to locate global object');
}
function setIsReactActEnvironment(isReactActEnvironment) {
  getGlobalThis().IS_REACT_ACT_ENVIRONMENT = isReactActEnvironment;
}
function getIsReactActEnvironment() {
  return getGlobalThis().IS_REACT_ACT_ENVIRONMENT;
}
function withGlobalActEnvironment(actImplementation) {
  return callback => {
    const previousActEnvironment = getIsReactActEnvironment();
    setIsReactActEnvironment(true);
    try {
      // The return value of `act` is always a thenable.
      let callbackNeedsToBeAwaited = false;
      const actResult = actImplementation(() => {
        const result = callback();
        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
          callbackNeedsToBeAwaited = true;
        }
        return result;
      });
      if (callbackNeedsToBeAwaited) {
        const thenable = actResult;
        return {
          then: (resolve, reject) => {
            thenable.then(returnValue => {
              setIsReactActEnvironment(previousActEnvironment);
              resolve(returnValue);
            }, error => {
              setIsReactActEnvironment(previousActEnvironment);
              reject(error);
            });
          }
        };
      } else {
        setIsReactActEnvironment(previousActEnvironment);
        return actResult;
      }
    } catch (error) {
      // Can't be a `finally {}` block since we don't know if we have to immediately restore IS_REACT_ACT_ENVIRONMENT
      // or if we have to await the callback first.
      setIsReactActEnvironment(previousActEnvironment);
      throw error;
    }
  };
}
const act = withGlobalActEnvironment(domAct);

/* eslint no-console:0 */

// react-testing-library's version of fireEvent will call
// dom-testing-library's version of fireEvent. The reason
// we make this distinction however is because we have
// a few extra events that work a bit differently
const fireEvent = function () {
  return (0,dom_esm/* fireEvent */.BX)(...arguments);
};
Object.keys(dom_esm/* fireEvent */.BX).forEach(key => {
  fireEvent[key] = function () {
    return dom_esm/* fireEvent */.BX[key](...arguments);
  };
});

// React event system tracks native mouseOver/mouseOut events for
// running onMouseEnter/onMouseLeave handlers
// @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/EnterLeaveEventPlugin.js#L24-L31
const mouseEnter = fireEvent.mouseEnter;
const mouseLeave = fireEvent.mouseLeave;
fireEvent.mouseEnter = function () {
  mouseEnter(...arguments);
  return fireEvent.mouseOver(...arguments);
};
fireEvent.mouseLeave = function () {
  mouseLeave(...arguments);
  return fireEvent.mouseOut(...arguments);
};
const pointerEnter = fireEvent.pointerEnter;
const pointerLeave = fireEvent.pointerLeave;
fireEvent.pointerEnter = function () {
  pointerEnter(...arguments);
  return fireEvent.pointerOver(...arguments);
};
fireEvent.pointerLeave = function () {
  pointerLeave(...arguments);
  return fireEvent.pointerOut(...arguments);
};
const react_esm_select = fireEvent.select;
fireEvent.select = (node, init) => {
  react_esm_select(node, init);
  // React tracks this event only on focused inputs
  node.focus();

  // React creates this event when one of the following native events happens
  // - contextMenu
  // - mouseUp
  // - dragEnd
  // - keyUp
  // - keyDown
  // so we can use any here
  // @link https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/events/SelectEventPlugin.js#L203-L224
  fireEvent.keyUp(node, init);
};

// React event system tracks native focusout/focusin events for
// running blur/focus handlers
// @link https://github.com/facebook/react/pull/19186
const react_esm_blur = fireEvent.blur;
const react_esm_focus = fireEvent.focus;
fireEvent.blur = function () {
  fireEvent.focusOut(...arguments);
  return react_esm_blur(...arguments);
};
fireEvent.focus = function () {
  fireEvent.focusIn(...arguments);
  return react_esm_focus(...arguments);
};

function jestFakeTimersAreEnabled() {
  /* istanbul ignore else */
  if (typeof jest !== 'undefined' && jest !== null) {
    return (
      // legacy timers
      setTimeout._isMockFunction === true ||
      // modern timers
      // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
      Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    );
  } // istanbul ignore next

  return false;
}
(0,dom_esm/* configure */.jQ)({
  unstable_advanceTimersWrapper: cb => {
    return act(cb);
  },
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async cb => {
    const previousActEnvironment = getIsReactActEnvironment();
    setIsReactActEnvironment(false);
    try {
      const result = await cb();
      // Drain microtask queue.
      // Otherwise we'll restore the previous act() environment, before we resolve the `waitFor` call.
      // The caller would have no chance to wrap the in-flight Promises in `act()`
      await new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 0);
        if (jestFakeTimersAreEnabled()) {
          jest.advanceTimersByTime(0);
        }
      });
      return result;
    } finally {
      setIsReactActEnvironment(previousActEnvironment);
    }
  },
  eventWrapper: cb => {
    let result;
    act(() => {
      result = cb();
    });
    return result;
  }
});

// Ideally we'd just use a WeakMap where containers are keys and roots are values.
// We use two variables so that we can bail out in constant time when we render with a new container (most common use case)
/**
 * @type {Set<import('react-dom').Container>}
 */
const mountedContainers = new Set();
/**
 * @type Array<{container: import('react-dom').Container, root: ReturnType<typeof createConcurrentRoot>}>
 */
const mountedRootEntries = [];
function createConcurrentRoot(container, _ref) {
  let {
    hydrate,
    ui,
    wrapper: WrapperComponent
  } = _ref;
  let root;
  if (hydrate) {
    act(() => {
      root = client/* hydrateRoot */.a(container, WrapperComponent ? /*#__PURE__*/external_React_.createElement(WrapperComponent, null, ui) : ui);
    });
  } else {
    root = client/* createRoot */.s(container);
  }
  return {
    hydrate() {
      /* istanbul ignore if */
      if (!hydrate) {
        throw new Error('Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.');
      }
      // Nothing to do since hydration happens when creating the root object.
    },

    render(element) {
      root.render(element);
    },
    unmount() {
      root.unmount();
    }
  };
}
function createLegacyRoot(container) {
  return {
    hydrate(element) {
      external_ReactDOM_default().hydrate(element, container);
    },
    render(element) {
      external_ReactDOM_default().render(element, container);
    },
    unmount() {
      external_ReactDOM_default().unmountComponentAtNode(container);
    }
  };
}
function renderRoot(ui, _ref2) {
  let {
    baseElement,
    container,
    hydrate,
    queries,
    root,
    wrapper: WrapperComponent
  } = _ref2;
  const wrapUiIfNeeded = innerElement => WrapperComponent ? /*#__PURE__*/external_React_.createElement(WrapperComponent, null, innerElement) : innerElement;
  act(() => {
    if (hydrate) {
      root.hydrate(wrapUiIfNeeded(ui), container);
    } else {
      root.render(wrapUiIfNeeded(ui), container);
    }
  });
  return {
    container,
    baseElement,
    debug: function (el, maxLength, options) {
      if (el === void 0) {
        el = baseElement;
      }
      return Array.isArray(el) ?
      // eslint-disable-next-line no-console
      el.forEach(e => console.log((0,dom_esm/* prettyDOM */.vF)(e, maxLength, options))) :
      // eslint-disable-next-line no-console,
      console.log((0,dom_esm/* prettyDOM */.vF)(el, maxLength, options));
    },
    unmount: () => {
      act(() => {
        root.unmount();
      });
    },
    rerender: rerenderUi => {
      renderRoot(wrapUiIfNeeded(rerenderUi), {
        container,
        baseElement,
        root
      });
      // Intentionally do not return anything to avoid unnecessarily complicating the API.
      // folks can use all the same utilities we return in the first place that are bound to the container
    },

    asFragment: () => {
      /* istanbul ignore else (old jsdom limitation) */
      if (typeof document.createRange === 'function') {
        return document.createRange().createContextualFragment(container.innerHTML);
      } else {
        const template = document.createElement('template');
        template.innerHTML = container.innerHTML;
        return template.content;
      }
    },
    ...(0,dom_esm/* getQueriesForElement */.W2)(baseElement, queries)
  };
}
function render(ui, _temp) {
  let {
    container,
    baseElement = container,
    legacyRoot = false,
    queries,
    hydrate = false,
    wrapper
  } = _temp === void 0 ? {} : _temp;
  if (!baseElement) {
    // default to document.body instead of documentElement to avoid output of potentially-large
    // head elements (such as JSS style blocks) in debug output
    baseElement = document.body;
  }
  if (!container) {
    container = baseElement.appendChild(document.createElement('div'));
  }
  let root;
  // eslint-disable-next-line no-negated-condition -- we want to map the evolution of this over time. The root is created first. Only later is it re-used so we don't want to read the case that happens later first.
  if (!mountedContainers.has(container)) {
    const createRootImpl = legacyRoot ? createLegacyRoot : createConcurrentRoot;
    root = createRootImpl(container, {
      hydrate,
      ui,
      wrapper
    });
    mountedRootEntries.push({
      container,
      root
    });
    // we'll add it to the mounted containers regardless of whether it's actually
    // added to document.body so the cleanup method works regardless of whether
    // they're passing us a custom container or not.
    mountedContainers.add(container);
  } else {
    mountedRootEntries.forEach(rootEntry => {
      // Else is unreachable since `mountedContainers` has the `container`.
      // Only reachable if one would accidentally add the container to `mountedContainers` but not the root to `mountedRootEntries`
      /* istanbul ignore else */
      if (rootEntry.container === container) {
        root = rootEntry.root;
      }
    });
  }
  return renderRoot(ui, {
    container,
    baseElement,
    queries,
    hydrate,
    wrapper,
    root
  });
}
function cleanup() {
  mountedRootEntries.forEach(_ref3 => {
    let {
      root,
      container
    } = _ref3;
    act(() => {
      root.unmount();
    });
    if (container.parentNode === document.body) {
      document.body.removeChild(container);
    }
  });
  mountedRootEntries.length = 0;
  mountedContainers.clear();
}
function renderHook(renderCallback, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    initialProps,
    ...renderOptions
  } = options;
  const result = /*#__PURE__*/React.createRef();
  function TestComponent(_ref4) {
    let {
      renderCallbackProps
    } = _ref4;
    const pendingResult = renderCallback(renderCallbackProps);
    React.useEffect(() => {
      result.current = pendingResult;
    });
    return null;
  }
  const {
    rerender: baseRerender,
    unmount
  } = render( /*#__PURE__*/React.createElement(TestComponent, {
    renderCallbackProps: initialProps
  }), renderOptions);
  function rerender(rerenderCallbackProps) {
    return baseRerender( /*#__PURE__*/React.createElement(TestComponent, {
      renderCallbackProps: rerenderCallbackProps
    }));
  }
  return {
    result,
    rerender,
    unmount
  };
}

/* eslint func-name-matching:0 */

// if we're running in a test runner that supports afterEach
// or teardown then we'll automatically run cleanup afterEach test
// this ensures that tests run in isolation from each other
// if you don't like this then either import the `pure` module
// or set the RTL_SKIP_AUTO_CLEANUP env variable to 'true'.
if (typeof process === 'undefined' || !process.env?.RTL_SKIP_AUTO_CLEANUP) {
  // ignore teardown() in code coverage because Jest does not support it
  /* istanbul ignore else */
  if (typeof afterEach === 'function') {
    afterEach(() => {
      cleanup();
    });
  } else if (typeof teardown === 'function') {
    // Block is guarded by `typeof` check.
    // eslint does not support `typeof` guards.
    // eslint-disable-next-line no-undef
    teardown(() => {
      cleanup();
    });
  }

  // No test setup with other test runners available
  /* istanbul ignore else */
  if (typeof beforeAll === 'function' && typeof afterAll === 'function') {
    // This matches the behavior of React < 18.
    let previousIsReactActEnvironment = getIsReactActEnvironment();
    beforeAll(() => {
      previousIsReactActEnvironment = getIsReactActEnvironment();
      setIsReactActEnvironment(true);
    });
    afterAll(() => {
      setIsReactActEnvironment(previousIsReactActEnvironment);
    });
  }
}



// EXTERNAL MODULE: ./src/util/core/element.js
var core_element = __webpack_require__(3302);
;// CONCATENATED MODULE: ./src/util/core/element.test.js



const test_html = `
<div id="root">
  <header id="header" class="page-header">header</header>
  <div class="page-body">
    <span class="foo">foo</span>
    <div class="parent parent-1">
      <div class="child child-1">
        <div class="grandchild grandchild-1">grandchild</div>
      </div>
    </div>
    <div class="parent parent-2">
      <div class="child child-2">
        <div class="grandchild grandchild-2">grandchild</div>
      </div>
    </div>
    <ul class="list">
      <li class="item item-1">item 1</li>
      <li class="item item-2">item 2</li>
      <li class="item item-3">item 3</li>
      <li class="item item-4">item 4</li>
      <li class="item item-5">item 5</li>
    </ul>
    <div class="earth outer-earth">
      <div class="earth middle-earth">
        <div class="earth inner-earth">
          <span id="frodo" class="frodo">baggins</span>
        </div>
      </div>
    </div>
    <div class="content">
      some content
      <button id="btn">click me</button>
      <a href="#footer">link to footer</a>
    </div>
  </div>
  <footer id="footer">footer</footer>
</div>
`;
describe('element.js', () => {
  beforeEach(() => {
    document.body.innerHTML = test_html;
  });
  test('util/element.isElement', () => {
    const element = (0,core_element.getElement)('.foo');
    expect((0,core_element.isElement)(element)).toBe(true);
    expect((0,core_element.isElement)(element.childNodes[0])).toBe(true);
    expect((0,core_element.isElement)('foo')).toBe(false);
  });
  test('util/element.getElement', () => {
    const element = (0,core_element.getElement)('.foo');
    expect(element).toBeTruthy();
    expect(element.classList[0]).toBe('foo');
  });
  test('util/element.gebi', () => {
    const element = (0,core_element.gebi)('root');
    expect(element).toBeTruthy();
    expect(element.id).toBe('root');
  });
  test('util/element.qsa', () => {
    const elements = (0,core_element.qsa)('.grandchild');
    expect(Array.isArray(elements)).toBe(true);
    expect(elements).toHaveLength(2);
    const last = elements[elements.length - 1];
    expect(last.classList[0]).toBe('grandchild');
    const parent2 = document.querySelector('.parent-2');
    const within = (0,core_element.qsa)(parent2, '.grandchild');
    expect(Array.isArray(within)).toBe(true);
    expect(within).toHaveLength(1);
    expect(within[0]).toHaveClass('grandchild-2');
    expect(parent2).toContainElement(within[0]);
  });
  test('util/element.qs', () => {
    const element = (0,core_element.qs)('.grandchild');
    expect(Array.isArray(element)).toBe(false);
    expect(element).toHaveClass('grandchild-1');
    expect(element.classList.contains('grandchild-2')).toBe(false);
    const parent2 = document.querySelector('.parent-2');
    const within = (0,core_element.qs)(parent2, '.grandchild');
    expect(Array.isArray(within)).toBe(false);
    expect(within).toHaveClass('grandchild-2');
    expect(parent2).toContainElement(within);
  });
  test('util/element.closest', () => {
    let element = (0,core_element.closest)('.frodo', '.earth');
    expect(element).toHaveClass('earth');
    expect(element).toHaveClass('inner-earth');
    expect(element.classList.contains('middle-earth')).toBe(false);
    const frodo = document.getElementById('frodo');
    element = (0,core_element.closest)(frodo, '.earth');
    expect(element).toHaveClass('earth');
    expect(element).toHaveClass('inner-earth');
    expect(element.classList.contains('middle-earth')).toBe(false);
    expect((0,core_element.closest)('.frodo', '.non-existent-class')).toBeNull();
  });
  test('util/element.addClass', () => {
    const element = (0,core_element.addClass)('.frodo', 'hobbit');
    expect(element).toHaveClass('hobbit');
  });
  test('util/element.removeClass', () => {
    const element = (0,core_element.removeClass)('.parent.parent-1', 'parent-1');
    expect(element).toHaveClass('parent');
    expect(element.classList.contains('parent-1')).toBe(false);
  });
  test('util/element.after', () => {
    const p2 = (0,core_element.getElement)('.parent.parent-2');
    const p3 = p2.cloneNode(true);
    p3.classList.remove('parent-2');
    p3.classList.add('parent-3');
    (0,core_element.after)(p2, p3);
    expect(p2.nextElementSibling === p3).toBe(true);
  });
  test('util/element.before', () => {
    const p1 = (0,core_element.getElement)('.parent.parent-1');
    const p0 = p1.cloneNode(true);
    p0.classList.remove('parent-1');
    p0.classList.add('parent-0');
    (0,core_element.before)(p1, p0);
    expect(p1.previousElementSibling === p0).toBe(true);
  });
  test('util/element.append', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const favorite = document.createElement('div');
    favorite.classList.add('child');
    favorite.classList.add('child-favorite');
    (0,core_element.append)(p1, favorite);
    const last = p1.childNodes[p1.childNodes.length - 1];
    expect(last === favorite).toBe(true);
    expect(last).toHaveClass('child-favorite');
  });
  test('util/element.prepend', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const favorite = document.createElement('div');
    favorite.classList.add('child');
    favorite.classList.add('child-favorite');
    (0,core_element.prepend)(p1, favorite);
    const first = p1.childNodes[0];
    expect(first === favorite).toBe(true);
    expect(first).toHaveClass('child-favorite');
  });
  test('util/element.contains', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const child = p1.childNodes[0];
    expect((0,core_element.contains)(p1, child)).toBe(true);
  });
  test('util/element.remove', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const originalChildCount = p1.childNodes.length;
    const child = document.querySelector('.parent.parent-1 .child-1');
    expect(p1.contains(child)).toBe(true);
    (0,core_element.remove)(child);
    expect(p1.contains(child)).toBe(false);
    expect(p1.childNodes).toHaveLength(originalChildCount - 1);
  });
  test('util/element.css', () => {
    const p1 = document.querySelector('.parent.parent-1');
    p1.style.backgroundColor = 'red';
    expect(p1.style.backgroundColor).toBe('red');
    expect((0,core_element.css)(p1, 'background-color')).toBe('red');
    expect((0,core_element.css)(p1, 'backgroundColor')).toBe('red');
    (0,core_element.css)(p1, 'background-color', '#06c');
    expect(p1.style.backgroundColor).toBe('rgb(0, 102, 204)');
    (0,core_element.css)(p1, 'backgroundColor', '#369');
    expect(p1.style.backgroundColor).toBe('rgb(51, 102, 153)');
  });
  test('util/element.text', () => {
    const p1 = document.getElementById('frodo');
    expect((0,core_element.text)(p1)).toBe('baggins');
    (0,core_element.text)(p1, 'simpson');
    expect(p1.textContent).toBe('simpson');
  });
  test('util/element.html', () => {
    const inner = document.querySelector('.earth.inner-earth');
    const sam = '<span id="samwise" class="samwise">gamgee</span>';
    (0,core_element.html)(inner, sam);
    expect(inner.innerHTML).toMatch(sam);
    expect(inner.childNodes[0]).toHaveClass('samwise');
  });
  test('util/element.create', () => {
    const created = (0,core_element.create)('<div class="pops">pops<span class="junior">junior</span></div>');
    expect(created).toHaveClass('pops');
    expect(created.childElementCount).toBe(1);
    expect(created.textContent).toMatch('pops');
    expect(created.querySelector('.junior')).toBeTruthy();
    expect(created.querySelector('.junior')).toHaveTextContent('junior');
  });
  test('util/element.hasClass', () => {
    const p = document.querySelector('.parent.parent-1');
    expect((0,core_element.hasClass)(p, 'parent-1')).toBe(true);
    expect((0,core_element.hasClass)(p, 'parent-2')).toBe(false);
  });
  test('util/element.toggleClass', () => {
    const p = document.querySelector('.parent.parent-1');
    (0,core_element.toggleClass)(p, 'parent-1');
    (0,core_element.toggleClass)(p, 'parent-2');
    expect(p).toHaveClass('parent-2');
    expect(p.classList.contains('parent-1')).toBe(false);
  });
  test('util/element.index', () => {
    const item2 = document.querySelector('.list .item-2');
    expect((0,core_element.index)(item2)).toBe(1);
    expect((0,core_element.index)('#im-not-here')).toBe(-1);
  });
  test('util/element.is', () => {
    const item2 = document.querySelector('.list .item-2');
    expect((0,core_element.is)(item2, '.item')).toBe(true);
    expect((0,core_element.is)(item2, 'li')).toBe(true);
    expect((0,core_element.is)(item2, 'ul')).toBe(false);
  });
  test('util/element.next', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const p2 = document.querySelector('.parent.parent-2');
    expect((0,core_element.next)(p1)).toBe(p2);
  });
  test('util/element.nextAll', () => {
    const i2 = document.querySelector('.item.item-2');
    const others = (0,core_element.nextAll)(i2);
    expect(others).toHaveLength(3);
    expect(others[0]).toHaveClass('item-3');
  });
  test('util/element.prev', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const p2 = document.querySelector('.parent.parent-2');
    expect((0,core_element.prev)(p2)).toBe(p1);
  });
  test('util/element.preAll', () => {
    const i3 = document.querySelector('.item.item-3');
    const others = (0,core_element.prevAll)(i3);
    expect(others).toHaveLength(2);
    expect(others[0]).toHaveClass('item-2');
  });
  test('util/element.siblings', () => {
    const i3 = document.querySelector('.item.item-3');
    const sibs = (0,core_element.siblings)(i3);
    expect(sibs).toHaveLength(4);
    expect(sibs[0]).toHaveClass('item-1');
  });
  test('util/element.findWithRetry', async () => {
    const root = document.getElementById('root');
    const newboi = document.createElement('div');
    newboi.id = 'newboi';
    newboi.textContent = 'newboi';
    function addElement() {
      setTimeout(() => {
        root.appendChild(newboi);
      }, 500);
    }
    const finder = (0,core_element.findWithRetry)({
      target: '#newboi',
      retries: 20
    });
    addElement();
    const found = await finder;
    expect(found).toBeTruthy();
  });
  test('util/element.addTabindexToContent', () => {
    const btn = document.querySelector('.content button');
    expect(btn.getAttribute('tabindex')).toBe(null);
    (0,core_element.addTabindexToContent)();
    expect(btn.getAttribute('tabindex')).toBe('0');
  });
  test('util/element.addListeners', () => {
    document.body.innerHTML = '';
    const onclick = jest.fn();
    // eslint-disable-next-line react/prop-types
    function Btn(_ref) {
      let {
        listeners
      } = _ref;
      const ref = (0,external_React_.useRef)();
      (0,external_React_.useEffect)(() => {
        (0,core_element.addListeners)(ref.current, listeners);
      });
      return /*#__PURE__*/external_React_default().createElement("button", {
        type: "button",
        ref: ref
      }, "click me");
    }
    render( /*#__PURE__*/external_React_default().createElement(Btn, {
      listeners: {
        click: onclick
      }
    }));
    let btn = dom_esm/* screen */.sp.getByText(/click me/i);
    fireEvent.click(btn);
    expect(onclick).toHaveBeenCalledTimes(1);

    // Test with listener options
    const onfocus = jest.fn();
    document.body.innerHTML = '';
    render( /*#__PURE__*/external_React_default().createElement(Btn, {
      listeners: {
        focus: {
          cb: onfocus,
          opts: {
            once: true
          }
        }
      }
    }));
    btn = dom_esm/* screen */.sp.getByText(/click me/i);
    fireEvent.focus(btn);
    fireEvent.focus(btn);
    fireEvent.focus(btn);
    expect(onfocus).toHaveBeenCalledTimes(1);
  });
  test('util/element.removeListeners', () => {
    document.body.innerHTML = '';
    const onclick = jest.fn();
    // eslint-disable-next-line react/prop-types
    function Btn(_ref2) {
      let {
        listeners
      } = _ref2;
      const ref = (0,external_React_.useRef)();
      (0,external_React_.useEffect)(() => {
        (0,core_element.addListeners)(ref.current, listeners);
      });
      return /*#__PURE__*/external_React_default().createElement("button", {
        type: "button",
        ref: ref
      }, "click me");
    }
    const listeners = {
      click: onclick
    };
    render( /*#__PURE__*/external_React_default().createElement(Btn, {
      listeners: listeners
    }));
    const btn = dom_esm/* screen */.sp.getByText(/click me/i);
    fireEvent.click(btn);
    expect(onclick).toHaveBeenCalledTimes(1);
    (0,core_element.removeListeners)(btn, listeners);
    expect(onclick).toHaveBeenCalledTimes(1);
  });
  test('util/element.trigger', () => {
    const handler = jest.fn();
    const btn = document.getElementById('btn');
    btn.addEventListener('my-custom-event', handler);
    (0,core_element.trigger)({
      target: '#btn',
      type: 'my-custom-event'
    });
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;