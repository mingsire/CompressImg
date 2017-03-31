
方式1:

如果您的图片来自用户拍摄或者上传的，您需要一个input file来获取图片。

<input id="file" type="file" accept="image/*" />
接着通过change事件可以得到用户选择的图片

document.querySelector('#file').addEventListener('change', function () {
	lrz(this.files[0])
        .then(function (rst) {
            // 处理成功会执行
            console.log(rst);
        })
        .catch(function (err) {
            // 处理失败会执行
        })
        .always(function () {
            // 不管是成功失败，都会执行
        });
});
方式2：

如果您的图片不是来自用户上传的，那么也可以直接传入图片路径。

lrz('./xxx/xx/x.png')
        .then(function (rst) {
            // 处理成功会执行
        })
        .catch(function (err){
            // 处理失败会执行
        })
        .always(function () {
            // 不管是成功失败，都会执行
        });

		