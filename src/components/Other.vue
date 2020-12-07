<template>
    <div class="container">
        
        <div class="row header">
            <div class="col-md-12">
                <div>
                    <br>
                    <img src="../assets/kenye.jpg" alt="" class="rounded-circle">
                </div>
                <div>
                    <h1 class="h1">Kanye West</h1>
                    <p>
                        <a class="link" href="https://twitter.com/kanyewest" target="_blank" rel="noopener noreferrer" aria-label="在新窗口中打开">@kanyewest</a><br>
                        <button type="button" class="btn btn-link" @click="copy()">分享</button>
                    </p>
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
                        The former vice president, now the Democratic presidential nominee, says he can build on the Obama legacy and unite the country in a challenging time.
                    </strong>
                </h5>
                <p class="text-justify">
                    Joseph Robinette Biden Jr. (/ˈbaɪdən/ BY-dən; born November 20, 1942) is an American politician and the president-elect of the United States. He defeated incumbent president Donald Trump in the 2020 presidential election and will be inaugurated as the 46th president on January 20, 2021. A member of the Democratic Party, Biden served as the 47th vice president during the Obama administration from 2009 to 2017. He represented Delaware in the United States Senate from 1973 to 2009
                </p>
                <p class="text-justify">
                    Raised in Scranton, Pennsylvania, and New Castle County, Delaware, Biden studied at the University of Delaware before earning his law degree from Syracuse University in 1968. He was elected a New Castle County Councillor in 1970 and became the sixth-youngest senator in American history when he was elected to the U.S. Senate from Delaware in 1972, at the age of 29. Biden was a longtime member of the Senate Foreign Relations Committee, and eventually its chairman. He opposed the Gulf War in 1991 and supported expanding the NATO alliance into Eastern Europe and its intervention in the Yugoslav Wars of the 1990s. He supported the resolution authorizing the Iraq War in 2002, and later opposed the surge of U.S. troops in 2007. He also chaired the Senate Judiciary Committee from 1987 to 1995, dealing with drug policy, crime prevention, and civil liberties issues; led the effort to pass the Violent Crime Control and Law Enforcement Act and the Violence Against Women Act; and oversaw six U.S. Supreme Court confirmation hearings, including the contentious hearings for Robert Bork and Clarence Thomas. He ran unsuccessfully for the Democratic presidential nomination in 1988 and again in 2008.                </p>
                <p class="text-justify">
                    Biden was reelected to the Senate six times, and was the fourth-most senior senator when he resigned to serve as Barack Obama's vice president after they won the 2008 presidential election; Obama and Biden were reelected in 2012. As vice president, Biden oversaw infrastructure spending in 2009 to counteract the Great Recession. His negotiations with congressional Republicans helped pass legislation including the 2010 Tax Relief Act, which resolved a taxation deadlock; the Budget Control Act of 2011, which resolved a debt ceiling crisis; and the American Taxpayer Relief Act of 2012, which addressed the impending "fiscal cliff". He also led efforts to pass the United States–Russia New START treaty and helped formulate U.S. policy toward Iraq through the withdrawal of U.S. troops in 2011. Following the Sandy Hook Elementary School shooting, he led the Gun Violence Task Force. In January 2017, Obama awarded Biden the Presidential Medal of Freedom with distinction.                
                </p>
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