
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CropModalComponent } from '../crop-modal/crop-modal.component';
import { Crop } from 'src/app/model/crop';
import { CropService } from 'src/app/service/crop.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-crop-list',
    templateUrl: './crop-list.component.html',
    styleUrls: ['./crop-list.component.css'],
    
})
export class CropListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
    crops: Crop[] = [];
    paginatedCrops: Crop[] = [];
    filterText: string = '';
    pageSize: number = 10;
    pageSizeOptions: number[] = [5, 10, 25, 50];

    constructor(private http: HttpClient, private dialog: MatDialog, private cropService: CropService) {}

    ngOnInit(): void {
        this.cropService.getCropData().subscribe((crops) => {
            this.crops = crops.data;
            this.updatePageData();
        });
    }

    openModal(crop: any): void {
        const dialogRef = this.dialog.open(CropModalComponent, {
            width: '500px',
            data: { crop },
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('Modal closed with result:', result);
        });
    }

    pageChanged(event: PageEvent): void {
        this.pageSize = event.pageSize;
        this.paginator!.pageIndex = event.pageIndex;
        this.updatePageData();
    }

    updatePageData(): void {
      console.log('Update page data called. Crops:', this.crops);
      const startIndex = this.paginator ? this.paginator.pageIndex * this.pageSize : 0;
      this.paginatedCrops = this.crops?.slice(startIndex, startIndex + this.pageSize) || [];
      console.log('Paginated crops:', this.paginatedCrops);
    }
    
}

