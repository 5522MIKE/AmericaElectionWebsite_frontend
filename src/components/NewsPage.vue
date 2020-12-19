<template>
  <!-- 新闻界面顶部图片 -->
  <div class="bg2">
    <div class="newstitle">
      <img src="../assets/newstitle.jpg" class="w-100 h-100" />
    </div>
        <!-- 导航栏 -->
        <ul class="nav justify-content-around nav-justified" id="navid">
          <li class="nav-item">
            <b>
                <router-link to="/" replace="/NewsPage">
                <a class="nav-link" style='color:#000'> Election</a>
                </router-link>
            </b>
          </li>
          <li class="nav-item">
                <b>
                  <router-link to="/NewsPage" replace="/NewsPage">
                  <a class="nav-link" style='color:#000'> US</a>
                  </router-link>
                </b>  
          </li>
          <li class="nav-item">
              <b>
                <router-link to="/NewsPage2" replace="/NewsPage">
                <a class="nav-link" style='color:#000'> Politics</a>
                </router-link>
            </b>
          </li>
          <li class="nav-item">
              <b>
                <router-link to="/NotFind" replace="/NewsPage">
                <a class="nav-link" style='color:#000'> Health</a>
                </router-link>
              </b>
          </li>
          <li class="nav-item">
              <b>
                <router-link to="/NotFind" replace="/NewsPage">
                <a class="nav-link" style='color:#000'> Opinion</a>
                </router-link>
              </b> 
          </li>
          <li class="nav-item">
              <b>
                <router-link to="/Comment" replace="/NewsPage">
                <a class="nav-link" style='color:#000'> Comments</a>
                </router-link>
              </b>
          </li>
        </ul>
        <!-- 下拉按钮 -->
        <!-- 遇到了一点bug，这个按钮没法靠右对齐 -->
          <!-- <div class="dropdown float-right">
            <a class="dropdown-toggle w-100" style='color:#fff' data-toggle="dropdown"><b>Edition</b></a>
            <ul class="dropdown-menu">
                  <li> <a href="#" class="text-muted">U.S.</a></li>
                  <li> <a href="#" class="text-muted">International</a></li>
                  <li> <a href="#" class="text-muted">Arabic</a></li>
                  <li> <a href="#" class="text-muted">Espanol</a></li>
              </ul>
          </div> -->

      <!-- 新闻内容区域 -->
      <div class="content ml-4 mr-4">
        <div class="row f1_top mt-2 ml-lg-0 ml-md-3" id="content1">
          <!-- 第一行两个大标题 -->
            <div class="col-lg-4 col-md-12 p-0 mt-1 mr-3" id="news1">
                <div class="mr-0 mb-lg-1 text-justify">
                  <h5><b>Biden readies major stimulus push and flurry of executive actions in first 100 days</b></h5>
                </div>
                <div class="mr-0 mb-lg-3" id="newspic1">
                    <img src="../assets/news2.jpg"/>
                </div>
                <div class="text-justify mr-lg-2" id="newscontent1">
                  <h6>
                    (CNN)President-elect Joe Biden and his transition team are preparing for an early, all-out push to pass an ambitious new stimulus bill.
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  Officials slam DeSantis' leadership in crisis
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  Analysis: Is this Mike Pence's moment?
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  Tucker Carlson fans flames of vaccine skepticism
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  Keilar: Fox host mocked masks, then put one on at Trump rally
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  Hill leaders struggle to finalize deal amid looming shutdown threat
                  </h6>
                </div>
                <hr/>
            </div>
            <div class="col-lg-4 col-md-12 p-0 mt-1 ml-lg-3 mr-lg-3 ml-md-3" id="news2">
                <div class="mb-1 mr-3 text-justify">
                  <h5><b>GOP silence on Trump's false election claims recalls McCarthy era</b></h5>
                </div>
                <div class="mb-3 ml-0" id="newspic2">
                    <img src="../assets/TrumpNews.jpg"/>
                </div>
                <div class="text-justify mr-lg-3" id="newscontent2">
                  <h6>
                    (CNN)The silence of congressional Republican leaders as President Donald Trump's unfounded claims 
                    of election fraud grow wilder.
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify">
                  <h6>
                    US cybersecurity agency warns suspected Russian hacking campaign broader than previously believed
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify">
                  <h6>
                    Man who claimed to be missing boy Timmothy Pitzen gets two years in prison
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify">
                  <h6>
                  Opinion: When Black people are wary of vaccine, it's important to listen and understand why
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify">
                  <h6>
                  Deb Haaland makes history as Biden's pick to run Interior Department
                  </h6>
                </div>
                <hr/>
            </div>
            <!-- 第三栏文字 -->
            <div class="col-lg-3 col-md-12 p-0 mt-1 ml-md-3" id="news3">
              <div class="mr-0 mb-1 ml-lg-2 text-justify">
                <h5><b>GOP senator in critical race refuses to answer question 9 times</b></h5>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>
                Deb Haaland makes history as Biden's pick to run Interior Department
                </h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>
                Dominion threatens legal action against former Trump lawyer
                </h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>
                Analysis: This is the best map of the 2020 election you'll see
                </h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h5><b>How Kamala Harris is preparing for her historic vice presidency</b></h5>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>Pandemic demand for mental health care is overwhelming providers</h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>Ex-adviser: Pence was upset over coronavirus op-ed backlash</h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>Analysis: 3,500 Americans died in 1 day. Trump didn't mention it.</h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>Tucker Carlson fans flames of vaccine skepticism</h6>
              </div>
              <hr/>
            </div> 
        </div>
      </div>
      <div class="card-footer text-muted">
        © 2020-2021
      </div>

      <!-- 评论框 -->
      <!-- <div class="comment_content" id="comment_content">
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
      </div> -->
        
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

#news1 {
  margin-right: 0;
}

#news2 {
  margin-right: 0;
  align-content: right;
}

#navid :hover{
  background-color: #c2c2c2;
}

#navid {
  background-color: #e7e7e7;
}

#topnav {
  background-color:#000;
}

#newscontent1 {
  display: block;
  margin-top: 2%;
}

#newscontent2 {
  display: block;
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
