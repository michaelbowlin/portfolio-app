import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UxPage } from './ux.page';

describe('UxPage', () => {
  let component: UxPage;
  let fixture: ComponentFixture<UxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UxPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
