<template>
<div class="bg">
<div class="container">   
    <!-- 导航栏 -->
    <navigation />
    <!-- 候选人 -->
    <div>
        <biden></biden>
    </div>
    <!-- 脚注 -->
    <div class="card-footer text-muted">
        © 2020-2021
    </div>
</div> 
</div>
</template>

<script>
// 引入trup组件
import biden from './Biden.vue'
// 引入导航栏目
import navigation from './Navigation.vue'

export default {
    components: {
        biden,
        navigation
    }
}
</script>

<style scoped>
.bg {
    background-image:url('../assets/bg4.png');
    background-repeat:no-repeat;
    background-size: 100%;
    background-attachment:fixed;
    background-position:center;
}
</style>