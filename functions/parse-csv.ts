// import csvToJson from 'csvjson-csv2json/csv2json';
import { SkillDto } from '../interfaces';

const c = require('csvjson-csv2json');

export default (csv: string) => {
  const json = c(csv);
  const skills: Array<SkillDto> = json.map(entry => ({
    title: entry['Name'],
    icon: entry['Image link']
  }));
  return skills;
};
