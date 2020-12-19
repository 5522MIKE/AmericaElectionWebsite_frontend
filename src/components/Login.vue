<template>
    <div class="container" v-show="login_show">
            <h1 class="h3 mb-3 font-weight-normal">Please enter your ID before voting</h1>
            <input  id="inputEmail" class="form-control" placeholder="ID number" required autofocus>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <button class="btn btn-outline-success my-2 my-sm-0" @click="signIn">Sign in</button>
    </div>
</template>

<script>
export default {
    name: 'login',
    props: {
        login_show: {
            type: Boolean,
            default: true
        },
    },
    methods: {
        signIn() {
            this.$emit('submit')
        },
    }
}
</script>

<style scoped>
button {
    width: 60%;
}
.container {
    background: linear-gradient(to left, #ebd0d0, #becddf);
    position: absolute;
    /* position: relative; */
    top: 30%;
    left: 50%;
    width: 100%;
    max-width: 660px;
    z-index:10;
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
@media (max-width: 640px) {
    .container {
        top: 55%;
    }
}
</style>