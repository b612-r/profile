const enterBtn = document.getElementById("enter-btn");

enterBtn.addEventListener("click", function(event){

    // すぐ移動しない
    event.preventDefault();

    // bodyを暗転
    document.body.classList.add("fade-out");

    // 0.4秒待つ
    setTimeout(function(){

        window.location.href = enterBtn.href;

    },400);

});