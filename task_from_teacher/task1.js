"use strict"

/*1. Написать метод защиты email (например для не залогиненых пользователей)
Синтаксис: protect_email(email: string, replacer: string = '*' ): string
Пример: console.log(protect_email("robin_singh@example.com"));*/ // r***@***e.com
const protectEmail = (email, replacer) => email.replaceAll(/[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}][^com$]/gumi, replacer);

console.log(protectEmail("robin_singh@example.com", "#"));