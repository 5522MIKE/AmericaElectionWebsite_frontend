<template>
<span class="glyphicon glyphicon-paperclip"></span>分享
    <div class="container">
        
        <div class="row header">
            <div class="col-md-12">
                <div>
                    <img src="../assets/President-Trump-Official-Portrait-200x200.jpg" alt="" class="rounded-circle">
                </div>
                <div>
                    <h1 class="h1">Donald Trump</h1>
                    <p>
                        <a class="link" href="https://twitter.com/realDonaldTrump" target="_blank" rel="noopener noreferrer" aria-label="在新窗口中打开">@realDonaldTrump</a>
                    </p>
                </div>
            </div>
        </div>
        <div class="row main">
            <div class="col-md-12">
                <button type="button" class="btn btn-link" @click="copy()">分享</button>
            </div>
        </div>
        <div class="row main">
            <div class="col-md-2">
            </div>
            <div class="col-md-8 my_text">
                <h5>
                    <strong>
                        唐纳德·特朗普是美国总统的第45位。他相信美国具有令人难以置信的潜力，甚至会超越其过去取得的显著成就。
                    </strong>
                </h5>
                <p class="text-justify">唐纳德·特朗普定义了美国的成功故事。在他的一生中，他不断树立卓越商业和创业的标准，尤其是在房地产、体育和娱乐领域。特朗普先生在进入政治和公共服务时，在私人生活上取得了成功。他在第一次竞选任何政治职位时，就赢得了总统职位。</p>
                <p class="text-justify">特朗普毕业于宾夕法尼亚大学沃顿金融学院，跟随父亲的脚步进入房地产开发领域，在纽约市留下了自己的印记。在那里，特朗普的名字很快成为曼哈顿最负盛名的地址的代名词，随后，在世界各地。</p>
                <p class="text-justify">特朗普先生也是一位有成就的作家。他写了十四本畅销书。他的第一<em _istranslated="1">本书《交易的艺术</em>》被认为是一部商业经典。</p>
                <p class="text-justify">2016年11月8日，特朗普先生以28年来共和党最大的选举团压倒性优势当选总统。特朗普在全国赢得了2600多个县，是1984年罗纳德·里根总统以来最多的一次。他获得了6200多万美国人的选票，是共和党候选人中得票最多的一次。</p>
                <p class="text-justify">特朗普总统在他的第一个任期内取得了历史性的成果，尽管党派僵局的国家首都，并抵制特殊利益集团和华盛顿机构。</p>
                <p class="text-justify">他通过了创纪录的减税和法规削减，实现了能源独立，用美国-墨西哥-加拿大协议取代了北美自由贸易协定，投资2万亿美元彻底重建军队，发动了太空部队，消灭了ISIS哈里发，实现了中东和平的重大突破，通过了半个世纪以来最重要的退伍军人事务改革，确认了250多名联邦法官，包括2名最高法院法官， 签署了两党刑事司法改革， 降低药品价格， 保护医疗保险和社会保障， 并保护了我们国家的边界。</p>
                <p class="text-justify">为了战胜COVID-19全球大流行，特朗普总统发起了自二战以来最伟大的全国动员。特朗普政府颁布了美国历史上最大的一揽子财政救济计划，创建了世界上最先进的测试系统，开发了有效的医疗方法，挽救了数百万人的生命，并启动了"扭曲速度行动"，以在创纪录的时间提供疫苗并击败病毒。</p>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
</template>

<script>
export default { 
    data () {
        return {
            windowUrl : window.location.href
        }
    },
    methods:{
        copy(){
            var domUrl = document.createElement("input");
            domUrl.value = this.windowUrl;
            domUrl.id = "creatDom";
            document.body.appendChild(domUrl);
            domUrl.select(); // 选择对象
            document.execCommand("Copy"); // 执行浏览器复制命令
            let creatDom = document.getElementById("creatDom");
            creatDom.parentNode.removeChild(creatDom);
            alert("复制到剪贴板")
        }
    }
}
</script>

<style scope>
.header{
    background-color:#293340;
}
.h1{
    color: #e7e4e4e8;
}
.main{
    background-color: #e7e4e4e8;
    
}
</style>