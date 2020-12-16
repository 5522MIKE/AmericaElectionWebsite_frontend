<template>
    <div class="bg">
        <div class="newstitle">
            <img src="../assets/newstitle.jpg" class="w-100 h-100" />
        </div>
    
        <!-- 顶部部分 -->
        <div class="cell">
            <div class="navbar navbar-expand-md" id="topnav">
                <!-- 导航栏 -->
                <ul class="nav justify-content-around nav-justified">
                    <li class="nav-item text-center">
                        <b><a href="/" class="nav-link text-danger text-center"> Election</a></b>
                    </li>
                    <li class="nav-item">
                        <b><a href="/NewsPage" class="nav-link text-danger"> US</a></b>  
                    </li>
                    <li class="nav-item">
                        <b><a href="/NesPage2" class="nav-link text-danger"> Politics</a></b>
                    </li>
                    <li class="nav-item">
                        <b><a href="#" class="nav-link text-danger"> Health</a></b>
                    </li>
                    <li class="nav-item">
                        <b><a href="#" class="nav-link text-danger"> Opinion</a></b> 
                    </li>
                    <li class="nav-item">
                        <b><a href="#" class="nav-link text-danger"> Sports</a></b>
                    </li>
                </ul>
                <!-- 下拉按钮 -->
                <!-- 遇到了一点bug，这个按钮没法靠右对齐 -->
                <div class="dropdown float-right">
                    <button class="btn btn-danger dropdown-toggle w-100" data-toggle="dropdown"><b>Edition</b></button>
                    <ul class="dropdown-menu">
                        <li> <a href="#" class="text-muted">U.S.</a></li>
                        <li> <a href="#" class="text-muted">International</a></li>
                        <li> <a href="#" class="text-muted">Arabic</a></li>
                        <li> <a href="#" class="text-muted">Espanol</a></li>
                    </ul>
                </div>
            </div>
        </div>
            <!-- 新闻内容 -->
            <div class="content">
                <div class="row f1_top mt-2">
                <!-- 第一行两个大标题 -->
                    <div class="col-lg-6 col-md-12 p-3" id="news3">
                        <div class="mr-0 mb-1 ml-3">
                        <h3><b>Pompeo to meet Biden's secretary of state nominee this week</b></h3>
                        </div>
                        <div class="mr-0 mb-1" id="newspic1">
                            <img src="../assets/news4.jpg" class="w-80 h-60"/>
                        </div>
                        <div class="mr-0 mb-1" id="newscontent1">
                        <h5>
                                Washington (CNN)President-elect Joe Biden's pick for secretary of state is expected to visit the State Department 
                                and meet with Secretary of State Mike Pompeo on Thursday for the first time since Biden's victory, according to three sources familiar with the planning.
                                The meeting between Antony Blinken and Pompeo -- planned to occur days after the Electoral College cemented Biden's victory on Monday 
                                -- will mark the first formal recognition by President Donald Trump's top diplomat that he is preparing to hand over the reins of American foreign policy to his successor. <br><br>
                                The meeting is scheduled to last for only 15 minutes, but State Department officials view it as a positive step, one of the sources said.
                                The meeting will be one of the first high-level face-to-face meetings between a Biden team nominee and a member of Trump's Cabinet. 
                                In the immediate aftermath of the election, Pompeo refused to acknowledge Biden's victory and ignited a furor among diplomats by stating 
                                that "there will be a smooth transition to a second Trump administration."
                                But Pompeo has also said "we'll make this work" when speaking about the transition at the department, 
                                and last week CNN reported that he was willing to meet with members of Biden's team.
                        </h5>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 p-0 mt-3" id="news2">
                        <div class="mb-1 mr-3">
                        <h3><b>Trump's case of coronavirus changed the conversation</b></h3>
                        </div>
                        <div class="mb-1 ml-0" id="newspic2">
                            <img src="../assets/news3.jpg" class="w-160 h-100"/>
                        </div>
                        <div class="mr-0 mb-1" id="newscontent2">
                        <h5>
                                (CNN)Coronavirus remains the most prominent thing Americans have seen, read or heard about President Donald Trump, 
                                but the details and the tone of what they have heard about it have shifted following Trump's own case of the virus.
                                All told, roughly 40% of respondents mentioned something related to coronavirus, which has raged throughout the US 
                                for nearly eight months, when asked what they had heard about the President recently. That was a decline compared with last week, 
                                but about on par with the share of mentions the topic received in the week Trump received his diagnosis, and well above most prior weeks in the project.<br><br>
                                That finding comes from The Breakthrough, a survey from CNN, SSRS, the University of Michigan and Georgetown University 
                                tracking Americans' recall of news about each of the presidential candidates.The results show the net sentiment associated 
                                with news about Trump shifted this week, rising into positive territory for the first time since July.
                                That shift appears to be mostly due to changes in how people talk about coronavirus when it comes to Trump.
                                Since Trump's diagnosis, more people are using positive words to talk about Trump and coronavirus than did so before the news shifted to the President's health.
                        </h5>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<style scoped>
.bg {
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

#comment_content {
  background: linear-gradient(to left, #FF3C31, #1961FB);
}
</style>
