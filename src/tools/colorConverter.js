// --bs-blue: #0d6efd;
//     --bs-indigo: #6610f2;
//     --bs-purple: #6f42c1;
//     --bs-pink: #d63384;
//     --bs-red: #dc3545;
//     --bs-orange: #fd7e14;
//     --bs-yellow: #ffc107;
//     --bs-green: #28a745;
//     --bs-teal: #20c997;
//     --bs-cyan: #17a2b8;
//     --bs-white: #fff;
//     --bs-gray: #6c757d;
//     --bs-gray-dark: #343a40;
//     --bs-primary: #0d6efd;
//     --bs-secondary: #6c757d;
//     --bs-success: #28a745;
//     --bs-info: #17a2b8;
//     --bs-warning: #ffc107;
//     --bs-danger: #dc3545;
//     --bs-light: #f8f9fa;
//     --bs-dark: #343a40;

export function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0, g = 0, b = 0;
  if (H.length === 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length === 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta === 0)
    h = 0;
  else if (cmax === r)
    h = ((g - b) / delta) % 6;
  else if (cmax === g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return [h, s, l]
}

export const darken = (hex, percent = 5) => {
  const [h, s, l] = hexToHSL(hex)
  return "hsl(" + h + "," + s + "%," + (l - percent) + "%)";
}