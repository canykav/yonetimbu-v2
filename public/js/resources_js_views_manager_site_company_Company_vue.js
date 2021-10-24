"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_company_Company_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/Company.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/Company.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      companyID: null,
      company: {},
      editedCompanyData: {},
      loadingUpdateButton: false,
      isTableEmpty: false,
      edit: 0,
      transactions: [],
      receivables: []
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.companyID = this.$route.params.companies_id;
    this.getCompany();
  },
  methods: {
    getCompany: function getCompany() {
      var _this = this;

      axios.get('/api/sites/' + this.siteID + '/companies/' + this.companyID).then(function (response) {
        _this.company = response.data.data;
      })["catch"](function (error) {
        console.log(error.response.data);
      }).then(function () {
        _this.loadingTable = false;

        _this.getCompanyTransactions();

        _this.getCompanyReceivables();
      });
    },
    getCompanyTransactions: function getCompanyTransactions() {
      var _this2 = this;

      axios.get('/api/sites/' + this.siteID + '/transactions', {
        params: {
          companies_id: this.companyID
        }
      }).then(function (response) {
        _this2.transactions = response.data.data;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    getCompanyReceivables: function getCompanyReceivables() {
      var _this3 = this;

      axios.get('/api/sites/' + this.siteID + '/expenses', {
        params: {
          companies_id: this.companyID,
          transaction_type: 'expense'
        }
      }).then(function (response) {
        _this3.receivables = response.data.data;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    updatecompany: function updatecompany() {
      var _this4 = this;

      this.loadingUpdateButton = true;
      axios.put('/api/sites/' + this.siteID + '/companies/' + this.companyID, {
        name: this.editedCompanyData.name,
        phone1: this.editedCompanyData.phone1,
        citizenship_no: this.editedCompanyData.citizenship_no,
        tax_administration: this.editedCompanyData.tax_administration,
        iban: this.editedCompanyData.iban,
        email: this.editedCompanyData.email,
        address: this.editedCompanyData.address
      }).then(function (response) {
        _this4.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this4.getCompany();

        _this4.edit = 0;
      })["catch"](function (error) {
        _this4.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this4.loadingUpdateButton = false;
      });
    },
    toggleEdit: function toggleEdit() {
      if (this.edit == 0) {
        Object.assign(this.editedCompanyData, this.company);
        this.editedCompanyData.opening_date = new Date(this.editedCompanyData.opening_date);
      }

      this.edit = !this.edit;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/company/Company.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/manager/site/company/Company.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Company_vue_vue_type_template_id_06fc0b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Company.vue?vue&type=template&id=06fc0b24& */ "./resources/js/views/manager/site/company/Company.vue?vue&type=template&id=06fc0b24&");
/* harmony import */ var _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Company.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/company/Company.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Company_vue_vue_type_template_id_06fc0b24___WEBPACK_IMPORTED_MODULE_0__.render,
  _Company_vue_vue_type_template_id_06fc0b24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/company/Company.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/company/Company.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/manager/site/company/Company.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/Company.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/company/Company.vue?vue&type=template&id=06fc0b24&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/manager/site/company/Company.vue?vue&type=template&id=06fc0b24& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06fc0b24___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06fc0b24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06fc0b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Company.vue?vue&type=template&id=06fc0b24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/Company.vue?vue&type=template&id=06fc0b24&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/Company.vue?vue&type=template&id=06fc0b24&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/company/Company.vue?vue&type=template&id=06fc0b24& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                _vm._v("\n      " + _vm._s(_vm.company.name) + "\n    ")
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
                      [_vm._v("Firmayı Sil")]
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
            _c(
              "header",
              { staticClass: "card-header" },
              [
                _c("p", { staticClass: "card-header-title" }, [
                  _vm._v(
                    "\n                        Firma Bilgisi\n                        "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-3 mt-3",
                    attrs: { tag: "a", size: "is-small is-link is-light" },
                    on: {
                      click: function($event) {
                        return _vm.toggleEdit()
                      }
                    }
                  },
                  [
                    _vm.edit == 0 ? _c("span", [_vm._v("Düzenle")]) : _vm._e(),
                    _vm._v(" "),
                    _vm.edit == 1 ? _c("span", [_vm._v("Vazgeç")]) : _vm._e()
                  ]
                )
              ],
              1
            ),
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
                          _vm._v("Firma Adı")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [_vm._v(_vm._s(_vm.company.name))])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value: _vm.editedCompanyData.name,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedCompanyData,
                                        "name",
                                        $$v
                                      )
                                    },
                                    expression: "editedCompanyData.name"
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
                          _vm._v("Telefon")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [_vm._v(_vm._s(_vm.company.phone1))])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value: _vm.editedCompanyData.phone1,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedCompanyData,
                                        "phone1",
                                        $$v
                                      )
                                    },
                                    expression: "editedCompanyData.phone1"
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
                          _vm._v("TC Kimlik/Vergi No\t")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.company.citizenship_no))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value: _vm.editedCompanyData.citizenship_no,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedCompanyData,
                                        "citizenship_no",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "editedCompanyData.citizenship_no"
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
                          _vm._v("Vergi Dairesi")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.company.tax_administration))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value:
                                      _vm.editedCompanyData.tax_administration,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedCompanyData,
                                        "tax_administration",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "editedCompanyData.tax_administration"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { width: "30%" } }, [_vm._v("IBAN")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [_vm._v(_vm._s(_vm.company.iban))])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value: _vm.editedCompanyData.iban,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedCompanyData,
                                        "iban",
                                        $$v
                                      )
                                    },
                                    expression: "editedCompanyData.iban"
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
                          _vm._v("Email")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [_vm._v(_vm._s(_vm.company.email))])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value: _vm.editedCompanyData.email,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedCompanyData,
                                        "email",
                                        $$v
                                      )
                                    },
                                    expression: "editedCompanyData.email"
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
                          _vm._v("Adres")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.company.address))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value: _vm.editedCompanyData.address,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedCompanyData,
                                        "address",
                                        $$v
                                      )
                                    },
                                    expression: "editedCompanyData.address"
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
                          on: { click: _vm.updatecompany }
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
                    "b-tabs",
                    { attrs: { type: "is-toggle" } },
                    [
                      _c(
                        "b-tab-item",
                        {
                          attrs: {
                            label: "Firmanın Kalan Alacakları",
                            icon: "credit-card-outline"
                          }
                        },
                        [
                          _c(
                            "b-table",
                            {
                              attrs: {
                                striped: true,
                                data: _vm.receivables,
                                loading: _vm.loadingTable
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "empty",
                                  fn: function() {
                                    return [
                                      _c(
                                        "div",
                                        { staticClass: "has-text-centered" },
                                        [_vm._v("Kayıt yok")]
                                      )
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
                                              _vm._f("turkishDate")(
                                                props.row.date
                                              )
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
                                attrs: { label: "Vade Tarihi" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(props) {
                                      return [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              _vm._f("turkishDate")(
                                                props.row.due_date
                                              )
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
                                              _vm._f("turkishMoney")(
                                                props.row.amount
                                              )
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
                                attrs: { label: "Kalan" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(props) {
                                      return [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              _vm._f("turkishMoney")(
                                                props.row.amount -
                                                  props.row.payments_sum_amount
                                              )
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
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab-item",
                        { attrs: { label: "Hesap Ekstresi", icon: "receipt" } },
                        [
                          _c(
                            "b-table",
                            {
                              attrs: { striped: true, data: _vm.transactions },
                              scopedSlots: _vm._u([
                                {
                                  key: "empty",
                                  fn: function() {
                                    return [
                                      _c(
                                        "div",
                                        { staticClass: "has-text-centered" },
                                        [_vm._v("Kayıt yok")]
                                      )
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
                                              _vm._f("turkishDate")(
                                                props.row.date
                                              )
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
                                attrs: { label: "Vade Tarihi" },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(props) {
                                      return [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              _vm._f("turkishDate")(
                                                props.row.due_date
                                              )
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
                                              _vm._f("turkishMoney")(
                                                props.row.amount
                                              )
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
                                              _vm._f("turkishMoney")(
                                                props.row.balance
                                              )
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
        _vm._v(
          "\n                        Bakiye Detayları\n                        "
        )
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