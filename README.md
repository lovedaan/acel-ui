# aceUI

> 这是基于vuejs封装的适用移动端的自义定插件，组件。方便使用，包括alert弹出框，confirm弹出框，toast提示框，loading，轮播图，下拉加载更多，上拉刷新，常规按钮。支持常规加载和按需加载


## Install

```shell

npm i acelUI  --save
cnpm i acelUI  --save //国内npm

```

## Quick Start Usage

```javascript

//main.js中常规引入
import acelUI from 'acel-ui';
Vue.use(acelUI);

// 按需引用

import {Confirm, Message, Loading, Btn} from 'acelUI';

Vue.use(Confirm);
Vue.use(Btn);


this.$confirm({
  content: '确定要删除数据?',   // 提示内容
  okBtnText: '确定',            // 确定按钮的文本
  cancelBtnText: '取消',        // 取消按钮的文本
  confirm: null,                // 确定后的回调
  cancel: null                  // 取消后的回调
})


this.$message({
  content: '确定要删除数据?',     // 提示内容
  btnText: '确定',                // 确定按钮的文本
  confirm: null                   // 确定后的回调
});


this.$loading({
  loadingText: '加载中...',       // 提示内容
  time: null                      // 自动关闭时间
});


<ace-btn text="按钮文本" @click.native="handleFn" type="primary" />

text:   String     按钮文本
type:   String     按钮的类型，primary，default，danger
plain： Boolean    是否镂空，默认是false,


```




