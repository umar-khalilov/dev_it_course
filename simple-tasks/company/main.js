import { Company } from './Company.js';

const devIt = new Company('DevIT', 'ул.Северное шоссе № 4');
devIt.addBoss('Taras', 'Prokofiev', 30, '23r232', 'test3@mail.com', 1e4, 'Senior');
devIt.addBoss('Vyacheslav', 'Badayev', 30, '2424224', 'test@gmail.com', 1e4, 'Team Lead');
devIt.addManager('Anna', 'Valman', 27, '32424', 'test2@gmail.com', 1e4, 'PM', 'Sales');
devIt.addProgrammer('Umar', 'Khalilov', 27, '23423242', 'ERMASTER100@gmail.com', 500, 'JS developer');
devIt.addSecurity('Vlad', 'Antipenko', 25, '4242424', 'test3@gmail.com', 500, 'Security');

window.devIt = devIt;
window.Company = Company;
