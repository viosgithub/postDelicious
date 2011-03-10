commands.addUserCommand(
    ["postD[elicious]"],
    "this plugin post Delicious your bookmark",
    function(args){
    	var c = gBrowser.selectedBrowser.contentDocument.documentURI;
	var name = "";
	var pass = "";
	if (name == "") name = prompt("Delicious ID","");
	if (pass == "") pass = prompt("Delicious PASS","");
        liberator.echo(args["-tags"])
	liberator.echo(args["-tags"].length)
        //liberator.echo(args["tags"])
        //liberator.echo("this is foo2!!");
	var title = gBrowser.selectedBrowser.contentTitle;
        //liberator.echo("comment is " + args["-comment"]);
	if (args["-comment"] == null) liberator.echo("comment is undefind by mori");
        liberator.echo("title="+title);
	var url = "https://api.del.icio.us/v1/posts/add?";
	url = url + "url=" + c;
	url = url + "&description=" + title;
        liberator.echo(url);
	//var request = createXMLHttpRequest();
	var request = new XMLHttpRequest();
        liberator.echo("createXML...:OK");
	request.open("POST",url,false,name,pass);
        liberator.echo("request.open:OK");
  	request.setRequestHeader('Content-Type', 'application/post2delplugin');
        liberator.echo("setRequestHeader:OK");
	request.send("");
        liberator.echo("send:OK");
        liberator.echo(request.status);

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
