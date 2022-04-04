import { render } from "../lib.js";

let root = document.getElementById('content');

export function decorateCtx (ctx, next){
    ctx.render = (content) => render(content, root) 
    next();
}