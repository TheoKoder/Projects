import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
//INPUT FIELDS
  it('should render a login input field', () => {
    const loginInput = fixture.debugElement.query(By.css('input[name="login"]'));
    expect(loginInput).toBeTruthy();
  });
  //SUBMIT REDIRECT FUNCTIONALITY
  it('should navigate to /asset on successful login', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = spyOn(router, 'navigate');
  
    component.loginForm.setValue({ login: 'user', password: 'pass' });
    component.onSubmit();
  
    expect(navigateSpy).toHaveBeenCalledWith(['/asset']);
  });
//SUBMIT FUNCTION
  it('should call onSubmit when form is submitted', () => {
    spyOn(component, 'onSubmit');
    component.loginForm.setValue({ login: 'user1', password: 'secret' });
    fixture.detectChanges();
  
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.onSubmit).toHaveBeenCalled();
  });
  //SUBMIT BUTTON FUNCTIONALLY
  it('should enable submit button when form is valid', () => {
    component.loginForm.setValue({ login: 'user1', password: 'secret' });
    fixture.detectChanges();
  
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeFalse();
  });
  //PASSWORD HIDDEN BUTTON
  it('should toggle hide when icon is clicked', () => {
    component.hide = true;
    fixture.detectChanges();
  
    const icon = fixture.nativeElement.querySelector('mat-icon');
    icon.click();
    fixture.detectChanges();
  
    expect(component.hide).toBeFalse();
  });
//TEST ERROR MESSAGE
  it('should show error message when login is dirty and invalid', () => {
    const loginInput = component.loginForm.get('login');
    loginInput?.setValue('');
    loginInput?.markAsDirty();
    fixture.detectChanges();
  
    const errorEl = fixture.nativeElement.querySelector('.login-error .error-message');
    expect(errorEl).toBeTruthy();
    expect(errorEl.textContent).toContain('Login is required');
  });
  
  
});
