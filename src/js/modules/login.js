const login = () => {
  const container = document.querySelector(".login");
  if (!container) return;
  const submit = container.querySelector(".submit");
  const personalizationCheckbox = container.querySelector("#checkbox1");
  const activityCheckbox = container.querySelector("#checkbox2");
  const codeInput = document.getElementById("code");

  if (personalizationCheckbox && activityCheckbox && codeInput) {
    let personalization = personalizationCheckbox.checked;
    let activity = activityCheckbox.checked;
    let code = codeInput.value;

    const checkAllValues = () => {
      let checkboxesChecked =
        personalizationCheckbox.checked && activityCheckbox.checked;
      let codeValid = code.length === 6;

      if (checkboxesChecked && codeValid) {
        submit.removeAttribute("disabled");
        submit.classList.remove("disabled");
      } else {
        submit.setAttribute("disabled", "disabled");
        submit.classList.add("disabled");
      }
    };

    personalizationCheckbox.addEventListener("change", () => {
      personalization = personalizationCheckbox.checked;
      checkAllValues();
    });

    activityCheckbox.addEventListener("change", () => {
      activity = activityCheckbox.checked;
      checkAllValues();
    });

    codeInput.addEventListener("input", (e) => {
      const value = e.target.value;
      if (value.length > 6) {
        e.target.value = value.slice(0, 6);
      }
      code = e.target.value;
      checkAllValues();
    });
  }
};

export default login;
