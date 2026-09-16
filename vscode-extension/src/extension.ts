import * as vscode from "vscode";
import { genText } from "./lorem";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand("loremIpsum.insert", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("Open a file to insert placeholder text into.");
      return;
    }

    const wordCountInput = await vscode.window.showInputBox({
      prompt: "How many words?",
      value: "50",
      validateInput: (v) => (/^\d+$/.test(v) && Number(v) > 0 ? null : "Enter a positive integer"),
    });
    if (wordCountInput === undefined) return;

    const firstLetters = await vscode.window.showInputBox({
      prompt: "Restrict first letters? (optional, e.g. abc)",
      value: "",
    });
    if (firstLetters === undefined) return;

    const text = genText(Number(wordCountInput), firstLetters.replace(/[^a-zA-Z]/g, ""));

    await editor.edit((editBuilder) => {
      editor.selections.forEach((selection) => {
        editBuilder.replace(selection, text);
      });
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
