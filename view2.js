export function renderMensualite(mensualite) {
    const table = document.getElementById('inputMensualite');
    table.innerHTML = `
        <tr>
            <th>Mensualité</th>
            <td>${mensualite.toFixed(2)} €</td>
        </tr>
    `;
}

export function renderAmortizationSchedule(schedule) {
    const table = document.getElementById('inputMensualite');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Mois</th>
                <th>Mensualité</th>
                <th>Intérêt</th>
                <th>Capital Amorti</th>
                <th>Capital Restant</th>
            </tr>
        </thead>
        <tbody>
            ${schedule.map((row, index) => `
                ${index > 0 && index % 12 === 0 ? '<tr class="year-separator"><td colspan="5"></td></tr>' : ''}
                <tr>
                    <td>${row.mois}</td>
                    <td>${row.mensualite.toFixed(2)} €</td>
                    <td>${row.interest.toFixed(2)} €</td>
                    <td>${row.capitalAmorti.toFixed(2)} €</td>
                    <td>${row.remainingCapital.toFixed(2)} €</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}