(()=>{"use strict";
const text=v=>String(v??"N/A");
const when=v=>v?new Date(v).toLocaleString("ru-RU"):"N/A";
const quality=v=>v||"UNKNOWN";
const sourceText=m=>[m?.source?.owner,m?.source?.ref].filter(Boolean).join(" · ")||"N/A";
function field(label,value,note){return '<div><span>'+label+'</span><strong>'+value+'</strong><small>'+note+'</small></div>'}
function card(kind,title,value,note,meta,details){
 const x=document.createElement("article");x.className="today-live-card";
 x.innerHTML='<header><span>'+kind+'</span><b>'+meta+'</b></header><h3>'+title+'</h3><p>'+note+'</p><section>'+details+'</section><footer>SUMMARY → DETAIL → EVIDENCE</footer>';
 return x;
}
function marketCard(m){
 if(!m||m.type!=="MARKET_STATE"||!["LIVE","DELAYED"].includes(m.quality)||!m.data){
  return card("MARKET / FACT","Рыночное состояние","N/A","Подтверждённый MARKET_STATE недоступен; RADAR не подставляет значения.","QUALITY: UNKNOWN",field("Доказательство","N/A","Нет доступного source artifact"));
 }
 const d=m.data,c=d.crash||{},g=d.warning?.exit_gate||{};
 return card("MARKET / EXISTING ANALYSIS","Рыночное состояние",text(c.state),"Существующий вывод MOEX Crash Radar. Это не торговая команда RADAR.","QUALITY: "+quality(m.quality),field("Crash Score",Number.isFinite(Number(c.score))?Number(c.score).toFixed(2)+" / 100":"N/A","Выход существующего источника")+field("Freshness",when(m.published_at),"Опубликовано source artifact")+field("Evidence",sourceText(m),"Вкладка «Радар» → полный drill-down")+field("Source gate",text(g.stage),"Source Action ≠ RADAR Action"));
}
function portfolioCard(p){
 const live=p?.quality==="LIVE", data=p?.portfolio||{}, positions=Array.isArray(data.positions)?data.positions:[];
 const title=p?.title||"Портфель";
 const action=p?.action||"NO_DECISION";
 const note=p?.why||"Подтверждённая запись отсутствует.";
 return card("PORTFOLIO / EXISTING DECISION",title,action,note,"QUALITY: "+quality(p?.quality),field("Состав",positions.length?positions.length+" позиций":"N/A","Подтверждённая source record")+field("Freshness",when(p?.published_at),"published_at источника")+field("Evidence",p?.source_ref||"N/A",p?.source_ref?"Источник записи":"Источник не передан")+field("Boundary",live?"HOLD без правила":"SOURCE MODEL / INFORMATION","Не новая рекомендация RADAR"));
}
function render(){
 const active=document.querySelector(".view-tab.is-active");if(!active||active.dataset.view!=="ALL")return;
 const list=document.getElementById("today-list"),empty=document.getElementById("empty-state"),count=document.getElementById("item-count"),critical=document.getElementById("critical-count"),updated=document.getElementById("updated-at");
 if(!list)return;
 const ps=Array.isArray(window.RADAR_PORTFOLIO)?window.RADAR_PORTFOLIO:[], zh=ps.find(x=>x.portfolio_id==="zhugan.public_portfolio"), alfa=ps.find(x=>x.portfolio_id==="alfa_capital.top10.2026-09-16");
 list.classList.remove("has-portfolio");list.replaceChildren(marketCard(window.RADAR_MARKET),portfolioCard(zh),portfolioCard(alfa));
 if(empty)empty.hidden=true;if(count)count.textContent="3";if(critical)critical.textContent="0";if(updated)updated.textContent=when(window.RADAR_MARKET?.published_at);
}
document.querySelectorAll(".view-tab").forEach(b=>b.addEventListener("click",()=>{if(b.dataset.view==="ALL")setTimeout(render,0)}));
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>setTimeout(render,0));else setTimeout(render,0);
})();
