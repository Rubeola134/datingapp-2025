import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  constructor() {
    this.createToastConatiner();
  }
  private createToastConatiner(){
    if (!document.getElementById('toast-container')){
      const container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast toast-buttom toast-end';
      document.body.appendChild(container);
    }
  }

  private createToastElements(message: string, alertClass: string, duration = 5000){
    const toastContainer = document.getElementById('toast-container');
    if(!toastContainer) return;

    const toast = document.createElement('div');
    toast.classList.add('alert', alertClass, 'shadow-lg');
    toast.innerHTML = `
    <span>${message}</span>
    <button class="mnl-4 btn btn-sm btn-ghost">x</button>
    `

    toast.querySelector('button')?.addEventListener('click', () => {
      toastContainer.removeChild(toast);
    })

    toastContainer.append(toast);

    setTimeout(() => {
      if (toastContainer.contains(toast)){
        toastContainer.removeChild(toast);
      }
    }, duration);
  }


  success(message: string, duration?: number){
    this.createToastElements(message, 'alert-success', duration);
  }
  error(message: string, duration?: number){
    this.createToastElements(message, 'alert-error', duration);
  }
  warning(message: string, duration?: number){
    this.createToastElements(message, 'alert-warning', duration);
  }
  info(message: string, duration?: number){
    this.createToastElements(message, 'alert-info', duration);
  }
}
