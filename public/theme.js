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
    { id: 'teal', name: 'Ink and teal', brand: '#0B1416', accent: '#0C8375', dark: '#0A685C', soft: '#CDF0E7', tint: '#EDFAF5', warm: '#C2410C' }
  ];
  var DARK = { '--page': '#121619', '--page-2': '#0E1114', '--surface': '#1A2024', '--surface-2': '#15191C', '--surface-3': '#171C20', '--line': '#2A3237', '--line-soft': '#232A2F', '--line-strong': '#3B454C', '--muted': '#9AA7B2', '--ink': '#E8EDF1', '--ink-2': '#D6DDE3', '--ink-3': '#B8C2CB' };
  function isDim() { try { return localStorage.getItem('ngiq-dim') === '1'; } catch (e) { return false; } }
  function apply(id) {
    var t = T.filter(function (x) { return x.id === id; })[0] || T[0];
    var s = document.documentElement.style, dim = isDim();
    if (dim) {
      s.setProperty('--brand', 'color-mix(in oklab, ' + t.accent + ' 26%, #1B2226)');
      s.setProperty('--accent', 'color-mix(in oklab, ' + t.accent + ' 65%, white)');
      s.setProperty('--accent-dark', 'color-mix(in oklab, ' + t.accent + ' 50%, white)');
      s.setProperty('--accent-soft', 'color-mix(in oklab, ' + t.accent + ' 24%, #15191C)');
      s.setProperty('--accent-tint', 'color-mix(in oklab, ' + t.accent + ' 10%, #121619)');
      s.setProperty('--warm', 'color-mix(in oklab, ' + (t.warm || '#B5400F') + ' 65%, white)');
    } else {
      s.setProperty('--brand', t.brand); s.setProperty('--accent', t.accent); s.setProperty('--accent-dark', t.dark);
      s.setProperty('--accent-soft', t.soft); s.setProperty('--accent-tint', t.tint);
      s.setProperty('--warm', t.warm || '#B5400F');
    }
    Object.keys(DARK).forEach(function (k) { if (dim) s.setProperty(k, DARK[k]); else s.removeProperty(k); });
    return t.id;
  }
  window.NGIQ_THEMES = { list: T, current: apply('teal'),
    dim: isDim, setDim: function (on) { try { localStorage.setItem('ngiq-dim', on ? '1' : '0'); } catch (e) {} apply(this.current); } };
})();
