<template>
    <div class="modal-bg" v-show="show">
        <div class='content'>
            <h1>VOTE!!!</h1>
            <p>Please cast your precious vote.</p>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1">1</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">2</label>
            </div>
            <button @click="submit">确认</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vote',
    props: {
        show: {
            type: Boolean,
            default: false
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
    top: 50%;
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