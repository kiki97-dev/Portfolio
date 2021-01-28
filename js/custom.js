$(document).ready(function () {

    var $grid;
    var wrap = $("#wrap");
    var article = $("#wrap .box article");
    var lodingbar = $(".loding_bar");

    lodingbar.animate({ width: "200px" }, 1000)

    setTimeout(function () {
        lodingbar.addClass("on");

        setTimeout(function () {
            wrap.css({ margin: "-100px auto 0px" });
            setTimeout(function () {
                wrap.css({ width: "100px", height: "100px" });
                article.eq(0).css({ transform: "rotateY(0deg) translateZ(50px)" })
                article.eq(1).css({ transform: "rotateY(90deg) translateZ(50px)" })
                article.eq(2).css({ transform: "rotateY(180deg) translateZ(50px)" })
                article.eq(3).css({ transform: "rotateY(270deg) translateZ(50px)" })
                article.eq(4).css({ transform: "rotateY(90deg) translateZ(50px)" })
                article.eq(5).css({ transform: "rotateY(-90deg) translateZ(50px)" })
                setTimeout(function () {
                    $("#wrap").css({ width: "300px", height: "300px" });
                    article.css({ opacity: 0 });
                    article.eq(0).css({ transform: "rotateY(0deg) translateZ(1000px)" })
                    article.eq(1).css({ transform: "rotateY(90deg) translateZ(1000px)" })
                    article.eq(2).css({ transform: "rotateY(180deg) translateZ(1000px)" })
                    article.eq(3).css({ transform: "rotateY(270deg) translateZ(1000px)" })
                    article.eq(4).css({ transform: "rotateY(90deg) translateZ(1000px)" })
                    article.eq(5).css({ transform: "rotateY(-90deg) translateZ(1000px)" })
                }, 500)
            }, 1000)
        }, 500)
    }, 2000);


    setTimeout(function () {
        $grid = $(".wrap").isotope({//모션을 적용할 박스의 부모 선택자명
            itemSelector: "section .wrap article",//모션을 적용할 박스 선태자명
            columnWidth: "section .wrap article",//넓이값을 구할 박스 선택자명
            transitionDuration: "0.8s",//모션 이동 속도
            percentPosition: true//넓이값이 퍼센트: true, 고정픽셀값이면 false
        });

        $("section").addClass("on");
        $("body").css({ overflow: "auto" });
        $(".loding").fadeOut(1000);

    }, 4500);


    $("#gnb li a").on("click", function (e) {
        e.preventDefault();
        var sort = $(this).attr("href");

        $grid.isotope({
            filter: sort
        });

        $("#gnb li a").removeClass("on");
        $(this).addClass("on")

    });

});
