import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Clients} from '../../../../auth/models/clients';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-client-detail-modal',
  standalone: true,
  imports: [MatButtonModule, DatePipe, NgIf],
  templateUrl: './client-detail-modal.component.html',
  styleUrls: ['./client-detail-modal.component.css']
})
export class ClientDetailModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ClientDetailModalComponent>,
    @Inject(MAT_DIALOG_DATA) public client: Clients
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
