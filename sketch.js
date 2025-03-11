let mode = ARC;

let initial_data = {
  w: 650,
  h: 650,

  s: 3,

  v1: 10,
  v2: 3,
  v3: 6,

  o1: 4,
  o2: 5,
  o3: 2,

  m: 5,
  mode: DIAGONAL,
};

let data = { ...initial_data };

function setup() {
  createCanvas(700,700);

  let tl = gsap.timeline({ repeat: -1 });

  tl.to(data, {
    v1: 3,
    ease: "power1.inOut",
    duration: 2,
  })
    .to(data, {
      v1: initial_data.v1,
      o1: 1,
      //change thickness here "s"
      s: 9,
      ease: "power1.inOut",
      duration: 2,
    })
    .to(data, {
      o3: 3,
      v2: 11,
      ease: "power1.inOut",
      duration: 2,
    })
    .to(data, {
      o1: initial_data.o1,
      o3: initial_data.o3,
      v2: initial_data.v2,
      s: initial_data.s,
      ease: "power1.inOut",
      duration: 2,
    });

  noFill();
}

function draw() {
  background(220);

  let v_tot = data.v1 + data.v2 + data.v3;

  //add mouseX here
  //data.w = constrain(mouseX, initial_data.w, mouseX);
  //add mouseY here
  //data.h = constrain(mouseY, initial_data.h, mouseY);

  translate((width - data.w) / 2, (height - data.h) / 2);

  let w1 = (data.w / v_tot) * data.v1;
  let w2 = (data.w / v_tot) * data.v2;
  let w3 = (data.w / v_tot) * data.v3;

  let o_tot = data.o1 + data.o2 + data.o3;

  let h1 = (data.h / o_tot) * data.o1;
  let h2 = (data.h / o_tot) * data.o2;
  let h3 = (data.h / o_tot) * data.o3;

  strokeWeight(data.s);

  push();
  rect(0, 0, w1, data.h);
  translate(w1, 0);
  rect(0, 0, w2, data.h);
  translate(w2, 0);
  rect(0, 0, w3, data.h);
  pop();

  push();
  rect(0, 0, data.w, h1);
  translate(0, h1);
  rect(0, 0, data.w, h2);
  translate(0, h2);
  rect(0, 0, data.w, h3);
  translate(0, h3);
  pop();

  //I

  let x_i = 0 + data.s / 2 + data.m;
  let y_i = 0 + data.s / 2 + data.m;
  let w_i = w1 - data.s - 2 * data.m;
  let h_i = h1 - data.s - 2 * data.m;

  let pezzi_i = [
    "nw_h",
    "ne_h",
    "sw_h",
    "se_h",
    "n_v",
    "s_v",
    "nw_a_ne",
    "ne_a_ne",
    "se_a_ne",
    "sw_a_ne",
  ];

  letter(x_i, y_i, w_i, h_i, data.s, mode, pezzi_i);

  // I2

  let x_i2 = 0 + w1 + w2 + data.s / 2 + data.m;
  let y_i2 = 0 + h1 + data.s / 2 + data.m;
  let w_i2 = w3 - data.s - data.m * 2;
  let h_i2 = h2 - data.s - data.m * 2;

  letter(x_i2, y_i2, w_i2, h_i2, data.s, mode, pezzi_i);

  // D
  let x_d = 0 + w1 + data.s / 2 + data.m;
  let y_d = 0 + data.s / 2 + data.m;
  let w_d = w2 - data.s - 2 * data.m;
  let h_d = h1 - data.s - 2 * data.m;

  letter(
    x_d,
    y_d,
    w_d,
    h_d,
    data.s,
    mode,
    (pezzi = [
      "nw_v",
      "nw_h",
      "sw_h",
      "sw_v",
      "nw_a_nw",
      "ne_a_nw",
      "se_a_nw",
      "sw_a_nw",
    ])
  );

  //E

  let x_e = 0 + w1 + w2 + data.s / 2 + data.m;
  let y_e = 0 + data.s / 2 + data.m;
  let w_e = w3 - data.s - 2 * data.m;
  let h_e = h1 - data.s - 2 * data.m;

  letter(
    x_e,
    y_e,
    w_e,
    h_e,
    data.s,
    mode,
    (pezzi = [
      "nw_v",
      "nw_h",
      "sw_h",
      "sw_v",
      "ne_h",
      "se_h",
      "w_h",
      "nw_a_sw",
      "sw_a_sw",
    ])
  );

  //N

  let x_n = 0 + data.s / 2 + data.m;
  let y_n = 0 + h1 + data.s / 2 + data.m;
  let w_n = w1 - data.s - 2 * data.m;
  let h_n = h2 - data.s - 2 * data.m;
  letter(
    x_n,
    y_n,
    w_n,
    h_n,
    data.s,
    mode,
    (pezzi = [
      "nw_v",
      "sw_v",
      "n_v",
      "s_v",
      "ne_v",
      "se_v",
      "nw_h",
      "se_h",
      "nw_a_ne",
      "se_a_ne",
    ])
  );

  // T

  let x_t = 0 + w1 + data.s / 2 + data.m;
  let y_t = 0 + h1 + data.s / 2 + data.m;
  let w_t = w2 - data.s - 2 * data.m;
  let h_t = h2 - data.s - 2 * data.m;

  let pezzi_t = ["nw_h", "ne_h", "n_v", "s_v", "nw_a_ne", "ne_a_ne"];

  letter(x_t, y_t, w_t, h_t, data.s, mode, pezzi_t);

  // T2

  let x_t2 = 0 + data.s / 2 + data.m;
  let y_t2 = 0 + h1 + h2 + data.s / 2 + data.m;
  let w_t2 = w1 - data.s - data.m * 2;
  let h_t2 = h3 - data.s - data.m * 2;

  letter(x_t2, y_t2, w_t2, h_t2, data.s, mode, pezzi_t);

  //A

  let x_a = 0 + w1 + data.s / 2 + data.m;
  let y_a = 0 + h1 + h2 + data.s / 2 + data.m;
  let w_a = w2 - data.s - 2 * data.m;
  let h_a = h3 - data.s - 2 * data.m;
  letter(
    x_a,
    y_a,
    w_a,
    h_a,
    data.s,
    mode,
    (pezzi = [
      "nw_v",
      "sw_v",
      "ne_v",
      "se_v",
      "nw_h",
      "ne_h",
      "w_h",
      "e_h",
      "nw_a_sw",
      "ne_a_sw",
      "se_a_sw",
      "sw_a_sw",
    ])
  );

  //S

  let x_s = 0 + w1 + w2 + data.s / 2 + data.m;
  let y_s = 0 + h1 + h2 + data.s / 2 + data.m;
  let w_s = w3 - data.s - 2 * data.m;
  let h_s = h3 - data.s - 2 * data.m;
  letter(
    x_s,
    y_s,
    w_s,
    h_s,
    data.s,
    mode,
    (pezzi = [
      "nw_v",
      "se_v",
      "nw_h",
      "ne_h",
      "w_h",
      "e_h",
      "sw_h",
      "se_h",
      "nw_a_sw",
      "se_a_sw",
    ])
  );
}

function mouseClicked() {
  if (mode == ARC) mode = DIAGONAL;
  else mode = ARC;
}

function keyPressed() {
  if (key == "a") {
    // ...
  }
}

function keyPressed() {
  if (key === "s") {
    saveGif("mySketch", 18);
  }
}
