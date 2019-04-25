import { Component, OnInit, Inject } from '@angular/core'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog-forgot-password',
  templateUrl: './dialog-forgot-password.component.html',
  styleUrls: ['./dialog-forgot-password.component.css']
})
export class DialogForgotPasswordComponent implements OnInit {
  formRecovery: FormGroup

  constructor(
    public dialogRef: MatDialogRef<DialogForgotPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.formRecovery = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  save() {
    if (this.formRecovery.valid)
      this.dialogRef.close(this.formRecovery.controls.email.value)
  }

  close() {
    this.dialogRef.close()
  }
}
