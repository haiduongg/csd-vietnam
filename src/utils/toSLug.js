export default function toSlug(title) {
  // Chuyển hết sang chữ thường
  title = title.toLowerCase();

  // xóa dấu
  title = title
    .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  title = title.replace(/[đĐ]/g, 'd');

  // Xóa ký tự đặc biệt
  title = title.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  title = title.replace(/(\s+)/g, '-');

  // Xóa ký tự - liên tiếp
  title = title.replace(/-+/g, '-');

  // xóa phần dư - ở đầu & cuối
  title = title.replace(/^-+|-+$/g, '');

  // return
  return title;
}
