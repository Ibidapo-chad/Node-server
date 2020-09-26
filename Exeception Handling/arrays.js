/*const cart = [ { name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
const names = cart.map(x => x.name); // ["Widget", "Gadget"]
const prices = cart.map(x => x.price); // [9.95, 22.95]
const discountPrices = prices.map(x => x*0.8); // [7.96, 18.36]
const lcNames = names.map(String.toLowerCase);
console.log(names);
console.log(prices);
console.log(discountPrices);
const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ({ name: x, price: prices[i]}));
console.log(cart);*/

const words = ["Beachball", "Rodeo", "Angel",
"Aardvark", "Xylophone", "November", "Chocolate",
"Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
if(!a[x[0]]) a[x[0]] = [];
a[x[0]].push(x);
return a; 
}, {}
);
//console.log(alphabetical);

const cart = [ { name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
const names = cart.map(x => x.name); // ["Widget", "Gadget"]
//console.log(names);

/*const words = ["Beachball", "Rodeo", "Angel",
"Aardvark", "Xylophone", "November", "Chocolate",
"Papaya", "Uniform", "Joker", "Clover", "Bali"];
const longWords = words.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim();
console.log(longWords);*/

const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
// Donald Knuth's algorithm for calculating variance:
// Art of Computer Programming, Vol. 2: Seminumerical Algorithms, 3rd Ed., 1998
const stats = data.reduce((a, x) => {
a.N++;
let delta = x - a.mean;
a.mean += delta/a.N;
a.M2 += delta*(x - a.mean);
console.log(a.N++);
return a;
}, { N: 0, mean: 0, M2: 0 });
if(stats.N > 2) {
stats.variance = stats.M2 / (stats.N - 1);
stats.stdev = Math.sqrt(stats.variance);
}
let delta;
console.log(delta);


