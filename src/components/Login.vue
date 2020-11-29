<template>
    <div class="container">
        <form class="form-signin">
        <h1 class="h3 mb-3 font-weight-normal">用户登录</h1>
        <input  id="inputEmail" class="form-control" placeholder="ID number" required autofocus>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox mb-3">
            <input type="checkbox" value="remember-me" id="remember"><label for="remember">Remember me</label>
        </div>
        <button class="btn btn-outline-success" type="submit">Sign in</button>
    </form>
    </div>
</template>

<style scoped>
button {
    width: 60%;
}
.container {
    position: absolute;
    /* position: relative; */
    top: 30%;
    left: 50%;
    width: 100%;
    max-width: 660px;
    padding: 0 30px;
    text-align: center;
    -webkit-transform: translate(-50%, 50vh);
    transform: translate(-50%, 50vh);
    opacity: 0;
    -webkit-animation: 0.75s 0.75s forwards slide_in;
    animation: 0.75s 0.75s forwards slide_in;
}
@-webkit-keyframes slide_in {
    100% {
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}
@keyframes slide_in {
    100% {
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}
</style>