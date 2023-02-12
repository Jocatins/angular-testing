import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductComponent } from './create-product.component';

describe('CreateProductComponent', () => {
  // ---------------- Arrange ----------------------->
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(async(() => {
    // configure testing module , import components, providers
    TestBed.configureTestingModule({
      // TestBed.configureTestingModule method to set up a module environment
      // It is an NgModule class

      declarations: [CreateProductComponent],
      providers: [],
      imports: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    // TestBed can be used to create components (CreateProductComponent).
    // It gives you a fixture
    // Basically a fixture is a wrapper.
    // Using fixture we can access the components class properties as well as template elt
    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // -------------------------------------------------
  // Act
  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });
});
