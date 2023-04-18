import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/api-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Utility } from './utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userDataSource = new MatTableDataSource();
  transactionsDataSource = new MatTableDataSource();
  mintForm = new FormGroup({
    amount: new FormControl('', Validators.required),
  });
  transferFromForm = new FormGroup({
    from: new FormControl('', Validators.required),
    to: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  });
  clientAccountBalanceForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  transferForm = new FormGroup({
    to: new FormControl('', Validators.required),
    value: new FormControl('', Validators.required),
  });
  BalanceOfForm = new FormGroup({
    user: new FormControl('', Validators.required),
  });
  burnForm = new FormGroup({
    amount: new FormControl('', Validators.required),
  });
  appUserForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  filterDataLength = -1;
  public pageSize = 5;
  public page = 1;
  title = 'frontend';
  assets = [];
  userColumns: string[] = ['id', 'userName', 'role', 'created'];
  transactionsColumns: string[] = ['id', 'txId', 'blockId', 'payload'];
  response: any = [];
  transactionsResponse: any = [];
  showUi = false;
  utility: any;
  roles = [{
    name: 'admin'
  },
  {
    name: 'client'
  },
  ]
  users: any = [];
  // allUsers: any = [];
  icon = 'visibility';
  type = "password";
  selectedUser = null;
  balance: any;
  clientBalance: any;
  constructor(private snackBar: MatSnackBar, private apiService: ApiService,) {
    this.utility = new Utility();
    this.apiService.users().subscribe((data: any) => {
      this.users = data;
    });
    this.clientBalance = 0
    this.apiService.clientAccountBalance(56).subscribe((response: any) => {
      if (response.status == 0) {
        // this.clientAccountBalanceForm.reset();
        this.clientBalance = response.balance;
      }
      else {
        this.snackBar.open("Unable to get the balance", "X", { "duration": 3000 });
      }
    })
  }
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.transactionsDataSource.sort = this.sort;
    this.transactionsDataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }

  tokenInfo() {
    if (!this.checkUserSelection()) {
      return;
    }
    console.log(this.selectedUser);
    this.apiService.tokenInfo(this.selectedUser).subscribe((response: any) => {
      this.response = response;
      this.showUi = true;
    });
  }
  request: any

  onSubmitUser() {
    this.request = this.appUserForm.value;
    // this.apiService.appUserSave(this.request).subscribe((response: any) => {
    //   if (response.status == 0) {
    //     this.utility.showSnackBar(this.snackBar, 'User Created sucessfully');
    //     this.appUserForm.reset();
    //   }
    //   else {
    //     this.utility.showSnackBar(this.snackBar, 'User Created Unsucessfully');
    //   }
    // })
  }
  mint() {
    if (!this.checkUserSelection()) {
      return;
    }
    this.request = this.mintForm.value;
    this.request['username'] = this.selectedUser;
    this.apiService.mint(this.request).subscribe((response: any) => {
      if (response.status == 0) {
        this.snackBar.open("Minted Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Minting failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitTransferFrom() {
    this.request = this.transferFromForm.value;
    this.apiService.transfer(this.request).subscribe((response: any) => {
      if (response.status == 0) {
        this.snackBar.open("Transfer sucess", "X", { "duration": 3000 });
        this.transferFromForm.reset();
      }
      else {
        this.snackBar.open("Transfer failed", "X", { "duration": 3000 });
      }
    })
  }

  getBalance() {
    this.balance = 0
    this.apiService.balanceOff(this.clientAccountBalanceForm.value.name).subscribe((response: any) => {
      if (response.status == 0) {
        this.clientAccountBalanceForm.reset();
        this.balance = response.balance;
      }
      else {
        this.snackBar.open("Unable to get the balance", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitBalanceOff() {
    this.request = this.BalanceOfForm.value;
    this.apiService.balanceOff(this.request).subscribe((response: any) => {
      if (response.status == 0) {
        this.snackBar.open("Balance Off Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Balance Off failed", "X", { "duration": 3000 });
      }
    })
  }

  transfer() {
    if (!this.checkUserSelection()) {
      return;
    }
    this.request = this.transferForm.value;
    this.request['from'] = this.selectedUser;
    this.apiService.transfer(this.request).subscribe((response: any) => {
      if (response.status == 0) {
        this.snackBar.open("Transfer Sucessfully", "X", { "duration": 3000 });
        this.transferForm.reset();
      }
      else {
        this.snackBar.open("Transfer failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitBurn() {
    this.request = this.burnForm.value;
    // this.request['userId'] = this.userId;
    this.apiService.burnSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
      if (response.status == 0) {
        this.snackBar.open("Burn Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Burn failed", "X", { "duration": 3000 });
      }
    })
  }
  onTabChanged(data: any) {
    console.log(data);
    switch (data.index) {
      case 0:
        break;
      case 1:
        this.apiService.users().subscribe((response: any) => {
          this.userDataSource.data = response;
          this.users.push = response;
        });
        break;
      case 2:
        this.apiService.transactions().subscribe((response: any) => {
          this.transactionsResponse = response;
          this.transactionsDataSource.data = response;
        });
        break;
    }

  }

  onSelected(user: any) {

  }

  showOrHide() {
    if (this.type == 'password') {
      this.type = 'text'
      this.icon = 'visibility_off'
    } else {
      this.type = 'password'
      this.icon = 'visibility'
    }
  }
  onUserSelect(event: any) {
    if (event.isUserInput) {
      this.selectedUser = event.source.value
      console.log(this.selectedUser);
    }
  }
  checkUserSelection(): boolean {
    if (!this.selectedUser) {
      this.snackBar.open("Please select the user", "X", { "duration": 3000 });
      return false;
    } else {
      return true;
    }
  }
  convert(payload: any) {
    return JSON.stringify(payload)
  }
}
