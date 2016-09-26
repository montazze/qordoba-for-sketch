@import 'api.js'

var onRun = function (context) {
	qordobaSDK.common.init(context);
	if(utils.checkLastVersionChecked(context) == true){
		fireUpdate(context);
 	} else if (utils.getActiveTokenFromComputer(context) == false) {
		fireLoginWindowWithContext(context)
	} else {
		var editor = qordobaSDK.editor.init(context);
		editor.languageSettingsPanel(context);
	}
}