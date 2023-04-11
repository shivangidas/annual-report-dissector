import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @Input()
  pdfSrc!: string;
  @Output()
  pdfSrcChange = new EventEmitter<string>();

  onFileSelected() {
    let $img: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
  
      reader.onload = (e: any) => {
        // this.pdfSrc = e.target.result;
        this.pdfSrcChange.emit(e.target.result);
      };
  
      reader.readAsArrayBuffer($img.files[0]);
    }
  }
}
