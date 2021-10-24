"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_collection_Collection_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/Collection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/Collection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      collectionID: null,
      collection: {},
      editedCollectionData: {},
      loadingUpdateButton: false,
      loadingDeleteButton: false,
      loadingTable: true,
      edit: 0,
      deleteModal: false
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.collectionID = this.$route.params.collections_id;
    this.getCollection();
  },
  methods: {
    getCollection: function getCollection() {
      var _this = this;

      axios.get('/api/sites/' + this.siteID + '/collections/' + this.collectionID).then(function (response) {
        _this.collection = response.data.data;
        _this.collection.occupant.property.doorWithBlock = _this.collection.occupant.property.block.name ? _this.collection.occupant.property.block.name + '-' + _this.collection.occupant.property.door_no : _this.collection.occupant.property.door_no;
      })["catch"](function (error) {
        console.log(error.response.data);
      }).then(function () {
        _this.loadingTable = false;
      });
    },
    updateCollection: function updateCollection() {
      var _this2 = this;

      this.loadingUpdateButton = true;
      axios.put('/api/sites/' + this.siteID + '/collections/' + this.collectionID, {
        name: this.editedCollectionData.name,
        keeper: this.editedCollectionData.keeper,
        bought_date: this.editedCollectionData.bought_date ? this.editedCollectionData.bought_date.toLocaleDateString('tr-TR') : null,
        unit: this.editedCollectionData.unit,
        unit_price: this.editedCollectionData.unit_price
      }).then(function (response) {
        _this2.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this2.getCollection();

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
        Object.assign(this.editedCollectionData, this.collection);
        this.editedCollectionData.bought_date = new Date(this.editedCollectionData.bought_date);
      }

      this.edit = !this.edit;
    },
    deleteCollection: function deleteCollection() {
      var _this3 = this;

      this.loadingDeleteButton = true;
      axios["delete"]('/api/sites/' + this.siteID + '/collections/' + this.collectionID).then(function (response) {
        _this3.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this3.$router.push({
          name: 'collections',
          params: {
            sites_id: _this3.siteID
          }
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

/***/ "./resources/js/views/manager/site/collection/Collection.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/views/manager/site/collection/Collection.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Collection_vue_vue_type_template_id_286c3268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection.vue?vue&type=template&id=286c3268& */ "./resources/js/views/manager/site/collection/Collection.vue?vue&type=template&id=286c3268&");
/* harmony import */ var _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/collection/Collection.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Collection_vue_vue_type_template_id_286c3268___WEBPACK_IMPORTED_MODULE_0__.render,
  _Collection_vue_vue_type_template_id_286c3268___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/collection/Collection.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/collection/Collection.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/manager/site/collection/Collection.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Collection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/Collection.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/collection/Collection.vue?vue&type=template&id=286c3268&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/manager/site/collection/Collection.vue?vue&type=template&id=286c3268& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_286c3268___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_286c3268___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_286c3268___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Collection.vue?vue&type=template&id=286c3268& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/Collection.vue?vue&type=template&id=286c3268&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/Collection.vue?vue&type=template&id=286c3268&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/collection/Collection.vue?vue&type=template&id=286c3268& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
                      _vm._s(_vm.collection.name) +
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
                        [_vm._v("Tahsilatı Sil")]
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
                  "\n                        Tahsilat Bilgisi\n                        "
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
                                _vm._v(_vm._s(_vm.collection.description))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.edit == 1
                            ? _c("b-input", {
                                attrs: { "custom-class": "is-small" },
                                model: {
                                  value: _vm.editedCollectionData.description,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedCollectionData,
                                      "description",
                                      $$v
                                    )
                                  },
                                  expression: "editedCollectionData.description"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { width: "30%" } }, [_vm._v("Tarih")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _vm.edit == 0
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("turkishDate")(_vm.collection.date)
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
                                  value: _vm.editedCollectionData.date,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedCollectionData,
                                      "date",
                                      $$v
                                    )
                                  },
                                  expression: "editedCollectionData.date"
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
                            ? _c(
                                "span",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "person",
                                          params: {
                                            sites_id: _vm.siteID,
                                            persons_id:
                                              _vm.collection.occupant.account.id
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.collection.occupant.account.name
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.edit == 1
                            ? _c("b-input", {
                                attrs: { "custom-class": "is-small" },
                                model: {
                                  value:
                                    _vm.editedCollectionData.occupant.account
                                      .name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedCollectionData.occupant.account,
                                      "name",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "editedCollectionData.occupant.account.name"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { width: "30%" } }, [_vm._v("Bölüm")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _vm.edit == 0
                            ? _c(
                                "span",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "property",
                                          params: {
                                            sites_id: _vm.siteID,
                                            properties_id:
                                              _vm.collection.occupant.property
                                                .id
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.collection.occupant.property
                                            .doorWithBlock
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.edit == 1
                            ? _c("b-input", {
                                attrs: { "custom-class": "is-small" },
                                model: {
                                  value:
                                    _vm.editedCollectionData.occupant.property
                                      .doorWithBlock,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedCollectionData.occupant
                                        .property,
                                      "doorWithBlock",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "editedCollectionData.occupant.property.doorWithBlock"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { width: "30%" } }, [_vm._v("Tutar")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _vm.edit == 0
                            ? _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("turkishMoney")(
                                      _vm.collection.amount
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
                                  options: "commaDecimalCharDotSeparator"
                                },
                                model: {
                                  value: _vm.editedCollectionData.amount,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedCollectionData,
                                      "amount",
                                      $$v
                                    )
                                  },
                                  expression: "editedCollectionData.amount"
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { width: "30%" } }, [_vm._v("Kasa")]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _vm.edit == 0
                            ? _c("span", [
                                _vm._v(_vm._s(_vm.collection.vault.name))
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.edit == 1
                            ? _c("b-input", {
                                attrs: { "custom-class": "is-small" },
                                model: {
                                  value: _vm.editedCollectionData.vault.name,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.editedCollectionData.vault,
                                      "name",
                                      $$v
                                    )
                                  },
                                  expression: "editedCollectionData.vault.name"
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
                        on: { click: _vm.updateCollection }
                      },
                      [_vm._v("Kaydet")]
                    )
                  : _vm._e()
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
                  return _vm.deleteCollection()
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
                      "\n                       Tahsilat siliniyor. Devam etmek istediğinize emin misiniz?\n                    "
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);