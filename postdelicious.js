commands.addUserCommand(
	["postD[elicious]"],//�R�}���h��
	"this plugin posts Delicious your bookmark",//�R�}���h�Ɋւ�������C�R�}���h���C���ɕ\�������
	function(args){
	var pageUrl = gBrowser.selectedBrowser.contentDocument.documentURI;//���e�������y�[�W��URI(URL)�̎擾
	//liberator.echo("tags:" + args["-tags"]);//���͂��ꂽ�^�O�ꗗ�̕\���D�f�o�b�O�p
	var pageTitle = gBrowser.selectedBrowser.contentTitle;//���e����y�[�W�̃^�C�g���̎擾
	//liberator.echo("comment:" + args["-comment"]);//���͂��ꂽ�R�����g�̕\���D�f�o�b�O�p
	var postUri = "https://api.del.icio.us/v1/posts/add?";//Delicious��API�̎g�����߂�URI�̐擪�����C������&tags,&url�Ƃ���ǉ����đ��M���邱�Ƃ�API�����s������
	postUri = postUri + "url=" + encodeURI(pageUrl);//URI�̒ǉ�
	postUri = postUri + "&description=" + encodeURI(pageTitle);//�^�C�g���̒ǉ�
	if(args["-comment"] != null) postUri = postUri + "&extended=" + encodeURI(args["-comment"]);//�����R�����g�I�v�V�����ɋL�q������΃R�����g�iextended)��ǉ�
	var tags = args["-tags"];//�I�v�V�����œ��͂��ꂽ�^�O�� tags�@�ɑ��
	if(tags != null) 
	{
	postUri = postUri + "&tags=";//�^�O�����͂���Ă���΃^�O�̒ǉ����s�Ȃ��̂ŁC&tags��ǉ�
	for(var i=0;i<tags.length;i++)
	{
	    postUri = postUri + encodeURI(args["-tags"][i] + " ");//tags[1] tags[2] tags[n] �ƂȂ�悤�Ɏ擾�����^�O��&tags�ȍ~�ɑ����Ă���
	}
	}
	//liberator.echo("encoded postUri:" + postUri);//�ŏI�I�ɑ��M����URI�̕\���D�f�o�b�O�p
	var request = new XMLHttpRequest();//XMLHttpRequest���g���ĒʐM���s�Ȃ�
	//request.open("GET",postUri,false,name,pass);//��4,5������basic�F�؂ɕK�v�ƂȂ�D��1������"POST"�ɕύX�����POST���\�b�h��p����D��R������true�ɂ���Ɣ񓯊��ʐM���s�Ȃ�
	request.open("GET",postUri,false);//��1������"POST"�ɕύX�����POST���\�b�h��p����D��R������true�ɂ���Ɣ񓯊��ʐM���s�Ȃ�
	request.setRequestHeader('Content-Type', 'application/post2delplugin');//��Q�����̐ݒ���ǂ�����̂��ǂ�������Ȃ��ŏ���Ɍ��߂�.deliciousAPI�w���v�Ƀ��j�[�N�Ȗ��O���g���ׂ��I�Ȃ��Ƃ������Ă������悤��...
	request.send("");//���N�G�X�g�𑗐M����
	if(request.status == 200) liberator.echo("succsessd!");//�ʐM�ɐ���������200���Ԃ��Ă���̂Ő����������Ƃ�\������
	else liberator.echo("failed!");//���s�����Ƃ��͂�������\������
	},
{
options: [
	     [["-comment",   "-c"], commands.OPTION_STRING],
	 [["-tags",    "-t"], commands.OPTION_LIST]
	     ]
}
,
    true
    );
