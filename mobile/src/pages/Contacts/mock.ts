const contacts = [
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'august',
      last: 'sørensen',
    },
    location: {
      street: '946 skansevej',
      city: 'københavn s',
      state: 'midtjylland',
      postcode: 63470,
      coordinates: {
        latitude: '-33.9072',
        longitude: '-79.1916',
      },
      timezone: {
        offset: '-10:00',
        description: 'Hawaii',
      },
    },
    email: 'august.sørensen@example.com',
    login: {
      uuid: '2e11b679-b108-4d1e-8bfa-7d6328b70821',
      username: 'whiteostrich508',
      password: 'porkchop',
      salt: 'ShaGYe5X',
      md5: '6cc79e7cb34646f6ba86cd8cace8b95a',
      sha1: '73481ae9809c633a5765dfcd93d971e50aa4bffc',
      sha256:
        'a0324f1678a1cd9a50aabd282bd56d366cfdd211c0d78d8d1f6026c4931c3bac',
    },
    dob: {
      date: '1990-06-14T09:08:29Z',
      age: 28,
    },
    registered: {
      date: '2008-05-22T12:00:53Z',
      age: 10,
    },
    phone: '15640511',
    cell: '43107508',
    id: {
      name: 'CPR',
      value: '700294-1502',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/20.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/20.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/20.jpg',
    },
    nat: 'DK',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'bruce',
      last: 'daniels',
    },
    location: {
      street: '7890 boghall road',
      city: 'ratoath',
      state: 'leitrim',
      postcode: 48823,
      coordinates: {
        latitude: '-7.6170',
        longitude: '-65.7125',
      },
      timezone: {
        offset: '+2:00',
        description: 'Kaliningrad, South Africa',
      },
    },
    email: 'bruce.daniels@example.com',
    login: {
      uuid: '11b80dc0-04f7-4280-8a51-38c0c86dbb38',
      username: 'bigleopard912',
      password: 'blaine',
      salt: 'ZTUoIvW4',
      md5: '6501e42a6abc67bdd08684e49f5934f3',
      sha1: '180ce756611be2657d9c4d63a5ffc4b5abe9acea',
      sha256:
        'f5b6422e945fd7976794acb508b8204f42bcb55c4a9148a7c2250672ee0e3aa5',
    },
    dob: {
      date: '1952-12-02T01:29:36Z',
      age: 66,
    },
    registered: {
      date: '2016-10-15T17:01:42Z',
      age: 2,
    },
    phone: '041-997-0090',
    cell: '081-007-5836',
    id: {
      name: 'PPS',
      value: '5492583T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/8.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/8.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/8.jpg',
    },
    nat: 'IE',
  },
  {
    gender: 'female',
    name: {
      title: 'mrs',
      first: 'mestan',
      last: 'nebioğlu',
    },
    location: {
      street: '7039 doktorlar cd',
      city: 'zonguldak',
      state: 'kayseri',
      postcode: 76495,
      coordinates: {
        latitude: '-27.0379',
        longitude: '100.7731',
      },
      timezone: {
        offset: '+4:30',
        description: 'Kabul',
      },
    },
    email: 'mestan.nebioğlu@example.com',
    login: {
      uuid: 'e218e2e1-8ffc-410f-810b-9d5997e48e5f',
      username: 'beautifultiger961',
      password: 'letmein',
      salt: '8hV2oM5R',
      md5: 'b3aba02f648160470595c067b018ee70',
      sha1: '6c527a82d1f2774c2a7de426e8247f7ad493ee9b',
      sha256:
        '9f0ef399921361d9b1c711889f9fddc4c22f82845a5bfe46de3eb1d8dc7117d0',
    },
    dob: {
      date: '1962-03-29T15:03:48Z',
      age: 56,
    },
    registered: {
      date: '2007-09-25T08:28:16Z',
      age: 11,
    },
    phone: '(555)-679-1916',
    cell: '(272)-013-9027',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/22.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/22.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
    },
    nat: 'TR',
  },
  {
    gender: 'male',
    name: {
      title: 'monsieur',
      first: 'edgar',
      last: 'robin',
    },
    location: {
      street: '7624 boulevard de la duchère',
      city: "collina d'oro",
      state: 'fribourg',
      postcode: 5124,
      coordinates: {
        latitude: '64.1128',
        longitude: '38.2121',
      },
      timezone: {
        offset: '+5:45',
        description: 'Kathmandu',
      },
    },
    email: 'edgar.robin@example.com',
    login: {
      uuid: 'a9ab2d7b-f1cd-439e-b81e-f553888abf2e',
      username: 'whiteswan486',
      password: 'squeeze',
      salt: 'Ljjoi1jP',
      md5: '8e124f9fa59b7a7507bc7ed7a97d9c62',
      sha1: '618bf0f27720d6ef19c90b72732d287606c9a51c',
      sha256:
        '90d09ec2cbf73ee70417c3c107f53d0b5fa86c39ac28b0f7e5ba771d2e04bfda',
    },
    dob: {
      date: '1946-03-09T10:42:33Z',
      age: 73,
    },
    registered: {
      date: '2006-11-11T21:16:36Z',
      age: 12,
    },
    phone: '(257)-344-9554',
    cell: '(717)-614-3993',
    id: {
      name: 'AVS',
      value: '756.2299.2280.36',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/65.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/65.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    },
    nat: 'CH',
  },
  {
    gender: 'female',
    name: {
      title: 'ms',
      first: 'sophia',
      last: 'chen',
    },
    location: {
      street: '5657 walton street',
      city: 'upper hutt',
      state: 'taranaki',
      postcode: 37468,
      coordinates: {
        latitude: '-56.3036',
        longitude: '48.1289',
      },
      timezone: {
        offset: '+6:00',
        description: 'Almaty, Dhaka, Colombo',
      },
    },
    email: 'sophia.chen@example.com',
    login: {
      uuid: '3c4015e0-4c36-43eb-8223-b92232d2adfd',
      username: 'orangesnake976',
      password: 'avatar',
      salt: '2qqeRYRh',
      md5: '1eab402f2e1208321c511ebf64290dbe',
      sha1: '234ae8f0b358fedaaf363cb84757f82de63b0fa9',
      sha256:
        '6a07beb716459b5ec0f5576d55fc02466d071a07336f1928cd4a0a0dd33b7e2e',
    },
    dob: {
      date: '1996-03-21T07:48:16Z',
      age: 23,
    },
    registered: {
      date: '2016-05-04T14:41:34Z',
      age: 2,
    },
    phone: '(130)-734-8995',
    cell: '(773)-665-4508',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/91.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/91.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/91.jpg',
    },
    nat: 'NZ',
  },
  {
    gender: 'female',
    name: {
      title: 'miss',
      first: 'michele',
      last: 'prescott',
    },
    location: {
      street: '818 hamilton ave',
      city: 'bellevue',
      state: 'utah',
      postcode: 88992,
      coordinates: {
        latitude: '-12.7362',
        longitude: '-169.5335',
      },
      timezone: {
        offset: '-9:00',
        description: 'Alaska',
      },
    },
    email: 'michele.prescott@example.com',
    login: {
      uuid: '4a738c57-7e89-47c2-8a37-5fe633ef33e1',
      username: 'smallleopard557',
      password: 'jackal',
      salt: 'ONTWlGCc',
      md5: '650d87c813b130d30308ddf434b18422',
      sha1: '01a331995e19aaf54e56555828105ed5d1616cc8',
      sha256:
        'fcf11002929724b96543f2f2e4c7d13b78fe01393a0806983e6e1237b9c3567a',
    },
    dob: {
      date: '1971-04-28T17:50:47Z',
      age: 47,
    },
    registered: {
      date: '2002-10-13T11:10:20Z',
      age: 16,
    },
    phone: '(493)-153-6098',
    cell: '(472)-973-3596',
    id: {
      name: 'SSN',
      value: '114-70-5474',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/19.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/19.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/19.jpg',
    },
    nat: 'US',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'batur',
      last: 'menemencioğlu',
    },
    location: {
      street: '4600 anafartalar cd',
      city: 'ankara',
      state: 'kırıkkale',
      postcode: 81311,
      coordinates: {
        latitude: '-27.4217',
        longitude: '49.4103',
      },
      timezone: {
        offset: '+4:30',
        description: 'Kabul',
      },
    },
    email: 'batur.menemencioğlu@example.com',
    login: {
      uuid: 'dee0ec9f-db4d-4441-bdb1-18dffdf260c6',
      username: 'orangeostrich849',
      password: 'scottie',
      salt: '5aiaVSAO',
      md5: '537043641d6febab7c8a32a76c171449',
      sha1: '46677468314d9957dffcc3eb15e4635dbfb976d9',
      sha256:
        '0fae1a4196394c41ae920c9dffa0fa732ea7e660a92d29f7986df304d2b31984',
    },
    dob: {
      date: '1983-11-03T13:00:40Z',
      age: 35,
    },
    registered: {
      date: '2012-07-21T00:12:37Z',
      age: 6,
    },
    phone: '(535)-584-2494',
    cell: '(378)-585-0215',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/87.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/87.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/87.jpg',
    },
    nat: 'TR',
  },
  {
    gender: 'female',
    name: {
      title: 'mrs',
      first: 'vere',
      last: 'şener',
    },
    location: {
      street: '8869 jan van scorelstraat',
      city: 'oude ijsselstreek',
      state: 'gelderland',
      postcode: 14451,
      coordinates: {
        latitude: '-0.1811',
        longitude: '136.0147',
      },
      timezone: {
        offset: '+11:00',
        description: 'Magadan, Solomon Islands, New Caledonia',
      },
    },
    email: 'vere.şener@example.com',
    login: {
      uuid: 'ef8bb599-8781-4dfb-bb51-151deaabc387',
      username: 'whiteelephant430',
      password: 'home',
      salt: 'Njr86WVr',
      md5: '43f883afb2c986edda5b88274969ee87',
      sha1: '5be5cdfc983b7f7f044073d76425719928a2863a',
      sha256:
        '4024a6edfa2d288078d406c20f3c9a93559bdb0cbd7d515a4d5a934e7891d754',
    },
    dob: {
      date: '1989-06-10T16:14:59Z',
      age: 29,
    },
    registered: {
      date: '2010-09-10T13:13:59Z',
      age: 8,
    },
    phone: '(572)-646-8787',
    cell: '(549)-983-1778',
    id: {
      name: 'BSN',
      value: '70230421',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/69.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/69.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/69.jpg',
    },
    nat: 'NL',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'آرمین',
      last: 'كامياران',
    },
    location: {
      street: '1431 قدس',
      city: 'اهواز',
      state: 'کهگیلویه و بویراحمد',
      postcode: 32448,
      coordinates: {
        latitude: '-83.1439',
        longitude: '-10.4091',
      },
      timezone: {
        offset: '-2:00',
        description: 'Mid-Atlantic',
      },
    },
    email: 'آرمین.كامياران@example.com',
    login: {
      uuid: 'd888036e-5285-4a0f-96b4-ec558fa127b0',
      username: 'yellowmeercat234',
      password: 'firefox',
      salt: 'QJQNX3WQ',
      md5: '3e899e9eef62e986e7edaabf2aff6a39',
      sha1: '5fdfccd1962c17be07696687291838a03a0c0769',
      sha256:
        '2faa4e3adc4519ef2e9246231671f655773cefe82487c2bbd4682cf573e41683',
    },
    dob: {
      date: '1944-09-13T22:01:38Z',
      age: 74,
    },
    registered: {
      date: '2016-11-03T21:16:00Z',
      age: 2,
    },
    phone: '073-91996727',
    cell: '0994-277-7159',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/6.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/6.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/6.jpg',
    },
    nat: 'IR',
  },
  {
    gender: 'female',
    name: {
      title: 'miss',
      first: 'rosa',
      last: 'mortensen',
    },
    location: {
      street: '4959 ingridsvej',
      city: '\ufeffaaborg øst',
      state: 'midtjylland',
      postcode: 22136,
      coordinates: {
        latitude: '12.4943',
        longitude: '-1.1619',
      },
      timezone: {
        offset: '+5:00',
        description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
      },
    },
    email: 'rosa.mortensen@example.com',
    login: {
      uuid: 'c6e419a7-11ec-4e02-8cb6-ac8adbae8598',
      username: 'organicbear102',
      password: 'stephane',
      salt: 'cuymCR9f',
      md5: 'f64997d65a480e04bb156066cf3b6e32',
      sha1: '54d394c20ea1cf4c0d31674cee44c72b21c2e975',
      sha256:
        '96a5d9b42b6be8e49033168b8519bcbe5c8f46d67eba4ce91f11b020d1c40c05',
    },
    dob: {
      date: '1972-10-19T19:16:19Z',
      age: 46,
    },
    registered: {
      date: '2007-09-14T03:10:44Z',
      age: 11,
    },
    phone: '54357149',
    cell: '26885759',
    id: {
      name: 'CPR',
      value: '178053-8749',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/68.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/68.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/68.jpg',
    },
    nat: 'DK',
  },
  {
    gender: 'female',
    name: {
      title: 'ms',
      first: 'آرمیتا',
      last: 'كامياران',
    },
    location: {
      street: '9234 شهید شهرام امیری',
      city: 'بوشهر',
      state: 'چهارمحال و بختیاری',
      postcode: 81313,
      coordinates: {
        latitude: '55.1403',
        longitude: '-25.3039',
      },
      timezone: {
        offset: '+5:00',
        description: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
      },
    },
    email: 'آرمیتا.كامياران@example.com',
    login: {
      uuid: '37e65ce8-d803-418c-bff5-fe6a40a24fec',
      username: 'lazyfrog149',
      password: '420000',
      salt: 'iNorij8S',
      md5: 'ddd3c16d44a26aff0624fb6074a97f79',
      sha1: '8824d12c76aa656a1e901cfcd30d78c6074ed51b',
      sha256:
        '9e0421d6387c873e38b955564b1467eabfa3f2bb713e284bab35f2cbd8f1b1b3',
    },
    dob: {
      date: '1950-01-29T19:06:37Z',
      age: 69,
    },
    registered: {
      date: '2015-06-25T10:21:25Z',
      age: 3,
    },
    phone: '060-48574477',
    cell: '0907-339-7626',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/64.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/64.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/64.jpg',
    },
    nat: 'IR',
  },
  {
    gender: 'male',
    name: {
      title: 'monsieur',
      first: 'emil',
      last: 'brun',
    },
    location: {
      street: '2926 avenue vauban',
      city: 'bedigliora',
      state: 'bern',
      postcode: 8424,
      coordinates: {
        latitude: '48.2007',
        longitude: '-75.8335',
      },
      timezone: {
        offset: '-4:00',
        description: 'Atlantic Time (Canada), Caracas, La Paz',
      },
    },
    email: 'emil.brun@example.com',
    login: {
      uuid: '7f35d8b8-b4a7-49eb-8c86-ffd62bbdb046',
      username: 'orangelion909',
      password: '2002',
      salt: 'rX1IpE0q',
      md5: '67aa90402bfc70e2909953b13563de80',
      sha1: 'a286fcbe8005b65d2c421b6daf43cf0d228e3ad1',
      sha256:
        '7cf3c193ddc29bedd48156af7253c4e60e09feff62291bc2c05f2026a82863cf',
    },
    dob: {
      date: '1956-02-21T16:28:37Z',
      age: 63,
    },
    registered: {
      date: '2005-10-22T12:56:29Z',
      age: 13,
    },
    phone: '(557)-577-0913',
    cell: '(776)-775-0070',
    id: {
      name: 'AVS',
      value: '756.2362.6053.45',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/62.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/62.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/62.jpg',
    },
    nat: 'CH',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'alfredo',
      last: 'woods',
    },
    location: {
      street: '3644 the grove',
      city: 'ripon',
      state: 'dumfries and galloway',
      postcode: 'RE3 8WD',
      coordinates: {
        latitude: '-87.4046',
        longitude: '-16.1213',
      },
      timezone: {
        offset: '+8:00',
        description: 'Beijing, Perth, Singapore, Hong Kong',
      },
    },
    email: 'alfredo.woods@example.com',
    login: {
      uuid: '42b31852-92e3-4b9a-acec-a5f920e0b5e2',
      username: 'redmeercat142',
      password: 'wolves',
      salt: 'UryC1aBg',
      md5: 'ed5bd2a092589123863676f749f603b8',
      sha1: '3b5ba0b7cd33bfc062b148fbc4f6a0567a097a7b',
      sha256:
        'dc310ae9499e298b762150e1a04a0555a99560cc331bcfeb80c81778ee3a92b1',
    },
    dob: {
      date: '1986-04-11T14:11:09Z',
      age: 32,
    },
    registered: {
      date: '2013-09-13T10:52:21Z',
      age: 5,
    },
    phone: '013873 03877',
    cell: '0702-078-266',
    id: {
      name: 'NINO',
      value: 'EJ 69 97 10 T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/56.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/56.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/56.jpg',
    },
    nat: 'GB',
  },
  {
    gender: 'female',
    name: {
      title: 'ms',
      first: 'mathea',
      last: 'loe',
    },
    location: {
      street: 'møllerveien 3624',
      city: 'rophus',
      state: 'møre og romsdal',
      postcode: '7270',
      coordinates: {
        latitude: '88.8221',
        longitude: '165.6078',
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland',
      },
    },
    email: 'mathea.loe@example.com',
    login: {
      uuid: '9b4bf74c-bb29-4e4f-885a-7607205637bf',
      username: 'angrybutterfly573',
      password: 'rugger',
      salt: '07fb6ryH',
      md5: 'd30c989e7be0214eb228306f80418522',
      sha1: 'fa79da54964a8f039c711d3ee6ac1c6cab319a4e',
      sha256:
        'bc83e428f2aa11ae75538a166fbe2d6506b81381ec7464a9233b0324f9baeeb1',
    },
    dob: {
      date: '1949-01-23T15:33:12Z',
      age: 70,
    },
    registered: {
      date: '2012-01-18T18:35:40Z',
      age: 7,
    },
    phone: '65554383',
    cell: '43158441',
    id: {
      name: 'FN',
      value: '23014929126',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/20.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/20.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/20.jpg',
    },
    nat: 'NO',
  },
  {
    gender: 'female',
    name: {
      title: 'miss',
      first: 'eliza',
      last: 'brown',
    },
    location: {
      street: '929 springfield road',
      city: 'newbridge',
      state: 'cavan',
      postcode: 47220,
      coordinates: {
        latitude: '-74.0625',
        longitude: '128.1739',
      },
      timezone: {
        offset: '+2:00',
        description: 'Kaliningrad, South Africa',
      },
    },
    email: 'eliza.brown@example.com',
    login: {
      uuid: '90085b96-58c2-47f4-add9-c9f1cd186ec7',
      username: 'angryelephant130',
      password: 'qwaszx',
      salt: 'ilOosN88',
      md5: '1a4ace32f4122b3c2361c1f367545887',
      sha1: '469c74ea005a30a80beba9f8ddf5b8136aa05f80',
      sha256:
        '942a48e12129445113bc3c4684e2cc4354f7b48aebe8dd269bd9c744b9647e42',
    },
    dob: {
      date: '1973-04-06T22:05:45Z',
      age: 45,
    },
    registered: {
      date: '2004-10-04T11:30:07Z',
      age: 14,
    },
    phone: '071-740-5894',
    cell: '081-437-7200',
    id: {
      name: 'PPS',
      value: '6158110T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/50.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/50.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/50.jpg',
    },
    nat: 'IE',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'aristóteles',
      last: 'nunes',
    },
    location: {
      street: '8327 rua são josé ',
      city: 'uruguaiana',
      state: 'amazonas',
      postcode: 98042,
      coordinates: {
        latitude: '75.2325',
        longitude: '64.7608',
      },
      timezone: {
        offset: '+8:00',
        description: 'Beijing, Perth, Singapore, Hong Kong',
      },
    },
    email: 'aristóteles.nunes@example.com',
    login: {
      uuid: 'f08dae74-bc2a-4342-afb0-7501daa16d9b',
      username: 'beautifulbutterfly687',
      password: 'javier',
      salt: 'mUn7T13e',
      md5: 'ef38a5b03ebf8ca9c232d02ac060c276',
      sha1: 'e896fa66f0de4c8ee02d406ab6e8039d06bdaf33',
      sha256:
        '01ee17c974584777c9004cc8f85c52b9af50f6c9e84d5b3f8a8ac00037ee0dd4',
    },
    dob: {
      date: '1993-04-20T00:05:29Z',
      age: 25,
    },
    registered: {
      date: '2004-03-26T22:20:45Z',
      age: 14,
    },
    phone: '(53) 3086-4680',
    cell: '(68) 9656-1714',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/67.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/67.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/67.jpg',
    },
    nat: 'BR',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'joseph',
      last: 'thommesen',
    },
    location: {
      street: 'toftes gate 1533',
      city: 'uggdalseidet',
      state: 'telemark',
      postcode: '7736',
      coordinates: {
        latitude: '-9.1285',
        longitude: '-13.9772',
      },
      timezone: {
        offset: '+4:00',
        description: 'Abu Dhabi, Muscat, Baku, Tbilisi',
      },
    },
    email: 'joseph.thommesen@example.com',
    login: {
      uuid: 'cc0c55fb-a393-4631-8421-384cd847f408',
      username: 'bigrabbit778',
      password: 'vermont',
      salt: 'ay5wVA63',
      md5: '7c40600502f831a3dbb82b91f083a6c8',
      sha1: 'a42efb54eed0bac51081f627bc526f10d67605c3',
      sha256:
        'a415a4a008c9e7bd34b3cf7fe1620a4440bcf77e7e5670e01324a432af42e31b',
    },
    dob: {
      date: '1954-09-29T00:14:36Z',
      age: 64,
    },
    registered: {
      date: '2005-10-03T12:23:47Z',
      age: 13,
    },
    phone: '20200586',
    cell: '43297595',
    id: {
      name: 'FN',
      value: '29095422045',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/82.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/82.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/82.jpg',
    },
    nat: 'NO',
  },
  {
    gender: 'female',
    name: {
      title: 'mrs',
      first: 'sanni',
      last: 'kilpela',
    },
    location: {
      street: '8354 visiokatu',
      city: 'eckerö',
      state: 'satakunta',
      postcode: 57461,
      coordinates: {
        latitude: '9.0204',
        longitude: '143.9668',
      },
      timezone: {
        offset: '-1:00',
        description: 'Azores, Cape Verde Islands',
      },
    },
    email: 'sanni.kilpela@example.com',
    login: {
      uuid: '339d98c8-cc1e-435c-8acc-800c145a4a18',
      username: 'whitekoala176',
      password: 'clapton',
      salt: 'c2YL6u8e',
      md5: 'da9c109bc3f9ee765a6493fa811827fc',
      sha1: '9889fa08ea3f1ca27db19dc426ed024e9bdb7b08',
      sha256:
        'a03e2ce8c5a9d31fe2dfccf5347060ec1a0b1ad2844e9597aa51bc761d7463c1',
    },
    dob: {
      date: '1962-02-23T03:40:49Z',
      age: 57,
    },
    registered: {
      date: '2010-08-07T01:06:57Z',
      age: 8,
    },
    phone: '09-905-242',
    cell: '048-236-55-78',
    id: {
      name: 'HETU',
      value: 'NaNNA390undefined',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/26.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/26.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/26.jpg',
    },
    nat: 'FI',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'oliver',
      last: 'johnson',
    },
    location: {
      street: '2763 15th st',
      city: 'stirling',
      state: 'québec',
      postcode: 'Z9E 9R1',
      coordinates: {
        latitude: '-20.0251',
        longitude: '-9.2915',
      },
      timezone: {
        offset: '+11:00',
        description: 'Magadan, Solomon Islands, New Caledonia',
      },
    },
    email: 'oliver.johnson@example.com',
    login: {
      uuid: '9830fd5e-b49b-4467-9071-fa90cb8bca6c',
      username: 'yellowsnake767',
      password: 'gunners',
      salt: 'qMNMDKry',
      md5: '248f23587e2b660478e973442cf25af1',
      sha1: '7293bb744a4daf3a4a0282b399398800b4c8fe17',
      sha256:
        '1e60012237c285590d3a615dc86ee1a36044fb3a577aa41c89c61ccb40cc559b',
    },
    dob: {
      date: '1968-08-27T09:42:18Z',
      age: 50,
    },
    registered: {
      date: '2009-02-03T23:23:03Z',
      age: 10,
    },
    phone: '273-647-2052',
    cell: '823-523-5092',
    id: {
      name: '',
      value: null,
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/80.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/80.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/80.jpg',
    },
    nat: 'CA',
  },
  {
    gender: 'male',
    name: {
      title: 'mr',
      first: 'bobby',
      last: 'horton',
    },
    location: {
      street: '890 stanley road',
      city: 'preston',
      state: 'cheshire',
      postcode: 'RX27 7BP',
      coordinates: {
        latitude: '-9.6028',
        longitude: '132.7671',
      },
      timezone: {
        offset: '-3:30',
        description: 'Newfoundland',
      },
    },
    email: 'bobby.horton@example.com',
    login: {
      uuid: '13f5b90f-cbd0-434e-a3f9-a0dc41cbce05',
      username: 'heavycat572',
      password: 'kelvin',
      salt: 'xVsRhPth',
      md5: '36dfce42840e3c773c49000eb04c3f91',
      sha1: '63a2e5a77ab2b6c957bdf74defeb23f9b756fba2',
      sha256:
        '99569a888d66f9410a35ca25a2805c1df9a140cb6208cb76ad50653ee186945c',
    },
    dob: {
      date: '1983-07-25T21:48:43Z',
      age: 35,
    },
    registered: {
      date: '2008-07-18T21:22:48Z',
      age: 10,
    },
    phone: '019467 69243',
    cell: '0700-450-905',
    id: {
      name: 'NINO',
      value: 'RS 50 10 80 N',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/32.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/32.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/32.jpg',
    },
    nat: 'GB',
  },
];

export default contacts;
