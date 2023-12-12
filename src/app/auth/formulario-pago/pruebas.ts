this.formulario = this.formBuilder.group({
    ambiente: ['', Validators.required],
    cantidad: ['', [Validators.required, Validators.pattern('^[0-9]*$'), this.cantidadValidator()]]
  });
  
  cantidadValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let cantidadMaxima = 0;
      switch (this.formulario.get('ambiente').value) {
        case 'japon':
          cantidadMaxima = 150;
          break;
        case 'peru':
          cantidadMaxima = 100;
          break;
        case 'italia':
          cantidadMaxima = 115;
          break;
      }
      const forbidden = control.value > cantidadMaxima;
      return forbidden ? {cantidadExcedida: {value: control.value}} : null;
    };
  }
  