import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  getWikiWordCount() {
    const url = "https://en.wikipedia.org/wiki/Python_(programming_language)";
    // const url1 = "https://en.wikipedia.org/w/index.php?title=Pet_door&action=view";
    // return this.httpClient.get(url);
    this.httpClient.get(url, {responseType: "text"}).subscribe(response => {
      const data = this.sanitizer.bypassSecurityTrustHtml(response);
      console.log(data,'_____________')
    })
  }
}
