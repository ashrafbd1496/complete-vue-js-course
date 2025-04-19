const { createApp, reactive, computed } = Vue;

const DEFAULT_STATE = {
  state: true,
  names: [],
  inputName: "",
  error: "",
  showError: false,
  result: "",
  remainingNames: [],
};

createApp({
  setup() {
    const data = reactive({ ...DEFAULT_STATE });
    //computed
    const isReady = computed(() => {
      return data.names.length > 1;
    });

    //methods
    const addNameToList = () => {
      const userName = data.inputName.trim();
      if (validate(userName)) {
        data.names.push(userName);
        data.remainingNames.push(userName); // 👈 Also add here
        data.inputName = "";
        data.showError = false;
      } else {
        data.showError = true;
      }
    };

    const validate = (value) => {
      data.error = "";
      if (value === "") {
        data.error = "Sorry , no empty name";
        return false;
      }
      if (data.names.includes(value)) {
        data.error = "Sorry, names must be unique";
        return false;
      }
      return true;
    };

    const removeName = (index) => {
      const name = data.names[index];
      data.names.splice(index, 1);

      const rIndex = data.remainingNames.indexOf(name);
      if (rIndex !== -1) {
        data.remainingNames.splice(rIndex, 1);
      }
    };

    const getRandomName = () => {
      if (data.remainingNames.length === 0) {
        data.error = "No more names to draw!";
        return null;
      }

      const randIndex = Math.floor(Math.random() * data.remainingNames.length);
      const name = data.remainingNames[randIndex];

      // remove it from remaining
      data.remainingNames.splice(randIndex, 1);

      return name;
    };

    const generateResults = () => {
      const rand = getRandomName();
      if (rand) {
        data.result = rand;
      } else {
        data.result = "";
      }
    };

    const showResults = () => {
      generateResults();
      data.state = false;
    };

    const resetApp = () => {
      Object.assign(data, JSON.parse(JSON.stringify(DEFAULT_STATE)));
    };

    const getNewResult = () => {
      generateResults();
    };
    return {
      data,
      addNameToList,
      removeName,
      validate,
      isReady,
      showResults,
      resetApp,
      getNewResult,
    };
  },
}).mount("#app");
