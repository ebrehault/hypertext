export interface APage {
  lines: ALine[];
  style?: string;
}
export interface ALine {
  t: string;
  style?: string;
  hold?: number;
  override?: boolean;
}

let pages: APage[] = $state([]);
export function setPages(_pages: APage[]) {
  pages = _pages;
}

let pageIndex = $state(0);
export function getPageIndex() {
  return pageIndex;
}
export function setPageIndex(i: number) {
  pageIndex = i;
}
let lineIndex = $state(0);
export function getLineIndex() {
  return lineIndex;
}
export function setLineIndex(i: number) {
  lineIndex = i;
}
let hold = $state(false);

export function currentLineIndex() {
  return lineIndex;
}

let page: APage = $derived(pages[pageIndex]);
export function currentPage() {
  return page;
}

export function next() {
  if (hold) return;
  if (page.lines.length > lineIndex + 1) {
    lineIndex += 1;
  } else if (pageIndex < pages.length - 1) {
    pageIndex += 1;
    lineIndex = 0;
  }
  const currentHold = pages[pageIndex].lines[lineIndex].hold;
  if (currentHold) {
    holdFor(currentHold);
  }
}

export function previous() {
  if (lineIndex > 0) {
    lineIndex -= 1;
  } else if (pageIndex > 0) {
    pageIndex -= 1;
    lineIndex = pages[pageIndex].lines.length - 1;
  }
}

export function holdFor(time: number) {
  hold = true;
  setTimeout(() => (hold = false), time);
}
