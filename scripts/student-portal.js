// Student Portal functionality
document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const changePhotoBtn = document.getElementById('changePhoto');
    const profilePhotoImg = document.getElementById('profilePhoto');

    // Load saved profile data
    loadProfileData();

    // Handle form submission
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveProfileData();
    });

    // Handle photo change
    changePhotoBtn.addEventListener('click', () => {
        // Create a file input
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Update the image preview
                    profilePhotoImg.src = e.target.result;
                    // Save the image to localStorage (in practice, you'd upload to a server)
                    localStorage.setItem('studentProfilePhoto', e.target.result);
                };
                reader.readAsDataURL(file);
            }
        };
        
        input.click();
    });

    function loadProfileData() {
        // Load saved data from localStorage
        const savedPhone = localStorage.getItem('studentPhone');
        const savedDob = localStorage.getItem('studentDob');
        const savedPhoto = localStorage.getItem('studentProfilePhoto');

        if (savedPhone) {
            document.getElementById('phone').value = savedPhone;
        }
        if (savedDob) {
            document.getElementById('dob').value = savedDob;
        }
        if (savedPhoto) {
            profilePhotoImg.src = savedPhoto;
        }
    }

    function saveProfileData() {
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;

        // Save to localStorage (in practice, you'd save to a server)
        localStorage.setItem('studentPhone', phone);
        localStorage.setItem('studentDob', dob);

        // Show success message
        showToast('Profile updated successfully!');
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
});