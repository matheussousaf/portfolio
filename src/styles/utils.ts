export function luminance(hex: string, luminosity: number) {
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex.replace(/(.)/g, "$1$1");
  }
  
  luminosity = luminosity || 0;
  var rgb = "#";
  var c;

  for (var i = 0; i < 3; ++i) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * luminosity), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}

export function calcFontSize(minFontSize: number, maxFontSize: number) {
  return `calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * ((100vw - 300px) / (1600 - 300)));`;
}
