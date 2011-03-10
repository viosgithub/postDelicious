var name = "";
var pass = "";
commands.addUserCommand(
	["postD[elicious]"],
	"this plugin post Delicious your bookmark",
	function(args){
	var pageUrl = gBrowser.selectedBrowser.contentDocument.documentURI;
	if (name == "") name = prompt("Delicious ID","");
	if (pass == "") pass = prompt("Delicious PASS","");
	liberator.echo("tags:" + args["-tags"])
	var pageTitle = gBrowser.selectedBrowser.contentTitle;
	liberator.echo("comment:" + args["-comment"]);
	if (args["-comment"] == null) liberator.echo("comment is undefind by mori");
	liberator.echo("title="+pageTitle);
	var postUri = "https://api.del.icio.us/v1/posts/add?";
	postUri = postUri + "url=" + encodeURI(pageUrl);
	postUri = postUri + "&description=" + encodeURI(pageTitle);
	if(args["-comment"] != null) postUri = postUri + "&extended=" + encodeURI(args["-comment"]);
	var tags = args["-tags"];
	if(tags != null) 
	{
	postUri = postUri + "&tags=";
	for(var i=0;i<tags.length;i++)
	{
	    postUri = postUri + encodeURI(args["-tags"][i] + " ");
	}
	}
	liberator.echo("encoded postUri:" + postUri);
	var request = new XMLHttpRequest();
	liberator.echo("createXML...:OK");
	request.open("GET",postUri,false,name,pass);
	liberator.echo("request.open:OK");
	request.setRequestHeader('Content-Type', 'application/post2delplugin');
	liberator.echo("setRequestHeader:OK");
	request.send("");
	if(request.status == 200) liberator.echo("succsessd!");
	else liberator.echo("failed!");

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
