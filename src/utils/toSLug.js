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

export default function toSlug(str) {
  const result = chuyenDauThanhKhongDau(str)
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
    .replaceAll(' ', '-');
  return result;
}
