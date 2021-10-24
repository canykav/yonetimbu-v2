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
var OccupantForm = {
  props: ['canCancel'],
  data: function data() {
    return {
      newOccupant: {},
      labelPosition: 'inside'
    };
  },
  methods: {
    addOccupant: function addOccupant(newOccupant) {
      this.$emit('addOccupant', newOccupant);
      this.newOccupant = {};
    }
  },
  template: "\n            <form @submit.prevent=\"addOccupant(newOccupant)\">\n                <div class=\"modal-card\" style=\"width: auto\">\n                    <header class=\"modal-card-head\">\n                        <p class=\"modal-card-title\">Oturan Ekle</p>\n                        <button\n                            type=\"button\"\n                            class=\"delete\"\n                            @click=\"$emit('close')\"/>\n                    </header>\n                    <section class=\"modal-card-body\">\n                        <b-field label=\"Ki\u015Fi Ad\u0131\" :label-position=\"labelPosition\">\n                            <b-input v-model=\"newOccupant.name\"></b-input>\n                        </b-field>\n\n                        <b-field label=\"Giri\u015F Tarihi\" :label-position=\"labelPosition\">\n                            <b-datepicker\n                                v-model=\"newOccupant.entry_date\"\n                                icon=\"calendar-today\"\n                                trap-focus\n                                >\n                            </b-datepicker>\n                        </b-field>\n\n                    </section>\n                    <footer class=\"modal-card-foot\">\n                        <b-button\n                            label=\"Vazge\xE7\"\n                            @click=\"$emit('close')\"\n                        />\n                        <b-button\n                            label=\"Kaydet\"\n                            type=\"is-primary\"\n                            native-type=\"submit\"\n                        />\n                    </footer>\n                </div>\n            </form>\n        "
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    OccupantForm: OccupantForm
  },
  data: function data() {
    return {
      siteID: null,
      properties: [{
        householder: {},
        tenant: {},
        type: {}
      }],
      loadingTable: true,
      addOccupantModal: false,
      occupantType: null,
      selectedProperty: null
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
    },
    addOccupant: function addOccupant(newOccupant) {
      var _this2 = this;

      axios.post('/api/sites/' + this.siteID + '/occupants/', {
        name: newOccupant.name,
        type: this.occupantType,
        properties_id: this.selectedProperty,
        entry_date: newOccupant.entry_date ? newOccupant.entry_date.toLocaleDateString('tr-TR') : null
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
      _c("b-modal", {
        attrs: {
          "has-modal-card": "",
          "trap-focus": "",
          "destroy-on-hide": false,
          "aria-role": "dialog",
          "aria-modal": ""
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return [
                _c("occupant-form", {
                  on: { addOccupant: _vm.addOccupant, close: props.close }
                })
              ]
            }
          }
        ]),
        model: {
          value: _vm.addOccupantModal,
          callback: function($$v) {
            _vm.addOccupantModal = $$v
          },
          expression: "addOccupantModal"
        }
      })
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