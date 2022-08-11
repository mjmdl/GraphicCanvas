class Graphic
{
    constructor(canvas, size, cell)
    {
        this.canvas = canvas;
        this.canvas.width = size.w;
        this.canvas.height = size.h;

        this.ctx = canvas.getContext("2d");
        this.ctx.translate(size.w / 2, size.h / 2);
        this.ctx.scale(1, -1);

        this.cell = cell;
    }

    size()
    {
        return {w: this.canvas.width, h: this.canvas.height};
    }

    line(begin, end, style, width)
    {
        this.ctx.strokeStyle = style;
        this.ctx.lineWidth = width;

        this.ctx.beginPath();
        this.ctx.moveTo(begin.x * this.cell.w, begin.y * this.cell.h);
        this.ctx.lineTo(end.x * this.cell.w, end.y * this.cell.h);
        
        this.ctx.stroke();
    }

    dot(pos, style, width)
    {
        this.ctx.fillStyle = style;

        this.ctx.beginPath();
        this.ctx.arc(pos.x * this.cell.w, pos.y * this.cell.h, width, 0, Math.PI * 2, true);
        
        this.ctx.fill();
    }

    grid(axis_colors, guide_colors, axis_width, guide_width)
    {
        let top = this.size().h / 2;
        let right = this.size().w / 2;
        
        let columns = this.size().w / this.cell.w;
        let rows = this.size().h / this.cell.h;
        
        for (let x = 1; x < columns / 2; x++)
        {
            this.line({x, y: top}, {x, y: -top}, guide_colors.x, guide_width);
            this.line({x: -x, y: top}, {x: -x, y: -top}, guide_colors.x, guide_width);
        }

        for (let y = 1; y < rows / 2; y++)
        {
            this.line({x: -right, y}, {x: right, y}, guide_colors.y, guide_width);
            this.line({x: -right, y: -y}, {x: right, y: -y}, guide_colors.y, guide_width);
        }

        this.line({x: -right, y: 0}, {x: right, y: 0}, axis_colors.x, axis_width);
        this.line({x: 0, y: top}, {x: 0, y: -top}, axis_colors.y, axis_width);
    }

    math2(begin, end, inc, style, width, f)
    {
        for (let x = begin; x < end; x += inc)
        {
            this.dot({x, y: f(x)}, style, width);
        }
    }
}
