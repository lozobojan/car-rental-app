(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Attachments/Attachment */ "./resources/adminapp/js/components/Attachments/Attachment.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Attachment: _components_Attachments_Attachment__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      status: '',
      activeField: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('VehiclesSingle', ['entry', 'loading', 'lists'])),
  mounted: function mounted() {
    this.fetchCreateData();
  },
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('VehiclesSingle', ['storeData', 'resetState', 'setRegistrationPlates', 'setYear', 'setNumberOfSeats', 'setPricePerDay', 'setRemarks', 'setVehicleType', 'insertPhotosFile', 'removePhotosFile', 'fetchCreateData'])), {}, {
    updateRegistrationPlates: function updateRegistrationPlates(e) {
      this.setRegistrationPlates(e.target.value);
    },
    updateYear: function updateYear(e) {
      this.setYear(e.target.value);
    },
    updateNumberOfSeats: function updateNumberOfSeats(e) {
      this.setNumberOfSeats(e.target.value);
    },
    updatePricePerDay: function updatePricePerDay(e) {
      this.setPricePerDay(e.target.value);
    },
    updateRemarks: function updateRemarks(e) {
      this.setRemarks(e.target.value);
    },
    updateVehicleType: function updateVehicleType(value) {
      this.setVehicleType(value);
    },
    getRoute: function getRoute(name) {
      return "".concat(axios.defaults.baseURL).concat(name, "/media");
    },
    submitForm: function submitForm() {
      var _this = this;

      this.storeData().then(function () {
        _this.$router.push({
          name: 'vehicles.index'
        });

        _this.$eventHub.$emit('create-success');
      })["catch"](function (error) {
        _this.status = 'failed';

        _.delay(function () {
          _this.status = '';
        }, 3000);
      });
    },
    focusField: function focusField(name) {
      this.activeField = name;
    },
    clearFocus: function clearFocus() {
      this.activeField = '';
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=template&id=92271c4e&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=template&id=92271c4e& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "container-fluid"
  }, [_c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.submitForm.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-header card-header-primary card-header-icon"
  }, [_vm._m(0), _vm._v(" "), _c("h4", {
    staticClass: "card-title"
  }, [_vm._v("\n              " + _vm._s(_vm.$t("global.create")) + "\n              "), _c("strong", [_vm._v(_vm._s(_vm.$t("cruds.vehicle.title_singular")))])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("back-button")], 1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("bootstrap-alert"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-12"
  }, [_c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.registration_plates,
      "is-focused": _vm.activeField == "registration_plates"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.vehicle.fields.registration_plates")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: ""
    },
    domProps: {
      value: _vm.entry.registration_plates
    },
    on: {
      input: _vm.updateRegistrationPlates,
      focus: function focus($event) {
        return _vm.focusField("registration_plates");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.year,
      "is-focused": _vm.activeField == "year"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.vehicle.fields.year")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "number",
      step: "1",
      required: ""
    },
    domProps: {
      value: _vm.entry.year
    },
    on: {
      input: _vm.updateYear,
      focus: function focus($event) {
        return _vm.focusField("year");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.number_of_seats,
      "is-focused": _vm.activeField == "number_of_seats"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.vehicle.fields.number_of_seats")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "number",
      step: "1",
      required: ""
    },
    domProps: {
      value: _vm.entry.number_of_seats
    },
    on: {
      input: _vm.updateNumberOfSeats,
      focus: function focus($event) {
        return _vm.focusField("number_of_seats");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.price_per_day,
      "is-focused": _vm.activeField == "price_per_day"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.vehicle.fields.price_per_day")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "number",
      step: "0.01",
      required: ""
    },
    domProps: {
      value: _vm.entry.price_per_day
    },
    on: {
      input: _vm.updatePricePerDay,
      focus: function focus($event) {
        return _vm.focusField("price_per_day");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.remarks,
      "is-focused": _vm.activeField == "remarks"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.vehicle.fields.remarks")))]), _vm._v(" "), _c("textarea", {
    staticClass: "form-control",
    attrs: {
      rows: "5"
    },
    domProps: {
      value: _vm.entry.remarks
    },
    on: {
      input: _vm.updateRemarks,
      focus: function focus($event) {
        return _vm.focusField("remarks");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.vehicle_type_id !== null,
      "is-focused": _vm.activeField == "vehicle_type"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.vehicle.fields.vehicle_type")))]), _vm._v(" "), _c("v-select", {
    key: "vehicle_type-field",
    attrs: {
      name: "vehicle_type",
      label: "name",
      value: _vm.entry.vehicle_type_id,
      options: _vm.lists.vehicle_type,
      reduce: function reduce(entry) {
        return entry.id;
      }
    },
    on: {
      input: _vm.updateVehicleType,
      search: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "focus", undefined, $event.key, undefined)) return null;
        return _vm.focusField("vehicle_type");
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "blur", undefined, $event.key, undefined)) return null;
        return _vm.clearFocus.apply(null, arguments);
      }]
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.vehicle.fields.photos")))]), _vm._v(" "), _c("attachment", {
    attrs: {
      route: _vm.getRoute("vehicles"),
      "collection-name": "vehicle_photos",
      media: _vm.entry.photos,
      "max-file-size": 5,
      component: "pictures",
      accept: "image/*"
    },
    on: {
      "file-uploaded": _vm.insertPhotosFile,
      "file-removed": _vm.removePhotosFile
    }
  })], 1)])])], 1), _vm._v(" "), _c("div", {
    staticClass: "card-footer"
  }, [_c("vue-button-spinner", {
    staticClass: "btn-primary",
    attrs: {
      status: _vm.status,
      isLoading: _vm.loading,
      disabled: _vm.loading
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("global.save")) + "\n            ")])], 1)])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "card-icon"
  }, [_c("i", {
    staticClass: "material-icons"
  }, [_vm._v("add")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/adminapp/js/cruds/Vehicles/Create.vue":
/*!*********************************************************!*\
  !*** ./resources/adminapp/js/cruds/Vehicles/Create.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_92271c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=92271c4e& */ "./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=template&id=92271c4e&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_92271c4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_92271c4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Vehicles/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=template&id=92271c4e&":
/*!****************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=template&id=92271c4e& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_92271c4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=92271c4e& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Vehicles/Create.vue?vue&type=template&id=92271c4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_92271c4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_92271c4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);