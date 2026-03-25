export function calcPolygonVertices(
  cx: number,
  cy: number,
  r: number,
  n: number,
  knownVertex: { x: number; y: number },
) {
  const vertices: { x: number; y: number }[] = [];
  const theta = (2 * Math.PI) / n;
  const angle0 = Math.atan2(knownVertex.y - cy, knownVertex.x - cx);

  for (let i = 0; i < n; i++) {
    const angle = angle0 + i * theta;
    vertices.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
  }

  return vertices;
}

export function calcPointpath(
  values: number[],
  valuesMax: number[],
  n: number,
  r: number,
  cpXY: { cpX: number; cpY: number },
) {
  const { cpX, cpY } = cpXY;
  const valuesPoints = values.map((v, idx) => {
    const max = valuesMax[idx] || 1;
    const valuesVertices = calcPolygonVertices(cpX, cpY, (v / max) * r, n, {
      x: cpX,
      y: (1 - v / max) * r,
    });
    return valuesVertices[idx];
  });
  const valuesPath = valuesPoints.reduce((pre, cur, idx) => {
    if (idx === 0) {
      return `${pre}M${cur.x} ${cur.y}`;
    }
    if (idx === valuesPoints.length - 1) {
      return `${pre}L${cur.x} ${cur.y}Z`;
    }
    return `${pre}L${cur.x} ${cur.y}`;
  }, '');

  return { valuesPoints, valuesPath };
}

export function getTranslate(
  index: number,
  n: number,
  gap: number,
): {
  align: 'start' | 'middle' | 'end';
  baseline: 'auto' | 'middle' | 'hanging';
  translateX: number;
  translateY: number;
} {
  if (index === 0) {
    return { align: 'middle', baseline: 'auto', translateX: 0, translateY: -gap };
  }
  if (0 < index && index < n / 4) {
    return { align: 'start', baseline: 'auto', translateX: gap, translateY: 0 };
  }
  if (index === n / 4) {
    return { align: 'start', baseline: 'middle', translateX: gap, translateY: 0 };
  }
  if (n / 4 < index && index < n / 2) {
    return { align: 'start', baseline: 'hanging', translateX: gap, translateY: 0 };
  }
  if (index === n / 2) {
    return { align: 'middle', baseline: 'hanging', translateX: 0, translateY: gap };
  }
  if (n / 2 < index && index < (3 / 4) * n) {
    return { align: 'end', baseline: 'hanging', translateX: -gap, translateY: 0 };
  }
  if (index === (3 / 4) * n) {
    return { align: 'end', baseline: 'middle', translateX: -gap, translateY: 0 };
  }
  return { align: 'end', baseline: 'auto', translateX: -gap, translateY: 0 };
}
