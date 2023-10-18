import { r as regions, _ as __nuxt_component_0 } from './map-d87048c1.mjs';
import { mergeProps, useSSRContext } from 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = {
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
      let map = this.regions;
      map.forEach((region) => {
        if (this.selectedIds.indexOf(region.id) !== -1) {
          region.fill = this.successColor;
        } else {
          region.fill = this.defaultColor;
        }
      });
      return map;
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
          console.log(4312);
          if (this.selectedAudId !== null) {
            this.selectedIds.splice(this.selectedIds.indexOf(this.selectedAudId), 1);
          }
          this.selectedAudId = payload.id;
          this.selectedIds.push(payload.id);
          console.log(this.selectedIds);
        }
      } else {
        this.selectedAudId = null;
        this.selectedIds.splice(this.selectedIds.indexOf(payload.id), 1);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Scale = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-ea3884db><div class="layout" data-v-ea3884db><div class="layout__map" data-v-ea3884db><div class="card" data-v-ea3884db>`);
  _push(ssrRenderComponent(_component_Scale, {
    map: $options.map,
    "view-box": $data.viewBox,
    "thin-border-on-zoom": true,
    "wrapper-styles": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    },
    mobilePreventScroll: true,
    onClick: $options.click
  }, null, _parent));
  _push(`</div></div><div class="layout__content" data-v-ea3884db><h4 class="small-title" data-v-ea3884db> Actions </h4><ul data-v-ea3884db><li data-v-ea3884db>Click to select region</li><li data-v-ea3884db>Scroll mousewheel for zoom</li><li data-v-ea3884db>Hold left mouse button to drag map</li></ul>`);
  if ($options.selectedRegions && $options.selectedRegions.length) {
    _push(`<!--[--><h4 class="small-title" data-v-ea3884db> \u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 </h4><!--[-->`);
    ssrRenderList($options.selectedRegions, (region, index) => {
      _push(`<div class="label" data-v-ea3884db>${ssrInterpolate(region.title)}</div>`);
    });
    _push(`<!--]--><!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/scalePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scalePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ea3884db"]]);

export { scalePage as default };
//# sourceMappingURL=scalePage-8a2dfd19.mjs.map
