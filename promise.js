// imituje jakąś funkcję asynchroniczną pobierającą dane albo np metodę jakiegoś servisu
const fethcDataFromAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("dokonało się");
      reject("wiadomość");
    }, 800);
  });
};

// akcja ze stora np (zwracamy rejected promise w catch aby można było w fetchData również przejść do catch jeśli jest błąd)
const fetching = async () => {
  try {
    await fethcDataFromAPI(); // fetch do jakiegoś API
  } catch (err) {
    console.log({ getUserDataERR: err });
    console.log("blad w fetching");
    return new Promise((res, rej) => rej(err)); // dzięki temu że tutaj zwracamy rejected promise to mamy do niego dostep w handleSubmit
  }
};

const handleSubmit = async () => {
  try {
    await fetching(); // np dispatch(fetching())

    console.log("po fetchu");
  } catch (err) {
    console.log({ fetchDataERR: err });
    console.log("bład");
  }
};

handleSubmit();
