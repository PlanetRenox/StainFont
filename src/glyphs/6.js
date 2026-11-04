// t=1 rotates 180° about the glyph box, so 9 reuses this outline
export const six=(p,w,t)=>{
  const c=(...a)=>a.map((v,i)=>t?(i%2?700-v:w-v):v);
  p.moveTo(...c(430,690)).curveTo(...c(390,710,345,715,300,715)).curveTo(...c(140,715,60,560,60,330))
   .curveTo(...c(60,110,150,-15,275,-15)).curveTo(...c(405,-15,485,85,485,225)).curveTo(...c(485,365,400,460,280,460))
   .curveTo(...c(215,460,170,435,145,400)).curveTo(...c(160,560,210,635,305,635)).curveTo(...c(340,635,370,630,395,620)).close()
   .moveTo(...c(275,65)).curveTo(...c(195,65,145,130,145,222)).curveTo(...c(145,320,200,380,278,380))
   .curveTo(...c(350,380,400,315,400,222)).curveTo(...c(400,135,355,65,275,65)).close(); return p;
};
export const glyph6=(o,w)=>new o.Glyph({name:"six",unicode:54,advanceWidth:w,path:six(new o.Path(),w)});
