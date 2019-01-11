var ParentClass = function () {};
ParentClass.prototype.method1 = function () {};/*?*/
var ChildClass = function () {};/*?*/

ChildClass.prototype.__proto__ = ParentClass.prototype; /*?*/

ChildClass.prototype.method2 = function () {};/*?*/