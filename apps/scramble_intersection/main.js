window.onload = ()=>{
    ctx=document.body.querySelector("canvas").getContext("2d");
    console.log(ctx);
    console.log(ctx.canvas.toDataURL());
};
