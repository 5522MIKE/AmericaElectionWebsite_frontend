<template>
    <div class="container">  
        <div class="row header">
            <div class="col-md-12">
                <div>
                    <br>
                    <img src="../assets/President-Trump-Official-Portrait-200x200.jpg" alt="" class="rounded-circle">
                </div>
                <div>
                    <h1 class="h1">Donald Trump</h1>
                    <div id="text">
                        <p>
                            <a class="link" style="color:white;" href="https://twitter.com/realDonaldTrump" target="_blank" rel="noopener noreferrer" aria-label="在新窗口中打开">@realDonaldTrump</a><br>
                            <a class="btn btn-link" @click="copy()" style="color:white;" >Share</a>
                        </p>  
                    </div>              
                </div>
            </div>
        </div>
        <div class="row main">
            <div class="col-md-2">
            </div>
            <div class="col-md-8 my_text">
                <br>
                <h5>
                    <strong>
                        Donald J. Trump is the 45th President of the United States. He believes the United States has incredible potential and will go on to exceed even its remarkable achievements of the past.                    </strong>
                </h5>
                <p class="text-justify">Donald J. Trump defines the American success story. Throughout his life he has continually set the standards of business and entrepreneurial excellence, especially in real estate, sports, and entertainment. Mr. Trump built on his success in private life when he entered into politics and public service. He remarkably won the Presidency in his first ever run for any political office.</p>
                <p class="text-justify">A graduate of the University of Pennsylvania’s Wharton School of Finance, Mr. Trump followed in his father’s footsteps into the world of real estate development, making his mark in New York City. There, the Trump name soon became synonymous with the most prestigious of addresses in Manhattan and, subsequently, throughout the world.</p>
                <p class="text-justify">Mr. Trump is also an accomplished author. He has written more than fourteen bestsellers.  His first book,<em>The Art of the Deal</em> , is considered a business classic.</p>
                <p class="text-justify">Mr. Trump announced his candidacy for the Presidency on June 16, 2015. He then accepted the Republican nomination for President of the United States in July of 2016, having defeated 17 other contenders during the Republican primaries.</p>
                <p class="text-justify">On November 8, 2016, Mr. Trump was elected President in the largest Electoral College landslide for a Republican in 28 years. Mr. Trump won more than 2,600 counties nationwide, the most since President Ronald Reagan in 1984. He received the votes of more than 62 million Americans, the most ever for a Republican candidate.</p>
                <p class="text-justify">President Trump has delivered historic results in his first term in office despite partisan gridlock in the Nation’s Capital, and resistance from special interests and the Washington Establishment.</p>
                <p class="text-justify">He passed record-setting tax cuts and regulation cuts, achieved energy independence, replaced NAFTA with the United-States-Mexico-Canada Agreement, invested $2 trillion to completely rebuild the Military, launched the Space Force, obliterated the ISIS Caliphate, achieved a major breakthrough for peace in the Middle East, passed the most significant Veterans Affairs reforms in half a century, confirmed over 250 federal judges, including 2 Supreme Court Justices, signed bipartisan Criminal Justice Reform, lowered drug prices, protected Medicare and Social Security, and secured our nation’s borders.</p>
                <p class="text-justify">To vanquish the COVID-19 global pandemic, President Trump launched the greatest national mobilization since World War II. The Trump Administration enacted the largest package of financial relief in American history, created the most advanced testing system in the world, developed effective medical treatments to save millions of lives, and launched Operation Warp Speed to deliver a vaccine in record time and defeat the Virus.</p>
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
</style>