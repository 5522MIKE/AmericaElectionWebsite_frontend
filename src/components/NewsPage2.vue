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
                <router-link to="/" replace="/NewsPage2">
                <a class="nav-link" style='color:#000'> Election</a>
                </router-link>
            </b>
          </li>
          <li class="nav-item">
                <b>
                  <router-link to="/NewsPage" replace="/NewsPage2">
                  <a class="nav-link" style='color:#000'> US</a>
                  </router-link>
                </b>  
          </li>
          <li class="nav-item">
              <b>
                <router-link to="/NewsPage2" replace="/NewsPage2">
                <a class="nav-link" style='color:#000'> Politics</a>
                </router-link>
            </b>
          </li>
          <li class="nav-item">
              <b>
                <router-link to="/NotFind" replace="/NewsPage2">
                <a class="nav-link" style='color:#000'> Health</a>
                </router-link>
              </b>
          </li>
          <li class="nav-item">
              <b>
                <router-link to="/NotFind" replace="/NewsPage2">
                <a class="nav-link" style='color:#000'> Opinion</a>
                </router-link>
              </b> 
          </li>
          <li class="nav-item">
              <b>
                <router-link to="/Comment" replace="/NewsPage2">
                <a href="#" class="nav-link" style='color:#000'> Comments</a>
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
                  <h5><b>Trump remains silent as massive cyber hack poses 'grave risk' to government</b></h5>
                </div>
                <div class="mr-0 mb-lg-3" id="newspic1">
                    <img src="../assets/news3.jpg"/>
                </div>
                <div class="text-justify mr-lg-2" id="newscontent1">
                  <h6>
                    Two facing kidnapping charges in the case of toddler abandoned at Goodwill store
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  The US government has executed 10 people this year -- the most since 1896
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  White House security official struggling with Covid
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  First lady breaks children's hospital rules
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  Judge: Trump Organization must turn over papers
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify mr-lg-2">
                  <h6>
                  Sensitive skin and kids: 5 common irritants
                  </h6>
                </div>
                <hr/>
            </div>
            <div class="col-lg-4 col-md-12 p-0 mt-1 ml-lg-3 mr-lg-3 ml-md-3" id="news2">
                <div class="mb-1 mr-3 text-justify">
                  <h5><b>Pete Buttigieg: 'The eyes of history are on this appointment'</b></h5>
                </div>
                <div class="mb-3 ml-0" id="newspic2">
                    <img src="../assets/news4.jpg"/>
                </div>
                <div class="text-justify mr-lg-3" id="newscontent2">
                  <h6>
                    (CNN)Former South Bend, Indiana, Mayor Pete Buttigieg on Wednesday spoke to the historic nature of being named President-elect Joe Biden
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify">
                  <h6>
                    America's top general meets with Taliban, calls for a reduction in violence
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify">
                  <h6>
                    Automatic braking is now on most new cars. But not GM or Fiat Chrysler vehicles
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify">
                  <h6>
                  5 things to know for December 18: Covid-19, cyberattack, economy, Nigeria, Taliban
                  </h6>
                </div>
                <hr/>
                <div class="mr-0 text-justify">
                  <h6>
                  Putting 'politics in front of lives': DeSantis faces criticism over Florida's Covid-19 response
                  </h6>
                </div>
                <hr/>
            </div>
            <!-- 第三栏文字 -->
            <div class="col-lg-3 col-md-12 p-0 mt-1 ml-md-3" id="news3">
              <div class="mr-0 mb-1 ml-lg-2 text-justify">
                <h5><b>Coca-Cola is cutting 2,200 jobs</b></h5>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>
                CDC warns of a 'substantial increase' in fatal drug overdoses coinciding with the Covid-19 pandemic
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
                Here's why McDonald's restaurants are putting cameras in their dumpsters
                </h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h5><b>A sad list of all the tech we barely touched in 2020</b></h5>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>Eight nuns died of Covid-19 at a Wisconsin facility within a week</h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>Ex-adviser: Pence was upset over coronavirus op-ed backlash</h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>Americans have converted to mask culture, survey finds</h6>
              </div>
              <hr/>
              <div class="mr-0 text-justify">
                <h6>House conservative pushes back on 'surrender caucus' after McConnell move</h6>
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
