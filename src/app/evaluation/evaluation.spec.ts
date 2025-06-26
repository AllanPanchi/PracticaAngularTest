import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { Evaluation } from './evaluation'; // Asegúrate de que este sea el nombre correcto de tu componente

describe('Evaluation', () => { // Cambia el nombre de la suite si tu componente se llama diferente
  let component: Evaluation; // Tipo correcto para el componente
  let fixture: ComponentFixture<Evaluation>; // Tipo correcto para el fixture

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       // Declara tu componente aquí
      imports: [Evaluation, FormsModule] // Importa FormsModule si usas ngModel
    })
      .compileComponents();

    fixture = TestBed.createComponent(Evaluation);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the "nombre" input value to "Su Nombre"', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#nombre');
    inputElement.value = 'Su Nombre';
    inputElement.dispatchEvent(new Event('input')); // Simula el evento input
    fixture.detectChanges(); // Actualiza el fixture para reflejar los cambios en el DOM
    expect(component.nombre).toBe('Su Nombre');
  });

  // 2. Prueba con .toBeLessThan
  it('should verify that nota1 is less than nota2', () => {
    component.nota1 = 15;
    component.nota2 = 20;
    fixture.detectChanges();
    expect(component.nota1).toBeLessThan(component.nota2);
  });

  // 3. Prueba con .toMatch
  it('should verify that the textarea content includes "Universidad de las Fuerzas Armadas ESPE"', () => {
    const textarea: HTMLTextAreaElement = fixture.nativeElement.querySelector('#comentarios');
    textarea.value = 'Información general de la Universidad de las Fuerzas Armadas ESPE para la evaluación.';
    textarea.dispatchEvent(new Event('input')); // Simula el evento input
    fixture.detectChanges(); // Actualiza el fixture para reflejar los cambios en el DOM
    expect(component.comentarios).toMatch(/Universidad de las Fuerzas Armadas ESPE/);
  });

  // 4. Prueba con .toBeTruthy
  it('should verify that the dado() function returns false for an odd number', () => {
    // Mockea Math.random para controlar el resultado de dado()
    spyOn(Math, 'random').and.returnValue(0.1); // Esto hará que randomNumber sea 1 o 2, forzando un número par para la prueba (Math.floor(0.1 * 6) + 1 = 1)
    expect(component.dado()).toBeFalsy(); // 1 es impar, así que debe ser false
  });

  it('should verify that the dado() function returns true for an even number', () => {
    spyOn(Math, 'random').and.returnValue(0.3); // Esto hará que randomNumber sea 2 (Math.floor(0.3 * 6) + 1 = 2)
    expect(component.dado()).toBeTruthy(); // 2 es par, así que debe ser true
  });

  // 5. Prueba con .toContain
  it('should verify that the h1 header contains "Evaluación Segundo Parcial"', () => {
    const h1Element: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(h1Element.textContent).toContain('Evaluación Segundo Parcial');
  });
});