import { Component, OnInit } from '@angular/core';
import { TradingService } from 'app/services/trading.service';
import { Ticker } from '../../models/ticker';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-trading',
  templateUrl: './add-trading.component.html',
  styleUrls: ['./add-trading.component.css']
})
export class AddTradingComponent implements OnInit {

  public entryDate: any = null;
  public tickerList: Array<Ticker> = new Array();

  constructor(private tradingService: TradingService, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onDateSelection(e, item) {
    const fullDate = this.getFullDate();
    this.getTickerListFromDate();
  }

  getFullDate() {
    if (this.entryDate) {
      let month = ("0" + this.entryDate.month).slice(-2);
      let day = ("0" + this.entryDate.day).slice(-2);
      let year = ("0" + this.entryDate.year).slice(-2);
      return year + "-" + month + "-" + day;
    } else {
      return null;
    }
  }

  startNewEntry() {
    let tickerItem = new Ticker();
    this.tickerList.push(tickerItem);
  }

  removeTicker(i) {
    if (i > -1) {
      this.tickerList.splice(i, 1);
    }
  }

  getTickerListFromDate() {
    this.spinner.show();

    this.tradingService.getTradingByDate(this.getFullDate()).subscribe(
      data => {
        this.spinner.hide();
        if(data.tickerList) {
          this.tickerList = JSON.parse(data.tickerList.ticker_data);
        } else {
          this.tickerList = [];
        }
      }
    )
  }

  startTrading() {
    if (this.tickerList.length === 0) {
      return;
    }
    const reqBody = {
      tickerList: JSON.stringify(this.tickerList),
      date: this.getFullDate()
    };
    this.spinner.show();
    this.tradingService.addTrading(reqBody).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.spinner.hide();
    this.tickerList = [];
    this.entryDate = null;
    this.toastr.success('Trading Started Successfully.', 'Congratulation!', {positionClass: 'toast-top-right', progressBar: true});
  }

  handleError(error) {
  }
}
