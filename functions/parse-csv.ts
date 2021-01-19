import { SkillDto } from '../interfaces';

const csvToJson = require('csvjson-csv2json');

export default (csv: string) => {
  const json = csvToJson(csv);
  const skills: Array<SkillDto> = json.map(entry => ({
    title: entry['Name'],
    icon: entry['Image link']
  }));
  return skills;
};
