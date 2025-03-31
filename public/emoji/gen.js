import {o} from './emoji_ru.js';
console.log(Object.keys(o).map(d=>`.${d}::before{content:'${d}'}`).join('\n'));