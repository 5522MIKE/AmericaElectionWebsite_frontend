<template>
<div class="bg">
<div class="container">   
    <!-- 导航栏 -->
    <navigation />
    <!-- 评论 --> 
    <div class="card" v-show="draftShow">
        <div class="card-body">
            <h4 class="card-title">DRAFT：  {{title}}</h4>
            <p class="card-text">{{text}}</p>
            <a href="#" class="card-link">reply</a>
            <a href="#" class="card-link">share</a>
        </div>
    </div>

    <div class="card">
        <div class="card-body" v-for="(item) in items" :key="item.index" >
            <h4 class="card-title">{{ item.title }}</h4>
            <p class="card-text">{{ item.message }}</p>
            <a href="#" class="card-link">reply</a>
            <a href="#" class="card-link">share</a>
            <div>------------------------------------------------------------------------------------</div>
        </div>
    </div>


    <div class="invisible">...</div>
    <div class="invisible">...</div>
    <div class="invisible">...</div>
    <div class="invisible"><p>..</p></div>
    <!-- 输入框 -->
    <div class="bottom">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Title</span>
        </div>
        <input v-model="title" type="text" @click="showDraft" class="form-control" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
        <div class="input-group-prepend">
            <span class="input-group-text">Comment</span>
        </div>
        <textarea v-model="text" class="form-control" @click="showDraft" aria-label="With textarea"></textarea>
        <button class="btn btn-success btn-lg" @click="submit">submit</button>
    </div>
    </div>
    <!-- 脚注 -->
    <div class="card-footer text-muted">
        © 2020-2021
    </div>
</div> 
</div>
</template>

<script>
// 引入导航栏目
import navigation from './Navigation.vue'

import axios from 'axios'
import  'url-search-params-polyfill'
import qs from 'qs'


export default {
    name: 'Comment',
    components: {
        navigation,
    },
    data(){
        return {
            draftShow: false,
            parentMessage: 'title',
            items: [
                { title:'Thanks', message: 'THANK YOU to the GREAT men and women of @FedEx and @UPS for driving through the storms this week to deliver millions of doses of the vaccine across the country. Two Great American Companies!' }, 
                { title:'FYI ...', message: '-COVID is now the 3rd leading cause of US deaths' },
                { title:'Governor of Georgia!!!', message: 'The Secretary of State and Governor of Georgia, both so-called “Republicans”, aren’t allowing Fulton County to go through the vital Voter Signature Verification process. Also, they are not allowing Republican “watchers” to be present and verify!' },
                { title:'SWORN', message: 'Biden will be sworn in on Jan. 20.' },
            ],
            title:'',
            text:'',
    }
    },
    methods: {
        // api调用函数
        submitapi(){
            // console.log("submit")
            // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
            // let param = new URLSearchParams()
            // param.append('content', 'admin')
            // param.append('news_id', '1')
            // console.log(param.get('news_id'))
            const data = { 'content': this.text , 'news_id':1};
            console.log(qs.stringify(data))
            axios({
                method:'post',
                url:'http://127.0.0.1:8000/news/comment/submit',
                // 传递参数
                // data: {
                //     content:'test2',
                //     news_id:1
                // },
                data:qs.stringify(data),
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                    'Accept':'*/*'
                }
            }).then(response => {
                // 请求成功
                let res = response.data;
                console.log(res);
            }).catch(error => {
                // 请求失败，
                console.log(error);
            });
        },
        submit(){
            this.draftShow = true;
            var obj = {};
            obj["title"] = this.title,
            obj["message"] = this.text,
            console.log(obj)
            this.items.push(obj)
            console.log(this.items)
            this.draftShow = false
            this.title = ''
            this.text = ''
        },
        showDraft(){
            this.draftShow = true
        }
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
.bottom{ width:58.4%; margin:0 auto; overflow:hidden; position: fixed; bottom:0;}
@media (max-width: 640px) {
    .bottom {
        width:95%
    }
}
@media (max-width: 1550px) and (min-width: 640px) {
    .bottom {
        width:73.1%
    }
}
</style>