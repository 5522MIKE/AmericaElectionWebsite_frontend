<template>
    <div class="middle" data-status="404">
		<div class="middle_content">
            <p class="desc">
                That page cannot be found!
            </p>
            <br><br>
            <a href="/" class="btn btn-info btn-lg active" role="button">HomePage</a>
        </div>
	</div>
</template>

<style scoped>
    .middle::before {
    color: #ebeef2;
    content: attr(data-status);
    display: block;
    font-size: 220px;
    font-weight: 700;
    left: 50%;
    line-height: .75;
    position: absolute;
    top: 45%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    
}
.middle_content {
    left: 50%;
    line-height: .75;
    position: absolute;
    top: 45%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
}
.desc {
    font-family: 'BatangChe';
    font-size: 45px;
    font-weight: 700;
    margin: 0;
}
</style>