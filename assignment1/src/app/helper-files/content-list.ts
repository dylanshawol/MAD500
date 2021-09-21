class ContentList {
  private _contentArray: Content[];

  constructor(contentArray: Content[]) {
    this._contentArray = [];
  }

  static viewContent(index: number): string {
    return this.contentArray[index].toString();
  }

  static count(): number {
    return this.contentArray.length;
  }

  static add(content: Content) {
    this.contentArray.push(content);
  }

  static get contentArray(): Content[] {
    return this.contentArray;
  }
}

export interface Content {

}
