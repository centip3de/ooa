export default class Textbox
{
    constructor(args)
    {
        /* Defaults */
        this.x          = 10;
        this.y          = 95;
        this.width      = 140;
        this.height     = 40;
        this.text       = "Foo";
        this.textColor  = "#917518"
        this.bgColor    = "#000000"
        this.font       = "15px Zelda";

        /* Parse args */
        for(var key in args)
        {
            switch(key)
            {
                case "x":
                    this.x = args[key];
                    break;
                case "y":
                    this.y = args[key];
                    break;
                case "width":
                    this.width = args[key];
                    break;
                case "height":
                    this.height = args[key];
                    break;
                case "text":
                    this.text = args[key];
                    break;
                case "textColor":
                    this.textColor = args[key];
                    break;
                case "bgColor":
                    this.bgColor = args[key];
                    break;
                case "font":
                    this.font = args[key];
                    break;
                default:
                    break;
            }
        }

        this.text = this.text.split("\n");
        this.textIndex = 0;
    }

    update(world)
    {
        if(world.keys.DOWN)
        {
            this.textIndex++;
        }
    }

    draw(ctx)
    {
        /* Only draw if we need to. */
        if(this.textIndex <= this.text.length)
        {

            /* Draw the black box */
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.bgColor;
            ctx.fill();

            /* Draw the text */
            ctx.font = this.font;
            ctx.fillStyle = this.textColor;
            ctx.fillText(this.text[this.textIndex], 20, 110);
        }
    }
}
