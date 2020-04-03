// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

function doReplace(editor, string)
{
	const selection = editor.selection;
	editor.edit(editBuilder => {
		editBuilder.replace(
			new vscode.Range(selection.start, selection.end),
			`${string}`
		);
	});
}

/**
 * this method is called when your extension is activated
 * your extension is activated the very first time the command is executed
 *
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const insertTimestamp = vscode.commands.registerCommand("extension.insertTimestamp", () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
	 		 return;
		}

		const timestamp = Math.round(Date.now() / 1000);
		doReplace(editor, timestamp)
	});
	const insertTimestampMs = vscode.commands.registerCommand("extension.insertTimestampMs", () => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
	 		 return;
		}

		const timestamp = Date.now();
		doReplace(editor, timestamp)
	});

	context.subscriptions.push(insertTimestamp);
	context.subscriptions.push(insertTimestampMs);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
