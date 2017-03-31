var lmc    = require('lmc');
var expect = chai.expect;

describe("测试压缩正常运作", function () {

    it("基本例子:传入路径", function () {
        return lmc('base/test/img/transparent_png.png')
            .then(function (rst) {
                expect(rst).to.all.keys('formData', 'origin', 'base64', 'fileLen', 'base64Len', 'file');
            });
    });

    it("基本例子:传入base64", function () {
        var base64 = 'data:image/png;base64,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';

        return lmc(base64)
            .then(function (rst) {
                expect(rst).to.all.keys('formData', 'origin', 'base64', 'fileLen', 'base64Len', 'file');
            });
    });
});