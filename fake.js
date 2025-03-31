import { fakerRU } from "@faker-js/faker";

export const fake = {};
assign("color");
assign("commerce");
assign("company");
assign("database");
assign("datatype");
assign("date");
assign("git");
assign("hacker");
assign("helpers");
assign("image");
assign("internet");
assign("location");
assign("lorem");
assign("person");
assign("phone");
assign("system");
assign("word");

function assign(lib) {
  for (let k in fakerRU[lib]) {
    if (typeof fakerRU[lib][k] == "function") {
      fake[k] = fakerRU[lib][k].bind(fakerRU[lib]);
    }
  }
}

fake.pattern = function (pat) {
  const r = {};
  for (let k in pat) {
    console.log(57,k,typeof pat[k]);
    if(typeof pat[k] == 'function') {
      console.log(58,pat[k]);
      r[k] = pat[k]();
    } else {
      r[k] = pat[k];
    }
  }
  return r;
};
fake.take = function (n, pat) {
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(fake.pattern(pat));
  }
  return a;
};

fake.avatar = function() {
  return '/images/blocks/avatars/circle/avatar-m-'+((Math.random()*12)|0)+'.png';
}
