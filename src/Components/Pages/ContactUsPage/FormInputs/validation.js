const emailCheckRexExp = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

export const validationSuccess = (form) => {
  const { issue, name, surname, email, emailConfirm, date, time, message } =
    form;

  const success =
    issue &&
    name &&
    surname &&
    email &&
    emailConfirm &&
    date &&
    time &&
    message &&
    issue !== "- Select the issue -" &&
    email.match(emailCheckRexExp) &&
    emailConfirm.match(emailCheckRexExp) &&
    email === emailConfirm;

  return success;
};

export const validateInputs = (form, refs) => {
  const { issue, name, surname, email, emailConfirm, date, time, message } =
    form;

  const [
    labelIssue,
    labelName,
    labelSurname,
    labelEmail,
    labelEmailConfirm,
    labelDate,
    labelTime,
    labelMessage,
  ] = refs;

  if (!issue || issue === "- Select the issue -") {
    labelIssue.current.classList.add("error");
  }
  if (!name) {
    labelName.current.classList.add("error");
  }

  if (!surname) {
    labelSurname.current.classList.add("error");
  }

  if (!email || !email.match(emailCheckRexExp)) {
    labelEmail.current.classList.add("error");
  }

  if (
    !emailConfirm ||
    !emailConfirm.match(emailCheckRexExp) ||
    email !== emailConfirm
  ) {
    labelEmailConfirm.current.classList.add("error");
  }

  if (!date) {
    labelDate.current.classList.add("error");
  }

  if (!time) {
    labelTime.current.classList.add("error");
  }

  if (!message) {
    labelMessage.current.classList.add("error");
  }

  return validationSuccess(form);
};

export const checkInputsChange = (form, refs) => {
  const { issue, name, surname, email, emailConfirm, date, time, message } =
    form;

  const [
    labelIssue,
    labelName,
    labelSurname,
    labelEmail,
    labelEmailConfirm,
    labelDate,
    labelTime,
    labelMessage,
  ] = refs;

  if (issue || !issue === "- Select the issue -") {
    labelIssue.current.classList.remove("error");
  }

  if (name) {
    labelName.current.classList.remove("error");
  }

  if (surname) {
    labelSurname.current.classList.remove("error");
  }

  if (email && email.match(emailCheckRexExp)) {
    labelEmail.current.classList.remove("error");
  }

  if (
    emailConfirm &&
    emailConfirm.match(emailCheckRexExp) &&
    email === emailConfirm
  ) {
    labelEmailConfirm.current.classList.remove("error");
  }

  if (date) {
    labelDate.current.classList.remove("error");
  }

  if (time) {
    labelTime.current.classList.remove("error");
  }

  if (message) {
    labelMessage.current.classList.remove("error");
  }
};

export const showError = (form, refs) => {
  const { issue, name, surname, email, emailConfirm, date, time, message } =
    form;
  const [
    labelIssue,
    labelName,
    labelSurname,
    labelEmail,
    labelEmailConfirm,
    labelDate,
    labelTime,
    labelMessage,
  ] = refs;

  if (!issue || issue === "- Select the issue -") {
    labelIssue.current.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!name) {
    labelName.current.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!surname) {
    labelSurname.current.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!email || !email.match(emailCheckRexExp)) {
    labelEmail.current.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (
    !emailConfirm ||
    !emailConfirm.match(emailCheckRexExp) ||
    email !== emailConfirm
  ) {
    labelEmailConfirm.current.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!date) {
    labelDate.current.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!time) {
    labelTime.current.scrollIntoView({ behavior: "smooth" });
    return;
  }

  if (!message) {
    labelMessage.current.scrollIntoView({ behavior: "smooth" });
    return;
  }
};
