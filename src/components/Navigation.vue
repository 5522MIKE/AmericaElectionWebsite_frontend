<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" replace="/">
                <a class="navbar-brand" href="#">2020 American Election</a>
            </router-link>
            <!-- 候选人按钮 -->
            <ul class="navbar-nav mr-auto">
                <div class="d-flex p-2 bd-highlight">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="btn btn-outline-info dropdown-toggle my-2 my-lg-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            candidates
                            </a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="/introduction">Trump</a>
                            <a class="dropdown-item" href="/introductionb">Biden</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/introductiono">Other</a>
                            </div>
                        </li>
                    </ul>
                    &nbsp;&nbsp;
                    <!-- 数据可视化 数据地图-->
                        <router-link to="/DataView2" replace="/">
                            <a class="btn btn-outline-danger my-2 my-lg-0 mr-sm-2">Election Map</a> 
                        </router-link>
                    <!-- 数据可视化 数据条形图-->
                        <router-link to="/DataView" replace="/">
                            <a class="btn btn-outline-danger my-2 my-lg-0 mr-sm-2">Election Results</a> 
                        </router-link>
                </div>
            </ul>

            <!-- 查询 -->
            <nav class="navbar navbar-light bg-light">
                <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        </nav>
    </div>
</template>

<style scoped>

</style>