import { chartTokens } from '../options/tokens';

function parseRgba(rgbaString: string) {
  const rgbaValues = rgbaString.match(/\d+(\.\d+)?/g);
  if (!rgbaValues || rgbaValues.length < 4) {
    return { rgb: 'rgb(0,0,0)', opacity: 1 };
  }
  const red = parseInt(rgbaValues[0], 10);
  const green = parseInt(rgbaValues[1], 10);
  const blue = parseInt(rgbaValues[2], 10);
  const alpha = parseFloat(rgbaValues[3]);
  return { rgb: `rgb(${red}, ${green}, ${blue})`, opacity: alpha };
}

function parseHexColor(hexColor: string) {
  const red = parseInt(hexColor.substring(1, 3), 16);
  const green = parseInt(hexColor.substring(3, 5), 16);
  const blue = parseInt(hexColor.substring(5, 7), 16);
  const alpha = parseInt(hexColor.substring(7, 9), 16) / 255;
  return { rgb: `rgb(${red}, ${green}, ${blue})`, opacity: alpha };
}

export function parseColor(color: string) {
  if (color.startsWith('rgba')) {
    return parseRgba(color);
  }
  if (color.startsWith('#') && color.length === 9) {
    return parseHexColor(color);
  }
  return { rgb: color, opacity: 1 };
}

export function getStroke(opts?: {
  show?: boolean;
  width?: number;
  color?: string;
  dash?: string;
}) {
  const width = opts?.width ?? chartTokens.stroke.width.emphasis;
  const color = opts?.color ?? chartTokens.color.text.secondary;
  const dash = opts?.dash ?? chartTokens.stroke.dash.emphasis;
  const { rgb, opacity } = parseColor(color);
  return {
    stroke: rgb,
    strokeOpacity: opacity,
    strokeDasharray: dash,
    strokeWidth: width,
  };
}
