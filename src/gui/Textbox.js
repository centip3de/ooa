export default class Textbox
{
    constructor(args)
    {
        /* Select either the defaults, or the passed in args. */
        this.x          = args.x || 10
        this.y          = args.y || 95;
        this.width      = args.width || 140; 
        this.height     = args.height || 40;
        this.text       = args.text || "Foo";
        this.textColor  = args.textColor || "#917518";
        this.bgColor    = args.bgColor || "#000000";
        this.font       = args.font || "15px Zelda";

        /* Break up the text into multiple parts, for scrollin' */
        this.text = this.text.split("\n");
        this.textIndex = 0;

        /* FIXME: At some point this shouldn't be like it is, but it do. */
        this.done       = false;
    }

    update(world)
    {
        if(world.keys.Z)
        {
            if(this.textIndex < this.text.length)
            {
                ++this.textIndex;
            }
            else
            {
                this.done = true;
            }
        }
    }

    draw(ctx)
    {
        /* Draw the black box */
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.bgColor;
        ctx.fill();

        /* Draw the text */
        ctx.font = this.font;
        ctx.fillStyle = this.textColor;

        var textLen = this.text[this.textIndex].length;

        if(textLen >= 14)
        {
            for(let i = 0; i < 14; i++)
            {
                /* Each character is like, 9 pixels wide or somethin'. So use that for the offset.*/
                ctx.fillText(this.text[this.textIndex].charAt(i), 20 + (i * 9), 110);
            }

            for(let i = 14; i < textLen; i++)
            {
                ctx.fillText(this.text[this.textIndex].charAt(i), 20 + ((i - 14) * 9), 125);
            }
        }
        else
        {
            for(let i = 0; i < textLen; i++)
            {
                ctx.fillText(this.text[this.textIndex].charAt(i), 20 + (i * 9), 110);
            }
        }
    }
}
