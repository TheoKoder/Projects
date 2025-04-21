import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NavNode } from '../../components/tree-view/tree-view.component';
import { MatSidenav } from '@angular/material/sidenav';
import { images } from '../../constants/images';
import { BreakpointObserver } from '@angular/cdk/layout';

 const TREE_DATA: NavNode[] = [
  {
    name: 'Home',route: '/assets'
  },
  { name:'Laptop',route:'/laptopList'},
  {
    name:'Laptop Tags',
    children:[
      {
        name:'Tagging',
        children:[
          {
            name:'Add Tag',route:'/tagging'
          },
          {
            name:'Validate Tag',route:'/taggingValidation'
          },
        ]
      },
      {
        name:'Insert/update Laptop',
        children:[
          {
            name:'Update Laptop',route:'/laptoplistC'
          },
          {
            name:'Insert Laptop',route:'/insertTag'
          }
        ]
      },
     ],
  },
  {
    name: 'Automations',
    children: [
      { name: 'Automations', route: '/automations' },
      { name: 'Control Zone', route: '/control-zones' },
    ]
  },
  {
    name:'Reports',
    children:[
      { name: 'Device Daily Report', route: '/DeviceDailyReport' },
      { name: 'Device Daily Location Report', route: '/DeviceDailyExceptionReport' },
      { name: 'Missing Laptops',route:'/laptopListMissing'},
      { name: 'All Device Missing Reports', route: '/AllReports' },
    ]
  },
  { name:'Logout',route:'/logout'}
];
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
    @ViewChild(MatSidenav) SideNav!: MatSidenav;
   image=images;
    treeData: NavNode[] = TREE_DATA;
  
    constructor(private Obv: BreakpointObserver, private cdRef: ChangeDetectorRef){
  
      console.log("Observer is working");
    }
    ngOnInit() {
      console.log("Home menu nginit");
    }
    ngAfterViewInit():void{
      this.Obv.observe(['(max-width: 800px)']).subscribe((res)=>{
       if(res.matches){
         this.SideNav.mode='over';
         this.SideNav.close();
       }
       else{
       this.SideNav.mode='side';
       this.SideNav.open();
     }
     console.log('Responsive mode: ', res.matches);
     this.cdRef.detectChanges();
      })
    }
    
  
  }