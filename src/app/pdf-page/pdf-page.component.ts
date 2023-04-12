import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-pdf-page',
  templateUrl: './pdf-page.component.html',
})
export class PdfPageComponent {
  pdfSrc = '';
  redFlags = [
    'breach',
    'dispute',
    'litigation',
    'covenant',
    'bad debts',
    'impaired',
    'impairment',
    'write off',
    'qualified',
    'adverse',
    'disclaimer of opinion',
  ];

  @ViewChild(PdfViewerComponent)
  private pdfComponent!: PdfViewerComponent;

  search(stringToSearch: string) {
    this.pdfComponent.eventBus.dispatch('find', {
      query: stringToSearch,
      type: 'again',
      caseSensitive: false,
      findPrevious: undefined,
      highlightAll: true,
      phraseSearch: true,
    });
  }

  onOptionsSelected(value: string) {
    this.search(value);
  }
}
