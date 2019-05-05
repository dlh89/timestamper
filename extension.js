// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const insertTimestamp = vscode.commands.registerCommand("extension.insertTimestamp", () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return;
		}

		const selection = editor.selection;
		const timestamp = Date.now();

		editor.edit(editBuilder => {
			editBuilder.insert(
				new vscode.Position(selection.active.line, selection.active.character),
				`${timestamp}`
			);
		});
	});

	context.subscriptions.push(insertTimestamp);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
