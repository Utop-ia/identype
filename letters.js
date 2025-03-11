let DIAGONAL = "diagonal";
let ARC = "arc";

function letter(x, y, w, h, s, mode = ARC, pezzi = []) {
  angleMode(DEGREES);

  let wq = w / 2;
  let hq = h / 2;

  strokeWeight(s);

  //

  push();
  translate(x, y);

  // NW
  quarter(0, 0, wq, hq, s, mode, pezzi, "nw_");

  // NE
  push();
  translate(w, 0);
  scale(-1, 1);
  quarter(0, 0, wq, hq, s, mode, pezzi, "ne_");
  pop();

  // SW
  push();
  translate(0, h);
  scale(1, -1);
  quarter(0, 0, wq, hq, s, mode, pezzi, "sw_");
  pop();

  // SE
  push();
  translate(w, h);
  scale(-1, -1);
  quarter(0, 0, wq, hq, s, mode, pezzi, "se_");
  pop();

  pop();

  //

  let xc = x + w / 2;
  let yc = y + h / 2;

  if (pezzi.includes("n_v")) {
    line(xc, y + s / 2, xc, yc);
  }
  if (pezzi.includes("s_v")) {
    line(xc, y + h - s / 2, xc, yc);
  }
  if (pezzi.includes("w_h")) {
    line(x + s / 2, yc, xc, yc);
  }
  if (pezzi.includes("e_h")) {
    line(x + w - s / 2, yc, xc, yc);
  }
}

function quarter(x, y, w, h, s, mode = ARC, pezzi = [], prefix = "") {
  let xl = x + s / 2;
  let xc = x + w;

  let yl = y + s / 2;
  let yc = y + h;

  if (pezzi.includes(prefix + "h")) {
    line(xl, yl, xc, yl);
  }

  if (pezzi.includes(prefix + "v")) {
    line(xl, yl, xl, yc);
  }

  push();
  translate(x, y);

  if (pezzi.includes(prefix + "a_nw")) {
    arco(0, 0, w, h, s, mode);
  }

  if (pezzi.includes(prefix + "a_ne")) {
    push();
    scale(-1, 1);
    translate(-w - s / 2, 0);
    arco(0, 0, w, h, s, mode);
    pop();
  }

  if (pezzi.includes(prefix + "a_sw")) {
    push();
    scale(1, -1);
    translate(0, -h - s / 2);
    arco(0, 0, w, h, s, mode);
    pop();
  }

  if (pezzi.includes(prefix + "a_se")) {
    push();
    scale(-1, -1);
    translate(-w - s / 2, -h - s / 2);
    arco(0, 0, w, h, s, mode);
    pop();
  }

  pop();
}

function arco(x, y, w, h, s, mode) {
  let r = min(w - s / 2, h - s / 2);

  let xl = x + s / 2;
  let xc = x + w;

  let yl = y + s / 2;
  let yc = y + h;

  let ax = xl + r;
  let ay = yl + r;

  if (mode == ARC) {
    arc(ax, ay, r * 2, r * 2, 180, 270);
  } else if (mode == DIAGONAL) {
    line(ax - r, ay, ax, ay - r);
  }

  if (w < h) {
    line(xl, yc, xl, ay);
  }
  if (w > h) {
    line(ax, yl, xc, yl);
  }
}
