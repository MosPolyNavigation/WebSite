import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Sidebar-149bb204.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-26abbdc0.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString } from 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import './aud_info-52558608.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/defu/dist/defu.mjs';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/radix3/dist/index.mjs';

const _sfc_main$1 = {
  data() {
    return {
      campuses: [
        {
          name: "\u0443\u043B. \u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0421\u0435\u043C\u0435\u043D\u043E\u0432\u0441\u043A\u0430\u044F \u0434. 38 \n (\u0410, \u0411, \u0412, \u041D, \u041D\u0414)",
          corpuses: ["\u041A\u043E\u0440\u043F\u0443\u0441 \u0410", "\u041A\u043E\u0440\u043F\u0443\u0441 \u0411", "\u041A\u043E\u0440\u043F\u0443\u0441 \u0412", "\u041A\u043E\u0440\u043F\u0443\u0441 \u041D", "\u041A\u043E\u0440\u043F\u0443\u0441 \u041D\u0414"],
          short_name: "\u0411\u0421",
          short_corpuses: ["\u0410", "\u0411", "\u0412", "\u041D", "\u041D\u0414"]
        },
        {
          name: "\u0443\u043B. \u0410\u0432\u0442\u043E\u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0434. 16 (\u0410\u0412)",
          corpuses: ["\u041A\u043E\u0440\u043F\u0443\u0441 1", "\u041A\u043E\u0440\u043F\u0443\u0441 2", "\u041A\u043E\u0440\u043F\u0443\u0441 3", "\u041A\u043E\u0440\u043F\u0443\u0441 4", "\u041A\u043E\u0440\u043F\u0443\u0441 5"],
          short_name: "\u0410\u0412",
          short_corpuses: ["1", "2", "3", "4", "5"]
        },
        // {
        //     name: "ул. Павла Корчагина д. 22 (ПК)",
        //     corpuses: ["Корпус А","Корпус Б","Корпус В","Корпус Н","Корпус НД"],
        //     short_name: "ПК",
        // },
        {
          name: "\u0443\u043B. \u041F\u0440\u044F\u043D\u0438\u0448\u043D\u0438\u043A\u043E\u0432\u0430, 2\u0410 (\u041F\u0420)",
          corpuses: ["\u041A\u043E\u0440\u043F\u0443\u0441 1", "\u041A\u043E\u0440\u043F\u0443\u0441 2"],
          short_name: "\u041F\u0420",
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
  const _component_NuxtLink = __nuxt_component_0$1;
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
    to: "/map?campus='\u041F\u041A'",
    class: "accordion__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0443\u043B. \u041F\u0430\u0432\u043B\u0430 \u041A\u043E\u0440\u0447\u0430\u0433\u0438\u043D\u0430 \u0434. 22 (\u041F\u041A)`);
      } else {
        return [
          createTextVNode("\u0443\u043B. \u041F\u0430\u0432\u043B\u0430 \u041A\u043E\u0440\u0447\u0430\u0433\u0438\u043D\u0430 \u0434. 22 (\u041F\u041A)")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="accordion__item_alone" data-v-36d1856a>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/map?campus='\u041C'",
    class: "accordion__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0443\u043B. \u041C\u0438\u0445\u0430\u043B\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u0434. 7 (\u041C)`);
      } else {
        return [
          createTextVNode("\u0443\u043B. \u041C\u0438\u0445\u0430\u043B\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u0434. 7 (\u041C)")
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
  const _component_Sidebar = __nuxt_component_0;
  const _component_Accordion = __nuxt_component_1;
  const _component_Search = __nuxt_component_2;
  const _component_NuxtLink = __nuxt_component_0$1;
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
  _push(`</div><div class="content" data-v-4f0bf2e7><p class="content__title" data-v-4f0bf2e7>\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043C \u0442\u0435\u0431\u044F!</p><p class="content__text" data-v-4f0bf2e7>\u042D\u0442\u043E \u0441\u0430\u0439\u0442-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A \u0432 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 <br data-v-4f0bf2e7> \u043F\u043E \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u043C\u0443 \u041F\u043E\u043B\u0438\u0442\u0435\u0445\u0443 </p><p class="content__text" data-v-4f0bf2e7>\u0422\u0443\u0442 \u0442\u044B \u043D\u0430\u0439\u0434\u0435\u0448\u044C \u0434\u043E\u0440\u043E\u0433\u0443 \u043A \u043B\u044E\u0431\u043E\u043C\u0443 \u043C\u0435\u0441\u0442\u0443 <br data-v-4f0bf2e7> \u0432 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0435</p><p class="content__text" data-v-4f0bf2e7>\u0427\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0443 \u043A\u0430\u043C\u043F\u0443\u0441\u0430 \u2014 \u0432\u044B\u0431\u0435\u0440\u0438 <br data-v-4f0bf2e7> \u0435\u0433\u043E \u0430\u0434\u0440\u0435\u0441 \u0441\u043B\u0435\u0432\u0430 \u0438\u043B\u0438 \u0432\u0432\u0435\u0434\u0438 <br data-v-4f0bf2e7> \u043D\u043E\u043C\u0435\u0440 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0432 \u0441\u0442\u0440\u043E\u043A\u0435 \u043F\u043E\u0438\u0441\u043A\u0430</p><p class="content__text" data-v-4f0bf2e7>\u041C\u044B, \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u043E\u0432, \u043F\u043E\u0441\u0442\u0430\u0440\u0430\u0435\u043C\u0441\u044F \u043F\u043E\u043C\u043E\u0447\u044C \u0442\u0435\u0431\u0435 <br data-v-4f0bf2e7> \u043D\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C\u0441\u044F!</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4f0bf2e7"]]);

export { index as default };
//# sourceMappingURL=index-cf941f08.mjs.map
