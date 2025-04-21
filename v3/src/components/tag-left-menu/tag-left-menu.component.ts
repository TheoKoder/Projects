 import { Component } from '@angular/core';
 import { NavNode} from '../tree-view/tree-view.component';

const TREE_DATA: NavNode[] = [
  {name: 'Home', route: '/asset' },
  //{name: 'Asset', route: '/items'},
  {
    name: 'Tagging',
    children: [
      {name: 'Add Tag', route: '/add/tag'},
      //{name: 'Validate Tag', route: '/validate/tag'}
    ]
  },
  {
    name: 'Insert/Update Asset',
    children: [
      {name: 'Insert Asset', route: '/create/item'},
      {name: 'Update Asset', route: '/update/item'}
    ]
  },
  { name: 'Reports',
    children: [
      {name: 'Master Asset Report', route: '/inventory/report'},
      {name: 'Asset Area Report', route: '/asset/area/report'},
      // {name: 'Asset Location Report', route: '/asset/movement/report'},
      {name: 'Gates Report', route: '/gate/report'},
    ]
  },
  {
    name: 'Other',
    children: [
      {name: 'Tag Asset Report', children: [
        {name: 'Tagged Asset', route: '/tagged/items'},
        {name: 'Untagged Asset', route: '/untagged/items'}
      ]},
      {name: 'Entry/Exit Report', route: '/gate/report'},
    ]

  },
  { name:'Logout',route:'/logout'}
];

@Component({
  selector: 'app-tag-left-menu',
  standalone: false,
  templateUrl: './tag-left-menu.component.html',
  styleUrls: ['./tag-left-menu.component.scss'],
  //imports: [TreeViewComponent]
})
export class TagLeftMenuComponent {
  
  treeData: NavNode[] = TREE_DATA;
}
