"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_property_Properties_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      siteID: null,
      properties: [{
        householder: {},
        tenant: {},
        type: {}
      }],
      loadingTable: true,
      columns: [{
        field: 'id',
        label: 'ID',
        width: '40',
        numeric: true
      }, {
        field: 'doorWithBlock',
        label: 'Kapı No'
      }, {
        field: 'type.name',
        label: 'Tipi'
      }, {
        field: 'householder.name',
        label: 'Kat Maliki'
      }, {
        field: 'tenant.name',
        label: 'Kiracı'
      }]
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.getSiteProperties();
  },
  methods: {
    getSiteProperties: function getSiteProperties() {
      var _this = this;

      axios.get('/api/sites/' + this.siteID + '/properties').then(function (response) {
        _this.properties = response.data.data;

        _this.properties.forEach(function (property) {
          property.doorWithBlock = property.block.name ? property.block.name + '-' + property.door_no : property.door_no;
        });
      })["catch"](function (error) {
        console.log(error.response.data);
      }).then(function () {
        _this.loadingTable = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/property/Properties.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/views/manager/site/property/Properties.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Properties_vue_vue_type_template_id_154b86a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Properties.vue?vue&type=template&id=154b86a6& */ "./resources/js/views/manager/site/property/Properties.vue?vue&type=template&id=154b86a6&");
/* harmony import */ var _Properties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Properties.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/property/Properties.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Properties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Properties_vue_vue_type_template_id_154b86a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Properties_vue_vue_type_template_id_154b86a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/property/Properties.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/property/Properties.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/manager/site/property/Properties.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Properties.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/property/Properties.vue?vue&type=template&id=154b86a6&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/manager/site/property/Properties.vue?vue&type=template&id=154b86a6& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_template_id_154b86a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_template_id_154b86a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_template_id_154b86a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Properties.vue?vue&type=template&id=154b86a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=template&id=154b86a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=template&id=154b86a6&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=template&id=154b86a6& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("section", { staticClass: "hero" }, [
      _c("div", { staticClass: "hero-body" }, [
        _c(
          "div",
          {
            staticClass:
              "container is-flex is-justify-content-space-between is-align-items-center"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "b-button",
                  {
                    staticClass: "is-primary",
                    attrs: {
                      "icon-left": "plus",
                      tag: "router-link",
                      to: "properties/new"
                    }
                  },
                  [_vm._v("\n            Bölüm Ekle\n        ")]
                ),
                _vm._v(" "),
                _c("b-button", { attrs: { "icon-left": "printer" } }, [
                  _vm._v("\n            Yazdır\n        ")
                ])
              ],
              1
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container block mt-6" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              _c("b-table", {
                attrs: {
                  loading: _vm.loadingTable,
                  striped: true,
                  data: _vm.properties,
                  columns: _vm.columns
                }
              })
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { name: "hero-left-side" } }, [
      _c("p", { staticClass: "is-size-4 mb-0" }, [
        _vm._v("\n      Bölümler\n    ")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "has-text-grey is-size-7" }, [
        _vm._v("Sitedeki dükkan ve daireler")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);