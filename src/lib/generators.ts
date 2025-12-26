// Utility functions
const random = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const randomNum = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
const padZero = (num: number, len: number = 2): string => num.toString().padStart(len, '0');

// Country codes
export type CountryCode = 'CN' | 'US' | 'UK' | 'JP' | 'KR' | 'DE';

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
}

export const countries: Country[] = [
  { code: 'CN', name: '中国', flag: '🇨🇳' },
  { code: 'US', name: '美国', flag: '🇺🇸' },
  { code: 'UK', name: '英国', flag: '🇬🇧' },
  { code: 'JP', name: '日本', flag: '🇯🇵' },
  { code: 'KR', name: '韩国', flag: '🇰🇷' },
  { code: 'DE', name: '德国', flag: '🇩🇪' },
];

// ============= China Data =============
const cnFamilyNames = ['王', '李', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗'];
const cnGivenNamesMale = ['伟', '强', '磊', '洋', '勇', '军', '杰', '涛', '明', '辉', '鹏', '华', '飞', '刚', '波', '宁', '龙', '超', '亮', '浩'];
const cnGivenNamesFemale = ['芳', '娜', '敏', '静', '婷', '玲', '娟', '丽', '霞', '燕', '艳', '萍', '红', '梅', '莉', '秀', '英', '华', '慧', '雪'];

const cnProvinces = [
  { name: '北京市', cities: ['北京市'], prefix: '110' },
  { name: '上海市', cities: ['上海市'], prefix: '310' },
  { name: '广东省', cities: ['广州市', '深圳市', '珠海市', '佛山市', '东莞市'], prefix: '440' },
  { name: '浙江省', cities: ['杭州市', '宁波市', '温州市', '嘉兴市', '湖州市'], prefix: '330' },
  { name: '江苏省', cities: ['南京市', '苏州市', '无锡市', '常州市', '徐州市'], prefix: '320' },
  { name: '四川省', cities: ['成都市', '绵阳市', '德阳市', '乐山市', '宜宾市'], prefix: '510' },
  { name: '湖北省', cities: ['武汉市', '宜昌市', '襄阳市', '十堰市', '荆州市'], prefix: '420' },
  { name: '山东省', cities: ['济南市', '青岛市', '烟台市', '潍坊市', '临沂市'], prefix: '370' },
];

const cnDistricts = ['朝阳区', '海淀区', '西城区', '东城区', '丰台区', '浦东新区', '黄浦区', '静安区'];
const cnStreets = ['中山路', '人民路', '建设路', '解放路', '和平路', '文化路', '新华路', '胜利路'];
const cnCommunities = ['花园小区', '阳光花园', '金色家园', '翠苑小区', '碧水湾', '绿洲花园'];

// ============= US Data =============
const usFirstNamesMale = ['James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kenneth'];
const usFirstNamesFemale = ['Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth', 'Susan', 'Jessica', 'Sarah', 'Karen', 'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra', 'Ashley', 'Kimberly', 'Emily', 'Donna', 'Michelle'];
const usLastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];
const usStates = [
  { name: 'California', abbr: 'CA', cities: ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento'] },
  { name: 'New York', abbr: 'NY', cities: ['New York City', 'Buffalo', 'Albany', 'Rochester'] },
  { name: 'Texas', abbr: 'TX', cities: ['Houston', 'Dallas', 'Austin', 'San Antonio'] },
  { name: 'Florida', abbr: 'FL', cities: ['Miami', 'Orlando', 'Tampa', 'Jacksonville'] },
  { name: 'Washington', abbr: 'WA', cities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'] },
];
const usStreetTypes = ['Street', 'Avenue', 'Boulevard', 'Drive', 'Lane', 'Road', 'Way', 'Court'];
const usStreetNames = ['Main', 'Oak', 'Maple', 'Cedar', 'Pine', 'Elm', 'Washington', 'Lake', 'Hill', 'Park'];

// ============= UK Data =============
const ukFirstNamesMale = ['Oliver', 'George', 'Harry', 'Jack', 'Noah', 'Leo', 'Arthur', 'Oscar', 'Charlie', 'Henry'];
const ukFirstNamesFemale = ['Olivia', 'Amelia', 'Isla', 'Ava', 'Mia', 'Ivy', 'Lily', 'Isabella', 'Sophia', 'Grace'];
const ukLastNames = ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Roberts', 'Johnson', 'Lewis', 'Walker', 'Robinson', 'Wood'];
const ukCities = [
  { city: 'London', postcodePrefix: ['EC', 'WC', 'SW', 'SE', 'NW', 'N', 'E', 'W'] },
  { city: 'Manchester', postcodePrefix: ['M'] },
  { city: 'Birmingham', postcodePrefix: ['B'] },
  { city: 'Liverpool', postcodePrefix: ['L'] },
  { city: 'Edinburgh', postcodePrefix: ['EH'] },
  { city: 'Glasgow', postcodePrefix: ['G'] },
];
const ukStreetTypes = ['Street', 'Road', 'Lane', 'Avenue', 'Close', 'Drive', 'Gardens', 'Place'];
const ukStreetNames = ['High', 'Church', 'Station', 'Victoria', 'Park', 'London', 'Mill', 'Green', 'Manor', 'Queen'];

// ============= Japan Data =============
const jpFamilyNames = ['佐藤', '鈴木', '高橋', '田中', '渡辺', '伊藤', '山本', '中村', '小林', '加藤', '吉田', '山田', '佐々木', '山口', '松本'];
const jpGivenNamesMale = ['太郎', '翔', '大翔', '蓮', '悠真', '陽翔', '湊', '樹', '颯太', '悠斗', '健太', '翔太', '拓海', '大輝', '翔平'];
const jpGivenNamesFemale = ['陽菜', '葵', '結菜', '凛', '咲良', '結衣', 'さくら', '美咲', '遥', '愛', '楓', '美月', '優奈', '七海', '花音'];
const jpPrefectures = [
  { name: '東京都', cities: ['渋谷区', '新宿区', '港区', '千代田区', '中央区'] },
  { name: '大阪府', cities: ['大阪市', '堺市', '東大阪市', '豊中市'] },
  { name: '神奈川県', cities: ['横浜市', '川崎市', '相模原市', '藤沢市'] },
  { name: '愛知県', cities: ['名古屋市', '豊田市', '岡崎市', '一宮市'] },
  { name: '北海道', cities: ['札幌市', '旭川市', '函館市', '小樽市'] },
];

// ============= Korea Data =============
const krFamilyNames = ['김', '이', '박', '최', '정', '강', '조', '윤', '장', '임', '한', '오', '서', '신', '권'];
const krGivenNamesMale = ['민준', '서준', '도윤', '예준', '시우', '주원', '하준', '지호', '지후', '준서', '현우', '도현', '건우', '우진', '민재'];
const krGivenNamesFemale = ['서연', '서윤', '지우', '서현', '민서', '하은', '하윤', '윤서', '지민', '채원', '수아', '지아', '지유', '다은', '예은'];
const krCities = [
  { name: '서울특별시', districts: ['강남구', '서초구', '송파구', '마포구', '용산구', '종로구'] },
  { name: '부산광역시', districts: ['해운대구', '수영구', '남구', '동래구', '사하구'] },
  { name: '인천광역시', districts: ['남동구', '부평구', '연수구', '미추홀구'] },
  { name: '대구광역시', districts: ['수성구', '달서구', '북구', '중구'] },
];

// ============= Germany Data =============
const deFirstNamesMale = ['Lukas', 'Leon', 'Maximilian', 'Felix', 'Paul', 'Jonas', 'Tim', 'David', 'Finn', 'Noah', 'Elias', 'Ben', 'Luca', 'Julian', 'Niklas'];
const deFirstNamesFemale = ['Emma', 'Mia', 'Hannah', 'Sophia', 'Anna', 'Lea', 'Lena', 'Marie', 'Lina', 'Emily', 'Laura', 'Johanna', 'Clara', 'Sarah', 'Julia'];
const deLastNames = ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Schäfer', 'Koch', 'Bauer', 'Richter', 'Klein'];
const deCities = [
  { city: 'Berlin', plz: ['10115', '10117', '10119', '10178', '10179'] },
  { city: 'München', plz: ['80331', '80333', '80335', '80336', '80469'] },
  { city: 'Hamburg', plz: ['20095', '20097', '20099', '20144', '20146'] },
  { city: 'Frankfurt', plz: ['60306', '60308', '60310', '60311', '60313'] },
  { city: 'Köln', plz: ['50667', '50668', '50670', '50672', '50674'] },
];
const deStreetNames = ['Hauptstraße', 'Bahnhofstraße', 'Schulstraße', 'Gartenstraße', 'Dorfstraße', 'Bergstraße', 'Kirchstraße', 'Waldstraße', 'Ringstraße', 'Parkstraße'];

// Email domains
const emailDomains: Record<CountryCode, string[]> = {
  CN: ['163.com', 'qq.com', '126.com', 'sina.com', 'outlook.com'],
  US: ['gmail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'hotmail.com'],
  UK: ['gmail.com', 'outlook.com', 'yahoo.co.uk', 'icloud.com', 'btinternet.com'],
  JP: ['gmail.com', 'yahoo.co.jp', 'outlook.jp', 'icloud.com', 'docomo.ne.jp'],
  KR: ['gmail.com', 'naver.com', 'daum.net', 'kakao.com', 'outlook.com'],
  DE: ['gmail.com', 'web.de', 'gmx.de', 'outlook.de', 't-online.de'],
};

// English name parts for email
const emailPrefixes = ['happy', 'cool', 'super', 'lucky', 'smart', 'sunny', 'sweet', 'nice', 'good', 'best', 'great', 'star', 'blue', 'sky', 'love', 'moon', 'pink', 'gold', 'fire', 'ice'];
const emailNames = ['jack', 'tom', 'mike', 'john', 'alex', 'lily', 'anna', 'emma', 'lucy', 'mary', 'kate', 'jane', 'rose', 'amy', 'eva', 'leo', 'max', 'sam', 'ben', 'dan'];

// Generate email prefix
const generateEmailPrefix = (name?: string): string => {
  if (name) {
    const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
    if (cleanName.length >= 3) {
      const styles = [
        () => cleanName + randomNum(100, 9999),
        () => cleanName + '_' + randomNum(10, 99),
        () => cleanName + '.' + randomNum(1, 99),
      ];
      return random(styles)();
    }
  }
  const styles = [
    () => random(emailNames) + randomNum(100, 9999),
    () => random(emailPrefixes) + random(emailNames) + randomNum(10, 99),
    () => random(emailNames) + '_' + randomNum(1000, 9999),
    () => random(emailPrefixes) + randomNum(100, 999),
  ];
  return random(styles)();
};

export interface GeneratedInfo {
  name: string;
  gender: string;
  phone: string;
  email: string;
  username: string;
  password: string;
  idNumber: string;
  birthday: string;
  age: number;
  address: string;
  country: CountryCode;
}

// Generate username
const generateUsername = (name: string): string => {
  const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
  const baseName = cleanName.length >= 3 ? cleanName : random(emailNames);
  const styles = [
    () => baseName + randomNum(100, 9999),
    () => baseName + '_' + randomNum(10, 99),
    () => random(emailPrefixes) + baseName + randomNum(1, 999),
    () => baseName + random(['_ok', '_go', '_yes', '_top', '']),
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
  
  return password.split('').sort(() => Math.random() - 0.5).join('');
};

// ============= Country-specific generators =============

// China ID card
const generateCnIdCard = (provincePrefix: string, birthday: string): string => {
  const areaCode = provincePrefix + padZero(randomNum(1, 20)) + padZero(randomNum(1, 99));
  const sequence = padZero(randomNum(1, 999), 3);
  const base = areaCode + birthday.replace(/-/g, '') + sequence;
  
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  const checkDigits = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    sum += parseInt(base[i]) * weights[i];
  }
  return base + checkDigits[sum % 11];
};

// US SSN (fake)
const generateUsSsn = (): string => {
  return `${padZero(randomNum(100, 999), 3)}-${padZero(randomNum(10, 99))}-${padZero(randomNum(1000, 9999), 4)}`;
};

// UK NI Number (fake)
const generateUkNino = (): string => {
  const letters = 'ABCEGHJKLMNPRSTWXYZ';
  const suffix = 'ABCD';
  return `${letters[randomNum(0, letters.length - 1)]}${letters[randomNum(0, letters.length - 1)]}${padZero(randomNum(10, 99))}${padZero(randomNum(10, 99))}${padZero(randomNum(10, 99))}${suffix[randomNum(0, 3)]}`;
};

// Japan My Number (fake)
const generateJpMyNumber = (): string => {
  let num = '';
  for (let i = 0; i < 12; i++) {
    num += randomNum(0, 9).toString();
  }
  return num;
};

// Korea RRN (fake)
const generateKrRrn = (birthday: string, isMale: boolean): string => {
  const parts = birthday.split('-');
  const yearPrefix = parseInt(parts[0]) >= 2000 ? (isMale ? '3' : '4') : (isMale ? '1' : '2');
  return `${parts[0].slice(2)}${parts[1]}${parts[2]}-${yearPrefix}${padZero(randomNum(100000, 999999), 6)}`;
};

// Germany ID (fake)
const generateDeId = (): string => {
  const letters = 'CFGHJKLMNPRTVWXYZ';
  let id = '';
  for (let i = 0; i < 9; i++) {
    if (i < 4) {
      id += letters[randomNum(0, letters.length - 1)];
    } else {
      id += randomNum(0, 9);
    }
  }
  return id;
};

// Phone generators
const generateCnPhone = (): string => {
  const prefixes = ['130', '131', '132', '133', '134', '135', '136', '137', '138', '139', 
                    '150', '151', '152', '153', '155', '156', '157', '158', '159',
                    '180', '181', '182', '183', '184', '185', '186', '187', '188', '189'];
  return random(prefixes) + randomNum(10000000, 99999999).toString();
};

const generateUsPhone = (): string => {
  const areaCodes = ['212', '213', '310', '415', '512', '617', '702', '713', '818', '917'];
  return `(${random(areaCodes)}) ${randomNum(200, 999)}-${padZero(randomNum(0, 9999), 4)}`;
};

const generateUkPhone = (): string => {
  const prefixes = ['7700', '7702', '7710', '7712', '7720', '7722', '7730', '7732'];
  return `+44 ${random(prefixes)} ${padZero(randomNum(100000, 999999), 6)}`;
};

const generateJpPhone = (): string => {
  const prefixes = ['090', '080', '070'];
  return `${random(prefixes)}-${padZero(randomNum(1000, 9999), 4)}-${padZero(randomNum(1000, 9999), 4)}`;
};

const generateKrPhone = (): string => {
  const prefixes = ['010', '011', '016', '017', '018', '019'];
  return `${random(prefixes)}-${padZero(randomNum(1000, 9999), 4)}-${padZero(randomNum(1000, 9999), 4)}`;
};

const generateDePhone = (): string => {
  const prefixes = ['151', '152', '157', '160', '170', '171', '175', '176', '177', '178', '179'];
  return `+49 ${random(prefixes)} ${padZero(randomNum(1000000, 9999999), 7)}`;
};

// ============= Main generator =============
export const generateInfo = (countryCode: CountryCode = 'CN'): GeneratedInfo => {
  const isMale = Math.random() > 0.5;
  const year = randomNum(1985, 2003);
  const month = randomNum(1, 12);
  const day = randomNum(1, 28);
  const birthday = `${year}-${padZero(month)}-${padZero(day)}`;
  const age = new Date().getFullYear() - year;
  
  let name: string;
  let gender: string;
  let phone: string;
  let address: string;
  let idNumber: string;
  
  switch (countryCode) {
    case 'CN': {
      const familyName = random(cnFamilyNames);
      const givenName = random(isMale ? cnGivenNamesMale : cnGivenNamesFemale) + (Math.random() > 0.5 ? random(isMale ? cnGivenNamesMale : cnGivenNamesFemale) : '');
      name = familyName + givenName;
      gender = isMale ? '男' : '女';
      phone = generateCnPhone();
      
      const province = random(cnProvinces);
      const city = random(province.cities);
      address = `${province.name}${city}${random(cnDistricts)}${random(cnStreets)}${randomNum(1, 999)}号${random(cnCommunities)}${randomNum(1, 30)}栋${randomNum(101, 2501)}室`;
      idNumber = generateCnIdCard(province.prefix, birthday);
      break;
    }
    
    case 'US': {
      const firstName = random(isMale ? usFirstNamesMale : usFirstNamesFemale);
      const lastName = random(usLastNames);
      name = `${firstName} ${lastName}`;
      gender = isMale ? 'Male' : 'Female';
      phone = generateUsPhone();
      
      const state = random(usStates);
      const city = random(state.cities);
      address = `${randomNum(100, 9999)} ${random(usStreetNames)} ${random(usStreetTypes)}, ${city}, ${state.abbr} ${padZero(randomNum(10000, 99999), 5)}`;
      idNumber = generateUsSsn();
      break;
    }
    
    case 'UK': {
      const firstName = random(isMale ? ukFirstNamesMale : ukFirstNamesFemale);
      const lastName = random(ukLastNames);
      name = `${firstName} ${lastName}`;
      gender = isMale ? 'Male' : 'Female';
      phone = generateUkPhone();
      
      const location = random(ukCities);
      const postcodePrefix = random(location.postcodePrefix);
      address = `${randomNum(1, 150)} ${random(ukStreetNames)} ${random(ukStreetTypes)}, ${location.city}, ${postcodePrefix}${randomNum(1, 9)} ${randomNum(1, 9)}${String.fromCharCode(65 + randomNum(0, 25))}${String.fromCharCode(65 + randomNum(0, 25))}`;
      idNumber = generateUkNino();
      break;
    }
    
    case 'JP': {
      const familyName = random(jpFamilyNames);
      const givenName = random(isMale ? jpGivenNamesMale : jpGivenNamesFemale);
      name = `${familyName} ${givenName}`;
      gender = isMale ? '男性' : '女性';
      phone = generateJpPhone();
      
      const prefecture = random(jpPrefectures);
      const city = random(prefecture.cities);
      address = `〒${randomNum(100, 999)}-${padZero(randomNum(0, 9999), 4)} ${prefecture.name}${city}${randomNum(1, 9)}-${randomNum(1, 30)}-${randomNum(1, 15)}`;
      idNumber = generateJpMyNumber();
      break;
    }
    
    case 'KR': {
      const familyName = random(krFamilyNames);
      const givenName = random(isMale ? krGivenNamesMale : krGivenNamesFemale);
      name = `${familyName}${givenName}`;
      gender = isMale ? '남성' : '여성';
      phone = generateKrPhone();
      
      const city = random(krCities);
      const district = random(city.districts);
      address = `${city.name} ${district} ${randomNum(1, 500)}번길 ${randomNum(1, 100)}`;
      idNumber = generateKrRrn(birthday, isMale);
      break;
    }
    
    case 'DE': {
      const firstName = random(isMale ? deFirstNamesMale : deFirstNamesFemale);
      const lastName = random(deLastNames);
      name = `${firstName} ${lastName}`;
      gender = isMale ? 'Männlich' : 'Weiblich';
      phone = generateDePhone();
      
      const cityData = random(deCities);
      address = `${random(deStreetNames)} ${randomNum(1, 150)}, ${random(cityData.plz)} ${cityData.city}`;
      idNumber = generateDeId();
      break;
    }
    
    default:
      throw new Error(`Unsupported country: ${countryCode}`);
  }
  
  const email = `${generateEmailPrefix(name)}@${random(emailDomains[countryCode])}`;
  const username = generateEmailPrefix(name);
  const password = generatePassword();
  
  return {
    name,
    gender,
    phone,
    email,
    username,
    password,
    idNumber,
    birthday,
    age,
    address,
    country: countryCode,
  };
};
