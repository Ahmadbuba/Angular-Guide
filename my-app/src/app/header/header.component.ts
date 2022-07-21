import { Component, EventEmitter, Output } from "@angular/core";

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() switcher = new EventEmitter<boolean>();
    showRecipes() {
        this.switcher.emit(true);
    }

    showShoppingList() {
        this.switcher.emit(false);
    }
}