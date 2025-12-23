/*index*/
const passwordInput = document.getElementById('passwordInput'); // เปลี่ยนให้ตรงกับ HTML
const runButton = document.getElementById('runbutton');
const messageDiv = document.getElementById('message');

runButton.addEventListener('click', () => {
    const password = passwordInput.value;
    
    // ใช้ || สำหรับเชื่อมเงื่อนไข "หรือ"
    if (password === '291223' || password === '29/12/23') {
        // ออกจากโฟลเดอร์ page1 ไปหา page2
        window.location.href = 'page2.html'; 
    } else {
        messageDiv.textContent = 'รหัสผ่านไม่ถูกต้อง';
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 2000);
    }
});