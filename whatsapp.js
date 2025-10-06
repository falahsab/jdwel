  // الكلمة التي نبحث عنها في رابط الصفحة
  const targetWord = "products"; // عدلها بما يناسبك

  // رقم الواتساب (بدون + أو صفر في البداية، مثال: 9677XXXXXXXX)
  const phoneNumber = "967738092209"; // ضع رقمك هنا

  const btnContainer = document.getElementById("whatsapp-btn");
  const whatsappLink = document.getElementById("whatsapp-link");

  function updateWhatsAppBtn() {
    const currentUrl = window.location.href;

    if (currentUrl.includes(targetWord)) {
      // إظهار الزر
      btnContainer.style.display = "block";

      // تحديث رابط واتساب بالنص + رابط الصفحة
      const message = "مرحباً، أود إتمام عملية الشراء عبر هذه الصفحة:\n" + currentUrl;
      whatsappLink.href = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    } else {
      // إخفاء الزر إذا الرابط لا يحتوي الكلمة
      btnContainer.style.display = "none";
    }
  }

  // تحديث عند تحميل الصفحة
  updateWhatsAppBtn();

  // مراقبة تغيّر الرابط (مفيد في مواقع SPA)
  const observer = new MutationObserver(() => {
    updateWhatsAppBtn();
  });
  observer.observe(document, {subtree: true, childList: true});

  // عند النقر يتم تحديث الصفحة بعد فتح واتساب
  whatsappLink.addEventListener("click", function() {
    setTimeout(() => {
      location.reload();
    }, 2000);
  });
