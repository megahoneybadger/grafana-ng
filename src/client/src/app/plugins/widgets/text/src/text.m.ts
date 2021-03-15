export class TextModel{
	mode: TextRenderMode = TextRenderMode.Html;
	content: string;
}

export enum TextRenderMode {
	Markdown = "markdown",
	Html = "html",
}
