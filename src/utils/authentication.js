export default function handleAuthentication(
  userData,
  inputEmail,
  inputPassword
) {
  if (!inputEmail || !inputEmail) {
    alert('Vui lòng nhập thông tin đầy đủ');
  }
  userData.forEach((user) => {
    if (user.username === inputEmail && user.password === inputPassword) {
      alert('Đăng nhập thành công');
      return user;
    }
  });
}
