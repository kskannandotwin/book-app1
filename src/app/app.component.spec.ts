import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'book-app1' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('book-app1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, book-app1'
    );
  });

  it('#clicked() should toggle #isClicked', () => {
    const comp = new AppComponent();
    expect(comp.isClicked).toBe(false, 'off at first');
    comp.clicked();
    expect(comp.isClicked).toBe(true, 'on after click');
    comp.clicked();
    expect(comp.isClicked).toBe(false, 'off after second click');
  });
});
