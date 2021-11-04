var generate = require('project-name-generator');

generate().dashed; // 'uptight-guitar'
console.log("Name with dash: " + generate().dashed);

generate().spaced; // 'grandiose clam'
console.log("Name with space as separator: " + generate().spaced);

generate().raw; // ['deluxe', 'grandmother']
console.log("Raw name: " + generate().raw);

generate({ number: true }).dashed; // 'disgraceful-temper-7794'
console.log("Name with a number and dash separator: " + generate({ number: true }).dashed);

generate({ words: 4 }).raw; // ['tiny', 'crabby', 'wired', 'quicksand']
console.log("3 raw names: " + generate({ words: 3 }).raw);

generate({ words: 4, number: true }).dashed; // 'breakable-judicious-luxuriant-tax-3931'
console.log("Name of 4 words, a number and dash separator: " + generate({ words: 4, number: true }).dashed);

generate({ words: 2, alliterative: true }).spaced; // 'elegant experience'
console.log("Name of 2 words, alliterative and spaced: " + generate({ words: 2, alliterative: true }).spaced);