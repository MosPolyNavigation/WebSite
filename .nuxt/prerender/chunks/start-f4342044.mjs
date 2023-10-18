import { b as buildAssetsURL } from './renderer.mjs';
import { _ as __nuxt_component_0 } from './Sidebar-149bb204.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './HeadButtons-10914b0a.mjs';
import { _ as __nuxt_component_3 } from './FloorsButtons-38947b83.mjs';
import { _ as __nuxt_component_4 } from './ScaleButtons-14bc5f27.mjs';
import { mergeProps, withCtx, createVNode, useSSRContext } from 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ufo/dist/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/radix3/dist/index.mjs';
import './aud_info-52558608.mjs';
import './nuxt-link-26abbdc0.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue-router/dist/vue-router.node.mjs';

const _imports_0 = "" + buildAssetsURL("karta.60a762d6.jpg");
const _sfc_main = {
  data() {
    return {
      scale: 1,
      zoomingSpeed: 0.05,
      numberOfFloors: 5
    };
  },
  methods: {
    scroll(event) {
      if (event.deltaY > 0) {
        if (this.$refs.map.style.transform != "scale(0.5)") {
          this.$refs.map.style.transform = `scale(${this.scale -= this.zoomingSpeed})`;
        }
      } else {
        if (this.$refs.map.style.transform != "scale(1.5)") {
          this.$refs.map.style.transform = `scale(${this.scale += this.zoomingSpeed})`;
        }
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0;
  const _component_AudInfo = __nuxt_component_1;
  const _component_HeadButtons = __nuxt_component_2;
  const _component_FloorsButtons = __nuxt_component_3;
  const _component_ScaleButtons = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-7e57ab9d>`);
  _push(ssrRenderComponent(_component_Sidebar, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_AudInfo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_AudInfo)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="map" data-v-7e57ab9d><svg class="map__svg" viewBox="0 -2.5 903 794" data-v-7e57ab9d><a href="#" data-v-7e57ab9d><path class="auditory" d="" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 314.93117,693.25104 h 8.21705 v -2.34773 l 14.42177,0.16769 0.33539,2.34773 h 13.58329 l 0.33539,71.27037 -7.88166,9.05553 -28.84354,0.16769 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 356.01644,693.41873 h 13.91868 l -0.16769,-2.18003 13.91868,0.16769 0.33539,2.01234 96.59231,-0.16769 -0.1677,-2.18004 14.42177,0.1677 0.16769,2.34773 h 14.75716 l 0.1677,71.60575 -6.20472,8.38475 -59.69941,0.50309 -12.40943,-10.90018 -16.43411,19.78801 -41.58835,-0.33539 -17.77567,-17.60797 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 514.48819,693.58643 -0.16769,72.10884 18.27875,17.27258 20.96187,0.1677 0.50309,-64.22718 3.3539,0.16769 0.16769,63.7241 20.45879,0.33539 14.75716,-17.94337 V 693.75412 H 557.5858 l -0.16769,8.55245 h -3.85699 l -0.16769,-8.88784 -22.13574,-0.16769 0.16769,-2.34773 h -14.42176 l 0.50308,2.34773 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 596.92294,693.91995 -0.23716,71.62127 7.82617,8.30048 59.05197,0.23715 11.14636,-10.67204 19.68399,17.54958 20.1583,-0.23715 0.23716,-87.2736 -18.97252,-0.23716 v -2.37156 h -15.65233 v 2.60872 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 758.14899,693.25104 10.0617,-0.1677 -0.16769,-2.18003 13.08021,0.16769 0.16769,2.51543 55.33934,-0.50309 0.67078,70.76728 h -78.98433 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 194.86156,693.41873 h 22.47113 v -2.85081 l 11.06787,0.16769 v 3.18621 h 4.36007 l 0.16769,47.62537 h -5.03085 l -0.16769,5.19855 h 5.03085 l -0.33539,21.96804 h -4.19238 l -0.16769,5.36624 4.69546,-0.33539 v 9.22322 l -59.86711,-0.16769 9.05553,-9.05553 35.55134,-0.1677 -0.1677,-4.86315 h -21.96804 l -0.1677,-21.96804 22.47113,-0.1677 0.1677,-4.69546 h -22.80652 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 189.48805,586.72521 h -17.31242 l -71.14696,100.3172 88.45938,46.95699 -0.23715,-55.96893 h 4.26881 V 666.4098 l -4.50597,0.23715 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 272.49283,576.05317 0.23716,76.83871 12.33214,0.47431 v 2.84588 h 13.51792 l 0.23715,-3.08304 h 46.95699 l -0.23715,-76.83871 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 272.49283,576.05317 0.23716,76.83871 12.33214,0.47431 v 2.84588 h 13.51792 l 0.23715,-3.08304 h 46.95699 l -0.23715,-76.83871 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 350.51732,576.29032 38.1822,0.23716 0.94863,39.13082 4.26882,0.23716 -0.71147,-39.60514 h 36.5221 l 0.23716,76.60156 h -36.28495 l -0.47431,-25.61291 h -4.50598 l 0.23716,25.61291 h -5.92891 l 0.47431,3.32019 -13.28077,-0.23716 -0.23715,-2.60872 -19.68399,-0.23716 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 434.47073,576.52748 152.49164,0.23716 0.71147,75.89008 -13.99224,0.23716 -0.23715,3.08303 -15.41518,-0.47431 -0.47431,-2.84588 H 466.2497 v 3.55735 l -15.17801,-0.23716 v -3.32019 l -16.60096,0.23716 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 591.7055,575.3417 12.56929,-11.62067 h 25.37575 l 0.23715,88.93369 -9.2491,0.71147 v 3.32019 l -13.04361,-0.23716 v -3.55734 h -16.12664 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 758.18937,576.52748 76.60155,-0.23716 0.94863,76.83871 -54.30884,0.23716 -0.23716,2.84588 -12.5693,-0.23716 -0.47431,-2.84588 -9.96057,-0.23715 0.23715,-60.71207 h -2.1344 l 0.23715,-8.53763 h 2.13441 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 113.59797,521.74433 14.7037,20.86977 25.13859,20.1583 17.78674,7.58901 51.22581,-0.23716 33.67622,-60.23775 -34.38769,-25.13859 1.66009,-1.6601 -15.17801,-10.9092 -1.42294,1.89726 -3.32019,-2.84588 -40.07945,22.05555 -1.42294,-1.66009 -9.01195,4.98029 1.6601,2.84587 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 102.45161,365.69534 c -3.761613,34.48942 6.43608,58.53616 17.78674,84.90203 l 32.96476,-16.83811 c -7.26799,-17.67769 -15.08863,-41.3209 -13.28077,-68.06392 l -5.21744,-0.23716 v -1.18578 l -8.77479,-0.23715 v 2.1344 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 143.24253,365.9325 c 0.0326,48.21964 16.63055,79.29966 40.31661,111.70071 l 76.3644,-43.87395 c -1.41013,-1.50397 -31.88681,-36.89674 -31.30466,-68.30108 h -5.69176 v -1.42293 h -14.46655 l -0.23715,1.89725 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 103.16308,325.61589 c 2.37489,-15.12659 -11.65321,-5.64276 20.15831,-84.90203 l 30.35603,17.07527 c -17.89506,60.35166 -12.78182,56.71366 -13.51792,68.30107 h -4.26882 l -0.23716,2.37157 h -10.90919 v -2.60872 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 143.00538,326.0902 c 4.45277,-32.56402 4.11527,-63.21194 38.89366,-107.90621 l 77.07587,40.31661 c -35.38799,51.00045 -29.49315,62.54438 -30.35603,67.82676 h -5.69176 l -0.47431,2.37157 -13.99224,-0.47432 -0.23715,-1.66009 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 123.08423,180.23895 98.1828,53.59737 c 5.60268,-10.69505 10.86571,-21.27689 38.65651,-39.36798 l -43.6368,-96.522701 c -40.65347,20.720931 -71.52113,48.291921 -93.20251,82.293311 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 213.67802,82.056153 43.39964,96.285547 4.50597,-2.84588 1.89725,2.13441 c 3.73462,-3.22198 8.79693,-5.11626 13.75508,-7.1147 l -0.94862,-3.08303 c 19.02733,-5.33402 38.33628,-10.04849 60.47491,-8.53764 l -0.23716,-6.16607 h 2.37157 v -17.07527 l -3.08304,-0.94862 0.71147,-24.90144 -18.02389,-0.23715 -0.23716,5.4546 h -3.79451 l -1.18578,-63.557947 c -39.5199,0.194251 -75.17827,6.502576 -99.60573,30.59319 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 195.89128,41.265233 15.41517,36.04779 C 235.8528,63.436642 257.08859,48.248529 313.99522,47.194146 v -3.557348 l 2.37157,-0.237156 v -8.300478 l -2.37157,-0.237157 0.23716,-25.3757465 C 272.19686,13.423132 229.36925,15.323226 195.89128,41.265233 Z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 412.88949,124.27001 0.47431,49.32856 -2.84588,0.71147 0.71147,10.19773 2.13441,0.94862 v 4.98029 l 51.46296,0.47431 -0.23715,-66.40382 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="m 389.64815,263.71804 v 178.3417 C 367.90442,430.25532 361.30488,419.66243 355.0233,409.09498 l -2.37157,0.47432 -5.92891,-12.33214 2.60872,-0.71147 c -12.19918,-45.27057 -7.37101,-66.92257 -0.23715,-85.37635 l -2.13441,-1.42294 6.16607,-12.80645 2.60872,1.6601 c 7.74352,-16.76425 20.56848,-26.18864 33.91338,-34.86201 z" fill="#bf2524" data-v-7e57ab9d></path></a><a href="#" data-v-7e57ab9d><path class="auditory" d="M 475.49881,255.65472 474.78734,451.546 c 2.45062,1.20496 4.90123,-0.21181 7.35185,-2.13441 l 1.42294,2.60872 20.63261,-10.67204 -1.18578,-2.37157 c 78.56089,-52.36248 40.86877,-146.47785 0.47431,-169.80406 l 1.18579,-1.66009 -20.63262,-11.14636 -1.89725,2.37156 z" fill="#bf2524" data-v-7e57ab9d></path></a></svg>`);
  _push(ssrRenderComponent(_component_HeadButtons, { class: "nav" }, null, _parent));
  _push(ssrRenderComponent(_component_FloorsButtons, {
    class: "wrapper",
    numberOfFloors: $data.numberOfFloors,
    onChange: _ctx.updateFloor
  }, null, _parent));
  _push(ssrRenderComponent(_component_ScaleButtons, { class: "paper" }, null, _parent));
  _push(`<img class="map__img"${ssrRenderAttr("src", _imports_0)} data-v-7e57ab9d></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/start.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const start = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7e57ab9d"]]);

export { start as default };
//# sourceMappingURL=start-f4342044.mjs.map
