<template>
    <div class="loadingWrap" v-show="visible">
        <div class="loading-con">
            <img class="loading-pic" src="./loading.gif" alt="">
            <p class="loading-text">{{loadingText}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loading',
    data() {
        return {
            loadingText: '加载中...',
            visible: true
        }
    },
}
</script>
<style lang="less" scoped>
    .loadingWrap{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, .6);
        .loading-con{
            position: absolute;
            left: 50%;
            top:50%;
            width: 250px;
            min-height: 100px;
            transform: translate(-50%,-50%);
            background: #fff;
            border-radius: 10px;
            text-align: center;
            padding-top: 15px;
            .loading-pic{
                width: 50px;
                height: 50px;
            }
            .loading-text{
                padding-bottom:5px;
                color:#000;
            }
        }
    }
</style>

