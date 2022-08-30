import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TabEmitProps } from './components/tab-hard-rendering/tabs/tabs.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'components';
  tabHeader = [
    'Pull Request',
    'Issues',
    'Marketplace',
    'Explore'
  ];

  showT4 = true;
  fileContent = '';
  constructor(private readonly cdr: ChangeDetectorRef,
    private readonly http: HttpClient
  ) {}

  ngOnInit() {

  }

  currentTabHeaderIndex = 1;
  currentTabHeaderIndex2 = 1;


  onTabChanged({name, index}: TabEmitProps) {
    this.currentTabHeaderIndex = index;
    this.cdr.detectChanges();
  }

  change(fileEvent: Event) {
    const singleFileRaw = (fileEvent.target as unknown as DataTransfer).files[0];
    this.placeFileContent(singleFileRaw)
  }
  placeFileContent( file: any) {
    this.readFile(file).then((content) => {
      this.fileContent = content as string;
      console.log('teexxxt: ', content);
    }).catch(error => console.log(error))
  }

  readFile(file: File) {
    const reader = new FileReader()
    return new Promise((resolve, reject) => {
      reader.onload = event => resolve(event.target!.result)
      reader.onerror = error => reject(error)
      reader.readAsText(file)
    })
  }
}


