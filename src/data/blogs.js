const blogs = [
  {
    id: 1,
    createAt: '2023-08-24',
    title: 'Là lập trình viên thì có nên chỉ viết code thôi không ?',
    img: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1704240145/CSD%20Vietnam/Blog/pfbtgwf5iq6d2gk5kgee.jpg ',
    description:
      'Các bạn nên tìm tòi học hỏi thêm nhiều thứ khác để có thể nâng cao kiến thức và cải thiện thêm nhiều kỹ năng khác nữa. Từ đó có thể tạo ra thêm thu nhập hoặc ít nhất là có kiến thức rộng hơn.',
    content: '#Hello\n*test*',
    tag: ['dev', 'about-us'],
  },
  {
    id: 2,
    createAt: '2024-03-01',
    title: 'Trò chuyện cùng CSD - WorldSkills 2023',
    img: 'https://res.cloudinary.com/dqx1guyc0/image/upload/v1704245858/CSD%20Vietnam/Blog/cfklalf9rfukkwrg8znb.jpg',
    description:
      'Hi cả nhà! Hôm nay, chúng ta hãy cùng lắng nghe câu chuyện đầy cảm hứng của tuyển tay nghề thiết kế kỹ thuật cơ khí.',
    content:
      'H\u00e0nh tr\u00ecnh \u0111\u1ea1t th\u00e0nh t\u00edch xu\u1ea5t s\u1eafc t\u1ea1i k\u1ef3 thi tay ngh\u1ec1 th\u00e0nh ph\u1ed1 HCM v\u00e0 WorldSkills Samsung 2023\n\nHi c\u1ea3 nh\u00e0 ! H\u00f4m nay, ch\u00fang ta h\u00e3y c\u00f9ng l\u1eafng nghe c\u00e2u chuy\u1ec7n \u0111\u1ea7y c\u1ea3m h\u1ee9ng\nc\u1ee7a tuy\u1ec3n tay ngh\u1ec1 thi\u1ebft k\u1ebf k\u1ef9 thu\u1eadt c\u01a1 kh\u00ed - CAD \u0111\u00e3 v\u01b0\u1ee3t qua m\u1ecdi kh\u00f3\nkh\u0103n \u0111\u1ec3 \u0111\u1ea1t th\u00e0nh t\u00edch xu\u1ea5t s\u1eafc t\u1ea1i k\u1ef3 thi tay ngh\u1ec1 th\u00e0nh ph\u1ed1 HCM v\u00e0\nWorldSkills Samsung!\n\nLet\u2019s go\n\nC\u00f9ng CSD chia s\u1ebb video n\u00e0y \u0111\u1ec3 lan t\u1ecfa c\u1ea3m h\u1ee9ng v\u00e0 \u0111\u1ed9ng vi\u00ean cho nh\u1eefng\nt\u00e0i n\u0103ng tr\u1ebb c\u1ee7a ch\u00fang ta!',
    tag: ['about-us'],
  },
];

function chuyenDauThanhKhongDau(str) {
  const dauCoDau =
    'àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ';
  const dauKhongDau =
    'aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd';

  for (let i = 0; i < dauCoDau.length; i++) {
    const charRegExp = new RegExp(dauCoDau[i], 'g');
    str = str.replace(charRegExp, dauKhongDau[i]);
  }

  return str;
}

const result = blogs.map((blog) => ({
  ...blog,
  url: chuyenDauThanhKhongDau(blog.title)
    .toLowerCase()
    .trim()
    .replaceAll(' ?', '')
    .replaceAll('. ', '')
    .replaceAll('?', '')
    .replaceAll(', ', '')
    .replaceAll(': ', '')
    .replaceAll(' !', '')
    .replaceAll(' :', '')
    .replaceAll(' &', '')
    .replaceAll(' -', '')
    .replaceAll(' ', '-'),
}));

export default result;
