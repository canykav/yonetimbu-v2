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
      newOccupant: {},
      labelPosition: 'inside',
      siteID: null,
      properties: [{
        householder: {},
        tenant: {},
        type: {}
      }],
      loadingTable: true,
      addOccupantModal: false,
      occupantType: null,
      selectedProperty: null,
      personResults: [],
      persons: [],
      personList: false
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.getSiteProperties();
    this.getSitePersons();
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
    },
    addOccupant: function addOccupant() {
      var _this2 = this;

      axios.post('/api/sites/' + this.siteID + '/occupants/', {
        name: this.newOccupant.name,
        accounts_id: this.newOccupant.accounts_id,
        type: this.occupantType,
        properties_id: this.selectedProperty,
        entry_date: this.newOccupant.entry_date ? this.newOccupant.entry_date.toLocaleDateString('tr-TR') : null
      }).then(function (response) {
        _this2.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this2.getSiteProperties();

        _this2.addOccupantModal = false;
      })["catch"](function (error) {
        _this2.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      });
    },
    goToPerson: function goToPerson(person) {
      this.$router.push({
        name: 'person',
        params: {
          sites_id: this.siteID,
          persons_id: person.accounts_id
        }
      });
    },
    goToProperty: function goToProperty(property) {
      if (this.addOccupantModal == false) {
        this.$router.push({
          name: 'property',
          params: {
            sites_id: this.siteID,
            properties_id: property.id
          }
        });
      }
    },
    getSitePersons: function getSitePersons() {
      var _this3 = this;

      axios.get('/api/sites/' + this.siteID + '/persons').then(function (response) {
        _this3.persons = response.data.data;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    searchPerson: function searchPerson() {
      var i;
      this.personResults = [];
      this.newOccupant.accounts_id = null;

      if (this.newOccupant.name.length > 0) {
        for (i = 0; i < this.persons.length; i++) {
          if (this.persons[i].name.indexOf(this.newOccupant.name) >= 0) {
            this.personResults.push(this.persons[i]);
          }
        }
      }
    },
    prepareOccupantToAdd: function prepareOccupantToAdd(person) {
      this.newOccupant.name = person.name;
      this.newOccupant.accounts_id = person.id;
      this.personList = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#add-occupant-modal-body {\n    min-width: 414px;\n    min-height: 400px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Properties.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/* harmony import */ var _Properties_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Properties.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/manager/site/property/Properties.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
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

/***/ "./resources/js/views/manager/site/property/Properties.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/manager/site/property/Properties.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Properties_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Properties.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Properties.vue?vue&type=style&index=0&lang=css&");


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
  return _c(
    "div",
    [
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
                _c(
                  "b-table",
                  {
                    staticClass: "is-clickable",
                    attrs: {
                      loading: _vm.loadingTable,
                      striped: true,
                      data: _vm.properties,
                      hoverable: true
                    },
                    on: {
                      click: function($event) {
                        return _vm.goToProperty($event)
                      }
                    }
                  },
                  [
                    _c("b-table-column", {
                      attrs: { label: "Bölüm" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(props.row.doorWithBlock) +
                                  "\n                        "
                              )
                            ]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: { label: "Tipi" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(props.row.type.name) +
                                  "\n                        "
                              )
                            ]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        label: "Kat Maliki",
                        "cell-class": "light-blue-cell"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              props.row.householder
                                ? _c(
                                    "span",
                                    {
                                      staticClass: "is-clickable",
                                      on: {
                                        click: function($event) {
                                          return _vm.goToPerson(
                                            props.row.householder
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(props.row.householder.name) +
                                          " "
                                      )
                                    ]
                                  )
                                : _c(
                                    "a",
                                    {
                                      staticClass: "has-text-link is-size-7",
                                      on: {
                                        click: function($event) {
                                          _vm.addOccupantModal = true
                                          _vm.selectedProperty = props.row.id
                                          _vm.occupantType = "householder"
                                        }
                                      }
                                    },
                                    [
                                      _c("b-icon", {
                                        attrs: {
                                          icon: "account-plus",
                                          size: "is-small"
                                        }
                                      }),
                                      _vm._v(
                                        "\n                                Kat Maliki Ekle\n                            "
                                      )
                                    ],
                                    1
                                  )
                            ]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: {
                        label: "Kiracı",
                        "cell-class": "light-yellow-cell"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              props.row.tenant
                                ? _c(
                                    "span",
                                    {
                                      staticClass: "is-clickable",
                                      on: {
                                        click: function($event) {
                                          return _vm.goToPerson(
                                            props.row.tenant
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        " " +
                                          _vm._s(props.row.tenant.name) +
                                          " "
                                      )
                                    ]
                                  )
                                : _c(
                                    "a",
                                    {
                                      staticClass: "has-text-link is-size-7",
                                      on: {
                                        click: function($event) {
                                          _vm.addOccupantModal = true
                                          _vm.selectedProperty = props.row.id
                                          _vm.occupantType = "tenant"
                                        }
                                      }
                                    },
                                    [
                                      _c("b-icon", {
                                        attrs: {
                                          icon: "account-plus",
                                          size: "is-small"
                                        }
                                      }),
                                      _vm._v(
                                        "\n                                Kiracı Ekle\n                            "
                                      )
                                    ],
                                    1
                                  )
                            ]
                          }
                        }
                      ])
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "has-modal-card": "",
            "trap-focus": "",
            "destroy-on-hide": false,
            "aria-modal": ""
          },
          model: {
            value: _vm.addOccupantModal,
            callback: function($$v) {
              _vm.addOccupantModal = $$v
            },
            expression: "addOccupantModal"
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addOccupant()
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "modal-card", staticStyle: { width: "auto" } },
                [
                  _c("header", { staticClass: "modal-card-head" }, [
                    _c("p", { staticClass: "modal-card-title" }, [
                      _vm._v("Oturan Ekle")
                    ]),
                    _vm._v(" "),
                    _c("button", {
                      staticClass: "delete",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.addOccupantModal = false
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "section",
                    {
                      staticClass: "modal-card-body",
                      attrs: { id: "add-occupant-modal-body" }
                    },
                    [
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Kişi Adı",
                            "label-position": _vm.labelPosition
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "dropdown is-block is-active" },
                            [
                              _c("div", { staticClass: "dropdown-trigger" }, [
                                _c(
                                  "div",
                                  { staticClass: "control has-icons-right" },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.newOccupant.name,
                                          expression: "newOccupant.name"
                                        }
                                      ],
                                      staticClass: "input",
                                      staticStyle: {
                                        "padding-top": "2rem",
                                        "padding-bottom": "1rem"
                                      },
                                      attrs: { type: "text", required: "" },
                                      domProps: { value: _vm.newOccupant.name },
                                      on: {
                                        keyup: function($event) {
                                          _vm.searchPerson()
                                          _vm.personList = true
                                        },
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.newOccupant,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.newOccupant.accounts_id == null &&
                                    _vm.newOccupant.name != null
                                      ? _c(
                                          "span",
                                          {
                                            staticClass:
                                              "tag is-info is-small is-right",
                                            staticStyle: {
                                              position: "absolute",
                                              right: "10px",
                                              top: "0.75rem"
                                            }
                                          },
                                          [_vm._v("Yeni Kişi")]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "dropdown-menu",
                                  attrs: { id: "dropdown-menu", role: "menu" }
                                },
                                [
                                  _vm.personResults.length > 0
                                    ? _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-content",
                                          class: { "is-block": _vm.personList },
                                          staticStyle: { display: "none" }
                                        },
                                        _vm._l(_vm.personResults, function(
                                          person
                                        ) {
                                          return _c(
                                            "a",
                                            {
                                              key: person.id,
                                              staticClass: "dropdown-item",
                                              attrs: { value: person.id },
                                              on: {
                                                click: function($event) {
                                                  return _vm.prepareOccupantToAdd(
                                                    person
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(person.name) +
                                                  "\n                                    "
                                              )
                                            ]
                                          )
                                        }),
                                        0
                                      )
                                    : _vm._e()
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Giriş Tarihi",
                            "label-position": _vm.labelPosition
                          }
                        },
                        [
                          _c("b-datepicker", {
                            attrs: { icon: "calendar-today", "trap-focus": "" },
                            model: {
                              value: _vm.newOccupant.entry_date,
                              callback: function($$v) {
                                _vm.$set(_vm.newOccupant, "entry_date", $$v)
                              },
                              expression: "newOccupant.entry_date"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "footer",
                    { staticClass: "modal-card-foot" },
                    [
                      _c("b-button", {
                        attrs: { label: "Vazgeç" },
                        on: {
                          click: function($event) {
                            _vm.addOccupantModal = false
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("b-button", {
                        attrs: {
                          label: "Kaydet",
                          type: "is-primary",
                          "native-type": "submit"
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { name: "hero-left-side" } }, [
      _c("p", { staticClass: "is-size-4 mb-0" }, [
        _vm._v("\n            Bölümler\n            ")
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);