import { Component, HostListener, AfterViewInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  showModal = false;
  menuOpen = false;
  formSubmitted: boolean = false;

  ngAfterViewInit() {
    this.addVisibleClassToElements();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.addVisibleClassToElements();
  }

  private addVisibleClassToElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el: Element) => {
      const element = el as HTMLElement;
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 50) {
        element.classList.add('visible');
      }
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router)  {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  onSubscribe() {
    const emailInput = document.querySelector('.section--subscribe--main--info--action-inputandbutton input') as HTMLInputElement;
    const email = emailInput.value.trim();

    if (!email) {
      alert('Введите email!');
      return;
    }

    const token = '7677337686:AAGrAx3rAbbnc5s-EUlg1aEUSAg36FpFehk';
    const chatId = '932437551';
    const message = `Новая подписка: ${email}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    this.http.post(url, {
      chat_id: chatId,
      text: message
    }).subscribe(response => {
      console.log('Email отправлен в Telegram:', response);
      emailInput.value = ''; // Очищаем поле после отправки
    }, error => {
      console.error('Ошибка отправки в Telegram:', error);
    });
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  }

  sendToTelegram(formData: any) {
    const token = '7677337686:AAGrAx3rAbbnc5s-EUlg1aEUSAg36FpFehk';
    const chatId = '932437551';
    const message = `
      Новый запрос:
      Имя: ${formData.name}
      Фамилия: ${formData.surname}
      Email: ${formData.email}
      Телефон: ${formData.phone}
    `;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    this.http.post(url, {
      chat_id: chatId,
      text: message
    }).subscribe(response => {
      console.log('Сообщение отправлено в Telegram:', response);
    }, error => {
      console.error('Ошибка отправки в Telegram:', error);
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.sendToTelegram(this.contactForm.value);
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
