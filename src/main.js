(() => {
    let graphic = new Graphic(document.getElementById("graphic"),
                              {w: 700, h: 400},
                              {w: 40, h: 40});

    graphic.grid({x: "#FAA", y: "#AAF"}, {x: "#CCC", y: "#CCC"}, 2, 1);
    graphic.math2(-2, 2, 0.01, "#0F0", 1, (x) => 2 - x * x);
})();