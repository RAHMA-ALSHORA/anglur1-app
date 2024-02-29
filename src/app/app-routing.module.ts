import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DefoltComponent } from './defolt/defolt.component';

const routes: Routes = [
  {path:'', redirectTo:'defolt', pathMatch:'full'},
  {path:'defolt', component:DefoltComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'footer', component:FooterComponent},
  {path:'portfolio', component:PortfolioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
