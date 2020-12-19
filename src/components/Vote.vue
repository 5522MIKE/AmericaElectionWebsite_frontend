<template>
    <div class='content' v-show="show">
        <h1>VOTE!!!</h1>
        <p>Please cast your precious vote.</p>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">Trump</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">Biden</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio3">Kanye</label>
        </div>
        <div>
            <button class="btn btn-outline-success my-2 my-sm-0"  @click="submit">确认</button>
        </div>
    </div>

</template>

<script>
export default {
    name: 'vote',
    props: {
        show: {
            type: Boolean,
            default: true
        },
    },
    methods: {
        submit() {
            this.$emit('submit')
        },
    }
}
</script>


<style scoped>
button{
    width: 50%;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}
a {
    text-decoration: none;
}
img {
    max-width: 100%;
    vertical-align: middle;
}
h1 {
    font-size: 45px;
    line-height: 45px;
    letter-spacing: 15px;
    text-transform: uppercase;
}
h1:after {
    content: "";
    display: block;
    width: 120px;
    height: 4px;
    margin: 28px auto -2px;
    background-color: currentcolor;
}
h1,
p {
    margin: 30px 0;
}
.content {
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
    .content {
        top: 58%;
    }
}
</style>