import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AssetDialogComponent } from './asset-dialog/asset-dialog.component';
import { URLS } from './urls';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/api-service';
import { TransferFromComponent } from './transfer-from/transfer-from.component';
import { BurnDialogComponent } from './burn-dialog/burn-dialog.component';
import { TransferDialogComponent } from './transfer-dialog/transfer-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort!: MatSort ;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource = new MatTableDataSource();
  title = 'frontend';
  assets = [];
  tokenColumns: string[] = ['id', 'name', 'symbol', 'type', 'created'];
  response: any = [];
  showUi = false;

  constructor(private _http: HttpClient, private dialog: MatDialog,private snackBar:MatSnackBar, private activatedRoute: ActivatedRoute,
    private apiService: ApiService) {
    
    this.activatedRoute.params.subscribe(params => {
      // this.tokenId = params['id'];
      // this.tokenName = params['name'];
      this.apiService.tokenListById(11).subscribe((response: any) => {
        this.response = response;
        this.dataSource.data = response.data;
        console.log("token list : " + this.dataSource.data);
        this.showUi = true;
      });

    });
    
  }
  ngOnInit() {
    
 }
  editRow(asset:any,index:number){
    const dialogRef = this.dialog.open(AssetDialogComponent, {
      width: '500px', height: '100vh',position:{right:'0'},data:asset

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data[index]=(result)
        this.dataSource._updateChangeSubscription();
      }
    });
  }
  // delete(asset:any,index:number){
  //   this._http.post<any>(URLS.DELETE,JSON.stringify({"id":asset.ID}),this.httpOptions).subscribe((data:any) => {
  //     console.log(data);
  //     this.dataSource.data.splice(index,1)
  //     this.dataSource._updateChangeSubscription();
  //     this.snackBar.open(asset.ID+ ' deleted', '', {duration:1000
  //     });
  //      })
  // }
  addNewAsset(){
    const dialogRef = this.dialog.open(AssetDialogComponent, {
      width: '500px', height: '100vh',position:{right:'0'},

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data.push(result)
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  transferFromSave() {
    // if (this.utility.getUserProfile().role===0) {
    //   this.utility.showSnackBar(this.snackBar, " Deployments are not allowed for the test app")
    //   return;
    // }
    const dialogRef = this.dialog.open(TransferFromComponent, {
      width: '40vw', position: { right: '0' }, height: '100vh', autoFocus: false, data: { }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  transferSave() {
    const dialogRef = this.dialog.open(TransferDialogComponent, {
      width: '40vw', position: { right: '0' }, height: '100vh', autoFocus: false, data: { }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  burnSave() {
    const dialogRef = this.dialog.open(BurnDialogComponent, {
      width: '40vw', position: { right: '0' }, height: '100vh', autoFocus: false, data: { }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }
   ngAfterViewInit() {
    console.log('after ininti');
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
