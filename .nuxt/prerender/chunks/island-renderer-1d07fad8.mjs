import { defineComponent, createBlock, Teleport, h } from 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/index.mjs';
import { c as createError } from './server.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/llonan/Desktop/WebSite/node_modules/vue/server-renderer/index.mjs';
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

const components_islands = {};
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: components_islands
});
const islandRenderer = /* @__PURE__ */ defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  async setup(props) {
    var _a;
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    if (typeof component === "object") {
      await ((_a = component.__asyncLoader) == null ? void 0 : _a.call(component));
    }
    return () => [
      createBlock(Teleport, { to: "nuxt-island" }, [h(component || "span", props.context.props)])
    ];
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-1d07fad8.mjs.map
