const { getCityBySlug, cities } = require('./src/data/places.ts');

console.log('Total cities:', cities.length);
console.log('City slugs:', cities.map(c => c.slug).join(', '));

const shamakhi = getCityBySlug('shamakhi');
console.log('Shamakhi found:', shamakhi ? 'YES' : 'NO');
if (shamakhi) {
  console.log('Shamakhi name:', shamakhi.name);
}
