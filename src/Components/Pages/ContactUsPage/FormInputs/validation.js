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

  if (!email || !email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
    labelEmail.current.classList.add("error");
  }

  if (
    !emailConfirm ||
    !emailConfirm.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) ||
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

  if (email && email.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
    labelEmail.current.classList.remove("error");
  }

  if (
    emailConfirm &&
    emailConfirm.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/) &&
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
