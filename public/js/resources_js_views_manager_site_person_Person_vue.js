"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_manager_site_person_Person_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/Person.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/Person.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var AbandonForm = {
  props: ['canCancel'],
  data: function data() {
    return {
      date: '',
      labelPosition: 'inside'
    };
  },
  methods: {
    abandon: function abandon(date) {
      this.$emit('abandon', date);
    }
  },
  template: "\n            <form @submit.prevent=\"abandon(date)\">\n                <div class=\"modal-card\" style=\"width: auto\">\n                    <header class=\"modal-card-head\">\n                        <p class=\"modal-card-title\">B\xF6l\xFCmden \xC7\u0131kar</p>\n                        <button\n                            type=\"button\"\n                            class=\"delete\"\n                            @click=\"$emit('close')\"/>\n                    </header>\n                    <section class=\"modal-card-body\">\n                        <b-field label=\"\xC7\u0131k\u0131\u015F Tarihi\" :label-position=\"labelPosition\">\n                            <b-datepicker\n                                v-model=\"date\"\n                                icon=\"calendar-today\"\n                                trap-focus\n                                >\n                            </b-datepicker>\n                        </b-field>\n\n                    </section>\n                    <footer class=\"modal-card-foot\">\n                        <b-button\n                            label=\"Vazge\xE7\"\n                            @click=\"$emit('close')\"\n                        />\n                        <b-button\n                            label=\"Kaydet\"\n                            type=\"is-primary\"\n                            native-type=\"submit\"\n                        />\n                    </footer>\n                </div>\n            </form>\n        "
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AbandonForm: AbandonForm
  },
  props: ['abandonmentDate'],
  data: function data() {
    return {
      siteID: null,
      personID: null,
      person: {},
      editedPersonData: {},
      loadingUpdateButton: false,
      loadingUnpaidDebitsTable: true,
      isTableEmpty: false,
      edit: 0,
      unpaidDebits: [],
      transactions: [],
      isComponentModalActive: false,
      selectedOccupant: null,
      deleteModal: false,
      loadingDeleteButton: false,
      balance: null
    };
  },
  mounted: function mounted() {
    this.siteID = this.$route.params.sites_id;
    this.personID = this.$route.params.persons_id;
    this.getPerson();
  },
  methods: {
    getPerson: function getPerson() {
      var _this = this;

      axios.get('/api/sites/' + this.siteID + '/persons/' + this.personID).then(function (response) {
        _this.person = response.data.data;

        _this.person.properties.forEach(function (property) {
          property.doorWithBlock = property.block.name ? property.block.name + '-' + property.door_no : property.door_no;
        });

        _this.getPersonDebits();

        _this.getPersonTransactions();
      })["catch"](function (error) {
        console.log(error.response.data);
      }).then(function () {
        _this.loadingUnpaidDebitsTable = false;
      });
    },
    getPersonDebits: function getPersonDebits() {
      var _this2 = this;

      axios.get('/api/sites/' + this.siteID + '/debits', {
        params: {
          persons_id: this.personID,
          except: 'paid'
        }
      }).then(function (response) {
        _this2.unpaidDebits = response.data.data;

        _this2.unpaidDebits.forEach(function (debit) {
          debit.occupant.property.doorWithBlock = debit.occupant.property.block.name ? debit.occupant.property.block.name + '-' + debit.occupant.property.door_no : debit.occupant.property.door_no;
        });
      })["catch"](function (error) {
        console.log(error.response.data);
      }).then(function () {
        _this2.loadingUnpaidDebitsTable = false;
      });
    },
    getPersonTransactions: function getPersonTransactions() {
      var _this3 = this;

      axios.get('/api/sites/' + this.siteID + '/transactions', {
        params: {
          persons_id: this.personID
        }
      }).then(function (response) {
        _this3.transactions = response.data.data.transactions;
        _this3.balance = response.data.data.balance;

        _this3.transactions.forEach(function (debit) {
          debit.occupant.property.doorWithBlock = debit.occupant.property.block.name ? debit.occupant.property.block.name + '-' + debit.occupant.property.door_no : debit.occupant.property.door_no;
        });
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    updatePerson: function updatePerson() {
      var _this4 = this;

      this.loadingUpdateButton = true;
      axios.put('/api/sites/' + this.siteID + '/persons/' + this.personID, {
        name: this.editedPersonData.name,
        email: this.editedPersonData.email,
        password: this.editedPersonData.password,
        citizenship_no: this.editedPersonData.citizenship_no,
        phone1: this.editedPersonData.phone1,
        phone2: this.editedPersonData.phone2
      }).then(function (response) {
        _this4.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this4.getPerson();

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
        Object.assign(this.editedPersonData, this.person);
      }

      this.edit = !this.edit;
    },
    takeOutOccupant: function takeOutOccupant(date) {
      var _this5 = this;

      axios.put('/api/sites/' + this.siteID + '/occupants/' + this.selectedOccupant, {
        abandonment_date: date ? date.toLocaleDateString('tr-TR') : null
      }).then(function (response) {
        _this5.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this5.getPerson();

        _this5.isComponentModalActive = false;
      })["catch"](function (error) {
        _this5.$buefy.toast.open({
          message: error.response.data.message,
          type: 'is-danger'
        });
      });
    },
    deletePerson: function deletePerson() {
      var _this6 = this;

      this.loadingDeleteButton = true;
      axios["delete"]('/api/sites/' + this.siteID + '/accounts/' + this.personID).then(function (response) {
        _this6.$buefy.toast.open({
          message: response.data.message,
          type: 'is-success'
        });

        _this6.$router.push({
          name: 'persons',
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
    }
  }
});

/***/ }),

/***/ "./resources/js/views/manager/site/person/Person.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/manager/site/person/Person.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Person_vue_vue_type_template_id_7ed56ff0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Person.vue?vue&type=template&id=7ed56ff0&scoped=true& */ "./resources/js/views/manager/site/person/Person.vue?vue&type=template&id=7ed56ff0&scoped=true&");
/* harmony import */ var _Person_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Person.vue?vue&type=script&lang=js& */ "./resources/js/views/manager/site/person/Person.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Person_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Person_vue_vue_type_template_id_7ed56ff0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Person_vue_vue_type_template_id_7ed56ff0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7ed56ff0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/manager/site/person/Person.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/manager/site/person/Person.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/manager/site/person/Person.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Person.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/Person.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/manager/site/person/Person.vue?vue&type=template&id=7ed56ff0&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/manager/site/person/Person.vue?vue&type=template&id=7ed56ff0&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_template_id_7ed56ff0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_template_id_7ed56ff0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Person_vue_vue_type_template_id_7ed56ff0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Person.vue?vue&type=template&id=7ed56ff0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/Person.vue?vue&type=template&id=7ed56ff0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/Person.vue?vue&type=template&id=7ed56ff0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/manager/site/person/Person.vue?vue&type=template&id=7ed56ff0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("\n      " + _vm._s(_vm.person.name) + "\n    ")
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
                                name: "newDebit",
                                params: { persons_id: _vm.personID }
                              })
                            }
                          }
                        },
                        [_vm._v("Borçlandır")]
                      ),
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
                        [_vm._v("Tahsil Et")]
                      ),
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
                        [_vm._v("Kişiyi Sil")]
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
                      "\n                        Kişi Bilgisi\n                        "
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
                      _vm.edit == 0
                        ? _c("span", [_vm._v("Düzenle")])
                        : _vm._e(),
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
                            _vm._v("Adı Soyadı")
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _vm.edit == 0
                                ? _c("span", [_vm._v(_vm._s(_vm.person.name))])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.edit == 1
                                ? _c("b-input", {
                                    attrs: { "custom-class": "is-small" },
                                    model: {
                                      value: _vm.editedPersonData.name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedPersonData,
                                          "name",
                                          $$v
                                        )
                                      },
                                      expression: "editedPersonData.name"
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
                            _vm._v("E-Posta")
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _vm.edit == 0
                                ? _c("span", [_vm._v(_vm._s(_vm.person.email))])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.edit == 1
                                ? _c("b-input", {
                                    attrs: { "custom-class": "is-small" },
                                    model: {
                                      value: _vm.editedPersonData.email,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedPersonData,
                                          "email",
                                          $$v
                                        )
                                      },
                                      expression: "editedPersonData.email"
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
                            _vm._v("Şifre")
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _vm.edit == 0
                                ? _c("span", [
                                    _vm._v(_vm._s(_vm.person.password))
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.edit == 1
                                ? _c("b-input", {
                                    attrs: { "custom-class": "is-small" },
                                    model: {
                                      value: _vm.editedPersonData.password,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedPersonData,
                                          "password",
                                          $$v
                                        )
                                      },
                                      expression: "editedPersonData.password"
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
                            _vm._v("TC Kimlik")
                          ]),
                          _vm._v(" "),
                          _c(
                            "td",
                            [
                              _vm.edit == 0
                                ? _c("span", [
                                    _vm._v(_vm._s(_vm.person.citizenship_no))
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.edit == 1
                                ? _c("b-input", {
                                    attrs: { "custom-class": "is-small" },
                                    model: {
                                      value:
                                        _vm.editedPersonData.citizenship_no,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedPersonData,
                                          "citizenship_no",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "editedPersonData.citizenship_no"
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
                                ? _c("span", [
                                    _vm._v(_vm._s(_vm.person.phone1))
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.edit == 1
                                ? _c("b-input", {
                                    attrs: { "custom-class": "is-small" },
                                    model: {
                                      value: _vm.editedPersonData.phone1,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.editedPersonData,
                                          "phone1",
                                          $$v
                                        )
                                      },
                                      expression: "editedPersonData.phone1"
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
                            on: { click: _vm.updatePerson }
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
                      "b-notification",
                      {
                        class: {
                          "is-hidden": _vm.balance == null,
                          "is-danger is-light": _vm.balance < 0,
                          "is-success is-light": _vm.balance >= 0
                        },
                        attrs: { id: "balance-info" }
                      },
                      [
                        _c("b-icon", { attrs: { icon: "cash-multiple" } }),
                        _vm._v(
                          "\n                                Toplam Bakiye:\n                                " +
                            _vm._s(_vm._f("turkishMoney")(_vm.balance)) +
                            "\n                            "
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tabs",
                      { staticClass: "m-0", attrs: { type: "is-toggle" } },
                      [
                        _c(
                          "b-tab-item",
                          {
                            attrs: {
                              label: "Ödenmemiş Borçlandırmalar",
                              icon: "credit-card-outline"
                            }
                          },
                          [
                            _c(
                              "b-table",
                              {
                                attrs: {
                                  striped: true,
                                  loading: _vm.loadingUnpaidDebitsTable,
                                  data: _vm.unpaidDebits
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "empty",
                                    fn: function() {
                                      return [
                                        !_vm.loadingUnpaidDebitsTable
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "has-text-centered"
                                              },
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
                                  attrs: { label: "Açıklama" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "default",
                                      fn: function(props) {
                                        return [
                                          _vm._v(
                                            "\n                            " +
                                              _vm._s(props.row.description) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(props.row.debit_type) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                props.row.occupant.property
                                                  .doorWithBlock
                                              ) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                _vm._f("turkishDate")(
                                                  props.row.date
                                                )
                                              ) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                _vm._f("turkishDate")(
                                                  props.row.due_date
                                                )
                                              ) +
                                              "\n                        "
                                          )
                                        ]
                                      }
                                    }
                                  ])
                                }),
                                _vm._v(" "),
                                _c("b-table-column", {
                                  attrs: { label: "Durumu" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "default",
                                      fn: function(props) {
                                        return [
                                          _vm._v(
                                            "\n                            " +
                                              _vm._s(props.row.status) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                _vm._f("turkishMoney")(
                                                  props.row.amount
                                                )
                                              ) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                _vm._f("turkishMoney")(
                                                  props.row.amount -
                                                    props.row
                                                      .debit_collections_sum_amount
                                                )
                                              ) +
                                              "\n                        "
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
                          {
                            attrs: { label: "Hesap Ekstresi", icon: "receipt" }
                          },
                          [
                            _c(
                              "b-table",
                              {
                                attrs: {
                                  striped: true,
                                  data: _vm.transactions
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
                                  attrs: { label: "Açıklama" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "default",
                                      fn: function(props) {
                                        return [
                                          _vm._v(
                                            "\n                            " +
                                              _vm._s(props.row.description) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                props.row.transaction_type
                                              ) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                props.row.occupant.property
                                                  .doorWithBlock
                                              ) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                _vm._f("turkishDate")(
                                                  props.row.date
                                                )
                                              ) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                _vm._f("turkishDate")(
                                                  props.row.due_date
                                                )
                                              ) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                _vm._f("turkishMoney")(
                                                  props.row.amount
                                                )
                                              ) +
                                              "\n                        "
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
                                            "\n                            " +
                                              _vm._s(
                                                _vm._f("turkishMoney")(
                                                  props.row.balance
                                                )
                                              ) +
                                              "\n                        "
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
          _c("div", { staticClass: "column is-3" }, [
            _c("div", { staticClass: "card" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "card-content" }, [
                _c("div", { staticClass: "content" }, [
                  _c("table", { staticClass: "table is-fullwidth" }, [
                    _c(
                      "tbody",
                      _vm._l(_vm.person.properties, function(property) {
                        return _c("tr", [
                          _c(
                            "td",
                            {
                              staticClass:
                                "is-size-7 is-flex is-justify-content-space-between"
                            },
                            [
                              _c("div", [
                                _c("div", [
                                  _c("span", [
                                    _vm._v(
                                      "\n                                                        " +
                                        _vm._s(property.type) +
                                        "\n                                                    "
                                    )
                                  ]),
                                  _vm._v(
                                    "\n                                                    : " +
                                      _vm._s(property.doorWithBlock) +
                                      "\n                                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "has-text-grey" }, [
                                  _vm._v(
                                    "\n                                                    Giriş:\n                                                    " +
                                      _vm._s(
                                        _vm._f("turkishDate")(
                                          property.entry_date
                                        )
                                      ) +
                                      "\n                                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                property.abandonment_date
                                  ? _c(
                                      "span",
                                      { staticClass: "has-text-grey" },
                                      [
                                        _vm._v(
                                          "\n                                                    Çıkış:\n                                                    " +
                                            _vm._s(
                                              _vm._f("turkishDate")(
                                                property.abandonment_date
                                              )
                                            ) +
                                            "\n                                                "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              !property.abandonment_date
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "is-flex is-align-items-center"
                                    },
                                    [
                                      _c(
                                        "b-button",
                                        {
                                          attrs: {
                                            size: "is-small",
                                            "icon-left": "exit-to-app"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.isComponentModalActive = true
                                              _vm.selectedOccupant =
                                                property.occupants_id
                                            }
                                          }
                                        },
                                        [_vm._v("Çıkart")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
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
                _c("abandon-form", {
                  on: { abandon: _vm.takeOutOccupant, close: props.close }
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
      }),
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
                  return _vm.deletePerson()
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
                      "\n                       Kişi siliniyor. Devam etmek istediğinize emin misiniz?\n                    "
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
          "\n                        Bakiye Detayları\n                        "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "card-header" }, [
      _c("p", { staticClass: "card-header-title" }, [
        _vm._v(
          "\n                        İlgili Bölümler\n                        "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);