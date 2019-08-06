import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSnippetComponent } from './product-snippet.component';

describe('ProductComponent', () => {
  let component: ProductSnippetComponent;
  let fixture: ComponentFixture<ProductSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSnippetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
