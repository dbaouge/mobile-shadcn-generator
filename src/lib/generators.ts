// Chinese name data
const familyNames = ['王', '李', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗'];
const givenNamesMale = ['伟', '强', '磊', '洋', '勇', '军', '杰', '涛', '明', '辉', '鹏', '华', '飞', '刚', '波', '宁', '龙', '超', '亮', '浩'];
const givenNamesFemale = ['芳', '娜', '敏', '静', '婷', '玲', '娟', '丽', '霞', '燕', '艳', '萍', '红', '梅', '莉', '秀', '英', '华', '慧', '雪'];

// Province data
const provinces = [
  { name: '北京市', cities: ['北京市'], prefix: '110' },
  { name: '上海市', cities: ['上海市'], prefix: '310' },
  { name: '广东省', cities: ['广州市', '深圳市', '珠海市', '佛山市', '东莞市'], prefix: '440' },
  { name: '浙江省', cities: ['杭州市', '宁波市', '温州市', '嘉兴市', '湖州市'], prefix: '330' },
  { name: '江苏省', cities: ['南京市', '苏州市', '无锡市', '常州市', '徐州市'], prefix: '320' },
  { name: '四川省', cities: ['成都市', '绵阳市', '德阳市', '乐山市', '宜宾市'], prefix: '510' },
  { name: '湖北省', cities: ['武汉市', '宜昌市', '襄阳市', '十堰市', '荆州市'], prefix: '420' },
  { name: '山东省', cities: ['济南市', '青岛市', '烟台市', '潍坊市', '临沂市'], prefix: '370' },
];

const districts = ['朝阳区', '海淀区', '西城区', '东城区', '丰台区', '浦东新区', '黄浦区', '静安区', '徐汇区', '长宁区', '天河区', '越秀区', '荔湾区', '白云区', '番禺区'];
const streets = ['中山路', '人民路', '建设路', '解放路', '和平路', '文化路', '新华路', '胜利路', '长安街', '南京路'];
const communities = ['花园小区', '阳光花园', '金色家园', '翠苑小区', '碧水湾', '绿洲花园', '锦绣家园', '幸福里', '和谐苑', '美景园'];

// Email domains
const emailDomains = ['gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 'icloud.com'];

// English name parts for email
const emailPrefixes = ['happy', 'cool', 'super', 'lucky', 'smart', 'sunny', 'sweet', 'nice', 'good', 'best', 'great', 'star', 'blue', 'sky', 'love', 'moon', 'pink', 'gold', 'fire', 'ice'];
const emailNames = ['jack', 'tom', 'mike', 'john', 'alex', 'lily', 'anna', 'emma', 'lucy', 'mary', 'kate', 'jane', 'rose', 'amy', 'eva', 'leo', 'max', 'sam', 'ben', 'dan'];

// Generate email prefix (English only)
const generateEmailPrefix = (): string => {
  const styles = [
    () => random(emailNames) + randomNum(100, 9999),
    () => random(emailPrefixes) + random(emailNames) + randomNum(10, 99),
    () => random(emailNames) + '_' + randomNum(1000, 9999),
    () => random(emailPrefixes) + randomNum(100, 999),
  ];
  return random(styles)();
};

// Utility functions
const random = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const randomNum = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
const padZero = (num: number, len: number = 2): string => num.toString().padStart(len, '0');

export interface GeneratedInfo {
  name: string;
  gender: '男' | '女';
  phone: string;
  email: string;
  username: string;
  password: string;
  idCard: string;
  birthday: string;
  age: number;
  address: string;
  bankCard: string;
  company: string;
}

// Generate username
const generateUsername = (name: string): string => {
  const styles = [
    () => name.toLowerCase() + randomNum(100, 9999),
    () => name.toLowerCase() + '_' + randomNum(10, 99),
    () => random(['happy', 'cool', 'super', 'great', 'nice', 'best']) + name.toLowerCase() + randomNum(1, 999),
    () => name.toLowerCase() + random(['_ok', '_go', '_yes', '_top', '']),
  ];
  return random(styles)();
};

// Generate password
const generatePassword = (): string => {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const special = '!@#$%&*';
  
  let password = '';
  password += upper[randomNum(0, upper.length - 1)];
  password += lower[randomNum(0, lower.length - 1)];
  password += numbers[randomNum(0, numbers.length - 1)];
  password += special[randomNum(0, special.length - 1)];
  
  const all = upper + lower + numbers;
  for (let i = 0; i < 8; i++) {
    password += all[randomNum(0, all.length - 1)];
  }
  
  // Shuffle
  return password.split('').sort(() => Math.random() - 0.5).join('');
};

// Generate ID card number
const generateIdCard = (provincePrefix: string, birthday: string): string => {
  const areaCode = provincePrefix + padZero(randomNum(1, 20)) + padZero(randomNum(1, 99));
  const sequence = padZero(randomNum(1, 999), 3);
  const base = areaCode + birthday.replace(/-/g, '') + sequence;
  
  // Calculate check digit
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checkDigits = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += parseInt(base[i]) * weights[i];
  }
  return base + checkDigits[sum % 11];
};

// Generate phone number
const generatePhone = (): string => {
  const prefixes = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139', 
                    '150', '151', '152', '153', '155', '156', '157', '158', '159',
                    '170', '171', '172', '173', '175', '176', '177', '178',
                    '180', '181', '182', '183', '184', '185', '186', '187', '188', '189',
                    '198', '199'];
  return random(prefixes) + randomNum(10000000, 99999999).toString();
};

// Generate bank card number
const generateBankCard = (): string => {
  const prefixes = ['6222', '6228', '6217', '6214', '6225', '6226', '6259', '6216'];
  let card = random(prefixes);
  for (let i = 0; i < 12; i++) {
    card += randomNum(0, 9).toString();
  }
  return card;
};

// Company names
const companyPrefixes = ['中科', '华为', '腾讯', '阿里', '百度', '字节', '美团', '京东', '滴滴', '小米'];
const companySuffixes = ['科技有限公司', '网络技术有限公司', '信息技术有限公司', '互联网有限公司', '数据服务有限公司'];

export const generateInfo = (): GeneratedInfo => {
  const isMale = Math.random() > 0.5;
  const familyName = random(familyNames);
  const givenName = random(isMale ? givenNamesMale : givenNamesFemale) + (Math.random() > 0.5 ? random(isMale ? givenNamesMale : givenNamesFemale) : '');
  const name = familyName + givenName;
  
  const province = random(provinces);
  const city = random(province.cities);
  const district = random(districts);
  const street = random(streets);
  const community = random(communities);
  const building = randomNum(1, 30);
  const unit = randomNum(1, 6);
  const room = randomNum(101, 2501);
  
  const year = randomNum(1985, 2003);
  const month = randomNum(1, 12);
  const day = randomNum(1, 28);
  const birthday = `${year}-${padZero(month)}-${padZero(day)}`;
  const age = new Date().getFullYear() - year;
  
  const phone = generatePhone();
  const email = `${generateEmailPrefix()}@${random(emailDomains)}`;
  const username = generateEmailPrefix();
  const password = generatePassword();
  
  return {
    name,
    gender: isMale ? '男' : '女',
    phone,
    email,
    username,
    password,
    idCard: generateIdCard(province.prefix, birthday),
    birthday,
    age,
    address: `${province.name}${city}${district}${street}${randomNum(1, 999)}号${community}${building}栋${unit}单元${room}室`,
    bankCard: generateBankCard(),
    company: `${city.slice(0, -1)}${random(companyPrefixes)}${random(companySuffixes)}`,
  };
};
