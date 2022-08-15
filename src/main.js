(() => {
    let g = new Graphic(document.getElementById("graphic"),
                              {w: 700, h: 400},
                              {w: 40, h: 40});

    g.grid({x: "#FAA", y: "#AAF"}, {x: "#CCC", y: "#CCC"}, 2, 1);
    
    g.math3(-10, 10, 0.01, "#0FF", 1, function(z)
    {
        let result = {x: Math.tan(z), y: Math.tan(z * z) / 10};
        return result;
    });

    // g.math2(-8.5, 8.5, 0.01, "#0F0", 1, (x) => Math.cos(x / Math.sin(x)));
})();