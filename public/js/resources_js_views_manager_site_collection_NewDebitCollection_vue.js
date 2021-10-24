"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_collection_NewDebitCollection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      labelPosition: 'inside',
      persons: [],
      properties: [],
      selectedPerson: null,
      newCollection: {
        selectedPerson: null,
        occupants_id: null
      },
      vaults: [],
      debitsCard: false,
      unpaidDebits: []
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.getSitePersons();
    this.getSiteVaults();
  },
  watch: {
    'newCollection.selectedPerson': function newCollectionSelectedPerson() {
      this.newCollection.occupants_id = null;
    },
    'newCollection.occupants_id': function newCollectionOccupants_id() {
      if (this.newCollection.occupants_id != null) {
        this.getOccupantDebits();
      }
    }
  },
  methods: {
    getSitePersons: function getSitePersons() {
      var _this = this;

      axios.get('/api/sites/' + this.siteID + '/persons').then(function (response) {
        _this.persons = response.data.data;

        if (_this.$route.params.persons_id) {
          _this.newCollection.selectedPerson = _this.$route.params.persons_id;

          _this.getPersonProperties(_this.newCollection.selectedPerson);
        }
      }).then(function () {
        _this.loadingTable = false;
      });
    },
    getSiteVaults: function getSiteVaults() {
      var _this2 = this;

      axios.get('/api/sites/' + this.siteID + '/vaults').then(function (response) {
        _this2.vaults = response.data.data;
      });
    },
    getOccupantDebits: function getOccupantDebits() {
      var _this3 = this;

      axios.get('/api/sites/' + this.siteID + '/debits', {
        params: {
          occupants_id: this.newCollection.occupants_id,
          except: 'paid'
        }
      }).then(function (response) {
        _this3.unpaidDebits = response.data.data;

        _this3.unpaidDebits.forEach(function (debit) {
          debit.occupant.property.doorWithBlock = debit.occupant.property.block.name ? debit.occupant.property.block.name + '-' + debit.occupant.property.door_no : debit.occupant.property.door_no;
        });

        if (_this3.$route.params.debits_id) {
          _this3.newCollection.selectedDebit = _this3.$route.params.debits_id;
        }
      });
    },
    getPersonProperties: function getPersonProperties(person) {
      var _this4 = this;

      axios.get('/api/sites/' + this.siteID + '/properties', {
        params: {
          accounts_id: person
        }
      }).then(function (response) {
        _this4.properties = response.data.data;

        _this4.properties.forEach(function (property) {
          property.doorWithBlock = property.block.name ? property.block.name + '-' + property.door_no : property.door_no;
        });

        if (_this4.$route.params.occupants_id) {
          _this4.newCollection.occupants_id = _this4.$route.params.occupants_id;
        }
      }).then(function () {
        _this4.loadingTable = false;
      });
    },
    createCollection: function createCollection() {
      var _this5 = this;

      this.loadingButton = true;
      axios.post('/api/sites/' + this.siteID + '/collections', {
        occupants_id: this.newCollection.occupants_id,
        description: this.newCollection.description,
        date: this.newCollection.date.toLocaleDateString('tr-TR'),
        amount: this.newCollection.amount,
        vaults_id: this.newCollection.vaults_id,
        debits_id: this.newCollection.selectedDebit
      }).then(function (response) {
        _this5.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this5.newCollection = {};

        _this5.$router.push({
          name: 'collections',
          params: {
            sites_id: _this5.siteID
          }
        });
      })["catch"](function (error) {
        _this5.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this5.loadingButton = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/collection/NewDebitCollection.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/views/manager/site/collection/NewDebitCollection.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewDebitCollection_vue_vue_type_template_id_623ca298___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewDebitCollection.vue?vue&type=template&id=623ca298& */ "./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=template&id=623ca298&");
/* harmony import */ var _NewDebitCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewDebitCollection.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NewDebitCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NewDebitCollection_vue_vue_type_template_id_623ca298___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewDebitCollection_vue_vue_type_template_id_623ca298___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/collection/NewDebitCollection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewDebitCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewDebitCollection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewDebitCollection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=template&id=623ca298&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=template&id=623ca298& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewDebitCollection_vue_vue_type_template_id_623ca298___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewDebitCollection_vue_vue_type_template_id_623ca298___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewDebitCollection_vue_vue_type_template_id_623ca298___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewDebitCollection.vue?vue&type=template&id=623ca298& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=template&id=623ca298&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=template&id=623ca298&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/NewDebitCollection.vue?vue&type=template&id=623ca298& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "columns" }, [
        _c(
          "div",
          {
            staticClass: "column",
            class: {
              "is-12": !_vm.newCollection.occupants_id,
              "is-6": _vm.newCollection.occupants_id != null
            }
          },
          [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c("section", [
                    _c("p", [_vm._v("Borç Bilgileri")]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        attrs: { id: "newCollectionForm" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.createCollection()
                          }
                        }
                      },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Kişi",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c("div", { staticClass: "control is-clearfix" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.newCollection.selectedPerson,
                                      expression: "newCollection.selectedPerson"
                                    }
                                  ],
                                  staticClass: "select input is-fullwidth",
                                  on: {
                                    change: [
                                      function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.newCollection,
                                          "selectedPerson",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      },
                                      function($event) {
                                        return _vm.getPersonProperties(
                                          _vm.newCollection.selectedPerson
                                        )
                                      }
                                    ]
                                  }
                                },
                                _vm._l(_vm.persons, function(person) {
                                  return _c(
                                    "option",
                                    {
                                      key: person.id,
                                      domProps: { value: person.id }
                                    },
                                    [_vm._v(_vm._s(person.name))]
                                  )
                                }),
                                0
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Bölüm",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c("div", { staticClass: "control is-clearfix" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.newCollection.occupants_id,
                                      expression: "newCollection.occupants_id"
                                    }
                                  ],
                                  staticClass: "select input is-fullwidth",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.newCollection,
                                        "occupants_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                _vm._l(_vm.properties, function(property) {
                                  return _c(
                                    "option",
                                    {
                                      key: property.id,
                                      domProps: { value: property.occupants_id }
                                    },
                                    [_vm._v(_vm._s(property.doorWithBlock))]
                                  )
                                }),
                                0
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Açıklama",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c("b-input", {
                              model: {
                                value: _vm.newCollection.description,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.newCollection,
                                    "description",
                                    $$v
                                  )
                                },
                                expression: "newCollection.description"
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
                              label: "Tarih",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c("b-datepicker", {
                              attrs: {
                                icon: "calendar-today",
                                "trap-focus": ""
                              },
                              model: {
                                value: _vm.newCollection.date,
                                callback: function($$v) {
                                  _vm.$set(_vm.newCollection, "date", $$v)
                                },
                                expression: "newCollection.date"
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
                              label: "Tutar",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "control is-clearfix" },
                              [
                                _c("vue-autonumeric", {
                                  staticClass: "input",
                                  attrs: {
                                    options: "commaDecimalCharDotSeparator"
                                  },
                                  model: {
                                    value: _vm.newCollection.amount,
                                    callback: function($$v) {
                                      _vm.$set(_vm.newCollection, "amount", $$v)
                                    },
                                    expression: "newCollection.amount"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Kasa",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c("div", { staticClass: "control is-clearfix" }, [
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.newCollection.vaults_id,
                                      expression: "newCollection.vaults_id"
                                    }
                                  ],
                                  staticClass: "select input is-fullwidth",
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.newCollection,
                                        "vaults_id",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                _vm._l(_vm.vaults, function(vault) {
                                  return _c(
                                    "option",
                                    {
                                      key: vault.id,
                                      domProps: { value: vault.id }
                                    },
                                    [_vm._v(_vm._s(vault.name))]
                                  )
                                }),
                                0
                              )
                            ])
                          ]
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
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column",
            class: {
              "is-hidden": !_vm.newCollection.occupants_id,
              "is-6": _vm.newCollection.occupants_id != null
            }
          },
          [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-content" }, [
                _c(
                  "div",
                  { staticClass: "content" },
                  [
                    _c("p", [_vm._v("Seçilebilir Borçlandırmalar")]),
                    _vm._v(" "),
                    _c(
                      "b-table",
                      {
                        attrs: { striped: true, data: _vm.unpaidDebits },
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
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c("b-radio", {
                                    attrs: {
                                      name: "selectedDebit",
                                      "native-value": props.row.id,
                                      size: "is-small"
                                    },
                                    model: {
                                      value: _vm.newCollection.selectedDebit,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.newCollection,
                                          "selectedDebit",
                                          $$v
                                        )
                                      },
                                      expression: "newCollection.selectedDebit"
                                    }
                                  })
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
                                    "\n                        " +
                                      _vm._s(props.row.description) +
                                      "\n                    "
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: { label: "Bölüm" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        props.row.occupant.property
                                          .doorWithBlock
                                      ) +
                                      "\n                    "
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: { label: "Tarih" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm._f("turkishDate")(props.row.date)
                                      ) +
                                      "\n                    "
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
                                    "\n                        " +
                                      _vm._s(
                                        _vm._f("turkishDate")(
                                          props.row.due_date
                                        )
                                      ) +
                                      "\n                    "
                                  )
                                ]
                              }
                            }
                          ])
                        }),
                        _vm._v(" "),
                        _c("b-table-column", {
                          attrs: { label: "Toplam" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(
                                        _vm._f("turkishMoney")(props.row.amount)
                                      ) +
                                      "\n                    "
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
                                    "\n                        " +
                                      _vm._s(
                                        _vm._f("turkishMoney")(
                                          props.row.amount -
                                            props.row
                                              .debit_collections_sum_amount
                                        )
                                      ) +
                                      "\n                    "
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
          ]
        )
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
                _vm._v(
                  "\n                        Yeni Borç Tahsilatı\n                    "
                )
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