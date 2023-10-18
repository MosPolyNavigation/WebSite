import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _imports_0 = "" + __buildAssetsURL("polytech1.bcef614d.png");
const _imports_1 = "" + __buildAssetsURL("polytech2.5ae8f1a8.png");
const about_vue_vue_type_style_index_0_scoped_868eb863_lang = "";
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goToPrev() {
      this.$router.go(-1);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "about" }, _attrs))} data-v-868eb863><h1 class="about__heading" data-v-868eb863>Дополнительная информация</h1><div class="about__small-section" data-v-868eb863><div class="about__text-block" data-v-868eb863><h2 class="about__title" data-v-868eb863>Карта корпусов Московского политеха</h2><p class="about__text" data-v-868eb863>Добро пожаловать на сайт-путеводитель по корпусам Московского политеха!</p><p class="about__text" data-v-868eb863>Теперь вы точно не заблудитесь в корпусе🥳</p></div><img${ssrRenderAttr("src", _imports_0)} alt="" class="about__image" data-v-868eb863></div><div class="about__big-section" data-v-868eb863><div class="about__text-block" data-v-868eb863><h3 class="about__subheading" data-v-868eb863>О сайте</h3><p class="about__text about__big-text" data-v-868eb863> Здесь вы найдете полезную информацию о корпусах университета и расположении аудиторий. Мы надеемся, что этот сайт поможет вам быстро и легко ориентироваться на территории и сделает вашу жизнь в нем более комфортной.</p><p class="about__text about__big-text" data-v-868eb863>Не забудьте посоветовать наш сайт одногруппникам, так вы не только поддержите нашу работу, но и облегчите жизнь своим друзьям!</p><p class="about__text about__big-text" data-v-868eb863> Желаем вам приятного пользования💌</p></div><img${ssrRenderAttr("src", _imports_1)} alt="" class="about__image" data-v-868eb863></div><button class="about__button" data-v-868eb863>Вернуться назад</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-868eb863"]]);
export {
  about as default
};
//# sourceMappingURL=about-902c4217.js.map
