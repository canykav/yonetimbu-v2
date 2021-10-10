"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_vault_Vault_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/vault/Vault.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/vault/Vault.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      siteID: null,
      vaultID: null,
      vault: {},
      editedVaultData: {},
      loadingUpdateButton: false,
      isTableEmpty: false,
      edit: 0,
      transactions: []
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.vaultID = this.$route.params.vaults_id;
    this.getVault();
  },
  methods: {
    getVault: function getVault() {
      var _this = this;

      axios.get('/api/sites/' + this.siteID + '/vaults/' + this.vaultID).then(function (response) {
        _this.vault = response.data.data;
      })["catch"](function (error) {
        console.log(error.response.data);
      }).then(function () {
        _this.loadingTable = false;

        _this.getVaultTransactions();
      });
    },
    getVaultTransactions: function getVaultTransactions() {
      var _this2 = this;

      axios.get('/api/sites/' + this.siteID + '/transactions', {
        params: {
          vaults_id: this.vaultID
        }
      }).then(function (response) {
        _this2.transactions = response.data.data;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    updateVault: function updateVault() {
      var _this3 = this;

      this.loadingUpdateButton = true;
      axios.put('/api/sites/' + this.siteID + '/vaults/' + this.vaultID, {
        name: this.editedVaultData.name,
        opening_date: this.editedVaultData.opening_date ? this.editedVaultData.opening_date.toLocaleDateString('tr-TR') : null
      }).then(function (response) {
        _this3.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this3.getVault();

        _this3.edit = 0;
      })["catch"](function (error) {
        _this3.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this3.loadingUpdateButton = false;
      });
    },
    toggleEdit: function toggleEdit() {
      if (this.edit == 0) {
        Object.assign(this.editedVaultData, this.vault);
        this.editedVaultData.opening_date = new Date(this.editedVaultData.opening_date);
      }

      this.edit = !this.edit;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/vault/Vault.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/manager/site/vault/Vault.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Vault_vue_vue_type_template_id_bd860c64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vault.vue?vue&type=template&id=bd860c64& */ "./resources/js/views/manager/site/vault/Vault.vue?vue&type=template&id=bd860c64&");
/* harmony import */ var _Vault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vault.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/vault/Vault.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Vault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Vault_vue_vue_type_template_id_bd860c64___WEBPACK_IMPORTED_MODULE_0__.render,
  _Vault_vue_vue_type_template_id_bd860c64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/vault/Vault.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/vault/Vault.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/manager/site/vault/Vault.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/vault/Vault.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Vault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/vault/Vault.vue?vue&type=template&id=bd860c64&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/manager/site/vault/Vault.vue?vue&type=template&id=bd860c64& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vault_vue_vue_type_template_id_bd860c64___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vault_vue_vue_type_template_id_bd860c64___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Vault_vue_vue_type_template_id_bd860c64___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Vault.vue?vue&type=template&id=bd860c64& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/vault/Vault.vue?vue&type=template&id=bd860c64&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/vault/Vault.vue?vue&type=template&id=bd860c64&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/vault/Vault.vue?vue&type=template&id=bd860c64& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
            _c("div", { attrs: { name: "hero-left-side" } }, [
              _c("p", { staticClass: "is-size-4 mb-0" }, [
                _vm._v("\n      " + _vm._s(_vm.vault.name) + "\n    ")
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "b-dropdown",
                  {
                    staticClass: "mr-2",
                    attrs: { "aria-role": "list" },
                    scopedSlots: _vm._u([
                      {
                        key: "trigger",
                        fn: function(ref) {
                          var active = ref.active
                          return [
                            _c("b-button", {
                              attrs: {
                                label: "İşlemler",
                                type: "is-primary",
                                "icon-left": "cog",
                                "icon-right": active ? "menu-up" : "menu-down"
                              }
                            })
                          ]
                        }
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      {
                        attrs: { "aria-role": "listitem" },
                        on: {
                          click: function($event) {
                            return _vm.$router.push({
                              name: "newCollection",
                              params: { persons_id: _vm.personID }
                            })
                          }
                        }
                      },
                      [_vm._v("Kasayı Sil")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "container block mt-6" }, [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column is-9" }, [
          _c("div", { staticClass: "card block" }, [
            _c("header", { staticClass: "card-header" }, [
              _c("p", { staticClass: "card-header-title" }, [
                _vm._v(
                  "\n                        Kasa/Banka Bilgisi\n                        "
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "card-header-icon",
                  attrs: { "aria-label": "more options" }
                },
                [
                  _vm.edit == 0
                    ? _c(
                        "a",
                        {
                          staticClass: "has-text-link is-size-7",
                          on: {
                            click: function($event) {
                              return _vm.toggleEdit()
                            }
                          }
                        },
                        [_vm._v("Düzenle")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.edit == 1
                    ? _c(
                        "a",
                        {
                          staticClass: "has-text-link is-size-7",
                          on: {
                            click: function($event) {
                              return _vm.toggleEdit()
                            }
                          }
                        },
                        [_vm._v("Vazgeç")]
                      )
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-content" }, [
              _c(
                "div",
                { staticClass: "content" },
                [
                  _c("table", { staticClass: "table is-fullwidth" }, [
                    _c("tbody", [
                      _c("tr", [
                        _c("td", { attrs: { width: "30%" } }, [
                          _vm._v("Kasa/Banka Adı")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [_vm._v(_vm._s(_vm.vault.name))])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value: _vm.editedVaultData.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.editedVaultData, "name", $$v)
                                    },
                                    expression: "editedVaultData.name"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { width: "30%" } }, [_vm._v("Tipi")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [_vm._v(_vm._s(_vm.vault.type))])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: {
                                    "custom-class": "is-small",
                                    readonly: ""
                                  },
                                  model: {
                                    value: _vm.editedVaultData.type,
                                    callback: function($$v) {
                                      _vm.$set(_vm.editedVaultData, "type", $$v)
                                    },
                                    expression: "editedVaultData.type"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { width: "30%" } }, [
                          _vm._v("Açılış Tarihi")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("turkishDate")(
                                        _vm.vault.opening_date
                                      )
                                    )
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-datepicker", {
                                  attrs: {
                                    icon: "calendar-today",
                                    "trap-focus": "",
                                    "custom-class": "is-small"
                                  },
                                  model: {
                                    value: _vm.editedVaultData.opening_date,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedVaultData,
                                        "opening_date",
                                        $$v
                                      )
                                    },
                                    expression: "editedVaultData.opening_date"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.edit == 1
                    ? _c(
                        "b-button",
                        {
                          staticClass: "is-small",
                          attrs: {
                            type: "is-primary",
                            loading: _vm.loadingUpdateButton,
                            expanded: ""
                          },
                          on: { click: _vm.updateVault }
                        },
                        [_vm._v("Kaydet")]
                      )
                    : _vm._e()
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card block" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "card-content" }, [
              _c(
                "div",
                { staticClass: "content" },
                [
                  _c(
                    "b-table",
                    {
                      attrs: {
                        striped: true,
                        data: _vm.transactions,
                        loading: _vm.loadingTable
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "empty",
                          fn: function() {
                            return [
                              _c("div", { staticClass: "has-text-centered" }, [
                                _vm._v("Kayıt yok")
                              ])
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _c("b-table-column", {
                        attrs: { label: "Tarih" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(props) {
                              return [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm._f("turkishDate")(props.row.date)
                                    ) +
                                    "\n                            "
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("b-table-column", {
                        attrs: { label: "Türü" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(props) {
                              return [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(props.row.extract_type) +
                                    "\n                            "
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("b-table-column", {
                        attrs: { label: "Açıklama" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(props) {
                              return [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(props.row.description) +
                                    "\n                            "
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("b-table-column", {
                        attrs: { label: "Tutar" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(props) {
                              return [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm._f("turkishMoney")(props.row.amount)
                                    ) +
                                    "\n                            "
                                )
                              ]
                            }
                          }
                        ])
                      }),
                      _vm._v(" "),
                      _c("b-table-column", {
                        attrs: { label: "Bakiye" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(props) {
                              return [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm._f("turkishMoney")(props.row.balance)
                                    ) +
                                    "\n                            "
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
        _vm._m(1)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v("\n                        Ekstre\n                        ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column is-3" }, [
      _c("div", { staticClass: "card" }, [
        _c("header", { staticClass: "card-header" }, [
          _c("p", { staticClass: "card-header-title" }, [
            _vm._v("\n                        Notlar\n                        ")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-content" }, [
          _c("div", { staticClass: "content" })
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);