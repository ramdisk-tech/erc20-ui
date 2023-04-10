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
  dataSource = new MatTableDataSource();
  title = 'frontend';
  assets = [];
  userColumns: string[] = ['id', 'userName', 'role', 'created'];
  transactionsColumns: string[] = ['id', 'txId', 'blockId', 'payload'];
  response: any = [];
  usersResponse: any = [];
  transactionsResponse: any = [];
  showUi = false;
  utility: any;
  roles = [{
    name: 'Admin'
  },
  {
    name: 'Client'
  },
  ]
  users:any=[];
  icon = 'visibility';
  type = "password";

  constructor(private snackBar: MatSnackBar, private apiService: ApiService,) {
    this.utility = new Utility();
    this.apiService.appUserList().subscribe((data: any) => {
      this.users = data;
    });
  }
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.transactionsDataSource.sort = this.sort;
    this.transactionsDataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  tokenInfo(){
    this.apiService.tokenListById().subscribe((response: any) => {
      this.response = response;
      this.dataSource.data = response.data;
      this.showUi = true;
    });
  }
  request: any

  onSubmitUser() {
    this.request = this.appUserForm.value;
    this.request['organizationId'] = 1610;
    this.apiService.appUserSave(this.request).subscribe((response: any) => {
      if (response.status == 0) {
        this.utility.showSnackBar(this.snackBar, 'User Created sucessfully');
        // this.dialogRef.close(response);
        this.appUserForm.reset();
      }
      else {
        this.utility.showSnackBar(this.snackBar, 'User Created Unsucessfully');
        // this.dialogRef.close(response);
      }
    })
  }
  onSubmit() {
    this.request = this.mintForm.value;
    this.apiService.mintSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
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
    // this.request['userId'] = this.userId;
    this.apiService.transferFromSave(this.request).subscribe((response: any) => {
      this.tokenInfo();

      if (response.status == 0) {
        this.snackBar.open("Transfer Form Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Transfer From failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitClientAccountBalance() {
    this.request = this.clientAccountBalanceForm.value;
    // this.request['userId'] = this.userId;
    this.apiService.clientAccountBalanceSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
      if (response.status == 0) {
        this.snackBar.open("Client Account Balance Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Client Account Balance failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitBalanceOff() {
    this.request = this.BalanceOfForm.value;
    // this.request['userId'] = this.userId;
    this.apiService.BalanceOffSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
      if (response.status == 0) {
        this.snackBar.open("Balance Off Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
      }
      else {
        this.snackBar.open("Balance Off failed", "X", { "duration": 3000 });
      }
    })
  }

  onSubmitTransfer() {
    this.request = this.transferForm.value;
    // this.request['userId'] = this.userId;
    this.apiService.transferSave(this.request).subscribe((response: any) => {
      this.tokenInfo();
      if (response.status == 0) {
        this.snackBar.open("Transfer Sucessfully", "X", { "duration": 3000 });
        this.mintForm.reset();
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
  onTabChanged(data:any){
    console.log(data);
    switch(data.index){
      case 0:
        console.log('index 0');
        break;
        case 1:
          console.log('user');
          this.apiService.erc20UsersList().subscribe((response: any) => {
            this.usersResponse = response.list;
            this.userDataSource.data = response.list;
            response.forEach((element: any) => {
              if (element.role === 'Admin') {
                this.users.push(element);
              }
            });
          });
          break;
          case 2:
            this.apiService.transactionsList().subscribe((response: any) => {
              this.transactionsResponse = response;
              this.transactionsDataSource.data = response;
              });
              break;
    }
   
  }

  onSelected(user: any) {
    // if (event.isUserInput) {
      // this.containerRegistryId = cr.containerRegistryId;
      // console.log("event2 : " + cr.containerRegistryId);
    // }
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
}
