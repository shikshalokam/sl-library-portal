import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { PasswordComponent } from './components/password/password.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { DebounceDirective } from './directives/debounceDirective.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  declarations: [DebounceDirective, DynamicFieldDirective,
    InputComponent, SelectComponent, RadiobuttonComponent, DynamicFormComponent,
    CheckboxComponent, MultiSelectComponent, DateComponent, PasswordComponent,
    TextAreaComponent, AutoCompleteComponent,
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    BrowserModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonToggleModule
  ],
  exports: [
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    BrowserModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    DynamicFormComponent,
    DebounceDirective,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    InputComponent,
    AutoCompleteComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    PasswordComponent,
    CheckboxComponent,
    MultiSelectComponent,
    TextAreaComponent,
  ]
})
export class PortalSharedModule { }
