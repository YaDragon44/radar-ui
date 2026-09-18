(()=>{"use strict";
const esc=v=>String(v??'—').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const val=(v,s='—')=>v===null||v===undefined||v===''?s:esc(v);
const n=v=>Number.isFinite(Number(v))?new Intl.NumberFormat('ru-RU',{maximumFractionDigits:2}).format(Number(v)):'—';
const quality=q=>`<span class="mv-quality ${q==='LIVE'?'live':''}">${val(q,'N/A')}</span>`;
function renderMarket(){
 const list=document.getElementById('today-list'),empty=document.getElementById('empty-state'); if(!list)return;
 const m=window.RADAR_MARKET;
 list.classList.remove('has-portfolio');
 if(!m||m.type!=='MARKET_STATE'||!['LIVE','DELAYED'].includes(m.quality)||!m.data){
   list.innerHTML='<section class="market-view market-unavailable"><div><p class="eyebrow">MARKET</p><h2>Контекст рынка</h2><p>Подтверждённый MARKET_STATE пока недоступен. RADAR не подставляет ручные значения.</p></div><b>N/A</b></section>'; if(empty)empty.hidden=true; return;
 }
 const d=m.data,c=d.crash||{},w=d.warning||{},g=w.exit_gate||{},b=d.health?.breadth||null,dir=d.direction||{},ctx=d.context||{},hist=Array.isArray(d.history)?d.history:[];
 const breadth=b?`<dl><div><dt>Выше MA20</dt><dd>${n(b.above_ma20_pct)}%</dd></div><div><dt>Выше MA50</dt><dd>${n(b.above_ma50_pct)}%</dd></div><div><dt>A/D</dt><dd>${n(b.advance_decline_ratio)}</dd></div><div><dt>Дивергенция</dt><dd>${val(b.divergence,'N/A')}</dd></div></dl>`:'<p class="mv-na">N/A · источник не подтвердил Breadth</p>';
 const contextCard=(title,x)=>`<div><span>${title}</span><strong>${x&&x.quality&&x.quality!=='N/A'&&x.score!=null?n(x.score):'N/A'}</strong><small>${val(x?.quality,'N/A')}</small></div>`;
 const bars=hist.slice(-12).map(x=>`<i title="${esc(x.day)} · ${n(x.score)}" style="height:${Math.max(4,Math.min(100,Number(x.score)||0))}%"></i>`).join('');
 list.innerHTML=`<section class="market-view"><header class="mv-head"><div><p class="eyebrow">MARKET / RUSSIA</p><h2>Контекст рынка</h2><p>Состояние риска из moex-crash-radar · без пересчёта аналитики в RADAR</p></div><div>${quality(m.quality)}<time>${m.published_at?new Date(m.published_at).toLocaleString('ru-RU'):'—'}</time></div></header>
 <div class="mv-grid mv-state"><article><span>IMOEX</span><strong>${n(d.imoex)}</strong><small>${val(m.source?.secid,'IMOEX')}</small></article><article><span>Crash Score</span><strong>${n(c.score)}</strong><small>0–100</small></article><article><span>Crash State</span><strong>${val(c.state)}</strong><small>${quality(m.quality)}</small></article><article><span>EXIT Stage</span><strong>${val(g.stage)}</strong><small>${g.cash_confirmed===true?'CASH CONFIRMED':'Source defensive state'}</small></article></div>
 <div class="mv-grid mv-body"><article class="mv-panel"><h3>Warning</h3><dl><div><dt>Confirmations</dt><dd>${val(c.critical_confirmations)}</dd></div><div><dt>Crash Momentum</dt><dd>${w.crash_momentum==null?'N/A':n(w.crash_momentum)}</dd></div><div><dt>Cash confirmed</dt><dd>${g.cash_confirmed===true?'YES':'NO'}</dd></div></dl></article><article class="mv-panel"><h3>Health / Breadth</h3>${breadth}</article><article class="mv-panel"><h3>Direction</h3><div class="mv-direction"><strong>${val(dir.value,'N/A')}</strong><small>${val(dir.quality,'N/A')} · только подтверждённый source output</small></div></article><article class="mv-panel"><h3>Context</h3><div class="mv-context">${contextCard('Rate / OFZ',ctx.rate_ofz)}${contextCard('Oil / RUB',ctx.oil_rub)}</div></article></div>
 <article class="mv-panel mv-history"><header><h3>Crash Score history</h3><span>${hist.length} snapshots</span></header><div class="mv-bars">${bars||'<span>N/A</span>'}</div></article>
 <footer class="mv-foot"><span>Source: ${val(m.source?.owner)} · ${val(m.source?.ref)}</span><span>Provider: ${val(m.source?.provider)}</span><span>Updated: ${val(m.published_at)}</span><span>Quality: ${val(m.quality)}</span></footer></section>`;
 if(empty)empty.hidden=true;
}
function bind(){document.querySelectorAll('.view-tab[data-view="MARKET"]').forEach(b=>b.addEventListener('click',()=>setTimeout(renderMarket,0)));}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();
})();
