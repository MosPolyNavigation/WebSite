import { _ as __nuxt_component_0$1 } from "./Sidebar-149bb204.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./HeadButtons-10914b0a.js";
import { _ as __nuxt_component_0$2, a as __nuxt_component_5$1 } from "./NavigationCard-5fb017e4.js";
import { _ as __nuxt_component_3 } from "./FloorsButtons-38947b83.js";
import { r as regions, _ as __nuxt_component_0 } from "./map-d87048c1.js";
import { mergeProps, useSSRContext, withCtx, openBlock, createBlock, createVNode, withDirectives, vModelText, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./aud_info-52558608.js";
import "./nuxt-link-26abbdc0.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
const ScaleFrame_vue_vue_type_style_index_0_scoped_f131c87b_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      regions,
      viewBox: "0 0 1334 1404",
      selectedIds: [],
      selectedAudId: null,
      defaultColor: "#494949",
      secondColor: "#9C9C9F",
      successColor: "#5F6DEC"
    };
  },
  computed: {
    map() {
      let map2 = this.regions;
      map2.forEach((region) => {
        if (this.selectedIds.indexOf(region.id) !== -1) {
          region.fill = this.successColor;
        } else {
          region.fill = this.defaultColor;
        }
      });
      return map2;
    },
    selectedRegions() {
      return this.map.filter((region) => this.selectedIds.indexOf(region.id) !== -1);
    }
  },
  methods: {
    findRegionById(id) {
      return this.map.find((x) => x.id === id);
    },
    click(payload) {
      if (this.selectedIds.indexOf(payload.id) === -1) {
        if (payload.id !== void 0) {
          if (this.selectedAudId !== null) {
            this.selectedIds.splice(this.selectedIds.indexOf(this.selectedAudId), 1);
          }
          this.selectedAudId = payload.id;
          this.selectedIds.push(payload.id);
        }
      } else {
        this.selectedAudId = null;
        this.selectedIds.splice(this.selectedIds.indexOf(payload.id), 1);
      }
      this.$emit("newSelected", { aud: this.selectedAudId });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Scale = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "map-container" }, _attrs))} data-v-f131c87b>`);
  _push(ssrRenderComponent(_component_Scale, {
    map: $options.map,
    "view-box": $data.viewBox,
    "thin-border-on-zoom": true,
    "wrapper-styles": {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    mobilePreventScroll: true,
    onClick: $options.click
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScaleFrame.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-f131c87b"]]);
const map_vue_vue_type_style_index_0_scoped_68cedef1_lang = "";
const _sfc_main = {
  data() {
    return {
      navCardState: false,
      modalState: false,
      numberOfFloors: 5,
      b1: "",
      b2: "",
      isAudSelected: false,
      selectedAudNumber: ""
    };
  },
  methods: {
    getAudInfo(data) {
      if (data.aud) {
        this.isAudSelected = true;
      } else {
        this.isAudSelected = false;
      }
      this.selectedAudNumber = data.aud;
    },
    swap() {
      [this.b1, this.b2] = [this.b2, this.b1];
    },
    choose(event) {
      if (this.activeButton != null && this.activeButton != event.currentTarget && this.activeButton.classList.contains("active")) {
        this.activeButton.classList.toggle("active");
      }
      this.activeButton = event.currentTarget;
      event.currentTarget.classList.toggle("active");
    },
    arrow(event) {
      event.currentTarget.classList.toggle("click");
      this.$emit("toggleCard");
    },
    toggleNavCard() {
      this.navCardState = !this.navCardState;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0$1;
  const _component_AudInfo = __nuxt_component_1;
  const _component_HeadButtons = __nuxt_component_2;
  const _component_SearchNavbutton = __nuxt_component_0$2;
  const _component_FloorsButtons = __nuxt_component_3;
  const _component_ScaleFrame = __nuxt_component_5;
  const _component_NavigationCard = __nuxt_component_5$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-68cedef1>`);
  _push(ssrRenderComponent(_component_Sidebar, { class: "sidebar" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (!$data.isAudSelected) {
          _push2(`<div class="nav-card" data-v-68cedef1${_scopeId}><div class="rout" data-v-68cedef1${_scopeId}><div class="inputs" data-v-68cedef1${_scopeId}><input class="input" type="text" placeholder="Откуда"${ssrRenderAttr("value", $data.b1)} data-v-68cedef1${_scopeId}><input class="input" type="text" placeholder="Куда"${ssrRenderAttr("value", $data.b2)} data-v-68cedef1${_scopeId}></div><svg class="swap" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-68cedef1${_scopeId}><path d="M32.2071 13.0401C32.5976 12.6496 32.5976 12.0164 32.2071 11.6259L25.8431 5.26194C25.4526 4.87142 24.8194 4.87142 24.4289 5.26194C24.0384 5.65246 24.0384 6.28563 24.4289 6.67615L30.0858 12.333L24.4289 17.9899C24.0384 18.3804 24.0384 19.0136 24.4289 19.4041C24.8194 19.7946 25.4526 19.7946 25.8431 19.4041L32.2071 13.0401ZM6.5 13.333H31.5V11.333H6.5V13.333Z" fill="white" data-v-68cedef1${_scopeId}></path><path d="M5.7929 24.9589C5.40238 25.3494 5.40238 25.9826 5.7929 26.3731L12.1569 32.7371C12.5474 33.1276 13.1806 33.1276 13.5711 32.7371C13.9616 32.3466 13.9616 31.7134 13.5711 31.3229L7.91422 25.666L13.5711 20.0092C13.9616 19.6186 13.9616 18.9855 13.5711 18.5949C13.1806 18.2044 12.5474 18.2044 12.1569 18.5949L5.7929 24.9589ZM31.5 24.666L6.50001 24.666V26.666L31.5 26.666V24.666Z" fill="white" data-v-68cedef1${_scopeId}></path></svg></div></div>`);
        } else {
          _push2(`<!---->`);
        }
        if (!$data.isAudSelected) {
          _push2(`<div class="buttons" data-v-68cedef1${_scopeId}><button class="button button--blue" style="${ssrRenderStyle({ "width": "109px" })}" data-v-68cedef1${_scopeId}> Туалет М </button><button class="button button--blue" style="${ssrRenderStyle({ "width": "109px" })}" data-v-68cedef1${_scopeId}> Туалет Ж </button><button class="button button--orange" style="${ssrRenderStyle({ "width": "82px" })}" data-v-68cedef1${_scopeId}> Буфет </button><button class="button button--purple" style="${ssrRenderStyle({ "width": "128px" })}" data-v-68cedef1${_scopeId}> Коворкинг </button><button class="button button--lightred" style="${ssrRenderStyle({ "width": "182px" })}" data-v-68cedef1${_scopeId}> Аудитории </button><button class="button button--blue" style="${ssrRenderStyle({ "width": "182px" })}" data-v-68cedef1${_scopeId}> Библиотека </button><button class="button button--green" style="${ssrRenderStyle({ "width": "128px" })}" data-v-68cedef1${_scopeId}> Выход </button></div>`);
        } else {
          _push2(`<!---->`);
        }
        if ($data.isAudSelected) {
          _push2(ssrRenderComponent(_component_AudInfo, { audNumber: $data.selectedAudNumber }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          !$data.isAudSelected ? (openBlock(), createBlock("div", {
            key: 0,
            class: "nav-card"
          }, [
            createVNode("div", { class: "rout" }, [
              createVNode("div", { class: "inputs" }, [
                withDirectives(createVNode("input", {
                  class: "input",
                  type: "text",
                  placeholder: "Откуда",
                  "onUpdate:modelValue": ($event) => $data.b1 = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $data.b1]
                ]),
                withDirectives(createVNode("input", {
                  class: "input",
                  type: "text",
                  placeholder: "Куда",
                  "onUpdate:modelValue": ($event) => $data.b2 = $event
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $data.b2]
                ])
              ]),
              (openBlock(), createBlock("svg", {
                onClick: $options.swap,
                class: "swap",
                width: "38",
                height: "38",
                viewBox: "0 0 38 38",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M32.2071 13.0401C32.5976 12.6496 32.5976 12.0164 32.2071 11.6259L25.8431 5.26194C25.4526 4.87142 24.8194 4.87142 24.4289 5.26194C24.0384 5.65246 24.0384 6.28563 24.4289 6.67615L30.0858 12.333L24.4289 17.9899C24.0384 18.3804 24.0384 19.0136 24.4289 19.4041C24.8194 19.7946 25.4526 19.7946 25.8431 19.4041L32.2071 13.0401ZM6.5 13.333H31.5V11.333H6.5V13.333Z",
                  fill: "white"
                }),
                createVNode("path", {
                  d: "M5.7929 24.9589C5.40238 25.3494 5.40238 25.9826 5.7929 26.3731L12.1569 32.7371C12.5474 33.1276 13.1806 33.1276 13.5711 32.7371C13.9616 32.3466 13.9616 31.7134 13.5711 31.3229L7.91422 25.666L13.5711 20.0092C13.9616 19.6186 13.9616 18.9855 13.5711 18.5949C13.1806 18.2044 12.5474 18.2044 12.1569 18.5949L5.7929 24.9589ZM31.5 24.666L6.50001 24.666V26.666L31.5 26.666V24.666Z",
                  fill: "white"
                })
              ], 8, ["onClick"]))
            ])
          ])) : createCommentVNode("", true),
          !$data.isAudSelected ? (openBlock(), createBlock("div", {
            key: 1,
            class: "buttons"
          }, [
            createVNode("button", {
              ref: "male",
              class: "button button--blue",
              onClick: $options.choose,
              style: { "width": "109px" }
            }, " Туалет М ", 8, ["onClick"]),
            createVNode("button", {
              ref: "female",
              class: "button button--blue",
              onClick: $options.choose,
              style: { "width": "109px" }
            }, " Туалет Ж ", 8, ["onClick"]),
            createVNode("button", {
              ref: "bufet",
              class: "button button--orange",
              onClick: $options.choose,
              style: { "width": "82px" }
            }, " Буфет ", 8, ["onClick"]),
            createVNode("button", {
              ref: "coworking",
              class: "button button--purple",
              onClick: $options.choose,
              style: { "width": "128px" }
            }, " Коворкинг ", 8, ["onClick"]),
            createVNode("button", {
              ref: "aud",
              class: "button button--lightred",
              onClick: $options.choose,
              style: { "width": "182px" }
            }, " Аудитории ", 8, ["onClick"]),
            createVNode("button", {
              ref: "bibl",
              class: "button button--blue",
              onClick: $options.choose,
              style: { "width": "182px" }
            }, " Библиотека ", 8, ["onClick"]),
            createVNode("button", {
              ref: "exit",
              class: "button button--green",
              onClick: $options.choose,
              style: { "width": "128px" }
            }, " Выход ", 8, ["onClick"])
          ])) : createCommentVNode("", true),
          $data.isAudSelected ? (openBlock(), createBlock(_component_AudInfo, {
            key: 2,
            audNumber: $data.selectedAudNumber
          }, null, 8, ["audNumber"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_HeadButtons, { class: "nav-buttons" }, null, _parent));
  _push(ssrRenderComponent(_component_SearchNavbutton, { class: "mobile-nav" }, null, _parent));
  _push(ssrRenderComponent(_component_FloorsButtons, {
    class: "wrapper",
    numberOfFloors: $data.numberOfFloors
  }, null, _parent));
  _push(ssrRenderComponent(_component_ScaleFrame, {
    class: "map-frame",
    onNewSelected: $options.getAudInfo
  }, null, _parent));
  _push(ssrRenderComponent(_component_NavigationCard, {
    class: ["mobile-card", { "mobile-card_active": $data.navCardState }],
    onToggleCard: $options.toggleNavCard
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/map.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const map = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-68cedef1"]]);
export {
  map as default
};
//# sourceMappingURL=map-c855ca9b.js.map
