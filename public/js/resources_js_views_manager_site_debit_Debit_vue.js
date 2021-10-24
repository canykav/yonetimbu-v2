"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_debit_Debit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/debit/Debit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/debit/Debit.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      debitID: null,
      debit: {},
      editedDebitData: {},
      loadingUpdateButton: false,
      isTableEmpty: false,
      edit: 0,
      transactions: [],
      receivables: []
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.debitID = this.$route.params.debits_id;
    this.getDebit();
  },
  methods: {
    getDebit: function getDebit() {
      var _this = this;

      axios.get('/api/sites/' + this.siteID + '/debits/' + this.debitID).then(function (response) {
        _this.debit = response.data.data;
        _this.debit.occupant.property.doorWithBlock = _this.debit.occupant.property.block.name ? _this.debit.occupant.property.block.name + '-' + _this.debit.occupant.property.door_no : _this.debit.occupant.property.door_no;
      })["catch"](function (error) {
        console.log(error.response.data);
      }).then(function () {
        _this.loadingTable = false;

        _this.getDebitTransactions();

        _this.getDebitReceivables();
      });
    },
    updateDebit: function updateDebit() {
      var _this2 = this;

      this.loadingUpdateButton = true;
      axios.put('/api/sites/' + this.siteID + '/debits/' + this.debitID, {
        description: this.editedDebitData.description,
        debit_type: this.editedDebitData.debit_type,
        occupants_id: this.editedDebitData.occupants_id,
        amount: this.editedDebitData.amount,
        date: this.editedDebitData.date ? this.editedDebitData.date.toLocaleDateString('tr-TR') : null,
        status: this.editedDebitData.status,
        due_date: this.editedDebitData.due_date ? this.editedDebitData.due_date.toLocaleDateString('tr-TR') : null
      }).then(function (response) {
        _this2.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this2.getDebit();

        _this2.edit = 0;
      })["catch"](function (error) {
        _this2.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this2.loadingUpdateButton = false;
      });
    },
    toggleEdit: function toggleEdit() {
      if (this.edit == 0) {
        Object.assign(this.editedDebitData, this.debit);
        this.editedDebitData.date = new Date(this.editedDebitData.date);
        this.editedDebitData.due_date = new Date(this.editedDebitData.due_date);
      }

      this.edit = !this.edit;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/debit/Debit.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/manager/site/debit/Debit.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Debit_vue_vue_type_template_id_4cf831c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debit.vue?vue&type=template&id=4cf831c2& */ "./resources/js/views/manager/site/debit/Debit.vue?vue&type=template&id=4cf831c2&");
/* harmony import */ var _Debit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Debit.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/debit/Debit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Debit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Debit_vue_vue_type_template_id_4cf831c2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Debit_vue_vue_type_template_id_4cf831c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/debit/Debit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/debit/Debit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/manager/site/debit/Debit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Debit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Debit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/debit/Debit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Debit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/debit/Debit.vue?vue&type=template&id=4cf831c2&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/manager/site/debit/Debit.vue?vue&type=template&id=4cf831c2& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Debit_vue_vue_type_template_id_4cf831c2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Debit_vue_vue_type_template_id_4cf831c2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Debit_vue_vue_type_template_id_4cf831c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Debit.vue?vue&type=template&id=4cf831c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/debit/Debit.vue?vue&type=template&id=4cf831c2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/debit/Debit.vue?vue&type=template&id=4cf831c2&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/debit/Debit.vue?vue&type=template&id=4cf831c2& ***!
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
                _vm._v("\n      " + _vm._s(_vm.debit.description) + "\n    ")
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
                              name: "newDebitCollection",
                              params: {
                                debits_id: _vm.debitID,
                                persons_id: _vm.debit.occupant.accounts_id,
                                occupants_id: _vm.debit.occupants_id
                              }
                            })
                          }
                        }
                      },
                      [_vm._v("Tahsilat Ekle")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      {
                        attrs: { "aria-role": "listitem" },
                        on: {
                          click: function($event) {
                            return _vm.$router.push({
                              name: "newDebitCollection",
                              params: { persons_id: _vm.personID }
                            })
                          }
                        }
                      },
                      [_vm._v("Tahsilatla İlişkilendir")]
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
                    "\n                        Borçlandırma Bilgisi\n                        "
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
                          _vm._v("Açıklama")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.debit.description))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value: _vm.editedDebitData.description,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedDebitData,
                                        "description",
                                        $$v
                                      )
                                    },
                                    expression: "editedDebitData.description"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { width: "30%" } }, [_vm._v("Türü")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(_vm._s(_vm.debit.debit_type))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value: _vm.editedDebitData.debit_type,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedDebitData,
                                        "debit_type",
                                        $$v
                                      )
                                    },
                                    expression: "editedDebitData.debit_type"
                                  }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { width: "30%" } }, [_vm._v("Kişi")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(_vm.debit.occupant.account.name)
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value:
                                      _vm.editedDebitData.occupant.account.name,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedDebitData.occupant.account,
                                        "name",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "editedDebitData.occupant.account.name"
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
                          _vm._v("Bölüm")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.debit.occupant.property.doorWithBlock
                                    )
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: { "custom-class": "is-small" },
                                  model: {
                                    value:
                                      _vm.editedDebitData.occupant.property
                                        .doorWithBlock,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedDebitData.occupant.property,
                                        "doorWithBlock",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "editedDebitData.occupant.property.doorWithBlock"
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
                          _vm._v("Tutar")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("turkishMoney")(_vm.debit.amount)
                                    )
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("vue-autonumeric", {
                                  staticClass: "input is-small",
                                  attrs: {
                                    options: "commaDecimalCharDotSeparator"
                                  },
                                  model: {
                                    value: _vm.editedDebitData.amount,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedDebitData,
                                        "amount",
                                        $$v
                                      )
                                    },
                                    expression: "editedDebitData.amount"
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
                          _vm._v("Kalan Tutar")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("turkishMoney")(
                                        _vm.debit.amount -
                                          _vm.debit.debit_collections_sum_amount
                                      )
                                    )
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c("b-input", {
                                  attrs: {
                                    "custom-class": "is-small",
                                    readonly: ""
                                  },
                                  model: {
                                    value: _vm.editedDebitData.email,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedDebitData,
                                        "email",
                                        $$v
                                      )
                                    },
                                    expression: "editedDebitData.email"
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
                          _vm._v("Tarih")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("turkishDate")(_vm.debit.date)
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
                                    value: _vm.editedDebitData.date,
                                    callback: function($$v) {
                                      _vm.$set(_vm.editedDebitData, "date", $$v)
                                    },
                                    expression: "editedDebitData.date"
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
                          _vm._v("Durumu")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [_vm._v(_vm._s(_vm.debit.status))])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.edit == 1
                              ? _c(
                                  "b-select",
                                  {
                                    attrs: { size: "is-small", expanded: "" },
                                    model: {
                                      value: _vm.editedDebitData.status,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedDebitData,
                                          "status",
                                          $$v
                                        )
                                      },
                                      expression: "editedDebitData.status"
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      { attrs: { value: "pending" } },
                                      [_vm._v("Ödenmedi")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "partial" } },
                                      [_vm._v("Kısmi Ödeme")]
                                    ),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "paid" } }, [
                                      _vm._v("Ödendi")
                                    ])
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { attrs: { width: "30%" } }, [
                          _vm._v("Son Ödeme Tarihi")
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _vm.edit == 0
                              ? _c("span", [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("turkishDate")(_vm.debit.due_date)
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
                                    value: _vm.editedDebitData.due_date,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedDebitData,
                                        "due_date",
                                        $$v
                                      )
                                    },
                                    expression: "editedDebitData.due_date"
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
                          on: { click: _vm.updateDebit }
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
          _vm.debit.status != "Ödenmedi"
            ? _c("div", { staticClass: "card block" }, [
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
                            data: _vm.debit.debit_collections,
                            loading: _vm.loadingTable
                          },
                          scopedSlots: _vm._u(
                            [
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
                            ],
                            null,
                            false,
                            3343670916
                          )
                        },
                        [
                          _c("b-table-column", {
                            attrs: { label: "Tarih" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(props) {
                                    return [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            _vm._f("turkishDate")(
                                              props.row.collection.date
                                            )
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              3798325878
                            )
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: { label: "Açıklama" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(props) {
                                    return [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            props.row.collection.description
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              578335619
                            )
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: { label: "Kasa" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(props) {
                                    return [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(
                                            props.row.collection.vault.name
                                          ) +
                                          "\n                            "
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              false,
                              3875384438
                            )
                          }),
                          _vm._v(" "),
                          _c("b-table-column", {
                            attrs: { label: "Tutar" },
                            scopedSlots: _vm._u(
                              [
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
                              ],
                              null,
                              false,
                              4277973362
                            )
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ])
            : _vm._e()
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
          "\n                        Geçmiş Ödemeler\n                        "
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