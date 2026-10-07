(function () {
  var T = [
    { id: 'royal', name: 'Royal blue', brand: '#1F3A93', accent: '#2952CC', dark: '#1F3FA3', soft: '#E8EDFB', tint: '#F5F7FE' },
    { id: 'ocean', name: 'Ocean blue', brand: '#00508C', accent: '#0067B1', dark: '#00528D', soft: '#E3F0FA', tint: '#F3F8FD' },
    { id: 'petrol', name: 'Petrol teal', brand: '#00505A', accent: '#00747F', dark: '#005A63', soft: '#E0F2F3', tint: '#F2F9FA' },
    { id: 'emerald', name: 'Emerald', brand: '#0B5338', accent: '#0F7A4E', dark: '#0B5E3C', soft: '#E3F3EB', tint: '#F3FAF6' },
    { id: 'crimson', name: 'Academic crimson', brand: '#7A1A1A', accent: '#A6192E', dark: '#861425', soft: '#F8E6E8', tint: '#FDF5F6' },
    { id: 'burgnavy', name: 'Burgundy and blue', brand: '#5B1A2E', accent: '#1D5DA8', dark: '#174C8A', soft: '#E8F0FA', tint: '#F5F8FC' },
    { id: 'indigo', name: 'Indigo violet', brand: '#33257A', accent: '#5338C9', dark: '#422CA3', soft: '#EEEAFB', tint: '#F8F6FE' },
    { id: 'slateorange', name: 'Slate and copper', brand: '#263238', accent: '#B4470F', dark: '#91390C', soft: '#FBEDE5', tint: '#FDF7F3' },
    { id: 'petrolgold', name: 'Midnight and gold', brand: '#12395C', accent: '#9A6400', dark: '#7C5000', soft: '#FBF1DA', tint: '#FDF9EF' },
    { id: 'blackred', name: 'Black and red', brand: '#151515', accent: '#C0262D', dark: '#9E1F25', soft: '#FBE8E9', tint: '#FEF6F6' },
    { id: 'navy', name: 'Institutional navy', brand: '#0F2B46', accent: '#1D5DA8', dark: '#174C8A', soft: '#E8F0FA', tint: '#F5F8FC' },
    { id: 'teal', name: 'Ink and teal', brand: '#0E2F33', accent: '#0B6B6B', dark: '#08524F', soft: '#E3F1F0', tint: '#F3F9F8' }
  ];
  var DEFAULT_THEME = 'slateorange'; // Slate and copper — keep in sync with the var() fallbacks in the .dc.html pages
  var DIM = { '--page': '#C4CCD4', '--page-2': '#BAC3CC', '--surface': '#D7DDE3', '--surface-2': '#C9D1D9', '--surface-3': '#CFD6DD', '--line': '#A9B3BD', '--line-soft': '#B9C2CB', '--line-strong': '#8C98A4', '--muted': '#3B4753' };
  function isDim() { try { return localStorage.getItem('ngiq-dim') === '1'; } catch (e) { return false; } }
  function byId(id) { return T.filter(function (x) { return x.id === id; })[0]; }
  function apply(id) {
    var t = byId(id) || byId(DEFAULT_THEME) || T[0];
    var s = document.documentElement.style, dim = isDim();
    s.setProperty('--brand', t.brand); s.setProperty('--accent', dim ? t.dark : t.accent); s.setProperty('--accent-dark', t.dark);
    s.setProperty('--accent-soft', dim ? '#C2CEE0' : t.soft); s.setProperty('--accent-tint', dim ? '#CDD6E2' : t.tint);
    Object.keys(DIM).forEach(function (k) { if (dim) s.setProperty(k, DIM[k]); else s.removeProperty(k); });
    return t.id;
  }
  var cur = DEFAULT_THEME;
  try { cur = localStorage.getItem('ngiq-theme') || DEFAULT_THEME; } catch (e) {}
  window.NGIQ_THEMES = { list: T, current: apply(cur), set: function (id) { try { localStorage.setItem('ngiq-theme', id); } catch (e) {} this.current = apply(id); },
    dim: isDim, setDim: function (on) { try { localStorage.setItem('ngiq-dim', on ? '1' : '0'); } catch (e) {} apply(this.current); } };
})();
