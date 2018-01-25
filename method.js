var pi = 3.14;
var obj = {};
obj.updateData = function () {
    console.log("Updata Data");
}
obj.deleteUser = function () {
    console.log("Delete Users!!!");
}
var update = function () {
    return "Update Server !!!!";
}
var add = function (a, b) {
    return a + b;
}
exports.pi = pi;
exports.add = add;
exports.update = update;
exports.data = obj;