import { Component } from '@angular/core';
import { Sale } from '../../services/sales/sales.model';
import { SalesService } from '../../services/sales/sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales-page.component.html',
})
export class SalesPageComponent {
  sales!: Sale[];

  isDialogVisible = false;

  selectedSale!: Partial<Sale>;

  salesCount = 0;
  constructor(
    private readonly _salesService: SalesService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.fetchIngredients();
  }

  onRowClick(sale: Sale) {
    this._router.navigate(['sales', 'details'], {
      queryParams: { saleId: sale?.id },
    });
  }

  onAddClick() {
    this.isDialogVisible = true;
    this.selectedSale = {};
  }

  onSaveClick(sale: Sale) {
    this.isDialogVisible = false;
    !sale.id &&
      this._salesService
        .createSale({
          ...sale,
        })
        .subscribe(() => this.fetchIngredients());
  }

  onDeleteClick(sale: Sale) {
    this._salesService
      .deleteSale(sale.id)
      .subscribe(() => this.fetchIngredients());
  }

  fetchIngredients() {
    this._salesService.getAllSales().subscribe((sales) => {
      this.sales = sales;
      this.salesCount = sales?.length;
    });
  }
}
