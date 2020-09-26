/*const html = 'HTML with <a href="/one">one link</a>, Area45 and some JavaScript.' +
'<script src="stuff.js"></script>';
const matches = html.match(/area|a|link|script|source/ig);
console.log(matches);
const input = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.";
const match = input.match(/\d{5}/);
console.log(match);*/

/*const html = `<img alt='A "simple" example.'>` +
`<img alt="Don't abuse it!">`;
const matches = html.match(/<img alt=(?:['"]).*\1/g);
console.log(matches);*/

/*let html = '<a class="nope" href="/yep">Yep</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
console.log(html);*/

const input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/g); // "It"
const end = input.match(/\w+$/g); // "times"
const everything = input.match(/^.*$/g); // sames as input
const nomatch1 = input.match(/^best/ig);
const nomatch2 = input.match(/worst$/ig);
console.log(everything);