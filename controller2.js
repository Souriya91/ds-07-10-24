import { getValues, calculateMensualite, calculateAmortizationSchedule } from './model2.js';
import { renderMensualite, renderAmortizationSchedule } from './view2.js';

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const values = getValues();
            console.log('Values:', values); // Debug log
            const mensualite = calculateMensualite(values);
            console.log('Mensualite:', mensualite); // Debug log
            renderMensualite(mensualite);

            const schedule = calculateAmortizationSchedule(values);
            console.log('Schedule:', schedule); // Debug log
            renderAmortizationSchedule(schedule);
        });
    });

    // Initial calculation
    const values = getValues();
    console.log('Initial Values:', values); // Debug log
    const mensualite = calculateMensualite(values);
    console.log('Initial Mensualite:', mensualite); // Debug log
    renderMensualite(mensualite);

    const schedule = calculateAmortizationSchedule(values);
    console.log('Initial Schedule:', schedule); // Debug log
    renderAmortizationSchedule(schedule);
});