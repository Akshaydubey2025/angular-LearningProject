import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CheckIcon } from 'primeng/icons/check';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableModule, CheckIcon  ,  CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  staffSkillset = [
    { team: 'Team A', officer: 'WC1 Officer1', role: 'S&E', skill001: true, skill002: false, skill003: false, skill004: false, skill005: false, skill006: false },
    { team: 'Team A', officer: 'WC1 Officer2', role: 'AC', skill001: false, skill002: false, skill003: true, skill004: false, skill005: false, skill006: false },
    { team: 'Team A', officer: 'WC1 Officer3', role: 'A&I', skill001: false, skill002: true, skill003: false, skill004: false, skill005: false, skill006: false },
    { team: 'Team A', officer: 'WC1 Officer4', role: 'SAC', skill001: true, skill002: false, skill003: false, skill004: true, skill005: false, skill006: false },
    { team: 'Team A', officer: 'WC1 Officer5', role: 'GL', skill001: false, skill002: false, skill003: false, skill004: false, skill005: true, skill006: false },
    { team: 'Team A', officer: 'WC1 Officer6', role: 'AC', skill001: false, skill002: false, skill003: false, skill004: false, skill005: false, skill006: true },
    { team: 'Team A', officer: 'WC1 Officer7', role: 'AC', skill001: false, skill002: true, skill003: false, skill004: false, skill005: false, skill006: false },
    { team: 'Team A', officer: 'WC1 Officer8', role: 'AC', skill001: false, skill002: false, skill003: false, skill004: false, skill005: false, skill006: false },
  ];
}
