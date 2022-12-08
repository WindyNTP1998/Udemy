import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Name 1', 'Description 1', 'https://img3.thuthuatphanmem.vn/uploads/2019/10/10/anh-avatar-doremon_033145784.png'),
		new Recipe('Name 2', 'Description 2', 'https://i.pinimg.com/474x/db/fb/36/dbfb369ad0c7688ddf7db1bf31998b87.jpg')
	];

	public ngOnInit(): void {
	}

}