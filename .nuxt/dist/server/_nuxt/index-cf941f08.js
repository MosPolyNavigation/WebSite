import { _ as __nuxt_component_0$1, a as __nuxt_component_2 } from "./Sidebar-149bb204.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-26abbdc0.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext, createVNode, openBlock, createBlock } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./aud_info-52558608.js";
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
const Accordion_vue_vue_type_style_index_0_scoped_36d1856a_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      campuses: [
        {
          name: "ул. Большая Семеновская д. 38 \n (А, Б, В, Н, НД)",
          corpuses: ["Корпус А", "Корпус Б", "Корпус В", "Корпус Н", "Корпус НД"],
          short_name: "БС",
          short_corpuses: ["А", "Б", "В", "Н", "НД"]
        },
        {
          name: "ул. Автозаводская д. 16 (АВ)",
          corpuses: ["Корпус 1", "Корпус 2", "Корпус 3", "Корпус 4", "Корпус 5"],
          short_name: "АВ",
          short_corpuses: ["1", "2", "3", "4", "5"]
        },
        // {
        //     name: "ул. Павла Корчагина д. 22 (ПК)",
        //     corpuses: ["Корпус А","Корпус Б","Корпус В","Корпус Н","Корпус НД"],
        //     short_name: "ПК",
        // },
        {
          name: "ул. Прянишникова, 2А (ПР)",
          corpuses: ["Корпус 1", "Корпус 2"],
          short_name: "ПР",
          short_corpuses: ["1", "2"]
        }
        // {
        //     name: "ул. Михалковская д. 7 (М)",
        //     corpuses: ["Корпус А","Корпус Б","Корпус В","Корпус Н","Корпус НД"],
        //     short_name: "М",
        // },
        // {
        //     name: "ул. Садовая-Спасская, д. 6",
        //     corpuses: ["Корпус А","Корпус Б","Корпус В","Корпус Н","Корпус НД"]
        // },
      ]
    };
  },
  methods: {
    choose(event) {
      if (this.activeButton != null && this.activeButton != event.currentTarget && this.activeButton.classList.contains("active")) {
        this.activeButton.classList.toggle("active");
      }
      this.activeButton = event.currentTarget;
      event.currentTarget.classList.toggle("active");
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))} data-v-36d1856a><!--[-->`);
  ssrRenderList($data.campuses, (campus) => {
    _push(`<div class="accordion__item" data-v-36d1856a><button class="accordion__button" data-v-36d1856a>${ssrInterpolate(campus.name)}</button><ul class="accordion__list" data-v-36d1856a><!--[-->`);
    ssrRenderList(campus.corpuses, (item) => {
      _push(`<li class="accordion__list-item" data-v-36d1856a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: { path: "map", query: { campus: campus.short_name, corpus: item.split(" ")[1] } },
        class: "accordion__list-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(item)}`);
          } else {
            return [
              createTextVNode(toDisplayString(item), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul></div>`);
  });
  _push(`<!--]--><div class="accordion__item_alone" data-v-36d1856a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/map?campus='ПК'",
    class: "accordion__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ул. Павла Корчагина д. 22 (ПК)`);
      } else {
        return [
          createTextVNode("ул. Павла Корчагина д. 22 (ПК)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="accordion__item_alone" data-v-36d1856a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/map?campus='М'",
    class: "accordion__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`ул. Михалковская д. 7 (М)`);
      } else {
        return [
          createTextVNode("ул. Михалковская д. 7 (М)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Accordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-36d1856a"]]);
const index_vue_vue_type_style_index_0_scoped_4f0bf2e7_lang = "";
const _sfc_main = {
  data() {
    return {
      navCardState: false,
      modalState: false,
      numberOfFloors: 5
    };
  },
  methods: {
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
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0$1;
  const _component_Accordion = __nuxt_component_1;
  const _component_Search = __nuxt_component_2;
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-4f0bf2e7>`);
  _push(ssrRenderComponent(_component_Sidebar, { class: "sidebar" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Accordion, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Accordion)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Search, { class: "search-input" }, null, _parent));
  _push(ssrRenderComponent(_component_Accordion, { class: "accordion-tablet" }, null, _parent));
  _push(`<div class="nav" data-v-4f0bf2e7>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "nav__button",
    onClick: ($event) => _ctx.$emit("modal")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4f0bf2e7${_scopeId}><path d="M0.137495 6.465C0.134072 6.54573 0.147201 6.62632 0.176073 6.70179C0.204945 6.77726 0.24895 6.84603 0.305383 6.90387C0.361816 6.96171 0.429483 7.00739 0.504224 7.03811C0.578965 7.06883 0.659199 7.08393 0.739994 7.0825H2.80249C3.14749 7.0825 3.42249 6.8 3.46749 6.4575C3.69249 4.8175 4.81749 3.6225 6.82249 3.6225C8.53749 3.6225 10.1075 4.48 10.1075 6.5425C10.1075 8.13 9.17249 8.86 7.69499 9.97C6.01249 11.1925 4.67999 12.62 4.77499 14.9375L4.78249 15.48C4.78512 15.644 4.85212 15.8004 4.96905 15.9155C5.08598 16.0305 5.24345 16.095 5.40749 16.095H7.43499C7.60075 16.095 7.75973 16.0291 7.87694 15.9119C7.99415 15.7947 8.05999 15.6358 8.05999 15.47V15.2075C8.05999 13.4125 8.74249 12.89 10.585 11.4925C12.1075 10.335 13.695 9.05 13.695 6.3525C13.695 2.575 10.505 0.75 7.01249 0.75C3.84499 0.75 0.374995 2.225 0.137495 6.465ZM4.02999 20.8725C4.02999 22.205 5.09249 23.19 6.55499 23.19C8.07749 23.19 9.125 22.205 9.125 20.8725C9.125 19.4925 8.07499 18.5225 6.55249 18.5225C5.09249 18.5225 4.02999 19.4925 4.02999 20.8725Z" fill="#EAEAEA" data-v-4f0bf2e7${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            width: "14",
            height: "24",
            viewBox: "0 0 14 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            createVNode("path", {
              d: "M0.137495 6.465C0.134072 6.54573 0.147201 6.62632 0.176073 6.70179C0.204945 6.77726 0.24895 6.84603 0.305383 6.90387C0.361816 6.96171 0.429483 7.00739 0.504224 7.03811C0.578965 7.06883 0.659199 7.08393 0.739994 7.0825H2.80249C3.14749 7.0825 3.42249 6.8 3.46749 6.4575C3.69249 4.8175 4.81749 3.6225 6.82249 3.6225C8.53749 3.6225 10.1075 4.48 10.1075 6.5425C10.1075 8.13 9.17249 8.86 7.69499 9.97C6.01249 11.1925 4.67999 12.62 4.77499 14.9375L4.78249 15.48C4.78512 15.644 4.85212 15.8004 4.96905 15.9155C5.08598 16.0305 5.24345 16.095 5.40749 16.095H7.43499C7.60075 16.095 7.75973 16.0291 7.87694 15.9119C7.99415 15.7947 8.05999 15.6358 8.05999 15.47V15.2075C8.05999 13.4125 8.74249 12.89 10.585 11.4925C12.1075 10.335 13.695 9.05 13.695 6.3525C13.695 2.575 10.505 0.75 7.01249 0.75C3.84499 0.75 0.374995 2.225 0.137495 6.465ZM4.02999 20.8725C4.02999 22.205 5.09249 23.19 6.55499 23.19C8.07749 23.19 9.125 22.205 9.125 20.8725C9.125 19.4925 8.07499 18.5225 6.55249 18.5225C5.09249 18.5225 4.02999 19.4925 4.02999 20.8725Z",
              fill: "#EAEAEA"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="content" data-v-4f0bf2e7><p class="content__title" data-v-4f0bf2e7>Приветствуем тебя!</p><p class="content__text" data-v-4f0bf2e7>Это сайт-помощник в навигации <br data-v-4f0bf2e7> по Московскому Политеху </p><p class="content__text" data-v-4f0bf2e7>Тут ты найдешь дорогу к любому месту <br data-v-4f0bf2e7> в университете</p><p class="content__text" data-v-4f0bf2e7>Чтобы открыть карту кампуса — выбери <br data-v-4f0bf2e7> его адрес слева или введи <br data-v-4f0bf2e7> номер аудитории в строке поиска</p><p class="content__text" data-v-4f0bf2e7>Мы, команда студентов, постараемся помочь тебе <br data-v-4f0bf2e7> не потеряться!</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4f0bf2e7"]]);
export {
  index as default
};
//# sourceMappingURL=index-cf941f08.js.map
