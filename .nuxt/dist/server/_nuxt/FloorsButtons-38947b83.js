import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const FloorsButtons_vue_vue_type_style_index_0_scoped_fbedba2d_lang = "";
const _sfc_main = {
  props: {
    numberOfFloors: Number
  },
  data() {
    return {
      activeFloor: 1
    };
  },
  mounted() {
    this.$refs[`button${this.activeFloor}`][0].classList.toggle("btn_active");
  },
  methods: {},
  watch: {
    activeFloor(newVal, oldVal) {
      this.$refs[`button${oldVal}`][0].classList.toggle("btn_active");
      this.$refs[`button${newVal}`][0].classList.toggle("btn_active");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-fbedba2d><!--[-->`);
  ssrRenderList($props.numberOfFloors, (n) => {
    _push(`<button class="btn" data-v-fbedba2d><p class="number" data-v-fbedba2d>${ssrInterpolate(n)}</p></button>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloorsButtons.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fbedba2d"]]);
export {
  __nuxt_component_3 as _
};
//# sourceMappingURL=FloorsButtons-38947b83.js.map
