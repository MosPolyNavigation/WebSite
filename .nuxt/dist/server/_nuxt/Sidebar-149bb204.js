import { i as infoData } from "./aud_info-52558608.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "../server.mjs";
const Search_vue_vue_type_style_index_0_scoped_7b4eb5ba_lang = "";
const _sfc_main$1 = {
  data() {
    return {
      isInputText: false,
      searchValue: "",
      info: [],
      auds: []
    };
  },
  mounted() {
    this.info = infoData;
  },
  methods: {
    deleteInput() {
      this.searchValue = "";
    }
  },
  watch: {
    searchValue(newVal) {
      if (newVal) {
        this.isInputText = true;
      } else {
        this.isInputText = false;
      }
      let valSplit = newVal.split(" ");
      if (/^\d+$/.test(valSplit[0])) {
        this.auds = this.info.filter((d) => d.number.startsWith(valSplit[0]) && d.number.length > 1);
      } else if (/^\D+$/.test(valSplit[0])) {
        this.auds = this.info.filter((d) => d.campus.startsWith(valSplit[0].toUpperCase()) && d.number.length > 1 && d.number != "-");
      } else if (valSplit.length == 2) {
        this.auds = this.info.filter((d) => d.campus.startsWith(valSplit[0].toUpperCase()) && d.number.startsWith(valSplit[1]));
      } else {
        this.auds = [];
      }
      this.auds.sort((a, b) => {
        return a.number > b.number ? 1 : a.number < b.number ? -1 : 0;
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-7b4eb5ba><div class="nav__search search" data-v-7b4eb5ba><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7b4eb5ba><path d="M15.6339 13.2075H14.6459L14.2957 12.8834C15.5637 11.4714 16.2607 9.66876 16.2593 7.80446C16.2593 6.26089 15.7825 4.75197 14.8892 3.46854C13.9959 2.1851 12.7262 1.18478 11.2407 0.594083C9.75523 0.00338155 8.12063 -0.151173 6.54363 0.149964C4.96664 0.451101 3.51807 1.1944 2.38112 2.28588C1.24417 3.37735 0.469897 4.76797 0.156212 6.28189C-0.157472 7.7958 0.00352245 9.36502 0.618836 10.7911C1.23415 12.2172 2.27615 13.4361 3.61306 14.2936C4.94997 15.1512 6.52176 15.6089 8.12965 15.6089C10.1433 15.6089 11.9944 14.9005 13.4202 13.7238L13.7579 14.06V15.0086L20.0114 21L21.875 19.211L15.6339 13.2075ZM8.12965 13.2075C5.01537 13.2075 2.50143 10.7942 2.50143 7.80446C2.50143 4.81475 5.01537 2.40138 8.12965 2.40138C11.2439 2.40138 13.7579 4.81475 13.7579 7.80446C13.7579 10.7942 11.2439 13.2075 8.12965 13.2075Z" fill="#EAEAEA" data-v-7b4eb5ba></path></svg><input type="text" class="search__field" placeholder="Введите номер аудитории"${ssrRenderAttr("value", $data.searchValue)} data-v-7b4eb5ba><svg class="${ssrRenderClass([{ search__cross_display_none: !$data.isInputText }, "search__cross"])}" width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-7b4eb5ba><path d="M0.271767 10.3446C-0.0881408 10.7045 -0.0954859 11.3435 0.279112 11.7181C0.661056 12.0927 1.30008 12.0854 1.65264 11.7328L6.00092 7.38454L10.3419 11.7255C10.7091 12.0927 11.3408 12.0927 11.7154 11.7181C12.09 11.3362 12.09 10.7119 11.7227 10.3446L7.38179 6.00367L11.7227 1.6554C12.09 1.28815 12.0973 0.656471 11.7154 0.281873C11.3408 -0.0927245 10.7091 -0.0927245 10.3419 0.274528L6.00092 4.61546L1.65264 0.274528C1.30008 -0.0853795 0.653711 -0.10007 0.279112 0.281873C-0.0954859 0.656471 -0.0881408 1.30284 0.271767 1.6554L4.6127 6.00367L0.271767 10.3446Z" fill="#EAEAEA" data-v-7b4eb5ba></path></svg></div><div class="nav__search-result search-result" data-v-7b4eb5ba><!--[-->`);
  ssrRenderList($data.auds, (aud) => {
    _push(`<p class="search-result__text" data-v-7b4eb5ba>${ssrInterpolate(aud.campus)} ${ssrInterpolate(aud.number)} ${ssrInterpolate(aud.type != "" && aud.type != "-" ? `(${aud.type})` : "")}</p>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7b4eb5ba"]]);
const Sidebar_vue_vue_type_style_index_0_scoped_156f19df_lang = "";
const _sfc_main = {
  data() {
    return {};
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Search = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))} data-v-156f19df>`);
  _push(ssrRenderComponent(_component_Search, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-156f19df"]]);
export {
  __nuxt_component_0 as _,
  __nuxt_component_2 as a
};
//# sourceMappingURL=Sidebar-149bb204.js.map
