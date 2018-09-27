import Confirm from './packages/confirm';
import Message from './packages/alert';
import Loading from './packages/loading';
import Btn from './packages/btn';

const components = [Btn];

const install = function (Vue, opts = {}) {
    //js组件方式引用
    Vue.prototype.$confirm = Confirm;
    Vue.prototype.$message = Message;
    Vue.prototype.$loading = Loading;

    //标签组件方式引用
    components.forEach(component => {
        Vue.component(component.name, component.tpl);
    })
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    Confirm,
    Message,
    Loading,
    Btn
};
export default {
    install
}
