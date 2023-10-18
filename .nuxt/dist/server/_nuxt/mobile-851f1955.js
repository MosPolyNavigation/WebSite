import { _ as __nuxt_component_0, a as __nuxt_component_5 } from "./NavigationCard-5fb017e4.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_3 } from "./FloorsButtons-38947b83.js";
import { _ as __nuxt_component_4$1 } from "./ScaleButtons-14bc5f27.js";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "defu";
const Modal_vue_vue_type_style_index_0_scoped_03a75ffb_lang = "";
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "cover" }, _attrs))} data-v-03a75ffb><div class="container modal" data-v-03a75ffb><button class="modal__close" data-v-03a75ffb><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-03a75ffb><path d="M0.271767 10.3446C-0.0881408 10.7045 -0.0954859 11.3435 0.279112 11.7181C0.661056 12.0927 1.30008 12.0854 1.65264 11.7328L6.00092 7.38454L10.3419 11.7255C10.7091 12.0927 11.3408 12.0927 11.7154 11.7181C12.09 11.3362 12.09 10.7119 11.7227 10.3446L7.38179 6.00367L11.7227 1.6554C12.09 1.28815 12.0973 0.656471 11.7154 0.281873C11.3408 -0.0927245 10.7091 -0.0927245 10.3419 0.274528L6.00092 4.61546L1.65264 0.274528C1.30008 -0.0853795 0.653711 -0.10007 0.279112 0.281873C-0.0954859 0.656471 -0.0881408 1.30284 0.271767 1.6554L4.6127 6.00367L0.271767 10.3446Z" fill="#EAEAEA" data-v-03a75ffb></path></svg></button><div class="modal__main" data-v-03a75ffb><p class="modal__text_strong" data-v-03a75ffb>КАРТА КОРПУСОВ</p><p class="modal__text_medium" data-v-03a75ffb>МОСКОВСКОГО ПОЛИТЕХА</p><p class="modal__text" data-v-03a75ffb>Разработано студентами с любовью и заботой о Вас </p><ul class="modal__list" data-v-03a75ffb><li class="modal__text" data-v-03a75ffb>Еще какая-то важная или не очень инфа. </li><li class="modal__text" data-v-03a75ffb>Возможно какие-то контактные данные</li><li class="modal__text" data-v-03a75ffb>А может какая-то инфа о приложении</li></ul></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-03a75ffb"]]);
const Maps_vue_vue_type_style_index_0_scoped_1bf29093_lang = "";
const _sfc_main$1 = {
  props: {
    numberOfFloors: Number,
    activeFloor: Number
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-1bf29093><!--[-->`);
  ssrRenderList($props.numberOfFloors, (i) => {
    _push(`<img class="map" style="${ssrRenderStyle(i == $props.activeFloor ? null : { display: "none" })}"${ssrRenderAttr("src", "_nuxt/assets/images/karta" + (i % 3 - 1) + ".jpg")} data-v-1bf29093>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Maps.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1bf29093"]]);
const mobile_vue_vue_type_style_index_0_scoped_a00f86ad_lang = "";
const _sfc_main = {
  components: { FloorsButtons: __nuxt_component_3 },
  data() {
    return {
      navCardState: false,
      modalState: false,
      numberOfFloors: 5,
      activeFloor: 1
    };
  },
  methods: {
    toggleNavCard() {
      this.navCardState = !this.navCardState;
    },
    toggleModal() {
      this.modalState = !this.modalState;
    },
    updateFloor(data) {
      this.activeFloor = data.update;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SearchNavbutton = __nuxt_component_0;
  const _component_Modal = __nuxt_component_1;
  const _component_FloorsButtons = __nuxt_component_3;
  const _component_ScaleButtons = __nuxt_component_4$1;
  const _component_Maps = __nuxt_component_4;
  const _component_NavigationCard = __nuxt_component_5;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-a00f86ad>`);
  _push(ssrRenderComponent(_component_SearchNavbutton, {
    class: "navbar",
    onModal: $options.toggleModal
  }, null, _parent));
  if ($data.modalState == true) {
    _push(ssrRenderComponent(_component_Modal, { onModal: $options.toggleModal }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_FloorsButtons, {
    class: "floors-buttons",
    numberOfFloors: $data.numberOfFloors,
    onChange: $options.updateFloor
  }, null, _parent));
  _push(ssrRenderComponent(_component_ScaleButtons, { class: "scale-buttons" }, null, _parent));
  _push(ssrRenderComponent(_component_Maps, {
    numberOfFloors: $data.numberOfFloors,
    activeFloor: $data.activeFloor
  }, null, _parent));
  _push(ssrRenderComponent(_component_NavigationCard, {
    class: ["navigation-card", { "navigation-card_active": $data.navCardState }],
    onToggleCard: $options.toggleNavCard
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mobile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mobile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a00f86ad"]]);
export {
  mobile as default
};
//# sourceMappingURL=mobile-851f1955.js.map
