
��ʽ1:

�������ͼƬ�����û���������ϴ��ģ�����Ҫһ��input file����ȡͼƬ��

<input id="file" type="file" accept="image/*" />
����ͨ��change�¼����Եõ��û�ѡ���ͼƬ

document.querySelector('#file').addEventListener('change', function () {
	lrz(this.files[0])
        .then(function (rst) {
            // ����ɹ���ִ��
            console.log(rst);
        })
        .catch(function (err) {
            // ����ʧ�ܻ�ִ��
        })
        .always(function () {
            // �����ǳɹ�ʧ�ܣ�����ִ��
        });
});
��ʽ2��

�������ͼƬ���������û��ϴ��ģ���ôҲ����ֱ�Ӵ���ͼƬ·����

lrz('./xxx/xx/x.png')
        .then(function (rst) {
            // ����ɹ���ִ��
        })
        .catch(function (err){
            // ����ʧ�ܻ�ִ��
        })
        .always(function () {
            // �����ǳɹ�ʧ�ܣ�����ִ��
        });

		