"use strict";
const someObject = {
    id: 1,
    isTrue: true,
    name: 'william'
};
function getProperties(key, value) {
    console.log(key, value);
}
getProperties('name', { name: 'dave', id: 5, isTrue: false });
//# sourceMappingURL=interfaces.js.map