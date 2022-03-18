import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetYourHomeInspectedPage } from './get-your-home-inspected.page';

describe('GetYourHomeInspectedPage', () => {
  let component: GetYourHomeInspectedPage;
  let fixture: ComponentFixture<GetYourHomeInspectedPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GetYourHomeInspectedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetYourHomeInspectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
