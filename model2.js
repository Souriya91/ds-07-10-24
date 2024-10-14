export function getValues() {
  const montant = parseFloat(document.getElementById('inputMontant').value);
  const annee = parseInt(document.getElementById('inputAnnee').value);
  const taux = parseFloat(document.getElementById('inputTaux').value);
  return { montant, annee, taux };
}

export function calculateMensualite({ montant, annee, taux }) {
  const mensualite = (montant * taux / 100) / 12 / (1 - Math.pow(1 + taux / 100 / 12, -annee * 12));
  return mensualite;
}

export function calculateAmortizationSchedule({ montant, annee, taux }) {
  const mensualite = calculateMensualite({ montant, annee, taux });
  const schedule = [];
  let remainingCapital = montant;

  for (let i = 0; i < annee * 12; i++) {
      const interest = remainingCapital * taux / 100 / 12;
      const capitalAmorti = mensualite - interest;
      remainingCapital -= capitalAmorti;
      schedule.push({
          mois: i + 1,
          mensualite: mensualite,
          interest: interest,
          capitalAmorti: capitalAmorti,
          remainingCapital: remainingCapital
      });
  }

  return schedule;
}