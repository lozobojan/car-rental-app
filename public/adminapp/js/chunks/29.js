(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      status: '',
      activeField: ''
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('ReservationsSingle', ['entry', 'loading', 'lists'])),
  beforeDestroy: function beforeDestroy() {
    this.resetState();
  },
  watch: {
    '$route.params.id': {
      immediate: true,
      handler: function handler() {
        this.resetState();
        this.fetchEditData(this.$route.params.id);
      }
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('ReservationsSingle', ['fetchEditData', 'updateData', 'resetState', 'setClient', 'setVehicle', 'setDateFrom', 'setDateTo', 'setTotalPrice', 'setPickupLocation', 'setDropoffLocation'])), {}, {
    updateClient: function updateClient(value) {
      this.setClient(value);
    },
    updateVehicle: function updateVehicle(value) {
      this.setVehicle(value);
    },
    updateDateFrom: function updateDateFrom(e) {
      this.setDateFrom(e.target.value);
    },
    updateDateTo: function updateDateTo(e) {
      this.setDateTo(e.target.value);
    },
    updateTotalPrice: function updateTotalPrice(e) {
      this.setTotalPrice(e.target.value);
    },
    updatePickupLocation: function updatePickupLocation(value) {
      this.setPickupLocation(value);
    },
    updateDropoffLocation: function updateDropoffLocation(value) {
      this.setDropoffLocation(value);
    },
    submitForm: function submitForm() {
      var _this = this;

      this.updateData().then(function () {
        _this.$router.push({
          name: 'reservations.index'
        });

        _this.$eventHub.$emit('update-success');
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=template&id=60562972&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=template&id=60562972& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("\n              " + _vm._s(_vm.$t("global.edit")) + "\n              "), _c("strong", [_vm._v(_vm._s(_vm.$t("cruds.reservation.title_singular")))])])]), _vm._v(" "), _c("div", {
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
      "has-items": _vm.entry.client_id !== null,
      "is-focused": _vm.activeField == "client"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.reservation.fields.client")))]), _vm._v(" "), _c("v-select", {
    key: "client-field",
    attrs: {
      name: "client",
      label: "name",
      value: _vm.entry.client_id,
      options: _vm.lists.client,
      reduce: function reduce(entry) {
        return entry.id;
      }
    },
    on: {
      input: _vm.updateClient,
      search: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "focus", undefined, $event.key, undefined)) return null;
        return _vm.focusField("client");
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "blur", undefined, $event.key, undefined)) return null;
        return _vm.clearFocus.apply(null, arguments);
      }]
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.vehicle_id !== null,
      "is-focused": _vm.activeField == "vehicle"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.reservation.fields.vehicle")))]), _vm._v(" "), _c("v-select", {
    key: "vehicle-field",
    attrs: {
      name: "vehicle",
      label: "registration_plates",
      value: _vm.entry.vehicle_id,
      options: _vm.lists.vehicle,
      reduce: function reduce(entry) {
        return entry.id;
      }
    },
    on: {
      input: _vm.updateVehicle,
      search: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "focus", undefined, $event.key, undefined)) return null;
        return _vm.focusField("vehicle");
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "blur", undefined, $event.key, undefined)) return null;
        return _vm.clearFocus.apply(null, arguments);
      }]
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.date_from,
      "is-focused": _vm.activeField == "date_from"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.reservation.fields.date_from")))]), _vm._v(" "), _c("datetime-picker", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      picker: "date",
      value: _vm.entry.date_from,
      required: ""
    },
    on: {
      input: _vm.updateDateFrom,
      focus: function focus($event) {
        return _vm.focusField("date_from");
      },
      blur: _vm.clearFocus
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.date_to,
      "is-focused": _vm.activeField == "date_to"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.reservation.fields.date_to")))]), _vm._v(" "), _c("datetime-picker", {
    staticClass: "form-control",
    attrs: {
      type: "text",
      picker: "date",
      value: _vm.entry.date_to,
      required: ""
    },
    on: {
      input: _vm.updateDateTo,
      focus: function focus($event) {
        return _vm.focusField("date_to");
      },
      blur: _vm.clearFocus
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.total_price,
      "is-focused": _vm.activeField == "total_price"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating"
  }, [_vm._v(_vm._s(_vm.$t("cruds.reservation.fields.total_price")))]), _vm._v(" "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "number",
      step: "0.01"
    },
    domProps: {
      value: _vm.entry.total_price
    },
    on: {
      input: _vm.updateTotalPrice,
      focus: function focus($event) {
        return _vm.focusField("total_price");
      },
      blur: _vm.clearFocus
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.pickup_location_id !== null,
      "is-focused": _vm.activeField == "pickup_location"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.reservation.fields.pickup_location")))]), _vm._v(" "), _c("v-select", {
    key: "pickup_location-field",
    attrs: {
      name: "pickup_location",
      label: "name",
      value: _vm.entry.pickup_location_id,
      options: _vm.lists.pickup_location,
      reduce: function reduce(entry) {
        return entry.id;
      }
    },
    on: {
      input: _vm.updatePickupLocation,
      search: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "focus", undefined, $event.key, undefined)) return null;
        return _vm.focusField("pickup_location");
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "blur", undefined, $event.key, undefined)) return null;
        return _vm.clearFocus.apply(null, arguments);
      }]
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group bmd-form-group",
    "class": {
      "has-items": _vm.entry.dropoff_location_id !== null,
      "is-focused": _vm.activeField == "dropoff_location"
    }
  }, [_c("label", {
    staticClass: "bmd-label-floating required"
  }, [_vm._v(_vm._s(_vm.$t("cruds.reservation.fields.dropoff_location")))]), _vm._v(" "), _c("v-select", {
    key: "dropoff_location-field",
    attrs: {
      name: "dropoff_location",
      label: "name",
      value: _vm.entry.dropoff_location_id,
      options: _vm.lists.dropoff_location,
      reduce: function reduce(entry) {
        return entry.id;
      }
    },
    on: {
      input: _vm.updateDropoffLocation,
      search: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "focus", undefined, $event.key, undefined)) return null;
        return _vm.focusField("dropoff_location");
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "blur", undefined, $event.key, undefined)) return null;
        return _vm.clearFocus.apply(null, arguments);
      }]
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
  }, [_vm._v("edit")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/adminapp/js/cruds/Reservations/Edit.vue":
/*!***********************************************************!*\
  !*** ./resources/adminapp/js/cruds/Reservations/Edit.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_60562972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=60562972& */ "./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=template&id=60562972&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_60562972___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_60562972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/adminapp/js/cruds/Reservations/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=template&id=60562972&":
/*!******************************************************************************************!*\
  !*** ./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=template&id=60562972& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_60562972___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=60562972& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/adminapp/js/cruds/Reservations/Edit.vue?vue&type=template&id=60562972&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_60562972___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_60562972___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);