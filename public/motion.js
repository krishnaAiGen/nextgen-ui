(function () {
  var css = '@keyframes ngiqRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}' +
    '@keyframes ngiqDrop{from{opacity:0;transform:translateY(-6px) scale(.98)}to{opacity:1;transform:none}}' +
    '@keyframes ngiqSlideIn{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:none}}' +
    '@keyframes ngiqPop{0%{transform:scale(.3)}60%{transform:scale(1.25)}100%{transform:scale(1)}}' +
    '@keyframes ngiqZoom{from{opacity:0;transform:scale(.9)}to{opacity:1;transform:none}}' +
    '@keyframes ngiqPulse{0%,100%{box-shadow:0 0 0 0 rgba(165,42,42,.45)}50%{box-shadow:0 0 0 6px rgba(165,42,42,0)}}' +
    '@keyframes ngiqLineFill{0%{transform:scaleY(0)}3%,14%{transform:scaleY(0)}19.66%,30.66%{transform:scaleY(0.2)}36.32%,47.32%{transform:scaleY(0.4)}52.98%,63.98%{transform:scaleY(0.6)}69.64%,80.64%{transform:scaleY(0.8)}86.3%,97.3%{transform:scaleY(1)}96%{transform:scaleY(1)}100%{transform:scaleY(0)}}@keyframes ngiqStep0{0%,2.50%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}3%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,.45)}7%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}14%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}16%,96%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,0)}100%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}}@keyframes ngiqStep1{0%,19.16%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}19.66%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,.45)}23.66%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}30.66%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}32.66%,96%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,0)}100%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}}@keyframes ngiqStep2{0%,35.82%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}36.32%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,.45)}40.32%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}47.32%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}49.32%,96%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,0)}100%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}}@keyframes ngiqStep3{0%,52.48%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}52.98%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,.45)}56.98%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}63.98%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}65.98%,96%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,0)}100%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}}@keyframes ngiqStep4{0%,69.14%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}69.64%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,.45)}73.64%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}80.64%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}82.64%,96%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,0)}100%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}}@keyframes ngiqStep5{0%,85.80%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}86.3%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,.45)}90.3%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}97.3%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 7px rgba(30,107,58,.18)}99.3%,96%{background:#1E6B3A;border-color:#1E6B3A;color:#fff;box-shadow:0 0 0 0 rgba(30,107,58,0)}100%{background:var(--page,#fff);border-color:var(--brand,#263238);color:var(--brand,#263238);box-shadow:0 0 0 0 rgba(30,107,58,0)}}' +
    '@keyframes ngiqFadeA{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}' +
    '@keyframes ngiqFadeB{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}' +
    '@keyframes ngiqGrowA{from{transform:scaleY(0)}to{transform:scaleY(1)}}@keyframes ngiqGrowB{from{transform:scaleY(0)}to{transform:scaleY(1)}}' +
    '[data-rv]{opacity:0;transform:translateY(22px);transition:opacity .75s cubic-bezier(.2,.7,.2,1),transform .75s cubic-bezier(.2,.7,.2,1)}' +
    '[data-rv="in"]{opacity:1;transform:none}' +
    '@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}[data-rv]{opacity:1!important;transform:none!important}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  function countUp(el) {
    var txt = el.textContent.trim();
    if (!/^[\d,]+$/.test(txt)) return;
    var target = parseInt(txt.replace(/,/g, ''), 10), t0 = null, dur = 1400;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e).toLocaleString('en-GB');
      if (p < 1) requestAnimationFrame(step); else el.textContent = txt;
    }
    requestAnimationFrame(step);
  }
  var io = new IntersectionObserver(function (ents) {
    ents.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target; io.unobserve(el);
      if (el.hasAttribute('data-count')) countUp(el);
      else el.setAttribute('data-rv', 'in');
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function scan() {
    var vh = window.innerHeight;
    document.querySelectorAll('main section:not([data-rv]):not([data-norv]), [data-stagger] > *:not([data-rv])').forEach(function (el) {
      if (el.closest('[data-norv]')) return;
      var r = el.getBoundingClientRect();
      if (r.top < vh * 0.9 && r.bottom > 0) { el.setAttribute('data-rv', 'in'); return; }
      var par = el.parentElement;
      if (par && par.hasAttribute('data-stagger')) el.style.transitionDelay = (Array.prototype.indexOf.call(par.children, el) * 110) + 'ms';
      el.setAttribute('data-rv', ''); io.observe(el);
    });
    document.querySelectorAll('[data-count]:not([data-cseen])').forEach(function (el) { el.setAttribute('data-cseen', '1'); io.observe(el); });
  }
  var tmr; var mo = new MutationObserver(function () { clearTimeout(tmr); tmr = setTimeout(scan, 120); });
  function start() { setTimeout(scan, 300); mo.observe(document.body, { childList: true, subtree: true }); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
