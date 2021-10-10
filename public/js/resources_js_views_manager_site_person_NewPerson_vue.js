"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_person_NewPerson_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/NewPerson.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/NewPerson.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
var ModalForm = {
  props: ['properties', 'password', 'canCancel', 'loadingBlocksInput'],
  data: function data() {
    return {
      newProperty: {},
      labelPosition: 'inside'
    };
  },
  methods: {
    addProperty: function addProperty(p) {
      this.$emit('newProperty', p);
      this.newProperty = {};
    }
  },
  template: "\n            <form @submit.prevent=\"addProperty(newProperty)\">\n                <div class=\"modal-card\" style=\"width: auto\">\n                    <header class=\"modal-card-head\">\n                        <p class=\"modal-card-title\">B\xF6l\xFCm Ba\u011Fla</p>\n                        <button\n                            type=\"button\"\n                            class=\"delete\"\n                            @click=\"$emit('close')\"/>\n                    </header>\n                    <section class=\"modal-card-body\">\n                        <b-field label=\"B\xF6l\xFCm\" :label-position=\"labelPosition\">\n                            <b-select v-model=\"newProperty.property\" expanded>\n                                <option v-for=\"property in properties\" :key=\"property.id\" :value=\"property\">{{property.doorWithBlock}}</option>\n                            </b-select>\n                        </b-field>\n                        <b-field label=\"Durum\" :label-position=\"labelPosition\">\n                            <b-select v-model=\"newProperty.type\" expanded>\n                                <option value=\"householder\">Kat Maliki</option>\n                                <option value=\"tenant\">Kirac\u0131</option>\n                            </b-select>\n                        </b-field>\n\n                        <b-field label=\"Giri\u015F Tarihi\" :label-position=\"labelPosition\">\n                            <b-datepicker\n                                v-model=\"newProperty.entry_date\"\n                                icon=\"calendar-today\"\n                                trap-focus>\n                            </b-datepicker>\n                        </b-field>\n                        <b-field label=\"\xC7\u0131k\u0131\u015F Tarihi\" :label-position=\"labelPosition\">\n                            <b-datepicker\n                                v-model=\"newProperty.abandonment_date\"\n                                icon=\"calendar-today\"\n                                trap-focus>\n                            </b-datepicker>\n                        </b-field>\n\n                    </section>\n                    <footer class=\"modal-card-foot\">\n                        <b-button\n                            label=\"Vazge\xE7\"\n                            @click=\"$emit('close')\"\n                        />\n                        <b-button\n                            label=\"Kaydet\"\n                            type=\"is-primary\"\n                            native-type=\"submit\"\n                        />\n                    </footer>\n                </div>\n            </form>\n        "
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['newProperty'],
  components: {
    ModalForm: ModalForm
  },
  data: function data() {
    return {
      siteID: null,
      newPerson: {},
      personProperties: [],
      labelPosition: 'inside',
      loadingButton: false,
      isComponentModalActive: false,
      properties: []
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
      });
    },
    createPerson: function createPerson() {
      var _this2 = this;

      this.loadingButton = true;
      axios.post('/api/sites/' + this.siteID + '/persons', {
        name: this.newPerson.name,
        phone1: this.newPerson.phone1,
        phone2: this.newPerson.phone2,
        citizenship_no: this.newPerson.citizenship_no,
        email: this.newPerson.email,
        properties: this.personProperties
      }).then(function (response) {
        _this2.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this2.newPerson = {};
        _this2.personProperties = [];

        _this2.$router.push({
          name: 'persons',
          params: {
            sites_id: _this2.siteID
          }
        });
      })["catch"](function (error) {
        _this2.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      }).then(function () {
        _this2.loadingButton = false;
      });
    },
    addProperty: function addProperty(e) {
      this.personProperties.push(Object.assign(e));
      this.isComponentModalActive = false;
    },
    removeProperty: function removeProperty(index) {
      this.personProperties.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/person/NewPerson.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/manager/site/person/NewPerson.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewPerson_vue_vue_type_template_id_682a3a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewPerson.vue?vue&type=template&id=682a3a9c& */ "./resources/js/views/manager/site/person/NewPerson.vue?vue&type=template&id=682a3a9c&");
