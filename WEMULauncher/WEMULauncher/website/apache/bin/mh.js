var WshShell = WScript.CreateObject("WScript.Shell");
var BDir = WshShell.CurrentDirectory;
var UpDir = BDir.split("\\bin").join("");
var WebDir = UpDir.split("\\apache").join("");
var ServerRoot = WebDir.split("\\").join("/");
fso = new ActiveXObject("Scripting.FileSystemObject");
var htold = fso.OpenTextFile(UpDir+"\\conf\\httpd.portable.conf");
var httpd = htold.ReadAll();
var compile = httpd.split("{$PORTABLEROOT}").join(ServerRoot);
var sfile = UpDir+"\\conf\\httpd.conf";
var htnew = fso.CreateTextFile(sfile, true);
htnew.Write(compile);
htnew.Close();

fso2 = new ActiveXObject("Scripting.FileSystemObject");
var phpold = fso2.OpenTextFile(UpDir+"\\bin\\php.portable.ini");
var php = phpold.ReadAll();
var compile2 = php.split("{$PORTABLEROOT}").join(WebDir);
var sfile2 = UpDir+"\\bin\\php.ini";
var phpnew = fso2.CreateTextFile(sfile2, true);
phpnew.Write(compile2);
phpnew.Close();

fso3 = new ActiveXObject("Scripting.FileSystemObject");
var phpold2 = fso3.OpenTextFile(WebDir+"\\php\\php.portable.ini");
var php2 = phpold2.ReadAll();
var compile3 = php2.split("{$PORTABLEROOT}").join(WebDir);
var sfile3 = WebDir+"\\php\\php.ini";
var phpnew2 = fso3.CreateTextFile(sfile3, true);
phpnew2.Write(compile3);
phpnew2.Close();