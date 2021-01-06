import Axios from 'axios';
import { SkillDto } from "../interfaces";

export default (skills: SkillDto[]) => {
  return Axios.post(`https://revolutionuc-api.herokuapp.com/api/v2/lattice/skills`, skills);
};