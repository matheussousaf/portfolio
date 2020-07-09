export function luminance(hex: string, luminosity: number) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex.replace(/(.)/g, "$1$1");
  }
  luminosity = luminosity || 0;
  // Convert to decimal and change luminosityinosity
  var rgb = "#";
  var c;

  for (var i = 0; i < 3; ++i) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * luminosity), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}
