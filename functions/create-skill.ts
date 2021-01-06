import csvToJson from 'csvjson-csv2json';
import { SkillDto } from '../interfaces';

export default (csv: string) => {
  const json = csvToJson(csv);
  const skills: Array<SkillDto> = json.map(entry => ({
    title: entry['Name'],
    icon: entry['Image link']
  }));
  return skills;
};
