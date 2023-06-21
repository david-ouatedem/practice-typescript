"use strict";
class person {
    _fullname;
    _age;
    _admin;
    get admin() {
        return this._admin;
    }
    set admin(adminStatus) {
        if (adminStatus === true) {
            console.log('he is admin');
        }
        this._admin = adminStatus;
    }
}
let Person = new person();
Person.admin = true;
//# sourceMappingURL=getterAndSetter.js.map