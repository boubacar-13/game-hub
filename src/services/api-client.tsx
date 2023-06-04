import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "394841bf90ba47938a69683ceee4435e",
  },
});