/* harmony import */ var _NewPerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewPerson.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/person/NewPerson.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NewPerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NewPerson_vue_vue_type_template_id_682a3a9c___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewPerson_vue_vue_type_template_id_682a3a9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/person/NewPerson.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/person/NewPerson.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/manager/site/person/NewPerson.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewPerson.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/NewPerson.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/person/NewPerson.vue?vue&type=template&id=682a3a9c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/manager/site/person/NewPerson.vue?vue&type=template&id=682a3a9c& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPerson_vue_vue_type_template_id_682a3a9c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPerson_vue_vue_type_template_id_682a3a9c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewPerson_vue_vue_type_template_id_682a3a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewPerson.vue?vue&type=template&id=682a3a9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/NewPerson.vue?vue&type=template&id=682a3a9c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/NewPerson.vue?vue&type=template&id=682a3a9c&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/NewPerson.vue?vue&type=template&id=682a3a9c& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "container block mt-6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c(
              "div",
              { staticClass: "content" },
              [
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column" }, [
                    _c("p", [_vm._v("Kişi Bilgisi")]),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        attrs: { id: "newPersonForm" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.createPerson()
                          }
                        }
                      },
                      [
                        _c(
                          "b-field",
                          {
                            attrs: {
                              label: "Adı Soyadı",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { required: "" },
                              model: {
                                value: _vm.newPerson.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.newPerson, "name", $$v)
                                },
                                expression: "newPerson.name"
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
                              label: "Telefon 1",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c("b-input", {
                              model: {
                                value: _vm.newPerson.phone1,
                                callback: function($$v) {
                                  _vm.$set(_vm.newPerson, "phone1", $$v)
                                },
                                expression: "newPerson.phone1"
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
                              label: "Telefon 2",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c("b-input", {
                              model: {
                                value: _vm.newPerson.phone2,
                                callback: function($$v) {
                                  _vm.$set(_vm.newPerson, "phone2", $$v)
                                },
                                expression: "newPerson.phone2"
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
                              label: "TC Kimlik",
                              "label-position": _vm.labelPosition
                            }
                          },
                          [
                            _c("b-input", {
                              attrs: { maxlength: "11" },
                              model: {
                                value: _vm.newPerson.citizenship_no,
                                callback: function($$v) {
                                  _vm.$set(_vm.newPerson, "citizenship_no", $$v)
                                },
                                expression: "newPerson.citizenship_no"
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
                                value: _vm.newPerson.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.newPerson, "email", $$v)
                                },
                                expression: "newPerson.email"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "column" },
                    [
                      _c("p", [_vm._v("Bölüm Bilgisi")]),
                      _vm._v(" "),
                      _c(
                        "ul",
                        {
                          staticClass: "new-person-property-list ml-0",
                          staticStyle: { "font-size": "14px" }
                        },
                        _vm._l(_vm.personProperties, function(item, index) {
                          return _c(
                            "li",
                            {
                              staticClass:
                                "is-flex is-justify-content-space-between"
                            },
                            [
                              _c("div", [
                                _c(
                                  "div",
                                  {
                                    staticClass: "has-text-weight-medium mb-1"
                                  },
                                  [
                                    item.type == "householder"
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                        Kat Maliki\n                    "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    item.type == "tenant"
                                      ? _c("span", [
                                          _vm._v(
                                            "\n                        Kiracı\n                    "
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(
                                      "\n                    : " +
                                        _vm._s(item.property.doorWithBlock) +
                                        "\n                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "has-text-grey" }, [
                                  _vm._v(
                                    "\n                    Giriş:\n                    " +
                                      _vm._s(
                                        _vm._f("turkishDate")(item.entry_date)
                                      ) +
                                      "\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                item.abandonment_date
                                  ? _c(
                                      "span",
                                      { staticClass: "has-text-grey" },
                                      [
                                        _vm._v(
                                          "\n                    Çıkış:\n                    " +
                                            _vm._s(
                                              _vm._f("turkishDate")(
                                                item.abandonment_date
                                              )
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "is-flex is-align-items-center"
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.removeProperty(index)
                                        }
                                      }
                                    },
                                    [
                                      _c("b-icon", {
                                        attrs: { icon: "trash-can" }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              )
                            ]
                          )
                        }),
                        0
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { expanded: "", "icon-left": "plus-box" },
                          on: {
                            click: function($event) {
                              _vm.isComponentModalActive = true
                            }
                          }
                        },
                        [_vm._v("Bölüm Ekle")]
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
                          loading: _vm.loadingButton,
                          form: "newPersonForm"
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
      _c("b-modal", {
        attrs: {
          "has-modal-card": "",
          "trap-focus": "",
          "destroy-on-hide": false,
          "aria-role": "dialog",
          "aria-label": "Example Modal",
          "aria-modal": ""
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return [
                _c("modal-form", {
                  attrs: { properties: _vm.properties },
                  on: { newProperty: _vm.addProperty, close: props.close }
                })
              ]
            }
          }
        ]),
        model: {
          value: _vm.isComponentModalActive,
          callback: function($$v) {
            _vm.isComponentModalActive = $$v
          },
          expression: "isComponentModalActive"
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
                _vm._v("\n      Yeni Kişi\n    ")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "has-text-grey is-size-7" }, [
                _vm._v(
                  "Sitede oturan ya da mülk sahibi olarak ekleyebileceğin yeni bir kişi."
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