(()=>{"use strict";
const esc=v=>String(v??"—").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const has=v=>v!==null&&v!==undefined&&v!=="";
const num=v=>Number.isFinite(Number(v))?new Intl.NumberFormat("ru-RU",{maximumFractionDigits:2}).format(Number(v)):"—";
const pct=v=>Number.isFinite(Number(v))?num(v)+"%":"N/A";
const status=(label,tone="na")=>'<span class="mv-status '+tone+'">'+esc(label)+'</span>';
const qTone=q=>q==="LIVE"?"good":q==="DELAYED"||q==="PARTIAL"?"warn":q==="ERROR"||q==="STALE"?"bad":"na";
const fmtDay=d=>{const x=new Date(d+"T00:00:00");return Number.isNaN(x)?esc(d):x.toLocaleDateString("ru-RU",{day:"2-digit",month:"short"})};
let selectedPeriod="3M";
function periodHistory(hist,key){
 if(key==="ALL")return hist;
 const days={ "1M":31,"3M":92,"6M":184 }[key], last=new Date(hist.at(-1)?.day+"T00:00:00");
 if(!days||Number.isNaN(last))return hist;
 const cutoff=new Date(last);cutoff.setDate(cutoff.getDate()-days);return hist.filter(x=>new Date(x.day+"T00:00:00")>=cutoff);
}
function chart(hist){
 if(!hist.length)return '<div class="mv-chart-wrap"><p class="mv-na">Нет подтверждённой истории.</p></div>';
 const values=hist.map(x=>Number(x.score)).filter(Number.isFinite),min=0,max=100,w=640,h=220;
 const points=hist.map((x,i)=>{const v=Number(x.score),px=hist.length===1?w/2:i*w/(hist.length-1),py=h-(Math.max(min,Math.min(max,v))/100*h);return px.toFixed(1)+","+py.toFixed(1)}).join(" ");
 const last=hist.at(-1),lv=Number(last.score),lx=w,ly=h-(Math.max(min,Math.min(max,lv))/100*h);
 return '<div class="mv-chart-wrap"><svg class="mv-chart" viewBox="0 0 '+w+" "+h+'" preserveAspectRatio="none" role="img" aria-label="История Crash Score"><polyline points="'+points+'"></polyline><circle cx="'+lx+'" cy="'+ly+'" r="5"></circle></svg></div><div class="mv-chart-axis"><span>'+fmtDay(hist[0].day)+"</span><span>"+fmtDay(last.day)+'</span></div><div class="mv-zones"><span><i></i>Normal / Caution</span><span><i class="warn"></i>High risk</span><span><i class="danger"></i>Crash</span></div>';
}
function episodes(hist){
 const flagged=hist.filter(x=>["HIGH_RISK","CRASH"].includes(x.state)); if(!flagged.length)return '<p class="mv-na">В доступной source history нет отмеченных high-risk / crash периодов.</p>';
 const groups=[];for(const x of flagged){const prev=groups.at(-1),gap=prev?(new Date(x.day)-new Date(prev.end))/86400000:Infinity;if(prev&&gap<=5){prev.end=x.day;prev.peak=Math.max(prev.peak,Number(x.score)||0);if(x.state==="CRASH")prev.crash=true}else groups.push({start:x.day,end:x.day,peak:Number(x.score)||0,crash:x.state==="CRASH"})}
 return '<div class="mv-timeline">'+groups.slice(-4).map(x=>'<div class="mv-episode '+(x.crash?"crash":"")+'"><i></i><span>'+fmtDay(x.start)+(x.end!==x.start?" — "+fmtDay(x.end):"")+'</span><strong>'+esc(x.crash?"CRASH":"HIGH RISK")+'</strong><small>Peak Crash Score '+num(x.peak)+'</small></div>').join("")+'</div>';
}
function insight(fact,hypothesis,discipline){return '<div class="mv-insights"><div><b>Факт</b><p>'+fact+'</p></div><div><b>Гипотеза</b><p>'+hypothesis+'</p></div><div><b>Режим наблюдения</b><p>'+discipline+'</p></div></div>'}
function renderMarket(){
 const list=document.getElementById("today-list"),empty=document.getElementById("empty-state");if(!list)return;
 const m=window.RADAR_MARKET;
 if(!m||m.type!=="MARKET_STATE"||!["LIVE","DELAYED"].includes(m.quality)||!m.data){
  list.innerHTML='<section class="market-view market-unavailable"><div><p class="eyebrow">MARKET</p><h2>Обзор рынка</h2><p>Подтверждённый MARKET_STATE недоступен. RADAR не подставляет ручные значения.</p></div><b>N/A</b></section>';if(empty)empty.hidden=true;return;
 }
 const d=m.data,c=d.crash||{},w=d.warning||{},gate=w.exit_gate||{},b=d.health?.breadth||{},sig=d.indicators||{},dist=d.distribution||{},pos=d.positioning||{},ctx=d.context||{},dir=d.direction||{},hist=Array.isArray(d.history)?d.history.filter(x=>has(x.day)&&Number.isFinite(Number(x.score))):[];
 const periodHist=periodHistory(hist,selectedPeriod),source=esc(m.source?.owner||"—"), published=m.published_at?new Date(m.published_at).toLocaleString("ru-RU"):"—";
 const regime=has(c.state)?c.state:"N/A", regimeTone=regime==="NORMAL"?"good":regime==="CAUTION"||regime==="DEFENSIVE"?"warn":regime==="HIGH_RISK"||regime==="CRASH"?"bad":"na";
 const indicators=[
  ["Breadth",pct(b.pct_above_ma20),"MA20 · MA50 "+pct(b.pct_above_ma50)+" · new 20D lows/highs "+pct(b.pct_new_20d_lows)+" / "+pct(b.pct_new_20d_highs)+" · A/D "+(has(b.advance_decline_ratio)?num(b.advance_decline_ratio):"N/A")+" · 5D "+pct(b.breadth_return_5d)+" · coverage "+(has(b.coverage)?pct(Number(b.coverage)*100):"N/A"),has(b.coverage)?"good":"na"],
  ["Market structure",sig.market_structure?.score==null?"N/A":num(sig.market_structure.score),sig.market_structure?.quality||"N/A",qTone(sig.market_structure?.quality)],
  ["Levels / Momentum",sig.levels_momentum?.score==null?"N/A":num(sig.levels_momentum.score),sig.levels_momentum?.quality||"N/A",qTone(sig.levels_momentum?.quality)],
  ["Volume / Distribution",dist.pct_distribution_5d==null?"N/A":pct(dist.pct_distribution_5d),"5D distribution · down/up volume "+(has(dist.mean_down_up_volume_ratio)?num(dist.mean_down_up_volume_ratio):"N/A"),has(dist.pct_distribution_5d)?"good":"na"],
  ["Volatility / Liquidity",sig.volatility_liquidity?.score==null?"N/A":num(sig.volatility_liquidity.score),sig.volatility_liquidity?.quality||"N/A",qTone(sig.volatility_liquidity?.quality)],
  ["Positioning",pos.quality||"N/A",(pos.source?pos.source+" · ":"")+(pos.note||"не подтверждено источником"),qTone(pos.quality)],
  ["Rates / OFZ",ctx.rate_ofz?.score==null?"N/A":num(ctx.rate_ofz.score),(ctx.rate_ofz?.quality||"N/A")+" · key "+(has(ctx.rate_ofz?.key_rate)?pct(ctx.rate_ofz.key_rate):"N/A")+" · long OFZ "+(has(ctx.rate_ofz?.median_long_ofz_yield)?pct(ctx.rate_ofz.median_long_ofz_yield):"N/A")+" · RGBI 5D/20D "+pct(ctx.rate_ofz?.rgbi_return_5d)+" / "+pct(ctx.rate_ofz?.rgbi_return_20d),qTone(ctx.rate_ofz?.quality)],
  ["Oil / RUB",ctx.oil_rub?.score==null?"N/A":num(ctx.oil_rub.score),(ctx.oil_rub?.quality||"N/A")+" · CNYRUB 5D/20D "+pct(ctx.oil_rub?.cnyrub_return_5d)+" / "+pct(ctx.oil_rub?.cnyrub_return_20d)+" · coverage "+(has(ctx.oil_rub?.component_coverage)?pct(Number(ctx.oil_rub.component_coverage)*100):"N/A")+" · "+(ctx.oil_rub?.note||"не подтверждено источником"),qTone(ctx.oil_rub?.quality)],
  ["Macro / News","N/A","не входит в MARKET_STATE","na"],
  ["Momentum",w.crash_momentum==null?"N/A":num(w.crash_momentum),"Crash Momentum · source","warn"],
  ["Exit Gate",gate.stage||"N/A","cash confirmed "+(has(gate.cash_confirmed)?String(gate.cash_confirmed):"N/A")+" · latest 5D "+pct(gate.latest_5d_return_pct)+" · last event "+(gate.last_event_day||"N/A"),has(gate.stage)?"warn":"na"]
 ];
 const controls=["1M","3M","6M","1Y","ALL"].map(x=>'<button data-period="'+x+'" '+(x==="1Y"?"disabled":"")+' class="'+(x===selectedPeriod?"is-active":"")+'">'+x+'</button>').join("");
 const validation='<dl class="mv-validation"><div><dt>Историческая валидация</dt><dd>N/A</dd></div><div><dt>False-event rate</dt><dd>N/A</dd></div><div><dt>Средняя длительность</dt><dd>N/A</dd></div><div><dt>Source snapshots</dt><dd>'+num(hist.length)+'</dd></div></dl><p class="mv-validation-note">Источник не передал калиброванные validation-метрики. Число snapshots — факт покрытия, не доказательство точности.</p>';
 const breadthText=has(b.coverage)?("Breadth: "+pct(b.pct_above_ma20)+" above MA20, "+pct(b.pct_new_20d_lows)+" new 20D lows; coverage "+pct(Number(b.coverage)*100)+"."):"Breadth не подтверждён источником.";
 const fact="Crash State: "+esc(regime)+", Crash Score "+num(c.score)+" / 100, critical confirmations "+(has(c.critical_confirmations)?num(c.critical_confirmations):"N/A")+". "+breadthText;
 const hypo="Ослабление breadth и отрицательная 5D-динамика могут требовать дальнейшего подтверждения; это не прогноз и не решение.";
 const discipline="Проверять свежесть и качество источника; не превращать "+esc(gate.stage||"N/A")+" в торговую команду. Направление RADAR: N/A.";
 list.innerHTML='<section class="market-view"><header class="mv-head"><div><p class="eyebrow">MARKET / RUSSIA</p><h2>Обзор рынка</h2><p>Слой состояния рынка. FACT, ANALYSIS и DECISION не смешиваются.</p></div><div class="mv-source">'+status(m.quality,qTone(m.quality))+'<small>Source: '+source+'</small><time>'+published+'</time></div></header>'
 +'<section class="mv-grid mv-state mv-kpis"><article><span>Market regime</span><strong>'+esc(regime)+'</strong><em>Source Crash State</em>'+status(m.quality,regimeTone)+'</article>'
 +'<article><span>Market risk</span><strong>'+num(c.score)+' <small>/ 100</small></strong><em>Crash Score · source output</em>'+status("не probability", "na")+'</article>'
 +'<article><span>Main market signal</span><strong>'+esc(dir.value||"N/A")+'</strong><em>'+(dir.value?"Direction · source":"Direction не подтверждён источником")+'</em>'+status(dir.quality||"N/A",qTone(dir.quality))+'</article>'
 +'<article><span>IMOEX</span><strong>'+num(d.imoex)+'</strong><em>Изменение / ряд: N/A в контракте</em>'+status(m.source?.secid||"IMOEX","good")+'</article></section>'
 +'<section class="mv-strip">'+indicators.map(x=>'<article class="mv-indicator"><span>'+x[0]+'</span><strong>'+x[1]+'</strong><small>'+esc(x[2])+'</small>'+status(x[3]==="good"?"available":x[2],x[3])+'</article>').join("")+'</section>'
 +'<section class="mv-analytics"><article class="mv-panel mv-chart-panel"><header><div><h3>Crash Score — динамика source history</h3><span>Текущая точка: '+num(c.score)+'</span></div><div class="mv-chart-controls">'+controls+'</div></header>'+chart(periodHist)+'</article>'
 +'<article class="mv-panel mv-validation-panel"><header><h3>Validation / historical context</h3><span>fail-closed</span></header>'+validation+'</article>'
 +'<article class="mv-panel mv-insight-panel"><header><h3>Выводы</h3><span>без RADAR action</span></header>'+insight(fact,hypo,discipline)+'</article></section>'
 +'<article class="mv-panel mv-history"><header><div><h3>Исторические source-эпизоды</h3><span>маркировка из доступной history, не validation</span></div><span>'+num(hist.length)+' snapshots</span></header>'+episodes(hist)+'</article>'
 +'<footer class="mv-foot"><span>Source: '+source+' · '+esc(m.source?.ref||"—")+'</span><span>Provider: '+esc(m.source?.provider||"—")+'</span><span>Updated: '+published+'</span><span>Quality: '+esc(m.quality)+'</span></footer></section>';
 list.querySelectorAll("[data-period]").forEach(btn=>btn.addEventListener("click",()=>{selectedPeriod=btn.dataset.period;renderMarket()}));
 if(empty)empty.hidden=true;
}
function bind(){
 document.querySelectorAll(".view-tab").forEach(b=>b.addEventListener("click",()=>{if(b.dataset.view==="MARKET")setTimeout(renderMarket,0)}));
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",bind);else bind();
})();