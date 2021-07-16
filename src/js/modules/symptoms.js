const symptomItems = document.querySelectorAll('.item-symptoms[data-symptom-type]');
const symptomMarkers = document.querySelectorAll('.symptoms__marker-item');

const showSymptomMarker = () => {
  if (!symptomItems && !symptomMarkers) {
    return;
  }

  let currentSymptomMarker = null;

  symptomItems.forEach((symptom) => {
    symptom.addEventListener('mouseover', () => {
      symptom.classList.add('item-symptoms--active');

      let symptomType = symptom.dataset.symptomType;

      currentSymptomMarker = document.querySelector(`.symptoms__marker-item[data-symptom-type="${symptomType}"]`);
      currentSymptomMarker.classList.add('symptoms__marker-item--active');
    });

    symptom.addEventListener('mouseleave', () => {
      symptom.classList.remove('item-symptoms--active');

      symptomMarkers.forEach((marker) => {
        marker.classList.remove('symptoms__marker-item--active');
      });
    });
  });
};

export {showSymptomMarker};
