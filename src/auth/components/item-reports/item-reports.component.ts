import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';
import { CurrencyPipe } from '@angular/common';
import { Report } from '../../models/reports';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import {NavBarComponent} from '../../../shared/components/nav-bar/nav-bar.component';

//registrar chart components
Chart.register(...registerables);

@Component({
  selector: 'app-item-reports',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatIconModule,
    TranslatePipe,
    CurrencyPipe,
    NavBarComponent
  ],
  templateUrl: './item-reports.component.html',
  styleUrl: './item-reports.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemReportsComponent implements OnInit {
  @Input() reports!: Report[];
  @ViewChild('salesChart', { static: true }) salesChartRef!: ElementRef<HTMLCanvasElement>;

  private chart!: Chart;

  // Datos del dashboard
  dashboardData = {
    salesByDay: [180, 150, 280, 320, 250, 380, 420],
    totalAmount: 1250.00,
    totalTransactions: 60,
    topProducts: [
      { name: 'Producto A', sales: 120 },
      { name: 'Producto B', sales: 150 },
      { name: 'Producto C', sales: 30 }
    ],
    lowProducts: [
      { name: 'Producto D', sales: 15 },
      { name: 'Producto E', sales: 25 },
      { name: 'Producto F', sales: 35 }
    ],
    totalInventory: 350
  };

  ngOnInit(): void {
    this.createChart();
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  private createChart(): void {
    const ctx = this.salesChartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        datasets: [{
          data: this.dashboardData.salesByDay,
          backgroundColor: '#3498db',
          borderRadius: 4,
          borderSkipped: false,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: '#ecf0f1'
            },
            ticks: {
              color: '#7f8c8d'
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: '#7f8c8d'
            }
          }
        }
      }
    };

    this.chart = new Chart(ctx, config);
  }

  downloadPDF(): void {
    console.log('Descargando reporte PDF...');

    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,Reporte de Inventario - Ejemplo';
    link.download = `reporte_inventario_${new Date().toISOString().split('T')[0]}.txt`;
    link.click();
  }

  updateDashboard(data: any): void {
    this.dashboardData = { ...this.dashboardData, ...data };

    if (this.chart) {
      this.chart.data.datasets[0].data = this.dashboardData.salesByDay;
      this.chart.update();
    }
  }
}
