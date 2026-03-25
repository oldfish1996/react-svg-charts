function isNumber(x: unknown, y: unknown) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return false;
  }
  if (Number.isNaN(x) || Number.isNaN(y)) {
    return false;
  }
  return true;
}

export function buildPath(points: number[], start: number, smooth: number) {
  let segPath = '';
  const len = points.length / 2;
  const dir = 1;
  let prevX = 0;
  let prevY = 0;
  let cpx0 = 0;
  let cpy0 = 0;
  let cpx1 = 0;
  let cpy1 = 0;
  let idx = start;
  let k = 0;

  for (; k < len; k++) {
    let x = points[idx * 2];
    let y = points[idx * 2 + 1];
    if (idx >= len || !isNumber(x, y)) {
      break;
    }

    if (idx === start) {
      segPath += `M${x.toFixed(4)} ${y.toFixed(4)}`;
      cpx0 = x;
      cpy0 = y;
    } else {
      let dx = x - prevX;
      let dy = y - prevY;
      if (dx * dx + dy * dy < 0.5) {
        idx += dir;
        continue;
      }
      if (smooth > 0) {
        let nextIdx = idx + dir;
        let nextX = points[nextIdx * 2];
        let nextY = points[nextIdx * 2 + 1];
        while (nextX === x && nextY === y && k < len) {
          k++;
          nextIdx += dir;
          idx += dir;
          nextX = points[nextIdx * 2];
          nextY = points[nextIdx * 2 + 1];
          x = points[idx * 2];
          y = points[idx * 2 + 1];
          dx = x - prevX;
          dy = y - prevY;
        }
        const tmpK = k + 1;

        let ratioNextSeg = 0.5;
        let vx = 0;
        let vy = 0;
        let nextCpx0 = 0;
        let nextCpy0 = 0;
        if (tmpK >= len || !isNumber(nextX, nextY)) {
          cpx1 = x;
          cpy1 = y;
        } else {
          vx = nextX - prevX;
          vy = nextY - prevY;
          const dx0 = x - prevX;
          const dx1 = nextX - x;
          const dy0 = y - prevY;
          const dy1 = nextY - y;

          const lenPrevSeg = Math.sqrt(dx0 * dx0 + dy0 * dy0);
          const lenNextSeg = Math.sqrt(dx1 * dx1 + dy1 * dy1);
          ratioNextSeg = lenNextSeg / (lenNextSeg + lenPrevSeg);
          cpx1 = x - vx * smooth * (1 - ratioNextSeg);
          cpy1 = y - vy * smooth * (1 - ratioNextSeg);
          nextCpx0 = x + vx * smooth * ratioNextSeg;
          nextCpy0 = y + vy * smooth * ratioNextSeg;
          nextCpx0 = Math.min(nextCpx0, Math.max(nextX, x));
          nextCpy0 = Math.min(nextCpy0, Math.max(nextY, y));
          nextCpx0 = Math.max(nextCpx0, Math.min(nextX, x));
          nextCpy0 = Math.max(nextCpy0, Math.min(nextY, y));
          vx = nextCpx0 - x;
          vy = nextCpy0 - y;
          cpx1 = x - (vx * lenPrevSeg) / lenNextSeg;
          cpy1 = y - (vy * lenPrevSeg) / lenNextSeg;
          cpx1 = Math.min(cpx1, Math.max(prevX, x));
          cpy1 = Math.min(cpy1, Math.max(prevY, y));
          cpx1 = Math.max(cpx1, Math.min(prevX, x));
          cpy1 = Math.max(cpy1, Math.min(prevY, y));
          vx = x - cpx1;
          vy = y - cpy1;
          nextCpx0 = x + (vx * lenNextSeg) / lenPrevSeg;
          nextCpy0 = y + (vy * lenNextSeg) / lenPrevSeg;
        }
        segPath += `C${cpx0.toFixed(4)} ${cpy0.toFixed(4)} ${cpx1.toFixed(
          4,
        )} ${cpy1.toFixed(4)} ${x.toFixed(4)} ${y.toFixed(4)}`;
        cpx0 = nextCpx0;
        cpy0 = nextCpy0;
      } else {
        segPath += `L${x.toFixed(4)} ${y.toFixed(4)}`;
      }
    }
    prevX = x;
    prevY = y;
    idx += dir;
  }
  return { segPath, k };
}
