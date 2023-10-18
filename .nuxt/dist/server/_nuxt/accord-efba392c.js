import { i as infoData } from "./aud_info-52558608.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
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
const Info_vue_vue_type_style_index_0_scoped_b5affb9f_lang = "";
const _sfc_main$1 = {
  props: {
    audNumber: String
  },
  data() {
    return {
      c: 0,
      item: {
        id: 7,
        campus: "АВ",
        corpus: "5",
        floor: "1",
        number: "5105",
        type: "Проектное бюро",
        desc: "Компьютерный класс"
      },
      info: []
    };
  },
  methods: {
    arrowClick(event) {
      event.currentTarget.classList.toggle("click");
    }
  },
  mounted() {
    this.info = infoData;
  },
  watch: {
    audNumber(newVal) {
      this.item = this.info.filter((d) => d.number == newVal)[0];
      console.log(this.item);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-b5affb9f><button class="arrow-btn" data-v-b5affb9f><svg class="arrowsvg" width="26" height="11" viewBox="0 0 26 11" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b5affb9f><path class="svg" d="M11.9964 9.25569L11.9933 9.25358L1.67942 2.23068C1.49961 2.10824 1.49983 2.04055 1.49999 1.99268L1.5 1.98855L1.49999 1.98442C1.49983 1.93655 1.49961 1.86886 1.67942 1.74642C1.88391 1.60718 2.19607 1.5 2.6861 1.5C3.17613 1.5 3.48829 1.60718 3.69278 1.74642L12.4372 7.70062L13 8.08386L13.5628 7.70062L22.3072 1.74642C22.5117 1.60718 22.8239 1.5 23.3139 1.5C23.8039 1.5 24.1161 1.60718 24.3206 1.74642C24.5004 1.86885 24.5002 1.93654 24.5 1.98442C24.5 1.98582 24.5 1.98719 24.5 1.98855C24.5 1.98991 24.5 1.99129 24.5 1.99268C24.5002 2.04056 24.5004 2.10825 24.3206 2.23068L14.0067 9.25358C13.8814 9.33888 13.7496 9.39714 13.6063 9.4317C13.4287 9.47455 13.2272 9.4991 12.9983 9.5C12.7862 9.49986 12.585 9.47284 12.3922 9.42047C12.1893 9.36535 12.0663 9.30369 11.9964 9.25569Z" stroke-width="2" data-v-b5affb9f></path></svg></button><div class="info" data-v-b5affb9f><div class="info__item" data-v-b5affb9f><h2 class="info__heading" data-v-b5affb9f>${ssrInterpolate($data.item.campus)} ${ssrInterpolate($data.item.number)}</h2><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b5affb9f><rect width="37" height="37" rx="6" fill="#5F6DEC" data-v-b5affb9f></rect><path d="M26.75 30.25C25.9375 30.25 25.2083 30.0154 24.5625 29.5462C23.9167 29.0771 23.4688 28.4783 23.2188 27.75H16.75C15.375 27.75 14.1979 27.2604 13.2188 26.2812C12.2396 25.3021 11.75 24.125 11.75 22.75C11.75 21.375 12.2396 20.1979 13.2188 19.2188C14.1979 18.2396 15.375 17.75 16.75 17.75H19.25C19.9375 17.75 20.5262 17.505 21.0163 17.015C21.5063 16.525 21.7508 15.9367 21.75 15.25C21.75 14.5625 21.505 13.9737 21.015 13.4837C20.525 12.9938 19.9367 12.7492 19.25 12.75H12.7812C12.5104 13.4792 12.0571 14.0783 11.4212 14.5475C10.7854 15.0167 10.0617 15.2508 9.25 15.25C8.20833 15.25 7.32292 14.8854 6.59375 14.1562C5.86458 13.4271 5.5 12.5417 5.5 11.5C5.5 10.4583 5.86458 9.57292 6.59375 8.84375C7.32292 8.11458 8.20833 7.75 9.25 7.75C10.0625 7.75 10.7867 7.98458 11.4225 8.45375C12.0583 8.92292 12.5108 9.52167 12.78 10.25H19.25C20.625 10.25 21.8021 10.7396 22.7812 11.7188C23.7604 12.6979 24.25 13.875 24.25 15.25C24.25 16.625 23.7604 17.8021 22.7812 18.7812C21.8021 19.7604 20.625 20.25 19.25 20.25H16.75C16.0625 20.25 15.4738 20.495 14.9837 20.985C14.4937 21.475 14.2492 22.0633 14.25 22.75C14.25 23.4375 14.495 24.0263 14.985 24.5163C15.475 25.0063 16.0633 25.2508 16.75 25.25H23.2188C23.4896 24.5208 23.9429 23.9217 24.5788 23.4525C25.2146 22.9833 25.9383 22.7492 26.75 22.75C27.7917 22.75 28.6771 23.1146 29.4062 23.8438C30.1354 24.5729 30.5 25.4583 30.5 26.5C30.5 27.5417 30.1354 28.4271 29.4062 29.1562C28.6771 29.8854 27.7917 30.25 26.75 30.25ZM9.25 12.75C9.60417 12.75 9.90125 12.63 10.1412 12.39C10.3812 12.15 10.5008 11.8533 10.5 11.5C10.5 11.1458 10.38 10.8488 10.14 10.6088C9.9 10.3688 9.60333 10.2492 9.25 10.25C8.89583 10.25 8.59875 10.37 8.35875 10.61C8.11875 10.85 7.99917 11.1467 8 11.5C8 11.8542 8.12 12.1512 8.36 12.3912C8.6 12.6312 8.89667 12.7508 9.25 12.75Z" fill="#EAEAEA" data-v-b5affb9f></path></svg></div>`);
  if ($data.item.campus != "") {
    _push(`<div class="info__item" data-v-b5affb9f><p class="info__key" data-v-b5affb9f>Кампус</p><p class="info__value" data-v-b5affb9f>${ssrInterpolate($data.item.campus)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.corpus != "") {
    _push(`<div class="info__item" data-v-b5affb9f><p class="info__key" data-v-b5affb9f>Корпус</p><p class="info__value" data-v-b5affb9f>${ssrInterpolate($data.item.corpus)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.floor != "") {
    _push(`<div class="info__item" data-v-b5affb9f><p class="info__key" data-v-b5affb9f>Этаж</p><p class="info__value" data-v-b5affb9f>${ssrInterpolate($data.item.floor)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.number != "") {
    _push(`<div class="info__item" data-v-b5affb9f><p class="info__key" data-v-b5affb9f>Номер</p><p class="info__value info__value_no_wrap" data-v-b5affb9f>${ssrInterpolate($data.item.number)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.type != "") {
    _push(`<div class="info__item" data-v-b5affb9f><p class="info__key" data-v-b5affb9f>Назначение</p><p class="info__value" data-v-b5affb9f>${ssrInterpolate($data.item.type)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.item.desc != "") {
    _push(`<div class="info__item" data-v-b5affb9f><p class="info__key" data-v-b5affb9f>Описание</p><p class="info__value" data-v-b5affb9f>${ssrInterpolate($data.item.desc)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Info.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b5affb9f"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Info = __nuxt_component_0;
  _push(ssrRenderComponent(_component_Info, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/accord.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const accord = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  accord as default
};
//# sourceMappingURL=accord-efba392c.js.map
