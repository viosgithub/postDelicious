commands.addUserCommand(
	["postD[elicious]"],//コマンド名
	"this plugin posts Delicious your bookmark",//コマンドに関する説明，コマンドラインに表示される
	function(args){
	var pageUrl = gBrowser.selectedBrowser.contentDocument.documentURI;//投稿したいページのURI(URL)の取得
	//liberator.echo("tags:" + args["-tags"]);//入力されたタグ一覧の表示．デバッグ用
	var pageTitle = gBrowser.selectedBrowser.contentTitle;//投稿するページのタイトルの取得
	//liberator.echo("comment:" + args["-comment"]);//入力されたコメントの表示．デバッグ用
	var postUri = "https://api.del.icio.us/v1/posts/add?";//DeliciousのAPIの使うためのURIの先頭部分，ここに&tags,&urlとかを追加して送信することでAPIを実行させる
	postUri = postUri + "url=" + encodeURI(pageUrl);//URIの追加
	postUri = postUri + "&description=" + encodeURI(pageTitle);//タイトルの追加
	if(args["-comment"] != null) postUri = postUri + "&extended=" + encodeURI(args["-comment"]);//もしコメントオプションに記述があればコメント（extended)を追加
	var tags = args["-tags"];//オプションで入力されたタグを tags　に代入
	if(tags != null) 
	{
	postUri = postUri + "&tags=";//タグが入力されていればタグの追加を行なうので，&tagsを追加
	for(var i=0;i<tags.length;i++)
	{
	    postUri = postUri + encodeURI(args["-tags"][i] + " ");//tags[1] tags[2] tags[n] となるように取得したタグを&tags以降に続けていく
	}
	}
	//liberator.echo("encoded postUri:" + postUri);//最終的に送信するURIの表示．デバッグ用
	var request = new XMLHttpRequest();//XMLHttpRequestを使って通信を行なう
	//request.open("GET",postUri,false,name,pass);//第4,5引数はbasic認証に必要となる．第1引数を"POST"に変更するとPOSTメソッドを用いる．第３引数をtrueにすると非同期通信を行なう
	request.open("GET",postUri,false);//第1引数を"POST"に変更するとPOSTメソッドを用いる．第３引数をtrueにすると非同期通信を行なう
	request.setRequestHeader('Content-Type', 'application/post2delplugin');//第２引数の設定をどうするのか良く分からないで勝手に決めた.deliciousAPIヘルプにユニークな名前を使うべき的なことが書いてあったような...
	request.send("");//リクエストを送信する
	if(request.status == 200) liberator.echo("succsessd!");//通信に成功したら200が返ってくるので成功したことを表示する
	else liberator.echo("failed!");//失敗したときはこっちを表示する
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
