"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_settings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/settings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/settings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      labelPosition: 'inside',
      site: {},
      loadingUpdateButton: false,
      loadingDeleteButton: false
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.getSite();
  },
  methods: {
    getSite: function getSite() {
      var _this = this;

      axios.get('/api/sites/' + this.siteID).then(function (response) {
        _this.site = response.data.data;
        _this.site.term_start = new Date(_this.site.term_start);
        _this.site.term_end = new Date(_this.site.term_end);
        _this.site.debit = _this.site.debit == 1 ? true : false;
        _this.site.archived_at = _this.site.archived_at == null ? false : true;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    updateSite: function updateSite() {
      var _this2 = this;

      this.loadingUpdateButton = true;
      axios.put('/api/sites/' + this.siteID, {
        name: this.site.name,
        address: this.site.address,
        term_start: this.site.term_start ? this.site.term_start.toLocaleDateString('tr-TR') : null,
        term_end: this.site.term_end ? this.site.term_end.toLocaleDateString('tr-TR') : null,
        debit: this.site.debit == true ? 1 : 0,
        archived_at: this.site.archived_at == true ? true : null
      }).then(function (response) {
        _this2.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this2.getSite();
      })["catch"](function (error) {
        _this2.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this2.loadingUpdateButton = false;
      });
    },
    deleteSite: function deleteSite() {
      var _this3 = this;

      axios["delete"]('/api/sites/' + this.siteID).then(function (response) {
        _this3.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });
      })["catch"](function (error) {
        _this3.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this3.loadingDeleteButton = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/settings.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/manager/site/settings.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_255131cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=255131cc& */ "./resources/js/views/manager/site/settings.vue?vue&type=template&id=255131cc&");
/* harmony import */ var _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/settings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _settings_vue_vue_type_template_id_255131cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _settings_vue_vue_type_template_id_255131cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/manager/site/settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/settings.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/settings.vue?vue&type=template&id=255131cc&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/manager/site/settings.vue?vue&type=template&id=255131cc& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_255131cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_255131cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_template_id_255131cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./settings.vue?vue&type=template&id=255131cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/settings.vue?vue&type=template&id=255131cc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/settings.vue?vue&type=template&id=255131cc&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/settings.vue?vue&type=template&id=255131cc& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "container block mt-6" },
      [
        _c("div", { staticClass: "card block" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "content" }, [
              _c("p", [_vm._v("Site Ayarları")]),
              _vm._v(" "),
              _c(
                "form",
                {
                  attrs: { id: "updateSiteForm" },
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.updateSite()
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
                        attrs: { required: "" },
                        model: {
                          value: _vm.site.name,
                          callback: function($$v) {
                            _vm.$set(_vm.site, "name", $$v)
                          },
                          expression: "site.name"
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
                        label: "Adresi",
                        "label-position": _vm.labelPosition
                      }
                    },
                    [
                      _c("b-input", {
                        model: {
                          value: _vm.site.address,
                          callback: function($$v) {
                            _vm.$set(_vm.site, "address", $$v)
                          },
                          expression: "site.address"
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
                        label: "Dönem Başlangıcı",
                        "label-position": _vm.labelPosition
                      }
                    },
                    [
                      _c("b-datepicker", {
                        attrs: { icon: "calendar-today", "trap-focus": "" },
                        model: {
                          value: _vm.site.term_start,
                          callback: function($$v) {
                            _vm.$set(_vm.site, "term_start", $$v)
                          },
                          expression: "site.term_start"
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
                        label: "Dönem Sonu",
                        "label-position": _vm.labelPosition
                      }
                    },
                    [
                      _c("b-datepicker", {
                        attrs: { icon: "calendar-today", "trap-focus": "" },
                        model: {
                          value: _vm.site.term_end,
                          callback: function($$v) {
                            _vm.$set(_vm.site, "term_end", $$v)
                          },
                          expression: "site.term_end"
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
                          value: _vm.site.tax_administration,
                          callback: function($$v) {
                            _vm.$set(_vm.site, "tax_administration", $$v)
                          },
                          expression: "site.tax_administration"
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
                        label: "Vergi Numarası",
                        "label-position": _vm.labelPosition
                      }
                    },
                    [
                      _c("b-input", {
                        model: {
                          value: _vm.site.tax_no,
                          callback: function($$v) {
                            _vm.$set(_vm.site, "tax_no", $$v)
                          },
                          expression: "site.tax_no"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list" }, [
                    _c(
                      "li",
                      [
                        _c(
                          "b-field",
                          [
                            _c(
                              "b-switch",
                              {
                                model: {
                                  value: _vm.site.debit,
                                  callback: function($$v) {
                                    _vm.$set(_vm.site, "debit", $$v)
                                  },
                                  expression: "site.debit"
                                }
                              },
                              [_vm._v("Otomatik Aidat Borçlandırması")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "b-field",
                          [
                            _c(
                              "b-switch",
                              {
                                model: {
                                  value: _vm.site.archived_at,
                                  callback: function($$v) {
                                    _vm.$set(_vm.site, "archived_at", $$v)
                                  },
                                  expression: "site.archived_at"
                                }
                              },
                              [_vm._v("Siteyi Arşivle")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
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
                            "native-type": "submit",
                            loading: _vm.loadingUpdateButton,
                            form: "updateSiteForm"
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
          ])
        ]),
        _vm._v(" "),
        _c(
          "b-collapse",
          {
            staticClass: "card",
            attrs: { open: false, animation: "slide" },
            scopedSlots: _vm._u([
              {
                key: "trigger",
                fn: function(props) {
                  return [
                    _c(
                      "div",
                      { staticClass: "card-header", attrs: { role: "button" } },
                      [
                        _c("p", { staticClass: "card-header-title" }, [
                          _vm._v(
                            "\n                        Siteyi Sil\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "a",
                          { staticClass: "card-header-icon" },
                          [
                            _c("b-icon", {
                              attrs: {
                                icon: props.open ? "menu-down" : "menu-up"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    )
                  ]
                }
              }
            ])
          },
          [
            _vm._v(" "),
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "content" }, [
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column" }, [
                    _c("p", { staticClass: "is-size-7" }, [
                      _vm._v(
                        "Bir siteyi sildikten sonra geri dönüş yoktur. Lütfen emin olun."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column" },
                    [
                      _c("b-button", {
                        attrs: {
                          expanded: "",
                          label: "Sil",
                          type: "is-danger",
                          "native-type": "submit",
                          loading: _vm.loadingDeleteButton
                        },
                        on: {
                          click: function($event) {
                            return _vm.deleteSite()
                          }
                        }
                      })
                    ],
                    1
                  )
                ])
              ])
            ])
          ]
        )
      ],
      1
    )
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
                _vm._v("\n      Site Ayarları\n    ")
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