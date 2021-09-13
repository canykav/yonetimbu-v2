"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_company_NewCompany_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/NewCompany.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/NewCompany.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      siteID: null,
      newCompany: {},
      labelPosition: 'inside',
      loadingButton: false
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
  },
  methods: {
    createCompany: function createCompany() {
      var _this = this;

      this.loadingButton = true;
      axios.post('/api/sites/' + this.siteID + '/companies', {
        name: this.newCompany.name,
        citizenship_no: this.newCompany.citizenship_no,
        tax_administration: this.newCompany.tax_administration,
        phone1: this.newCompany.phone1,
        iban: this.newCompany.iban,
        email: this.newCompany.email,
        address: this.newCompany.address
      }).then(function (response) {
        _this.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this.newCompany = {};

        _this.$router.push({
          name: 'companies',
          params: {
            sites_id: _this.siteID
          }
        });
      })["catch"](function (error) {
        _this.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this.loadingButton = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/company/NewCompany.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/manager/site/company/NewCompany.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewCompany_vue_vue_type_template_id_242f7c34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewCompany.vue?vue&type=template&id=242f7c34& */ "./resources/js/views/manager/site/company/NewCompany.vue?vue&type=template&id=242f7c34&");
/* harmony import */ var _NewCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewCompany.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/company/NewCompany.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NewCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NewCompany_vue_vue_type_template_id_242f7c34___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewCompany_vue_vue_type_template_id_242f7c34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/company/NewCompany.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/company/NewCompany.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/manager/site/company/NewCompany.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewCompany.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/NewCompany.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCompany_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/company/NewCompany.vue?vue&type=template&id=242f7c34&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/manager/site/company/NewCompany.vue?vue&type=template&id=242f7c34& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCompany_vue_vue_type_template_id_242f7c34___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCompany_vue_vue_type_template_id_242f7c34___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewCompany_vue_vue_type_template_id_242f7c34___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewCompany.vue?vue&type=template&id=242f7c34& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/NewCompany.vue?vue&type=template&id=242f7c34&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/NewCompany.vue?vue&type=template&id=242f7c34&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/NewCompany.vue?vue&type=template&id=242f7c34& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container block mt-6" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-content" }, [
          _c(
            "div",
            { staticClass: "content" },
            [
              [
                _c("section", [
                  _c(
                    "form",
                    {
                      attrs: { id: "newCompanyForm" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.createCompany()
                        }
                      }
                    },
                    [
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Adı",
                            "label-position": _vm.labelPosition
                          }
                        },
                        [
                          _c("b-input", {
                            model: {
                              value: _vm.newCompany.name,
                              callback: function($$v) {
                                _vm.$set(_vm.newCompany, "name", $$v)
                              },
                              expression: "newCompany.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Vergi No./TC No.",
                            "label-position": _vm.labelPosition
                          }
                        },
                        [
                          _c("b-input", {
                            model: {
                              value: _vm.newCompany.citizenship_no,
                              callback: function($$v) {
                                _vm.$set(_vm.newCompany, "citizenship_no", $$v)
                              },
                              expression: "newCompany.citizenship_no"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Vergi Dairesi",
                            "label-position": _vm.labelPosition
                          }
                        },
                        [
                          _c("b-input", {
                            model: {
                              value: _vm.newCompany.tax_administration,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.newCompany,
                                  "tax_administration",
                                  $$v
                                )
                              },
                              expression: "newCompany.tax_administration"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Telefon",
                            "label-position": _vm.labelPosition
                          }
                        },
                        [
                          _c("b-input", {
                            model: {
                              value: _vm.newCompany.phone1,
                              callback: function($$v) {
                                _vm.$set(_vm.newCompany, "phone1", $$v)
                              },
                              expression: "newCompany.phone1"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "IBAN",
                            "label-position": _vm.labelPosition
                          }
                        },
                        [
                          _c("b-input", {
                            model: {
                              value: _vm.newCompany.iban,
                              callback: function($$v) {
                                _vm.$set(_vm.newCompany, "iban", $$v)
                              },
                              expression: "newCompany.iban"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "E-Mail",
                            "label-position": _vm.labelPosition
                          }
                        },
                        [
                          _c("b-input", {
                            attrs: { type: "email" },
                            model: {
                              value: _vm.newCompany.email,
                              callback: function($$v) {
                                _vm.$set(_vm.newCompany, "email", $$v)
                              },
                              expression: "newCompany.email"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-field",
                        {
                          attrs: {
                            label: "Adres",
                            "label-position": _vm.labelPosition
                          }
                        },
                        [
                          _c("b-input", {
                            model: {
                              value: _vm.newCompany.address,
                              callback: function($$v) {
                                _vm.$set(_vm.newCompany, "address", $$v)
                              },
                              expression: "newCompany.address"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-field", [
                        _c(
                          "p",
                          { staticClass: "control" },
                          [
                            _c("b-button", {
                              attrs: {
                                expanded: "",
                                label: "Kaydet",
                                type: "is-primary",
                                "native-type": "submit"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ])
              ]
            ],
            2
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
    return _c("section", { staticClass: "hero" }, [
      _c("div", { staticClass: "hero-body" }, [
        _c(
          "div",
          {
            staticClass:
              "container is-flex is-justify-content-space-between is-align-items-center"
          },
          [
            _c("div", { attrs: { name: "hero-left-side" } }, [
              _c("p", { staticClass: "is-size-4 mb-0" }, [
                _vm._v("\n      Yeni Firma\n    ")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "has-text-grey is-size-7" }, [
                _vm._v("......")
              ])
            ])
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);