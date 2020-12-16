<template>
  <!-- 新闻界面顶部图片 -->
  <div class="bg2">
    <div class="newstitle">
      <img src="../assets/newstitle.jpg" class="w-100 h-100" />
    </div>
    <!-- 顶部部分 -->
    <div class="cell">
      <div class="navbar navbar-expand-md" id="topnav">
        <!-- 导航栏 -->
        <ul class="nav justify-content-around nav-justified">
          <li class="nav-item text-center">
              <b><a href="/" class="nav-link text-danger" style='color:#fff'> Election</a></b>
          </li>
          <li class="nav-item">
              <b><a href="/NewsPage" class="nav-link" style='color:#fff'> US</a></b>  
          </li>
          <li class="nav-item">
              <b><a href="/NewsPage2" class="nav-link" style='color:#fff'> Politics</a></b>
          </li>
          <li class="nav-item">
              <b><a href="#" class="nav-link" style='color:#fff'> Health</a></b>
          </li>
          <li class="nav-item">
              <b><a href="#" class="nav-link" style='color:#fff'> Opinion</a></b> 
          </li>
          <li class="nav-item">
              <b><a href="#" class="nav-link" style='color:#fff'> Sports</a></b>
          </li>
        </ul>
        <!-- 下拉按钮 -->
        <!-- 遇到了一点bug，这个按钮没法靠右对齐 -->
          <div class="dropdown float-right">
            <a class="dropdown-toggle w-100" style='color:#fff' data-toggle="dropdown"><b>Edition</b></a>
            <ul class="dropdown-menu">
                  <li> <a href="#" class="text-muted">U.S.</a></li>
                  <li> <a href="#" class="text-muted">International</a></li>
                  <li> <a href="#" class="text-muted">Arabic</a></li>
                  <li> <a href="#" class="text-muted">Espanol</a></li>
              </ul>
          </div>
        </div>
    </div> 

      <!-- 新闻内容区域 -->
      <div class="content">
        <div class="row f1_top mt-2">
          <!-- 第一行两个大标题 -->
            <div class="col-lg-6 col-md-12 p-3" id="news1">
                <div class="mr-0 mb-1 ml-3">
                  <h3><b>Biden readies major stimulus push and flurry of executive actions in first 100 days</b></h3>
                </div>
                <div class="mr-0 mb-1" id="newspic1">
                    <img src="../assets/news2.jpg" class="w-80 h-60"/>
                </div>
                <div class="mr-0 mb-1" id="newscontent1">
                  <h5>
                    (CNN)President-elect Joe Biden and his transition team are preparing for an early, all-out 
                    push to pass an ambitious new stimulus bill, while also drawing up plans for a flurry 
                    of executive actions aimed at delivering on campaign promises and undoing the Trump administration's
                    efforts to undermine key government agencies.<br><br>
                    Biden will be inaugurated in January with a pressing mandate to confront simultaneous and 
                    interwoven public health, economic and racial crises. At the same time, his team will take over the 
                    work of spearheading one of the most complicated, politically fraught mass vaccination campaigns 
                    in American history.Biden's agenda for his first 100 days in office will, according to both those 
                    close to him and outside groups in contact with his top aides.
                  </h5>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 p-0 mt-3" id="news2">
                <div class="mb-1 mr-3">
                  <h3><b>GOP silence on Trump's false election claims recalls McCarthy era</b></h3>
                </div>
                <div class="mb-1 ml-0" id="newspic2">
                    <img src="../assets/TrumpNews.jpg" class="w-160 h-100"/>
                </div>
                <div class="mr-0 mb-1" id="newscontent2">
                  <h5>
                    (CNN)The silence of congressional Republican leaders as President Donald Trump's unfounded claims 
                    of election fraud grow wilder and more venomous increasingly resembles the party's deference to 
                    Sen. Joe McCarthy during the worst excesses of his anti-Communist crusade in the early 1950s.<br><br>
                    In McCarthy's era, most of the GOP's leaders found excuses to avoid challenging conspiracy 
                    theories that they knew to be implausible, even as evidence of their costs to the nation steadily 
                    mounted. For years, despite their private doubts about his charges and methods alike, the top GOP 
                    leadership -- particularly Senate Republican leader Robert A. Taft, the Mitch McConnell of his day 
                    -- either passively abetted or actively supported McCarthy's scattershot claims of treason and 
                    Communist infiltration.
                  </h5>
                </div>
            </div>
        </div>
      </div>
      <!-- 与评论分隔距离50px -->
      <div style="height:50px; width:1px; border-left:1px #000 solid"></div>

      <!-- 评论框 -->
      <div class="comment_content" id="comment_content">
        <div id="h3style" class="p-3">
          <h3 align="left"><b>Commends</b></h3>
        </div>
        <div class="commendtitle ml-5 p-1" align="left">
            <textarea
              type="text"
              placeholder="Please write your commends..."
              v-model="commend"
              class="commend"
              id="commendinput"
              style="height:100px"
            />
            <div align="left" style="magrin-left:5%" class="mt-2">
              <button @click="postComment" class="btn btn-success">Commend</button>
            </div> 
        </div>
      </div>
        
  </div>
</template>

<script>

export default {
  name:"NewsPage",
  
}

</script>

<style scoped>
.bg2 {
    background-color:#fffefe;
    background-repeat:no-repeat;
    background-size: 100%;
    background-attachment:fixed;
    background-position:center;
}

#newspic {
  margin-left: 60px;
  margin-right: 10px;
}

#news1 {
  word-break: normal;
}

#news2 {
  word-break: normal;
  margin-right: 0;
  align-content: right;
}

#topnav {
  background-color:#000;
}

#newscontent1 {
  width: 80%;
  display: block;
  word-break: normal;
  margin-left: 8%;
  margin-top: 2%;
}

#newscontent2 {
  width: 80%;
  display: block;
  word-break: normal;
  margin-left: 8%;
  margin-top: 2%;
}

#h3style {
  margin-left: 3%;
}

#commendinput {
  width: 70%;
  margin-left: 0%;
  padding-left: 1%;
  border-radius:0.6rem;
  font-size: 12px;
  text-align: vertical-align;
  font-family:PingFangSC-Regular;
  font-weight:400;
  background:rgba(248,248,248,1);
  box-shadow: none;
}
::placeholder {
  text-align: left;
  margin-left: 5%;
  font-size: 10%;
}
/* 
#comment_content {
  background: linear-gradient(to left, #FF3C31, #1961FB);
} */
</style>
