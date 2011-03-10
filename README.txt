このプラグインに関するあらゆる損害に対して
いかなる保証もいたしません

これはVimperatorのプラグインです
Deliciousにブックマークを投稿します
ただし，YahooアカウントではOauth認証が
必要となるため，使用できません．

オプションを以下のように記述すると
-t tag1,tag2 -c something

タグにtag1 tag2
コメントにsomething
を加えることができます．

TODO:
タグを,ではなくスペースでパースして
投稿できるようにする

Oauth認証を実装してYahooアカウントでも
ポストできるようにする

パスワード入力時は***に変更したい

INSTALL:
windows ホームフォルダ\vimperator\plugin\の中に突っ込む
(.vimperator)ではないので注意

Linux系　~/.vimperator/plugin/以下にどうぞ

Firefixを再起動すると使えるようになる
一応起動中に :so　コマンドでプラグインを再読み込みできないでもない

USE:
postD or postDelicious
で投稿可能．オプションは上記の例を参考のこと





