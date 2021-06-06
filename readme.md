```
const fetching = async () => {
  try {
    await fethcDataFromAPI(); // fetch do jakiegoś API
  } catch (err) {
    return new Promise((res, rej) => rej(err)); // dzięki temu że tutaj zwracamy rejected promise to mamy do niego dostep w handleSubmit
  }
};


const handleSubmit = async () => {
  try {
    await fetching(); // np dispatch(fetching())


  } catch (err) {
    console.log({ fetchDataERR: err });
  }
}

```
