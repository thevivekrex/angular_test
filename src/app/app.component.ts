import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { mergeMap } from 'rxjs';
import { CommonServiceService } from 'src/service/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';

  constructor(
     private httpClient: HttpClient,
     private sanitizer: DomSanitizer
   ) { }

   urls = ["https://en.wikipedia.org/wiki/Python_(programming_language)&#39",
    "https://en.wikipedia.org/wiki/Concurrency_(computer_science)&#39",
    "https://en.wikipedia.org/wiki/Artificial_intelligence&#39"
    ]
    
    process = 3;
    urlWithCount: string[] = [];

   ngOnInit() {
    this.callData();
   }

   callData() {

    if(this.urls.length) {
      const sliceUrl = this.urls.splice(0, this.process);
      for(let i = 0; i < sliceUrl.length; i++) {
      this.getCount(sliceUrl[i]);
      }
      this.callData();
    }

   }

   getCount(url: string): void {
    this.httpClient.get(url, {responseType: "text"}).subscribe((response: string) => {
      const totalWord = response.split(" ").length;
      this.urlWithCount.push(`${url}, ${totalWord}`);
    }, err => {
      this.urlWithCount.push(`${url},0`)
    })
   }
}
