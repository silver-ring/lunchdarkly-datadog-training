import {Component, OnInit} from '@angular/core';
import * as LDClient from 'launchdarkly-js-client-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lunchdarkly-datadog-training';

  featureFlag = false;
  loading = true;

  async ngOnInit() {
    const user = {
      key: 'user_id'
    };
    const client = LDClient.initialize('62ff0cb5e277b910c4a412ae', user);
    client.waitForInitialization().then(() => {
      this.featureFlag = client.variation('feature_1', false) as boolean;
      this.loading = false;
    });
  }

}
