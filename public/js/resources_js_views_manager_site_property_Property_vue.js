"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_property_Property_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Property.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Property.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      siteID: null,
      propertyID: null,
      property: {},
      editedPropertyData: {},
      loadingUpdateButton: false,
      loadingDeleteButton: false,
      loadingTable: true,
      edit: 0,
      deleteModal: false,
      types: [],
      blocks: [],
      occupants: []
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.propertyID = this.$route.params.properties_id;
    this.getProperty();
  },
  methods: {
    getProperty: function getProperty() {
      var _this = this;

      axios.get('/api/sites/' + this.siteID + '/properties/' + this.propertyID).then(function (response) {
        _this.property = response.data.data;
        _this.property.doorWithBlock = _this.property.block.name ? _this.property.block.name + '-' + _this.property.door_no : _this.property.door_no;

        _this.getTypes();

        _this.getOccupants();

        _this.getBlocks();
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    getOccupants: function getOccupants() {
      var _this2 = this;

      axios.get('/api/sites/' + this.siteID + '/occupants', {
        params: {
          properties_id: this.propertyID
        }
      }).then(function (response) {
        _this2.occupants = response.data.data;
      }).then(function () {
        _this2.loadingTable = false;
      });
    },
    getTypes: function getTypes() {
      var _this3 = this;

      axios.get('/api/sites/' + this.siteID + '/types').then(function (response) {
        _this3.types = response.data.data;
      });
    },
    getBlocks: function getBlocks() {
      var _this4 = this;

      axios.get('/api/sites/' + this.siteID + '/blocks').then(function (response) {
        _this4.blocks = response.data.data;
      });
    },
    updateProperty: function updateProperty() {
      var _this5 = this;

      this.loadingUpdateButton = true;
      axios.put('/api/sites/' + this.siteID + '/properties/' + this.propertyID, {
        blocks_id: this.editedPropertyData.blocks_id,
        door_no: this.editedPropertyData.door_no,
        types_id: this.editedPropertyData.types_id
      }).then(function (response) {
        _this5.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this5.getProperty();

        _this5.edit = 0;
      })["catch"](function (error) {
        _this5.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this5.loadingUpdateButton = false;
      });
    },
    toggleEdit: function toggleEdit() {
      if (this.edit == 0) {
        Object.assign(this.editedPropertyData, this.property);
      }

      this.edit = !this.edit;
    },
    deleteProperty: function deleteProperty() {
      var _this6 = this;

      this.loadingDeleteButton = true;
      axios["delete"]('/api/sites/' + this.siteID + '/properties/' + this.propertyID).then(function (response) {
        _this6.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this6.$router.push({
          name: 'properties',
          params: {
            sites_id: _this6.siteID
          }
        });
      })["catch"](function (error) {
        _this6.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this6.loadingDeleteButton = false;
      });
    },
    goToPerson: function goToPerson(person) {
      this.$router.push({
        name: 'person',
        params: {
          sites_id: this.siteID,
          persons_id: person.account.id
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/property/Property.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/manager/site/property/Property.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Property_vue_vue_type_template_id_1cc1ddf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Property.vue?vue&type=template&id=1cc1ddf0& */ "./resources/js/views/manager/site/property/Property.vue?vue&type=template&id=1cc1ddf0&");
/* harmony import */ var _Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Property.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/property/Property.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Property_vue_vue_type_template_id_1cc1ddf0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Property_vue_vue_type_template_id_1cc1ddf0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/property/Property.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/property/Property.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/manager/site/property/Property.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Property.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Property.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/property/Property.vue?vue&type=template&id=1cc1ddf0&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/manager/site/property/Property.vue?vue&type=template&id=1cc1ddf0& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_template_id_1cc1ddf0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_template_id_1cc1ddf0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Property_vue_vue_type_template_id_1cc1ddf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Property.vue?vue&type=template&id=1cc1ddf0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Property.vue?vue&type=template&id=1cc1ddf0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Property.vue?vue&type=template&id=1cc1ddf0&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/property/Property.vue?vue&type=template&id=1cc1ddf0& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
              _c("div", { attrs: { name: "hero-left-side" } }, [
                _c("p", { staticClass: "is-size-4 mb-0" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.property.name) +
                      "\n                    "
                  )
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
                              _vm.deleteModal = true
                            }
                          }
                        },
                        [_vm._v("Bölümü Sil")]
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
        _c("div", { staticClass: "card block" }, [
          _c(
            "header",
            { staticClass: "card-header" },
            [
              _c("p", { staticClass: "card-header-title" }, [
                _vm._v(
                  "\n                        Bölüm Bilgisi\n                        "
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
                      _c("td", { attrs: { width: "30%" } }, [_vm._v("Bölüm")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm.edit == 0
                          ? _c("span", [
                              _vm._v(_vm._s(_vm.property.doorWithBlock))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "columns" }, [
                          _c(
                            "div",
                            { staticClass: "column" },
                            [
                              _vm.edit == 1
                                ? _c(
                                    "b-select",
                                    {
                                      attrs: { size: "is-small", expanded: "" },
                                      model: {
                                        value: _vm.editedPropertyData.blocks_id,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.editedPropertyData,
                                            "blocks_id",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "editedPropertyData.blocks_id"
                                      }
                                    },
                                    _vm._l(_vm.blocks, function(block) {
                                      return _c(
                                        "option",
                                        {
                                          key: block.id,
                                          domProps: { value: block.id }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                            " +
                                              _vm._s(block.name) +
                                              "\n                                                        "
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "column" },
                            [
                              _vm.edit == 1
                                ? _c("b-input", {
                                    attrs: { "custom-class": "is-small" },
                                    model: {
                                      value: _vm.editedPropertyData.door_no,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedPropertyData,
                                          "door_no",
                                          $$v
                                        )
                                      },
                                      expression: "editedPropertyData.door_no"
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
                    _c("tr", [
                      _c("td", { attrs: { width: "30%" } }, [_vm._v("Tipi")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _vm.edit == 0
                            ? _c("span", [
                                _vm._v(_vm._s(_vm.property.type.name))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.edit == 1
                            ? _c(
                                "b-select",
                                {
                                  attrs: { size: "is-small", expanded: "" },
                                  model: {
                                    value: _vm.editedPropertyData.types_id,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedPropertyData,
                                        "types_id",
                                        $$v
                                      )
                                    },
                                    expression: "editedPropertyData.types_id"
                                  }
                                },
                                _vm._l(_vm.types, function(type) {
                                  return _c(
                                    "option",
                                    {
                                      key: type.id,
                                      domProps: { value: type.id }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                    " +
                                          _vm._s(type.name) +
                                          "\n                                                "
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { width: "30%" } }, [
                        _vm._v("Aidat Tutarı")
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
                                      _vm.property.type.fee_amount
                                    )
                                  )
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.edit == 1
                            ? _c("vue-autonumeric", {
                                staticClass: "input is-small",
                                attrs: {
                                  options: "commaDecimalCharDotSeparator",
                                  readonly: ""
                                },
                                model: {
                                  value: _vm.editedPropertyData.type.fee_amount,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedPropertyData.type,
                                      "fee_amount",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "editedPropertyData.type.fee_amount"
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
                        on: { click: _vm.updateProperty }
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
                    staticClass: "is-clickable",
                    attrs: {
                      hoverable: true,
                      striped: true,
                      data: _vm.occupants
                    },
                    on: {
                      click: function($event) {
                        return _vm.goToPerson($event)
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "empty",
                        fn: function() {
                          return [
                            !_vm.loadingTable
                              ? _c(
                                  "div",
                                  { staticClass: "has-text-centered" },
                                  [_vm._v("Kayıt yok")]
                                )
                              : _vm._e()
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _c("b-table-column", {
                      attrs: { label: "Giriş" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("turkishDate")(props.row.entry_date)
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
                      attrs: { label: "Çıkış" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm._f("turkishDate")(
                                      props.row.abandonment_date
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
                      attrs: { label: "Kişi" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(props.row.account.name) +
                                  "\n                            "
                              )
                            ]
                          }
                        }
                      ])
                    }),
                    _vm._v(" "),
                    _c("b-table-column", {
                      attrs: { label: "Tip" },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(props) {
                            return [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(props.row.type) +
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
            value: _vm.deleteModal,
            callback: function($$v) {
              _vm.deleteModal = $$v
            },
            expression: "deleteModal"
          }
        },
        [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.deleteProperty()
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
                      _vm._v("İşlemi onaylayın")
                    ]),
                    _vm._v(" "),
                    _c("button", {
                      staticClass: "delete",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          _vm.deleteModal = false
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("section", { staticClass: "modal-card-body" }, [
                    _vm._v(
                      "\n                       Bölüm siliniyor. Devam etmek istediğinize emin misiniz?\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "footer",
                    { staticClass: "modal-card-foot" },
                    [
                      _c("b-button", {
                        attrs: { label: "Vazgeç" },
                        on: {
                          click: function($event) {
                            _vm.deleteModal = false
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("b-button", {
                        attrs: {
                          label: "Kaydet",
                          type: "is-primary",
                          loading: _vm.loadingDeleteButton,
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
    return _c("header", { staticClass: "card-header" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v(
          "\n                        Oturan Geçmişi\n                        "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);